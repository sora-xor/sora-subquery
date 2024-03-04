import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const accounts =  {
    /**
     *  Multisignature accounts.
     */
    v1: new StorageType('BridgeMultisig.Accounts', 'Optional', [v1.AccountId], v1.MultisigAccount) as AccountsV1,
}

/**
 *  Multisignature accounts.
 */
export interface AccountsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<(v1.MultisigAccount | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.MultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.MultisigAccount | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.MultisigAccount | undefined)][]>
}

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v1: new StorageType('BridgeMultisig.Multisigs', 'Optional', [v1.AccountId, sts.bytes()], v1.Multisig) as MultisigsV1,
    /**
     *  The set of open multisig operations.
     */
    v42: new StorageType('BridgeMultisig.Multisigs', 'Optional', [v42.AccountId32, sts.bytes()], v42.Multisig) as MultisigsV42,
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

/**
 *  The set of open multisig operations.
 */
export interface MultisigsV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v42.AccountId32, key2: Bytes): Promise<(v42.Multisig | undefined)>
    getMany(block: Block, keys: [v42.AccountId32, Bytes][]): Promise<(v42.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[v42.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v42.AccountId32): Promise<[v42.AccountId32, Bytes][]>
    getKeys(block: Block, key1: v42.AccountId32, key2: Bytes): Promise<[v42.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[v42.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: Bytes): AsyncIterable<[v42.AccountId32, Bytes][]>
    getPairs(block: Block): Promise<[k: [v42.AccountId32, Bytes], v: (v42.Multisig | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32): Promise<[k: [v42.AccountId32, Bytes], v: (v42.Multisig | undefined)][]>
    getPairs(block: Block, key1: v42.AccountId32, key2: Bytes): Promise<[k: [v42.AccountId32, Bytes], v: (v42.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.AccountId32, Bytes], v: (v42.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32): AsyncIterable<[k: [v42.AccountId32, Bytes], v: (v42.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v42.AccountId32, key2: Bytes): AsyncIterable<[k: [v42.AccountId32, Bytes], v: (v42.Multisig | undefined)][]>
}

export const calls =  {
    v1: new StorageType('BridgeMultisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [v1.OpaqueCall, v1.AccountId, v1.BalanceOf])) as CallsV1,
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

export const dispatchedCalls =  {
    v1: new StorageType('BridgeMultisig.DispatchedCalls', 'Default', [sts.bytes(), v1.BridgeTimepoint], sts.unit()) as DispatchedCallsV1,
}

export interface DispatchedCallsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): null
    get(block: Block, key1: Bytes, key2: v1.BridgeTimepoint): Promise<(null | undefined)>
    getMany(block: Block, keys: [Bytes, v1.BridgeTimepoint][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, v1.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, v1.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes, key2: v1.BridgeTimepoint): Promise<[Bytes, v1.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, v1.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, v1.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: v1.BridgeTimepoint): AsyncIterable<[Bytes, v1.BridgeTimepoint][]>
    getPairs(block: Block): Promise<[k: [Bytes, v1.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, v1.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes, key2: v1.BridgeTimepoint): Promise<[k: [Bytes, v1.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, v1.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[k: [Bytes, v1.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes, key2: v1.BridgeTimepoint): AsyncIterable<[k: [Bytes, v1.BridgeTimepoint], v: (null | undefined)][]>
}
