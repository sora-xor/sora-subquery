import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'
import * as v19 from '../v19'
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
    v1: new StorageType('PoolXYK.Reserves', 'Default', [v1.AssetId, v1.AssetId], sts.tuple(() => [v1.Balance, v1.Balance])) as ReservesV1,
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
export interface ReservesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.Balance, v1.Balance]
    get(block: Block, key1: v1.AssetId, key2: v1.AssetId): Promise<([v1.Balance, v1.Balance] | undefined)>
    getMany(block: Block, keys: [v1.AssetId, v1.AssetId][]): Promise<([v1.Balance, v1.Balance] | undefined)[]>
    getKeys(block: Block): Promise<[v1.AssetId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.AssetId): Promise<[v1.AssetId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.AssetId, key2: v1.AssetId): Promise<[v1.AssetId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.AssetId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AssetId): AsyncIterable<[v1.AssetId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AssetId, key2: v1.AssetId): AsyncIterable<[v1.AssetId, v1.AssetId][]>
    getPairs(block: Block): Promise<[k: [v1.AssetId, v1.AssetId], v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairs(block: Block, key1: v1.AssetId): Promise<[k: [v1.AssetId, v1.AssetId], v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairs(block: Block, key1: v1.AssetId, key2: v1.AssetId): Promise<[k: [v1.AssetId, v1.AssetId], v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.AssetId, v1.AssetId], v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AssetId): AsyncIterable<[k: [v1.AssetId, v1.AssetId], v: ([v1.Balance, v1.Balance] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AssetId, key2: v1.AssetId): AsyncIterable<[k: [v1.AssetId, v1.AssetId], v: ([v1.Balance, v1.Balance] | undefined)][]>
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

export const markerTokensIndex =  {
    /**
     *  Collection of all registered marker tokens.
     */
    v1: new StorageType('PoolXYK.MarkerTokensIndex', 'Default', [], sts.array(() => v1.AssetId)) as MarkerTokensIndexV1,
}

/**
 *  Collection of all registered marker tokens.
 */
export interface MarkerTokensIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AssetId[]
    get(block: Block): Promise<(v1.AssetId[] | undefined)>
}

export const properties =  {
    /**
     *  Properties of particular pool. [Reserves Account Id, Fees Account Id, Marker Asset Id]
     */
    v1: new StorageType('PoolXYK.Properties', 'Optional', [v1.AssetId, v1.AssetId], sts.tuple(() => [v1.AccountId, v1.AccountId, v1.AssetId])) as PropertiesV1,
    /**
     *  Properties of particular pool. [Reserves Account Id, Fees Account Id]
     */
    v7: new StorageType('PoolXYK.Properties', 'Optional', [v7.AssetId, v7.AssetId], sts.tuple(() => [v7.AccountId, v7.AccountId])) as PropertiesV7,
    /**
     *  Properties of particular pool. Base Asset => Target Asset => (Reserves Account Id, Fees Account Id)
     */
    v42: new StorageType('PoolXYK.Properties', 'Optional', [v42.AssetId32, v42.AssetId32], sts.tuple(() => [v42.AccountId32, v42.AccountId32])) as PropertiesV42,
}

/**
 *  Properties of particular pool. [Reserves Account Id, Fees Account Id, Marker Asset Id]
 */
export interface PropertiesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.AssetId, key2: v1.AssetId): Promise<([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)>
    getMany(block: Block, keys: [v1.AssetId, v1.AssetId][]): Promise<([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)[]>
    getKeys(block: Block): Promise<[v1.AssetId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.AssetId): Promise<[v1.AssetId, v1.AssetId][]>
    getKeys(block: Block, key1: v1.AssetId, key2: v1.AssetId): Promise<[v1.AssetId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.AssetId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AssetId): AsyncIterable<[v1.AssetId, v1.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AssetId, key2: v1.AssetId): AsyncIterable<[v1.AssetId, v1.AssetId][]>
    getPairs(block: Block): Promise<[k: [v1.AssetId, v1.AssetId], v: ([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)][]>
    getPairs(block: Block, key1: v1.AssetId): Promise<[k: [v1.AssetId, v1.AssetId], v: ([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)][]>
    getPairs(block: Block, key1: v1.AssetId, key2: v1.AssetId): Promise<[k: [v1.AssetId, v1.AssetId], v: ([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.AssetId, v1.AssetId], v: ([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AssetId): AsyncIterable<[k: [v1.AssetId, v1.AssetId], v: ([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AssetId, key2: v1.AssetId): AsyncIterable<[k: [v1.AssetId, v1.AssetId], v: ([v1.AccountId, v1.AccountId, v1.AssetId] | undefined)][]>
}

/**
 *  Properties of particular pool. [Reserves Account Id, Fees Account Id]
 */
export interface PropertiesV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v7.AssetId, key2: v7.AssetId): Promise<([v7.AccountId, v7.AccountId] | undefined)>
    getMany(block: Block, keys: [v7.AssetId, v7.AssetId][]): Promise<([v7.AccountId, v7.AccountId] | undefined)[]>
    getKeys(block: Block): Promise<[v7.AssetId, v7.AssetId][]>
    getKeys(block: Block, key1: v7.AssetId): Promise<[v7.AssetId, v7.AssetId][]>
    getKeys(block: Block, key1: v7.AssetId, key2: v7.AssetId): Promise<[v7.AssetId, v7.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v7.AssetId, v7.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v7.AssetId): AsyncIterable<[v7.AssetId, v7.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v7.AssetId, key2: v7.AssetId): AsyncIterable<[v7.AssetId, v7.AssetId][]>
    getPairs(block: Block): Promise<[k: [v7.AssetId, v7.AssetId], v: ([v7.AccountId, v7.AccountId] | undefined)][]>
    getPairs(block: Block, key1: v7.AssetId): Promise<[k: [v7.AssetId, v7.AssetId], v: ([v7.AccountId, v7.AccountId] | undefined)][]>
    getPairs(block: Block, key1: v7.AssetId, key2: v7.AssetId): Promise<[k: [v7.AssetId, v7.AssetId], v: ([v7.AccountId, v7.AccountId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v7.AssetId, v7.AssetId], v: ([v7.AccountId, v7.AccountId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v7.AssetId): AsyncIterable<[k: [v7.AssetId, v7.AssetId], v: ([v7.AccountId, v7.AccountId] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v7.AssetId, key2: v7.AssetId): AsyncIterable<[k: [v7.AssetId, v7.AssetId], v: ([v7.AccountId, v7.AccountId] | undefined)][]>
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

export const poolProviders =  {
    /**
     *  Liquidity providers of particular pool.
     *  Pool account => Liquidity provider account => Pool token balance
     */
    v7: new StorageType('PoolXYK.PoolProviders', 'Optional', [v7.AccountIdOf, v7.AccountIdOf], v7.Balance) as PoolProvidersV7,
}

/**
 *  Liquidity providers of particular pool.
 *  Pool account => Liquidity provider account => Pool token balance
 */
export interface PoolProvidersV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v7.AccountIdOf, key2: v7.AccountIdOf): Promise<(v7.Balance | undefined)>
    getMany(block: Block, keys: [v7.AccountIdOf, v7.AccountIdOf][]): Promise<(v7.Balance | undefined)[]>
    getKeys(block: Block): Promise<[v7.AccountIdOf, v7.AccountIdOf][]>
    getKeys(block: Block, key1: v7.AccountIdOf): Promise<[v7.AccountIdOf, v7.AccountIdOf][]>
    getKeys(block: Block, key1: v7.AccountIdOf, key2: v7.AccountIdOf): Promise<[v7.AccountIdOf, v7.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v7.AccountIdOf, v7.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v7.AccountIdOf): AsyncIterable<[v7.AccountIdOf, v7.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v7.AccountIdOf, key2: v7.AccountIdOf): AsyncIterable<[v7.AccountIdOf, v7.AccountIdOf][]>
    getPairs(block: Block): Promise<[k: [v7.AccountIdOf, v7.AccountIdOf], v: (v7.Balance | undefined)][]>
    getPairs(block: Block, key1: v7.AccountIdOf): Promise<[k: [v7.AccountIdOf, v7.AccountIdOf], v: (v7.Balance | undefined)][]>
    getPairs(block: Block, key1: v7.AccountIdOf, key2: v7.AccountIdOf): Promise<[k: [v7.AccountIdOf, v7.AccountIdOf], v: (v7.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v7.AccountIdOf, v7.AccountIdOf], v: (v7.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v7.AccountIdOf): AsyncIterable<[k: [v7.AccountIdOf, v7.AccountIdOf], v: (v7.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v7.AccountIdOf, key2: v7.AccountIdOf): AsyncIterable<[k: [v7.AccountIdOf, v7.AccountIdOf], v: (v7.Balance | undefined)][]>
}

export const totalIssuances =  {
    /**
     *  Total issuance of particular pool.
     *  Pool account => Total issuance
     */
    v7: new StorageType('PoolXYK.TotalIssuances', 'Optional', [v7.AccountIdOf], v7.Balance) as TotalIssuancesV7,
}

/**
 *  Total issuance of particular pool.
 *  Pool account => Total issuance
 */
export interface TotalIssuancesV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.AccountIdOf): Promise<(v7.Balance | undefined)>
    getMany(block: Block, keys: v7.AccountIdOf[]): Promise<(v7.Balance | undefined)[]>
    getKeys(block: Block): Promise<v7.AccountIdOf[]>
    getKeys(block: Block, key: v7.AccountIdOf): Promise<v7.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.AccountIdOf): AsyncIterable<v7.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v7.AccountIdOf, v: (v7.Balance | undefined)][]>
    getPairs(block: Block, key: v7.AccountIdOf): Promise<[k: v7.AccountIdOf, v: (v7.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.AccountIdOf, v: (v7.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.AccountIdOf): AsyncIterable<[k: v7.AccountIdOf, v: (v7.Balance | undefined)][]>
}

export const accountPools =  {
    /**
     *  Set of pools in which accounts have some share.
     *  Liquidity provider account => Target Asset of pair (assuming base asset is XOR)
     */
    v19: new StorageType('PoolXYK.AccountPools', 'Default', [v19.AccountIdOf], sts.array(() => v19.AssetIdOf)) as AccountPoolsV19,
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
export interface AccountPoolsV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.AssetIdOf[]
    get(block: Block, key: v19.AccountIdOf): Promise<(v19.AssetIdOf[] | undefined)>
    getMany(block: Block, keys: v19.AccountIdOf[]): Promise<(v19.AssetIdOf[] | undefined)[]>
    getKeys(block: Block): Promise<v19.AccountIdOf[]>
    getKeys(block: Block, key: v19.AccountIdOf): Promise<v19.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v19.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v19.AccountIdOf): AsyncIterable<v19.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v19.AccountIdOf, v: (v19.AssetIdOf[] | undefined)][]>
    getPairs(block: Block, key: v19.AccountIdOf): Promise<[k: v19.AccountIdOf, v: (v19.AssetIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v19.AccountIdOf, v: (v19.AssetIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v19.AccountIdOf): AsyncIterable<[k: v19.AccountIdOf, v: (v19.AssetIdOf[] | undefined)][]>
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
