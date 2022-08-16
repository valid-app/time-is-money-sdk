"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeIsMoneyEther = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const TimeIsMoneyEther_json_1 = __importDefault(require("./TimeIsMoneyEther.json"));
class TimeIsMoneyEther extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, TimeIsMoneyEther_json_1.default.abi, TimeIsMoneyEther_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([eth_wallet_1.Utils.toString(params.maximumTotalLock), eth_wallet_1.Utils.toString(params.minimumLockTime), eth_wallet_1.Utils.toString(params.startOfEntryPeriod), eth_wallet_1.Utils.toString(params.endOfEntryPeriod), eth_wallet_1.Utils.toString(params.perAddressCap)]);
    }
    parseDepositEvent(receipt) {
        return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseWithdrawalEvent(receipt) {
        return this.parseEvents(receipt, "Withdrawal").map(e => this.decodeWithdrawalEvent(e));
    }
    decodeWithdrawalEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            heldLongEnough: result.heldLongEnough,
            _event: event
        };
    }
    assign() {
        let endOfEntryPeriod_call = async () => {
            let result = await this.call('endOfEntryPeriod');
            return new eth_wallet_1.BigNumber(result);
        };
        this.endOfEntryPeriod = endOfEntryPeriod_call;
        let getCredit_call = async (account) => {
            let result = await this.call('getCredit', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.getCredit = getCredit_call;
        let lockAmount_call = async (param1) => {
            let result = await this.call('lockAmount', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.lockAmount = lockAmount_call;
        let maximumTotalLock_call = async () => {
            let result = await this.call('maximumTotalLock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.maximumTotalLock = maximumTotalLock_call;
        let minimumLockTime_call = async () => {
            let result = await this.call('minimumLockTime');
            return new eth_wallet_1.BigNumber(result);
        };
        this.minimumLockTime = minimumLockTime_call;
        let perAddressCap_call = async () => {
            let result = await this.call('perAddressCap');
            return new eth_wallet_1.BigNumber(result);
        };
        this.perAddressCap = perAddressCap_call;
        let readyToWithdraw_call = async (account) => {
            let result = await this.call('readyToWithdraw', [account]);
            return result;
        };
        this.readyToWithdraw = readyToWithdraw_call;
        let releaseTime_call = async (param1) => {
            let result = await this.call('releaseTime', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.releaseTime = releaseTime_call;
        let startOfEntryPeriod_call = async () => {
            let result = await this.call('startOfEntryPeriod');
            return new eth_wallet_1.BigNumber(result);
        };
        this.startOfEntryPeriod = startOfEntryPeriod_call;
        let totalLocked_call = async () => {
            let result = await this.call('totalLocked');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalLocked = totalLocked_call;
        let withdrawn_call = async (param1) => {
            let result = await this.call('withdrawn', [param1]);
            return result;
        };
        this.withdrawn = withdrawn_call;
        let lock_send = async (_value) => {
            let result = await this.send('lock', [], { value: _value });
            return result;
        };
        let lock_call = async (_value) => {
            let result = await this.call('lock', [], { value: _value });
            return;
        };
        this.lock = Object.assign(lock_send, {
            call: lock_call
        });
        let withdraw_send = async (allowWithdrawalBeforeRelease) => {
            let result = await this.send('withdraw', [allowWithdrawalBeforeRelease]);
            return result;
        };
        let withdraw_call = async (allowWithdrawalBeforeRelease) => {
            let result = await this.call('withdraw', [allowWithdrawalBeforeRelease]);
            return;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
exports.TimeIsMoneyEther = TimeIsMoneyEther;
