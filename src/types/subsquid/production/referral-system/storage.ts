import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const referrers =  {
    v1: new StorageType('ReferralSystem.Referrers', 'Optional', [v1.AccountId], v1.AccountId) as ReferrersV1,
}

export interface ReferrersV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<(v1.AccountId | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.AccountId | undefined)][]>
}
