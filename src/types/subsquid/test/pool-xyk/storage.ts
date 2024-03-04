import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const reserves =  {
    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    v33: new StorageType('PoolXYK.Reserves', 'Default', [v33.AssetId, v33.AssetId], sts.tuple(() => [v33.Balance, v33.Balance])) as ReservesV33,
    /**
     *  Updated after last liquidity change operation.
     *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
     *  This storage records is not used as source of information, but used as quick cache for
     *  information that comes from balances for assets from technical accounts.
     *  For example, communication with technical accounts and their storage is not needed, and this
     *  pair to balance cache can be used quickly.
     */
    v42: new StorageType('PoolXYK.Reserves', 'Default', [v42.AssetId32, v42.AssetId32], sts.tuple(() => [sts.bigint(), sts.bigint()])) as ReservesV42,
}

/**
 *  Updated after last liquidity change operation.
 *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
 *  This storage records is not used as source of information, but used as quick cache for
 *  information that comes from balances for assets from technical accounts.
 *  For example, communication with technical accounts and their storage is not needed, and this
 *  pair to balance cache can be used quickly.
 */
export interface ReservesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.Balance, v33.Balance]
    get(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<([v33.Balance, v33.Balance] | undefined)>
    getMany(block: Block, keys: [v33.AssetId, v33.AssetId][]): Promise<([v33.Balance, v33.Balance] | undefined)[]>
    getKeys(block: Block): Promise<[v33.AssetId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AssetId): Promise<[v33.AssetId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetId): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetId, key2: v33.AssetId): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getPairs(block: Block): Promise<[k: [v33.AssetId, v33.AssetId], v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairs(block: Block, key1: v33.AssetId): Promise<[k: [v33.AssetId, v33.AssetId], v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairs(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<[k: [v33.AssetId, v33.AssetId], v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetId): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: ([v33.Balance, v33.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetId, key2: v33.AssetId): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: ([v33.Balance, v33.Balance] | undefined)][]>
}

/**
 *  Updated after last liquidity change operation.
 *  [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
 *  This storage records is not used as source of information, but used as quick cache for
 *  information that comes from balances for assets from technical accounts.
 *  For example, communication with technical accounts and their storage is not needed, and this
 *  pair to balance cache can be used quickly.
 */
export interface ReservesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, bigint]
    get(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<([bigint, bigint] | undefined)>
    getMany(block: Block, keys: [v42.AssetId32, v42.AssetId32][]): Promise<([bigint, bigint] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AssetId32, v42.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: ([bigint, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: ([bigint, bigint] | undefined)][]>
}

export const poolProviders =  {
    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    v33: new StorageType('PoolXYK.PoolProviders', 'Optional', [v33.AccountIdOf, v33.AccountIdOf], v33.Balance) as PoolProvidersV33,
}

/**
 *  Liquidity providers of particular pool.
 *  Pool account => Liquidity provider account => Pool token balance
 */
export interface PoolProvidersV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.AccountIdOf, key2: v33.AccountIdOf): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: [v33.AccountIdOf, v33.AccountIdOf][]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<[v33.AccountIdOf, v33.AccountIdOf][]>
    getKeys(block: Block, key1: v33.AccountIdOf): Promise<[v33.AccountIdOf, v33.AccountIdOf][]>
    getKeys(block: Block, key1: v33.AccountIdOf, key2: v33.AccountIdOf): Promise<[v33.AccountIdOf, v33.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AccountIdOf, v33.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountIdOf): AsyncIterable<[v33.AccountIdOf, v33.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountIdOf, key2: v33.AccountIdOf): AsyncIterable<[v33.AccountIdOf, v33.AccountIdOf][]>
    getPairs(block: Block): Promise<[k: [v33.AccountIdOf, v33.AccountIdOf], v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key1: v33.AccountIdOf): Promise<[k: [v33.AccountIdOf, v33.AccountIdOf], v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key1: v33.AccountIdOf, key2: v33.AccountIdOf): Promise<[k: [v33.AccountIdOf, v33.AccountIdOf], v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AccountIdOf, v33.AccountIdOf], v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountIdOf): AsyncIterable<[k: [v33.AccountIdOf, v33.AccountIdOf], v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountIdOf, key2: v33.AccountIdOf): AsyncIterable<[k: [v33.AccountIdOf, v33.AccountIdOf], v: (v33.Balance | undefined)][]>
}

export const accountPools =  {
    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    v33: new StorageType('PoolXYK.AccountPools', 'Default', [v33.AccountIdOf], sts.array(() => v33.AssetIdOf)) as AccountPoolsV33,
    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    v42: new StorageType('PoolXYK.AccountPools', 'Default', [v42.AccountId32, v42.AssetId32], sts.array(() => v42.AssetId32)) as AccountPoolsV42,
}

/**
 *  Set of pools in which accounts have some share.
 *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
 */
export interface AccountPoolsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AssetIdOf[]
    get(block: Block, key: v33.AccountIdOf): Promise<(v33.AssetIdOf[] | undefined)>
    getMany(block: Block, keys: v33.AccountIdOf[]): Promise<(v33.AssetIdOf[] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountIdOf[]>
    getKeys(block: Block, key: v33.AccountIdOf): Promise<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<v33.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AccountIdOf, v: (v33.AssetIdOf[] | undefined)][]>
    getPairs(block: Block, key: v33.AccountIdOf): Promise<[k: v33.AccountIdOf, v: (v33.AssetIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountIdOf, v: (v33.AssetIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<[k: v33.AccountIdOf, v: (v33.AssetIdOf[] | undefined)][]>
}

/**
 *  Set of pools in which accounts have some share.
 *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
 */
export interface AccountPoolsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AssetId32[]
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(v42.AssetId32[] | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(v42.AssetId32[] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.AssetId32[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.AssetId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.AssetId32[] | undefined)][]>
}

export const totalIssuances =  {
    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    v33: new StorageType('PoolXYK.TotalIssuances', 'Optional', [v33.AccountIdOf], v33.Balance) as TotalIssuancesV33,
}

/**
 *  Total issuance of particular pool.
 *  Pool account => Total issuance
 */
export interface TotalIssuancesV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountIdOf): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: v33.AccountIdOf[]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountIdOf[]>
    getKeys(block: Block, key: v33.AccountIdOf): Promise<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<v33.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AccountIdOf, v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key: v33.AccountIdOf): Promise<[k: v33.AccountIdOf, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountIdOf, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<[k: v33.AccountIdOf, v: (v33.Balance | undefined)][]>
}

export const properties =  {
    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    v33: new StorageType('PoolXYK.Properties', 'Optional', [v33.AssetId, v33.AssetId], sts.tuple(() => [v33.AccountId, v33.AccountId])) as PropertiesV33,
    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    v42: new StorageType('PoolXYK.Properties', 'Optional', [v42.AssetId32, v42.AssetId32], sts.tuple(() => [v42.AccountId32, v42.AccountId32])) as PropertiesV42,
}

/**
 *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
 */
export interface PropertiesV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<([v33.AccountId, v33.AccountId] | undefined)>
    getMany(block: Block, keys: [v33.AssetId, v33.AssetId][]): Promise<([v33.AccountId, v33.AccountId] | undefined)[]>
    getKeys(block: Block): Promise<[v33.AssetId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AssetId): Promise<[v33.AssetId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetId): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetId, key2: v33.AssetId): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getPairs(block: Block): Promise<[k: [v33.AssetId, v33.AssetId], v: ([v33.AccountId, v33.AccountId] | undefined)][]>
    getPairs(block: Block, key1: v33.AssetId): Promise<[k: [v33.AssetId, v33.AssetId], v: ([v33.AccountId, v33.AccountId] | undefined)][]>
    getPairs(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<[k: [v33.AssetId, v33.AssetId], v: ([v33.AccountId, v33.AccountId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: ([v33.AccountId, v33.AccountId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetId): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: ([v33.AccountId, v33.AccountId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetId, key2: v33.AssetId): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: ([v33.AccountId, v33.AccountId] | undefined)][]>
}

/**
 *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
 */
export interface PropertiesV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<([v42.AccountId32, v42.AccountId32] | undefined)>
    getMany(block: Block, keys: [v42.AssetId32, v42.AssetId32][]): Promise<([v42.AccountId32, v42.AccountId32] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AssetId32, v42.AssetId32], v: ([v42.AccountId32, v42.AccountId32] | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: ([v42.AccountId32, v42.AccountId32] | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: ([v42.AccountId32, v42.AccountId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: ([v42.AccountId32, v42.AccountId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: ([v42.AccountId32, v42.AccountId32] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: ([v42.AccountId32, v42.AccountId32] | undefined)][]>
}
