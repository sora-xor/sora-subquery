import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v1: new StorageType('Multisig.Multisigs', 'Optional', [v1.AccountId, sts.bytes()], v1.Multisig) as MultisigsV1,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.AccountId, key2: Bytes): Promise<(v1.Multisig | undefined)>
    getMany(block: Block, keys: [v1.AccountId, Bytes][]): Promise<(v1.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v1.AccountId, Bytes][]>
    getKeys(block: Block, key1: v1.AccountId): Promise<[v1.AccountId, Bytes][]>
    getKeys(block: Block, key1: v1.AccountId, key2: Bytes): Promise<[v1.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AccountId): AsyncIterable<[v1.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.AccountId, key2: Bytes): AsyncIterable<[v1.AccountId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v1.AccountId, Bytes], v: (v1.Multisig | undefined)][]>
    getPairs(block: Block, key1: v1.AccountId): Promise<[k: [v1.AccountId, Bytes], v: (v1.Multisig | undefined)][]>
    getPairs(block: Block, key1: v1.AccountId, key2: Bytes): Promise<[k: [v1.AccountId, Bytes], v: (v1.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.AccountId, Bytes], v: (v1.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AccountId): AsyncIterable<[k: [v1.AccountId, Bytes], v: (v1.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.AccountId, key2: Bytes): AsyncIterable<[k: [v1.AccountId, Bytes], v: (v1.Multisig | undefined)][]>
}

export const calls =  {
    v1: new StorageType('Multisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [v1.OpaqueCall, v1.AccountId, v1.BalanceOf])) as CallsV1,
}

export interface CallsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([v1.OpaqueCall, v1.AccountId, v1.BalanceOf] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([v1.OpaqueCall, v1.AccountId, v1.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([v1.OpaqueCall, v1.AccountId, v1.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([v1.OpaqueCall, v1.AccountId, v1.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([v1.OpaqueCall, v1.AccountId, v1.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([v1.OpaqueCall, v1.AccountId, v1.BalanceOf] | undefined)][]>
}
