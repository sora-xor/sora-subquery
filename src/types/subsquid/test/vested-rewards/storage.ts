import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v44 from '../v44'
import * as v52 from '../v52'

export const rewards =  {
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v33: new StorageType('VestedRewards.Rewards', 'Default', [v33.AccountId], v33.RewardInfo) as RewardsV33,
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v42: new StorageType('VestedRewards.Rewards', 'Default', [v42.AccountId32], v42.Type_586) as RewardsV42,
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v44: new StorageType('VestedRewards.Rewards', 'Default', [v44.AccountId32], v44.Type_593) as RewardsV44,
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.RewardInfo
    get(block: Block, key: v33.AccountId): Promise<(v33.RewardInfo | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.RewardInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.RewardInfo | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.RewardInfo | undefined)][]>
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_586
    get(block: Block, key: v42.AccountId32): Promise<(v42.Type_586 | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.Type_586 | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.Type_586 | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.Type_586 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.Type_586 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.Type_586 | undefined)][]>
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV44  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v44.Type_593
    get(block: Block, key: v44.AccountId32): Promise<(v44.Type_593 | undefined)>
    getMany(block: Block, keys: v44.AccountId32[]): Promise<(v44.Type_593 | undefined)[]>
    getKeys(block: Block): Promise<v44.AccountId32[]>
    getKeys(block: Block, key: v44.AccountId32): Promise<v44.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v44.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v44.AccountId32): AsyncIterable<v44.AccountId32[]>
    getPairs(block: Block): Promise<[k: v44.AccountId32, v: (v44.Type_593 | undefined)][]>
    getPairs(block: Block, key: v44.AccountId32): Promise<[k: v44.AccountId32, v: (v44.Type_593 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v44.AccountId32, v: (v44.Type_593 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v44.AccountId32): AsyncIterable<[k: v44.AccountId32, v: (v44.Type_593 | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    v33: new StorageType('VestedRewards.TotalRewards', 'Default', [], v33.Balance) as TotalRewardsV33,
}

/**
 *  Reserved for future use
 *  Total amount of PSWAP pending rewards.
 */
export interface TotalRewardsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const marketMakersRegistry =  {
    /**
     *  Registry of market makers with large transaction volumes (>1 XOR per transaction).
     */
    v33: new StorageType('VestedRewards.MarketMakersRegistry', 'Default', [v33.AccountId], v33.MarketMakerInfo) as MarketMakersRegistryV33,
}

/**
 *  Registry of market makers with large transaction volumes (>1 XOR per transaction).
 */
export interface MarketMakersRegistryV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.MarketMakerInfo
    get(block: Block, key: v33.AccountId): Promise<(v33.MarketMakerInfo | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.MarketMakerInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.MarketMakerInfo | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.MarketMakerInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.MarketMakerInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.MarketMakerInfo | undefined)][]>
}

export const marketMakingPairs =  {
    /**
     *  Market making pairs storage.
     */
    v33: new StorageType('VestedRewards.MarketMakingPairs', 'Default', [v33.AssetId, v33.AssetId], sts.unit()) as MarketMakingPairsV33,
    /**
     *  Market making pairs storage.
     */
    v42: new StorageType('VestedRewards.MarketMakingPairs', 'Default', [v42.AssetId32, v42.AssetId32], sts.unit()) as MarketMakingPairsV42,
}

/**
 *  Market making pairs storage.
 */
export interface MarketMakingPairsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): null
    get(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<(null | undefined)>
    getMany(block: Block, keys: [v33.AssetId, v33.AssetId][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[v33.AssetId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AssetId): Promise<[v33.AssetId, v33.AssetId][]>
    getKeys(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetId): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AssetId, key2: v33.AssetId): AsyncIterable<[v33.AssetId, v33.AssetId][]>
    getPairs(block: Block): Promise<[k: [v33.AssetId, v33.AssetId], v: (null | undefined)][]>
    getPairs(block: Block, key1: v33.AssetId): Promise<[k: [v33.AssetId, v33.AssetId], v: (null | undefined)][]>
    getPairs(block: Block, key1: v33.AssetId, key2: v33.AssetId): Promise<[k: [v33.AssetId, v33.AssetId], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetId): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AssetId, key2: v33.AssetId): AsyncIterable<[k: [v33.AssetId, v33.AssetId], v: (null | undefined)][]>
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
    v52: new StorageType('VestedRewards.CrowdloanInfos', 'Optional', [v52.CrowdloanTag], v52.CrowdloanInfo) as CrowdloanInfosV52,
}

/**
 *  Information about crowdloan
 */
export interface CrowdloanInfosV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v52.CrowdloanTag): Promise<(v52.CrowdloanInfo | undefined)>
    getMany(block: Block, keys: v52.CrowdloanTag[]): Promise<(v52.CrowdloanInfo | undefined)[]>
    getKeys(block: Block): Promise<v52.CrowdloanTag[]>
    getKeys(block: Block, key: v52.CrowdloanTag): Promise<v52.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.CrowdloanTag): AsyncIterable<v52.CrowdloanTag[]>
    getPairs(block: Block): Promise<[k: v52.CrowdloanTag, v: (v52.CrowdloanInfo | undefined)][]>
    getPairs(block: Block, key: v52.CrowdloanTag): Promise<[k: v52.CrowdloanTag, v: (v52.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.CrowdloanTag, v: (v52.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.CrowdloanTag): AsyncIterable<[k: v52.CrowdloanTag, v: (v52.CrowdloanInfo | undefined)][]>
}

export const crowdloanUserInfos =  {
    /**
     *  Information about crowdloan rewards claimed by user
     */
    v52: new StorageType('VestedRewards.CrowdloanUserInfos', 'Optional', [v52.AccountId32, v52.CrowdloanTag], v52.CrowdloanUserInfo) as CrowdloanUserInfosV52,
}

/**
 *  Information about crowdloan rewards claimed by user
 */
export interface CrowdloanUserInfosV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v52.AccountId32, key2: v52.CrowdloanTag): Promise<(v52.CrowdloanUserInfo | undefined)>
    getMany(block: Block, keys: [v52.AccountId32, v52.CrowdloanTag][]): Promise<(v52.CrowdloanUserInfo | undefined)[]>
    getKeys(block: Block): Promise<[v52.AccountId32, v52.CrowdloanTag][]>
    getKeys(block: Block, key1: v52.AccountId32): Promise<[v52.AccountId32, v52.CrowdloanTag][]>
    getKeys(block: Block, key1: v52.AccountId32, key2: v52.CrowdloanTag): Promise<[v52.AccountId32, v52.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v52.AccountId32, v52.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.AccountId32): AsyncIterable<[v52.AccountId32, v52.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.AccountId32, key2: v52.CrowdloanTag): AsyncIterable<[v52.AccountId32, v52.CrowdloanTag][]>
    getPairs(block: Block): Promise<[k: [v52.AccountId32, v52.CrowdloanTag], v: (v52.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v52.AccountId32): Promise<[k: [v52.AccountId32, v52.CrowdloanTag], v: (v52.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v52.AccountId32, key2: v52.CrowdloanTag): Promise<[k: [v52.AccountId32, v52.CrowdloanTag], v: (v52.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v52.AccountId32, v52.CrowdloanTag], v: (v52.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.AccountId32): AsyncIterable<[k: [v52.AccountId32, v52.CrowdloanTag], v: (v52.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.AccountId32, key2: v52.CrowdloanTag): AsyncIterable<[k: [v52.AccountId32, v52.CrowdloanTag], v: (v52.CrowdloanUserInfo | undefined)][]>
}
