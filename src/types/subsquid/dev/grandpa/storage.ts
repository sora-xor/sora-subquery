import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const state =  {
    /**
     *  State of the current authority set.
     */
    v70: new StorageType('Grandpa.State', 'Default', [], v70.StoredState) as StateV70,
}

/**
 *  State of the current authority set.
 */
export interface StateV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.StoredState
    get(block: Block): Promise<(v70.StoredState | undefined)>
}

export const pendingChange =  {
    /**
     *  Pending change: (signaled at, scheduled change).
     */
    v70: new StorageType('Grandpa.PendingChange', 'Optional', [], v70.StoredPendingChange) as PendingChangeV70,
}

/**
 *  Pending change: (signaled at, scheduled change).
 */
export interface PendingChangeV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.StoredPendingChange | undefined)>
}

export const nextForced =  {
    /**
     *  next block number where we can force a change.
     */
    v70: new StorageType('Grandpa.NextForced', 'Optional', [], sts.number()) as NextForcedV70,
}

/**
 *  next block number where we can force a change.
 */
export interface NextForcedV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const stalled =  {
    /**
     *  `true` if we are currently stalled.
     */
    v70: new StorageType('Grandpa.Stalled', 'Optional', [], sts.tuple(() => [sts.number(), sts.number()])) as StalledV70,
}

/**
 *  `true` if we are currently stalled.
 */
export interface StalledV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([number, number] | undefined)>
}

export const currentSetId =  {
    /**
     *  The number of changes (both in terms of keys and underlying economic responsibilities)
     *  in the "set" of Grandpa validators from genesis.
     */
    v70: new StorageType('Grandpa.CurrentSetId', 'Default', [], sts.bigint()) as CurrentSetIdV70,
}

/**
 *  The number of changes (both in terms of keys and underlying economic responsibilities)
 *  in the "set" of Grandpa validators from genesis.
 */
export interface CurrentSetIdV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const setIdSession =  {
    /**
     *  A mapping from grandpa set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `SetId` is not under user control.
     */
    v70: new StorageType('Grandpa.SetIdSession', 'Optional', [sts.bigint()], sts.number()) as SetIdSessionV70,
}

/**
 *  A mapping from grandpa set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and GRANDPA set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `SetId` is not under user control.
 */
export interface SetIdSessionV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(number | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (number | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (number | undefined)][]>
}
