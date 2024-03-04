import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const voting =  {
    /**
     *  A vote of a particular user for a particular poll
     */
    v70: new StorageType('CeresGovernancePlatform.Voting', 'Optional', [v70.H256, v70.AccountId32], v70.VotingInfo) as VotingV70,
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface VotingV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.H256, key2: v70.AccountId32): Promise<(v70.VotingInfo | undefined)>
    getMany(block: Block, keys: [v70.H256, v70.AccountId32][]): Promise<(v70.VotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[v70.H256, v70.AccountId32][]>
    getKeys(block: Block, key1: v70.H256): Promise<[v70.H256, v70.AccountId32][]>
    getKeys(block: Block, key1: v70.H256, key2: v70.AccountId32): Promise<[v70.H256, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.H256, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.H256): AsyncIterable<[v70.H256, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.H256, key2: v70.AccountId32): AsyncIterable<[v70.H256, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v70.H256, v70.AccountId32], v: (v70.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: v70.H256): Promise<[k: [v70.H256, v70.AccountId32], v: (v70.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: v70.H256, key2: v70.AccountId32): Promise<[k: [v70.H256, v70.AccountId32], v: (v70.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.H256, v70.AccountId32], v: (v70.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.H256): AsyncIterable<[k: [v70.H256, v70.AccountId32], v: (v70.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.H256, key2: v70.AccountId32): AsyncIterable<[k: [v70.H256, v70.AccountId32], v: (v70.VotingInfo | undefined)][]>
}

export const pollData =  {
    v70: new StorageType('CeresGovernancePlatform.PollData', 'Optional', [v70.H256], v70.PollInfo) as PollDataV70,
}

export interface PollDataV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.H256): Promise<(v70.PollInfo | undefined)>
    getMany(block: Block, keys: v70.H256[]): Promise<(v70.PollInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.H256[]>
    getKeys(block: Block, key: v70.H256): Promise<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<v70.H256[]>
    getPairs(block: Block): Promise<[k: v70.H256, v: (v70.PollInfo | undefined)][]>
    getPairs(block: Block, key: v70.H256): Promise<[k: v70.H256, v: (v70.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H256, v: (v70.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<[k: v70.H256, v: (v70.PollInfo | undefined)][]>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v70: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v70.Type_796) as PalletStorageVersionV70,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_796
    get(block: Block): Promise<(v70.Type_796 | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for creating a poll
     */
    v70: new StorageType('CeresGovernancePlatform.AuthorityAccount', 'Default', [], v70.AccountId32) as AuthorityAccountV70,
}

/**
 *  Account which has permissions for creating a poll
 */
export interface AuthorityAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}
