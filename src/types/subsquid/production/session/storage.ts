import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const validators =  {
    /**
     *  The current set of validators.
     */
    v1: new StorageType('Session.Validators', 'Default', [], sts.array(() => v1.ValidatorId)) as ValidatorsV1,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ValidatorId[]
    get(block: Block): Promise<(v1.ValidatorId[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    v1: new StorageType('Session.CurrentIndex', 'Default', [], v1.SessionIndex) as CurrentIndexV1,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.SessionIndex
    get(block: Block): Promise<(v1.SessionIndex | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    v1: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedV1,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    v1: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [v1.ValidatorId, v1.Keys]))) as QueuedKeysV1,
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
export interface QueuedKeysV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.ValidatorId, v1.Keys][]
    get(block: Block): Promise<([v1.ValidatorId, v1.Keys][] | undefined)>
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
    v1: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsV1,
}

/**
 *  Indices of disabled validators.
 * 
 *  The set is cleared when `on_session_ending` returns a new set of identities.
 */
export interface DisabledValidatorsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    v1: new StorageType('Session.NextKeys', 'Optional', [v1.ValidatorId], v1.Keys) as NextKeysV1,
    /**
     *  The next session keys for a validator.
     */
    v42: new StorageType('Session.NextKeys', 'Optional', [v42.AccountId32], v42.SessionKeys) as NextKeysV42,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.ValidatorId): Promise<(v1.Keys | undefined)>
    getMany(block: Block, keys: v1.ValidatorId[]): Promise<(v1.Keys | undefined)[]>
    getKeys(block: Block): Promise<v1.ValidatorId[]>
    getKeys(block: Block, key: v1.ValidatorId): Promise<v1.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.ValidatorId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.ValidatorId): AsyncIterable<v1.ValidatorId[]>
    getPairs(block: Block): Promise<[k: v1.ValidatorId, v: (v1.Keys | undefined)][]>
    getPairs(block: Block, key: v1.ValidatorId): Promise<[k: v1.ValidatorId, v: (v1.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.ValidatorId, v: (v1.Keys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.ValidatorId): AsyncIterable<[k: v1.ValidatorId, v: (v1.Keys | undefined)][]>
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
    v1: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v1.KeyTypeId, sts.bytes()])], v1.ValidatorId) as KeyOwnerV1,
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    v42: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [v42.KeyTypeId, sts.bytes()])], v42.AccountId32) as KeyOwnerV42,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v1.KeyTypeId, Bytes]): Promise<(v1.ValidatorId | undefined)>
    getMany(block: Block, keys: [v1.KeyTypeId, Bytes][]): Promise<(v1.ValidatorId | undefined)[]>
    getKeys(block: Block): Promise<[v1.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [v1.KeyTypeId, Bytes]): Promise<[v1.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [v1.KeyTypeId, Bytes]): AsyncIterable<[v1.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [v1.KeyTypeId, Bytes], v: (v1.ValidatorId | undefined)][]>
    getPairs(block: Block, key: [v1.KeyTypeId, Bytes]): Promise<[k: [v1.KeyTypeId, Bytes], v: (v1.ValidatorId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.KeyTypeId, Bytes], v: (v1.ValidatorId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v1.KeyTypeId, Bytes]): AsyncIterable<[k: [v1.KeyTypeId, Bytes], v: (v1.ValidatorId | undefined)][]>
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
