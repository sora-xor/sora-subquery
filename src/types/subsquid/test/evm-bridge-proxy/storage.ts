import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const transactions =  {
    v52: new StorageType('EvmBridgeProxy.Transactions', 'Optional', [v52.AccountId32, sts.tuple(() => [v52.GenericNetworkId, v52.H256])], v52.BridgeRequest) as TransactionsV52,
}

export interface TransactionsV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v52.AccountId32, key2: [v52.GenericNetworkId, v52.H256]): Promise<(v52.BridgeRequest | undefined)>
    getMany(block: Block, keys: [v52.AccountId32, [v52.GenericNetworkId, v52.H256]][]): Promise<(v52.BridgeRequest | undefined)[]>
    getKeys(block: Block): Promise<[v52.AccountId32, [v52.GenericNetworkId, v52.H256]][]>
    getKeys(block: Block, key1: v52.AccountId32): Promise<[v52.AccountId32, [v52.GenericNetworkId, v52.H256]][]>
    getKeys(block: Block, key1: v52.AccountId32, key2: [v52.GenericNetworkId, v52.H256]): Promise<[v52.AccountId32, [v52.GenericNetworkId, v52.H256]][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v52.AccountId32, [v52.GenericNetworkId, v52.H256]][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.AccountId32): AsyncIterable<[v52.AccountId32, [v52.GenericNetworkId, v52.H256]][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.AccountId32, key2: [v52.GenericNetworkId, v52.H256]): AsyncIterable<[v52.AccountId32, [v52.GenericNetworkId, v52.H256]][]>
    getPairs(block: Block): Promise<[k: [v52.AccountId32, [v52.GenericNetworkId, v52.H256]], v: (v52.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: v52.AccountId32): Promise<[k: [v52.AccountId32, [v52.GenericNetworkId, v52.H256]], v: (v52.BridgeRequest | undefined)][]>
    getPairs(block: Block, key1: v52.AccountId32, key2: [v52.GenericNetworkId, v52.H256]): Promise<[k: [v52.AccountId32, [v52.GenericNetworkId, v52.H256]], v: (v52.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v52.AccountId32, [v52.GenericNetworkId, v52.H256]], v: (v52.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.AccountId32): AsyncIterable<[k: [v52.AccountId32, [v52.GenericNetworkId, v52.H256]], v: (v52.BridgeRequest | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.AccountId32, key2: [v52.GenericNetworkId, v52.H256]): AsyncIterable<[k: [v52.AccountId32, [v52.GenericNetworkId, v52.H256]], v: (v52.BridgeRequest | undefined)][]>
}

export const senders =  {
    v52: new StorageType('EvmBridgeProxy.Senders', 'Optional', [v52.GenericNetworkId, v52.H256], v52.AccountId32) as SendersV52,
}

export interface SendersV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v52.GenericNetworkId, key2: v52.H256): Promise<(v52.AccountId32 | undefined)>
    getMany(block: Block, keys: [v52.GenericNetworkId, v52.H256][]): Promise<(v52.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v52.GenericNetworkId, v52.H256][]>
    getKeys(block: Block, key1: v52.GenericNetworkId): Promise<[v52.GenericNetworkId, v52.H256][]>
    getKeys(block: Block, key1: v52.GenericNetworkId, key2: v52.H256): Promise<[v52.GenericNetworkId, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v52.GenericNetworkId, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.GenericNetworkId): AsyncIterable<[v52.GenericNetworkId, v52.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v52.GenericNetworkId, key2: v52.H256): AsyncIterable<[v52.GenericNetworkId, v52.H256][]>
    getPairs(block: Block): Promise<[k: [v52.GenericNetworkId, v52.H256], v: (v52.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v52.GenericNetworkId): Promise<[k: [v52.GenericNetworkId, v52.H256], v: (v52.AccountId32 | undefined)][]>
    getPairs(block: Block, key1: v52.GenericNetworkId, key2: v52.H256): Promise<[k: [v52.GenericNetworkId, v52.H256], v: (v52.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v52.GenericNetworkId, v52.H256], v: (v52.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.GenericNetworkId): AsyncIterable<[k: [v52.GenericNetworkId, v52.H256], v: (v52.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v52.GenericNetworkId, key2: v52.H256): AsyncIterable<[k: [v52.GenericNetworkId, v52.H256], v: (v52.AccountId32 | undefined)][]>
}
