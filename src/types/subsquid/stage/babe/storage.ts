import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const epochIndex =  {
    /**
     *  Current epoch index.
     */
    v33: new StorageType('Babe.EpochIndex', 'Default', [], sts.bigint()) as EpochIndexV33,
}

/**
 *  Current epoch index.
 */
export interface EpochIndexV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorities =  {
    /**
     *  Current epoch authorities.
     */
    v33: new StorageType('Babe.Authorities', 'Default', [], sts.array(() => sts.tuple(() => [v33.AuthorityId, v33.BabeAuthorityWeight]))) as AuthoritiesV33,
}

/**
 *  Current epoch authorities.
 */
export interface AuthoritiesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.AuthorityId, v33.BabeAuthorityWeight][]
    get(block: Block): Promise<([v33.AuthorityId, v33.BabeAuthorityWeight][] | undefined)>
}

export const genesisSlot =  {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    v33: new StorageType('Babe.GenesisSlot', 'Default', [], v33.Slot) as GenesisSlotV33,
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface GenesisSlotV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Slot
    get(block: Block): Promise<(v33.Slot | undefined)>
}

export const currentSlot =  {
    /**
     *  Current slot number.
     */
    v33: new StorageType('Babe.CurrentSlot', 'Default', [], v33.Slot) as CurrentSlotV33,
}

/**
 *  Current slot number.
 */
export interface CurrentSlotV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Slot
    get(block: Block): Promise<(v33.Slot | undefined)>
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
    v33: new StorageType('Babe.Randomness', 'Default', [], v33.Randomness) as RandomnessV33,
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
export interface RandomnessV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Randomness
    get(block: Block): Promise<(v33.Randomness | undefined)>
}

export const nextEpochConfig =  {
    /**
     *  Next epoch configuration, if changed.
     */
    v33: new StorageType('Babe.NextEpochConfig', 'Optional', [], v33.NextConfigDescriptor) as NextEpochConfigV33,
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    v42: new StorageType('Babe.NextEpochConfig', 'Optional', [], v42.BabeEpochConfiguration) as NextEpochConfigV42,
}

/**
 *  Next epoch configuration, if changed.
 */
export interface NextEpochConfigV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.NextConfigDescriptor | undefined)>
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
    v33: new StorageType('Babe.NextRandomness', 'Default', [], v33.Randomness) as NextRandomnessV33,
}

/**
 *  Next epoch randomness.
 */
export interface NextRandomnessV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Randomness
    get(block: Block): Promise<(v33.Randomness | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Next epoch authorities.
     */
    v33: new StorageType('Babe.NextAuthorities', 'Default', [], sts.array(() => sts.tuple(() => [v33.AuthorityId, v33.BabeAuthorityWeight]))) as NextAuthoritiesV33,
}

/**
 *  Next epoch authorities.
 */
export interface NextAuthoritiesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.AuthorityId, v33.BabeAuthorityWeight][]
    get(block: Block): Promise<([v33.AuthorityId, v33.BabeAuthorityWeight][] | undefined)>
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
    v33: new StorageType('Babe.SegmentIndex', 'Default', [], sts.number()) as SegmentIndexV33,
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
export interface SegmentIndexV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const underConstruction =  {
    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    v33: new StorageType('Babe.UnderConstruction', 'Default', [sts.number()], sts.array(() => v33.Randomness)) as UnderConstructionV33,
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface UnderConstructionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Randomness[]
    get(block: Block, key: number): Promise<(v33.Randomness[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v33.Randomness[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v33.Randomness[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v33.Randomness[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v33.Randomness[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v33.Randomness[] | undefined)][]>
}

export const initialized =  {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v33: new StorageType('Babe.Initialized', 'Optional', [], v33.MaybeRandomness) as InitializedV33,
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
export interface InitializedV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.MaybeRandomness | undefined)>
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
    v33: new StorageType('Babe.AuthorVrfRandomness', 'Default', [], v33.MaybeRandomness) as AuthorVrfRandomnessV33,
}

/**
 *  Temporary value (cleared at block finalization) that includes the VRF output generated
 *  at this block. This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 */
export interface AuthorVrfRandomnessV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.MaybeRandomness
    get(block: Block): Promise<(v33.MaybeRandomness | undefined)>
}

export const lateness =  {
    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    v33: new StorageType('Babe.Lateness', 'Default', [], v33.BlockNumber) as LatenessV33,
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface LatenessV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BlockNumber
    get(block: Block): Promise<(v33.BlockNumber | undefined)>
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
