import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const referrers =  {
    v33: new StorageType('Referrals.Referrers', 'Optional', [v33.AccountId], v33.AccountId) as ReferrersV33,
}

export interface ReferrersV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.AccountId | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.AccountId | undefined)][]>
}

export const referrerBalances =  {
    v33: new StorageType('Referrals.ReferrerBalances', 'Optional', [v33.AccountId], v33.Balance) as ReferrerBalancesV33,
}

export interface ReferrerBalancesV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.Balance | undefined)][]>
}

export const referrals =  {
    v33: new StorageType('Referrals.Referrals', 'Default', [v33.AccountId], sts.array(() => v33.AccountId)) as ReferralsV33,
}

export interface ReferralsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId[]
    get(block: Block, key: v33.AccountId): Promise<(v33.AccountId[] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.AccountId[] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.AccountId[] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.AccountId[] | undefined)][]>
}
