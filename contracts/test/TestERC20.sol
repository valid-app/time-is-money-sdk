// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract TestERC20 is ERC20PresetMinterPauser {
    uint8 public immutable _decimals;
    constructor(string memory name, string memory symbol, uint8 __decimals) 
        ERC20PresetMinterPauser(name, symbol) 
    {
        _decimals = __decimals;
    }
    
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}