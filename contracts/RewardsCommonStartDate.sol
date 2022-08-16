// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./interfaces/TimeIsMoneyI.sol";

contract RewardsCommonStartDate is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 immutable public token;
    TimeIsMoneyI immutable public timeIsMoney;
    uint256 immutable public multiplier;
    uint256 immutable public initialReward;
    uint256 immutable remainingReward;
    uint256 immutable public vestingStartDate;
    uint256 immutable public vestingPeriod;
    uint256 immutable public claimDeadline;
    address immutable public admin;
    
    mapping(address => uint256) public claimSoFar;
    
    event Claim(address indexed account, uint256 amount, uint256 totalSoFar);
    event AdminDrain(uint256 amount);
    
    constructor(TimeIsMoneyI timeIsMoney_, IERC20 token_, uint256 multiplier_, uint256 initialReward_, uint256 vestingStartDate_, uint256 vestingPeriod_, uint256 claimDeadline_, address admin_) {
        require(initialReward_ <= 1e18, "Initial reward too large");
        require(admin_ != address(0), "Invalid admin address");
        require(address(token_) != address(0), "Invalid reward token");
        require(vestingStartDate_ >= timeIsMoney_.endOfEntryPeriod() + timeIsMoney_.minimumLockTime(), "Invalid vesting start date");
        token = token_;
        timeIsMoney = timeIsMoney_;
        multiplier = multiplier_;
        initialReward = initialReward_;
        remainingReward = 1e18 - initialReward_;
        vestingStartDate = vestingStartDate_;
        vestingPeriod = vestingPeriod_;
        claimDeadline = claimDeadline_;
        admin = admin_;
    }
    function putFund(address from, uint256 amount) external {
        token.safeTransferFrom(from, address(this), amount);
    }
    
    function unclaimed() external view returns (uint256) {
        return _rewardForAccount(msg.sender) - claimSoFar[msg.sender];
    }
    function unclaimedForAccount(address account) external view returns (uint256) {
        return _rewardForAccount(account) - claimSoFar[account];
    }

    function reward() external view returns (uint256) {
        return _rewardForAccount(msg.sender);
    }
    function rewardForAccount(address account) external view returns (uint256) {
        return _rewardForAccount(account);
    }
    function _rewardForAccount(address account) internal view returns (uint256) {
        uint256 timeBasedMultiplier;
        uint256 claimTimeL = timeIsMoney.releaseTime(account);
        require(claimTimeL > 0, "You are not a partitioner.");
        require(block.timestamp > vestingStartDate, "Rewards has not started yet.");
        timeBasedMultiplier = initialReward;
        uint256 timePassed = block.timestamp - vestingStartDate;
        if (timePassed >= vestingPeriod) {
            timeBasedMultiplier += remainingReward;
        } else {
            timeBasedMultiplier += remainingReward * timePassed / vestingPeriod;
        }

        uint256 rewardMultiplier = timeBasedMultiplier * multiplier / 1e18;
        uint256 currentReward = timeIsMoney.getCredit(account) * rewardMultiplier / 1e18;
        return currentReward;
    }
    function claim() external nonReentrant {
        _claimFor(msg.sender);
    }
    function claimFor(address account) external nonReentrant {
        _claimFor(account);
    }
    function _claimFor(address account) internal {
        uint256 totalClaim = _rewardForAccount(account);
        uint256 unclaimedAmount = totalClaim - claimSoFar[account];
        require(unclaimedAmount > 0, "You have nothing to claim!");
        claimSoFar[account] = totalClaim;
        token.safeTransfer(account, unclaimedAmount);
        emit Claim(account, unclaimedAmount, totalClaim);
    }
    function takeUnclaimed() external {
        require(msg.sender == admin, "Only the admin can do this!");
        require(claimDeadline > 0, "No claim deadline set.");
        require(block.timestamp >= claimDeadline, "It's too early to do this.");
        uint256 amount = token.balanceOf(address(this));
        token.safeTransfer(admin, amount);
        emit AdminDrain(amount);
    }
}
