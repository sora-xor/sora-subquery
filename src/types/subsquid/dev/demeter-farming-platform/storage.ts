import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const tokenInfos =  {
    v70: new StorageType('DemeterFarmingPlatform.TokenInfos', 'Optional', [v70.AssetId32], v70.TokenInfo) as TokenInfosV70,
}

export interface TokenInfosV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AssetId32): Promise<(v70.TokenInfo | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(v70.TokenInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (v70.TokenInfo | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (v70.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (v70.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (v70.TokenInfo | undefined)][]>
}

export const userInfos =  {
    v70: new StorageType('DemeterFarmingPlatform.UserInfos', 'Default', [v70.AccountId32], sts.array(() => v70.UserInfo)) as UserInfosV70,
}

export interface UserInfosV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.UserInfo[]
    get(block: Block, key: v70.AccountId32): Promise<(v70.UserInfo[] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.UserInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.UserInfo[] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.UserInfo[] | undefined)][]>
}

export const pools =  {
    v70: new StorageType('DemeterFarmingPlatform.Pools', 'Default', [v70.AssetId32, v70.AssetId32], sts.array(() => v70.PoolData)) as PoolsV70,
}

export interface PoolsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.PoolData[]
    get(block: Block, key1: v70.AssetId32, key2: v70.AssetId32): Promise<(v70.PoolData[] | undefined)>
    getMany(block: Block, keys: [v70.AssetId32, v70.AssetId32][]): Promise<(v70.PoolData[] | undefined)[]>
    getKeys(block: Block): Promise<[v70.AssetId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AssetId32): Promise<[v70.AssetId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AssetId32, key2: v70.AssetId32): Promise<[v70.AssetId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AssetId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AssetId32): AsyncIterable<[v70.AssetId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AssetId32, key2: v70.AssetId32): AsyncIterable<[v70.AssetId32, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.AssetId32, v70.AssetId32], v: (v70.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v70.AssetId32): Promise<[k: [v70.AssetId32, v70.AssetId32], v: (v70.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v70.AssetId32, key2: v70.AssetId32): Promise<[k: [v70.AssetId32, v70.AssetId32], v: (v70.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AssetId32, v70.AssetId32], v: (v70.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AssetId32): AsyncIterable<[k: [v70.AssetId32, v70.AssetId32], v: (v70.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AssetId32, key2: v70.AssetId32): AsyncIterable<[k: [v70.AssetId32, v70.AssetId32], v: (v70.PoolData[] | undefined)][]>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v70: new StorageType('DemeterFarmingPlatform.PalletStorageVersion', 'Default', [], v70.Type_809) as PalletStorageVersionV70,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_809
    get(block: Block): Promise<(v70.Type_809 | undefined)>
}

export const authorityAccount =  {
    v70: new StorageType('DemeterFarmingPlatform.AuthorityAccount', 'Default', [], v70.AccountId32) as AuthorityAccountV70,
}

export interface AuthorityAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const feeAccount =  {
    /**
     *  Account for fees
     */
    v70: new StorageType('DemeterFarmingPlatform.FeeAccount', 'Default', [], v70.AccountId32) as FeeAccountV70,
}

/**
 *  Account for fees
 */
export interface FeeAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}
