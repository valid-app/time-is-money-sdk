define('@ijstech/time-is-money-sdk', (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.ts
__export(exports, {
  Contracts: () => contracts_exports
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  ERC20: () => ERC20,
  ERC20PresetMinterPauser: () => ERC20PresetMinterPauser,
  FakeTimeIsMoney: () => FakeTimeIsMoney,
  Rewards: () => Rewards,
  RewardsCommonStartDate: () => RewardsCommonStartDate,
  TestERC20: () => TestERC20,
  TimeIsMoney: () => TimeIsMoney,
  TimeIsMoneyEther: () => TimeIsMoneyEther
});

// src/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts
var ERC20_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b5060405162000ded38038062000ded8339810160408190526200003491620001c1565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b600181811c908216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610b62806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610194578063a9059cbb146101a7578063dd62ed3e146101ba57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461018c57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610200565b6040516100e39190610a2a565b60405180910390f35b6100ff6100fa366004610a01565b610292565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f3660046109c6565b6102aa565b604051601281526020016100e3565b6100ff610151366004610a01565b6102ce565b610113610164366004610973565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100d661031a565b6100ff6101a2366004610a01565b610329565b6100ff6101b5366004610a01565b6103ff565b6101136101c8366004610994565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020f90610ad8565b80601f016020809104026020016040519081016040528092919081815260200182805461023b90610ad8565b80156102885780601f1061025d57610100808354040283529160200191610288565b820191906000526020600020905b81548152906001019060200180831161026b57829003601f168201915b5050505050905090565b6000336102a081858561040d565b5060019392505050565b6000336102b88582856105c0565b6102c3858585610697565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102a09082908690610315908790610a9b565b61040d565b60606004805461020f90610ad8565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156103f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102c3828686840361040d565b6000336102a0818585610697565b73ffffffffffffffffffffffffffffffffffffffff83166104af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff8216610552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106915781811015610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103e9565b610691848484840361040d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff82166107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082208585039055918516815290812080548492906108d7908490610a9b565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161093d91815260200190565b60405180910390a3610691565b803573ffffffffffffffffffffffffffffffffffffffff8116811461096e57600080fd5b919050565b600060208284031215610984578081fd5b61098d8261094a565b9392505050565b600080604083850312156109a6578081fd5b6109af8361094a565b91506109bd6020840161094a565b90509250929050565b6000806000606084860312156109da578081fd5b6109e38461094a565b92506109f16020850161094a565b9150604084013590509250925092565b60008060408385031215610a13578182fd5b610a1c8361094a565b946020939093013593505050565b6000602080835283518082850152825b81811015610a5657858101830151858201604001528201610a3a565b81811115610a675783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610ad3577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b600181811c90821680610aec57607f821691505b60208210811415610b26577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea26469706673582212207e1188179a2ec2d71a830e14508575abf5fda1df1955826b145b51f575550cdc64736f6c63430008040033"
};

// src/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts
var ERC20 = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, ERC20_json_default.abi, ERC20_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet.BigNumber(result.value),
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet.BigNumber(result.value),
      _event: event
    };
  }
  async allowance(params) {
    let result = await this.call("allowance", [params.owner, params.spender]);
    return new import_eth_wallet.BigNumber(result);
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.spender, import_eth_wallet.Utils.toString(params.amount)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.spender, import_eth_wallet.Utils.toString(params.amount)]);
    return result;
  }
  async balanceOf(account) {
    let result = await this.call("balanceOf", [account]);
    return new import_eth_wallet.BigNumber(result);
  }
  async decimals() {
    let result = await this.call("decimals");
    return new import_eth_wallet.BigNumber(result);
  }
  async decreaseAllowance_send(params) {
    let result = await this.send("decreaseAllowance", [params.spender, import_eth_wallet.Utils.toString(params.subtractedValue)]);
    return result;
  }
  async decreaseAllowance_call(params) {
    let result = await this.call("decreaseAllowance", [params.spender, import_eth_wallet.Utils.toString(params.subtractedValue)]);
    return result;
  }
  async increaseAllowance_send(params) {
    let result = await this.send("increaseAllowance", [params.spender, import_eth_wallet.Utils.toString(params.addedValue)]);
    return result;
  }
  async increaseAllowance_call(params) {
    let result = await this.call("increaseAllowance", [params.spender, import_eth_wallet.Utils.toString(params.addedValue)]);
    return result;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async totalSupply() {
    let result = await this.call("totalSupply");
    return new import_eth_wallet.BigNumber(result);
  }
  async transfer_send(params) {
    let result = await this.send("transfer", [params.to, import_eth_wallet.Utils.toString(params.amount)]);
    return result;
  }
  async transfer_call(params) {
    let result = await this.call("transfer", [params.to, import_eth_wallet.Utils.toString(params.amount)]);
    return result;
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.amount)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.amount)]);
    return result;
  }
  assign() {
    this.approve = Object.assign(this.approve_send, { call: this.approve_call });
    this.decreaseAllowance = Object.assign(this.decreaseAllowance_send, { call: this.decreaseAllowance_call });
    this.increaseAllowance = Object.assign(this.increaseAllowance_send, { call: this.increaseAllowance_call });
    this.transfer = Object.assign(this.transfer_send, { call: this.transfer_call });
    this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
  }
};

// src/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.json.ts
var ERC20PresetMinterPauser_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
    { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b506040516200263b3803806200263b83398101604081905262000034916200039b565b8151829082906200004d90600590602085019062000242565b5080516200006390600690602084019062000242565b50506007805460ff19169055506200007d600033620000dd565b620000a97f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000dd565b620000d57f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33620000dd565b505062000455565b620000e98282620000ed565b5050565b6200010482826200013060201b62000aa41760201c565b60008281526001602090815260409091206200012b91839062000b94620001d0821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000e9576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200018c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001e7836001600160a01b038416620001f0565b90505b92915050565b60008181526001830160205260408120546200023957508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001ea565b506000620001ea565b828054620002509062000402565b90600052602060002090601f016020900481019282620002745760008555620002bf565b82601f106200028f57805160ff1916838001178555620002bf565b82800160010185558215620002bf579182015b82811115620002bf578251825591602001919060010190620002a2565b50620002cd929150620002d1565b5090565b5b80821115620002cd5760008155600101620002d2565b600082601f830112620002f9578081fd5b81516001600160401b03808211156200031657620003166200043f565b604051601f8301601f19908116603f011681019082821181831017156200034157620003416200043f565b816040528381526020925086838588010111156200035d578485fd5b8491505b8382101562000380578582018301518183018401529082019062000361565b838211156200039157848385830101525b9695505050505050565b60008060408385031215620003ae578182fd5b82516001600160401b0380821115620003c5578384fd5b620003d386838701620002e8565b93506020850151915080821115620003e9578283fd5b50620003f885828601620002e8565b9150509250929050565b600181811c908216806200041757607f821691505b602082108114156200043957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6121d680620004656000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d5391393146103fa578063d547741f14610421578063dd62ed3e14610434578063e63ab1e91461047a57600080fd5b8063a457c2d7146103c1578063a9059cbb146103d4578063ca15c873146103e757600080fd5b80639010d07c116100d35780639010d07c1461033557806391d148541461036d57806395d89b41146103b1578063a217fddf146103b957600080fd5b806370a08231146102e457806379cc67901461031a5780638456cb591461032d57600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102ab57806340c10f19146102b357806342966c68146102c65780635c975abb146102d957600080fd5b8063313ce5671461027657806336568abe14610285578063395093511461029857600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611f3e565b6104a1565b60405190151581526020015b60405180910390f35b6101f96104fd565b6040516101e89190611fff565b6101dc610214366004611eba565b61058f565b6004545b6040519081526020016101e8565b6101dc610239366004611e7f565b6105a7565b61021d61024c366004611ee3565b60009081526020819052604090206001015490565b61027461026f366004611efb565b6105cb565b005b604051601281526020016101e8565b610274610293366004611efb565b6105f6565b6101dc6102a6366004611eba565b6106ae565b6102746106fa565b6102746102c1366004611eba565b6107ba565b6102746102d4366004611ee3565b61087a565b60075460ff166101dc565b61021d6102f2366004611e33565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b610274610328366004611eba565b610887565b61027461089c565b610348610343366004611f1d565b61095a565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b6101dc61037b366004611efb565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101f9610979565b61021d600081565b6101dc6103cf366004611eba565b610988565b6101dc6103e2366004611eba565b610a59565b61021d6103f5366004611ee3565b610a67565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61027461042f366004611efb565b610a7e565b61021d610442366004611e4d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f0000000000000000000000000000000000000000000000000000000014806104f757506104f782610bb6565b92915050565b60606005805461050c9061211d565b80601f01602080910402602001604051908101604052809291908181526020018280546105389061211d565b80156105855780601f1061055a57610100808354040283529160200191610585565b820191906000526020600020905b81548152906001019060200180831161056857829003601f168201915b5050505050905090565b60003361059d818585610c4d565b5060019392505050565b6000336105b5858285610e00565b6105c0858585610ed7565b506001949350505050565b6000828152602081905260409020600101546105e78133611195565b6105f18383611265565b505050565b73ffffffffffffffffffffffffffffffffffffffff811633146106a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6106aa8282611287565b5050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061059d90829086906106f5908790612050565b610c4d565b6107247f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361037b565b6107b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e7061757365000000000000006064820152608401610697565b6107b86112a9565b565b6107e47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361037b565b610870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e74000000000000000000006064820152608401610697565b6106aa828261138a565b61088433826114b6565b50565b610892823383610e00565b6106aa82826114b6565b6108c67f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361037b565b610952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f2070617573650000000000000000006064820152608401610697565b6107b86116af565b6000828152600160205260408120610972908361176f565b9392505050565b60606006805461050c9061211d565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610a4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610697565b6105c08286868403610c4d565b60003361059d818585610ed7565b60008181526001602052604081206104f79061177b565b600082815260208190526040902060010154610a9a8133611195565b6105f18383611287565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106aa5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610b363390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109728373ffffffffffffffffffffffffffffffffffffffff8416611785565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806104f757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146104f7565b73ffffffffffffffffffffffffffffffffffffffff8316610cef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff8216610d92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610ed15781811015610ec4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610697565b610ed18484848403610c4d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff821661101d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610697565b6110288383836117d4565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902054818110156110de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260026020526040808220858503905591851681529081208054849290611122908490612050565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161118891815260200190565b60405180910390a3610ed1565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166106aa576111eb8173ffffffffffffffffffffffffffffffffffffffff1660146117df565b6111f68360206117df565b604051602001611207929190611f7e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261069791600401611fff565b61126f8282610aa4565b60008281526001602052604090206105f19082610b94565b6112918282611ae5565b60008281526001602052604090206105f19082611b9c565b60075460ff16611315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610697565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff8216611407576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610697565b611413600083836117d4565b80600460008282546114259190612050565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260408120805483929061145f908490612050565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611559576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610697565b611565826000836117d4565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260409020548181101561161b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610697565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604081208383039055600480548492906116579084906120a5565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff161561171c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610697565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113603390565b60006109728383611bbe565b60006104f7825490565b60008181526001830160205260408120546117cc575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104f7565b5060006104f7565b6105f1838383611c0f565b606060006117ee836002612068565b6117f9906002612050565b67ffffffffffffffff811115611838577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611862576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106118c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061194a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611986846002612068565b611991906001612050565b90505b6001811115611a7c577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106119f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110611a36577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611a75816120e8565b9050611994565b508315610972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610697565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156106aa5760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109728373ffffffffffffffffffffffffffffffffffffffff8416611ca2565b6000826000018281548110611bfc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b60075460ff16156105f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c6520706175736564000000000000000000000000000000000000000000006064820152608401610697565b60008181526001830160205260408120548015611e00576000611cc66001836120a5565b8554909150600090611cda906001906120a5565b9050818114611d8d576000866000018281548110611d21577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110611d6b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611dc5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104f7565b60009150506104f7565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e2e57600080fd5b919050565b600060208284031215611e44578081fd5b61097282611e0a565b60008060408385031215611e5f578081fd5b611e6883611e0a565b9150611e7660208401611e0a565b90509250929050565b600080600060608486031215611e93578081fd5b611e9c84611e0a565b9250611eaa60208501611e0a565b9150604084013590509250925092565b60008060408385031215611ecc578182fd5b611ed583611e0a565b946020939093013593505050565b600060208284031215611ef4578081fd5b5035919050565b60008060408385031215611f0d578182fd5b82359150611e7660208401611e0a565b60008060408385031215611f2f578182fd5b50508035926020909101359150565b600060208284031215611f4f578081fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610972578182fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611fb68160178501602088016120bc565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611ff38160288401602088016120bc565b01602801949350505050565b602081526000825180602084015261201e8160408501602087016120bc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000821982111561206357612063612171565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120a0576120a0612171565b500290565b6000828210156120b7576120b7612171565b500390565b60005b838110156120d75781810151838201526020016120bf565b83811115610ed15750506000910152565b6000816120f7576120f7612171565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600181811c9082168061213157607f821691505b6020821081141561216b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212202544bd98fabb7345b147e14e1e64ec5931c26b43e7424f280819c377ef934e0464736f6c63430008040033"
};

// src/contracts/@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.ts
var ERC20PresetMinterPauser = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, ERC20PresetMinterPauser_json_default.abi, ERC20PresetMinterPauser_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet2.BigNumber(result.value),
      _event: event
    };
  }
  parsePausedEvent(receipt) {
    return this.parseEvents(receipt, "Paused").map((e) => this.decodePausedEvent(e));
  }
  decodePausedEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      _event: event
    };
  }
  parseRoleAdminChangedEvent(receipt) {
    return this.parseEvents(receipt, "RoleAdminChanged").map((e) => this.decodeRoleAdminChangedEvent(e));
  }
  decodeRoleAdminChangedEvent(event) {
    let result = event.data;
    return {
      role: result.role,
      previousAdminRole: result.previousAdminRole,
      newAdminRole: result.newAdminRole,
      _event: event
    };
  }
  parseRoleGrantedEvent(receipt) {
    return this.parseEvents(receipt, "RoleGranted").map((e) => this.decodeRoleGrantedEvent(e));
  }
  decodeRoleGrantedEvent(event) {
    let result = event.data;
    return {
      role: result.role,
      account: result.account,
      sender: result.sender,
      _event: event
    };
  }
  parseRoleRevokedEvent(receipt) {
    return this.parseEvents(receipt, "RoleRevoked").map((e) => this.decodeRoleRevokedEvent(e));
  }
  decodeRoleRevokedEvent(event) {
    let result = event.data;
    return {
      role: result.role,
      account: result.account,
      sender: result.sender,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet2.BigNumber(result.value),
      _event: event
    };
  }
  parseUnpausedEvent(receipt) {
    return this.parseEvents(receipt, "Unpaused").map((e) => this.decodeUnpausedEvent(e));
  }
  decodeUnpausedEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      _event: event
    };
  }
  async DEFAULT_ADMIN_ROLE() {
    let result = await this.call("DEFAULT_ADMIN_ROLE");
    return result;
  }
  async MINTER_ROLE() {
    let result = await this.call("MINTER_ROLE");
    return result;
  }
  async PAUSER_ROLE() {
    let result = await this.call("PAUSER_ROLE");
    return result;
  }
  async allowance(params) {
    let result = await this.call("allowance", [params.owner, params.spender]);
    return new import_eth_wallet2.BigNumber(result);
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.spender, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.spender, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async balanceOf(account) {
    let result = await this.call("balanceOf", [account]);
    return new import_eth_wallet2.BigNumber(result);
  }
  async burn_send(amount) {
    let result = await this.send("burn", [import_eth_wallet2.Utils.toString(amount)]);
    return result;
  }
  async burn_call(amount) {
    let result = await this.call("burn", [import_eth_wallet2.Utils.toString(amount)]);
    return;
  }
  async burnFrom_send(params) {
    let result = await this.send("burnFrom", [params.account, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async burnFrom_call(params) {
    let result = await this.call("burnFrom", [params.account, import_eth_wallet2.Utils.toString(params.amount)]);
    return;
  }
  async decimals() {
    let result = await this.call("decimals");
    return new import_eth_wallet2.BigNumber(result);
  }
  async decreaseAllowance_send(params) {
    let result = await this.send("decreaseAllowance", [params.spender, import_eth_wallet2.Utils.toString(params.subtractedValue)]);
    return result;
  }
  async decreaseAllowance_call(params) {
    let result = await this.call("decreaseAllowance", [params.spender, import_eth_wallet2.Utils.toString(params.subtractedValue)]);
    return result;
  }
  async getRoleAdmin(role) {
    let result = await this.call("getRoleAdmin", [import_eth_wallet2.Utils.stringToBytes32(role)]);
    return result;
  }
  async getRoleMember(params) {
    let result = await this.call("getRoleMember", [import_eth_wallet2.Utils.stringToBytes32(params.role), import_eth_wallet2.Utils.toString(params.index)]);
    return result;
  }
  async getRoleMemberCount(role) {
    let result = await this.call("getRoleMemberCount", [import_eth_wallet2.Utils.stringToBytes32(role)]);
    return new import_eth_wallet2.BigNumber(result);
  }
  async grantRole_send(params) {
    let result = await this.send("grantRole", [import_eth_wallet2.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async grantRole_call(params) {
    let result = await this.call("grantRole", [import_eth_wallet2.Utils.stringToBytes32(params.role), params.account]);
    return;
  }
  async hasRole(params) {
    let result = await this.call("hasRole", [import_eth_wallet2.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async increaseAllowance_send(params) {
    let result = await this.send("increaseAllowance", [params.spender, import_eth_wallet2.Utils.toString(params.addedValue)]);
    return result;
  }
  async increaseAllowance_call(params) {
    let result = await this.call("increaseAllowance", [params.spender, import_eth_wallet2.Utils.toString(params.addedValue)]);
    return result;
  }
  async mint_send(params) {
    let result = await this.send("mint", [params.to, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async mint_call(params) {
    let result = await this.call("mint", [params.to, import_eth_wallet2.Utils.toString(params.amount)]);
    return;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async pause_send() {
    let result = await this.send("pause");
    return result;
  }
  async pause_call() {
    let result = await this.call("pause");
    return;
  }
  async paused() {
    let result = await this.call("paused");
    return result;
  }
  async renounceRole_send(params) {
    let result = await this.send("renounceRole", [import_eth_wallet2.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async renounceRole_call(params) {
    let result = await this.call("renounceRole", [import_eth_wallet2.Utils.stringToBytes32(params.role), params.account]);
    return;
  }
  async revokeRole_send(params) {
    let result = await this.send("revokeRole", [import_eth_wallet2.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async revokeRole_call(params) {
    let result = await this.call("revokeRole", [import_eth_wallet2.Utils.stringToBytes32(params.role), params.account]);
    return;
  }
  async supportsInterface(interfaceId) {
    let result = await this.call("supportsInterface", [interfaceId]);
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async totalSupply() {
    let result = await this.call("totalSupply");
    return new import_eth_wallet2.BigNumber(result);
  }
  async transfer_send(params) {
    let result = await this.send("transfer", [params.to, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async transfer_call(params) {
    let result = await this.call("transfer", [params.to, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet2.Utils.toString(params.amount)]);
    return result;
  }
  async unpause_send() {
    let result = await this.send("unpause");
    return result;
  }
  async unpause_call() {
    let result = await this.call("unpause");
    return;
  }
  assign() {
    this.approve = Object.assign(this.approve_send, { call: this.approve_call });
    this.burn = Object.assign(this.burn_send, { call: this.burn_call });
    this.burnFrom = Object.assign(this.burnFrom_send, { call: this.burnFrom_call });
    this.decreaseAllowance = Object.assign(this.decreaseAllowance_send, { call: this.decreaseAllowance_call });
    this.grantRole = Object.assign(this.grantRole_send, { call: this.grantRole_call });
    this.increaseAllowance = Object.assign(this.increaseAllowance_send, { call: this.increaseAllowance_call });
    this.mint = Object.assign(this.mint_send, { call: this.mint_call });
    this.pause = Object.assign(this.pause_send, { call: this.pause_call });
    this.renounceRole = Object.assign(this.renounceRole_send, { call: this.renounceRole_call });
    this.revokeRole = Object.assign(this.revokeRole_send, { call: this.revokeRole_call });
    this.transfer = Object.assign(this.transfer_send, { call: this.transfer_call });
    this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
    this.unpause = Object.assign(this.unpause_send, { call: this.unpause_call });
  }
};

// src/contracts/Rewards.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/Rewards.json.ts
var Rewards_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "contract TimeIsMoneyI", "name": "timeIsMoney_", "type": "address" }, { "internalType": "contract IERC20", "name": "token_", "type": "address" }, { "internalType": "uint256", "name": "multiplier_", "type": "uint256" }, { "internalType": "uint256", "name": "initialReward_", "type": "uint256" }, { "internalType": "uint256", "name": "vestingPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "claimDeadline_", "type": "uint256" }, { "internalType": "address", "name": "admin_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "AdminDrain", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalSoFar", "type": "uint256" }], "name": "Claim", "type": "event" },
    { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "claimDeadline", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "claimFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "claimSoFar", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "initialReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "multiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "putFund", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "reward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "rewardForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeUnclaimed", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "timeIsMoney", "outputs": [{ "internalType": "contract TimeIsMoneyI", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "unclaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "unclaimedForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "vestingPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "6101806040523480156200001257600080fd5b5060405162001728380380620017288339810160408190526200003591620001ab565b6001600055670de0b6b3a7640000841115620000985760405162461bcd60e51b815260206004820152601860248201527f496e697469616c2072657761726420746f6f206c61726765000000000000000060448201526064015b60405180910390fd5b6001600160a01b038116620000f05760405162461bcd60e51b815260206004820152601560248201527f496e76616c69642061646d696e2061646472657373000000000000000000000060448201526064016200008f565b6001600160a01b038616620001485760405162461bcd60e51b815260206004820152601460248201527f496e76616c69642072657761726420746f6b656e00000000000000000000000060448201526064016200008f565b6001600160601b0319606087811b821660805288901b1660a05260c085905260e08490526200018084670de0b6b3a764000062000226565b61010052610120929092526101405260601b6001600160601b03191661016052506200026392505050565b600080600080600080600060e0888a031215620001c6578283fd5b8751620001d3816200024a565b6020890151909750620001e6816200024a565b8096505060408801519450606088015193506080880151925060a0880151915060c088015162000216816200024a565b8091505092959891949750929550565b6000828210156200024557634e487b7160e01b81526011600452602481fd5b500390565b6001600160a01b03811681146200026057600080fd5b50565b60805160601c60a05160601c60c05160e0516101005161012051610140516101605160601c6113e6620003426000396000818161028b015281816102de0152818161056201526107fb0152600081816101ad015281816105ed01526106750152600081816101e401528181610b080152610b60015260008181610b320152610b8501526000818161021e0152610ad701526000818161011f0152610bd0015260008181610161015281816109840152610c560152600081816102ba0152818161039a0152818161072e015281816107d90152610dc901526113e66000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063828fd19d11610097578063eca679c311610066578063eca679c314610273578063f851a44014610286578063fbad76cb146102ad578063fc0c546a146102b557600080fd5b8063828fd19d14610206578063abee967c14610219578063ddeae03314610240578063e073bb4f1461025357600080fd5b80633ba86c44116100d35780633ba86c44146101a85780634e71d92d146101cf578063669416b8146101d75780637313ee5a146101df57600080fd5b80630d890369146101055780631b3ed7221461011a578063228cb733146101545780632b23c16e1461015c575b600080fd5b6101186101133660046111e2565b6102dc565b005b6101417f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101416103c6565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161014b565b6101417f000000000000000000000000000000000000000000000000000000000000000081565b6101186103d6565b610141610458565b6101417f000000000000000000000000000000000000000000000000000000000000000081565b6101416102143660046111c8565b61047d565b6101417f000000000000000000000000000000000000000000000000000000000000000081565b61011861024e3660046111c8565b61048e565b6101416102613660046111c8565b60016020526000908152604090205481565b6101416102813660046111c8565b610511565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b61011861054a565b6101837f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163314610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f742066726f6d2061646d696e00000000000000000000000000000000000060448201526064015b60405180910390fd5b6103c273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016833084610856565b5050565b60006103d133610938565b905090565b60026000541415610443576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610377565b600260005561045133610cef565b6001600055565b33600081815260016020526040812054909161047390610938565b6103d1919061133e565b600061048882610938565b92915050565b600260005414156104fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610377565b600260005561050981610cef565b506001600055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604081205461054083610938565b610488919061133e565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146105e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f6e6c79207468652061646d696e2063616e20646f20746869732100000000006044820152606401610377565b60007f000000000000000000000000000000000000000000000000000000000000000011610673576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4e6f20636c61696d20646561646c696e65207365742e000000000000000000006044820152606401610377565b7f00000000000000000000000000000000000000000000000000000000000000004210156106fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f20746869732e0000000000006044820152606401610377565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561078557600080fd5b505afa158015610799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bd919061122b565b905061082073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610e46565b6040518181527f146bbc9b753597a27f70129b547228bac3f0a1fd36ee128a15367d259ab427149060200160405180910390a150565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526109329085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610ea1565b50505050565b6040517f34265c4800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f0000000000000000000000000000000000000000000000000000000000000000909116906334265c489060240160206040518083038186803b1580156109c857600080fd5b505afa1580156109dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a00919061122b565b905060008111610a6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f7520617265206e6f74206120706172746974696f6e65722e0000000000006044820152606401610377565b804211610ad5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5265776172647320686173206e6f742073746172746564207965742e000000006044820152606401610377565b7f000000000000000000000000000000000000000000000000000000000000000091506000610b04824261133e565b90507f00000000000000000000000000000000000000000000000000000000000000008110610b5e57610b577f0000000000000000000000000000000000000000000000000000000000000000846112b0565b9250610bc0565b7f0000000000000000000000000000000000000000000000000000000000000000610ba9827f0000000000000000000000000000000000000000000000000000000000000000611301565b610bb391906112c8565b610bbd90846112b0565b92505b6000670de0b6b3a7640000610bf57f000000000000000000000000000000000000000000000000000000000000000086611301565b610bff91906112c8565b6040517f57344e6f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152919250600091670de0b6b3a76400009184917f000000000000000000000000000000000000000000000000000000000000000016906357344e6f9060240160206040518083038186803b158015610c9857600080fd5b505afa158015610cac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd0919061122b565b610cda9190611301565b610ce491906112c8565b979650505050505050565b6000610cfa82610938565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081205491925090610d2e908361133e565b905060008111610d9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f752068617665206e6f7468696e6720746f20636c61696d210000000000006044820152606401610377565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600160205260409020839055610df0907f0000000000000000000000000000000000000000000000000000000000000000168483610e46565b604080518281526020810184905273ffffffffffffffffffffffffffffffffffffffff8516917f34fcbac0073d7c3d388e51312faf357774904998eeb8fca628b9e6f65ee1cbf7910160405180910390a2505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e9c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016108b0565b505050565b6000610f03826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610fad9092919063ffffffff16565b805190915015610e9c5780806020019051810190610f21919061120b565b610e9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610377565b6060610fbc8484600085610fc6565b90505b9392505050565b606082471015611058576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610377565b73ffffffffffffffffffffffffffffffffffffffff85163b6110d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610377565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110ff9190611243565b60006040518083038185875af1925050503d806000811461113c576040519150601f19603f3d011682016040523d82523d6000602084013e611141565b606091505b5091509150610ce48282866060831561115b575081610fbf565b82511561116b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610377919061125f565b803573ffffffffffffffffffffffffffffffffffffffff811681146111c357600080fd5b919050565b6000602082840312156111d9578081fd5b610fbf8261119f565b600080604083850312156111f4578081fd5b6111fd8361119f565b946020939093013593505050565b60006020828403121561121c578081fd5b81518015158114610fbf578182fd5b60006020828403121561123c578081fd5b5051919050565b60008251611255818460208701611355565b9190910192915050565b602081526000825180602084015261127e816040850160208701611355565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082198211156112c3576112c3611381565b500190565b6000826112fc577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561133957611339611381565b500290565b60008282101561135057611350611381565b500390565b60005b83811015611370578181015183820152602001611358565b838111156109325750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220ff3ed5ebd018521381881ebded5cc125de897128b1250079a65fc7cf05468c3664736f6c63430008040033"
};

// src/contracts/Rewards.ts
var Rewards = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, Rewards_json_default.abi, Rewards_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.timeIsMoney, params.token, import_eth_wallet3.Utils.toString(params.multiplier), import_eth_wallet3.Utils.toString(params.initialReward), import_eth_wallet3.Utils.toString(params.vestingPeriod), import_eth_wallet3.Utils.toString(params.claimDeadline), params.admin]);
  }
  parseAdminDrainEvent(receipt) {
    return this.parseEvents(receipt, "AdminDrain").map((e) => this.decodeAdminDrainEvent(e));
  }
  decodeAdminDrainEvent(event) {
    let result = event.data;
    return {
      amount: new import_eth_wallet3.BigNumber(result.amount),
      _event: event
    };
  }
  parseClaimEvent(receipt) {
    return this.parseEvents(receipt, "Claim").map((e) => this.decodeClaimEvent(e));
  }
  decodeClaimEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet3.BigNumber(result.amount),
      totalSoFar: new import_eth_wallet3.BigNumber(result.totalSoFar),
      _event: event
    };
  }
  async admin() {
    let result = await this.call("admin");
    return result;
  }
  async claim_send() {
    let result = await this.send("claim");
    return result;
  }
  async claim_call() {
    let result = await this.call("claim");
    return;
  }
  async claimDeadline() {
    let result = await this.call("claimDeadline");
    return new import_eth_wallet3.BigNumber(result);
  }
  async claimFor_send(account) {
    let result = await this.send("claimFor", [account]);
    return result;
  }
  async claimFor_call(account) {
    let result = await this.call("claimFor", [account]);
    return;
  }
  async claimSoFar(param1) {
    let result = await this.call("claimSoFar", [param1]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async initialReward() {
    let result = await this.call("initialReward");
    return new import_eth_wallet3.BigNumber(result);
  }
  async multiplier() {
    let result = await this.call("multiplier");
    return new import_eth_wallet3.BigNumber(result);
  }
  async putFund_send(params) {
    let result = await this.send("putFund", [params.from, import_eth_wallet3.Utils.toString(params.amount)]);
    return result;
  }
  async putFund_call(params) {
    let result = await this.call("putFund", [params.from, import_eth_wallet3.Utils.toString(params.amount)]);
    return;
  }
  async reward() {
    let result = await this.call("reward");
    return new import_eth_wallet3.BigNumber(result);
  }
  async rewardForAccount(account) {
    let result = await this.call("rewardForAccount", [account]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async takeUnclaimed_send() {
    let result = await this.send("takeUnclaimed");
    return result;
  }
  async takeUnclaimed_call() {
    let result = await this.call("takeUnclaimed");
    return;
  }
  async timeIsMoney() {
    let result = await this.call("timeIsMoney");
    return result;
  }
  async token() {
    let result = await this.call("token");
    return result;
  }
  async unclaimed() {
    let result = await this.call("unclaimed");
    return new import_eth_wallet3.BigNumber(result);
  }
  async unclaimedForAccount(account) {
    let result = await this.call("unclaimedForAccount", [account]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async vestingPeriod() {
    let result = await this.call("vestingPeriod");
    return new import_eth_wallet3.BigNumber(result);
  }
  assign() {
    this.claim = Object.assign(this.claim_send, { call: this.claim_call });
    this.claimFor = Object.assign(this.claimFor_send, { call: this.claimFor_call });
    this.putFund = Object.assign(this.putFund_send, { call: this.putFund_call });
    this.takeUnclaimed = Object.assign(this.takeUnclaimed_send, { call: this.takeUnclaimed_call });
  }
};

// src/contracts/RewardsCommonStartDate.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/RewardsCommonStartDate.json.ts
var RewardsCommonStartDate_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "contract TimeIsMoneyI", "name": "timeIsMoney_", "type": "address" }, { "internalType": "contract IERC20", "name": "token_", "type": "address" }, { "internalType": "uint256", "name": "multiplier_", "type": "uint256" }, { "internalType": "uint256", "name": "initialReward_", "type": "uint256" }, { "internalType": "uint256", "name": "vestingStartDate_", "type": "uint256" }, { "internalType": "uint256", "name": "vestingPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "claimDeadline_", "type": "uint256" }, { "internalType": "address", "name": "admin_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "AdminDrain", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalSoFar", "type": "uint256" }], "name": "Claim", "type": "event" },
    { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "claimDeadline", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "claimFor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "claimSoFar", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "initialReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "multiplier", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "putFund", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "reward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "rewardForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeUnclaimed", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "timeIsMoney", "outputs": [{ "internalType": "contract TimeIsMoneyI", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "unclaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "unclaimedForAccount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "vestingPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "vestingStartDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "6101a06040523480156200001257600080fd5b50604051620018b5380380620018b58339810160408190526200003591620002f9565b6001600055670de0b6b3a7640000851115620000985760405162461bcd60e51b815260206004820152601860248201527f496e697469616c2072657761726420746f6f206c61726765000000000000000060448201526064015b60405180910390fd5b6001600160a01b038116620000f05760405162461bcd60e51b815260206004820152601560248201527f496e76616c69642061646d696e2061646472657373000000000000000000000060448201526064016200008f565b6001600160a01b038716620001485760405162461bcd60e51b815260206004820152601460248201527f496e76616c69642072657761726420746f6b656e00000000000000000000000060448201526064016200008f565b876001600160a01b031663ed6d0c5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018257600080fd5b505afa15801562000197573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001bd91906200037e565b886001600160a01b031663302ef3f36040518163ffffffff1660e01b815260040160206040518083038186803b158015620001f757600080fd5b505afa1580156200020c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023291906200037e565b6200023e919062000397565b8410156200028f5760405162461bcd60e51b815260206004820152601a60248201527f496e76616c69642076657374696e67207374617274206461746500000000000060448201526064016200008f565b6001600160601b0319606088811b821660805289901b1660a05260c086905260e0859052620002c785670de0b6b3a7640000620003b2565b6101005261012093909352610140919091526101605260601b6001600160601b0319166101805250620003fb92505050565b600080600080600080600080610100898b03121562000316578384fd5b88516200032381620003e2565b60208a01519098506200033681620003e2565b8097505060408901519550606089015194506080890151935060a0890151925060c0890151915060e08901516200036d81620003e2565b809150509295985092959890939650565b60006020828403121562000390578081fd5b5051919050565b60008219821115620003ad57620003ad620003cc565b500190565b600082821015620003c757620003c7620003cc565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114620003f857600080fd5b50565b60805160601c60a05160601c60c05160e051610100516101205161014051610160516101805160601c6113c9620004ec600039600081816102cd01528181610505015261079e0152600081816101c801528181610590015261061801526000818161022601528181610aeb0152610b430152600081816101f701528181610a110152610ac2015260008181610b150152610b680152600081816102600152610a9a01526000818161013a0152610bb301526000818161017c015281816109270152610c390152600081816102fc01528181610338015281816106d10152818161077c0152610dac01526113c96000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80637313ee5a116100b2578063e073bb4f11610081578063f851a44011610066578063f851a440146102c8578063fbad76cb146102ef578063fc0c546a146102f757600080fd5b8063e073bb4f14610295578063eca679c3146102b557600080fd5b80637313ee5a14610221578063828fd19d14610248578063abee967c1461025b578063ddeae0331461028257600080fd5b80633ba86c44116100ee5780633ba86c44146101c35780634e71d92d146101ea578063579acacc146101f2578063669416b81461021957600080fd5b80630d890369146101205780631b3ed72214610135578063228cb7331461016f5780632b23c16e14610177575b600080fd5b61013361012e3660046111c5565b61031e565b005b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b61015c610364565b61019e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610166565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b610133610374565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b61015c6103fb565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b61015c6102563660046111ab565b610420565b61015c7f000000000000000000000000000000000000000000000000000000000000000081565b6101336102903660046111ab565b610431565b61015c6102a33660046111ab565b60016020526000908152604090205481565b61015c6102c33660046111ab565b6104b4565b61019e7f000000000000000000000000000000000000000000000000000000000000000081565b6101336104ed565b61019e7f000000000000000000000000000000000000000000000000000000000000000081565b61036073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168330846107f9565b5050565b600061036f336108db565b905090565b600260005414156103e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026000556103f433610cd2565b6001600055565b336000818152600160205260408120549091610416906108db565b61036f9190611321565b600061042b826108db565b92915050565b6002600054141561049e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103dd565b60026000556104ac81610cd2565b506001600055565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160205260408120546104e3836108db565b61042b9190611321565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461058c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f6e6c79207468652061646d696e2063616e20646f207468697321000000000060448201526064016103dd565b60007f000000000000000000000000000000000000000000000000000000000000000011610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4e6f20636c61696d20646561646c696e65207365742e0000000000000000000060448201526064016103dd565b7f00000000000000000000000000000000000000000000000000000000000000004210156106a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f20746869732e00000000000060448201526064016103dd565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561072857600080fd5b505afa15801561073c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610760919061120e565b90506107c373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610e29565b6040518181527f146bbc9b753597a27f70129b547228bac3f0a1fd36ee128a15367d259ab427149060200160405180910390a150565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526108d59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e84565b50505050565b6040517f34265c4800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152600091829182917f0000000000000000000000000000000000000000000000000000000000000000909116906334265c489060240160206040518083038186803b15801561096b57600080fd5b505afa15801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a3919061120e565b905060008111610a0f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f7520617265206e6f74206120706172746974696f6e65722e00000000000060448201526064016103dd565b7f00000000000000000000000000000000000000000000000000000000000000004211610a98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5265776172647320686173206e6f742073746172746564207965742e0000000060448201526064016103dd565b7f000000000000000000000000000000000000000000000000000000000000000091506000610ae77f000000000000000000000000000000000000000000000000000000000000000042611321565b90507f00000000000000000000000000000000000000000000000000000000000000008110610b4157610b3a7f000000000000000000000000000000000000000000000000000000000000000084611293565b9250610ba3565b7f0000000000000000000000000000000000000000000000000000000000000000610b8c827f00000000000000000000000000000000000000000000000000000000000000006112e4565b610b9691906112ab565b610ba09084611293565b92505b6000670de0b6b3a7640000610bd87f0000000000000000000000000000000000000000000000000000000000000000866112e4565b610be291906112ab565b6040517f57344e6f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152919250600091670de0b6b3a76400009184917f000000000000000000000000000000000000000000000000000000000000000016906357344e6f9060240160206040518083038186803b158015610c7b57600080fd5b505afa158015610c8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb3919061120e565b610cbd91906112e4565b610cc791906112ab565b979650505050505050565b6000610cdd826108db565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602052604081205491925090610d119083611321565b905060008111610d7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f596f752068617665206e6f7468696e6720746f20636c61696d2100000000000060448201526064016103dd565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600160205260409020839055610dd3907f0000000000000000000000000000000000000000000000000000000000000000168483610e29565b604080518281526020810184905273ffffffffffffffffffffffffffffffffffffffff8516917f34fcbac0073d7c3d388e51312faf357774904998eeb8fca628b9e6f65ee1cbf7910160405180910390a2505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e7f9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401610853565b505050565b6000610ee6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610f909092919063ffffffff16565b805190915015610e7f5780806020019051810190610f0491906111ee565b610e7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103dd565b6060610f9f8484600085610fa9565b90505b9392505050565b60608247101561103b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016103dd565b73ffffffffffffffffffffffffffffffffffffffff85163b6110b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103dd565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110e29190611226565b60006040518083038185875af1925050503d806000811461111f576040519150601f19603f3d011682016040523d82523d6000602084013e611124565b606091505b5091509150610cc78282866060831561113e575081610fa2565b82511561114e5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103dd9190611242565b803573ffffffffffffffffffffffffffffffffffffffff811681146111a657600080fd5b919050565b6000602082840312156111bc578081fd5b610fa282611182565b600080604083850312156111d7578081fd5b6111e083611182565b946020939093013593505050565b6000602082840312156111ff578081fd5b81518015158114610fa2578182fd5b60006020828403121561121f578081fd5b5051919050565b60008251611238818460208701611338565b9190910192915050565b6020815260008251806020840152611261816040850160208701611338565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082198211156112a6576112a6611364565b500190565b6000826112df577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561131c5761131c611364565b500290565b60008282101561133357611333611364565b500390565b60005b8381101561135357818101518382015260200161133b565b838111156108d55750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220123bc438f07092d9d350677e4d8109af289f13d9266926fb30ec8d42df37e1dc64736f6c63430008040033"
};

// src/contracts/RewardsCommonStartDate.ts
var RewardsCommonStartDate = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, RewardsCommonStartDate_json_default.abi, RewardsCommonStartDate_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.timeIsMoney, params.token, import_eth_wallet4.Utils.toString(params.multiplier), import_eth_wallet4.Utils.toString(params.initialReward), import_eth_wallet4.Utils.toString(params.vestingStartDate), import_eth_wallet4.Utils.toString(params.vestingPeriod), import_eth_wallet4.Utils.toString(params.claimDeadline), params.admin]);
  }
  parseAdminDrainEvent(receipt) {
    return this.parseEvents(receipt, "AdminDrain").map((e) => this.decodeAdminDrainEvent(e));
  }
  decodeAdminDrainEvent(event) {
    let result = event.data;
    return {
      amount: new import_eth_wallet4.BigNumber(result.amount),
      _event: event
    };
  }
  parseClaimEvent(receipt) {
    return this.parseEvents(receipt, "Claim").map((e) => this.decodeClaimEvent(e));
  }
  decodeClaimEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet4.BigNumber(result.amount),
      totalSoFar: new import_eth_wallet4.BigNumber(result.totalSoFar),
      _event: event
    };
  }
  async admin() {
    let result = await this.call("admin");
    return result;
  }
  async claim_send() {
    let result = await this.send("claim");
    return result;
  }
  async claim_call() {
    let result = await this.call("claim");
    return;
  }
  async claimDeadline() {
    let result = await this.call("claimDeadline");
    return new import_eth_wallet4.BigNumber(result);
  }
  async claimFor_send(account) {
    let result = await this.send("claimFor", [account]);
    return result;
  }
  async claimFor_call(account) {
    let result = await this.call("claimFor", [account]);
    return;
  }
  async claimSoFar(param1) {
    let result = await this.call("claimSoFar", [param1]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async initialReward() {
    let result = await this.call("initialReward");
    return new import_eth_wallet4.BigNumber(result);
  }
  async multiplier() {
    let result = await this.call("multiplier");
    return new import_eth_wallet4.BigNumber(result);
  }
  async putFund_send(params) {
    let result = await this.send("putFund", [params.from, import_eth_wallet4.Utils.toString(params.amount)]);
    return result;
  }
  async putFund_call(params) {
    let result = await this.call("putFund", [params.from, import_eth_wallet4.Utils.toString(params.amount)]);
    return;
  }
  async reward() {
    let result = await this.call("reward");
    return new import_eth_wallet4.BigNumber(result);
  }
  async rewardForAccount(account) {
    let result = await this.call("rewardForAccount", [account]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async takeUnclaimed_send() {
    let result = await this.send("takeUnclaimed");
    return result;
  }
  async takeUnclaimed_call() {
    let result = await this.call("takeUnclaimed");
    return;
  }
  async timeIsMoney() {
    let result = await this.call("timeIsMoney");
    return result;
  }
  async token() {
    let result = await this.call("token");
    return result;
  }
  async unclaimed() {
    let result = await this.call("unclaimed");
    return new import_eth_wallet4.BigNumber(result);
  }
  async unclaimedForAccount(account) {
    let result = await this.call("unclaimedForAccount", [account]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async vestingPeriod() {
    let result = await this.call("vestingPeriod");
    return new import_eth_wallet4.BigNumber(result);
  }
  async vestingStartDate() {
    let result = await this.call("vestingStartDate");
    return new import_eth_wallet4.BigNumber(result);
  }
  assign() {
    this.claim = Object.assign(this.claim_send, { call: this.claim_call });
    this.claimFor = Object.assign(this.claimFor_send, { call: this.claimFor_call });
    this.putFund = Object.assign(this.putFund_send, { call: this.putFund_call });
    this.takeUnclaimed = Object.assign(this.takeUnclaimed_send, { call: this.takeUnclaimed_call });
  }
};

// src/contracts/TimeIsMoney.ts
var import_eth_wallet5 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/TimeIsMoney.json.ts
var TimeIsMoney_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "address", "name": "token_", "type": "address" }, { "internalType": "uint256", "name": "maximumTotalLock_", "type": "uint256" }, { "internalType": "uint256", "name": "minimumLockTime_", "type": "uint256" }, { "internalType": "uint256", "name": "startOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "endOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "perAddressCap_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "heldLongEnough", "type": "bool" }], "name": "Withdrawal", "type": "event" },
    { "inputs": [], "name": "endOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lockAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "maximumTotalLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumLockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "perAddressCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "readyToWithdraw", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "releaseTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "startOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bool", "name": "allowWithdrawalBeforeRelease", "type": "bool" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "withdrawn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "61014060405234801561001157600080fd5b5060405161133738038061133783398101604081905261003091610064565b600160005560609590951b6001600160601b03191660805260a09390935260c09190915260e05261010052610120526100c1565b60008060008060008060c0878903121561007c578182fd5b86516001600160a01b0381168114610092578283fd5b6020880151604089015160608a015160808b015160a0909b0151939c929b509099909850965090945092505050565b60805160601c60a05160c05160e05161010051610120516111ec61014b60003960008181610171015261098901526000818161011c01526107f9015260008181610246015261076f01526000818161026d0152610b6401526000818161020c0152610a1a015260008181610294015281816105d50152818161067a0152610b0d01526111ec6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806395bc3bd01161008c578063dd46706411610066578063dd4670641461022e578063e76a5de014610241578063ed6d0c5b14610268578063fc0c546a1461028f57600080fd5b806395bc3bd0146101d2578063a810a54c146101f2578063cbc2efbe1461020757600080fd5b806347dd5172116100c857806347dd51721461016c578063568914121461019357806357344e6f1461019c5780636ef61092146101af57600080fd5b80630a469e7a146100ef578063302ef3f31461011757806334265c481461014c575b600080fd5b6101026100fd36600461102a565b6102db565b60405190151581526020015b60405180910390f35b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161010e565b61013e61015a36600461102a565b60036020526000908152604090205481565b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b61013e60015481565b61013e6101aa36600461102a565b61036c565b6101026101bd36600461102a565b60046020526000908152604090205460ff1681565b61013e6101e036600461102a565b60026020526000908152604090205481565b61020561020036600461105e565b6103ca565b005b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b61020561023c366004611096565b6106fb565b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b61013e7f000000000000000000000000000000000000000000000000000000000000000081565b6102b67f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205415801590610334575073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260409020544210155b8015610366575073ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604090205460ff16155b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600360205260408120544210156103a157506000919050565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b6002600054141561043c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081553381526004602052604090205460ff1615801561046e57503360009081526002602052604090205415155b6104d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f20746f6b656e7320617661696c61626c6520746f2077697468647261772e6044820152606401610433565b3360009081526002602090815260408083205460039092529091205442101561063c5781610584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f596f757220746f6b656e732077657265206e6f74206c6f636b6564206c6f6e6760448201527f20656e6f756768210000000000000000000000000000000000000000000000006064820152608401610433565b33600090815260026020908152604080832083905560039091528120819055600180548392906105b5908490611133565b909155506105fc905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383610bdf565b604080518281526000602082015233917f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a26106f2565b33600081815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556106b6907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169083610bdf565b604080518281526001602082015233917f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a25b50506001600055565b60026000541415610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610433565b60026000557f00000000000000000000000000000000000000000000000000000000000000004210156107f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f2074686973210000000000006044820152606401610433565b7f00000000000000000000000000000000000000000000000000000000000000004210610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f536f7272792c20796f752061746520746f6f206c6174652100000000000000006044820152606401610433565b336000908152600260205260409020541561091d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f596f75206861766520616c72656164792070617274696369706174656420696e60448201527f20746869732e00000000000000000000000000000000000000000000000000006064820152608401610433565b60008111610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f596f752063616e6e6f74206c6f636b206e6f7468696e672100000000000000006044820152606401610433565b7f0000000000000000000000000000000000000000000000000000000000000000811115610a11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f596f752063616e6e6f74206c6f636b206f76657220746865206c696d697421006044820152606401610433565b600154610a3e907f0000000000000000000000000000000000000000000000000000000000000000611133565b811115610af3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604760248201527f54686973206465706f73697420776f756c64206361757365206f757220746f7460448201527f616c206c6f636b656420616d6f756e7420746f2065786365656420746865206d60648201527f6178696d756d2e00000000000000000000000000000000000000000000000000608482015260a401610433565b610b3573ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333084610cb8565b33600090815260026020526040812082905560018054839290610b5990849061111b565b90915550610b8990507f00000000000000000000000000000000000000000000000000000000000000004261111b565b33600081815260036020526040908190209290925590517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90610bcf9084815260200190565b60405180910390a2506001600055565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610cb39084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610d1c565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d169085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610c31565b50505050565b6000610d7e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e289092919063ffffffff16565b805190915015610cb35780806020019051810190610d9c919061107a565b610cb3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610433565b6060610e378484600085610e41565b90505b9392505050565b606082471015610ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610433565b73ffffffffffffffffffffffffffffffffffffffff85163b610f51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610433565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f7a91906110ae565b60006040518083038185875af1925050503d8060008114610fb7576040519150601f19603f3d011682016040523d82523d6000602084013e610fbc565b606091505b5091509150610fcc828286610fd7565b979650505050505050565b60608315610fe6575081610e3a565b825115610ff65782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043391906110ca565b60006020828403121561103b578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e3a578182fd5b60006020828403121561106f578081fd5b8135610e3a816111a5565b60006020828403121561108b578081fd5b8151610e3a816111a5565b6000602082840312156110a7578081fd5b5035919050565b600082516110c081846020870161114a565b9190910192915050565b60208152600082518060208401526110e981604085016020870161114a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000821982111561112e5761112e611176565b500190565b60008282101561114557611145611176565b500390565b60005b8381101561116557818101518382015260200161114d565b83811115610d165750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80151581146111b357600080fd5b5056fea2646970667358221220d97e87a8c428325cadb382f9267cb2c1c82b1c1a7411090c012660530f62700664736f6c63430008040033"
};

// src/contracts/TimeIsMoney.ts
var TimeIsMoney = class extends import_eth_wallet5.Contract {
  constructor(wallet, address) {
    super(wallet, address, TimeIsMoney_json_default.abi, TimeIsMoney_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.token, import_eth_wallet5.Utils.toString(params.maximumTotalLock), import_eth_wallet5.Utils.toString(params.minimumLockTime), import_eth_wallet5.Utils.toString(params.startOfEntryPeriod), import_eth_wallet5.Utils.toString(params.endOfEntryPeriod), import_eth_wallet5.Utils.toString(params.perAddressCap)]);
  }
  parseDepositEvent(receipt) {
    return this.parseEvents(receipt, "Deposit").map((e) => this.decodeDepositEvent(e));
  }
  decodeDepositEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet5.BigNumber(result.amount),
      _event: event
    };
  }
  parseWithdrawalEvent(receipt) {
    return this.parseEvents(receipt, "Withdrawal").map((e) => this.decodeWithdrawalEvent(e));
  }
  decodeWithdrawalEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet5.BigNumber(result.amount),
      heldLongEnough: result.heldLongEnough,
      _event: event
    };
  }
  async endOfEntryPeriod() {
    let result = await this.call("endOfEntryPeriod");
    return new import_eth_wallet5.BigNumber(result);
  }
  async getCredit(account) {
    let result = await this.call("getCredit", [account]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async lock_send(amount) {
    let result = await this.send("lock", [import_eth_wallet5.Utils.toString(amount)]);
    return result;
  }
  async lock_call(amount) {
    let result = await this.call("lock", [import_eth_wallet5.Utils.toString(amount)]);
    return;
  }
  async lockAmount(param1) {
    let result = await this.call("lockAmount", [param1]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async maximumTotalLock() {
    let result = await this.call("maximumTotalLock");
    return new import_eth_wallet5.BigNumber(result);
  }
  async minimumLockTime() {
    let result = await this.call("minimumLockTime");
    return new import_eth_wallet5.BigNumber(result);
  }
  async perAddressCap() {
    let result = await this.call("perAddressCap");
    return new import_eth_wallet5.BigNumber(result);
  }
  async readyToWithdraw(account) {
    let result = await this.call("readyToWithdraw", [account]);
    return result;
  }
  async releaseTime(param1) {
    let result = await this.call("releaseTime", [param1]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async startOfEntryPeriod() {
    let result = await this.call("startOfEntryPeriod");
    return new import_eth_wallet5.BigNumber(result);
  }
  async token() {
    let result = await this.call("token");
    return result;
  }
  async totalLocked() {
    let result = await this.call("totalLocked");
    return new import_eth_wallet5.BigNumber(result);
  }
  async withdraw_send(allowWithdrawalBeforeRelease) {
    let result = await this.send("withdraw", [allowWithdrawalBeforeRelease]);
    return result;
  }
  async withdraw_call(allowWithdrawalBeforeRelease) {
    let result = await this.call("withdraw", [allowWithdrawalBeforeRelease]);
    return;
  }
  async withdrawn(param1) {
    let result = await this.call("withdrawn", [param1]);
    return result;
  }
  assign() {
    this.lock = Object.assign(this.lock_send, { call: this.lock_call });
    this.withdraw = Object.assign(this.withdraw_send, { call: this.withdraw_call });
  }
};

// src/contracts/TimeIsMoneyEther.ts
var import_eth_wallet6 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/TimeIsMoneyEther.json.ts
var TimeIsMoneyEther_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "uint256", "name": "maximumTotalLock_", "type": "uint256" }, { "internalType": "uint256", "name": "minimumLockTime_", "type": "uint256" }, { "internalType": "uint256", "name": "startOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "endOfEntryPeriod_", "type": "uint256" }, { "internalType": "uint256", "name": "perAddressCap_", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "heldLongEnough", "type": "bool" }], "name": "Withdrawal", "type": "event" },
    { "inputs": [], "name": "endOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "lock", "outputs": [], "stateMutability": "payable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lockAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "maximumTotalLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumLockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "perAddressCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "readyToWithdraw", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "releaseTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "startOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bool", "name": "allowWithdrawalBeforeRelease", "type": "bool" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "withdrawn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "61012060405234801561001157600080fd5b50604051610e9b380380610e9b83398101604081905261003091610050565b600160005560809490945260a09290925260c05260e0526101005261008f565b600080600080600060a08688031215610067578081fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60805160a05160c05160e05161010051610da56100f66000396000818161018d015261095a01526000818161011e01526107ca0152600081816102aa01526107400152600081816102de0152610af301526000818161027601526109eb0152610da56000f3fe6080604052600436106100d25760003560e01c80636ef610921161007f578063cbc2efbe11610059578063cbc2efbe14610264578063e76a5de014610298578063ed6d0c5b146102cc578063f83d08ba1461030057600080fd5b80636ef61092146101e557806395bc3bd014610215578063a810a54c1461024257600080fd5b806347dd5172116100b057806347dd51721461017b57806356891412146101af57806357344e6f146101c557600080fd5b80630a469e7a146100d7578063302ef3f31461010c57806334265c481461014e575b600080fd5b3480156100e357600080fd5b506100f76100f2366004610c7d565b610308565b60405190151581526020015b60405180910390f35b34801561011857600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610103565b34801561015a57600080fd5b50610140610169366004610c7d565b60036020526000908152604090205481565b34801561018757600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156101bb57600080fd5b5061014060015481565b3480156101d157600080fd5b506101406101e0366004610c7d565b610399565b3480156101f157600080fd5b506100f7610200366004610c7d565b60046020526000908152604090205460ff1681565b34801561022157600080fd5b50610140610230366004610c7d565b60026020526000908152604090205481565b34801561024e57600080fd5b5061026261025d366004610cb8565b6103f7565b005b34801561027057600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156102a457600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d857600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b6102626106cb565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205415801590610361575073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260409020544210155b8015610393575073ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604090205460ff16155b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600360205260408120544210156103ce57506000919050565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b60026000541415610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081553381526004602052604090205460ff1615801561049b57503360009081526002602052604090205415155b610501576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f2065746865727320617661696c61626c6520746f2077697468647261772e6044820152606401610460565b3360009081526002602090815260408083205460039092529091205442101561063257816105b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f596f7572206574686572732077657265206e6f74206c6f636b6564206c6f6e6760448201527f20656e6f756768210000000000000000000000000000000000000000000000006064820152608401610460565b33600090815260026020908152604080832083905560039091528120819055600180548392906105e2908490610d29565b909155506105f290503382610b6e565b604080518281526000602082015233917f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a26106c2565b33600081815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556106749082610b6e565b336000818152600260209081526040918290205482519081526001918101919091527f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a25b50506001600055565b60026000541415610738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610460565b6002600055347f00000000000000000000000000000000000000000000000000000000000000004210156107c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f2074686973210000000000006044820152606401610460565b7f00000000000000000000000000000000000000000000000000000000000000004210610851576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f536f7272792c20796f752061746520746f6f206c6174652100000000000000006044820152606401610460565b33600090815260026020526040902054156108ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f596f75206861766520616c72656164792070617274696369706174656420696e60448201527f20746869732e00000000000000000000000000000000000000000000000000006064820152608401610460565b60008111610958576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f596f752063616e6e6f74206c6f636b206e6f7468696e672100000000000000006044820152606401610460565b7f00000000000000000000000000000000000000000000000000000000000000008111156109e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f596f752063616e6e6f74206c6f636b206f76657220746865206c696d697421006044820152606401610460565b600154610a0f907f0000000000000000000000000000000000000000000000000000000000000000610d29565b811115610ac4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604760248201527f54686973206465706f73697420776f756c64206361757365206f757220746f7460448201527f616c206c6f636b656420616d6f756e7420746f2065786365656420746865206d60648201527f6178696d756d2e00000000000000000000000000000000000000000000000000608482015260a401610460565b33600090815260026020526040812082905560018054839290610ae8908490610d11565b90915550610b1890507f000000000000000000000000000000000000000000000000000000000000000042610d11565b33600081815260036020526040908190209290925590517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c90610b5e9084815260200190565b60405180910390a2506001600055565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff8416908390604051610ba59190610cd8565b60006040518083038185875af1925050503d8060008114610be2576040519150601f19603f3d011682016040523d82523d6000602084013e610be7565b606091505b5050905080610c78576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f5472616e7366657248656c7065723a204554485f5452414e534645525f46414960448201527f4c454400000000000000000000000000000000000000000000000000000000006064820152608401610460565b505050565b600060208284031215610c8e578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610cb1578182fd5b9392505050565b600060208284031215610cc9578081fd5b81358015158114610cb1578182fd5b60008251815b81811015610cf85760208186018101518583015201610cde565b81811115610d065782828501525b509190910192915050565b60008219821115610d2457610d24610d40565b500190565b600082821015610d3b57610d3b610d40565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220d7246743a80fbbba5b2260eee4fb6ef67a0ecfffcc3249f9cf2a36774cca5ea564736f6c63430008040033"
};

// src/contracts/TimeIsMoneyEther.ts
var TimeIsMoneyEther = class extends import_eth_wallet6.Contract {
  constructor(wallet, address) {
    super(wallet, address, TimeIsMoneyEther_json_default.abi, TimeIsMoneyEther_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([import_eth_wallet6.Utils.toString(params.maximumTotalLock), import_eth_wallet6.Utils.toString(params.minimumLockTime), import_eth_wallet6.Utils.toString(params.startOfEntryPeriod), import_eth_wallet6.Utils.toString(params.endOfEntryPeriod), import_eth_wallet6.Utils.toString(params.perAddressCap)]);
  }
  parseDepositEvent(receipt) {
    return this.parseEvents(receipt, "Deposit").map((e) => this.decodeDepositEvent(e));
  }
  decodeDepositEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet6.BigNumber(result.amount),
      _event: event
    };
  }
  parseWithdrawalEvent(receipt) {
    return this.parseEvents(receipt, "Withdrawal").map((e) => this.decodeWithdrawalEvent(e));
  }
  decodeWithdrawalEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet6.BigNumber(result.amount),
      heldLongEnough: result.heldLongEnough,
      _event: event
    };
  }
  async endOfEntryPeriod() {
    let result = await this.call("endOfEntryPeriod");
    return new import_eth_wallet6.BigNumber(result);
  }
  async getCredit(account) {
    let result = await this.call("getCredit", [account]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async lock_send(_value) {
    let result = await this.send("lock", [], { value: _value });
    return result;
  }
  async lock_call(_value) {
    let result = await this.call("lock", [], { value: _value });
    return;
  }
  async lockAmount(param1) {
    let result = await this.call("lockAmount", [param1]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async maximumTotalLock() {
    let result = await this.call("maximumTotalLock");
    return new import_eth_wallet6.BigNumber(result);
  }
  async minimumLockTime() {
    let result = await this.call("minimumLockTime");
    return new import_eth_wallet6.BigNumber(result);
  }
  async perAddressCap() {
    let result = await this.call("perAddressCap");
    return new import_eth_wallet6.BigNumber(result);
  }
  async readyToWithdraw(account) {
    let result = await this.call("readyToWithdraw", [account]);
    return result;
  }
  async releaseTime(param1) {
    let result = await this.call("releaseTime", [param1]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async startOfEntryPeriod() {
    let result = await this.call("startOfEntryPeriod");
    return new import_eth_wallet6.BigNumber(result);
  }
  async totalLocked() {
    let result = await this.call("totalLocked");
    return new import_eth_wallet6.BigNumber(result);
  }
  async withdraw_send(allowWithdrawalBeforeRelease) {
    let result = await this.send("withdraw", [allowWithdrawalBeforeRelease]);
    return result;
  }
  async withdraw_call(allowWithdrawalBeforeRelease) {
    let result = await this.call("withdraw", [allowWithdrawalBeforeRelease]);
    return;
  }
  async withdrawn(param1) {
    let result = await this.call("withdrawn", [param1]);
    return result;
  }
  assign() {
    this.lock = Object.assign(this.lock_send, { call: this.lock_call });
    this.withdraw = Object.assign(this.withdraw_send, { call: this.withdraw_call });
  }
};

// src/contracts/test/FakeTimeIsMoney.ts
var import_eth_wallet7 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/test/FakeTimeIsMoney.json.ts
var FakeTimeIsMoney_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "contract IERC20", "name": "token_", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Deposit", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "heldLongEnough", "type": "bool" }], "name": "Withdrawal", "type": "event" },
    { "inputs": [], "name": "amount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "endOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "getCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "pure", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lockAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "maximumTotalLock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumLockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
    { "inputs": [], "name": "perAddressCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "readyToWithdraw", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "pure", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "releaseTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount_", "type": "uint256" }], "name": "setAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "startOfEntryPeriod", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "pure", "type": "function" },
    { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "name": "withdraw", "outputs": [], "stateMutability": "pure", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "withdrawn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "pure", "type": "function" }
  ],
  "bytecode": "60a060405234801561001057600080fd5b506040516103a63803806103a683398101604081905261002f91610050565b60601b6001600160601b031916608052678ac7230489e8000060005561007e565b600060208284031215610061578081fd5b81516001600160a01b0381168114610077578182fd5b9392505050565b60805160601c61030a61009c60003960006101b4015261030a6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806395bc3bd011610097578063dd46706411610066578063dd467064146101a1578063e76a5de014610143578063ed6d0c5b14610143578063fc0c546a146101af57600080fd5b806395bc3bd014610170578063a810a54c14610185578063aa8c217c14610198578063cbc2efbe1461016857600080fd5b806347dd5172116100d357806347dd517214610168578063568914121461016857806357344e6f146101705780636ef610921461010557600080fd5b80630a469e7a14610105578063271f88b41461012e578063302ef3f31461014357806334265c4814610154575b600080fd5b610119610113366004610261565b50600190565b60405190151581526020015b60405180910390f35b61014161013c3660046102bc565b600055565b005b60005b604051908152602001610125565b610146610162366004610261565b50600090565b600054610146565b61014661017e366004610261565b5060005490565b61014161019336600461029c565b6101fb565b61014660005481565b6101416101933660046102bc565b6101d67f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610125565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f7420737570706f72746564206f6e2046616b6554696d6549734d6f6e6579604482015260640160405180910390fd5b600060208284031215610272578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610295578182fd5b9392505050565b6000602082840312156102ad578081fd5b81358015158114610295578182fd5b6000602082840312156102cd578081fd5b503591905056fea2646970667358221220c7c48f7df02dc285c76f39bec35d44229b6683107277c589e6b18e73eb33a74a64736f6c63430008040033"
};

// src/contracts/test/FakeTimeIsMoney.ts
var FakeTimeIsMoney = class extends import_eth_wallet7.Contract {
  constructor(wallet, address) {
    super(wallet, address, FakeTimeIsMoney_json_default.abi, FakeTimeIsMoney_json_default.bytecode);
    this.assign();
  }
  deploy(token) {
    return this.__deploy([token]);
  }
  parseDepositEvent(receipt) {
    return this.parseEvents(receipt, "Deposit").map((e) => this.decodeDepositEvent(e));
  }
  decodeDepositEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet7.BigNumber(result.amount),
      _event: event
    };
  }
  parseWithdrawalEvent(receipt) {
    return this.parseEvents(receipt, "Withdrawal").map((e) => this.decodeWithdrawalEvent(e));
  }
  decodeWithdrawalEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      amount: new import_eth_wallet7.BigNumber(result.amount),
      heldLongEnough: result.heldLongEnough,
      _event: event
    };
  }
  async amount() {
    let result = await this.call("amount");
    return new import_eth_wallet7.BigNumber(result);
  }
  async endOfEntryPeriod() {
    let result = await this.call("endOfEntryPeriod");
    return new import_eth_wallet7.BigNumber(result);
  }
  async getCredit(param1) {
    let result = await this.call("getCredit", [param1]);
    return new import_eth_wallet7.BigNumber(result);
  }
  async lock(param1) {
    let result = await this.call("lock", [import_eth_wallet7.Utils.toString(param1)]);
    return;
  }
  async lockAmount(param1) {
    let result = await this.call("lockAmount", [param1]);
    return new import_eth_wallet7.BigNumber(result);
  }
  async maximumTotalLock() {
    let result = await this.call("maximumTotalLock");
    return new import_eth_wallet7.BigNumber(result);
  }
  async minimumLockTime() {
    let result = await this.call("minimumLockTime");
    return new import_eth_wallet7.BigNumber(result);
  }
  async perAddressCap() {
    let result = await this.call("perAddressCap");
    return new import_eth_wallet7.BigNumber(result);
  }
  async readyToWithdraw(param1) {
    let result = await this.call("readyToWithdraw", [param1]);
    return result;
  }
  async releaseTime(param1) {
    let result = await this.call("releaseTime", [param1]);
    return new import_eth_wallet7.BigNumber(result);
  }
  async setAmount_send(amount) {
    let result = await this.send("setAmount", [import_eth_wallet7.Utils.toString(amount)]);
    return result;
  }
  async setAmount_call(amount) {
    let result = await this.call("setAmount", [import_eth_wallet7.Utils.toString(amount)]);
    return;
  }
  async startOfEntryPeriod() {
    let result = await this.call("startOfEntryPeriod");
    return new import_eth_wallet7.BigNumber(result);
  }
  async token() {
    let result = await this.call("token");
    return result;
  }
  async totalLocked() {
    let result = await this.call("totalLocked");
    return new import_eth_wallet7.BigNumber(result);
  }
  async withdraw(param1) {
    let result = await this.call("withdraw", [param1]);
    return;
  }
  async withdrawn(param1) {
    let result = await this.call("withdrawn", [param1]);
    return result;
  }
  assign() {
    this.setAmount = Object.assign(this.setAmount_send, { call: this.setAmount_call });
  }
};

// src/contracts/test/TestERC20.ts
var import_eth_wallet8 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/test/TestERC20.json.ts
var TestERC20_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "__decimals", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
    { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60a06040523480156200001157600080fd5b50604051620026f0380380620026f08339810160408190526200003491620003c9565b8282818181600590805190602001906200005092919062000270565b5080516200006690600690602084019062000270565b50506007805460ff1916905550620000806000336200010b565b620000ac7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200010b565b620000d87f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336200010b565b505060f81b7fff0000000000000000000000000000000000000000000000000000000000000016608052506200049d9050565b6200011782826200011b565b5050565b6200013282826200015e60201b62000afb1760201c565b60008281526001602090815260409091206200015991839062000beb620001fe821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000117576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001ba3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000215836001600160a01b0384166200021e565b90505b92915050565b6000818152600183016020526040812054620002675750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000218565b50600062000218565b8280546200027e906200044a565b90600052602060002090601f016020900481019282620002a25760008555620002ed565b82601f10620002bd57805160ff1916838001178555620002ed565b82800160010185558215620002ed579182015b82811115620002ed578251825591602001919060010190620002d0565b50620002fb929150620002ff565b5090565b5b80821115620002fb576000815560010162000300565b600082601f83011262000327578081fd5b81516001600160401b038082111562000344576200034462000487565b604051601f8301601f19908116603f011681019082821181831017156200036f576200036f62000487565b816040528381526020925086838588010111156200038b578485fd5b8491505b83821015620003ae57858201830151818301840152908201906200038f565b83821115620003bf57848385830101525b9695505050505050565b600080600060608486031215620003de578283fd5b83516001600160401b0380821115620003f5578485fd5b620004038783880162000316565b9450602086015191508082111562000419578384fd5b50620004288682870162000316565b925050604084015160ff811681146200043f578182fd5b809150509250925092565b600181811c908216806200045f57607f821691505b602082108114156200048157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160f81c61222d620004c36000396000818161028301526102ba015261222d6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80635c975abb11610104578063a217fddf116100a2578063d539139311610071578063d539139314610451578063d547741f14610478578063dd62ed3e1461048b578063e63ab1e9146104d157600080fd5b8063a217fddf14610410578063a457c2d714610418578063a9059cbb1461042b578063ca15c8731461043e57600080fd5b80638456cb59116100de5780638456cb59146103845780639010d07c1461038c57806391d14854146103c457806395d89b411461040857600080fd5b80635c975abb1461033057806370a082311461033b57806379cc67901461037157600080fd5b8063313ce56711610171578063395093511161014b57806339509351146102ef5780633f4ba83a1461030257806340c10f191461030a57806342966c681461031d57600080fd5b8063313ce5671461028157806332424aa3146102b557806336568abe146102dc57600080fd5b806318160ddd116101ad57806318160ddd1461022457806323b872dd14610236578063248a9ca3146102495780632f2ff15d1461026c57600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063095ea7b314610211575b600080fd5b6101e76101e2366004611f95565b6104f8565b60405190151581526020015b60405180910390f35b610204610554565b6040516101f39190612056565b6101e761021f366004611f11565b6105e6565b6004545b6040519081526020016101f3565b6101e7610244366004611ed6565b6105fe565b610228610257366004611f3a565b60009081526020819052604090206001015490565b61027f61027a366004611f52565b610622565b005b7f00000000000000000000000000000000000000000000000000000000000000005b60405160ff90911681526020016101f3565b6102a37f000000000000000000000000000000000000000000000000000000000000000081565b61027f6102ea366004611f52565b61064d565b6101e76102fd366004611f11565b610705565b61027f610751565b61027f610318366004611f11565b610811565b61027f61032b366004611f3a565b6108d1565b60075460ff166101e7565b610228610349366004611e8a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b61027f61037f366004611f11565b6108de565b61027f6108f3565b61039f61039a366004611f74565b6109b1565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101f3565b6101e76103d2366004611f52565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6102046109d0565b610228600081565b6101e7610426366004611f11565b6109df565b6101e7610439366004611f11565b610ab0565b61022861044c366004611f3a565b610abe565b6102287f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61027f610486366004611f52565b610ad5565b610228610499366004611ea4565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b6102287f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f00000000000000000000000000000000000000000000000000000000148061054e575061054e82610c0d565b92915050565b60606005805461056390612174565b80601f016020809104026020016040519081016040528092919081815260200182805461058f90612174565b80156105dc5780601f106105b1576101008083540402835291602001916105dc565b820191906000526020600020905b8154815290600101906020018083116105bf57829003601f168201915b5050505050905090565b6000336105f4818585610ca4565b5060019392505050565b60003361060c858285610e57565b610617858585610f2e565b506001949350505050565b60008281526020819052604090206001015461063e81336111ec565b61064883836112bc565b505050565b73ffffffffffffffffffffffffffffffffffffffff811633146106f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61070182826112de565b5050565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906105f4908290869061074c9087906120a7565b610ca4565b61077b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336103d2565b610807576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e70617573650000000000000060648201526084016106ee565b61080f611300565b565b61083b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336103d2565b6108c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e740000000000000000000060648201526084016106ee565b61070182826113e1565b6108db338261150d565b50565b6108e9823383610e57565b610701828261150d565b61091d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336103d2565b6109a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20706175736500000000000000000060648201526084016106ee565b61080f611706565b60008281526001602052604081206109c990836117c6565b9392505050565b60606006805461056390612174565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610aa3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106ee565b6106178286868403610ca4565b6000336105f4818585610f2e565b600081815260016020526040812061054e906117d2565b600082815260208190526040902060010154610af181336111ec565b61064883836112de565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166107015760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610b8d3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006109c98373ffffffffffffffffffffffffffffffffffffffff84166117dc565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061054e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461054e565b73ffffffffffffffffffffffffffffffffffffffff8316610d46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff8216610de9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600360209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610f285781811015610f1b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106ee565b610f288484848403610ca4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff8216611074576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b61107f83838361182b565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090205481811015611135576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600260205260408082208585039055918516815290812080548492906111799084906120a7565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111df91815260200190565b60405180910390a3610f28565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610701576112428173ffffffffffffffffffffffffffffffffffffffff166014611836565b61124d836020611836565b60405160200161125e929190611fd5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526106ee91600401612056565b6112c68282610afb565b60008281526001602052604090206106489082610beb565b6112e88282611b3c565b60008281526001602052604090206106489082611bf3565b60075460ff1661136c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106ee565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff821661145e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106ee565b61146a6000838361182b565b806004600082825461147c91906120a7565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260026020526040812080548392906114b69084906120a7565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff82166115b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b6115bc8260008361182b565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205481811015611672576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016106ee565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604081208383039055600480548492906116ae9084906120fc565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff1615611773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016106ee565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113b73390565b60006109c98383611c15565b600061054e825490565b60008181526001830160205260408120546118235750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561054e565b50600061054e565b610648838383611c66565b606060006118458360026120bf565b6118509060026120a7565b67ffffffffffffffff81111561188f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156118b9576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611917577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106119a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006119dd8460026120bf565b6119e89060016120a7565b90505b6001811115611ad3577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611a50577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110611a8d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611acc8161213f565b90506119eb565b5083156109c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106ee565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156107015760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006109c98373ffffffffffffffffffffffffffffffffffffffff8416611cf9565b6000826000018281548110611c53577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b60075460ff1615610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c65207061757365640000000000000000000000000000000000000000000060648201526084016106ee565b60008181526001830160205260408120548015611e57576000611d1d6001836120fc565b8554909150600090611d31906001906120fc565b9050818114611de4576000866000018281548110611d78577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110611dc2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611e1c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061054e565b600091505061054e565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e8557600080fd5b919050565b600060208284031215611e9b578081fd5b6109c982611e61565b60008060408385031215611eb6578081fd5b611ebf83611e61565b9150611ecd60208401611e61565b90509250929050565b600080600060608486031215611eea578081fd5b611ef384611e61565b9250611f0160208501611e61565b9150604084013590509250925092565b60008060408385031215611f23578182fd5b611f2c83611e61565b946020939093013593505050565b600060208284031215611f4b578081fd5b5035919050565b60008060408385031215611f64578182fd5b82359150611ecd60208401611e61565b60008060408385031215611f86578182fd5b50508035926020909101359150565b600060208284031215611fa6578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146109c9578182fd5b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161200d816017850160208801612113565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161204a816028840160208801612113565b01602801949350505050565b6020815260008251806020840152612075816040850160208701612113565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082198211156120ba576120ba6121c8565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120f7576120f76121c8565b500290565b60008282101561210e5761210e6121c8565b500390565b60005b8381101561212e578181015183820152602001612116565b83811115610f285750506000910152565b60008161214e5761214e6121c8565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600181811c9082168061218857607f821691505b602082108114156121c2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212203bd3c022fddd917bb80cb9b5d07459f32cd74e6fe6200c575edbb22783bcdc4764736f6c63430008040033"
};

// src/contracts/test/TestERC20.ts
var TestERC20 = class extends import_eth_wallet8.Contract {
  constructor(wallet, address) {
    super(wallet, address, TestERC20_json_default.abi, TestERC20_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol, import_eth_wallet8.Utils.toString(params.decimals)]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      spender: result.spender,
      value: new import_eth_wallet8.BigNumber(result.value),
      _event: event
    };
  }
  parsePausedEvent(receipt) {
    return this.parseEvents(receipt, "Paused").map((e) => this.decodePausedEvent(e));
  }
  decodePausedEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      _event: event
    };
  }
  parseRoleAdminChangedEvent(receipt) {
    return this.parseEvents(receipt, "RoleAdminChanged").map((e) => this.decodeRoleAdminChangedEvent(e));
  }
  decodeRoleAdminChangedEvent(event) {
    let result = event.data;
    return {
      role: result.role,
      previousAdminRole: result.previousAdminRole,
      newAdminRole: result.newAdminRole,
      _event: event
    };
  }
  parseRoleGrantedEvent(receipt) {
    return this.parseEvents(receipt, "RoleGranted").map((e) => this.decodeRoleGrantedEvent(e));
  }
  decodeRoleGrantedEvent(event) {
    let result = event.data;
    return {
      role: result.role,
      account: result.account,
      sender: result.sender,
      _event: event
    };
  }
  parseRoleRevokedEvent(receipt) {
    return this.parseEvents(receipt, "RoleRevoked").map((e) => this.decodeRoleRevokedEvent(e));
  }
  decodeRoleRevokedEvent(event) {
    let result = event.data;
    return {
      role: result.role,
      account: result.account,
      sender: result.sender,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      value: new import_eth_wallet8.BigNumber(result.value),
      _event: event
    };
  }
  parseUnpausedEvent(receipt) {
    return this.parseEvents(receipt, "Unpaused").map((e) => this.decodeUnpausedEvent(e));
  }
  decodeUnpausedEvent(event) {
    let result = event.data;
    return {
      account: result.account,
      _event: event
    };
  }
  async DEFAULT_ADMIN_ROLE() {
    let result = await this.call("DEFAULT_ADMIN_ROLE");
    return result;
  }
  async MINTER_ROLE() {
    let result = await this.call("MINTER_ROLE");
    return result;
  }
  async PAUSER_ROLE() {
    let result = await this.call("PAUSER_ROLE");
    return result;
  }
  async _decimals() {
    let result = await this.call("_decimals");
    return new import_eth_wallet8.BigNumber(result);
  }
  async allowance(params) {
    let result = await this.call("allowance", [params.owner, params.spender]);
    return new import_eth_wallet8.BigNumber(result);
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.spender, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.spender, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async balanceOf(account) {
    let result = await this.call("balanceOf", [account]);
    return new import_eth_wallet8.BigNumber(result);
  }
  async burn_send(amount) {
    let result = await this.send("burn", [import_eth_wallet8.Utils.toString(amount)]);
    return result;
  }
  async burn_call(amount) {
    let result = await this.call("burn", [import_eth_wallet8.Utils.toString(amount)]);
    return;
  }
  async burnFrom_send(params) {
    let result = await this.send("burnFrom", [params.account, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async burnFrom_call(params) {
    let result = await this.call("burnFrom", [params.account, import_eth_wallet8.Utils.toString(params.amount)]);
    return;
  }
  async decimals() {
    let result = await this.call("decimals");
    return new import_eth_wallet8.BigNumber(result);
  }
  async decreaseAllowance_send(params) {
    let result = await this.send("decreaseAllowance", [params.spender, import_eth_wallet8.Utils.toString(params.subtractedValue)]);
    return result;
  }
  async decreaseAllowance_call(params) {
    let result = await this.call("decreaseAllowance", [params.spender, import_eth_wallet8.Utils.toString(params.subtractedValue)]);
    return result;
  }
  async getRoleAdmin(role) {
    let result = await this.call("getRoleAdmin", [import_eth_wallet8.Utils.stringToBytes32(role)]);
    return result;
  }
  async getRoleMember(params) {
    let result = await this.call("getRoleMember", [import_eth_wallet8.Utils.stringToBytes32(params.role), import_eth_wallet8.Utils.toString(params.index)]);
    return result;
  }
  async getRoleMemberCount(role) {
    let result = await this.call("getRoleMemberCount", [import_eth_wallet8.Utils.stringToBytes32(role)]);
    return new import_eth_wallet8.BigNumber(result);
  }
  async grantRole_send(params) {
    let result = await this.send("grantRole", [import_eth_wallet8.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async grantRole_call(params) {
    let result = await this.call("grantRole", [import_eth_wallet8.Utils.stringToBytes32(params.role), params.account]);
    return;
  }
  async hasRole(params) {
    let result = await this.call("hasRole", [import_eth_wallet8.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async increaseAllowance_send(params) {
    let result = await this.send("increaseAllowance", [params.spender, import_eth_wallet8.Utils.toString(params.addedValue)]);
    return result;
  }
  async increaseAllowance_call(params) {
    let result = await this.call("increaseAllowance", [params.spender, import_eth_wallet8.Utils.toString(params.addedValue)]);
    return result;
  }
  async mint_send(params) {
    let result = await this.send("mint", [params.to, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async mint_call(params) {
    let result = await this.call("mint", [params.to, import_eth_wallet8.Utils.toString(params.amount)]);
    return;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async pause_send() {
    let result = await this.send("pause");
    return result;
  }
  async pause_call() {
    let result = await this.call("pause");
    return;
  }
  async paused() {
    let result = await this.call("paused");
    return result;
  }
  async renounceRole_send(params) {
    let result = await this.send("renounceRole", [import_eth_wallet8.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async renounceRole_call(params) {
    let result = await this.call("renounceRole", [import_eth_wallet8.Utils.stringToBytes32(params.role), params.account]);
    return;
  }
  async revokeRole_send(params) {
    let result = await this.send("revokeRole", [import_eth_wallet8.Utils.stringToBytes32(params.role), params.account]);
    return result;
  }
  async revokeRole_call(params) {
    let result = await this.call("revokeRole", [import_eth_wallet8.Utils.stringToBytes32(params.role), params.account]);
    return;
  }
  async supportsInterface(interfaceId) {
    let result = await this.call("supportsInterface", [interfaceId]);
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async totalSupply() {
    let result = await this.call("totalSupply");
    return new import_eth_wallet8.BigNumber(result);
  }
  async transfer_send(params) {
    let result = await this.send("transfer", [params.to, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async transfer_call(params) {
    let result = await this.call("transfer", [params.to, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet8.Utils.toString(params.amount)]);
    return result;
  }
  async unpause_send() {
    let result = await this.send("unpause");
    return result;
  }
  async unpause_call() {
    let result = await this.call("unpause");
    return;
  }
  assign() {
    this.approve = Object.assign(this.approve_send, { call: this.approve_call });
    this.burn = Object.assign(this.burn_send, { call: this.burn_call });
    this.burnFrom = Object.assign(this.burnFrom_send, { call: this.burnFrom_call });
    this.decreaseAllowance = Object.assign(this.decreaseAllowance_send, { call: this.decreaseAllowance_call });
    this.grantRole = Object.assign(this.grantRole_send, { call: this.grantRole_call });
    this.increaseAllowance = Object.assign(this.increaseAllowance_send, { call: this.increaseAllowance_call });
    this.mint = Object.assign(this.mint_send, { call: this.mint_call });
    this.pause = Object.assign(this.pause_send, { call: this.pause_call });
    this.renounceRole = Object.assign(this.renounceRole_send, { call: this.renounceRole_call });
    this.revokeRole = Object.assign(this.revokeRole_send, { call: this.revokeRole_call });
    this.transfer = Object.assign(this.transfer_send, { call: this.transfer_call });
    this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
    this.unpause = Object.assign(this.unpause_send, { call: this.unpause_call });
  }
};

})