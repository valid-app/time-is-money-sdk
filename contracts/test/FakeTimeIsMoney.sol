// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "../interfaces/TimeIsMoneyI.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// A FakeTimeIsMoney contract that returns a set amount for every address

contract FakeTimeIsMoney is TimeIsMoneyI {
    constructor(IERC20 token_) {
        token = token_;
        amount = 10_000_000_000_000_000_000;
    }
    IERC20 public immutable override token;
    uint256 public amount;
    function setAmount(uint256 amount_) external {
        amount = amount_;
    }
    function maximumTotalLock() external view override returns (uint256) {
        return amount;
    }
    function minimumLockTime() external pure override returns (uint256) {
        return 0;
    }
    function startOfEntryPeriod() external pure override returns (uint256) {
        return 0;
    }
    function endOfEntryPeriod() external pure override returns (uint256) {
        return 0;
    }
    function totalLocked() external view override returns (uint256) {
        return amount;
    }
    function perAddressCap() external view override returns (uint256) {
        return amount;
    }
    
    function lockAmount(address) external view override returns (uint256) {
        return amount;
    }
    function releaseTime(address) external pure override returns (uint256) {
        return 0;
    }
    function withdrawn(address) external pure override returns (bool) {
        return true;
    }

    function lock(uint256) external pure override {
        revert("Not supported on FakeTimeIsMoney");
    }

    function withdraw(bool) external pure override {
        revert("Not supported on FakeTimeIsMoney");
    }

    function getCredit(address) external view override returns (uint256) {
        return amount;
    }

    function readyToWithdraw(address) external pure override returns (bool) {
        return true;
    }
}
