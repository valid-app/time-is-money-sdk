import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./Rewards.json";

export interface IDeployParams {timeIsMoney:string;token:string;multiplier:number|BigNumber;initialReward:number|BigNumber;vestingPeriod:number|BigNumber;claimDeadline:number|BigNumber;admin:string}
export interface IPutFundParams {from:string;amount:number|BigNumber}
export class Rewards extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.timeIsMoney,params.token,Utils.toString(params.multiplier),Utils.toString(params.initialReward),Utils.toString(params.vestingPeriod),Utils.toString(params.claimDeadline),params.admin]);
    }
    parseAdminDrainEvent(receipt: TransactionReceipt): Rewards.AdminDrainEvent[]{
        return this.parseEvents(receipt, "AdminDrain").map(e=>this.decodeAdminDrainEvent(e));
    }
    decodeAdminDrainEvent(event: Event): Rewards.AdminDrainEvent{
        let result = event.data;
        return {
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseClaimEvent(receipt: TransactionReceipt): Rewards.ClaimEvent[]{
        return this.parseEvents(receipt, "Claim").map(e=>this.decodeClaimEvent(e));
    }
    decodeClaimEvent(event: Event): Rewards.ClaimEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            totalSoFar: new BigNumber(result.totalSoFar),
            _event: event
        };
    }
    admin: {
        (): Promise<string>;
    }
    claim: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    claimDeadline: {
        (): Promise<BigNumber>;
    }
    claimFor: {
        (account:string): Promise<TransactionReceipt>;
        call: (account:string) => Promise<void>;
    }
    claimSoFar: {
        (param1:string): Promise<BigNumber>;
    }
    initialReward: {
        (): Promise<BigNumber>;
    }
    multiplier: {
        (): Promise<BigNumber>;
    }
    putFund: {
        (params: IPutFundParams): Promise<TransactionReceipt>;
        call: (params: IPutFundParams) => Promise<void>;
    }
    reward: {
        (): Promise<BigNumber>;
    }
    rewardForAccount: {
        (account:string): Promise<BigNumber>;
    }
    takeUnclaimed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    timeIsMoney: {
        (): Promise<string>;
    }
    token: {
        (): Promise<string>;
    }
    unclaimed: {
        (): Promise<BigNumber>;
    }
    unclaimedForAccount: {
        (account:string): Promise<BigNumber>;
    }
    vestingPeriod: {
        (): Promise<BigNumber>;
    }
    private assign(){
        let admin_call = async (): Promise<string> => {
            let result = await this.call('admin');
            return result;
        }
        this.admin = admin_call
        let claimDeadline_call = async (): Promise<BigNumber> => {
            let result = await this.call('claimDeadline');
            return new BigNumber(result);
        }
        this.claimDeadline = claimDeadline_call
        let claimSoFar_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('claimSoFar',[param1]);
            return new BigNumber(result);
        }
        this.claimSoFar = claimSoFar_call
        let initialReward_call = async (): Promise<BigNumber> => {
            let result = await this.call('initialReward');
            return new BigNumber(result);
        }
        this.initialReward = initialReward_call
        let multiplier_call = async (): Promise<BigNumber> => {
            let result = await this.call('multiplier');
            return new BigNumber(result);
        }
        this.multiplier = multiplier_call
        let reward_call = async (): Promise<BigNumber> => {
            let result = await this.call('reward');
            return new BigNumber(result);
        }
        this.reward = reward_call
        let rewardForAccount_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('rewardForAccount',[account]);
            return new BigNumber(result);
        }
        this.rewardForAccount = rewardForAccount_call
        let timeIsMoney_call = async (): Promise<string> => {
            let result = await this.call('timeIsMoney');
            return result;
        }
        this.timeIsMoney = timeIsMoney_call
        let token_call = async (): Promise<string> => {
            let result = await this.call('token');
            return result;
        }
        this.token = token_call
        let unclaimed_call = async (): Promise<BigNumber> => {
            let result = await this.call('unclaimed');
            return new BigNumber(result);
        }
        this.unclaimed = unclaimed_call
        let unclaimedForAccount_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('unclaimedForAccount',[account]);
            return new BigNumber(result);
        }
        this.unclaimedForAccount = unclaimedForAccount_call
        let vestingPeriod_call = async (): Promise<BigNumber> => {
            let result = await this.call('vestingPeriod');
            return new BigNumber(result);
        }
        this.vestingPeriod = vestingPeriod_call
        let claim_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('claim');
            return result;
        }
        let claim_call = async (): Promise<void> => {
            let result = await this.call('claim');
            return;
        }
        this.claim = Object.assign(claim_send, {
            call:claim_call
        });
        let claimFor_send = async (account:string): Promise<TransactionReceipt> => {
            let result = await this.send('claimFor',[account]);
            return result;
        }
        let claimFor_call = async (account:string): Promise<void> => {
            let result = await this.call('claimFor',[account]);
            return;
        }
        this.claimFor = Object.assign(claimFor_send, {
            call:claimFor_call
        });
        let putFundParams = (params: IPutFundParams) => [params.from,Utils.toString(params.amount)];
        let putFund_send = async (params: IPutFundParams): Promise<TransactionReceipt> => {
            let result = await this.send('putFund',putFundParams(params));
            return result;
        }
        let putFund_call = async (params: IPutFundParams): Promise<void> => {
            let result = await this.call('putFund',putFundParams(params));
            return;
        }
        this.putFund = Object.assign(putFund_send, {
            call:putFund_call
        });
        let takeUnclaimed_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('takeUnclaimed');
            return result;
        }
        let takeUnclaimed_call = async (): Promise<void> => {
            let result = await this.call('takeUnclaimed');
            return;
        }
        this.takeUnclaimed = Object.assign(takeUnclaimed_send, {
            call:takeUnclaimed_call
        });
    }
}
export module Rewards{
    export interface AdminDrainEvent {amount:BigNumber,_event:Event}
    export interface ClaimEvent {account:string,amount:BigNumber,totalSoFar:BigNumber,_event:Event}
}