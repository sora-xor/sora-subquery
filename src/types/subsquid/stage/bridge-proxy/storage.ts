import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v54 from '../v54'
import * as v55 from '../v55'
import * as v57 from '../v57'
import * as v62 from '../v62'
import * as v70 from '../v70'

export const transactions =  {
    v54: new StorageType('BridgeProxy.Transactions', 'Optional', [sts.tuple(() => [v54.GenericNetworkId, v54.AccountId32]), v54.H256], v54.BridgeRequest) as TransactionsV54,
    v70: new StorageType('BridgeProxy.Transactions', 'Optional', [sts.tuple(() => [v70.GenericNetworkId, v70.AccountId32]), v70.H256], v70.BridgeRequest) as TransactionsV70,
}

export interface TransactionsV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: [v54.GenericNetworkId, v54.AccountId32], key2: v54.H256): Promise<(v54.BridgeRequest | undefined)>
    getMany(block: Block, keys: [[v54.GenericNetworkId, v54.AccountId32], v54.H256][]): Promise<(v54.BridgeRequest | undefined)[]>
    getKeys(block: Block): Promise<[[v54.GenericNetworkId, v54.AccountId32], v54.H256][]>
    getKeys(block: Block, key1: [v54.GenericNetworkId, v54.AccountId32]): Promise<[[v54.GenericNetworkId, v54.AccountId32], v54.H256][]>
    getKeys(block: Block, key1: [v54.GenericNetworkId, v54.AccountId32], key2: v54.H256): Promise<[[v54.GenericNetworkId, v54.AccountId32], v54.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[[v54.GenericNetworkId, v54.AccountId32], v54.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v54.GenericNetworkId, v54.AccountId32]): AsyncIterable<[[v54.GenericNetworkId, v54.AccountId32], v54.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: [v54.GenericNetworkId, v54.AccountId32], key2: v54.H256): AsyncIterable<[[v54.GenericNetworkId, v54.AccountId32], v54.H256][]>
    getPairs(block: Block): Promise<[k: [[v54.GenericNetworkId, v54.AccountId32], v54.H256], v: (v54.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v54.GenericNetworkId, v54.AccountId32]): Promise<[k: [[v54.GenericNetworkId, v54.AccountId32], v54.H256], v: (v54.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: [v54.GenericNetworkId, v54.AccountId32], key2: v54.H256): Promise<[k: [[v54.GenericNetworkId, v54.AccountId32], v54.H256], v: (v54.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [[v54.GenericNetworkId, v54.AccountId32], v54.H256], v: (v54.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v54.GenericNetworkId, v54.AccountId32]): AsyncIterable<[k: [[v54.GenericNetworkId, v54.AccountId32], v54.H256], v: (v54.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: [v54.GenericNetworkId, v54.AccountId32], key2: v54.H256): AsyncIterable<[k: [[v54.GenericNetworkId, v54.AccountId32], v54.H256], v: (v54.BridgeRequest | undefined)][]>
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
    v54: new StorageType('BridgeProxy.Senders', 'Optional', [v54.GenericNetworkId, v54.H256], v54.AccountId32) as SendersV54,
    v70: new StorageType('BridgeProxy.Senders', 'Optional', [v70.GenericNetworkId, v70.H256], v70.AccountId32) as SendersV70,
}

export interface SendersV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v54.GenericNetworkId, key2: v54.H256): Promise<(v54.AccountId32 | undefined)>
    getMany(block: Block, keys: [v54.GenericNetworkId, v54.H256][]): Promise<(v54.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v54.GenericNetworkId, v54.H256][]>
    getKeys(block: Block, key1: v54.GenericNetworkId): Promise<[v54.GenericNetworkId, v54.H256][]>
    getKeys(block: Block, key1: v54.GenericNetworkId, key2: v54.H256): Promise<[v54.GenericNetworkId, v54.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v54.GenericNetworkId, v54.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId): AsyncIterable<[v54.GenericNetworkId, v54.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId, key2: v54.H256): AsyncIterable<[v54.GenericNetworkId, v54.H256][]>
    getPairs(block: Block): Promise<[k: [v54.GenericNetworkId, v54.H256], v: (v54.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v54.GenericNetworkId): Promise<[k: [v54.GenericNetworkId, v54.H256], v: (v54.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v54.GenericNetworkId, key2: v54.H256): Promise<[k: [v54.GenericNetworkId, v54.H256], v: (v54.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v54.GenericNetworkId, v54.H256], v: (v54.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId): AsyncIterable<[k: [v54.GenericNetworkId, v54.H256], v: (v54.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId, key2: v54.H256): AsyncIterable<[k: [v54.GenericNetworkId, v54.H256], v: (v54.AccountId32 | undefined)][]>
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
    v55: new StorageType('BridgeProxy.SidechainFeePaid', 'Optional', [v55.GenericNetworkId, v55.H160], sts.bigint()) as SidechainFeePaidV55,
    /**
     *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
     */
    v70: new StorageType('BridgeProxy.SidechainFeePaid', 'Optional', [v70.GenericNetworkId, v70.H160], sts.bigint()) as SidechainFeePaidV70,
}

/**
 *  Fee paid for relayed tx on sidechain. Map ((Network ID, Address) => Cumulative Fee Paid).
 */
export interface SidechainFeePaidV55  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v55.GenericNetworkId, key2: v55.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v55.GenericNetworkId, v55.H160][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v55.GenericNetworkId, v55.H160][]>
    getKeys(block: Block, key1: v55.GenericNetworkId): Promise<[v55.GenericNetworkId, v55.H160][]>
    getKeys(block: Block, key1: v55.GenericNetworkId, key2: v55.H160): Promise<[v55.GenericNetworkId, v55.H160][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v55.GenericNetworkId, v55.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v55.GenericNetworkId): AsyncIterable<[v55.GenericNetworkId, v55.H160][]>
    getKeysPaged(pageSize: number, block: Block, key1: v55.GenericNetworkId, key2: v55.H160): AsyncIterable<[v55.GenericNetworkId, v55.H160][]>
    getPairs(block: Block): Promise<[k: [v55.GenericNetworkId, v55.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v55.GenericNetworkId): Promise<[k: [v55.GenericNetworkId, v55.H160], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v55.GenericNetworkId, key2: v55.H160): Promise<[k: [v55.GenericNetworkId, v55.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v55.GenericNetworkId, v55.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v55.GenericNetworkId): AsyncIterable<[k: [v55.GenericNetworkId, v55.H160], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v55.GenericNetworkId, key2: v55.H160): AsyncIterable<[k: [v55.GenericNetworkId, v55.H160], v: (bigint | undefined)][]>
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
    v57: new StorageType('BridgeProxy.LockedAssets', 'Default', [v57.GenericNetworkId, v57.AssetId32], sts.bigint()) as LockedAssetsV57,
    /**
     *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
     */
    v70: new StorageType('BridgeProxy.LockedAssets', 'Default', [v70.GenericNetworkId, v70.AssetId32], sts.bigint()) as LockedAssetsV70,
}

/**
 *  Amount of assets locked by bridge for specific network. Map ((Network ID, Asset ID) => Locked amount).
 */
export interface LockedAssetsV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key1: v57.GenericNetworkId, key2: v57.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [v57.GenericNetworkId, v57.AssetId32][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeys(block: Block, key1: v57.GenericNetworkId): Promise<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeys(block: Block, key1: v57.GenericNetworkId, key2: v57.AssetId32): Promise<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v57.GenericNetworkId): AsyncIterable<[v57.GenericNetworkId, v57.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v57.GenericNetworkId, key2: v57.AssetId32): AsyncIterable<[v57.GenericNetworkId, v57.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v57.GenericNetworkId, v57.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v57.GenericNetworkId): Promise<[k: [v57.GenericNetworkId, v57.AssetId32], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: v57.GenericNetworkId, key2: v57.AssetId32): Promise<[k: [v57.GenericNetworkId, v57.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v57.GenericNetworkId, v57.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v57.GenericNetworkId): AsyncIterable<[k: [v57.GenericNetworkId, v57.AssetId32], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v57.GenericNetworkId, key2: v57.AssetId32): AsyncIterable<[k: [v57.GenericNetworkId, v57.AssetId32], v: (bigint | undefined)][]>
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
    v62: new StorageType('BridgeProxy.TransferLimit', 'Default', [], v62.TransferLimitSettings) as TransferLimitV62,
}

/**
 *  Maximum amount of assets that can be withdrawn during period of time.
 */
export interface TransferLimitV62  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v62.TransferLimitSettings
    get(block: Block): Promise<(v62.TransferLimitSettings | undefined)>
}

export const consumedTransferLimit =  {
    /**
     *  Consumed transfer limit.
     */
    v62: new StorageType('BridgeProxy.ConsumedTransferLimit', 'Default', [], sts.bigint()) as ConsumedTransferLimitV62,
}

/**
 *  Consumed transfer limit.
 */
export interface ConsumedTransferLimitV62  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const transferLimitUnlockSchedule =  {
    /**
     *  Schedule for consumed transfer limit reduce.
     */
    v62: new StorageType('BridgeProxy.TransferLimitUnlockSchedule', 'Default', [sts.number()], sts.bigint()) as TransferLimitUnlockScheduleV62,
}

/**
 *  Schedule for consumed transfer limit reduce.
 */
export interface TransferLimitUnlockScheduleV62  {
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
    v62: new StorageType('BridgeProxy.LimitedAssets', 'Default', [v62.AssetId32], sts.boolean()) as LimitedAssetsV62,
}

/**
 *  Assets with transfer limitation.
 */
export interface LimitedAssetsV62  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v62.AssetId32): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v62.AssetId32[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v62.AssetId32[]>
    getKeys(block: Block, key: v62.AssetId32): Promise<v62.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v62.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v62.AssetId32): AsyncIterable<v62.AssetId32[]>
    getPairs(block: Block): Promise<[k: v62.AssetId32, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v62.AssetId32): Promise<[k: v62.AssetId32, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v62.AssetId32, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v62.AssetId32): AsyncIterable<[k: v62.AssetId32, v: (boolean | undefined)][]>
}
