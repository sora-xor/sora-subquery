import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v44 from '../v44'
import * as v46 from '../v46'
import * as v54 from '../v54'

export const techAccounts =  {
    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    v44: new StorageType('Technical.TechAccounts', 'Optional', [v44.AccountId32], v44.TechAccountId) as TechAccountsV44,
    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    v46: new StorageType('Technical.TechAccounts', 'Optional', [v46.AccountId32], v46.TechAccountId) as TechAccountsV46,
    /**
     *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
     */
    v54: new StorageType('Technical.TechAccounts', 'Optional', [v54.AccountId32], v54.TechAccountId) as TechAccountsV54,
}

/**
 *  Registered technical account identifiers. Map from repr `AccountId` into pure `TechAccountId`.
 */
export interface TechAccountsV44  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v44.AccountId32): Promise<(v44.TechAccountId | undefined)>
    getMany(block: Block, keys: v44.AccountId32[]): Promise<(v44.TechAccountId | undefined)[]>
    getKeys(block: Block): Promise<v44.AccountId32[]>
    getKeys(block: Block, key: v44.AccountId32): Promise<v44.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v44.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v44.AccountId32): AsyncIterable<v44.AccountId32[]>
    getPairs(block: Block): Promise<[k: v44.AccountId32, v: (v44.TechAccountId | undefined)][]>
    getPairs(block: Block, key: v44.AccountId32): Promise<[k: v44.AccountId32, v: (v44.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v44.AccountId32, v: (v44.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v44.AccountId32): AsyncIterable<[k: v44.AccountId32, v: (v44.TechAccountId | undefined)][]>
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
export interface TechAccountsV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54.AccountId32): Promise<(v54.TechAccountId | undefined)>
    getMany(block: Block, keys: v54.AccountId32[]): Promise<(v54.TechAccountId | undefined)[]>
    getKeys(block: Block): Promise<v54.AccountId32[]>
    getKeys(block: Block, key: v54.AccountId32): Promise<v54.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.AccountId32): AsyncIterable<v54.AccountId32[]>
    getPairs(block: Block): Promise<[k: v54.AccountId32, v: (v54.TechAccountId | undefined)][]>
    getPairs(block: Block, key: v54.AccountId32): Promise<[k: v54.AccountId32, v: (v54.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.AccountId32, v: (v54.TechAccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.AccountId32): AsyncIterable<[k: v54.AccountId32, v: (v54.TechAccountId | undefined)][]>
}
