import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v70: new StorageType('Preimage.StatusFor', 'Optional', [v70.H256], v70.Type_837) as StatusForV70,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.H256): Promise<(v70.Type_837 | undefined)>
    getMany(block: Block, keys: v70.H256[]): Promise<(v70.Type_837 | undefined)[]>
    getKeys(block: Block): Promise<v70.H256[]>
    getKeys(block: Block, key: v70.H256): Promise<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<v70.H256[]>
    getPairs(block: Block): Promise<[k: v70.H256, v: (v70.Type_837 | undefined)][]>
    getPairs(block: Block, key: v70.H256): Promise<[k: v70.H256, v: (v70.Type_837 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H256, v: (v70.Type_837 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<[k: v70.H256, v: (v70.Type_837 | undefined)][]>
}

export const preimageFor =  {
    v70: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v70.H256, sts.number()])], sts.bytes()) as PreimageForV70,
}

export interface PreimageForV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v70.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v70.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v70.H256, number][]>
    getKeys(block: Block, key: [v70.H256, number]): Promise<[v70.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v70.H256, number]): AsyncIterable<[v70.H256, number][]>
    getPairs(block: Block): Promise<[k: [v70.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v70.H256, number]): Promise<[k: [v70.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v70.H256, number]): AsyncIterable<[k: [v70.H256, number], v: (Bytes | undefined)][]>
}
