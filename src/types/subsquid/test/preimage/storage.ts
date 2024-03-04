import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v52: new StorageType('Preimage.StatusFor', 'Optional', [v52.H256], v52.Type_783) as StatusForV52,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v52.H256): Promise<(v52.Type_783 | undefined)>
    getMany(block: Block, keys: v52.H256[]): Promise<(v52.Type_783 | undefined)[]>
    getKeys(block: Block): Promise<v52.H256[]>
    getKeys(block: Block, key: v52.H256): Promise<v52.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.H256): AsyncIterable<v52.H256[]>
    getPairs(block: Block): Promise<[k: v52.H256, v: (v52.Type_783 | undefined)][]>
    getPairs(block: Block, key: v52.H256): Promise<[k: v52.H256, v: (v52.Type_783 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.H256, v: (v52.Type_783 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.H256): AsyncIterable<[k: v52.H256, v: (v52.Type_783 | undefined)][]>
}

export const preimageFor =  {
    v52: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v52.H256, sts.number()])], sts.bytes()) as PreimageForV52,
}

export interface PreimageForV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v52.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v52.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v52.H256, number][]>
    getKeys(block: Block, key: [v52.H256, number]): Promise<[v52.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v52.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v52.H256, number]): AsyncIterable<[v52.H256, number][]>
    getPairs(block: Block): Promise<[k: [v52.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v52.H256, number]): Promise<[k: [v52.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v52.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v52.H256, number]): AsyncIterable<[k: [v52.H256, number], v: (Bytes | undefined)][]>
}
