import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const rewards =  {
    /**
     *  Reserved for future use
     *  Mapping between users and their owned rewards of different kinds, which are vested.
     */
    v70: new StorageType('VestedRewards.Rewards', 'Default', [v70.AccountId32], v70.Type_759) as RewardsV70,
}

/**
 *  Reserved for future use
 *  Mapping between users and their owned rewards of different kinds, which are vested.
 */
export interface RewardsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_759
    get(block: Block, key: v70.AccountId32): Promise<(v70.Type_759 | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.Type_759 | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.Type_759 | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.Type_759 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.Type_759 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.Type_759 | undefined)][]>
}

export const totalRewards =  {
    /**
     *  Reserved for future use
     *  Total amount of PSWAP pending rewards.
     */
    v70: new StorageType('VestedRewards.TotalRewards', 'Default', [], sts.bigint()) as TotalRewardsV70,
}

/**
 *  Reserved for future use
 *  Total amount of PSWAP pending rewards.
 */
export interface TotalRewardsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const crowdloanInfos =  {
    /**
     *  Information about crowdloan
     */
    v70: new StorageType('VestedRewards.CrowdloanInfos', 'Optional', [v70.CrowdloanTag], v70.CrowdloanInfo) as CrowdloanInfosV70,
}

/**
 *  Information about crowdloan
 */
export interface CrowdloanInfosV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.CrowdloanTag): Promise<(v70.CrowdloanInfo | undefined)>
    getMany(block: Block, keys: v70.CrowdloanTag[]): Promise<(v70.CrowdloanInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.CrowdloanTag[]>
    getKeys(block: Block, key: v70.CrowdloanTag): Promise<v70.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.CrowdloanTag[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.CrowdloanTag): AsyncIterable<v70.CrowdloanTag[]>
    getPairs(block: Block): Promise<[k: v70.CrowdloanTag, v: (v70.CrowdloanInfo | undefined)][]>
    getPairs(block: Block, key: v70.CrowdloanTag): Promise<[k: v70.CrowdloanTag, v: (v70.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.CrowdloanTag, v: (v70.CrowdloanInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.CrowdloanTag): AsyncIterable<[k: v70.CrowdloanTag, v: (v70.CrowdloanInfo | undefined)][]>
}

export const crowdloanUserInfos =  {
    /**
     *  Information about crowdloan rewards claimed by user
     */
    v70: new StorageType('VestedRewards.CrowdloanUserInfos', 'Optional', [v70.AccountId32, v70.CrowdloanTag], v70.CrowdloanUserInfo) as CrowdloanUserInfosV70,
}

/**
 *  Information about crowdloan rewards claimed by user
 */
export interface CrowdloanUserInfosV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.AccountId32, key2: v70.CrowdloanTag): Promise<(v70.CrowdloanUserInfo | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, v70.CrowdloanTag][]): Promise<(v70.CrowdloanUserInfo | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, v70.CrowdloanTag][]>
    getKeys(block: Block, key1: v70.AccountId32): Promise<[v70.AccountId32, v70.CrowdloanTag][]>
    getKeys(block: Block, key1: v70.AccountId32, key2: v70.CrowdloanTag): Promise<[v70.AccountId32, v70.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, v70.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[v70.AccountId32, v70.CrowdloanTag][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.CrowdloanTag): AsyncIterable<[v70.AccountId32, v70.CrowdloanTag][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, v70.CrowdloanTag], v: (v70.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32): Promise<[k: [v70.AccountId32, v70.CrowdloanTag], v: (v70.CrowdloanUserInfo | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32, key2: v70.CrowdloanTag): Promise<[k: [v70.AccountId32, v70.CrowdloanTag], v: (v70.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, v70.CrowdloanTag], v: (v70.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[k: [v70.AccountId32, v70.CrowdloanTag], v: (v70.CrowdloanUserInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.CrowdloanTag): AsyncIterable<[k: [v70.AccountId32, v70.CrowdloanTag], v: (v70.CrowdloanUserInfo | undefined)][]>
}
