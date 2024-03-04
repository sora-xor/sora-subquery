import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v69 from '../v69'

export const orderBooks =  {
    v69: new StorageType('OrderBook.OrderBooks', 'Optional', [v69.OrderBookId], v69.OrderBook) as OrderBooksV69,
}

export interface OrderBooksV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v69.OrderBookId): Promise<(v69.OrderBook | undefined)>
    getMany(block: Block, keys: v69.OrderBookId[]): Promise<(v69.OrderBook | undefined)[]>
    getKeys(block: Block): Promise<v69.OrderBookId[]>
    getKeys(block: Block, key: v69.OrderBookId): Promise<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<v69.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v69.OrderBookId, v: (v69.OrderBook | undefined)][]>
    getPairs(block: Block, key: v69.OrderBookId): Promise<[k: v69.OrderBookId, v: (v69.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.OrderBookId, v: (v69.OrderBook | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<[k: v69.OrderBookId, v: (v69.OrderBook | undefined)][]>
}

export const limitOrders =  {
    v69: new StorageType('OrderBook.LimitOrders', 'Optional', [v69.OrderBookId, sts.bigint()], v69.LimitOrder) as LimitOrdersV69,
}

export interface LimitOrdersV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v69.OrderBookId, key2: bigint): Promise<(v69.LimitOrder | undefined)>
    getMany(block: Block, keys: [v69.OrderBookId, bigint][]): Promise<(v69.LimitOrder | undefined)[]>
    getKeys(block: Block): Promise<[v69.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v69.OrderBookId): Promise<[v69.OrderBookId, bigint][]>
    getKeys(block: Block, key1: v69.OrderBookId, key2: bigint): Promise<[v69.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v69.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.OrderBookId): AsyncIterable<[v69.OrderBookId, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.OrderBookId, key2: bigint): AsyncIterable<[v69.OrderBookId, bigint][]>
    getPairs(block: Block): Promise<[k: [v69.OrderBookId, bigint], v: (v69.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v69.OrderBookId): Promise<[k: [v69.OrderBookId, bigint], v: (v69.LimitOrder | undefined)][]>
    getPairs(block: Block, key1: v69.OrderBookId, key2: bigint): Promise<[k: [v69.OrderBookId, bigint], v: (v69.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v69.OrderBookId, bigint], v: (v69.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.OrderBookId): AsyncIterable<[k: [v69.OrderBookId, bigint], v: (v69.LimitOrder | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.OrderBookId, key2: bigint): AsyncIterable<[k: [v69.OrderBookId, bigint], v: (v69.LimitOrder | undefined)][]>
}

export const bids =  {
    v69: new StorageType('OrderBook.Bids', 'Optional', [v69.OrderBookId, v69.BalanceUnit], sts.array(() => sts.bigint())) as BidsV69,
}

export interface BidsV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v69.OrderBookId, v69.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeys(block: Block, key1: v69.OrderBookId): Promise<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeys(block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): Promise<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.OrderBookId): AsyncIterable<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): AsyncIterable<[v69.OrderBookId, v69.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v69.OrderBookId): Promise<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): Promise<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.OrderBookId): AsyncIterable<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): AsyncIterable<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const asks =  {
    v69: new StorageType('OrderBook.Asks', 'Optional', [v69.OrderBookId, v69.BalanceUnit], sts.array(() => sts.bigint())) as AsksV69,
}

export interface AsksV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v69.OrderBookId, v69.BalanceUnit][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeys(block: Block, key1: v69.OrderBookId): Promise<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeys(block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): Promise<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.OrderBookId): AsyncIterable<[v69.OrderBookId, v69.BalanceUnit][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): AsyncIterable<[v69.OrderBookId, v69.BalanceUnit][]>
    getPairs(block: Block): Promise<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v69.OrderBookId): Promise<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): Promise<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.OrderBookId): AsyncIterable<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.OrderBookId, key2: v69.BalanceUnit): AsyncIterable<[k: [v69.OrderBookId, v69.BalanceUnit], v: (bigint[] | undefined)][]>
}

export const aggregatedBids =  {
    v69: new StorageType('OrderBook.AggregatedBids', 'Default', [v69.OrderBookId], sts.array(() => sts.tuple(() => [v69.BalanceUnit, v69.BalanceUnit]))) as AggregatedBidsV69,
}

export interface AggregatedBidsV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v69.BalanceUnit, v69.BalanceUnit][]
    get(block: Block, key: v69.OrderBookId): Promise<([v69.BalanceUnit, v69.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v69.OrderBookId[]): Promise<([v69.BalanceUnit, v69.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v69.OrderBookId[]>
    getKeys(block: Block, key: v69.OrderBookId): Promise<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<v69.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v69.OrderBookId): Promise<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
}

export const aggregatedAsks =  {
    v69: new StorageType('OrderBook.AggregatedAsks', 'Default', [v69.OrderBookId], sts.array(() => sts.tuple(() => [v69.BalanceUnit, v69.BalanceUnit]))) as AggregatedAsksV69,
}

export interface AggregatedAsksV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v69.BalanceUnit, v69.BalanceUnit][]
    get(block: Block, key: v69.OrderBookId): Promise<([v69.BalanceUnit, v69.BalanceUnit][] | undefined)>
    getMany(block: Block, keys: v69.OrderBookId[]): Promise<([v69.BalanceUnit, v69.BalanceUnit][] | undefined)[]>
    getKeys(block: Block): Promise<v69.OrderBookId[]>
    getKeys(block: Block, key: v69.OrderBookId): Promise<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<v69.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
    getPairs(block: Block, key: v69.OrderBookId): Promise<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<[k: v69.OrderBookId, v: ([v69.BalanceUnit, v69.BalanceUnit][] | undefined)][]>
}

export const userLimitOrders =  {
    v69: new StorageType('OrderBook.UserLimitOrders', 'Optional', [v69.AccountId32, v69.OrderBookId], sts.array(() => sts.bigint())) as UserLimitOrdersV69,
}

export interface UserLimitOrdersV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v69.AccountId32, key2: v69.OrderBookId): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: [v69.AccountId32, v69.OrderBookId][]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<[v69.AccountId32, v69.OrderBookId][]>
    getKeys(block: Block, key1: v69.AccountId32): Promise<[v69.AccountId32, v69.OrderBookId][]>
    getKeys(block: Block, key1: v69.AccountId32, key2: v69.OrderBookId): Promise<[v69.AccountId32, v69.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v69.AccountId32, v69.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.AccountId32): AsyncIterable<[v69.AccountId32, v69.OrderBookId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.AccountId32, key2: v69.OrderBookId): AsyncIterable<[v69.AccountId32, v69.OrderBookId][]>
    getPairs(block: Block): Promise<[k: [v69.AccountId32, v69.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v69.AccountId32): Promise<[k: [v69.AccountId32, v69.OrderBookId], v: (bigint[] | undefined)][]>
    getPairs(block: Block, key1: v69.AccountId32, key2: v69.OrderBookId): Promise<[k: [v69.AccountId32, v69.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v69.AccountId32, v69.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.AccountId32): AsyncIterable<[k: [v69.AccountId32, v69.OrderBookId], v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.AccountId32, key2: v69.OrderBookId): AsyncIterable<[k: [v69.AccountId32, v69.OrderBookId], v: (bigint[] | undefined)][]>
}

export const expirationsAgenda =  {
    v69: new StorageType('OrderBook.ExpirationsAgenda', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [v69.OrderBookId, sts.bigint()]))) as ExpirationsAgendaV69,
}

export interface ExpirationsAgendaV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v69.OrderBookId, bigint][]
    get(block: Block, key: number): Promise<([v69.OrderBookId, bigint][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([v69.OrderBookId, bigint][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([v69.OrderBookId, bigint][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([v69.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([v69.OrderBookId, bigint][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([v69.OrderBookId, bigint][] | undefined)][]>
}

export const alignmentCursor =  {
    v69: new StorageType('OrderBook.AlignmentCursor', 'Optional', [v69.OrderBookId], sts.bigint()) as AlignmentCursorV69,
}

export interface AlignmentCursorV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v69.OrderBookId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v69.OrderBookId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v69.OrderBookId[]>
    getKeys(block: Block, key: v69.OrderBookId): Promise<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.OrderBookId[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<v69.OrderBookId[]>
    getPairs(block: Block): Promise<[k: v69.OrderBookId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v69.OrderBookId): Promise<[k: v69.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.OrderBookId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.OrderBookId): AsyncIterable<[k: v69.OrderBookId, v: (bigint | undefined)][]>
}

export const incompleteExpirationsSince =  {
    /**
     *  Earliest block with incomplete expirations;
     *  Weight limit might not allow to finish all expirations for a block, so
     *  they might be operated later.
     */
    v69: new StorageType('OrderBook.IncompleteExpirationsSince', 'Optional', [], sts.number()) as IncompleteExpirationsSinceV69,
}

/**
 *  Earliest block with incomplete expirations;
 *  Weight limit might not allow to finish all expirations for a block, so
 *  they might be operated later.
 */
export interface IncompleteExpirationsSinceV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
