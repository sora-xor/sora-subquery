import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const rootHash =  {
    /**
     *  Latest MMR Root hash.
     */
    v52: new StorageType('Mmr.RootHash', 'Default', [], v52.H256) as RootHashV52,
}

/**
 *  Latest MMR Root hash.
 */
export interface RootHashV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.H256
    get(block: Block): Promise<(v52.H256 | undefined)>
}

export const numberOfLeaves =  {
    /**
     *  Current size of the MMR (number of leaves).
     */
    v52: new StorageType('Mmr.NumberOfLeaves', 'Default', [], sts.bigint()) as NumberOfLeavesV52,
}

/**
 *  Current size of the MMR (number of leaves).
 */
export interface NumberOfLeavesV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const nodes =  {
    /**
     *  Hashes of the nodes in the MMR.
     * 
     *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
     *  are pruned and only stored in the Offchain DB.
     */
    v52: new StorageType('Mmr.Nodes', 'Optional', [sts.bigint()], v52.H256) as NodesV52,
}

/**
 *  Hashes of the nodes in the MMR.
 * 
 *  Note this collection only contains MMR peaks, the inner nodes (and leaves)
 *  are pruned and only stored in the Offchain DB.
 */
export interface NodesV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v52.H256 | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.H256 | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.H256 | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.H256 | undefined)][]>
}
