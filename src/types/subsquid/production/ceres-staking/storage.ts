import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v19 from '../v19'
import * as v26 from '../v26'

export const stakers =  {
    /**
     *  AccountId -> StakingInfo
     */
    v19: new StorageType('CeresStaking.Stakers', 'Default', [v19.AccountIdOf], v19.StakingInfo) as StakersV19,
}

/**
 *  AccountId -> StakingInfo
 */
export interface StakersV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.StakingInfo
    get(block: Block, key: v19.AccountIdOf): Promise<(v19.StakingInfo | undefined)>
    getMany(block: Block, keys: v19.AccountIdOf[]): Promise<(v19.StakingInfo | undefined)[]>
    getKeys(block: Block): Promise<v19.AccountIdOf[]>
    getKeys(block: Block, key: v19.AccountIdOf): Promise<v19.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v19.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v19.AccountIdOf): AsyncIterable<v19.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v19.AccountIdOf, v: (v19.StakingInfo | undefined)][]>
    getPairs(block: Block, key: v19.AccountIdOf): Promise<[k: v19.AccountIdOf, v: (v19.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v19.AccountIdOf, v: (v19.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v19.AccountIdOf): AsyncIterable<[k: v19.AccountIdOf, v: (v19.StakingInfo | undefined)][]>
}

export const totalDeposited =  {
    v19: new StorageType('CeresStaking.TotalDeposited', 'Default', [], v19.Balance) as TotalDepositedV19,
}

export interface TotalDepositedV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Balance
    get(block: Block): Promise<(v19.Balance | undefined)>
}

export const rewardsRemaining =  {
    v19: new StorageType('CeresStaking.RewardsRemaining', 'Default', [], v19.Balance) as RewardsRemainingV19,
}

export interface RewardsRemainingV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Balance
    get(block: Block): Promise<(v19.Balance | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing remaining rewards
     */
    v26: new StorageType('CeresStaking.AuthorityAccount', 'Default', [], v26.AccountIdOf) as AuthorityAccountV26,
}

/**
 *  Account which has permissions for changing remaining rewards
 */
export interface AuthorityAccountV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.AccountIdOf
    get(block: Block): Promise<(v26.AccountIdOf | undefined)>
}
