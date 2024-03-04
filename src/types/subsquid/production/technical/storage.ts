import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v45 from '../v45'
import * as v46 from '../v46'
import * as v57 from '../v57'

export const techAccounts =  {
    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    v45: new StorageType('Technical.TechAccounts', 'Optional', [v45.AccountId32], v45.TechAccountId) as TechAccountsV45,
    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    v46: new StorageType('Technical.TechAccounts', 'Optional', [v46.AccountId32], v46.TechAccountId) as TechAccountsV46,
    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    v57: new StorageType('Technical.TechAccounts', 'Optional', [v57.AccountId32], v57.TechAccountId) as TechAccountsV57,
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechAccountsV45  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v45.AccountId32): Promise<(v45.TechAccountId | undefined)>
    getMany(block: Block, keys: v45.AccountId32[]): Promise<(v45.TechAccountId | undefined)[]>
    getKeys(block: Block): Promise<v45.AccountId32[]>
    getKeys(block: Block, key: v45.AccountId32): Promise<v45.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v45.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v45.AccountId32): AsyncIterable<v45.AccountId32[]>
    getPairs(block: Block): Promise<[k: v45.AccountId32, v: (v45.TechAccountId | undefined)][]>
    getPairs(block: Block, key: v45.AccountId32): Promise<[k: v45.AccountId32, v: (v45.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v45.AccountId32, v: (v45.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v45.AccountId32): AsyncIterable<[k: v45.AccountId32, v: (v45.TechAccountId | undefined)][]>
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechAccountsV46  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v46.AccountId32): Promise<(v46.TechAccountId | undefined)>
    getMany(block: Block, keys: v46.AccountId32[]): Promise<(v46.TechAccountId | undefined)[]>
    getKeys(block: Block): Promise<v46.AccountId32[]>
    getKeys(block: Block, key: v46.AccountId32): Promise<v46.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v46.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v46.AccountId32): AsyncIterable<v46.AccountId32[]>
    getPairs(block: Block): Promise<[k: v46.AccountId32, v: (v46.TechAccountId | undefined)][]>
    getPairs(block: Block, key: v46.AccountId32): Promise<[k: v46.AccountId32, v: (v46.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v46.AccountId32, v: (v46.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v46.AccountId32): AsyncIterable<[k: v46.AccountId32, v: (v46.TechAccountId | undefined)][]>
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechAccountsV57  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v57.AccountId32): Promise<(v57.TechAccountId | undefined)>
    getMany(block: Block, keys: v57.AccountId32[]): Promise<(v57.TechAccountId | undefined)[]>
    getKeys(block: Block): Promise<v57.AccountId32[]>
    getKeys(block: Block, key: v57.AccountId32): Promise<v57.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v57.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v57.AccountId32): AsyncIterable<v57.AccountId32[]>
    getPairs(block: Block): Promise<[k: v57.AccountId32, v: (v57.TechAccountId | undefined)][]>
    getPairs(block: Block, key: v57.AccountId32): Promise<[k: v57.AccountId32, v: (v57.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v57.AccountId32, v: (v57.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v57.AccountId32): AsyncIterable<[k: v57.AccountId32, v: (v57.TechAccountId | undefined)][]>
}
