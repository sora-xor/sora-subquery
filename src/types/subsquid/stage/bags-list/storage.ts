import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v42 from '../v42'

export const listNodes =  {
    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    v42: new StorageType('BagsList.ListNodes', 'Optional', [v42.AccountId32], v42.Node) as ListNodesV42,
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AccountId32): Promise<(v42.Node | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.Node | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.Node | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.Node | undefined)][]>
}

export const counterForListNodes =  {
    /**
     * Counter for the related counted storage map
     */
    v42: new StorageType('BagsList.CounterForListNodes', 'Default', [], sts.number()) as CounterForListNodesV42,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const listBags =  {
    /**
     *  A bag stored in storage.
     * 
     *  Stores a `Bag` struct, which stores head and tail pointers to itself.
     */
    v42: new StorageType('BagsList.ListBags', 'Optional', [sts.bigint()], v42.Bag) as ListBagsV42,
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v42.Bag | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v42.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v42.Bag | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v42.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v42.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v42.Bag | undefined)][]>
}
