import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./FakeTimeIsMoney.json";

export class FakeTimeIsMoney extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(token:string): Promise<string>{
        return this.__deploy([token]);
    }
    parseDepositEvent(receipt: TransactionReceipt): FakeTimeIsMoney.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): FakeTimeIsMoney.DepositEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseWithdrawalEvent(receipt: TransactionReceipt): FakeTimeIsMoney.WithdrawalEvent[]{
        return this.parseEvents(receipt, "Withdrawal").map(e=>this.decodeWithdrawalEvent(e));
    }
    decodeWithdrawalEvent(event: Event): FakeTimeIsMoney.WithdrawalEvent{
        let result = event.data;
        return {
            account: result.account,
            amount: new BigNumber(result.amount),
            heldLongEnough: result.heldLongEnough,
            _event: event
        };
    }
    amount: {
        (): Promise<BigNumber>;
    }
    endOfEntryPeriod: {
        (): Promise<BigNumber>;
    }
    getCredit: {
        (param1:string): Promise<BigNumber>;
    }
    lock: {
        (param1:number|BigNumber): Promise<void>;
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
        (param1:string): Promise<boolean>;
    }
    releaseTime: {
        (param1:string): Promise<BigNumber>;
    }
    setAmount: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<void>;
    }
    startOfEntryPeriod: {
        (): Promise<BigNumber>;
    }
    token: {
        (): Promise<string>;
    }
    totalLocked: {
        (): Promise<BigNumber>;
    }
    withdraw: {
        (param1:boolean): Promise<void>;
    }
    withdrawn: {
        (param1:string): Promise<boolean>;
    }
    private assign(){
        let amount_call = async (): Promise<BigNumber> => {
            let result = await this.call('amount');
            return new BigNumber(result);
        }
        this.amount = amount_call
        let endOfEntryPeriod_call = async (): Promise<BigNumber> => {
            let result = await this.call('endOfEntryPeriod');
            return new BigNumber(result);
        }
        this.endOfEntryPeriod = endOfEntryPeriod_call
        let getCredit_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('getCredit',[param1]);
            return new BigNumber(result);
        }
        this.getCredit = getCredit_call
        let lock_call = async (param1:number|BigNumber): Promise<void> => {
            let result = await this.call('lock',[Utils.toString(param1)]);
            return;
        }
        this.lock = lock_call
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
        let readyToWithdraw_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('readyToWithdraw',[param1]);
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
        let token_call = async (): Promise<string> => {
            let result = await this.call('token');
            return result;
        }
        this.token = token_call
        let totalLocked_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalLocked');
            return new BigNumber(result);
        }
        this.totalLocked = totalLocked_call
        let withdraw_call = async (param1:boolean): Promise<void> => {
            let result = await this.call('withdraw',[param1]);
            return;
        }
        this.withdraw = withdraw_call
        let withdrawn_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('withdrawn',[param1]);
            return result;
        }
        this.withdrawn = withdrawn_call
        let setAmount_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setAmount',[Utils.toString(amount)]);
            return result;
        }
        let setAmount_call = async (amount:number|BigNumber): Promise<void> => {
            let result = await this.call('setAmount',[Utils.toString(amount)]);
            return;
        }
        this.setAmount = Object.assign(setAmount_send, {
            call:setAmount_call
        });
    }
}
export module FakeTimeIsMoney{
    export interface DepositEvent {account:string,amount:BigNumber,_event:Event}
    export interface WithdrawalEvent {account:string,amount:BigNumber,heldLongEnough:boolean,_event:Event}
}