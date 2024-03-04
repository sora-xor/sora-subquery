import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const validators =  {
    /**
     *  The current set of validators.
     */
    v70: new StorageType('Session.Validators', 'Default', [], sts.array(() => v70.AccountId32)) as ValidatorsV70,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block): Promise<(v70.AccountId32[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    v70: new StorageType('Session.CurrentIndex', 'Default', [], sts.number()) as CurrentIndexV70,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    v70: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedV70,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v70: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v70.AccountId32, v70.SessionKeys]))) as QueuedKeysV70,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.AccountId32, v70.SessionKeys][]
    get(block: Block): Promise<([v70.AccountId32, v70.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    v70: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsV70,
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    v70: new StorageType('Session.NextKeys', 'Optional', [v70.AccountId32], v70.SessionKeys) as NextKeysV70,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.SessionKeys | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v70: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v70.KeyTypeId, sts.bytes()])], v70.AccountId32) as KeyOwnerV70,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v70.KeyTypeId, Bytes]): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: [v70.KeyTypeId, Bytes][]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v70.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v70.KeyTypeId, Bytes]): Promise<[v70.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v70.KeyTypeId, Bytes]): AsyncIterable<[v70.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v70.KeyTypeId, Bytes], v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [v70.KeyTypeId, Bytes]): Promise<[k: [v70.KeyTypeId, Bytes], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.KeyTypeId, Bytes], v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v70.KeyTypeId, Bytes]): AsyncIterable<[k: [v70.KeyTypeId, Bytes], v: (v70.AccountId32 | undefined)][]>
}
