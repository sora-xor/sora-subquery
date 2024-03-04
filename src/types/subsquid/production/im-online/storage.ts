import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
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
    v1: new StorageType('ImOnline.HeartbeatAfter', 'Default', [], v1.BlockNumber) as HeartbeatAfterV1,
}

/**
 *  The block number after which it's ok to send heartbeats in current session.
 * 
 *  At the beginning of each session we set this to a value that should
 *  fall roughly in the middle of the session duration.
 *  The idea is to first wait for the validators to produce a block
 *  in the current session, so that the heartbeat later on will not be necessary.
 */
export interface HeartbeatAfterV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BlockNumber
    get(block: Block): Promise<(v1.BlockNumber | undefined)>
}

export const keys =  {
    /**
     *  The current set of keys that may issue a heartbeat.
     */
    v1: new StorageType('ImOnline.Keys', 'Default', [], sts.array(() => v1.AuthorityId)) as KeysV1,
}

/**
 *  The current set of keys that may issue a heartbeat.
 */
export interface KeysV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AuthorityId[]
    get(block: Block): Promise<(v1.AuthorityId[] | undefined)>
}

export const receivedHeartbeats =  {
    /**
     *  For each session index, we keep a mapping of `AuthIndex` to
     *  `offchain::OpaqueNetworkState`.
     */
    v1: new StorageType('ImOnline.ReceivedHeartbeats', 'Optional', [v1.SessionIndex, v1.AuthIndex], sts.bytes()) as ReceivedHeartbeatsV1,
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
export interface ReceivedHeartbeatsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1.SessionIndex, key2: v1.AuthIndex): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [v1.SessionIndex, v1.AuthIndex][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[v1.SessionIndex, v1.AuthIndex][]>
    getKeys(block: Block, key1: v1.SessionIndex): Promise<[v1.SessionIndex, v1.AuthIndex][]>
    getKeys(block: Block, key1: v1.SessionIndex, key2: v1.AuthIndex): Promise<[v1.SessionIndex, v1.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.SessionIndex, v1.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.SessionIndex): AsyncIterable<[v1.SessionIndex, v1.AuthIndex][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.SessionIndex, key2: v1.AuthIndex): AsyncIterable<[v1.SessionIndex, v1.AuthIndex][]>
    getPairs(block: Block): Promise<[k: [v1.SessionIndex, v1.AuthIndex], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v1.SessionIndex): Promise<[k: [v1.SessionIndex, v1.AuthIndex], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: v1.SessionIndex, key2: v1.AuthIndex): Promise<[k: [v1.SessionIndex, v1.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.SessionIndex, v1.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.SessionIndex): AsyncIterable<[k: [v1.SessionIndex, v1.AuthIndex], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.SessionIndex, key2: v1.AuthIndex): AsyncIterable<[k: [v1.SessionIndex, v1.AuthIndex], v: (Bytes | undefined)][]>
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
    v1: new StorageType('ImOnline.AuthoredBlocks', 'Default', [v1.SessionIndex, v1.ValidatorId], sts.number()) as AuthoredBlocksV1,
}

/**
 *  For each session index, we keep a mapping of `ValidatorId<T>` to the
 *  number of blocks authored by the given authority.
 */
export interface AuthoredBlocksV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key1: v1.SessionIndex, key2: v1.ValidatorId): Promise<(number | undefined)>
    getMany(block: Block, keys: [v1.SessionIndex, v1.ValidatorId][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[v1.SessionIndex, v1.ValidatorId][]>
    getKeys(block: Block, key1: v1.SessionIndex): Promise<[v1.SessionIndex, v1.ValidatorId][]>
    getKeys(block: Block, key1: v1.SessionIndex, key2: v1.ValidatorId): Promise<[v1.SessionIndex, v1.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.SessionIndex, v1.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.SessionIndex): AsyncIterable<[v1.SessionIndex, v1.ValidatorId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.SessionIndex, key2: v1.ValidatorId): AsyncIterable<[v1.SessionIndex, v1.ValidatorId][]>
    getPairs(block: Block): Promise<[k: [v1.SessionIndex, v1.ValidatorId], v: (number | undefined)][]>
    getPairs(block: Block, key1: v1.SessionIndex): Promise<[k: [v1.SessionIndex, v1.ValidatorId], v: (number | undefined)][]>
    getPairs(block: Block, key1: v1.SessionIndex, key2: v1.ValidatorId): Promise<[k: [v1.SessionIndex, v1.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.SessionIndex, v1.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.SessionIndex): AsyncIterable<[k: [v1.SessionIndex, v1.ValidatorId], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.SessionIndex, key2: v1.ValidatorId): AsyncIterable<[k: [v1.SessionIndex, v1.ValidatorId], v: (number | undefined)][]>
}
