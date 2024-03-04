import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const epochIndex =  {
    /**
     *  Current epoch index.
     */
    v1: new StorageType('Babe.EpochIndex', 'Default', [], sts.bigint()) as EpochIndexV1,
}

/**
 *  Current epoch index.
 */
export interface EpochIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorities =  {
    /**
     *  Current epoch authorities.
     */
    v1: new StorageType('Babe.Authorities', 'Default', [], sts.array(() => sts.tuple(() => [v1.AuthorityId, v1.BabeAuthorityWeight]))) as AuthoritiesV1,
}

/**
 *  Current epoch authorities.
 */
export interface AuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.AuthorityId, v1.BabeAuthorityWeight][]
    get(block: Block): Promise<([v1.AuthorityId, v1.BabeAuthorityWeight][] | undefined)>
}

export const genesisSlot =  {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    v1: new StorageType('Babe.GenesisSlot', 'Default', [], v1.Slot) as GenesisSlotV1,
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface GenesisSlotV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Slot
    get(block: Block): Promise<(v1.Slot | undefined)>
}

export const currentSlot =  {
    /**
     *  Current slot number.
     */
    v1: new StorageType('Babe.CurrentSlot', 'Default', [], v1.Slot) as CurrentSlotV1,
}

/**
 *  Current slot number.
 */
export interface CurrentSlotV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Slot
    get(block: Block): Promise<(v1.Slot | undefined)>
}

export const randomness =  {
    /**
     *  The epoch randomness for the *current* epoch.
     * 
     *  # Security
     * 
     *  This MUST NOT be used for gambling, as it can be influenced by a
     *  malicious validator in the short term. It MAY be used in many
     *  cryptographic protocols, however, so long as one remembers that this
     *  (like everything else on-chain) it is public. For example, it can be
     *  used where a number is needed that cannot have been chosen by an
     *  adversary, for purposes such as public-coin zero-knowledge proofs.
     */
    v1: new StorageType('Babe.Randomness', 'Default', [], v1.Randomness) as RandomnessV1,
}

/**
 *  The epoch randomness for the *current* epoch.
 * 
 *  # Security
 * 
 *  This MUST NOT be used for gambling, as it can be influenced by a
 *  malicious validator in the short term. It MAY be used in many
 *  cryptographic protocols, however, so long as one remembers that this
 *  (like everything else on-chain) it is public. For example, it can be
 *  used where a number is needed that cannot have been chosen by an
 *  adversary, for purposes such as public-coin zero-knowledge proofs.
 */
export interface RandomnessV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Randomness
    get(block: Block): Promise<(v1.Randomness | undefined)>
}

export const nextEpochConfig =  {
    /**
     *  Next epoch configuration, if changed.
     */
    v1: new StorageType('Babe.NextEpochConfig', 'Optional', [], v1.NextConfigDescriptor) as NextEpochConfigV1,
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    v42: new StorageType('Babe.NextEpochConfig', 'Optional', [], v42.BabeEpochConfiguration) as NextEpochConfigV42,
}

/**
 *  Next epoch configuration, if changed.
 */
export interface NextEpochConfigV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.NextConfigDescriptor | undefined)>
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface NextEpochConfigV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.BabeEpochConfiguration | undefined)>
}

export const nextRandomness =  {
    /**
     *  Next epoch randomness.
     */
    v1: new StorageType('Babe.NextRandomness', 'Default', [], v1.Randomness) as NextRandomnessV1,
}

/**
 *  Next epoch randomness.
 */
export interface NextRandomnessV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Randomness
    get(block: Block): Promise<(v1.Randomness | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Next epoch authorities.
     */
    v1: new StorageType('Babe.NextAuthorities', 'Default', [], sts.array(() => sts.tuple(() => [v1.AuthorityId, v1.BabeAuthorityWeight]))) as NextAuthoritiesV1,
}

/**
 *  Next epoch authorities.
 */
export interface NextAuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.AuthorityId, v1.BabeAuthorityWeight][]
    get(block: Block): Promise<([v1.AuthorityId, v1.BabeAuthorityWeight][] | undefined)>
}

export const segmentIndex =  {
    /**
     *  Randomness under construction.
     * 
     *  We make a tradeoff between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    v1: new StorageType('Babe.SegmentIndex', 'Default', [], sts.number()) as SegmentIndexV1,
}

/**
 *  Randomness under construction.
 * 
 *  We make a tradeoff between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface SegmentIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const underConstruction =  {
    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    v1: new StorageType('Babe.UnderConstruction', 'Default', [sts.number()], sts.array(() => v1.Randomness)) as UnderConstructionV1,
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface UnderConstructionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Randomness[]
    get(block: Block, key: number): Promise<(v1.Randomness[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v1.Randomness[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v1.Randomness[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v1.Randomness[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v1.Randomness[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v1.Randomness[] | undefined)][]>
}

export const initialized =  {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v1: new StorageType('Babe.Initialized', 'Optional', [], v1.MaybeRandomness) as InitializedV1,
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v42: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v42.PreDigest)) as InitializedV42,
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.MaybeRandomness | undefined)>
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v42.PreDigest | undefined) | undefined)>
}

export const authorVrfRandomness =  {
    /**
     *  Temporary value (cleared at block finalization) that includes the VRF output generated
     *  at this block. This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     */
    v1: new StorageType('Babe.AuthorVrfRandomness', 'Default', [], v1.MaybeRandomness) as AuthorVrfRandomnessV1,
}

/**
 *  Temporary value (cleared at block finalization) that includes the VRF output generated
 *  at this block. This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 */
export interface AuthorVrfRandomnessV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.MaybeRandomness
    get(block: Block): Promise<(v1.MaybeRandomness | undefined)>
}

export const lateness =  {
    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    v1: new StorageType('Babe.Lateness', 'Default', [], v1.BlockNumber) as LatenessV1,
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface LatenessV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BlockNumber
    get(block: Block): Promise<(v1.BlockNumber | undefined)>
}

export const pendingEpochConfigChange =  {
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    v42: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], v42.NextConfigDescriptor) as PendingEpochConfigChangeV42,
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.NextConfigDescriptor | undefined)>
}

export const epochStart =  {
    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    v42: new StorageType('Babe.EpochStart', 'Default', [], sts.tuple(() => [sts.number(), sts.number()])) as EpochStartV42,
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface EpochStartV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block): Promise<([number, number] | undefined)>
}

export const epochConfig =  {
    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    v42: new StorageType('Babe.EpochConfig', 'Optional', [], v42.BabeEpochConfiguration) as EpochConfigV42,
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface EpochConfigV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.BabeEpochConfiguration | undefined)>
}
