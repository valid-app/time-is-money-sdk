// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "./interfaces/TimeIsMoneyEtherI.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TimeIsMoneyEther is TimeIsMoneyEtherI, ReentrancyGuard {
    
    uint256 public override immutable maximumTotalLock;
    uint256 public override immutable minimumLockTime;
    uint256 public override immutable startOfEntryPeriod;
    uint256 public override immutable endOfEntryPeriod;
    uint256 public override immutable perAddressCap;
    
    uint256 public override totalLocked;
    mapping(address => uint256) public override lockAmount;
    mapping(address => uint256) public override releaseTime;
    mapping(address => bool) public override withdrawn;
    
    /**
     * @dev Create a new TimeIsMoney contract.
     * 
     * @param maximumTotalLock_ The maximum number of ethers we are going to hold hostage.
     * @param minimumLockTime_ The minimum amount of time (in seconds) that ethers should be held hostage.
     * @param endOfEntryPeriod_ The time we stop accepting new hostages.
     * @param perAddressCap_ The limit per address, or 0 for unlimited.
     */
    constructor(uint256 maximumTotalLock_, uint minimumLockTime_, uint startOfEntryPeriod_, uint endOfEntryPeriod_, uint perAddressCap_) {
        maximumTotalLock = maximumTotalLock_;
        minimumLockTime = minimumLockTime_;
        startOfEntryPeriod = startOfEntryPeriod_;
        endOfEntryPeriod = endOfEntryPeriod_;
        perAddressCap = perAddressCap_;
    }
    
    /**
     * @dev Lock some ethers up! Fails if ethers are already locked.
     */
    function lock() public override payable nonReentrant {
        uint256 amount = msg.value;
        require(block.timestamp >= startOfEntryPeriod, "It's too early to do this!");
        require(block.timestamp < endOfEntryPeriod, "Sorry, you ate too late!");
        require(lockAmount[msg.sender] == 0, "You have already participated in this.");
        require(amount > 0, "You cannot lock nothing!");
        require(amount <= perAddressCap, "You cannot lock over the limit!");
        require(amount <= maximumTotalLock - totalLocked, "This deposit would cause our total locked amount to exceed the maximum.");
        lockAmount[msg.sender] = amount;
        totalLocked += amount;
        releaseTime[msg.sender] = block.timestamp + minimumLockTime;
        emit Deposit(msg.sender, amount);
    }
    
    function safeTransferETH(address payable to, uint value) internal {
        (bool success,) = to.call{value:value}(new bytes(0));
        require(success, 'TransferHelper: ETH_TRANSFER_FAILED');
    }

    /**
     * @dev Withdraw ethers! If you withdraw too early you will not receive credit.
     * 
     * @param allowWithdrawalBeforeRelease Whether or not to allow an early withdrawal.
     */
    function withdraw(bool allowWithdrawalBeforeRelease) public override nonReentrant {
        require(!withdrawn[msg.sender] && lockAmount[msg.sender] > 0, "No ethers available to withdraw.");
        uint256 amount = lockAmount[msg.sender];
        if (block.timestamp < releaseTime[msg.sender]) {
            require(allowWithdrawalBeforeRelease, "Your ethers were not locked long enough!");
            lockAmount[msg.sender] = 0;
            releaseTime[msg.sender] = 0;
            totalLocked -= amount;
            safeTransferETH(payable(msg.sender), amount);
            emit Withdrawal(msg.sender, amount, false);
        } else {
            withdrawn[msg.sender] = true;
            safeTransferETH(payable(msg.sender), amount);
            emit Withdrawal(msg.sender, lockAmount[msg.sender], true);
        }
    }

    /**
     * @dev Get the amount of credit an address has.
     * 
     * @return The amount of credit an address has.
     */
    function getCredit(address account) public override view returns (uint256) {
        if (block.timestamp < releaseTime[account]) {
            return 0;
        }
        return lockAmount[account];
    }

    /**
     * @dev Check if an account's hostage ethers are ready to be withdrawn.
     * 
     * @return true if the account's hostage ethers are ready to be withdrawn.
     */
    function readyToWithdraw(address account) public override view returns (bool) {
        return lockAmount[account] > 0 && block.timestamp >= releaseTime[account] && !withdrawn[account];
    }
}
