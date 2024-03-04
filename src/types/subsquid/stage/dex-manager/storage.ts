import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v44 from '../v44'

export const dexInfos =  {
    v33: new StorageType('DEXManager.DEXInfos', 'Optional', [v33.DEXId], v33.DEXInfo) as DexInfosV33,
    v42: new StorageType('DEXManager.DEXInfos', 'Optional', [sts.number()], v42.DEXInfo) as DexInfosV42,
    v44: new StorageType('DEXManager.DEXInfos', 'Optional', [sts.number()], v44.DEXInfo) as DexInfosV44,
}

export interface DexInfosV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.DEXId): Promise<(v33.DEXInfo | undefined)>
    getMany(block: Block, keys: v33.DEXId[]): Promise<(v33.DEXInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.DEXId[]>
    getKeys(block: Block, key: v33.DEXId): Promise<v33.DEXId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.DEXId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.DEXId): AsyncIterable<v33.DEXId[]>
    getPairs(block: Block): Promise<[k: v33.DEXId, v: (v33.DEXInfo | undefined)][]>
    getPairs(block: Block, key: v33.DEXId): Promise<[k: v33.DEXId, v: (v33.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.DEXId, v: (v33.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.DEXId): AsyncIterable<[k: v33.DEXId, v: (v33.DEXInfo | undefined)][]>
}

export interface DexInfosV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v42.DEXInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v42.DEXInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v42.DEXInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v42.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v42.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v42.DEXInfo | undefined)][]>
}

export interface DexInfosV44  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v44.DEXInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v44.DEXInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v44.DEXInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v44.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v44.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v44.DEXInfo | undefined)][]>
}
