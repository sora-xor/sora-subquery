import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v37 from '../v37'
import * as v42 from '../v42'
import * as v70 from '../v70'

export const voting =  {
    /**
     *  A vote of a particular user for a particular poll
     */
    v26: new StorageType('CeresGovernancePlatform.Voting', 'Default', [sts.bytes(), v26.AccountIdOf], v26.VotingInfo) as VotingV26,
    /**
     *  A vote of a particular user for a particular poll
     */
    v70: new StorageType('CeresGovernancePlatform.Voting', 'Optional', [v70.H256, v70.AccountId32], v70.VotingInfo) as VotingV70,
}

/**
 *  A vote of a particular user for a particular poll
 */
export interface VotingV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.VotingInfo
    get(block: Block, key1: Bytes, key2: v26.AccountIdOf): Promise<(v26.VotingInfo | undefined)>
    getMany(block: Block, keys: [Bytes, v26.AccountIdOf][]): Promise<(v26.VotingInfo | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, v26.AccountIdOf][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, v26.AccountIdOf][]>
    getKeys(block: Block, key1: Bytes, key2: v26.AccountIdOf): Promise<[Bytes, v26.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, v26.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, v26.AccountIdOf][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: v26.AccountIdOf): AsyncIterable<[Bytes, v26.AccountIdOf][]>
    getPairs(block: Block): Promise<[k: [Bytes, v26.AccountIdOf], v: (v26.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, v26.AccountIdOf], v: (v26.VotingInfo | undefined)][]>
    getPairs(block: Block, key1: Bytes, key2: v26.AccountIdOf): Promise<[k: [Bytes, v26.AccountIdOf], v: (v26.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, v26.AccountIdOf], v: (v26.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[k: [Bytes, v26.AccountIdOf], v: (v26.VotingInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes, key2: v26.AccountIdOf): AsyncIterable<[k: [Bytes, v26.AccountIdOf], v: (v26.VotingInfo | undefined)][]>
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
    v26: new StorageType('CeresGovernancePlatform.PollData', 'Default', [sts.bytes()], v26.PollInfo) as PollDataV26,
    v37: new StorageType('CeresGovernancePlatform.PollData', 'Default', [sts.bytes()], v37.PollInfo) as PollDataV37,
    v70: new StorageType('CeresGovernancePlatform.PollData', 'Optional', [v70.H256], v70.PollInfo) as PollDataV70,
}

export interface PollDataV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.PollInfo
    get(block: Block, key: Bytes): Promise<(v26.PollInfo | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v26.PollInfo | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v26.PollInfo | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v26.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v26.PollInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v26.PollInfo | undefined)][]>
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
    v37: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v37.StorageVersion) as PalletStorageVersionV37,
    /**
     *  Pallet storage version
     */
    v42: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v42.Type_618) as PalletStorageVersionV42,
    /**
     *  Pallet storage version
     */
    v70: new StorageType('CeresGovernancePlatform.PalletStorageVersion', 'Default', [], v70.Type_719) as PalletStorageVersionV70,
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
    getDefault(block: Block): v42.Type_618
    get(block: Block): Promise<(v42.Type_618 | undefined)>
}

/**
 *  Pallet storage version
 */
export interface PalletStorageVersionV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.Type_719
    get(block: Block): Promise<(v70.Type_719 | undefined)>
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
