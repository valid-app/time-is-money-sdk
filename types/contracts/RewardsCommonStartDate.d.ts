import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    timeIsMoney: string;
    token: string;
    multiplier: number | BigNumber;
    initialReward: number | BigNumber;
    vestingStartDate: number | BigNumber;
    vestingPeriod: number | BigNumber;
    claimDeadline: number | BigNumber;
    admin: string;
}
export interface IPutFundParams {
    from: string;
    amount: number | BigNumber;
}
export declare class RewardsCommonStartDate extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAdminDrainEvent(receipt: TransactionReceipt): RewardsCommonStartDate.AdminDrainEvent[];
    decodeAdminDrainEvent(event: Event): RewardsCommonStartDate.AdminDrainEvent;
    parseClaimEvent(receipt: TransactionReceipt): RewardsCommonStartDate.ClaimEvent[];
    decodeClaimEvent(event: Event): RewardsCommonStartDate.ClaimEvent;
    admin: {
        (): Promise<string>;
    };
    claim: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    claimDeadline: {
        (): Promise<BigNumber>;
    };
    claimFor: {
        (account: string): Promise<TransactionReceipt>;
        call: (account: string) => Promise<void>;
    };
    claimSoFar: {
        (param1: string): Promise<BigNumber>;
    };
    initialReward: {
        (): Promise<BigNumber>;
    };
    multiplier: {
        (): Promise<BigNumber>;
    };
    putFund: {
        (params: IPutFundParams): Promise<TransactionReceipt>;
        call: (params: IPutFundParams) => Promise<void>;
    };
    reward: {
        (): Promise<BigNumber>;
    };
    rewardForAccount: {
        (account: string): Promise<BigNumber>;
    };
    takeUnclaimed: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    timeIsMoney: {
        (): Promise<string>;
    };
    token: {
        (): Promise<string>;
    };
    unclaimed: {
        (): Promise<BigNumber>;
    };
    unclaimedForAccount: {
        (account: string): Promise<BigNumber>;
    };
    vestingPeriod: {
        (): Promise<BigNumber>;
    };
    vestingStartDate: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module RewardsCommonStartDate {
    interface AdminDrainEvent {
        amount: BigNumber;
        _event: Event;
    }
    interface ClaimEvent {
        account: string;
        amount: BigNumber;
        totalSoFar: BigNumber;
        _event: Event;
    }
}
