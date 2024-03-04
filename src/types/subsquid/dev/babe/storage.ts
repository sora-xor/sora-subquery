import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const epochIndex =  {
    /**
     *  Current epoch index.
     */
    v70: new StorageType('Babe.EpochIndex', 'Default', [], sts.bigint()) as EpochIndexV70,
}

/**
 *  Current epoch index.
 */
export interface EpochIndexV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorities =  {
    /**
     *  Current epoch authorities.
     */
    v70: new StorageType('Babe.Authorities', 'Default', [], sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()]))) as AuthoritiesV70,
}

/**
 *  Current epoch authorities.
 */
export interface AuthoritiesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, bigint][]
    get(block: Block): Promise<([Bytes, bigint][] | undefined)>
}

export const genesisSlot =  {
    /**
     *  The slot at which the first epoch actually started. This is 0
     *  until the first block of the chain.
     */
    v70: new StorageType('Babe.GenesisSlot', 'Default', [], v70.Slot) as GenesisSlotV70,
}

/**
 *  The slot at which the first epoch actually started. This is 0
 *  until the first block of the chain.
 */
export interface GenesisSlotV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Slot
    get(block: Block): Promise<(v70.Slot | undefined)>
}

export const currentSlot =  {
    /**
     *  Current slot number.
     */
    v70: new StorageType('Babe.CurrentSlot', 'Default', [], v70.Slot) as CurrentSlotV70,
}

/**
 *  Current slot number.
 */
export interface CurrentSlotV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Slot
    get(block: Block): Promise<(v70.Slot | undefined)>
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
    v70: new StorageType('Babe.Randomness', 'Default', [], sts.bytes()) as RandomnessV70,
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
export interface RandomnessV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const pendingEpochConfigChange =  {
    /**
     *  Pending epoch configuration change that will be applied when the next epoch is enacted.
     */
    v70: new StorageType('Babe.PendingEpochConfigChange', 'Optional', [], v70.NextConfigDescriptor) as PendingEpochConfigChangeV70,
}

/**
 *  Pending epoch configuration change that will be applied when the next epoch is enacted.
 */
export interface PendingEpochConfigChangeV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.NextConfigDescriptor | undefined)>
}

export const nextRandomness =  {
    /**
     *  Next epoch randomness.
     */
    v70: new StorageType('Babe.NextRandomness', 'Default', [], sts.bytes()) as NextRandomnessV70,
}

/**
 *  Next epoch randomness.
 */
export interface NextRandomnessV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Next epoch authorities.
     */
    v70: new StorageType('Babe.NextAuthorities', 'Default', [], sts.array(() => sts.tuple(() => [sts.bytes(), sts.bigint()]))) as NextAuthoritiesV70,
}

/**
 *  Next epoch authorities.
 */
export interface NextAuthoritiesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [Bytes, bigint][]
    get(block: Block): Promise<([Bytes, bigint][] | undefined)>
}

export const segmentIndex =  {
    /**
     *  Randomness under construction.
     * 
     *  We make a trade-off between storage accesses and list length.
     *  We store the under-construction randomness in segments of up to
     *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
     * 
     *  Once a segment reaches this length, we begin the next one.
     *  We reset all segments and return to `0` at the beginning of every
     *  epoch.
     */
    v70: new StorageType('Babe.SegmentIndex', 'Default', [], sts.number()) as SegmentIndexV70,
}

/**
 *  Randomness under construction.
 * 
 *  We make a trade-off between storage accesses and list length.
 *  We store the under-construction randomness in segments of up to
 *  `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
 * 
 *  Once a segment reaches this length, we begin the next one.
 *  We reset all segments and return to `0` at the beginning of every
 *  epoch.
 */
export interface SegmentIndexV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const underConstruction =  {
    /**
     *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
     */
    v70: new StorageType('Babe.UnderConstruction', 'Default', [sts.number()], sts.array(() => sts.bytes())) as UnderConstructionV70,
}

/**
 *  TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
 */
export interface UnderConstructionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block, key: number): Promise<(Bytes[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes[] | undefined)][]>
}

export const initialized =  {
    /**
     *  Temporary value (cleared at block finalization) which is `Some`
     *  if per-block initialization has already been called for current block.
     */
    v70: new StorageType('Babe.Initialized', 'Optional', [], sts.option(() => v70.PreDigest)) as InitializedV70,
}

/**
 *  Temporary value (cleared at block finalization) which is `Some`
 *  if per-block initialization has already been called for current block.
 */
export interface InitializedV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<((v70.PreDigest | undefined) | undefined)>
}

export const authorVrfRandomness =  {
    /**
     *  This field should always be populated during block processing unless
     *  secondary plain slots are enabled (which don't contain a VRF output).
     * 
     *  It is set in `on_finalize`, before it will contain the value from the last block.
     */
    v70: new StorageType('Babe.AuthorVrfRandomness', 'Default', [], sts.option(() => sts.bytes())) as AuthorVrfRandomnessV70,
}

/**
 *  This field should always be populated during block processing unless
 *  secondary plain slots are enabled (which don't contain a VRF output).
 * 
 *  It is set in `on_finalize`, before it will contain the value from the last block.
 */
export interface AuthorVrfRandomnessV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (Bytes | undefined)
    get(block: Block): Promise<((Bytes | undefined) | undefined)>
}

export const epochStart =  {
    /**
     *  The block numbers when the last and current epoch have started, respectively `N-1` and
     *  `N`.
     *  NOTE: We track this is in order to annotate the block number when a given pool of
     *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
     *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
     */
    v70: new StorageType('Babe.EpochStart', 'Default', [], sts.tuple(() => [sts.number(), sts.number()])) as EpochStartV70,
}

/**
 *  The block numbers when the last and current epoch have started, respectively `N-1` and
 *  `N`.
 *  NOTE: We track this is in order to annotate the block number when a given pool of
 *  entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
 *  slots, which may be skipped, the block numbers may not line up with the slot numbers.
 */
export interface EpochStartV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number]
    get(block: Block): Promise<([number, number] | undefined)>
}

export const lateness =  {
    /**
     *  How late the current block is compared to its parent.
     * 
     *  This entry is populated as part of block execution and is cleaned up
     *  on block finalization. Querying this storage entry outside of block
     *  execution context should always yield zero.
     */
    v70: new StorageType('Babe.Lateness', 'Default', [], sts.number()) as LatenessV70,
}

/**
 *  How late the current block is compared to its parent.
 * 
 *  This entry is populated as part of block execution and is cleaned up
 *  on block finalization. Querying this storage entry outside of block
 *  execution context should always yield zero.
 */
export interface LatenessV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const epochConfig =  {
    /**
     *  The configuration for the current epoch. Should never be `None` as it is initialized in
     *  genesis.
     */
    v70: new StorageType('Babe.EpochConfig', 'Optional', [], v70.BabeEpochConfiguration) as EpochConfigV70,
}

/**
 *  The configuration for the current epoch. Should never be `None` as it is initialized in
 *  genesis.
 */
export interface EpochConfigV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.BabeEpochConfiguration | undefined)>
}

export const nextEpochConfig =  {
    /**
     *  The configuration for the next epoch, `None` if the config will not change
     *  (you can fallback to `EpochConfig` instead in that case).
     */
    v70: new StorageType('Babe.NextEpochConfig', 'Optional', [], v70.BabeEpochConfiguration) as NextEpochConfigV70,
}

/**
 *  The configuration for the next epoch, `None` if the config will not change
 *  (you can fallback to `EpochConfig` instead in that case).
 */
export interface NextEpochConfigV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.BabeEpochConfiguration | undefined)>
}
