import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v1: new StorageType('Balances.TotalIssuance', 'Default', [], v1.Balance) as TotalIssuanceV1,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block): Promise<(v1.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v1: new StorageType('Balances.Account', 'Default', [v1.AccountId], v1.AccountData) as AccountV1,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountData
    get(block: Block, key: v1.AccountId): Promise<(v1.AccountData | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v1: new StorageType('Balances.Locks', 'Default', [v1.AccountId], sts.array(() => v1.BalanceLock)) as LocksV1,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BalanceLock[]
    get(block: Block, key: v1.AccountId): Promise<(v1.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.BalanceLock[] | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    v1: new StorageType('Balances.StorageVersion', 'Default', [], v1.Releases) as StorageVersionV1,
    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    v42: new StorageType('Balances.StorageVersion', 'Default', [], v42.Releases) as StorageVersionV42,
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface StorageVersionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Releases
    get(block: Block): Promise<(v1.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface StorageVersionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Releases
    get(block: Block): Promise<(v42.Releases | undefined)>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v42: new StorageType('Balances.Reserves', 'Default', [v42.AccountId32], sts.array(() => v42.ReserveData)) as ReservesV42,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.ReserveData[]
    get(block: Block, key: v42.AccountId32): Promise<(v42.ReserveData[] | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.ReserveData[] | undefined)][]>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    v53: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV53,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
