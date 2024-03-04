import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v33: new StorageType('Multisig.Multisigs', 'Optional', [v33.AccountId, sts.bytes()], v33.Multisig) as MultisigsV33,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.AccountId, key2: Bytes): Promise<(v33.Multisig | undefined)>
    getMany(block: Block, keys: [v33.AccountId, Bytes][]): Promise<(v33.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v33.AccountId, Bytes][]>
    getKeys(block: Block, key1: v33.AccountId): Promise<[v33.AccountId, Bytes][]>
    getKeys(block: Block, key1: v33.AccountId, key2: Bytes): Promise<[v33.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[v33.AccountId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: Bytes): AsyncIterable<[v33.AccountId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v33.AccountId, Bytes], v: (v33.Multisig | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId): Promise<[k: [v33.AccountId, Bytes], v: (v33.Multisig | undefined)][]>
    getPairs(block: Block, key1: v33.AccountId, key2: Bytes): Promise<[k: [v33.AccountId, Bytes], v: (v33.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.AccountId, Bytes], v: (v33.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId): AsyncIterable<[k: [v33.AccountId, Bytes], v: (v33.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.AccountId, key2: Bytes): AsyncIterable<[k: [v33.AccountId, Bytes], v: (v33.Multisig | undefined)][]>
}

export const calls =  {
    v33: new StorageType('Multisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [v33.OpaqueCall, v33.AccountId, v33.BalanceOf])) as CallsV33,
}

export interface CallsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([v33.OpaqueCall, v33.AccountId, v33.BalanceOf] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([v33.OpaqueCall, v33.AccountId, v33.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([v33.OpaqueCall, v33.AccountId, v33.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([v33.OpaqueCall, v33.AccountId, v33.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([v33.OpaqueCall, v33.AccountId, v33.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([v33.OpaqueCall, v33.AccountId, v33.BalanceOf] | undefined)][]>
}
