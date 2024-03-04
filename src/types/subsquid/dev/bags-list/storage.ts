import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const listNodes =  {
    /**
     *  A single node, within some bag.
     * 
     *  Nodes store links forward and back within their respective bags.
     */
    v70: new StorageType('BagsList.ListNodes', 'Optional', [v70.AccountId32], v70.Node) as ListNodesV70,
}

/**
 *  A single node, within some bag.
 * 
 *  Nodes store links forward and back within their respective bags.
 */
export interface ListNodesV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.Node | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.Node | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.Node | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.Node | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.Node | undefined)][]>
}

export const counterForListNodes =  {
    /**
     * Counter for the related counted storage map
     */
    v70: new StorageType('BagsList.CounterForListNodes', 'Default', [], sts.number()) as CounterForListNodesV70,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForListNodesV70  {
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
    v70: new StorageType('BagsList.ListBags', 'Optional', [sts.bigint()], v70.Bag) as ListBagsV70,
}

/**
 *  A bag stored in storage.
 * 
 *  Stores a `Bag` struct, which stores head and tail pointers to itself.
 */
export interface ListBagsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v70.Bag | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v70.Bag | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v70.Bag | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v70.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v70.Bag | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v70.Bag | undefined)][]>
}
