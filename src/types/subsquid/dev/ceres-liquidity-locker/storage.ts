import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const feesOptionOneAccount =  {
    /**
     *  Account for collecting fees from Option 1
     */
    v70: new StorageType('CeresLiquidityLocker.FeesOptionOneAccount', 'Default', [], v70.AccountId32) as FeesOptionOneAccountV70,
}

/**
 *  Account for collecting fees from Option 1
 */
export interface FeesOptionOneAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const feesOptionTwoAccount =  {
    /**
     *  Account for collecting fees from Option 2
     */
    v70: new StorageType('CeresLiquidityLocker.FeesOptionTwoAccount', 'Default', [], v70.AccountId32) as FeesOptionTwoAccountV70,
}

/**
 *  Account for collecting fees from Option 2
 */
export interface FeesOptionTwoAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const feesOptionTwoCeresAmount =  {
    /**
     *  Amount of CERES for locker fees option two
     */
    v70: new StorageType('CeresLiquidityLocker.FeesOptionTwoCeresAmount', 'Default', [], sts.bigint()) as FeesOptionTwoCeresAmountV70,
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface FeesOptionTwoCeresAmountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing CERES amount fee
     */
    v70: new StorageType('CeresLiquidityLocker.AuthorityAccount', 'Default', [], v70.AccountId32) as AuthorityAccountV70,
}

/**
 *  Account which has permissions for changing CERES amount fee
 */
export interface AuthorityAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v70: new StorageType('CeresLiquidityLocker.PalletStorageVersion', 'Default', [], v70.StorageVersion) as PalletStorageVersionV70,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.StorageVersion
    get(block: Block): Promise<(v70.StorageVersion | undefined)>
}

export const lockerData =  {
    /**
     *  Contains data about lockups for each account
     */
    v70: new StorageType('CeresLiquidityLocker.LockerData', 'Default', [v70.AccountId32], sts.array(() => v70.LockInfo)) as LockerDataV70,
}

/**
 *  Contains data about lockups for each account
 */
export interface LockerDataV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.LockInfo[]
    get(block: Block, key: v70.AccountId32): Promise<(v70.LockInfo[] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.LockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.LockInfo[] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.LockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.LockInfo[] | undefined)][]>
}
