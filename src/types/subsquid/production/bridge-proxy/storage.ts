import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const transactions =  {
    v64: new StorageType('BridgeProxy.Transactions', 'Optional', [sts.tuple(() => [v64.GenericNetworkId, v64.AccountId32]), v64.H256], v64.BridgeRequest) as TransactionsV64,
    v70: new StorageType('BridgeProxy.Transactions', 'Optional', [sts.tuple(() => [v70.GenericNetworkId, v70.AccountId32]), v70.H256], v70.BridgeRequest) as TransactionsV70,
}

export interface TransactionsV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: [v64.GenericNetworkId, v64.AccountId32], key2: v64.H256): Promise<(v64.BridgeRequest | undefined)>
    getMany(block: Block, keys: [[v64.GenericNetworkId, v64.AccountId32], v64.H256][]): Promise<(v64.BridgeRequest | undefined)[]>
    getKeys(block: Block): Promise<[[v64.GenericNetworkId, v64.AccountId32], v64.H256][]>
    getKeys(block: Block, key1: [v64.GenericNetworkId, v64.AccountId32]): Promise<[[v64.GenericNetworkId, v64.AccountId32], v64.H256][]>
    getKeys(block: Block, key1: [v64.GenericNetworkId, v64.AccountId32], key2: v64.H256): Promise<[[v64.GenericNetworkId, v64.AccountId32], v64.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[[v64.GenericNetworkId, v64.AccountId32], v64.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v64.GenericNetworkId, v64.AccountId32]): AsyncIterable<[[v64.GenericNetworkId, v64.AccountId32], v64.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v64.GenericNetworkId, v64.AccountId32], key2: v64.H256): AsyncIterable<[[v64.GenericNetworkId, v64.AccountId32], v64.H256][]>
    getPairs(block: Block): Promise<[k: [[v64.GenericNetworkId, v64.AccountId32], v64.H256], v: (v64.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v64.GenericNetworkId, v64.AccountId32]): Promise<[k: [[v64.GenericNetworkId, v64.AccountId32], v64.H256], v: (v64.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v64.GenericNetworkId, v64.AccountId32], key2: v64.H256): Promise<[k: [[v64.GenericNetworkId, v64.AccountId32], v64.H256], v: (v64.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [[v64.GenericNetworkId, v64.AccountId32], v64.H256], v: (v64.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v64.GenericNetworkId, v64.AccountId32]): AsyncIterable<[k: [[v64.GenericNetworkId, v64.AccountId32], v64.H256], v: (v64.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v64.GenericNetworkId, v64.AccountId32], key2: v64.H256): AsyncIterable<[k: [[v64.GenericNetworkId, v64.AccountId32], v64.H256], v: (v64.BridgeRequest | undefined)][]>
}

export interface TransactionsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: [v70.GenericNetworkId, v70.AccountId32], key2: v70.H256): Promise<(v70.BridgeRequest | undefined)>
    getMany(block: Block, keys: [[v70.GenericNetworkId, v70.AccountId32], v70.H256][]): Promise<(v70.BridgeRequest | undefined)[]>
    getKeys(block: Block): Promise<[[v70.GenericNetworkId, v70.AccountId32], v70.H256][]>
    getKeys(block: Block, key1: [v70.GenericNetworkId, v70.AccountId32]): Promise<[[v70.GenericNetworkId, v70.AccountId32], v70.H256][]>
    getKeys(block: Block, key1: [v70.GenericNetworkId, v70.AccountId32], key2: v70.H256): Promise<[[v70.GenericNetworkId, v70.AccountId32], v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[[v70.GenericNetworkId, v70.AccountId32], v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v70.GenericNetworkId, v70.AccountId32]): AsyncIterable<[[v70.GenericNetworkId, v70.AccountId32], v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v70.GenericNetworkId, v70.AccountId32], key2: v70.H256): AsyncIterable<[[v70.GenericNetworkId, v70.AccountId32], v70.H256][]>
    getPairs(block: Block): Promise<[k: [[v70.GenericNetworkId, v70.AccountId32], v70.H256], v: (v70.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v70.GenericNetworkId, v70.AccountId32]): Promise<[k: [[v70.GenericNetworkId, v70.AccountId32], v70.H256], v: (v70.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v70.GenericNetworkId, v70.AccountId32], key2: v70.H256): Promise<[k: [[v70.GenericNetworkId, v70.AccountId32], v70.H256], v: (v70.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [[v70.GenericNetworkId, v70.AccountId32], v70.H256], v: (v70.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v70.GenericNetworkId, v70.AccountId32]): AsyncIterable<[k: [[v70.GenericNetworkId, v70.AccountId32], v70.H256], v: (v70.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v70.GenericNetworkId, v70.AccountId32], key2: v70.H256): AsyncIterable<[k: [[v70.GenericNetworkId, v70.AccountId32], v70.H256], v: (v70.BridgeRequest | undefined)][]>
}

export const senders =  {
    v64: new StorageType('BridgeProxy.Senders', 'Optional', [v64.GenericNetworkId, v64.H256], v64.AccountId32) as SendersV64,
    v70: new StorageType('BridgeProxy.Senders', 'Optional', [v70.GenericNetworkId, v70.H256], v70.AccountId32) as SendersV70,
}

export interface SendersV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v64.GenericNetworkId, key2: v64.H256): Promise<(v64.AccountId32 | undefined)>
    getMany(block: Block, keys: [v64.GenericNetworkId, v64.H256][]): Promise<(v64.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v64.GenericNetworkId, v64.H256][]>
    getKeys(block: Block, key1: v64.GenericNetworkId): Promise<[v64.GenericNetworkId, v64.H256][]>
    getKeys(block: Block, key1: v64.GenericNetworkId, key2: v64.H256): Promise<[v64.GenericNetworkId, v64.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64.GenericNetworkId, v64.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[v64.GenericNetworkId, v64.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.H256): AsyncIterable<[v64.GenericNetworkId, v64.H256][]>
    getPairs(block: Block): Promise<[k: [v64.GenericNetworkId, v64.H256], v: (v64.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId): Promise<[k: [v64.GenericNetworkId, v64.H256], v: (v64.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId, key2: v64.H256): Promise<[k: [v64.GenericNetworkId, v64.H256], v: (v64.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64.GenericNetworkId, v64.H256], v: (v64.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[k: [v64.GenericNetworkId, v64.H256], v: (v64.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.H256): AsyncIterable<[k: [v64.GenericNetworkId, v64.H256], v: (v64.AccountId32 | undefined)][]>
}

export interface SendersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: [v70.GenericNetworkId, v70.H256][]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeys(block: Block, key1: v70.GenericNetworkId): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeys(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H256): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getPairs(block: Block): Promise<[k: [v70.GenericNetworkId, v70.H256], v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId): Promise<[k: [v70.GenericNetworkId, v70.H256], v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<[k: [v70.GenericNetworkId, v70.H256], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H256): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: (v70.AccountId32 | undefined)][]>
}

export const sidechainFeePaid =  {
    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    v64: new StorageType('BridgeProxy.SidechainFeePaid', 'Optional', [v64.GenericNetworkId, v64.H160], sts.bigint()) as SidechainFeePaidV64,
    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    v70: new StorageType('BridgeProxy.SidechainFeePaid', 'Optional', [v70.GenericNetworkId, v70.H160], sts.bigint()) as SidechainFeePaidV70,
}

/**
 *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
 */
export interface SidechainFeePaidV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v64.GenericNetworkId, key2: v64.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v64.GenericNetworkId, v64.H160][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v64.GenericNetworkId, v64.H160][]>
    getKeys(block: Block, key1: v64.GenericNetworkId): Promise<[v64.GenericNetworkId, v64.H160][]>
    getKeys(block: Block, key1: v64.GenericNetworkId, key2: v64.H160): Promise<[v64.GenericNetworkId, v64.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64.GenericNetworkId, v64.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[v64.GenericNetworkId, v64.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.H160): AsyncIterable<[v64.GenericNetworkId, v64.H160][]>
    getPairs(block: Block): Promise<[k: [v64.GenericNetworkId, v64.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId): Promise<[k: [v64.GenericNetworkId, v64.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId, key2: v64.H160): Promise<[k: [v64.GenericNetworkId, v64.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64.GenericNetworkId, v64.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[k: [v64.GenericNetworkId, v64.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.H160): AsyncIterable<[k: [v64.GenericNetworkId, v64.H160], v: (bigint | undefined)][]>
}

/**
 *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
 */
export interface SidechainFeePaidV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.GenericNetworkId, key2: v70.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v70.GenericNetworkId, v70.H160][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v70.GenericNetworkId, v70.H160][]>
    getKeys(block: Block, key1: v70.GenericNetworkId): Promise<[v70.GenericNetworkId, v70.H160][]>
    getKeys(block: Block, key1: v70.GenericNetworkId, key2: v70.H160): Promise<[v70.GenericNetworkId, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.GenericNetworkId, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[v70.GenericNetworkId, v70.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H160): AsyncIterable<[v70.GenericNetworkId, v70.H160][]>
    getPairs(block: Block): Promise<[k: [v70.GenericNetworkId, v70.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId): Promise<[k: [v70.GenericNetworkId, v70.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId, key2: v70.H160): Promise<[k: [v70.GenericNetworkId, v70.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.GenericNetworkId, v70.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[k: [v70.GenericNetworkId, v70.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H160): AsyncIterable<[k: [v70.GenericNetworkId, v70.H160], v: (bigint | undefined)][]>
}

export const lockedAssets =  {
    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    v64: new StorageType('BridgeProxy.LockedAssets', 'Default', [v64.GenericNetworkId, v64.AssetId32], sts.bigint()) as LockedAssetsV64,
    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    v70: new StorageType('BridgeProxy.LockedAssets', 'Default', [v70.GenericNetworkId, v70.AssetId32], sts.bigint()) as LockedAssetsV70,
}

/**
 *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
 */
export interface LockedAssetsV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v64.GenericNetworkId, key2: v64.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v64.GenericNetworkId, v64.AssetId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v64.GenericNetworkId, v64.AssetId32][]>
    getKeys(block: Block, key1: v64.GenericNetworkId): Promise<[v64.GenericNetworkId, v64.AssetId32][]>
    getKeys(block: Block, key1: v64.GenericNetworkId, key2: v64.AssetId32): Promise<[v64.GenericNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v64.GenericNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[v64.GenericNetworkId, v64.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.AssetId32): AsyncIterable<[v64.GenericNetworkId, v64.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v64.GenericNetworkId, v64.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId): Promise<[k: [v64.GenericNetworkId, v64.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v64.GenericNetworkId, key2: v64.AssetId32): Promise<[k: [v64.GenericNetworkId, v64.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v64.GenericNetworkId, v64.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId): AsyncIterable<[k: [v64.GenericNetworkId, v64.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v64.GenericNetworkId, key2: v64.AssetId32): AsyncIterable<[k: [v64.GenericNetworkId, v64.AssetId32], v: (bigint | undefined)][]>
}

/**
 *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
 */
export interface LockedAssetsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v70.GenericNetworkId, key2: v70.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v70.GenericNetworkId, v70.AssetId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v70.GenericNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.GenericNetworkId): Promise<[v70.GenericNetworkId, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.GenericNetworkId, key2: v70.AssetId32): Promise<[v70.GenericNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.GenericNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[v70.GenericNetworkId, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.AssetId32): AsyncIterable<[v70.GenericNetworkId, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.GenericNetworkId, v70.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId): Promise<[k: [v70.GenericNetworkId, v70.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId, key2: v70.AssetId32): Promise<[k: [v70.GenericNetworkId, v70.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.GenericNetworkId, v70.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[k: [v70.GenericNetworkId, v70.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.AssetId32): AsyncIterable<[k: [v70.GenericNetworkId, v70.AssetId32], v: (bigint | undefined)][]>
}

export const transferLimit =  {
    /**
     *  Maximum amount of assets that can be withdrawn during period of time.
     */
    v64: new StorageType('BridgeProxy.TransferLimit', 'Default', [], v64.TransferLimitSettings) as TransferLimitV64,
}

/**
 *  Maximum amount of assets that can be withdrawn during period of time.
 */
export interface TransferLimitV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v64.TransferLimitSettings
    get(block: Block): Promise<(v64.TransferLimitSettings | undefined)>
}

export const consumedTransferLimit =  {
    /**
     *  Consumed transfer limit.
     */
    v64: new StorageType('BridgeProxy.ConsumedTransferLimit', 'Default', [], sts.bigint()) as ConsumedTransferLimitV64,
}

/**
 *  Consumed transfer limit.
 */
export interface ConsumedTransferLimitV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const transferLimitUnlockSchedule =  {
    /**
     *  Schedule for consumed transfer limit reduce.
     */
    v64: new StorageType('BridgeProxy.TransferLimitUnlockSchedule', 'Default', [sts.number()], sts.bigint()) as TransferLimitUnlockScheduleV64,
}

/**
 *  Schedule for consumed transfer limit reduce.
 */
export interface TransferLimitUnlockScheduleV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: number): Promise<(bigint | undefined)>
    getMany(block: Block, keys: number[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (bigint | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (bigint | undefined)][]>
}

export const limitedAssets =  {
    /**
     *  Assets with transfer limitation.
     */
    v64: new StorageType('BridgeProxy.LimitedAssets', 'Default', [v64.AssetId32], sts.boolean()) as LimitedAssetsV64,
}

/**
 *  Assets with transfer limitation.
 */
export interface LimitedAssetsV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v64.AssetId32): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v64.AssetId32[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v64.AssetId32[]>
    getKeys(block: Block, key: v64.AssetId32): Promise<v64.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.AssetId32): AsyncIterable<v64.AssetId32[]>
    getPairs(block: Block): Promise<[k: v64.AssetId32, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v64.AssetId32): Promise<[k: v64.AssetId32, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.AssetId32, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.AssetId32): AsyncIterable<[k: v64.AssetId32, v: (boolean | undefined)][]>
}
