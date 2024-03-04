import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const state =  {
    /**
     *  State of the current authority set.
     */
    v1: new StorageType('GrandpaFinality.State', 'Default', [], v1.StoredState) as StateV1,
    /**
     *  State of the current authority set.
     */
    v42: new StorageType('Grandpa.State', 'Default', [], v42.StoredState) as StateV42,
}

/**
 *  State of the current authority set.
 */
export interface StateV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.StoredState
    get(block: Block): Promise<(v1.StoredState | undefined)>
}

/**
 *  State of the current authority set.
 */
export interface StateV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.StoredState
    get(block: Block): Promise<(v42.StoredState | undefined)>
}

export const pendingChange =  {
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v1: new StorageType('GrandpaFinality.PendingChange', 'Optional', [], v1.StoredPendingChange) as PendingChangeV1,
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v42: new StorageType('Grandpa.PendingChange', 'Optional', [], v42.StoredPendingChange) as PendingChangeV42,
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.StoredPendingChange | undefined)>
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.StoredPendingChange | undefined)>
}

export const nextForced =  {
    /**
     *  next block number where we can force a change.
     */
    v1: new StorageType('GrandpaFinality.NextForced', 'Optional', [], v1.BlockNumber) as NextForcedV1,
}

/**
 *  next block number where we can force a change.
 */
export interface NextForcedV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.BlockNumber | undefined)>
}

export const stalled =  {
    /**
     *  `true` if we are currently stalled.
     */
    v1: new StorageType('GrandpaFinality.Stalled', 'Optional', [], sts.tuple(() => [v1.BlockNumber, v1.BlockNumber])) as StalledV1,
}

/**
 *  `true` if we are currently stalled.
 */
export interface StalledV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1.BlockNumber, v1.BlockNumber] | undefined)>
}

export const currentSetId =  {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    v1: new StorageType('GrandpaFinality.CurrentSetId', 'Default', [], v1.SetId) as CurrentSetIdV1,
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface CurrentSetIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.SetId
    get(block: Block): Promise<(v1.SetId | undefined)>
}

export const setIdSession =  {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    v1: new StorageType('GrandpaFinality.SetIdSession', 'Optional', [v1.SetId], v1.SessionIndex) as SetIdSessionV1,
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface SetIdSessionV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.SetId): Promise<(v1.SessionIndex | undefined)>
    getMany(block: Block, keys: v1.SetId[]): Promise<(v1.SessionIndex | undefined)[]>
    getKeys(block: Block): Promise<v1.SetId[]>
    getKeys(block: Block, key: v1.SetId): Promise<v1.SetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SetId): AsyncIterable<v1.SetId[]>
    getPairs(block: Block): Promise<[k: v1.SetId, v: (v1.SessionIndex | undefined)][]>
    getPairs(block: Block, key: v1.SetId): Promise<[k: v1.SetId, v: (v1.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SetId, v: (v1.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SetId): AsyncIterable<[k: v1.SetId, v: (v1.SessionIndex | undefined)][]>
}
