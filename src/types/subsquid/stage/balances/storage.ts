import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v33: new StorageType('Balances.TotalIssuance', 'Default', [], v33.Balance) as TotalIssuanceV33,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const account =  {
    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v33: new StorageType('Balances.Account', 'Default', [v33.AccountId], v33.AccountData) as AccountV33,
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountData
    get(block: Block, key: v33.AccountId): Promise<(v33.AccountData | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.AccountData | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v33: new StorageType('Balances.Locks', 'Default', [v33.AccountId], sts.array(() => v33.BalanceLock)) as LocksV33,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BalanceLock[]
    get(block: Block, key: v33.AccountId): Promise<(v33.BalanceLock[] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.BalanceLock[] | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    v33: new StorageType('Balances.StorageVersion', 'Default', [], v33.Releases) as StorageVersionV33,
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
export interface StorageVersionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Releases
    get(block: Block): Promise<(v33.Releases | undefined)>
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
    v52: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceV52,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
