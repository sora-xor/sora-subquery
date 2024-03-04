import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing remaining rewards
     */
    v33: new StorageType('CeresStaking.AuthorityAccount', 'Default', [], v33.AccountIdOf) as AuthorityAccountV33,
}

/**
 *  Account which has permissions for changing remaining rewards
 */
export interface AuthorityAccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountIdOf
    get(block: Block): Promise<(v33.AccountIdOf | undefined)>
}

export const stakers =  {
    /**
     *  AccountId -> StakingInfo
     */
    v33: new StorageType('CeresStaking.Stakers', 'Default', [v33.AccountIdOf], v33.StakingInfo) as StakersV33,
}

/**
 *  AccountId -> StakingInfo
 */
export interface StakersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.StakingInfo
    get(block: Block, key: v33.AccountIdOf): Promise<(v33.StakingInfo | undefined)>
    getMany(block: Block, keys: v33.AccountIdOf[]): Promise<(v33.StakingInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountIdOf[]>
    getKeys(block: Block, key: v33.AccountIdOf): Promise<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<v33.AccountIdOf[]>
    getPairs(block: Block): Promise<[k: v33.AccountIdOf, v: (v33.StakingInfo | undefined)][]>
    getPairs(block: Block, key: v33.AccountIdOf): Promise<[k: v33.AccountIdOf, v: (v33.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountIdOf, v: (v33.StakingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountIdOf): AsyncIterable<[k: v33.AccountIdOf, v: (v33.StakingInfo | undefined)][]>
}

export const totalDeposited =  {
    v33: new StorageType('CeresStaking.TotalDeposited', 'Default', [], v33.Balance) as TotalDepositedV33,
}

export interface TotalDepositedV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const rewardsRemaining =  {
    v33: new StorageType('CeresStaking.RewardsRemaining', 'Default', [], v33.Balance) as RewardsRemainingV33,
}

export interface RewardsRemainingV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}
