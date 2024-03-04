import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v42 from '../v42'

export const feesOptionOneAccount =  {
    /**
     *  Account for collecting fees from Option 1
     */
    v33: new StorageType('CeresLiquidityLocker.FeesOptionOneAccount', 'Default', [], v33.AccountIdOf) as FeesOptionOneAccountV33,
}

/**
 *  Account for collecting fees from Option 1
 */
export interface FeesOptionOneAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const feesOptionTwoAccount =  {
    /**
     *  Account for collecting fees from Option 2
     */
    v33: new StorageType('CeresLiquidityLocker.FeesOptionTwoAccount', 'Default', [], v33.AccountIdOf) as FeesOptionTwoAccountV33,
}

/**
 *  Account for collecting fees from Option 2
 */
export interface FeesOptionTwoAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const feesOptionTwoCeresAmount =  {
    /**
     *  Amount of CERES for locker fees option two
     */
    v33: new StorageType('CeresLiquidityLocker.FeesOptionTwoCeresAmount', 'Default', [], v33.Balance) as FeesOptionTwoCeresAmountV33,
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface FeesOptionTwoCeresAmountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing CERES amount fee
     */
    v33: new StorageType('CeresLiquidityLocker.AuthorityAccount', 'Default', [], v33.AccountIdOf) as AuthorityAccountV33,
}

/**
 *  Account which has permissions for changing CERES amount fee
 */
export interface AuthorityAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const lockerData =  {
    v33: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v33.AccountIdOf], sts.array(() => v33.LockInfo)) as LockerDataV33,
    /**
     *  Contains data about lockups for each account
     */
    v37: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v37.AccountIdOf], sts.array(() => v37.LockInfo)) as LockerDataV37,
    /**
     *  Contains data about lockups for each account
     */
    v42: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v42.AccountId32], sts.array(() => v42.LockInfo)) as LockerDataV42,
}

export interface LockerDataV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.LockInfo[]
    get(block: Block, key: v33.AccountIdOf): Promise<(v33.LockInfo[] | undefined)>
    getMany(block: Block, keys: v33.AccountIdOf[]): Promise<(v33.LockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountIdOf[]>
    getKeys(block: Block, key: v33.AccountIdOf): Promise<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<v33.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AccountIdOf, v: (v33.LockInfo[] | undefined)][]>
    getPairs(block: Block, key: v33.AccountIdOf): Promise<[k: v33.AccountIdOf, v: (v33.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountIdOf, v: (v33.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<[k: v33.AccountIdOf, v: (v33.LockInfo[] | undefined)][]>
}

/**
 *  Contains data about lockups for each account
 */
export interface LockerDataV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.LockInfo[]
    get(block: Block, key: v37.AccountIdOf): Promise<(v37.LockInfo[] | undefined)>
    getMany(block: Block, keys: v37.AccountIdOf[]): Promise<(v37.LockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v37.AccountIdOf[]>
    getKeys(block: Block, key: v37.AccountIdOf): Promise<v37.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v37.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v37.AccountIdOf): AsyncIterable<v37.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v37.AccountIdOf, v: (v37.LockInfo[] | undefined)][]>
    getPairs(block: Block, key: v37.AccountIdOf): Promise<[k: v37.AccountIdOf, v: (v37.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v37.AccountIdOf, v: (v37.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v37.AccountIdOf): AsyncIterable<[k: v37.AccountIdOf, v: (v37.LockInfo[] | undefined)][]>
}

/**
 *  Contains data about lockups for each account
 */
export interface LockerDataV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.LockInfo[]
    get(block: Block, key: v42.AccountId32): Promise<(v42.LockInfo[] | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.LockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.LockInfo[] | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.LockInfo[] | undefined)][]>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v37: new StorageType('CeresLiquidityLocker.PalletStorageVersion', 'Default', [], v37.StorageVersion) as PalletStorageVersionV37,
    /**
     *  Pallet storage version
     */
    v42: new StorageType('CeresLiquidityLocker.PalletStorageVersion', 'Default', [], v42.StorageVersion) as PalletStorageVersionV42,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.StorageVersion
    get(block: Block): Promise<(v37.StorageVersion | undefined)>
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.StorageVersion
    get(block: Block): Promise<(v42.StorageVersion | undefined)>
}
