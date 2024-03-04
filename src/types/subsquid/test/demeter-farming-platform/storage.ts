import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v43 from '../v43'

export const tokenInfos =  {
    v33: new StorageType('DemeterFarmingPlatform.TokenInfos', 'Optional', [v33.AssetIdOf], v33.TokenInfo) as TokenInfosV33,
    v42: new StorageType('DemeterFarmingPlatform.TokenInfos', 'Optional', [v42.AssetId32], v42.TokenInfo) as TokenInfosV42,
}

export interface TokenInfosV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AssetIdOf): Promise<(v33.TokenInfo | undefined)>
    getMany(block: Block, keys: v33.AssetIdOf[]): Promise<(v33.TokenInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.AssetIdOf[]>
    getKeys(block: Block, key: v33.AssetIdOf): Promise<v33.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AssetIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AssetIdOf): AsyncIterable<v33.AssetIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AssetIdOf, v: (v33.TokenInfo | undefined)][]>
    getPairs(block: Block, key: v33.AssetIdOf): Promise<[k: v33.AssetIdOf, v: (v33.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AssetIdOf, v: (v33.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AssetIdOf): AsyncIterable<[k: v33.AssetIdOf, v: (v33.TokenInfo | undefined)][]>
}

export interface TokenInfosV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AssetId32): Promise<(v42.TokenInfo | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(v42.TokenInfo | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (v42.TokenInfo | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (v42.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (v42.TokenInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (v42.TokenInfo | undefined)][]>
}

export const userInfos =  {
    v33: new StorageType('DemeterFarmingPlatform.UserInfos', 'Default', [v33.AccountIdOf], sts.array(() => v33.UserInfo)) as UserInfosV33,
    v42: new StorageType('DemeterFarmingPlatform.UserInfos', 'Default', [v42.AccountId32], sts.array(() => v42.UserInfo)) as UserInfosV42,
    v43: new StorageType('DemeterFarmingPlatform.UserInfos', 'Default', [v43.AccountId32], sts.array(() => v43.UserInfo)) as UserInfosV43,
}

export interface UserInfosV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.UserInfo[]
    get(block: Block, key: v33.AccountIdOf): Promise<(v33.UserInfo[] | undefined)>
    getMany(block: Block, keys: v33.AccountIdOf[]): Promise<(v33.UserInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountIdOf[]>
    getKeys(block: Block, key: v33.AccountIdOf): Promise<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<v33.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AccountIdOf, v: (v33.UserInfo[] | undefined)][]>
    getPairs(block: Block, key: v33.AccountIdOf): Promise<[k: v33.AccountIdOf, v: (v33.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountIdOf, v: (v33.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<[k: v33.AccountIdOf, v: (v33.UserInfo[] | undefined)][]>
}

export interface UserInfosV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.UserInfo[]
    get(block: Block, key: v42.AccountId32): Promise<(v42.UserInfo[] | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.UserInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.UserInfo[] | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.UserInfo[] | undefined)][]>
}

export interface UserInfosV43  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v43.UserInfo[]
    get(block: Block, key: v43.AccountId32): Promise<(v43.UserInfo[] | undefined)>
    getMany(block: Block, keys: v43.AccountId32[]): Promise<(v43.UserInfo[] | undefined)[]>
    getKeys(block: Block): Promise<v43.AccountId32[]>
    getKeys(block: Block, key: v43.AccountId32): Promise<v43.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v43.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v43.AccountId32): AsyncIterable<v43.AccountId32[]>
    getPairs(block: Block): Promise<[k: v43.AccountId32, v: (v43.UserInfo[] | undefined)][]>
    getPairs(block: Block, key: v43.AccountId32): Promise<[k: v43.AccountId32, v: (v43.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v43.AccountId32, v: (v43.UserInfo[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v43.AccountId32): AsyncIterable<[k: v43.AccountId32, v: (v43.UserInfo[] | undefined)][]>
}

export const pools =  {
    v33: new StorageType('DemeterFarmingPlatform.Pools', 'Default', [v33.AssetIdOf, v33.AssetIdOf], sts.array(() => v33.PoolData)) as PoolsV33,
    v42: new StorageType('DemeterFarmingPlatform.Pools', 'Default', [v42.AssetId32, v42.AssetId32], sts.array(() => v42.PoolData)) as PoolsV42,
    v43: new StorageType('DemeterFarmingPlatform.Pools', 'Default', [v43.AssetId32, v43.AssetId32], sts.array(() => v43.PoolData)) as PoolsV43,
}

export interface PoolsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.PoolData[]
    get(block: Block, key1: v33.AssetIdOf, key2: v33.AssetIdOf): Promise<(v33.PoolData[] | undefined)>
    getMany(block: Block, keys: [v33.AssetIdOf, v33.AssetIdOf][]): Promise<(v33.PoolData[] | undefined)[]>
    getKeys(block: Block): Promise<[v33.AssetIdOf, v33.AssetIdOf][]>
    getKeys(block: Block, key1: v33.AssetIdOf): Promise<[v33.AssetIdOf, v33.AssetIdOf][]>
    getKeys(block: Block, key1: v33.AssetIdOf, key2: v33.AssetIdOf): Promise<[v33.AssetIdOf, v33.AssetIdOf][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AssetIdOf, v33.AssetIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetIdOf): AsyncIterable<[v33.AssetIdOf, v33.AssetIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetIdOf, key2: v33.AssetIdOf): AsyncIterable<[v33.AssetIdOf, v33.AssetIdOf][]>
    getPairs(block: Block): Promise<[k: [v33.AssetIdOf, v33.AssetIdOf], v: (v33.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v33.AssetIdOf): Promise<[k: [v33.AssetIdOf, v33.AssetIdOf], v: (v33.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v33.AssetIdOf, key2: v33.AssetIdOf): Promise<[k: [v33.AssetIdOf, v33.AssetIdOf], v: (v33.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AssetIdOf, v33.AssetIdOf], v: (v33.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetIdOf): AsyncIterable<[k: [v33.AssetIdOf, v33.AssetIdOf], v: (v33.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetIdOf, key2: v33.AssetIdOf): AsyncIterable<[k: [v33.AssetIdOf, v33.AssetIdOf], v: (v33.PoolData[] | undefined)][]>
}

export interface PoolsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.PoolData[]
    get(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<(v42.PoolData[] | undefined)>
    getMany(block: Block, keys: [v42.AssetId32, v42.AssetId32][]): Promise<(v42.PoolData[] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AssetId32, v42.AssetId32], v: (v42.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: (v42.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: (v42.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: (v42.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: (v42.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: (v42.PoolData[] | undefined)][]>
}

export interface PoolsV43  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v43.PoolData[]
    get(block: Block, key1: v43.AssetId32, key2: v43.AssetId32): Promise<(v43.PoolData[] | undefined)>
    getMany(block: Block, keys: [v43.AssetId32, v43.AssetId32][]): Promise<(v43.PoolData[] | undefined)[]>
    getKeys(block: Block): Promise<[v43.AssetId32, v43.AssetId32][]>
    getKeys(block: Block, key1: v43.AssetId32): Promise<[v43.AssetId32, v43.AssetId32][]>
    getKeys(block: Block, key1: v43.AssetId32, key2: v43.AssetId32): Promise<[v43.AssetId32, v43.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v43.AssetId32, v43.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v43.AssetId32): AsyncIterable<[v43.AssetId32, v43.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v43.AssetId32, key2: v43.AssetId32): AsyncIterable<[v43.AssetId32, v43.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v43.AssetId32, v43.AssetId32], v: (v43.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v43.AssetId32): Promise<[k: [v43.AssetId32, v43.AssetId32], v: (v43.PoolData[] | undefined)][]>
    getPairs(block: Block, key1: v43.AssetId32, key2: v43.AssetId32): Promise<[k: [v43.AssetId32, v43.AssetId32], v: (v43.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v43.AssetId32, v43.AssetId32], v: (v43.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v43.AssetId32): AsyncIterable<[k: [v43.AssetId32, v43.AssetId32], v: (v43.PoolData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v43.AssetId32, key2: v43.AssetId32): AsyncIterable<[k: [v43.AssetId32, v43.AssetId32], v: (v43.PoolData[] | undefined)][]>
}

export const authorityAccount =  {
    v33: new StorageType('DemeterFarmingPlatform.AuthorityAccount', 'Default', [], v33.AccountIdOf) as AuthorityAccountV33,
}

export interface AuthorityAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const feeAccount =  {
    /**
     *  Account for fees
     */
    v33: new StorageType('DemeterFarmingPlatform.FeeAccount', 'Default', [], v33.AccountIdOf) as FeeAccountV33,
}

/**
 *  Account for fees
 */
export interface FeeAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v43: new StorageType('DemeterFarmingPlatform.PalletStorageVersion', 'Default', [], v43.Type_636) as PalletStorageVersionV43,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV43  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v43.Type_636
    get(block: Block): Promise<(v43.Type_636 | undefined)>
}
