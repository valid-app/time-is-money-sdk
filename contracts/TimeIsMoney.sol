// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "./interfaces/TimeIsMoneyI.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TimeIsMoney is TimeIsMoneyI, ReentrancyGuard {
    using SafeERC20 for IERC20;
    
    IERC20 public override immutable token;
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
     * @param token_ The address of the ERC20 token we are going to hold hostage.
     * @param maximumTotalLock_ The maximum number of tokens we are going to hold hostage.
     * @param minimumLockTime_ The minimum amount of time (in seconds) that tokens should be held hostage.
     * @param endOfEntryPeriod_ The time we stop accepting new hostages.
     * @param perAddressCap_ The limit per address, or 0 for unlimited.
     */
    constructor(address token_, uint256 maximumTotalLock_, uint minimumLockTime_, uint startOfEntryPeriod_, uint endOfEntryPeriod_, uint perAddressCap_) {
        token = IERC20(token_);
        maximumTotalLock = maximumTotalLock_;
        minimumLockTime = minimumLockTime_;
        startOfEntryPeriod = startOfEntryPeriod_;
        endOfEntryPeriod = endOfEntryPeriod_;
        perAddressCap = perAddressCap_;
    }
    
    /**
     * @dev Lock some tokens up! The sender must have already approved this contract to spend the ERC20 token. Fails if tokens are already locked.
     */
    function lock(uint256 amount) external override nonReentrant {
        require(block.timestamp >= startOfEntryPeriod, "It's too early to do this!");
        require(block.timestamp < endOfEntryPeriod, "Sorry, you ate too late!");
        require(lockAmount[msg.sender] == 0, "You have already participated in this.");
        require(amount > 0, "You cannot lock nothing!");
        require(amount <= perAddressCap, "You cannot lock over the limit!");
        require(amount <= maximumTotalLock - totalLocked, "This deposit would cause our total locked amount to exceed the maximum.");
        token.safeTransferFrom(msg.sender, address(this), amount);
        lockAmount[msg.sender] = amount;
        totalLocked += amount;
        releaseTime[msg.sender] = block.timestamp + minimumLockTime;
        emit Deposit(msg.sender, amount);
    }
    
    /**
     * @dev Withdraw tokens! If you withdraw too early you will not receive credit.
     * 
     * @param allowWithdrawalBeforeRelease Whether or not to allow an early withdrawal.
     */
    function withdraw(bool allowWithdrawalBeforeRelease) external override nonReentrant {
        require(!withdrawn[msg.sender] && lockAmount[msg.sender] > 0, "No tokens available to withdraw.");
        uint256 amount = lockAmount[msg.sender];
        if (block.timestamp < releaseTime[msg.sender]) {
            require(allowWithdrawalBeforeRelease, "Your tokens were not locked long enough!");
            lockAmount[msg.sender] = 0;
            releaseTime[msg.sender] = 0;
            totalLocked -= amount;
            token.safeTransfer(msg.sender, amount);
            emit Withdrawal(msg.sender, amount, false);
        } else {
            withdrawn[msg.sender] = true;
            token.safeTransfer(msg.sender, amount);
            emit Withdrawal(msg.sender, amount, true);
        }
    }

    /**
     * @dev Get the amount of credit an address has.
     * 
     * @return The amount of credit an address has.
     */
    function getCredit(address account) external override view returns (uint256) {
        if (block.timestamp < releaseTime[account]) {
            return 0;
        }
        return lockAmount[account];
    }

    /**
     * @dev Check if an account's hostage tokens are ready to be withdrawn.
     * 
     * @return true if the account's hostage tokens are ready to be withdrawn.
     */
    function readyToWithdraw(address account) external override view returns (bool) {
        return lockAmount[account] > 0 && block.timestamp >= releaseTime[account] && !withdrawn[account];
    }
}
