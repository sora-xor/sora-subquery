import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v47 from '../v47'
import * as v55 from '../v55'

export const hermesVotings =  {
    /**
     *  A vote of a particular user for a particular poll
     */
    v47: new StorageType('HermesGovernancePlatform.HermesVotings', 'Optional', [v47.H256, v47.AccountId32], v47.HermesVotingInfo) as HermesVotingsV47,
    /**
     *  A vote of a particular user for a particular poll
     */
    v55: new StorageType('HermesGovernancePlatform.HermesVotings', 'Optional', [v55.H256, v55.AccountId32], v55.HermesVotingInfo) as HermesVotingsV55,
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesVotingsV47  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v47.H256, key2: v47.AccountId32): Promise<(v47.HermesVotingInfo | undefined)>
    getMany(block: Block, keys: [v47.H256, v47.AccountId32][]): Promise<(v47.HermesVotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[v47.H256, v47.AccountId32][]>
    getKeys(block: Block, key1: v47.H256): Promise<[v47.H256, v47.AccountId32][]>
    getKeys(block: Block, key1: v47.H256, key2: v47.AccountId32): Promise<[v47.H256, v47.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v47.H256, v47.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v47.H256): AsyncIterable<[v47.H256, v47.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v47.H256, key2: v47.AccountId32): AsyncIterable<[v47.H256, v47.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v47.H256, v47.AccountId32], v: (v47.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v47.H256): Promise<[k: [v47.H256, v47.AccountId32], v: (v47.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v47.H256, key2: v47.AccountId32): Promise<[k: [v47.H256, v47.AccountId32], v: (v47.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v47.H256, v47.AccountId32], v: (v47.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v47.H256): AsyncIterable<[k: [v47.H256, v47.AccountId32], v: (v47.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v47.H256, key2: v47.AccountId32): AsyncIterable<[k: [v47.H256, v47.AccountId32], v: (v47.HermesVotingInfo | undefined)][]>
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface HermesVotingsV55  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v55.H256, key2: v55.AccountId32): Promise<(v55.HermesVotingInfo | undefined)>
    getMany(block: Block, keys: [v55.H256, v55.AccountId32][]): Promise<(v55.HermesVotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[v55.H256, v55.AccountId32][]>
    getKeys(block: Block, key1: v55.H256): Promise<[v55.H256, v55.AccountId32][]>
    getKeys(block: Block, key1: v55.H256, key2: v55.AccountId32): Promise<[v55.H256, v55.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v55.H256, v55.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v55.H256): AsyncIterable<[v55.H256, v55.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v55.H256, key2: v55.AccountId32): AsyncIterable<[v55.H256, v55.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v55.H256, v55.AccountId32], v: (v55.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v55.H256): Promise<[k: [v55.H256, v55.AccountId32], v: (v55.HermesVotingInfo | undefined)][]>
    getPairs(block: Block, key1: v55.H256, key2: v55.AccountId32): Promise<[k: [v55.H256, v55.AccountId32], v: (v55.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v55.H256, v55.AccountId32], v: (v55.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v55.H256): AsyncIterable<[k: [v55.H256, v55.AccountId32], v: (v55.HermesVotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v55.H256, key2: v55.AccountId32): AsyncIterable<[k: [v55.H256, v55.AccountId32], v: (v55.HermesVotingInfo | undefined)][]>
}

export const hermesPollData =  {
    v47: new StorageType('HermesGovernancePlatform.HermesPollData', 'Optional', [v47.H256], v47.HermesPollInfo) as HermesPollDataV47,
    v55: new StorageType('HermesGovernancePlatform.HermesPollData', 'Optional', [v55.H256], v55.HermesPollInfo) as HermesPollDataV55,
}

export interface HermesPollDataV47  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v47.H256): Promise<(v47.HermesPollInfo | undefined)>
    getMany(block: Block, keys: v47.H256[]): Promise<(v47.HermesPollInfo | undefined)[]>
    getKeys(block: Block): Promise<v47.H256[]>
    getKeys(block: Block, key: v47.H256): Promise<v47.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v47.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v47.H256): AsyncIterable<v47.H256[]>
    getPairs(block: Block): Promise<[k: v47.H256, v: (v47.HermesPollInfo | undefined)][]>
    getPairs(block: Block, key: v47.H256): Promise<[k: v47.H256, v: (v47.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v47.H256, v: (v47.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v47.H256): AsyncIterable<[k: v47.H256, v: (v47.HermesPollInfo | undefined)][]>
}

export interface HermesPollDataV55  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v55.H256): Promise<(v55.HermesPollInfo | undefined)>
    getMany(block: Block, keys: v55.H256[]): Promise<(v55.HermesPollInfo | undefined)[]>
    getKeys(block: Block): Promise<v55.H256[]>
    getKeys(block: Block, key: v55.H256): Promise<v55.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v55.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v55.H256): AsyncIterable<v55.H256[]>
    getPairs(block: Block): Promise<[k: v55.H256, v: (v55.HermesPollInfo | undefined)][]>
    getPairs(block: Block, key: v55.H256): Promise<[k: v55.H256, v: (v55.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v55.H256, v: (v55.HermesPollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v55.H256): AsyncIterable<[k: v55.H256, v: (v55.HermesPollInfo | undefined)][]>
}

export const minimumHermesVotingAmount =  {
    v47: new StorageType('HermesGovernancePlatform.MinimumHermesVotingAmount', 'Default', [], sts.bigint()) as MinimumHermesVotingAmountV47,
}

export interface MinimumHermesVotingAmountV47  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minimumHermesAmountForCreatingPoll =  {
    v47: new StorageType('HermesGovernancePlatform.MinimumHermesAmountForCreatingPoll', 'Default', [], sts.bigint()) as MinimumHermesAmountForCreatingPollV47,
}

export interface MinimumHermesAmountForCreatingPollV47  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
     */
    v47: new StorageType('HermesGovernancePlatform.AuthorityAccount', 'Default', [], v47.AccountId32) as AuthorityAccountV47,
}

/**
 *  Account which has permissions for changing Hermes minimum amount for voting and creating a poll
 */
export interface AuthorityAccountV47  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v47.AccountId32
    get(block: Block): Promise<(v47.AccountId32 | undefined)>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v55: new StorageType('HermesGovernancePlatform.PalletStorageVersion', 'Default', [], v55.Type_795) as PalletStorageVersionV55,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV55  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v55.Type_795
    get(block: Block): Promise<(v55.Type_795 | undefined)>
}
