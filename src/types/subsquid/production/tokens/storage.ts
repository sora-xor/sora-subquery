import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const totalIssuance =  {
    /**
     *  The total issuance of a token type.
     */
    v1: new StorageType('Tokens.TotalIssuance', 'Default', [v1.CurrencyId], v1.Balance) as TotalIssuanceV1,
    /**
     *  The total issuance of a token type.
     */
    v42: new StorageType('Tokens.TotalIssuance', 'Default', [v42.AssetId32], sts.bigint()) as TotalIssuanceV42,
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block, key: v1.CurrencyId): Promise<(v1.Balance | undefined)>
    getMany(block: Block, keys: v1.CurrencyId[]): Promise<(v1.Balance | undefined)[]>
    getKeys(block: Block): Promise<v1.CurrencyId[]>
    getKeys(block: Block, key: v1.CurrencyId): Promise<v1.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.CurrencyId): AsyncIterable<v1.CurrencyId[]>
    getPairs(block: Block): Promise<[k: v1.CurrencyId, v: (v1.Balance | undefined)][]>
    getPairs(block: Block, key: v1.CurrencyId): Promise<[k: v1.CurrencyId, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.CurrencyId, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.CurrencyId): AsyncIterable<[k: v1.CurrencyId, v: (v1.Balance | undefined)][]>
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
    v1: new StorageType('Tokens.Locks', 'Default', [v1.AccountId, v1.CurrencyId], sts.array(() => v1.BalanceLock)) as LocksV1,
    /**
     *  Any liquidity locks of a token type under an account.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    v42: new StorageType('Tokens.Locks', 'Default', [v42.AccountId32, v42.AssetId32], sts.array(() => v42.Type_493)) as LocksV42,
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BalanceLock[]
    get(block: Block, key1: v1.AccountId, key2: v1.CurrencyId): Promise<(v1.BalanceLock[] | undefined)>
    getMany(block: Block, keys: [v1.AccountId, v1.CurrencyId][]): Promise<(v1.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<[v1.AccountId, v1.CurrencyId][]>
    getKeys(block: Block, key1: v1.AccountId): Promise<[v1.AccountId, v1.CurrencyId][]>
    getKeys(block: Block, key1: v1.AccountId, key2: v1.CurrencyId): Promise<[v1.AccountId, v1.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.AccountId, v1.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AccountId): AsyncIterable<[v1.AccountId, v1.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AccountId, key2: v1.CurrencyId): AsyncIterable<[v1.AccountId, v1.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v1.AccountId, v1.CurrencyId], v: (v1.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key1: v1.AccountId): Promise<[k: [v1.AccountId, v1.CurrencyId], v: (v1.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key1: v1.AccountId, key2: v1.CurrencyId): Promise<[k: [v1.AccountId, v1.CurrencyId], v: (v1.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.AccountId, v1.CurrencyId], v: (v1.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AccountId): AsyncIterable<[k: [v1.AccountId, v1.CurrencyId], v: (v1.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AccountId, key2: v1.CurrencyId): AsyncIterable<[k: [v1.AccountId, v1.CurrencyId], v: (v1.BalanceLock[] | undefined)][]>
}

/**
 *  Any liquidity locks of a token type under an account.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_493[]
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(v42.Type_493[] | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(v42.Type_493[] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_493[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_493[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_493[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_493[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_493[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_493[] | undefined)][]>
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
    v1: new StorageType('Tokens.Accounts', 'Default', [v1.AccountId, v1.CurrencyId], v1.AccountData) as AccountsV1,
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v42: new StorageType('Tokens.Accounts', 'Default', [v42.AccountId32, v42.AssetId32], v42.Type_495) as AccountsV42,
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountData
    get(block: Block, key1: v1.AccountId, key2: v1.CurrencyId): Promise<(v1.AccountData | undefined)>
    getMany(block: Block, keys: [v1.AccountId, v1.CurrencyId][]): Promise<(v1.AccountData | undefined)[]>
    getKeys(block: Block): Promise<[v1.AccountId, v1.CurrencyId][]>
    getKeys(block: Block, key1: v1.AccountId): Promise<[v1.AccountId, v1.CurrencyId][]>
    getKeys(block: Block, key1: v1.AccountId, key2: v1.CurrencyId): Promise<[v1.AccountId, v1.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.AccountId, v1.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AccountId): AsyncIterable<[v1.AccountId, v1.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AccountId, key2: v1.CurrencyId): AsyncIterable<[v1.AccountId, v1.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v1.AccountId, v1.CurrencyId], v: (v1.AccountData | undefined)][]>
    getPairs(block: Block, key1: v1.AccountId): Promise<[k: [v1.AccountId, v1.CurrencyId], v: (v1.AccountData | undefined)][]>
    getPairs(block: Block, key1: v1.AccountId, key2: v1.CurrencyId): Promise<[k: [v1.AccountId, v1.CurrencyId], v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.AccountId, v1.CurrencyId], v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AccountId): AsyncIterable<[k: [v1.AccountId, v1.CurrencyId], v: (v1.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AccountId, key2: v1.CurrencyId): AsyncIterable<[k: [v1.AccountId, v1.CurrencyId], v: (v1.AccountData | undefined)][]>
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
    getDefault(block: Block): v42.Type_495
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(v42.Type_495 | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(v42.Type_495 | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_495 | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_495 | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_495 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_495 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_495 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_495 | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    v42: new StorageType('Tokens.Reserves', 'Default', [v42.AccountId32, v42.AssetId32], sts.array(() => v42.Type_497)) as ReservesV42,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_497[]
    get(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<(v42.Type_497[] | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, v42.AssetId32][]): Promise<(v42.Type_497[] | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[v42.AccountId32, v42.AssetId32][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_497[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_497[] | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: v42.AssetId32): Promise<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_497[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_497[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_497[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: v42.AssetId32): AsyncIterable<[k: [v42.AccountId32, v42.AssetId32], v: (v42.Type_497[] | undefined)][]>
}
