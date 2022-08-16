import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class FakeTimeIsMoney extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(token: string): Promise<string>;
    parseDepositEvent(receipt: TransactionReceipt): FakeTimeIsMoney.DepositEvent[];
    decodeDepositEvent(event: Event): FakeTimeIsMoney.DepositEvent;
    parseWithdrawalEvent(receipt: TransactionReceipt): FakeTimeIsMoney.WithdrawalEvent[];
    decodeWithdrawalEvent(event: Event): FakeTimeIsMoney.WithdrawalEvent;
    amount: {
        (): Promise<BigNumber>;
    };
    endOfEntryPeriod: {
        (): Promise<BigNumber>;
    };
    getCredit: {
        (param1: string): Promise<BigNumber>;
    };
    lock: {
        (param1: number | BigNumber): Promise<void>;
    };
    lockAmount: {
        (param1: string): Promise<BigNumber>;
    };
    maximumTotalLock: {
        (): Promise<BigNumber>;
    };
    minimumLockTime: {
        (): Promise<BigNumber>;
    };
    perAddressCap: {
        (): Promise<BigNumber>;
    };
    readyToWithdraw: {
        (param1: string): Promise<boolean>;
    };
    releaseTime: {
        (param1: string): Promise<BigNumber>;
    };
    setAmount: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
    };
    startOfEntryPeriod: {
        (): Promise<BigNumber>;
    };
    token: {
        (): Promise<string>;
    };
    totalLocked: {
        (): Promise<BigNumber>;
    };
    withdraw: {
        (param1: boolean): Promise<void>;
    };
    withdrawn: {
        (param1: string): Promise<boolean>;
    };
    private assign;
}
export declare module FakeTimeIsMoney {
    interface DepositEvent {
        account: string;
        amount: BigNumber;
        _event: Event;
    }
    interface WithdrawalEvent {
        account: string;
        amount: BigNumber;
        heldLongEnough: boolean;
        _event: Event;
    }
}
