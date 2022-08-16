import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ERC20PresetMinterPauser.json";

export interface IDeployParams {name:string;symbol:string}
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface IBurnFromParams {account:string;amount:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IGetRoleMemberParams {role:string;index:number|BigNumber}
export interface IGrantRoleParams {role:string;account:string}
export interface IHasRoleParams {role:string;account:string}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface IMintParams {to:string;amount:number|BigNumber}
export interface IRenounceRoleParams {role:string;account:string}
export interface IRevokeRoleParams {role:string;account:string}
export interface ITransferParams {to:string;amount:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;amount:number|BigNumber}
export class ERC20PresetMinterPauser extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.name,params.symbol]);
    }
    parseApprovalEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): ERC20PresetMinterPauser.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parsePausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.PausedEvent[]{
        return this.parseEvents(receipt, "Paused").map(e=>this.decodePausedEvent(e));
    }
    decodePausedEvent(event: Event): ERC20PresetMinterPauser.PausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseRoleAdminChangedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleAdminChangedEvent[]{
        return this.parseEvents(receipt, "RoleAdminChanged").map(e=>this.decodeRoleAdminChangedEvent(e));
    }
    decodeRoleAdminChangedEvent(event: Event): ERC20PresetMinterPauser.RoleAdminChangedEvent{
        let result = event.data;
        return {
            role: result.role,
            previousAdminRole: result.previousAdminRole,
            newAdminRole: result.newAdminRole,
            _event: event
        };
    }
    parseRoleGrantedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleGrantedEvent[]{
        return this.parseEvents(receipt, "RoleGranted").map(e=>this.decodeRoleGrantedEvent(e));
    }
    decodeRoleGrantedEvent(event: Event): ERC20PresetMinterPauser.RoleGrantedEvent{
        let result = event.data;
        return {
            role: result.role,
            account: result.account,
            sender: result.sender,
            _event: event
        };
    }
    parseRoleRevokedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.RoleRevokedEvent[]{
        return this.parseEvents(receipt, "RoleRevoked").map(e=>this.decodeRoleRevokedEvent(e));
    }
    decodeRoleRevokedEvent(event: Event): ERC20PresetMinterPauser.RoleRevokedEvent{
        let result = event.data;
        return {
            role: result.role,
            account: result.account,
            sender: result.sender,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): ERC20PresetMinterPauser.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseUnpausedEvent(receipt: TransactionReceipt): ERC20PresetMinterPauser.UnpausedEvent[]{
        return this.parseEvents(receipt, "Unpaused").map(e=>this.decodeUnpausedEvent(e));
    }
    decodeUnpausedEvent(event: Event): ERC20PresetMinterPauser.UnpausedEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    DEFAULT_ADMIN_ROLE: {
        (): Promise<string>;
    }
    MINTER_ROLE: {
        (): Promise<string>;
    }
    PAUSER_ROLE: {
        (): Promise<string>;
    }
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    }
    balanceOf: {
        (account:string): Promise<BigNumber>;
    }
    burn: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<void>;
    }
    burnFrom: {
        (params: IBurnFromParams): Promise<TransactionReceipt>;
        call: (params: IBurnFromParams) => Promise<void>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    }
    getRoleAdmin: {
        (role:string): Promise<string>;
    }
    getRoleMember: {
        (params: IGetRoleMemberParams): Promise<string>;
    }
    getRoleMemberCount: {
        (role:string): Promise<BigNumber>;
    }
    grantRole: {
        (params: IGrantRoleParams): Promise<TransactionReceipt>;
        call: (params: IGrantRoleParams) => Promise<void>;
    }
    hasRole: {
        (params: IHasRoleParams): Promise<boolean>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    }
    mint: {
        (params: IMintParams): Promise<TransactionReceipt>;
        call: (params: IMintParams) => Promise<void>;
    }
    name: {
        (): Promise<string>;
    }
    pause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    paused: {
        (): Promise<boolean>;
    }
    renounceRole: {
        (params: IRenounceRoleParams): Promise<TransactionReceipt>;
        call: (params: IRenounceRoleParams) => Promise<void>;
    }
    revokeRole: {
        (params: IRevokeRoleParams): Promise<TransactionReceipt>;
        call: (params: IRevokeRoleParams) => Promise<void>;
    }
    supportsInterface: {
        (interfaceId:string): Promise<boolean>;
    }
    symbol: {
        (): Promise<string>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    }
    unpause: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    private assign(){
        let DEFAULT_ADMIN_ROLE_call = async (): Promise<string> => {
            let result = await this.call('DEFAULT_ADMIN_ROLE');
            return result;
        }
        this.DEFAULT_ADMIN_ROLE = DEFAULT_ADMIN_ROLE_call
        let MINTER_ROLE_call = async (): Promise<string> => {
            let result = await this.call('MINTER_ROLE');
            return result;
        }
        this.MINTER_ROLE = MINTER_ROLE_call
        let PAUSER_ROLE_call = async (): Promise<string> => {
            let result = await this.call('PAUSER_ROLE');
            return result;
        }
        this.PAUSER_ROLE = PAUSER_ROLE_call
        let allowanceParams = (params: IAllowanceParams) => [params.owner,params.spender];
        let allowance_call = async (params: IAllowanceParams): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params));
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[account]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let getRoleAdmin_call = async (role:string): Promise<string> => {
            let result = await this.call('getRoleAdmin',[Utils.stringToBytes32(role)]);
            return result;
        }
        this.getRoleAdmin = getRoleAdmin_call
        let getRoleMemberParams = (params: IGetRoleMemberParams) => [Utils.stringToBytes32(params.role),Utils.toString(params.index)];
        let getRoleMember_call = async (params: IGetRoleMemberParams): Promise<string> => {
            let result = await this.call('getRoleMember',getRoleMemberParams(params));
            return result;
        }
        this.getRoleMember = getRoleMember_call
        let getRoleMemberCount_call = async (role:string): Promise<BigNumber> => {
            let result = await this.call('getRoleMemberCount',[Utils.stringToBytes32(role)]);
            return new BigNumber(result);
        }
        this.getRoleMemberCount = getRoleMemberCount_call
        let hasRoleParams = (params: IHasRoleParams) => [Utils.stringToBytes32(params.role),params.account];
        let hasRole_call = async (params: IHasRoleParams): Promise<boolean> => {
            let result = await this.call('hasRole',hasRoleParams(params));
            return result;
        }
        this.hasRole = hasRole_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let paused_call = async (): Promise<boolean> => {
            let result = await this.call('paused');
            return result;
        }
        this.paused = paused_call
        let supportsInterface_call = async (interfaceId:string): Promise<boolean> => {
            let result = await this.call('supportsInterface',[interfaceId]);
            return result;
        }
        this.supportsInterface = supportsInterface_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.spender,Utils.toString(params.amount)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params));
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let burn_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('burn',[Utils.toString(amount)]);
            return result;
        }
        let burn_call = async (amount:number|BigNumber): Promise<void> => {
            let result = await this.call('burn',[Utils.toString(amount)]);
            return;
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let burnFromParams = (params: IBurnFromParams) => [params.account,Utils.toString(params.amount)];
        let burnFrom_send = async (params: IBurnFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('burnFrom',burnFromParams(params));
            return result;
        }
        let burnFrom_call = async (params: IBurnFromParams): Promise<void> => {
            let result = await this.call('burnFrom',burnFromParams(params));
            return;
        }
        this.burnFrom = Object.assign(burnFrom_send, {
            call:burnFrom_call
        });
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,Utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params));
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams): Promise<boolean> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params));
            return result;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
        });
        let grantRoleParams = (params: IGrantRoleParams) => [Utils.stringToBytes32(params.role),params.account];
        let grantRole_send = async (params: IGrantRoleParams): Promise<TransactionReceipt> => {
            let result = await this.send('grantRole',grantRoleParams(params));
            return result;
        }
        let grantRole_call = async (params: IGrantRoleParams): Promise<void> => {
            let result = await this.call('grantRole',grantRoleParams(params));
            return;
        }
        this.grantRole = Object.assign(grantRole_send, {
            call:grantRole_call
        });
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,Utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params));
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams): Promise<boolean> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params));
            return result;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
        });
        let mintParams = (params: IMintParams) => [params.to,Utils.toString(params.amount)];
        let mint_send = async (params: IMintParams): Promise<TransactionReceipt> => {
            let result = await this.send('mint',mintParams(params));
            return result;
        }
        let mint_call = async (params: IMintParams): Promise<void> => {
            let result = await this.call('mint',mintParams(params));
            return;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let pause_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('pause');
            return result;
        }
        let pause_call = async (): Promise<void> => {
            let result = await this.call('pause');
            return;
        }
        this.pause = Object.assign(pause_send, {
            call:pause_call
        });
        let renounceRoleParams = (params: IRenounceRoleParams) => [Utils.stringToBytes32(params.role),params.account];
        let renounceRole_send = async (params: IRenounceRoleParams): Promise<TransactionReceipt> => {
            let result = await this.send('renounceRole',renounceRoleParams(params));
            return result;
        }
        let renounceRole_call = async (params: IRenounceRoleParams): Promise<void> => {
            let result = await this.call('renounceRole',renounceRoleParams(params));
            return;
        }
        this.renounceRole = Object.assign(renounceRole_send, {
            call:renounceRole_call
        });
        let revokeRoleParams = (params: IRevokeRoleParams) => [Utils.stringToBytes32(params.role),params.account];
        let revokeRole_send = async (params: IRevokeRoleParams): Promise<TransactionReceipt> => {
            let result = await this.send('revokeRole',revokeRoleParams(params));
            return result;
        }
        let revokeRole_call = async (params: IRevokeRoleParams): Promise<void> => {
            let result = await this.call('revokeRole',revokeRoleParams(params));
            return;
        }
        this.revokeRole = Object.assign(revokeRole_send, {
            call:revokeRole_call
        });
        let transferParams = (params: ITransferParams) => [params.to,Utils.toString(params.amount)];
        let transfer_send = async (params: ITransferParams): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params));
            return result;
        }
        let transfer_call = async (params: ITransferParams): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params));
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,Utils.toString(params.amount)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let unpause_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('unpause');
            return result;
        }
        let unpause_call = async (): Promise<void> => {
            let result = await this.call('unpause');
            return;
        }
        this.unpause = Object.assign(unpause_send, {
            call:unpause_call
        });
    }
}
export module ERC20PresetMinterPauser{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface PausedEvent {account:string,_event:Event}
    export interface RoleAdminChangedEvent {role:string,previousAdminRole:string,newAdminRole:string,_event:Event}
    export interface RoleGrantedEvent {role:string,account:string,sender:string,_event:Event}
    export interface RoleRevokedEvent {role:string,account:string,sender:string,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
    export interface UnpausedEvent {account:string,_event:Event}
}