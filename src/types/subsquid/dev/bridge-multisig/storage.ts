import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const accounts =  {
    /**
     *  Multisignature accounts.
     */
    v70: new StorageType('BridgeMultisig.Accounts', 'Optional', [v70.AccountId32], v70.MultisigAccount) as AccountsV70,
}

/**
 *  Multisignature accounts.
 */
export interface AccountsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.MultisigAccount | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.MultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.MultisigAccount | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.MultisigAccount | undefined)][]>
}

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v70: new StorageType('BridgeMultisig.Multisigs', 'Optional', [v70.AccountId32, sts.bytes()], v70.Multisig) as MultisigsV70,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.AccountId32, key2: Bytes): Promise<(v70.Multisig | undefined)>
    getMany(block: Block, keys: [v70.AccountId32, Bytes][]): Promise<(v70.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v70.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v70.AccountId32): Promise<[v70.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v70.AccountId32, key2: Bytes): Promise<[v70.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[v70.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: Bytes): AsyncIterable<[v70.AccountId32, Bytes][]>
    getPairs(block: Block): Promise<[k: [v70.AccountId32, Bytes], v: (v70.Multisig | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32): Promise<[k: [v70.AccountId32, Bytes], v: (v70.Multisig | undefined)][]>
    getPairs(block: Block, key1: v70.AccountId32, key2: Bytes): Promise<[k: [v70.AccountId32, Bytes], v: (v70.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.AccountId32, Bytes], v: (v70.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32): AsyncIterable<[k: [v70.AccountId32, Bytes], v: (v70.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.AccountId32, key2: Bytes): AsyncIterable<[k: [v70.AccountId32, Bytes], v: (v70.Multisig | undefined)][]>
}

export const calls =  {
    v70: new StorageType('BridgeMultisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [sts.bytes(), v70.AccountId32, sts.bigint()])) as CallsV70,
}

export interface CallsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([Bytes, v70.AccountId32, bigint] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([Bytes, v70.AccountId32, bigint] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([Bytes, v70.AccountId32, bigint] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([Bytes, v70.AccountId32, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([Bytes, v70.AccountId32, bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([Bytes, v70.AccountId32, bigint] | undefined)][]>
}

export const dispatchedCalls =  {
    v70: new StorageType('BridgeMultisig.DispatchedCalls', 'Default', [sts.bytes(), v70.BridgeTimepoint], sts.unit()) as DispatchedCallsV70,
}

export interface DispatchedCallsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): null
    get(block: Block, key1: Bytes, key2: v70.BridgeTimepoint): Promise<(null | undefined)>
    getMany(block: Block, keys: [Bytes, v70.BridgeTimepoint][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, v70.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, v70.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes, key2: v70.BridgeTimepoint): Promise<[Bytes, v70.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, v70.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, v70.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: v70.BridgeTimepoint): AsyncIterable<[Bytes, v70.BridgeTimepoint][]>
    getPairs(block: Block): Promise<[k: [Bytes, v70.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, v70.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes, key2: v70.BridgeTimepoint): Promise<[k: [Bytes, v70.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, v70.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[k: [Bytes, v70.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes, key2: v70.BridgeTimepoint): AsyncIterable<[k: [Bytes, v70.BridgeTimepoint], v: (null | undefined)][]>
}
