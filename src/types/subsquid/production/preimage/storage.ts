import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v53 from '../v53'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    v53: new StorageType('Preimage.StatusFor', 'Optional', [v53.H256], v53.Type_683) as StatusForV53,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v53.H256): Promise<(v53.Type_683 | undefined)>
    getMany(block: Block, keys: v53.H256[]): Promise<(v53.Type_683 | undefined)[]>
    getKeys(block: Block): Promise<v53.H256[]>
    getKeys(block: Block, key: v53.H256): Promise<v53.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v53.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v53.H256): AsyncIterable<v53.H256[]>
    getPairs(block: Block): Promise<[k: v53.H256, v: (v53.Type_683 | undefined)][]>
    getPairs(block: Block, key: v53.H256): Promise<[k: v53.H256, v: (v53.Type_683 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v53.H256, v: (v53.Type_683 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v53.H256): AsyncIterable<[k: v53.H256, v: (v53.Type_683 | undefined)][]>
}

export const preimageFor =  {
    v53: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [v53.H256, sts.number()])], sts.bytes()) as PreimageForV53,
}

export interface PreimageForV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v53.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v53.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v53.H256, number][]>
    getKeys(block: Block, key: [v53.H256, number]): Promise<[v53.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v53.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v53.H256, number]): AsyncIterable<[v53.H256, number][]>
    getPairs(block: Block): Promise<[k: [v53.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [v53.H256, number]): Promise<[k: [v53.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v53.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v53.H256, number]): AsyncIterable<[k: [v53.H256, number], v: (Bytes | undefined)][]>
}
