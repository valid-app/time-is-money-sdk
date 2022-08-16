import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./TimeIsMoneyEther.json";

export interface IDeployParams {maximumTotalLock:number|BigNumber;minimumLockTime:number|BigNumber;startOfEntryPeriod:number|BigNumber;endOfEntryPeriod:number|BigNumber;perAddressCap:number|BigNumber}
export class TimeIsMoneyEther extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([Utils.toString(params.maximumTotalLock),Utils.toString(params.minimumLockTime),Utils.toString(params.startOfEntryPeriod),Utils.toString(params.endOfEntryPeriod),Utils.toString(params.perAddressCap)]);
    }
    parseDepositEvent(receipt: TransactionReceipt): TimeIsMoneyEther.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): TimeIsMoneyEther.DepositEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoneyEther.WithdrawalEvent[]{
        return this.parseEvents(receipt, "Withdrawal").map(e=>this.decodeWithdrawalEvent(e));
    }
    decodeWithdrawalEvent(event: Event): TimeIsMoneyEther.WithdrawalEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            heldLongEnough: result.heldLongEnough,
            _event: event
        };
    }
    endOfEntryPeriod: {
        (): Promise<BigNumber>;
    }
    getCredit: {
        (account:string): Promise<BigNumber>;
    }
    lock: {
        (_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (_value:number|BigNumber) => Promise<void>;
    }
    lockAmount: {
        (param1:string): Promise<BigNumber>;
    }
    maximumTotalLock: {
        (): Promise<BigNumber>;
    }
    minimumLockTime: {
        (): Promise<BigNumber>;
    }
    perAddressCap: {
        (): Promise<BigNumber>;
    }
    readyToWithdraw: {
        (account:string): Promise<boolean>;
    }
    releaseTime: {
        (param1:string): Promise<BigNumber>;
    }
    startOfEntryPeriod: {
        (): Promise<BigNumber>;
    }
    totalLocked: {
        (): Promise<BigNumber>;
    }
    withdraw: {
        (allowWithdrawalBeforeRelease:boolean): Promise<TransactionReceipt>;
        call: (allowWithdrawalBeforeRelease:boolean) => Promise<void>;
    }
    withdrawn: {
        (param1:string): Promise<boolean>;
    }
    private assign(){
        let endOfEntryPeriod_call = async (): Promise<BigNumber> => {
            let result = await this.call('endOfEntryPeriod');
            return new BigNumber(result);
        }
        this.endOfEntryPeriod = endOfEntryPeriod_call
        let getCredit_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('getCredit',[account]);
            return new BigNumber(result);
        }
        this.getCredit = getCredit_call
        let lockAmount_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('lockAmount',[param1]);
            return new BigNumber(result);
        }
        this.lockAmount = lockAmount_call
        let maximumTotalLock_call = async (): Promise<BigNumber> => {
            let result = await this.call('maximumTotalLock');
            return new BigNumber(result);
        }
        this.maximumTotalLock = maximumTotalLock_call
        let minimumLockTime_call = async (): Promise<BigNumber> => {
            let result = await this.call('minimumLockTime');
            return new BigNumber(result);
        }
        this.minimumLockTime = minimumLockTime_call
        let perAddressCap_call = async (): Promise<BigNumber> => {
            let result = await this.call('perAddressCap');
            return new BigNumber(result);
        }
        this.perAddressCap = perAddressCap_call
        let readyToWithdraw_call = async (account:string): Promise<boolean> => {
            let result = await this.call('readyToWithdraw',[account]);
            return result;
        }
        this.readyToWithdraw = readyToWithdraw_call
        let releaseTime_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('releaseTime',[param1]);
            return new BigNumber(result);
        }
        this.releaseTime = releaseTime_call
        let startOfEntryPeriod_call = async (): Promise<BigNumber> => {
            let result = await this.call('startOfEntryPeriod');
            return new BigNumber(result);
        }
        this.startOfEntryPeriod = startOfEntryPeriod_call
        let totalLocked_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalLocked');
            return new BigNumber(result);
        }
        this.totalLocked = totalLocked_call
        let withdrawn_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('withdrawn',[param1]);
            return result;
        }
        this.withdrawn = withdrawn_call
        let lock_send = async (_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('lock', [], {value:_value});
            return result;
        }
        let lock_call = async (_value:number|BigNumber): Promise<void> => {
            let result = await this.call('lock', [], {value:_value});
            return;
        }
        this.lock = Object.assign(lock_send, {
            call:lock_call
        });
        let withdraw_send = async (allowWithdrawalBeforeRelease:boolean): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',[allowWithdrawalBeforeRelease]);
            return result;
        }
        let withdraw_call = async (allowWithdrawalBeforeRelease:boolean): Promise<void> => {
            let result = await this.call('withdraw',[allowWithdrawalBeforeRelease]);
            return;
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
        });
    }
}
export module TimeIsMoneyEther{
    export interface DepositEvent {account:string,amount:BigNumber,_event:Event}
    export interface WithdrawalEvent {account:string,amount:BigNumber,heldLongEnough:boolean,_event:Event}
}