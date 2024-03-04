import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v42 from '../v42'
import * as v69 from '../v69'

export const voting =  {
    /**
     *  A vote of a particular user for a particular poll
     */
    v33: new StorageType('CeresGovernancePlatform.Voting', 'Default', [sts.bytes(), v33.AccountIdOf], v33.VotingInfo) as VotingV33,
    /**
     *  A vote of a particular user for a particular poll
     */
    v69: new StorageType('CeresGovernancePlatform.Voting', 'Optional', [v69.H256, v69.AccountId32], v69.VotingInfo) as VotingV69,
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface VotingV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.VotingInfo
    get(block: Block, key1: Bytes, key2: v33.AccountIdOf): Promise<(v33.VotingInfo | undefined)>
    getMany(block: Block, keys: [Bytes, v33.AccountIdOf][]): Promise<(v33.VotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, v33.AccountIdOf][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, v33.AccountIdOf][]>
    getKeys(block: Block, key1: Bytes, key2: v33.AccountIdOf): Promise<[Bytes, v33.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, v33.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, v33.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: v33.AccountIdOf): AsyncIterable<[Bytes, v33.AccountIdOf][]>
    getPairs(block: Block): Promise<[k: [Bytes, v33.AccountIdOf], v: (v33.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, v33.AccountIdOf], v: (v33.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: Bytes, key2: v33.AccountIdOf): Promise<[k: [Bytes, v33.AccountIdOf], v: (v33.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, v33.AccountIdOf], v: (v33.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[k: [Bytes, v33.AccountIdOf], v: (v33.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes, key2: v33.AccountIdOf): AsyncIterable<[k: [Bytes, v33.AccountIdOf], v: (v33.VotingInfo | undefined)][]>
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface VotingV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v69.H256, key2: v69.AccountId32): Promise<(v69.VotingInfo | undefined)>
    getMany(block: Block, keys: [v69.H256, v69.AccountId32][]): Promise<(v69.VotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[v69.H256, v69.AccountId32][]>
    getKeys(block: Block, key1: v69.H256): Promise<[v69.H256, v69.AccountId32][]>
    getKeys(block: Block, key1: v69.H256, key2: v69.AccountId32): Promise<[v69.H256, v69.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v69.H256, v69.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.H256): AsyncIterable<[v69.H256, v69.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v69.H256, key2: v69.AccountId32): AsyncIterable<[v69.H256, v69.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v69.H256, v69.AccountId32], v: (v69.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: v69.H256): Promise<[k: [v69.H256, v69.AccountId32], v: (v69.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: v69.H256, key2: v69.AccountId32): Promise<[k: [v69.H256, v69.AccountId32], v: (v69.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v69.H256, v69.AccountId32], v: (v69.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.H256): AsyncIterable<[k: [v69.H256, v69.AccountId32], v: (v69.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v69.H256, key2: v69.AccountId32): AsyncIterable<[k: [v69.H256, v69.AccountId32], v: (v69.VotingInfo | undefined)][]>
}

export const pollData =  {
    v33: new StorageType('CeresGovernancePlatform.PollData', 'Default', [sts.bytes()], v33.PollInfo) as PollDataV33,
    v37: new StorageType('CeresGovernancePlatform.PollData', 'Default', [sts.bytes()], v37.PollInfo) as PollDataV37,
    v69: new StorageType('CeresGovernancePlatform.PollData', 'Optional', [v69.H256], v69.PollInfo) as PollDataV69,
}

export interface PollDataV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.PollInfo
    get(block: Block, key: Bytes): Promise<(v33.PollInfo | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v33.PollInfo | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v33.PollInfo | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v33.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v33.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v33.PollInfo | undefined)][]>
}

export interface PollDataV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.PollInfo
    get(block: Block, key: Bytes): Promise<(v37.PollInfo | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v37.PollInfo | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v37.PollInfo | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v37.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v37.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v37.PollInfo | undefined)][]>
}

export interface PollDataV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v69.H256): Promise<(v69.PollInfo | undefined)>
    getMany(block: Block, keys: v69.H256[]): Promise<(v69.PollInfo | undefined)[]>
    getKeys(block: Block): Promise<v69.H256[]>
    getKeys(block: Block, key: v69.H256): Promise<v69.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.H256): AsyncIterable<v69.H256[]>
    getPairs(block: Block): Promise<[k: v69.H256, v: (v69.PollInfo | undefined)][]>
    getPairs(block: Block, key: v69.H256): Promise<[k: v69.H256, v: (v69.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.H256, v: (v69.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.H256): AsyncIterable<[k: v69.H256, v: (v69.PollInfo | undefined)][]>
}

export const palletStorageVersion =  {
    /**
     *  Pallet storage version
     */
    v37: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v37.StorageVersion) as PalletStorageVersionV37,
    /**
     *  Pallet storage version
     */
    v42: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v42.Type_623) as PalletStorageVersionV42,
    /**
     *  Pallet storage version
     */
    v69: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v69.Type_738) as PalletStorageVersionV69,
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.StorageVersion
    get(block: Block): Promise<(v37.StorageVersion | undefined)>
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Type_623
    get(block: Block): Promise<(v42.Type_623 | undefined)>
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v69.Type_738
    get(block: Block): Promise<(v69.Type_738 | undefined)>
}

export const authorityAccount =  {
    /**
     *  Account which has permissions for creating a poll
     */
    v69: new StorageType('CeresGovernancePlatform.AuthorityAccount', 'Default', [], v69.AccountId32) as AuthorityAccountV69,
}

/**
 *  Account which has permissions for creating a poll
 */
export interface AuthorityAccountV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v69.AccountId32
    get(block: Block): Promise<(v69.AccountId32 | undefined)>
}
