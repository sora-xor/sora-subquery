import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const totalIssuance =  {
    /**
     *  The total issuance of a token type.
     */
    v33: new StorageType('Tokens.TotalIssuance', 'Default', [v33.CurrencyId], v33.Balance) as TotalIssuanceV33,
    /**
     *  The total issuance of a token type.
     */
    v42: new StorageType('Tokens.TotalIssuance', 'Default', [v42.AssetId32], sts.bigint()) as TotalIssuanceV42,
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block, key: v33.CurrencyId): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: v33.CurrencyId[]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<v33.CurrencyId[]>
    getKeys(block: Block, key: v33.CurrencyId): Promise<v33.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.CurrencyId): AsyncIterable<v33.CurrencyId[]>
    getPairs(block: Block): Promise<[k: v33.CurrencyId, v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key: v33.CurrencyId): Promise<[k: v33.CurrencyId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.CurrencyId, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.CurrencyId): AsyncIterable<[k: v33.CurrencyId, v: (v33.Balance | undefined)][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v42.AssetId32): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v42.AssetId32[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v42.AssetId32[]>
    getKeys(block: Block, key: v42.AssetId32): Promise<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AssetId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<v42.AssetId32[]>
    getPairs(block: Block): Promise<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v42.AssetId32): Promise<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AssetId32, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AssetId32): AsyncIterable<[k: v42.AssetId32, v: (bigint | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v33: new StorageType('Tokens.Locks', 'Default', [v33.AccountId, v33.CurrencyId], sts.array(() => v33.BalanceLock)) as LocksV33,
    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v42: new StorageType('Tokens.Locks', 'Default', [v42.AccountId32, v42.AssetId32], sts.array(() => v42.Type_498)) as LocksV42,
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BalanceLock[]
    get(block: Block, key1: v33.AccountId, key2: v33.CurrencyId): Promise<(v33.BalanceLock[] | undefined)>
    getMany(block: Block, keys: [v33.AccountId, v33.CurrencyId][]): Promise<(v33.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<[v33.AccountId, v33.CurrencyId][]>
    getKeys(block: Block, key1: v33.AccountId): Promise<[v33.AccountId, v33.CurrencyId][]>
    getKeys(block: Block, key1: v33.AccountId, key2: v33.CurrencyId): Promise<[v33.AccountId, v33.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AccountId, v33.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[v33.AccountId, v33.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: v33.CurrencyId): AsyncIterable<[v33.AccountId, v33.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v33.AccountId, v33.CurrencyId], v: (v33.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId): Promise<[k: [v33.AccountId, v33.CurrencyId], v: (v33.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId, key2: v33.CurrencyId): Promise<[k: [v33.AccountId, v33.CurrencyId], v: (v33.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AccountId, v33.CurrencyId], v: (v33.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[k: [v33.AccountId, v33.CurrencyId], v: (v33.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: v33.CurrencyId): AsyncIterable<[k: [v33.AccountId, v33.CurrencyId], v: (v33.BalanceLock[] | undefined)][]>
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_498[]
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(v42.Type_498[] | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(v42.Type_498[] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_498[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_498[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_498[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_498[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_498[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_498[] | undefined)][]>
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
    v33: new StorageType('Tokens.Accounts', 'Default', [v33.AccountId, v33.CurrencyId], v33.AccountData) as AccountsV33,
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v42: new StorageType('Tokens.Accounts', 'Default', [v42.AccountId32, v42.AssetId32], v42.Type_500) as AccountsV42,
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountData
    get(block: Block, key1: v33.AccountId, key2: v33.CurrencyId): Promise<(v33.AccountData | undefined)>
    getMany(block: Block, keys: [v33.AccountId, v33.CurrencyId][]): Promise<(v33.AccountData | undefined)[]>
    getKeys(block: Block): Promise<[v33.AccountId, v33.CurrencyId][]>
    getKeys(block: Block, key1: v33.AccountId): Promise<[v33.AccountId, v33.CurrencyId][]>
    getKeys(block: Block, key1: v33.AccountId, key2: v33.CurrencyId): Promise<[v33.AccountId, v33.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AccountId, v33.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[v33.AccountId, v33.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: v33.CurrencyId): AsyncIterable<[v33.AccountId, v33.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v33.AccountId, v33.CurrencyId], v: (v33.AccountData | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId): Promise<[k: [v33.AccountId, v33.CurrencyId], v: (v33.AccountData | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId, key2: v33.CurrencyId): Promise<[k: [v33.AccountId, v33.CurrencyId], v: (v33.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AccountId, v33.CurrencyId], v: (v33.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[k: [v33.AccountId, v33.CurrencyId], v: (v33.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: v33.CurrencyId): AsyncIterable<[k: [v33.AccountId, v33.CurrencyId], v: (v33.AccountData | undefined)][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_500
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(v42.Type_500 | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(v42.Type_500 | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_500 | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_500 | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_500 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_500 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_500 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_500 | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v42: new StorageType('Tokens.Reserves', 'Default', [v42.AccountId32, v42.AssetId32], sts.array(() => v42.Type_502)) as ReservesV42,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_502[]
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(v42.Type_502[] | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(v42.Type_502[] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_502[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_502[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_502[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_502[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_502[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_502[] | undefined)][]>
}
