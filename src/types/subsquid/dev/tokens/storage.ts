import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const totalIssuance =  {
    /**
     *  The total issuance of a token type.
     */
    v70: new StorageType('Tokens.TotalIssuance', 'Default', [v70.AssetId32], sts.bigint()) as TotalIssuanceV70,
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v70.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v70.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v70.AssetId32[]>
    getKeys(block: Block, key: v70.AssetId32): Promise<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<v70.AssetId32[]>
    getPairs(block: Block): Promise<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v70.AssetId32): Promise<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AssetId32): AsyncIterable<[k: v70.AssetId32, v: (bigint | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v70: new StorageType('Tokens.Locks', 'Default', [v70.AccountId32, v70.AssetId32], sts.array(() => v70.Type_673)) as LocksV70,
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_673[]
    get(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<(v70.Type_673[] | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, v70.AssetId32][]): Promise<(v70.Type_673[] | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AccountId32): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.AssetId32): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_673[] | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_673[] | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_673[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_673[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_673[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.AssetId32): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_673[] | undefined)][]>
}

export const accounts =  {
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v70: new StorageType('Tokens.Accounts', 'Default', [v70.AccountId32, v70.AssetId32], v70.Type_675) as AccountsV70,
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_675
    get(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<(v70.Type_675 | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, v70.AssetId32][]): Promise<(v70.Type_675 | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AccountId32): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.AssetId32): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_675 | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_675 | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_675 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_675 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_675 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.AssetId32): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_675 | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v70: new StorageType('Tokens.Reserves', 'Default', [v70.AccountId32, v70.AssetId32], sts.array(() => v70.Type_677)) as ReservesV70,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_677[]
    get(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<(v70.Type_677[] | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, v70.AssetId32][]): Promise<(v70.Type_677[] | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AccountId32): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeys(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.AssetId32): AsyncIterable<[v70.AccountId32, v70.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_677[] | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_677[] | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32, key2: v70.AssetId32): Promise<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_677[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_677[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_677[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.AssetId32): AsyncIterable<[k: [v70.AccountId32, v70.AssetId32], v: (v70.Type_677[] | undefined)][]>
}
