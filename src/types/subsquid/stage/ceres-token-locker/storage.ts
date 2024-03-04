import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v42 from '../v42'

export const feesAccount =  {
    /**
     *  Account for collecting fees
     */
    v33: new StorageType('CeresTokenLocker.FeesAccount', 'Default', [], v33.AccountIdOf) as FeesAccountV33,
}

/**
 *  Account for collecting fees
 */
export interface FeesAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing fee
     */
    v33: new StorageType('CeresTokenLocker.AuthorityAccount', 'Default', [], v33.AccountIdOf) as AuthorityAccountV33,
}

/**
 *  Account which has permissions for changing fee
 */
export interface AuthorityAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const feeAmount =  {
    /**
     *  Amount of CERES for locker fees option two
     */
    v33: new StorageType('CeresTokenLocker.FeeAmount', 'Default', [], v33.Balance) as FeeAmountV33,
}

/**
 *  Amount of CERES for locker fees option two
 */
export interface FeeAmountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const tokenLockerData =  {
    v33: new StorageType('CeresTokenLocker.TokenLockerData', 'Default', [v33.AccountIdOf], sts.array(() => v33.TokenLockInfo)) as TokenLockerDataV33,
    v37: new StorageType('CeresTokenLocker.TokenLockerData', 'Default', [v37.AccountIdOf], sts.array(() => v37.TokenLockInfo)) as TokenLockerDataV37,
    v42: new StorageType('CeresTokenLocker.TokenLockerData', 'Default', [v42.AccountId32], sts.array(() => v42.TokenLockInfo)) as TokenLockerDataV42,
}

export interface TokenLockerDataV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.TokenLockInfo[]
    get(block: Block, key: v33.AccountIdOf): Promise<(v33.TokenLockInfo[] | undefined)>
    getMany(block: Block, keys: v33.AccountIdOf[]): Promise<(v33.TokenLockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountIdOf[]>
    getKeys(block: Block, key: v33.AccountIdOf): Promise<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<v33.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AccountIdOf, v: (v33.TokenLockInfo[] | undefined)][]>
    getPairs(block: Block, key: v33.AccountIdOf): Promise<[k: v33.AccountIdOf, v: (v33.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountIdOf, v: (v33.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<[k: v33.AccountIdOf, v: (v33.TokenLockInfo[] | undefined)][]>
}

export interface TokenLockerDataV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.TokenLockInfo[]
    get(block: Block, key: v37.AccountIdOf): Promise<(v37.TokenLockInfo[] | undefined)>
    getMany(block: Block, keys: v37.AccountIdOf[]): Promise<(v37.TokenLockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v37.AccountIdOf[]>
    getKeys(block: Block, key: v37.AccountIdOf): Promise<v37.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v37.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v37.AccountIdOf): AsyncIterable<v37.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v37.AccountIdOf, v: (v37.TokenLockInfo[] | undefined)][]>
    getPairs(block: Block, key: v37.AccountIdOf): Promise<[k: v37.AccountIdOf, v: (v37.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v37.AccountIdOf, v: (v37.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v37.AccountIdOf): AsyncIterable<[k: v37.AccountIdOf, v: (v37.TokenLockInfo[] | undefined)][]>
}

export interface TokenLockerDataV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.TokenLockInfo[]
    get(block: Block, key: v42.AccountId32): Promise<(v42.TokenLockInfo[] | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.TokenLockInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.TokenLockInfo[] | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.TokenLockInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.TokenLockInfo[] | undefined)][]>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v37: new StorageType('CeresTokenLocker.PalletStorageVersion', 'Default', [], v37.StorageVersion) as PalletStorageVersionV37,
    /**
     *  Pallet storage version
     */
    v42: new StorageType('CeresTokenLocker.PalletStorageVersion', 'Default', [], v42.Type_616) as PalletStorageVersionV42,
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
    getDefault(block: Block): v42.Type_616
    get(block: Block): Promise<(v42.Type_616 | undefined)>
}
