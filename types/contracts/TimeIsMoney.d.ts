import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    token: string;
    maximumTotalLock: number | BigNumber;
    minimumLockTime: number | BigNumber;
    startOfEntryPeriod: number | BigNumber;
    endOfEntryPeriod: number | BigNumber;
    perAddressCap: number | BigNumber;
}
export declare class TimeIsMoney extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseDepositEvent(receipt: TransactionReceipt): TimeIsMoney.DepositEvent[];
    decodeDepositEvent(event: Event): TimeIsMoney.DepositEvent;
    parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoney.WithdrawalEvent[];
    decodeWithdrawalEvent(event: Event): TimeIsMoney.WithdrawalEvent;
    endOfEntryPeriod: {
        (): Promise<BigNumber>;
    };
    getCredit: {
        (account: string): Promise<BigNumber>;
    };
    lock: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
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
        (account: string): Promise<boolean>;
    };
    releaseTime: {
        (param1: string): Promise<BigNumber>;
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
        (allowWithdrawalBeforeRelease: boolean): Promise<TransactionReceipt>;
        call: (allowWithdrawalBeforeRelease: boolean) => Promise<void>;
    };
    withdrawn: {
        (param1: string): Promise<boolean>;
    };
    private assign;
}
export declare module TimeIsMoney {
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
