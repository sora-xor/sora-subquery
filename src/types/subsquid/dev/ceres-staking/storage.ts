import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing remaining rewards
     */
    v70: new StorageType('CeresStaking.AuthorityAccount', 'Default', [], v70.AccountId32) as AuthorityAccountV70,
}

/**
 *  Account which has permissions for changing remaining rewards
 */
export interface AuthorityAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const stakers =  {
    /**
     *  AccountId -> StakingInfo
     */
    v70: new StorageType('CeresStaking.Stakers', 'Default', [v70.AccountId32], v70.StakingInfo) as StakersV70,
}

/**
 *  AccountId -> StakingInfo
 */
export interface StakersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.StakingInfo
    get(block: Block, key: v70.AccountId32): Promise<(v70.StakingInfo | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.StakingInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.StakingInfo | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.StakingInfo | undefined)][]>
}

export const totalDeposited =  {
    v70: new StorageType('CeresStaking.TotalDeposited', 'Default', [], sts.bigint()) as TotalDepositedV70,
}

export interface TotalDepositedV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const rewardsRemaining =  {
    v70: new StorageType('CeresStaking.RewardsRemaining', 'Default', [], sts.bigint()) as RewardsRemainingV70,
}

export interface RewardsRemainingV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
