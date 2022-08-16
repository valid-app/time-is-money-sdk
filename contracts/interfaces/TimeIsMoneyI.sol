// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface TimeIsMoneyI {
    function token() external view returns (IERC20);
    function maximumTotalLock() external view returns (uint256);
    function minimumLockTime() external view returns (uint256);
    function startOfEntryPeriod() external view returns (uint256);
    function endOfEntryPeriod() external view returns (uint256);
    function totalLocked() external view returns (uint256);
    function perAddressCap() external view returns (uint256);
    
    function lockAmount(address) external view returns (uint256);
    function releaseTime(address) external view returns (uint256);
    function withdrawn(address) external view returns (bool);
    
    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount, bool heldLongEnough);
    
    /**
     * @dev Lock some tokens up! The sender must have already approved this contract to spend the ERC20 token. Fails if tokens are already locked.
     */
    function lock(uint256 amount) external;
    
    /**
     * @dev Withdraw tokens! If you withdraw too early you will not receive credit.
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
     * @dev Check if an account's hostage tokens are ready to be withdrawn.
     * 
     * @return true if the account's hostage tokens are ready to be withdrawn.
     */
    function readyToWithdraw(address account) external view returns (bool);
}
