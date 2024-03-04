import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const feesAccount =  {
    /**
     *  Account for collecting fees
     */
    v70: new StorageType('CeresTokenLocker.FeesAccount', 'Default', [], v70.AccountId32) as FeesAccountV70,
}

/**
 *  Account for collecting fees
 */
export interface FeesAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing fee
     */
    v70: new StorageType('CeresTokenLocker.AuthorityAccount', 'Default', [], v70.AccountId32) as AuthorityAccountV70,
}

/**
 *  Account which has permissions for changing fee
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
    v70: new StorageType('CeresTokenLocker.PalletStorageVersion', 'Default', [], v70.Type_789) as PalletStorageVersionV70,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_789
    get(block: Block): Promise<(v70.Type_789 | undefined)>
}

export const feeAmount =  {
    /**
     *  Amount of CERES for locker fees option two
     */
    v70: new StorageType('CeresTokenLocker.FeeAmount', 'Default', [], sts.bigint()) as FeeAmountV70,
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface FeeAmountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const tokenLockerData =  {
    v70: new StorageType('CeresTokenLocker.TokenLockerData', 'Default', [v70.AccountId32], sts.array(() => v70.TokenLockInfo)) as TokenLockerDataV70,
}

export interface TokenLockerDataV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.TokenLockInfo[]
    get(block: Block, key: v70.AccountId32): Promise<(v70.TokenLockInfo[] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.TokenLockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.TokenLockInfo[] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.TokenLockInfo[] | undefined)][]>
}
