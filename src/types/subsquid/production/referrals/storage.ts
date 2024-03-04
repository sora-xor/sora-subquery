import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v22 from '../v22'

export const referrers =  {
    v22: new StorageType('Referrals.Referrers', 'Optional', [v22.AccountId], v22.AccountId) as ReferrersV22,
}

export interface ReferrersV22  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v22.AccountId): Promise<(v22.AccountId | undefined)>
    getMany(block: Block, keys: v22.AccountId[]): Promise<(v22.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v22.AccountId[]>
    getKeys(block: Block, key: v22.AccountId): Promise<v22.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.AccountId): AsyncIterable<v22.AccountId[]>
    getPairs(block: Block): Promise<[k: v22.AccountId, v: (v22.AccountId | undefined)][]>
    getPairs(block: Block, key: v22.AccountId): Promise<[k: v22.AccountId, v: (v22.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.AccountId, v: (v22.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.AccountId): AsyncIterable<[k: v22.AccountId, v: (v22.AccountId | undefined)][]>
}

export const referrerBalances =  {
    v22: new StorageType('Referrals.ReferrerBalances', 'Optional', [v22.AccountId], v22.Balance) as ReferrerBalancesV22,
}

export interface ReferrerBalancesV22  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v22.AccountId): Promise<(v22.Balance | undefined)>
    getMany(block: Block, keys: v22.AccountId[]): Promise<(v22.Balance | undefined)[]>
    getKeys(block: Block): Promise<v22.AccountId[]>
    getKeys(block: Block, key: v22.AccountId): Promise<v22.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.AccountId): AsyncIterable<v22.AccountId[]>
    getPairs(block: Block): Promise<[k: v22.AccountId, v: (v22.Balance | undefined)][]>
    getPairs(block: Block, key: v22.AccountId): Promise<[k: v22.AccountId, v: (v22.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.AccountId, v: (v22.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.AccountId): AsyncIterable<[k: v22.AccountId, v: (v22.Balance | undefined)][]>
}

export const referrals =  {
    v22: new StorageType('Referrals.Referrals', 'Default', [v22.AccountId], sts.array(() => v22.AccountId)) as ReferralsV22,
}

export interface ReferralsV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.AccountId[]
    get(block: Block, key: v22.AccountId): Promise<(v22.AccountId[] | undefined)>
    getMany(block: Block, keys: v22.AccountId[]): Promise<(v22.AccountId[] | undefined)[]>
    getKeys(block: Block): Promise<v22.AccountId[]>
    getKeys(block: Block, key: v22.AccountId): Promise<v22.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.AccountId): AsyncIterable<v22.AccountId[]>
    getPairs(block: Block): Promise<[k: v22.AccountId, v: (v22.AccountId[] | undefined)][]>
    getPairs(block: Block, key: v22.AccountId): Promise<[k: v22.AccountId, v: (v22.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.AccountId, v: (v22.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.AccountId): AsyncIterable<[k: v22.AccountId, v: (v22.AccountId[] | undefined)][]>
}
