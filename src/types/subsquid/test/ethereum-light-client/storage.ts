import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const bestBlock =  {
    /**
     *  Best known block.
     */
    v52: new StorageType('EthereumLightClient.BestBlock', 'Optional', [sts.bigint()], sts.tuple(() => [v52.HeaderId, sts.bigint()])) as BestBlockV52,
}

/**
 *  Best known block.
 */
export interface BestBlockV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([v52.HeaderId, bigint] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([v52.HeaderId, bigint] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([v52.HeaderId, bigint] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([v52.HeaderId, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([v52.HeaderId, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([v52.HeaderId, bigint] | undefined)][]>
}

export const blocksToPrune =  {
    /**
     *  Range of blocks that we want to prune.
     */
    v52: new StorageType('EthereumLightClient.BlocksToPrune', 'Optional', [sts.bigint()], v52.PruningRange) as BlocksToPruneV52,
}

/**
 *  Range of blocks that we want to prune.
 */
export interface BlocksToPruneV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v52.PruningRange | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.PruningRange | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.PruningRange | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.PruningRange | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.PruningRange | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.PruningRange | undefined)][]>
}

export const finalizedBlock =  {
    /**
     *  Best finalized block.
     */
    v52: new StorageType('EthereumLightClient.FinalizedBlock', 'Optional', [sts.bigint()], v52.HeaderId) as FinalizedBlockV52,
}

/**
 *  Best finalized block.
 */
export interface FinalizedBlockV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v52.HeaderId | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.HeaderId | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.HeaderId | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.HeaderId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.HeaderId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.HeaderId | undefined)][]>
}

export const networkConfig =  {
    /**
     *  Network config
     */
    v52: new StorageType('EthereumLightClient.NetworkConfig', 'Optional', [sts.bigint()], v52.NetworkConfig) as NetworkConfigV52,
}

/**
 *  Network config
 */
export interface NetworkConfigV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v52.NetworkConfig | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v52.NetworkConfig | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v52.NetworkConfig | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v52.NetworkConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v52.NetworkConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v52.NetworkConfig | undefined)][]>
}

export const headers =  {
    /**
     *  Map of imported headers by hash.
     */
    v52: new StorageType('EthereumLightClient.Headers', 'Optional', [sts.bigint(), v52.H256], v52.StoredHeader) as HeadersV52,
}

/**
 *  Map of imported headers by hash.
 */
export interface HeadersV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: v52.H256): Promise<(v52.StoredHeader | undefined)>
    getMany(block: Block, keys: [bigint, v52.H256][]): Promise<(v52.StoredHeader | undefined)[]>
    getKeys(block: Block): Promise<[bigint, v52.H256][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, v52.H256][]>
    getKeys(block: Block, key1: bigint, key2: v52.H256): Promise<[bigint, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: v52.H256): AsyncIterable<[bigint, v52.H256][]>
    getPairs(block: Block): Promise<[k: [bigint, v52.H256], v: (v52.StoredHeader | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, v52.H256], v: (v52.StoredHeader | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: v52.H256): Promise<[k: [bigint, v52.H256], v: (v52.StoredHeader | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, v52.H256], v: (v52.StoredHeader | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, v52.H256], v: (v52.StoredHeader | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: v52.H256): AsyncIterable<[k: [bigint, v52.H256], v: (v52.StoredHeader | undefined)][]>
}

export const headersByNumber =  {
    /**
     *  Map of imported header hashes by number.
     */
    v52: new StorageType('EthereumLightClient.HeadersByNumber', 'Optional', [sts.bigint(), sts.bigint()], sts.array(() => v52.H256)) as HeadersByNumberV52,
}

/**
 *  Map of imported header hashes by number.
 */
export interface HeadersByNumberV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(v52.H256[] | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v52.H256[] | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (v52.H256[] | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (v52.H256[] | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (v52.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (v52.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (v52.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (v52.H256[] | undefined)][]>
}
