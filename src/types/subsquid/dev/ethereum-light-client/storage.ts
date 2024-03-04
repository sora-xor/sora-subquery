import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const bestBlock =  {
    /**
     *  Best known block.
     */
    v70: new StorageType('EthereumLightClient.BestBlock', 'Optional', [sts.bigint()], sts.tuple(() => [v70.HeaderId, sts.bigint()])) as BestBlockV70,
}

/**
 *  Best known block.
 */
export interface BestBlockV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([v70.HeaderId, bigint] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([v70.HeaderId, bigint] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([v70.HeaderId, bigint] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([v70.HeaderId, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([v70.HeaderId, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([v70.HeaderId, bigint] | undefined)][]>
}

export const blocksToPrune =  {
    /**
     *  Range of blocks that we want to prune.
     */
    v70: new StorageType('EthereumLightClient.BlocksToPrune', 'Optional', [sts.bigint()], v70.PruningRange) as BlocksToPruneV70,
}

/**
 *  Range of blocks that we want to prune.
 */
export interface BlocksToPruneV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v70.PruningRange | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v70.PruningRange | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v70.PruningRange | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v70.PruningRange | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v70.PruningRange | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v70.PruningRange | undefined)][]>
}

export const finalizedBlock =  {
    /**
     *  Best finalized block.
     */
    v70: new StorageType('EthereumLightClient.FinalizedBlock', 'Optional', [sts.bigint()], v70.HeaderId) as FinalizedBlockV70,
}

/**
 *  Best finalized block.
 */
export interface FinalizedBlockV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v70.HeaderId | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v70.HeaderId | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v70.HeaderId | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v70.HeaderId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v70.HeaderId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v70.HeaderId | undefined)][]>
}

export const networkConfig =  {
    /**
     *  Network config
     */
    v70: new StorageType('EthereumLightClient.NetworkConfig', 'Optional', [sts.bigint()], v70.NetworkConfig) as NetworkConfigV70,
}

/**
 *  Network config
 */
export interface NetworkConfigV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v70.NetworkConfig | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v70.NetworkConfig | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v70.NetworkConfig | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v70.NetworkConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v70.NetworkConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v70.NetworkConfig | undefined)][]>
}

export const headers =  {
    /**
     *  Map of imported headers by hash.
     */
    v70: new StorageType('EthereumLightClient.Headers', 'Optional', [sts.bigint(), v70.H256], v70.StoredHeader) as HeadersV70,
}

/**
 *  Map of imported headers by hash.
 */
export interface HeadersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v70.H256): Promise<(v70.StoredHeader | undefined)>
    getMany(block: Block, keys: [bigint, v70.H256][]): Promise<(v70.StoredHeader | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v70.H256][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v70.H256][]>
    getKeys(block: Block, key1: bigint, key2: v70.H256): Promise<[bigint, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v70.H256): AsyncIterable<[bigint, v70.H256][]>
    getPairs(block: Block): Promise<[k: [bigint, v70.H256], v: (v70.StoredHeader | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v70.H256], v: (v70.StoredHeader | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v70.H256): Promise<[k: [bigint, v70.H256], v: (v70.StoredHeader | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v70.H256], v: (v70.StoredHeader | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v70.H256], v: (v70.StoredHeader | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v70.H256): AsyncIterable<[k: [bigint, v70.H256], v: (v70.StoredHeader | undefined)][]>
}

export const headersByNumber =  {
    /**
     *  Map of imported header hashes by number.
     */
    v70: new StorageType('EthereumLightClient.HeadersByNumber', 'Optional', [sts.bigint(), sts.bigint()], sts.array(() => v70.H256)) as HeadersByNumberV70,
}

/**
 *  Map of imported header hashes by number.
 */
export interface HeadersByNumberV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(v70.H256[] | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v70.H256[] | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (v70.H256[] | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (v70.H256[] | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (v70.H256[] | undefined)][]>
}
