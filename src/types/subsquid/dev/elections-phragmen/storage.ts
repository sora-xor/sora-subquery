import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const members =  {
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v70: new StorageType('ElectionsPhragmen.Members', 'Default', [], sts.array(() => v70.SeatHolder)) as MembersV70,
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.SeatHolder[]
    get(block: Block): Promise<(v70.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v70: new StorageType('ElectionsPhragmen.RunnersUp', 'Default', [], sts.array(() => v70.SeatHolder)) as RunnersUpV70,
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.SeatHolder[]
    get(block: Block): Promise<(v70.SeatHolder[] | undefined)>
}

export const candidates =  {
    /**
     *  The present candidate list. A current member or runner-up can never enter this vector
     *  and is always implicitly assumed to be a candidate.
     * 
     *  Second element is the deposit.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v70: new StorageType('ElectionsPhragmen.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v70.AccountId32, sts.bigint()]))) as CandidatesV70,
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v70.AccountId32, bigint][]
    get(block: Block): Promise<([v70.AccountId32, bigint][] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v70: new StorageType('ElectionsPhragmen.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV70,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const voting =  {
    /**
     *  Votes and locked stake of a particular voter.
     * 
     *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     */
    v70: new StorageType('ElectionsPhragmen.Voting', 'Default', [v70.AccountId32], v70.Voter) as VotingV70,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Voter
    get(block: Block, key: v70.AccountId32): Promise<(v70.Voter | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.Voter | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.Voter | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.Voter | undefined)][]>
}
