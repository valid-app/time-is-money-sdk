import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    name: string;
    symbol: string;
}
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface IBurnFromParams {
    account: string;
    amount: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IGetRoleMemberParams {
    role: string;
    index: number | BigNumber;
}
export interface IGrantRoleParams {
    role: string;
    account: string;
}
export interface IHasRoleParams {
    role: string;
    account: string;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface IMintParams {
    to: string;
    amount: number | BigNumber;
}
export interface IRenounceRoleParams {
    role: string;
    account: string;
}
export interface IRevokeRoleParams {
    role: string;
    account: string;
}
export interface ITransferParams {
    to: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    amount: number | BigNumber;
}
export declare class ERC20PresetMinterPauser extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ERC20PresetMinterPauser.ApprovalEvent;
    parsePausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.PausedEvent[];
    decodePausedEvent(event: Event): ERC20PresetMinterPauser.PausedEvent;
    parseRoleAdminChangedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleAdminChangedEvent[];
    decodeRoleAdminChangedEvent(event: Event): ERC20PresetMinterPauser.RoleAdminChangedEvent;
    parseRoleGrantedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleGrantedEvent[];
    decodeRoleGrantedEvent(event: Event): ERC20PresetMinterPauser.RoleGrantedEvent;
    parseRoleRevokedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleRevokedEvent[];
    decodeRoleRevokedEvent(event: Event): ERC20PresetMinterPauser.RoleRevokedEvent;
    parseTransferEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.TransferEvent[];
    decodeTransferEvent(event: Event): ERC20PresetMinterPauser.TransferEvent;
    parseUnpausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.UnpausedEvent[];
    decodeUnpausedEvent(event: Event): ERC20PresetMinterPauser.UnpausedEvent;
    DEFAULT_ADMIN_ROLE: {
        (): Promise<string>;
    };
    MINTER_ROLE: {
        (): Promise<string>;
    };
    PAUSER_ROLE: {
        (): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (account: string): Promise<BigNumber>;
    };
    burn: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<void>;
    };
    burnFrom: {
        (params: IBurnFromParams): Promise<TransactionReceipt>;
        call: (params: IBurnFromParams) => Promise<void>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    };
    getRoleAdmin: {
        (role: string): Promise<string>;
    };
    getRoleMember: {
        (params: IGetRoleMemberParams): Promise<string>;
    };
    getRoleMemberCount: {
        (role: string): Promise<BigNumber>;
    };
    grantRole: {
        (params: IGrantRoleParams): Promise<TransactionReceipt>;
        call: (params: IGrantRoleParams) => Promise<void>;
    };
    hasRole: {
        (params: IHasRoleParams): Promise<boolean>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    };
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    };
    name: {
        (): Promise<string>;
    };
    pause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    paused: {
        (): Promise<boolean>;
    };
    renounceRole: {
        (params: IRenounceRoleParams): Promise<TransactionReceipt>;
        call: (params: IRenounceRoleParams) => Promise<void>;
    };
    revokeRole: {
        (params: IRevokeRoleParams): Promise<TransactionReceipt>;
        call: (params: IRevokeRoleParams) => Promise<void>;
    };
    supportsInterface: {
        (interfaceId: string): Promise<boolean>;
    };
    symbol: {
        (): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    unpause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    private assign;
}
export declare module ERC20PresetMinterPauser {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface PausedEvent {
        account: string;
        _event: Event;
    }
    interface RoleAdminChangedEvent {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
        _event: Event;
    }
    interface RoleGrantedEvent {
        role: string;
        account: string;
        sender: string;
        _event: Event;
    }
    interface RoleRevokedEvent {
        role: string;
        account: string;
        sender: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
    interface UnpausedEvent {
        account: string;
        _event: Event;
    }
}
