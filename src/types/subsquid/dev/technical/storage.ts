import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const techAccounts =  {
    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    v70: new StorageType('Technical.TechAccounts', 'Optional', [v70.AccountId32], v70.TechAccountId) as TechAccountsV70,
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechAccountsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.TechAccountId | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.TechAccountId | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.TechAccountId | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.TechAccountId | undefined)][]>
}
