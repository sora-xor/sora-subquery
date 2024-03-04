import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v45 from '../v45'

export const dexInfos =  {
    v1: new StorageType('DEXManager.DEXInfos', 'Optional', [v1.DEXId], v1.DEXInfo) as DexInfosV1,
    v42: new StorageType('DEXManager.DEXInfos', 'Optional', [sts.number()], v42.DEXInfo) as DexInfosV42,
    v45: new StorageType('DEXManager.DEXInfos', 'Optional', [sts.number()], v45.DEXInfo) as DexInfosV45,
}

export interface DexInfosV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.DEXId): Promise<(v1.DEXInfo | undefined)>
    getMany(block: Block, keys: v1.DEXId[]): Promise<(v1.DEXInfo | undefined)[]>
    getKeys(block: Block): Promise<v1.DEXId[]>
    getKeys(block: Block, key: v1.DEXId): Promise<v1.DEXId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.DEXId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.DEXId): AsyncIterable<v1.DEXId[]>
    getPairs(block: Block): Promise<[k: v1.DEXId, v: (v1.DEXInfo | undefined)][]>
    getPairs(block: Block, key: v1.DEXId): Promise<[k: v1.DEXId, v: (v1.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.DEXId, v: (v1.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.DEXId): AsyncIterable<[k: v1.DEXId, v: (v1.DEXInfo | undefined)][]>
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

export interface DexInfosV45  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v45.DEXInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v45.DEXInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v45.DEXInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v45.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v45.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v45.DEXInfo | undefined)][]>
}
