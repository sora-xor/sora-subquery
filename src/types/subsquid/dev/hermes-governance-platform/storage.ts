import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const hermesVotings =  {
    /**
     *  A vote of a particular user for a particular poll
     */
    v70: new StorageType('HermesGovernancePlatform.HermesVotings', 'Optional', [v70.H256, v70.AccountId32], v70.HermesVotingInfo) as HermesVotingsV70,
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesVotingsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v70.H256, key2: v70.AccountId32): Promise<(v70.HermesVotingInfo | undefined)>
    getMany(block: Block, keys: [v70.H256, v70.AccountId32][]): Promise<(v70.HermesVotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[v70.H256, v70.AccountId32][]>
    getKeys(block: Block, key1: v70.H256): Promise<[v70.H256, v70.AccountId32][]>
    getKeys(block: Block, key1: v70.H256, key2: v70.AccountId32): Promise<[v70.H256, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v70.H256, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.H256): AsyncIterable<[v70.H256, v70.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v70.H256, key2: v70.AccountId32): AsyncIterable<[v70.H256, v70.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v70.H256, v70.AccountId32], v: (v70.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v70.H256): Promise<[k: [v70.H256, v70.AccountId32], v: (v70.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v70.H256, key2: v70.AccountId32): Promise<[k: [v70.H256, v70.AccountId32], v: (v70.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v70.H256, v70.AccountId32], v: (v70.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.H256): AsyncIterable<[k: [v70.H256, v70.AccountId32], v: (v70.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v70.H256, key2: v70.AccountId32): AsyncIterable<[k: [v70.H256, v70.AccountId32], v: (v70.HermesVotingInfo | undefined)][]>
}

export const hermesPollData =  {
    v70: new StorageType('HermesGovernancePlatform.HermesPollData', 'Optional', [v70.H256], v70.HermesPollInfo) as HermesPollDataV70,
}

export interface HermesPollDataV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.H256): Promise<(v70.HermesPollInfo | undefined)>
    getMany(block: Block, keys: v70.H256[]): Promise<(v70.HermesPollInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.H256[]>
    getKeys(block: Block, key: v70.H256): Promise<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<v70.H256[]>
    getPairs(block: Block): Promise<[k: v70.H256, v: (v70.HermesPollInfo | undefined)][]>
    getPairs(block: Block, key: v70.H256): Promise<[k: v70.H256, v: (v70.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H256, v: (v70.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<[k: v70.H256, v: (v70.HermesPollInfo | undefined)][]>
}

export const minimumHermesVotingAmount =  {
    v70: new StorageType('HermesGovernancePlatform.MinimumHermesVotingAmount', 'Default', [], sts.bigint()) as MinimumHermesVotingAmountV70,
}

export interface MinimumHermesVotingAmountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minimumHermesAmountForCreatingPoll =  {
    v70: new StorageType('HermesGovernancePlatform.MinimumHermesAmountForCreatingPoll', 'Default', [], sts.bigint()) as MinimumHermesAmountForCreatingPollV70,
}

export interface MinimumHermesAmountForCreatingPollV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    v70: new StorageType('HermesGovernancePlatform.AuthorityAccount', 'Default', [], v70.AccountId32) as AuthorityAccountV70,
}

/**
 *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
 */
export interface AuthorityAccountV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v70: new StorageType('HermesGovernancePlatform.PalletStorageVersion', 'Default', [], v70.Type_835) as PalletStorageVersionV70,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_835
    get(block: Block): Promise<(v70.Type_835 | undefined)>
}
