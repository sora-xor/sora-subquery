import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const orderBooks =  {
    v70: new StorageType('OrderBook.OrderBooks', 'Optional', [v70.OrderBookId], v70.OrderBook) as OrderBooksV70,
}

export interface OrderBooksV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.OrderBookId): Promise<(v70.OrderBook | undefined)>
    getMany(block: Block, keys: v70.OrderBookId[]): Promise<(v70.OrderBook | undefined)[]>
    getKeys(block: Block): Promise<v70.OrderBookId[]>
    getKeys(block: Block, key: v70.OrderBookId): Promise<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<v70.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v70.OrderBookId, v: (v70.OrderBook | undefined)][]>
    getPairs(block: Block, key: v70.OrderBookId): Promise<[k: v70.OrderBookId, v: (v70.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.OrderBookId, v: (v70.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<[k: v70.OrderBookId, v: (v70.OrderBook | undefined)][]>
}

export const limitOrders =  {
    v70: new StorageType('OrderBook.LimitOrders', 'Optional', [v70.OrderBookId, sts.bigint()], v70.LimitOrder) as LimitOrdersV70,
}

export interface LimitOrdersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.OrderBookId, key2: bigint): Promise<(v70.LimitOrder | undefined)>
    getMany(block: Block, keys: [v70.OrderBookId, bigint][]): Promise<(v70.LimitOrder | undefined)[]>
    getKeys(block: Block): Promise<[v70.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v70.OrderBookId): Promise<[v70.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v70.OrderBookId, key2: bigint): Promise<[v70.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.OrderBookId): AsyncIterable<[v70.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.OrderBookId, key2: bigint): AsyncIterable<[v70.OrderBookId, bigint][]>
    getPairs(block: Block): Promise<[k: [v70.OrderBookId, bigint], v: (v70.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v70.OrderBookId): Promise<[k: [v70.OrderBookId, bigint], v: (v70.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v70.OrderBookId, key2: bigint): Promise<[k: [v70.OrderBookId, bigint], v: (v70.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.OrderBookId, bigint], v: (v70.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.OrderBookId): AsyncIterable<[k: [v70.OrderBookId, bigint], v: (v70.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.OrderBookId, key2: bigint): AsyncIterable<[k: [v70.OrderBookId, bigint], v: (v70.LimitOrder | undefined)][]>
}

export const bids =  {
    v70: new StorageType('OrderBook.Bids', 'Optional', [v70.OrderBookId, v70.BalanceUnit], sts.array(() => sts.bigint())) as BidsV70,
}

export interface BidsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v70.OrderBookId, v70.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeys(block: Block, key1: v70.OrderBookId): Promise<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeys(block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): Promise<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.OrderBookId): AsyncIterable<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): AsyncIterable<[v70.OrderBookId, v70.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v70.OrderBookId): Promise<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): Promise<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.OrderBookId): AsyncIterable<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): AsyncIterable<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const asks =  {
    v70: new StorageType('OrderBook.Asks', 'Optional', [v70.OrderBookId, v70.BalanceUnit], sts.array(() => sts.bigint())) as AsksV70,
}

export interface AsksV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v70.OrderBookId, v70.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeys(block: Block, key1: v70.OrderBookId): Promise<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeys(block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): Promise<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.OrderBookId): AsyncIterable<[v70.OrderBookId, v70.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): AsyncIterable<[v70.OrderBookId, v70.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v70.OrderBookId): Promise<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): Promise<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.OrderBookId): AsyncIterable<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.OrderBookId, key2: v70.BalanceUnit): AsyncIterable<[k: [v70.OrderBookId, v70.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const aggregatedBids =  {
    v70: new StorageType('OrderBook.AggregatedBids', 'Default', [v70.OrderBookId], sts.array(() => sts.tuple(() => [v70.BalanceUnit, v70.BalanceUnit]))) as AggregatedBidsV70,
}

export interface AggregatedBidsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.BalanceUnit, v70.BalanceUnit][]
    get(block: Block, key: v70.OrderBookId): Promise<([v70.BalanceUnit, v70.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v70.OrderBookId[]): Promise<([v70.BalanceUnit, v70.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v70.OrderBookId[]>
    getKeys(block: Block, key: v70.OrderBookId): Promise<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<v70.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v70.OrderBookId): Promise<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
}

export const aggregatedAsks =  {
    v70: new StorageType('OrderBook.AggregatedAsks', 'Default', [v70.OrderBookId], sts.array(() => sts.tuple(() => [v70.BalanceUnit, v70.BalanceUnit]))) as AggregatedAsksV70,
}

export interface AggregatedAsksV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.BalanceUnit, v70.BalanceUnit][]
    get(block: Block, key: v70.OrderBookId): Promise<([v70.BalanceUnit, v70.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v70.OrderBookId[]): Promise<([v70.BalanceUnit, v70.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v70.OrderBookId[]>
    getKeys(block: Block, key: v70.OrderBookId): Promise<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<v70.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v70.OrderBookId): Promise<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<[k: v70.OrderBookId, v: ([v70.BalanceUnit, v70.BalanceUnit][] | undefined)][]>
}

export const userLimitOrders =  {
    v70: new StorageType('OrderBook.UserLimitOrders', 'Optional', [v70.AccountId32, v70.OrderBookId], sts.array(() => sts.bigint())) as UserLimitOrdersV70,
}

export interface UserLimitOrdersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.AccountId32, key2: v70.OrderBookId): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, v70.OrderBookId][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, v70.OrderBookId][]>
    getKeys(block: Block, key1: v70.AccountId32): Promise<[v70.AccountId32, v70.OrderBookId][]>
    getKeys(block: Block, key1: v70.AccountId32, key2: v70.OrderBookId): Promise<[v70.AccountId32, v70.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, v70.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[v70.AccountId32, v70.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.OrderBookId): AsyncIterable<[v70.AccountId32, v70.OrderBookId][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, v70.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32): Promise<[k: [v70.AccountId32, v70.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32, key2: v70.OrderBookId): Promise<[k: [v70.AccountId32, v70.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, v70.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[k: [v70.AccountId32, v70.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: v70.OrderBookId): AsyncIterable<[k: [v70.AccountId32, v70.OrderBookId], v: (bigint[] | undefined)][]>
}

export const expirationsAgenda =  {
    v70: new StorageType('OrderBook.ExpirationsAgenda', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [v70.OrderBookId, sts.bigint()]))) as ExpirationsAgendaV70,
}

export interface ExpirationsAgendaV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.OrderBookId, bigint][]
    get(block: Block, key: number): Promise<([v70.OrderBookId, bigint][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v70.OrderBookId, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v70.OrderBookId, bigint][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v70.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v70.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v70.OrderBookId, bigint][] | undefined)][]>
}

export const alignmentCursor =  {
    v70: new StorageType('OrderBook.AlignmentCursor', 'Optional', [v70.OrderBookId], sts.bigint()) as AlignmentCursorV70,
}

export interface AlignmentCursorV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.OrderBookId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v70.OrderBookId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v70.OrderBookId[]>
    getKeys(block: Block, key: v70.OrderBookId): Promise<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<v70.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v70.OrderBookId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v70.OrderBookId): Promise<[k: v70.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.OrderBookId): AsyncIterable<[k: v70.OrderBookId, v: (bigint | undefined)][]>
}

export const incompleteExpirationsSince =  {
    /**
     *  Earliest block with incomplete expirations;
     *  Weight limit might not allow to finish all expirations for a block
     *  so they might be operated later.
     */
    v70: new StorageType('OrderBook.IncompleteExpirationsSince', 'Optional', [], sts.number()) as IncompleteExpirationsSinceV70,
}

/**
 *  Earliest block with incomplete expirations;
 *  Weight limit might not allow to finish all expirations for a block
 *  so they might be operated later.
 */
export interface IncompleteExpirationsSinceV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
