import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    maximumTotalLock: number | BigNumber;
    minimumLockTime: number | BigNumber;
    startOfEntryPeriod: number | BigNumber;
    endOfEntryPeriod: number | BigNumber;
    perAddressCap: number | BigNumber;
}
export declare class TimeIsMoneyEther extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseDepositEvent(receipt: TransactionReceipt): TimeIsMoneyEther.DepositEvent[];
    decodeDepositEvent(event: Event): TimeIsMoneyEther.DepositEvent;
    parseWithdrawalEvent(receipt: TransactionReceipt): TimeIsMoneyEther.WithdrawalEvent[];
    decodeWithdrawalEvent(event: Event): TimeIsMoneyEther.WithdrawalEvent;
    endOfEntryPeriod: {
        (): Promise<BigNumber>;
    };
    getCredit: {
        (account: string): Promise<BigNumber>;
    };
    lock: {
        (_value: number | BigNumber): Promise<TransactionReceipt>;
        call: (_value: number | BigNumber) => Promise<void>;
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
export declare module TimeIsMoneyEther {
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
