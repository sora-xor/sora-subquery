import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const state =  {
    /**
     *  State of the current authority set.
     */
    v33: new StorageType('GrandpaFinality.State', 'Default', [], v33.StoredState) as StateV33,
    /**
     *  State of the current authority set.
     */
    v42: new StorageType('Grandpa.State', 'Default', [], v42.StoredState) as StateV42,
}

/**
 *  State of the current authority set.
 */
export interface StateV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.StoredState
    get(block: Block): Promise<(v33.StoredState | undefined)>
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
    v33: new StorageType('GrandpaFinality.PendingChange', 'Optional', [], v33.StoredPendingChange) as PendingChangeV33,
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v42: new StorageType('Grandpa.PendingChange', 'Optional', [], v42.StoredPendingChange) as PendingChangeV42,
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.StoredPendingChange | undefined)>
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
    v33: new StorageType('GrandpaFinality.NextForced', 'Optional', [], v33.BlockNumber) as NextForcedV33,
}

/**
 *  next block number where we can force a change.
 */
export interface NextForcedV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.BlockNumber | undefined)>
}

export const stalled =  {
    /**
     *  `true` if we are currently stalled.
     */
    v33: new StorageType('GrandpaFinality.Stalled', 'Optional', [], sts.tuple(() => [v33.BlockNumber, v33.BlockNumber])) as StalledV33,
}

/**
 *  `true` if we are currently stalled.
 */
export interface StalledV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v33.BlockNumber, v33.BlockNumber] | undefined)>
}

export const currentSetId =  {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    v33: new StorageType('GrandpaFinality.CurrentSetId', 'Default', [], v33.SetId) as CurrentSetIdV33,
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface CurrentSetIdV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.SetId
    get(block: Block): Promise<(v33.SetId | undefined)>
}

export const setIdSession =  {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    v33: new StorageType('GrandpaFinality.SetIdSession', 'Optional', [v33.SetId], v33.SessionIndex) as SetIdSessionV33,
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface SetIdSessionV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.SetId): Promise<(v33.SessionIndex | undefined)>
    getMany(block: Block, keys: v33.SetId[]): Promise<(v33.SessionIndex | undefined)[]>
    getKeys(block: Block): Promise<v33.SetId[]>
    getKeys(block: Block, key: v33.SetId): Promise<v33.SetId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.SetId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.SetId): AsyncIterable<v33.SetId[]>
    getPairs(block: Block): Promise<[k: v33.SetId, v: (v33.SessionIndex | undefined)][]>
    getPairs(block: Block, key: v33.SetId): Promise<[k: v33.SetId, v: (v33.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.SetId, v: (v33.SessionIndex | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.SetId): AsyncIterable<[k: v33.SetId, v: (v33.SessionIndex | undefined)][]>
}
