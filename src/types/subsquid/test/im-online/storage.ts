import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const heartbeatAfter =  {
    /**
     *  The block number after which it's ok to send heartbeats in current session.
     * 
     *  At the beginning of each session we set this to a value that should
     *  fall roughly in the middle of the session duration.
     *  The idea is to first wait for the validators to produce a block
     *  in the current session, so that the heartbeat later on will not be necessary.
     */
    v33: new StorageType('ImOnline.HeartbeatAfter', 'Default', [], v33.BlockNumber) as HeartbeatAfterV33,
}

/**
 *  The block number after which it's ok to send heartbeats in current session.
 * 
 *  At the beginning of each session we set this to a value that should
 *  fall roughly in the middle of the session duration.
 *  The idea is to first wait for the validators to produce a block
 *  in the current session, so that the heartbeat later on will not be necessary.
 */
export interface HeartbeatAfterV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BlockNumber
    get(block: Block): Promise<(v33.BlockNumber | undefined)>
}

export const keys =  {
    /**
     *  The current set of keys that may issue a heartbeat.
     */
    v33: new StorageType('ImOnline.Keys', 'Default', [], sts.array(() => v33.AuthorityId)) as KeysV33,
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface KeysV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AuthorityId[]
    get(block: Block): Promise<(v33.AuthorityId[] | undefined)>
}

export const receivedHeartbeats =  {
    /**
     *  For each session index, we keep a mapping of `AuthIndex` to
     *  `offchain::OpaqueNetworkState`.
     */
    v33: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [v33.SessionIndex, v33.AuthIndex], sts.bytes()) as ReceivedHeartbeatsV33,
    /**
     *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
     *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
     */
    v42: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [sts.number(), sts.number()], v42.WrapperOpaque) as ReceivedHeartbeatsV42,
}

/**
 *  For each session index, we keep a mapping of `AuthIndex` to
 *  `offchain::OpaqueNetworkState`.
 */
export interface ReceivedHeartbeatsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v33.SessionIndex, key2: v33.AuthIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v33.SessionIndex, v33.AuthIndex][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v33.SessionIndex, v33.AuthIndex][]>
    getKeys(block: Block, key1: v33.SessionIndex): Promise<[v33.SessionIndex, v33.AuthIndex][]>
    getKeys(block: Block, key1: v33.SessionIndex, key2: v33.AuthIndex): Promise<[v33.SessionIndex, v33.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.SessionIndex, v33.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.SessionIndex): AsyncIterable<[v33.SessionIndex, v33.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.SessionIndex, key2: v33.AuthIndex): AsyncIterable<[v33.SessionIndex, v33.AuthIndex][]>
    getPairs(block: Block): Promise<[k: [v33.SessionIndex, v33.AuthIndex], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v33.SessionIndex): Promise<[k: [v33.SessionIndex, v33.AuthIndex], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v33.SessionIndex, key2: v33.AuthIndex): Promise<[k: [v33.SessionIndex, v33.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.SessionIndex, v33.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.SessionIndex): AsyncIterable<[k: [v33.SessionIndex, v33.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.SessionIndex, key2: v33.AuthIndex): AsyncIterable<[k: [v33.SessionIndex, v33.AuthIndex], v: (Bytes | undefined)][]>
}

/**
 *  For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
 *  `WrapperOpaque<BoundedOpaqueNetworkState>`.
 */
export interface ReceivedHeartbeatsV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: number): Promise<(v42.WrapperOpaque | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(v42.WrapperOpaque | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key1: number): Promise<[number, number][]>
    getKeys(block: Block, key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (v42.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, number], v: (v42.WrapperOpaque | undefined)][]>
    getPairs(block: Block, key1: number, key2: number): Promise<[k: [number, number], v: (v42.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (v42.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, number], v: (v42.WrapperOpaque | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: number): AsyncIterable<[k: [number, number], v: (v42.WrapperOpaque | undefined)][]>
}

export const authoredBlocks =  {
    /**
     *  For each session index, we keep a mapping of `ValidatorId<T>` to the
     *  number of blocks authored by the given authority.
     */
    v33: new StorageType('ImOnline.AuthoredBlocks', 'Default', [v33.SessionIndex, v33.ValidatorId], sts.number()) as AuthoredBlocksV33,
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface AuthoredBlocksV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: v33.SessionIndex, key2: v33.ValidatorId): Promise<(number | undefined)>
    getMany(block: Block, keys: [v33.SessionIndex, v33.ValidatorId][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v33.SessionIndex, v33.ValidatorId][]>
    getKeys(block: Block, key1: v33.SessionIndex): Promise<[v33.SessionIndex, v33.ValidatorId][]>
    getKeys(block: Block, key1: v33.SessionIndex, key2: v33.ValidatorId): Promise<[v33.SessionIndex, v33.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.SessionIndex, v33.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.SessionIndex): AsyncIterable<[v33.SessionIndex, v33.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.SessionIndex, key2: v33.ValidatorId): AsyncIterable<[v33.SessionIndex, v33.ValidatorId][]>
    getPairs(block: Block): Promise<[k: [v33.SessionIndex, v33.ValidatorId], v: (number | undefined)][]>
    getPairs(block: Block, key1: v33.SessionIndex): Promise<[k: [v33.SessionIndex, v33.ValidatorId], v: (number | undefined)][]>
    getPairs(block: Block, key1: v33.SessionIndex, key2: v33.ValidatorId): Promise<[k: [v33.SessionIndex, v33.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.SessionIndex, v33.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.SessionIndex): AsyncIterable<[k: [v33.SessionIndex, v33.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.SessionIndex, key2: v33.ValidatorId): AsyncIterable<[k: [v33.SessionIndex, v33.ValidatorId], v: (number | undefined)][]>
}
