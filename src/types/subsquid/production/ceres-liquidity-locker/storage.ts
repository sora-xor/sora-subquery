import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v22 from '../v22'
import * as v37 from '../v37'
import * as v42 from '../v42'

export const feesOptionOneAccount =  {
    /**
     *  Account for collecting fees from Option 1
     */
    v22: new StorageType('CeresLiquidityLocker.FeesOptionOneAccount', 'Default', [], v22.AccountIdOf) as FeesOptionOneAccountV22,
}

/**
 *  Account for collecting fees from Option 1
 */
export interface FeesOptionOneAccountV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.AccountIdOf
    get(block: Block): Promise<(v22.AccountIdOf | undefined)>
}

export const feesOptionTwoAccount =  {
    /**
     *  Account for collecting fees from Option 2
     */
    v22: new StorageType('CeresLiquidityLocker.FeesOptionTwoAccount', 'Default', [], v22.AccountIdOf) as FeesOptionTwoAccountV22,
}

/**
 *  Account for collecting fees from Option 2
 */
export interface FeesOptionTwoAccountV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.AccountIdOf
    get(block: Block): Promise<(v22.AccountIdOf | undefined)>
}

export const feesOptionTwoCeresAmount =  {
    /**
     *  Amount of CERES for locker fees option two
     */
    v22: new StorageType('CeresLiquidityLocker.FeesOptionTwoCeresAmount', 'Default', [], v22.Balance) as FeesOptionTwoCeresAmountV22,
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface FeesOptionTwoCeresAmountV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.Balance
    get(block: Block): Promise<(v22.Balance | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing CERES amount fee
     */
    v22: new StorageType('CeresLiquidityLocker.AuthorityAccount', 'Default', [], v22.AccountIdOf) as AuthorityAccountV22,
}

/**
 *  Account which has permissions for changing CERES amount fee
 */
export interface AuthorityAccountV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.AccountIdOf
    get(block: Block): Promise<(v22.AccountIdOf | undefined)>
}

export const lockerData =  {
    v22: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v22.AccountIdOf], sts.array(() => v22.LockInfo)) as LockerDataV22,
    /**
     *  Contains data about lockups for each account
     */
    v37: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v37.AccountIdOf], sts.array(() => v37.LockInfo)) as LockerDataV37,
    /**
     *  Contains data about lockups for each account
     */
    v42: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v42.AccountId32], sts.array(() => v42.LockInfo)) as LockerDataV42,
}

export interface LockerDataV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.LockInfo[]
    get(block: Block, key: v22.AccountIdOf): Promise<(v22.LockInfo[] | undefined)>
    getMany(block: Block, keys: v22.AccountIdOf[]): Promise<(v22.LockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v22.AccountIdOf[]>
    getKeys(block: Block, key: v22.AccountIdOf): Promise<v22.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.AccountIdOf): AsyncIterable<v22.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v22.AccountIdOf, v: (v22.LockInfo[] | undefined)][]>
    getPairs(block: Block, key: v22.AccountIdOf): Promise<[k: v22.AccountIdOf, v: (v22.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.AccountIdOf, v: (v22.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.AccountIdOf): AsyncIterable<[k: v22.AccountIdOf, v: (v22.LockInfo[] | undefined)][]>
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
