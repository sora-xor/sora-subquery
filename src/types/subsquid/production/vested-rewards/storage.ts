import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v22 from '../v22'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v45 from '../v45'
import * as v53 from '../v53'

export const rewards =  {
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v1: new StorageType('VestedRewards.Rewards', 'Default', [v1.AccountId], v1.RewardInfo) as RewardsV1,
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v42: new StorageType('VestedRewards.Rewards', 'Default', [v42.AccountId32], v42.Type_581) as RewardsV42,
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v45: new StorageType('VestedRewards.Rewards', 'Default', [v45.AccountId32], v45.Type_592) as RewardsV45,
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.RewardInfo
    get(block: Block, key: v1.AccountId): Promise<(v1.RewardInfo | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.RewardInfo | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.RewardInfo | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.RewardInfo | undefined)][]>
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_581
    get(block: Block, key: v42.AccountId32): Promise<(v42.Type_581 | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.Type_581 | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.Type_581 | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.Type_581 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.Type_581 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.Type_581 | undefined)][]>
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV45  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v45.Type_592
    get(block: Block, key: v45.AccountId32): Promise<(v45.Type_592 | undefined)>
    getMany(block: Block, keys: v45.AccountId32[]): Promise<(v45.Type_592 | undefined)[]>
    getKeys(block: Block): Promise<v45.AccountId32[]>
    getKeys(block: Block, key: v45.AccountId32): Promise<v45.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v45.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v45.AccountId32): AsyncIterable<v45.AccountId32[]>
    getPairs(block: Block): Promise<[k: v45.AccountId32, v: (v45.Type_592 | undefined)][]>
    getPairs(block: Block, key: v45.AccountId32): Promise<[k: v45.AccountId32, v: (v45.Type_592 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v45.AccountId32, v: (v45.Type_592 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v45.AccountId32): AsyncIterable<[k: v45.AccountId32, v: (v45.Type_592 | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    v1: new StorageType('VestedRewards.TotalRewards', 'Default', [], v1.Balance) as TotalRewardsV1,
}

/**
 *  Reserved for future use
 *  Total amount of PSWAP pending rewards.
 */
export interface TotalRewardsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block): Promise<(v1.Balance | undefined)>
}

export const marketMakersRegistry =  {
    /**
     *  Registry of market makers with large transaction volumes (>1 XOR per transaction).
     */
    v1: new StorageType('VestedRewards.MarketMakersRegistry', 'Default', [v1.AccountId], v1.MarketMakerInfo) as MarketMakersRegistryV1,
}

/**
 *  Registry of market makers with large transaction volumes (>1 XOR per transaction).
 */
export interface MarketMakersRegistryV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.MarketMakerInfo
    get(block: Block, key: v1.AccountId): Promise<(v1.MarketMakerInfo | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.MarketMakerInfo | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.MarketMakerInfo | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.MarketMakerInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.MarketMakerInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.MarketMakerInfo | undefined)][]>
}

export const marketMakingPairs =  {
    /**
     *  Market making pairs storage.
     */
    v22: new StorageType('VestedRewards.MarketMakingPairs', 'Default', [v22.AssetId, v22.AssetId], sts.unit()) as MarketMakingPairsV22,
    /**
     *  Market making pairs storage.
     */
    v42: new StorageType('VestedRewards.MarketMakingPairs', 'Default', [v42.AssetId32, v42.AssetId32], sts.unit()) as MarketMakingPairsV42,
}

/**
 *  Market making pairs storage.
 */
export interface MarketMakingPairsV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): null
    get(block: Block, key1: v22.AssetId, key2: v22.AssetId): Promise<(null | undefined)>
    getMany(block: Block, keys: [v22.AssetId, v22.AssetId][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[v22.AssetId, v22.AssetId][]>
    getKeys(block: Block, key1: v22.AssetId): Promise<[v22.AssetId, v22.AssetId][]>
    getKeys(block: Block, key1: v22.AssetId, key2: v22.AssetId): Promise<[v22.AssetId, v22.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v22.AssetId, v22.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v22.AssetId): AsyncIterable<[v22.AssetId, v22.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v22.AssetId, key2: v22.AssetId): AsyncIterable<[v22.AssetId, v22.AssetId][]>
    getPairs(block: Block): Promise<[k: [v22.AssetId, v22.AssetId], v: (null | undefined)][]>
    getPairs(block: Block, key1: v22.AssetId): Promise<[k: [v22.AssetId, v22.AssetId], v: (null | undefined)][]>
    getPairs(block: Block, key1: v22.AssetId, key2: v22.AssetId): Promise<[k: [v22.AssetId, v22.AssetId], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v22.AssetId, v22.AssetId], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v22.AssetId): AsyncIterable<[k: [v22.AssetId, v22.AssetId], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v22.AssetId, key2: v22.AssetId): AsyncIterable<[k: [v22.AssetId, v22.AssetId], v: (null | undefined)][]>
}

/**
 *  Market making pairs storage.
 */
export interface MarketMakingPairsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): null
    get(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<(null | undefined)>
    getMany(block: Block, keys: [v42.AssetId32, v42.AssetId32][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[v42.AssetId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AssetId32, v42.AssetId32], v: (null | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: (null | undefined)][]>
    getPairs(block: Block, key1: v42.AssetId32, key2: v42.AssetId32): Promise<[k: [v42.AssetId32, v42.AssetId32], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AssetId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AssetId32, v42.AssetId32], v: (null | undefined)][]>
}

export const crowdloanRewards =  {
    /**
     *  Crowdloan vested rewards storage.
     */
    v33: new StorageType('VestedRewards.CrowdloanRewards', 'Default', [v33.AccountId], v33.CrowdloanReward) as CrowdloanRewardsV33,
    /**
     *  Crowdloan vested rewards storage.
     */
    v42: new StorageType('VestedRewards.CrowdloanRewards', 'Default', [v42.AccountId32], v42.CrowdloanReward) as CrowdloanRewardsV42,
}

/**
 *  Crowdloan vested rewards storage.
 */
export interface CrowdloanRewardsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.CrowdloanReward
    get(block: Block, key: v33.AccountId): Promise<(v33.CrowdloanReward | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.CrowdloanReward | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.CrowdloanReward | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.CrowdloanReward | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.CrowdloanReward | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.CrowdloanReward | undefined)][]>
}

/**
 *  Crowdloan vested rewards storage.
 */
export interface CrowdloanRewardsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.CrowdloanReward
    get(block: Block, key: v42.AccountId32): Promise<(v42.CrowdloanReward | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.CrowdloanReward | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.CrowdloanReward | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.CrowdloanReward | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.CrowdloanReward | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.CrowdloanReward | undefined)][]>
}

export const crowdloanClaimHistory =  {
    /**
     *  This storage keeps the last block number, when the user (the first) claimed a reward for
     *  asset (the second key). The block is rounded to days.
     */
    v33: new StorageType('VestedRewards.CrowdloanClaimHistory', 'Default', [v33.AccountId, v33.AssetId], v33.BlockNumber) as CrowdloanClaimHistoryV33,
    /**
     *  This storage keeps the last block number, when the user (the first) claimed a reward for
     *  asset (the second key). The block is rounded to days.
     */
    v42: new StorageType('VestedRewards.CrowdloanClaimHistory', 'Default', [v42.AccountId32, v42.AssetId32], sts.number()) as CrowdloanClaimHistoryV42,
}

/**
 *  This storage keeps the last block number, when the user (the first) claimed a reward for
 *  asset (the second key). The block is rounded to days.
 */
export interface CrowdloanClaimHistoryV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BlockNumber
    get(block: Block, key1: v33.AccountId, key2: v33.AssetId): Promise<(v33.BlockNumber | undefined)>
    getMany(block: Block, keys: [v33.AccountId, v33.AssetId][]): Promise<(v33.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<[v33.AccountId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AccountId): Promise<[v33.AccountId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AccountId, key2: v33.AssetId): Promise<[v33.AccountId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AccountId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[v33.AccountId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: v33.AssetId): AsyncIterable<[v33.AccountId, v33.AssetId][]>
    getPairs(block: Block): Promise<[k: [v33.AccountId, v33.AssetId], v: (v33.BlockNumber | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId): Promise<[k: [v33.AccountId, v33.AssetId], v: (v33.BlockNumber | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId, key2: v33.AssetId): Promise<[k: [v33.AccountId, v33.AssetId], v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AccountId, v33.AssetId], v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[k: [v33.AccountId, v33.AssetId], v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: v33.AssetId): AsyncIterable<[k: [v33.AccountId, v33.AssetId], v: (v33.BlockNumber | undefined)][]>
}

/**
 *  This storage keeps the last block number, when the user (the first) claimed a reward for
 *  asset (the second key). The block is rounded to days.
 */
export interface CrowdloanClaimHistoryV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(number | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (number | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (number | undefined)][]>
}

export const crowdloanInfos =  {
    /**
     *  Information about crowdloan
     */
    v53: new StorageType('VestedRewards.CrowdloanInfos', 'Optional', [v53.CrowdloanTag], v53.CrowdloanInfo) as CrowdloanInfosV53,
}

/**
 *  Information about crowdloan
 */
export interface CrowdloanInfosV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v53.CrowdloanTag): Promise<(v53.CrowdloanInfo | undefined)>
    getMany(block: Block, keys: v53.CrowdloanTag[]): Promise<(v53.CrowdloanInfo | undefined)[]>
    getKeys(block: Block): Promise<v53.CrowdloanTag[]>
    getKeys(block: Block, key: v53.CrowdloanTag): Promise<v53.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v53.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block, key: v53.CrowdloanTag): AsyncIterable<v53.CrowdloanTag[]>
    getPairs(block: Block): Promise<[k: v53.CrowdloanTag, v: (v53.CrowdloanInfo | undefined)][]>
    getPairs(block: Block, key: v53.CrowdloanTag): Promise<[k: v53.CrowdloanTag, v: (v53.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v53.CrowdloanTag, v: (v53.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v53.CrowdloanTag): AsyncIterable<[k: v53.CrowdloanTag, v: (v53.CrowdloanInfo | undefined)][]>
}

export const crowdloanUserInfos =  {
    /**
     *  Information about crowdloan rewards claimed by user
     */
    v53: new StorageType('VestedRewards.CrowdloanUserInfos', 'Optional', [v53.AccountId32, v53.CrowdloanTag], v53.CrowdloanUserInfo) as CrowdloanUserInfosV53,
}

/**
 *  Information about crowdloan rewards claimed by user
 */
export interface CrowdloanUserInfosV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v53.AccountId32, key2: v53.CrowdloanTag): Promise<(v53.CrowdloanUserInfo | undefined)>
    getMany(block: Block, keys: [v53.AccountId32, v53.CrowdloanTag][]): Promise<(v53.CrowdloanUserInfo | undefined)[]>
    getKeys(block: Block): Promise<[v53.AccountId32, v53.CrowdloanTag][]>
    getKeys(block: Block, key1: v53.AccountId32): Promise<[v53.AccountId32, v53.CrowdloanTag][]>
    getKeys(block: Block, key1: v53.AccountId32, key2: v53.CrowdloanTag): Promise<[v53.AccountId32, v53.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v53.AccountId32, v53.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v53.AccountId32): AsyncIterable<[v53.AccountId32, v53.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v53.AccountId32, key2: v53.CrowdloanTag): AsyncIterable<[v53.AccountId32, v53.CrowdloanTag][]>
    getPairs(block: Block): Promise<[k: [v53.AccountId32, v53.CrowdloanTag], v: (v53.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v53.AccountId32): Promise<[k: [v53.AccountId32, v53.CrowdloanTag], v: (v53.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v53.AccountId32, key2: v53.CrowdloanTag): Promise<[k: [v53.AccountId32, v53.CrowdloanTag], v: (v53.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v53.AccountId32, v53.CrowdloanTag], v: (v53.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v53.AccountId32): AsyncIterable<[k: [v53.AccountId32, v53.CrowdloanTag], v: (v53.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v53.AccountId32, key2: v53.CrowdloanTag): AsyncIterable<[k: [v53.AccountId32, v53.CrowdloanTag], v: (v53.CrowdloanUserInfo | undefined)][]>
}
