// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

interface TimeIsMoneyEtherI {
    function maximumTotalLock() external returns (uint256);
    function minimumLockTime() external returns (uint256);
    function startOfEntryPeriod() external returns (uint256);
    function endOfEntryPeriod() external returns (uint256);
    function totalLocked() external returns (uint256);
    function perAddressCap() external returns (uint256);
    
    function lockAmount(address) external returns (uint256);
    function releaseTime(address) external returns (uint256);
    function withdrawn(address) external returns (bool);
    
    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount, bool heldLongEnough);
    
    /**
     * @dev Lock some ethers up! Fails if ethers are already locked.
     */
    function lock() external payable;
    
    /**
     * @dev Withdraw ethers! If you withdraw too early you will not receive credit.
     * 
     * @param allowWithdrawalBeforeRelease Whether or not to allow an early withdrawal.
     */
    function withdraw(bool allowWithdrawalBeforeRelease) external;

    /**
     * @dev Get the amount of credit an address has.
     * 
     * @return The amount of credit an address has.
     */
    function getCredit(address account) external view returns (uint256);

    /**
     * @dev Check if an account's hostage ethers are ready to be withdrawn.
     * 
     * @return true if the account's hostage ethers are ready to be withdrawn.
     */
    function readyToWithdraw(address account) external view returns (bool);
}
