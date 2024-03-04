import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v54 from '../v54'
import * as v70 from '../v70'

export const peers =  {
    /**
     *  Peers
     */
    v54: new StorageType('BridgeDataSigner.Peers', 'Optional', [v54.GenericNetworkId], sts.array(() => sts.bytes())) as PeersV54,
    /**
     *  Peers
     */
    v70: new StorageType('BridgeDataSigner.Peers', 'Optional', [v70.GenericNetworkId], sts.array(() => sts.bytes())) as PeersV70,
}

/**
 *  Peers
 */
export interface PeersV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v54.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v54.GenericNetworkId[]>
    getKeys(block: Block, key: v54.GenericNetworkId): Promise<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.GenericNetworkId): AsyncIterable<v54.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v54.GenericNetworkId): Promise<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.GenericNetworkId): AsyncIterable<[k: v54.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

/**
 *  Peers
 */
export interface PeersV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.GenericNetworkId): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: v70.GenericNetworkId[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<v70.GenericNetworkId[]>
    getKeys(block: Block, key: v70.GenericNetworkId): Promise<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<v70.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: v70.GenericNetworkId): Promise<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<[k: v70.GenericNetworkId, v: (Bytes[] | undefined)][]>
}

export const pendingPeerUpdate =  {
    /**
     *  Pending peers
     */
    v54: new StorageType('BridgeDataSigner.PendingPeerUpdate', 'Default', [v54.GenericNetworkId], sts.boolean()) as PendingPeerUpdateV54,
    /**
     *  Pending peers
     */
    v70: new StorageType('BridgeDataSigner.PendingPeerUpdate', 'Default', [v70.GenericNetworkId], sts.boolean()) as PendingPeerUpdateV70,
}

/**
 *  Pending peers
 */
export interface PendingPeerUpdateV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v54.GenericNetworkId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v54.GenericNetworkId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v54.GenericNetworkId[]>
    getKeys(block: Block, key: v54.GenericNetworkId): Promise<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.GenericNetworkId): AsyncIterable<v54.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v54.GenericNetworkId, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v54.GenericNetworkId): Promise<[k: v54.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.GenericNetworkId): AsyncIterable<[k: v54.GenericNetworkId, v: (boolean | undefined)][]>
}

/**
 *  Pending peers
 */
export interface PendingPeerUpdateV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v70.GenericNetworkId): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v70.GenericNetworkId[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v70.GenericNetworkId[]>
    getKeys(block: Block, key: v70.GenericNetworkId): Promise<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.GenericNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<v70.GenericNetworkId[]>
    getPairs(block: Block): Promise<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v70.GenericNetworkId): Promise<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.GenericNetworkId): AsyncIterable<[k: v70.GenericNetworkId, v: (boolean | undefined)][]>
}

export const approvals =  {
    /**
     *  Approvals
     */
    v54: new StorageType('BridgeDataSigner.Approvals', 'Default', [v54.GenericNetworkId, v54.H256], sts.array(() => sts.tuple(() => [sts.bytes(), v54.Signature]))) as ApprovalsV54,
    /**
     *  Approvals
     */
    v70: new StorageType('BridgeDataSigner.Approvals', 'Default', [v70.GenericNetworkId, v70.H256], sts.array(() => sts.tuple(() => [sts.bytes(), v70.Signature]))) as ApprovalsV70,
}

/**
 *  Approvals
 */
export interface ApprovalsV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, v54.Signature][]
    get(block: Block, key1: v54.GenericNetworkId, key2: v54.H256): Promise<([Bytes, v54.Signature][] | undefined)>
    getMany(block: Block, keys: [v54.GenericNetworkId, v54.H256][]): Promise<([Bytes, v54.Signature][] | undefined)[]>
    getKeys(block: Block): Promise<[v54.GenericNetworkId, v54.H256][]>
    getKeys(block: Block, key1: v54.GenericNetworkId): Promise<[v54.GenericNetworkId, v54.H256][]>
    getKeys(block: Block, key1: v54.GenericNetworkId, key2: v54.H256): Promise<[v54.GenericNetworkId, v54.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v54.GenericNetworkId, v54.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId): AsyncIterable<[v54.GenericNetworkId, v54.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId, key2: v54.H256): AsyncIterable<[v54.GenericNetworkId, v54.H256][]>
    getPairs(block: Block): Promise<[k: [v54.GenericNetworkId, v54.H256], v: ([Bytes, v54.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v54.GenericNetworkId): Promise<[k: [v54.GenericNetworkId, v54.H256], v: ([Bytes, v54.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v54.GenericNetworkId, key2: v54.H256): Promise<[k: [v54.GenericNetworkId, v54.H256], v: ([Bytes, v54.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v54.GenericNetworkId, v54.H256], v: ([Bytes, v54.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId): AsyncIterable<[k: [v54.GenericNetworkId, v54.H256], v: ([Bytes, v54.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v54.GenericNetworkId, key2: v54.H256): AsyncIterable<[k: [v54.GenericNetworkId, v54.H256], v: ([Bytes, v54.Signature][] | undefined)][]>
}

/**
 *  Approvals
 */
export interface ApprovalsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, v70.Signature][]
    get(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<([Bytes, v70.Signature][] | undefined)>
    getMany(block: Block, keys: [v70.GenericNetworkId, v70.H256][]): Promise<([Bytes, v70.Signature][] | undefined)[]>
    getKeys(block: Block): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeys(block: Block, key1: v70.GenericNetworkId): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeys(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H256): AsyncIterable<[v70.GenericNetworkId, v70.H256][]>
    getPairs(block: Block): Promise<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId): Promise<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairs(block: Block, key1: v70.GenericNetworkId, key2: v70.H256): Promise<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.GenericNetworkId, key2: v70.H256): AsyncIterable<[k: [v70.GenericNetworkId, v70.H256], v: ([Bytes, v70.Signature][] | undefined)][]>
}
