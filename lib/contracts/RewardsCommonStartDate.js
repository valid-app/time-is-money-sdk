"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsCommonStartDate = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const RewardsCommonStartDate_json_1 = __importDefault(require("./RewardsCommonStartDate.json"));
class RewardsCommonStartDate extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, RewardsCommonStartDate_json_1.default.abi, RewardsCommonStartDate_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.timeIsMoney, params.token, eth_wallet_1.Utils.toString(params.multiplier), eth_wallet_1.Utils.toString(params.initialReward), eth_wallet_1.Utils.toString(params.vestingStartDate), eth_wallet_1.Utils.toString(params.vestingPeriod), eth_wallet_1.Utils.toString(params.claimDeadline), params.admin]);
    }
    parseAdminDrainEvent(receipt) {
        return this.parseEvents(receipt, "AdminDrain").map(e => this.decodeAdminDrainEvent(e));
    }
    decodeAdminDrainEvent(event) {
        let result = event.data;
        return {
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseClaimEvent(receipt) {
        return this.parseEvents(receipt, "Claim").map(e => this.decodeClaimEvent(e));
    }
    decodeClaimEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            amount: new eth_wallet_1.BigNumber(result.amount),
            totalSoFar: new eth_wallet_1.BigNumber(result.totalSoFar),
            _event: event
        };
    }
    assign() {
        let admin_call = async () => {
            let result = await this.call('admin');
            return result;
        };
        this.admin = admin_call;
        let claimDeadline_call = async () => {
            let result = await this.call('claimDeadline');
            return new eth_wallet_1.BigNumber(result);
        };
        this.claimDeadline = claimDeadline_call;
        let claimSoFar_call = async (param1) => {
            let result = await this.call('claimSoFar', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.claimSoFar = claimSoFar_call;
        let initialReward_call = async () => {
            let result = await this.call('initialReward');
            return new eth_wallet_1.BigNumber(result);
        };
        this.initialReward = initialReward_call;
        let multiplier_call = async () => {
            let result = await this.call('multiplier');
            return new eth_wallet_1.BigNumber(result);
        };
        this.multiplier = multiplier_call;
        let reward_call = async () => {
            let result = await this.call('reward');
            return new eth_wallet_1.BigNumber(result);
        };
        this.reward = reward_call;
        let rewardForAccount_call = async (account) => {
            let result = await this.call('rewardForAccount', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.rewardForAccount = rewardForAccount_call;
        let timeIsMoney_call = async () => {
            let result = await this.call('timeIsMoney');
            return result;
        };
        this.timeIsMoney = timeIsMoney_call;
        let token_call = async () => {
            let result = await this.call('token');
            return result;
        };
        this.token = token_call;
        let unclaimed_call = async () => {
            let result = await this.call('unclaimed');
            return new eth_wallet_1.BigNumber(result);
        };
        this.unclaimed = unclaimed_call;
        let unclaimedForAccount_call = async (account) => {
            let result = await this.call('unclaimedForAccount', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.unclaimedForAccount = unclaimedForAccount_call;
        let vestingPeriod_call = async () => {
            let result = await this.call('vestingPeriod');
            return new eth_wallet_1.BigNumber(result);
        };
        this.vestingPeriod = vestingPeriod_call;
        let vestingStartDate_call = async () => {
            let result = await this.call('vestingStartDate');
            return new eth_wallet_1.BigNumber(result);
        };
        this.vestingStartDate = vestingStartDate_call;
        let claim_send = async () => {
            let result = await this.send('claim');
            return result;
        };
        let claim_call = async () => {
            let result = await this.call('claim');
            return;
        };
        this.claim = Object.assign(claim_send, {
            call: claim_call
        });
        let claimFor_send = async (account) => {
            let result = await this.send('claimFor', [account]);
            return result;
        };
        let claimFor_call = async (account) => {
            let result = await this.call('claimFor', [account]);
            return;
        };
        this.claimFor = Object.assign(claimFor_send, {
            call: claimFor_call
        });
        let putFundParams = (params) => [params.from, eth_wallet_1.Utils.toString(params.amount)];
        let putFund_send = async (params) => {
            let result = await this.send('putFund', putFundParams(params));
            return result;
        };
        let putFund_call = async (params) => {
            let result = await this.call('putFund', putFundParams(params));
            return;
        };
        this.putFund = Object.assign(putFund_send, {
            call: putFund_call
        });
        let takeUnclaimed_send = async () => {
            let result = await this.send('takeUnclaimed');
            return result;
        };
        let takeUnclaimed_call = async () => {
            let result = await this.call('takeUnclaimed');
            return;
        };
        this.takeUnclaimed = Object.assign(takeUnclaimed_send, {
            call: takeUnclaimed_call
        });
    }
}
exports.RewardsCommonStartDate = RewardsCommonStartDate;
