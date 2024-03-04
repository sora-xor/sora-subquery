import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v70: new StorageType('Council.Proposals', 'Default', [], sts.array(() => v70.H256)) as ProposalsV70,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H256[]
    get(block: Block): Promise<(v70.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v70: new StorageType('Council.ProposalOf', 'Optional', [v70.H256], v70.Call) as ProposalOfV70,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.H256): Promise<(v70.Call | undefined)>
    getMany(block: Block, keys: v70.H256[]): Promise<(v70.Call | undefined)[]>
    getKeys(block: Block): Promise<v70.H256[]>
    getKeys(block: Block, key: v70.H256): Promise<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<v70.H256[]>
    getPairs(block: Block): Promise<[k: v70.H256, v: (v70.Call | undefined)][]>
    getPairs(block: Block, key: v70.H256): Promise<[k: v70.H256, v: (v70.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H256, v: (v70.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<[k: v70.H256, v: (v70.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v70: new StorageType('Council.Voting', 'Optional', [v70.H256], v70.Votes) as VotingV70,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.H256): Promise<(v70.Votes | undefined)>
    getMany(block: Block, keys: v70.H256[]): Promise<(v70.Votes | undefined)[]>
    getKeys(block: Block): Promise<v70.H256[]>
    getKeys(block: Block, key: v70.H256): Promise<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<v70.H256[]>
    getPairs(block: Block): Promise<[k: v70.H256, v: (v70.Votes | undefined)][]>
    getPairs(block: Block, key: v70.H256): Promise<[k: v70.H256, v: (v70.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H256, v: (v70.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<[k: v70.H256, v: (v70.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v70: new StorageType('Council.ProposalCount', 'Default', [], sts.number()) as ProposalCountV70,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v70: new StorageType('Council.Members', 'Default', [], sts.array(() => v70.AccountId32)) as MembersV70,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block): Promise<(v70.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    v70: new StorageType('Council.Prime', 'Optional', [], v70.AccountId32) as PrimeV70,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}
