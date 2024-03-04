import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const accounts =  {
    /**
     *  Multisignature accounts.
     */
    v33: new StorageType('BridgeMultisig.Accounts', 'Optional', [v33.AccountId], v33.MultisigAccount) as AccountsV33,
}

/**
 *  Multisignature accounts.
 */
export interface AccountsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.MultisigAccount | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.MultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.MultisigAccount | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.MultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.MultisigAccount | undefined)][]>
}

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    v33: new StorageType('BridgeMultisig.Multisigs', 'Optional', [v33.AccountId, sts.bytes()], v33.Multisig) as MultisigsV33,
    /**
     *  The set of open multisig operations.
     */
    v42: new StorageType('BridgeMultisig.Multisigs', 'Optional', [v42.AccountId32, sts.bytes()], v42.Multisig) as MultisigsV42,
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
    v33: new StorageType('BridgeMultisig.Calls', 'Optional', [sts.bytes()], sts.tuple(() => [v33.OpaqueCall, v33.AccountId, v33.BalanceOf])) as CallsV33,
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

export const dispatchedCalls =  {
    v33: new StorageType('BridgeMultisig.DispatchedCalls', 'Default', [sts.bytes(), v33.BridgeTimepoint], sts.unit()) as DispatchedCallsV33,
}

export interface DispatchedCallsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): null
    get(block: Block, key1: Bytes, key2: v33.BridgeTimepoint): Promise<(null | undefined)>
    getMany(block: Block, keys: [Bytes, v33.BridgeTimepoint][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, v33.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, v33.BridgeTimepoint][]>
    getKeys(block: Block, key1: Bytes, key2: v33.BridgeTimepoint): Promise<[Bytes, v33.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, v33.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, v33.BridgeTimepoint][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: v33.BridgeTimepoint): AsyncIterable<[Bytes, v33.BridgeTimepoint][]>
    getPairs(block: Block): Promise<[k: [Bytes, v33.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, v33.BridgeTimepoint], v: (null | undefined)][]>
    getPairs(block: Block, key1: Bytes, key2: v33.BridgeTimepoint): Promise<[k: [Bytes, v33.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, v33.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[k: [Bytes, v33.BridgeTimepoint], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes, key2: v33.BridgeTimepoint): AsyncIterable<[k: [Bytes, v33.BridgeTimepoint], v: (null | undefined)][]>
}
