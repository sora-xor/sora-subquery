import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v70: new StorageType('Multisig.Multisigs', 'Optional', [v70.AccountId32, sts.bytes()], v70.Type_741) as MultisigsV70,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.AccountId32, key2: Bytes): Promise<(v70.Type_741 | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, Bytes][]): Promise<(v70.Type_741 | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v70.AccountId32): Promise<[v70.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v70.AccountId32, key2: Bytes): Promise<[v70.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[v70.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: Bytes): AsyncIterable<[v70.AccountId32, Bytes][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, Bytes], v: (v70.Type_741 | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32): Promise<[k: [v70.AccountId32, Bytes], v: (v70.Type_741 | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32, key2: Bytes): Promise<[k: [v70.AccountId32, Bytes], v: (v70.Type_741 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, Bytes], v: (v70.Type_741 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[k: [v70.AccountId32, Bytes], v: (v70.Type_741 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: Bytes): AsyncIterable<[k: [v70.AccountId32, Bytes], v: (v70.Type_741 | undefined)][]>
}
