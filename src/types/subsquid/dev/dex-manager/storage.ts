import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const dexInfos =  {
    v70: new StorageType('DEXManager.DEXInfos', 'Optional', [sts.number()], v70.DEXInfo) as DexInfosV70,
}

export interface DexInfosV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v70.DEXInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.DEXInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.DEXInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.DEXInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.DEXInfo | undefined)][]>
}
