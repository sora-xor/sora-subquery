import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const members =  {
    /**
     *  The current elected members.
     * 
     *  Invariant: Always sorted based on account id.
     */
    v33: new StorageType('PhragmenElection.Members', 'Default', [], sts.array(() => v33.SeatHolder)) as MembersV33,
}

/**
 *  The current elected members.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface MembersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.SeatHolder[]
    get(block: Block): Promise<(v33.SeatHolder[] | undefined)>
}

export const runnersUp =  {
    /**
     *  The current reserved runners-up.
     * 
     *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     *  last (i.e. _best_) runner-up will be replaced.
     */
    v33: new StorageType('PhragmenElection.RunnersUp', 'Default', [], sts.array(() => v33.SeatHolder)) as RunnersUpV33,
}

/**
 *  The current reserved runners-up.
 * 
 *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
 *  last (i.e. _best_) runner-up will be replaced.
 */
export interface RunnersUpV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.SeatHolder[]
    get(block: Block): Promise<(v33.SeatHolder[] | undefined)>
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
    v33: new StorageType('PhragmenElection.Candidates', 'Default', [], sts.array(() => sts.tuple(() => [v33.AccountId, v33.BalanceOf]))) as CandidatesV33,
}

/**
 *  The present candidate list. A current member or runner-up can never enter this vector
 *  and is always implicitly assumed to be a candidate.
 * 
 *  Second element is the deposit.
 * 
 *  Invariant: Always sorted based on account id.
 */
export interface CandidatesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.AccountId, v33.BalanceOf][]
    get(block: Block): Promise<([v33.AccountId, v33.BalanceOf][] | undefined)>
}

export const electionRounds =  {
    /**
     *  The total number of vote rounds that have happened, excluding the upcoming one.
     */
    v33: new StorageType('PhragmenElection.ElectionRounds', 'Default', [], sts.number()) as ElectionRoundsV33,
}

/**
 *  The total number of vote rounds that have happened, excluding the upcoming one.
 */
export interface ElectionRoundsV33  {
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
    v33: new StorageType('PhragmenElection.Voting', 'Default', [v33.AccountId], v33.Voter) as VotingV33,
}

/**
 *  Votes and locked stake of a particular voter.
 * 
 *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
 */
export interface VotingV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Voter
    get(block: Block, key: v33.AccountId): Promise<(v33.Voter | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.Voter | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.Voter | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.Voter | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.Voter | undefined)][]>
}
