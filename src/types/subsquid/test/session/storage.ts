import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const validators =  {
    /**
     *  The current set of validators.
     */
    v33: new StorageType('Session.Validators', 'Default', [], sts.array(() => v33.ValidatorId)) as ValidatorsV33,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ValidatorId[]
    get(block: Block): Promise<(v33.ValidatorId[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    v33: new StorageType('Session.CurrentIndex', 'Default', [], v33.SessionIndex) as CurrentIndexV33,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.SessionIndex
    get(block: Block): Promise<(v33.SessionIndex | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    v33: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedV33,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v33: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v33.ValidatorId, v33.Keys]))) as QueuedKeysV33,
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v42: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v42.AccountId32, v42.SessionKeys]))) as QueuedKeysV42,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.ValidatorId, v33.Keys][]
    get(block: Block): Promise<([v33.ValidatorId, v33.Keys][] | undefined)>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v42.AccountId32, v42.SessionKeys][]
    get(block: Block): Promise<([v42.AccountId32, v42.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The set is cleared when `on_session_ending` returns a new set of identities.
     */
    v33: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsV33,
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface DisabledValidatorsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    v33: new StorageType('Session.NextKeys', 'Optional', [v33.ValidatorId], v33.Keys) as NextKeysV33,
    /**
     *  The next session keys for a validator.
     */
    v42: new StorageType('Session.NextKeys', 'Optional', [v42.AccountId32], v42.SessionKeys) as NextKeysV42,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.ValidatorId): Promise<(v33.Keys | undefined)>
    getMany(block: Block, keys: v33.ValidatorId[]): Promise<(v33.Keys | undefined)[]>
    getKeys(block: Block): Promise<v33.ValidatorId[]>
    getKeys(block: Block, key: v33.ValidatorId): Promise<v33.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.ValidatorId): AsyncIterable<v33.ValidatorId[]>
    getPairs(block: Block): Promise<[k: v33.ValidatorId, v: (v33.Keys | undefined)][]>
    getPairs(block: Block, key: v33.ValidatorId): Promise<[k: v33.ValidatorId, v: (v33.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.ValidatorId, v: (v33.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.ValidatorId): AsyncIterable<[k: v33.ValidatorId, v: (v33.Keys | undefined)][]>
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.AccountId32): Promise<(v42.SessionKeys | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.SessionKeys | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v33: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v33.KeyTypeId, sts.bytes()])], v33.ValidatorId) as KeyOwnerV33,
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v42: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v42.KeyTypeId, sts.bytes()])], v42.AccountId32) as KeyOwnerV42,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v33.KeyTypeId, Bytes]): Promise<(v33.ValidatorId | undefined)>
    getMany(block: Block, keys: [v33.KeyTypeId, Bytes][]): Promise<(v33.ValidatorId | undefined)[]>
    getKeys(block: Block): Promise<[v33.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v33.KeyTypeId, Bytes]): Promise<[v33.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v33.KeyTypeId, Bytes]): AsyncIterable<[v33.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v33.KeyTypeId, Bytes], v: (v33.ValidatorId | undefined)][]>
    getPairs(block: Block, key: [v33.KeyTypeId, Bytes]): Promise<[k: [v33.KeyTypeId, Bytes], v: (v33.ValidatorId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.KeyTypeId, Bytes], v: (v33.ValidatorId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v33.KeyTypeId, Bytes]): AsyncIterable<[k: [v33.KeyTypeId, Bytes], v: (v33.ValidatorId | undefined)][]>
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v42.KeyTypeId, Bytes]): Promise<(v42.AccountId32 | undefined)>
    getMany(block: Block, keys: [v42.KeyTypeId, Bytes][]): Promise<(v42.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[v42.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v42.KeyTypeId, Bytes]): Promise<[v42.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v42.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v42.KeyTypeId, Bytes]): AsyncIterable<[v42.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v42.KeyTypeId, Bytes], v: (v42.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [v42.KeyTypeId, Bytes]): Promise<[k: [v42.KeyTypeId, Bytes], v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v42.KeyTypeId, Bytes], v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v42.KeyTypeId, Bytes]): AsyncIterable<[k: [v42.KeyTypeId, Bytes], v: (v42.AccountId32 | undefined)][]>
}
