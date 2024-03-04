import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const publicPropCount =  {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    v1: new StorageType('Democracy.PublicPropCount', 'Default', [], v1.PropIndex) as PublicPropCountV1,
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface PublicPropCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.PropIndex
    get(block: Block): Promise<(v1.PropIndex | undefined)>
}

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v1: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v1.PropIndex, v1.Hash, v1.AccountId]))) as PublicPropsV1,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v53: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v53.Bounded, v53.AccountId32]))) as PublicPropsV53,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.PropIndex, v1.Hash, v1.AccountId][]
    get(block: Block): Promise<([v1.PropIndex, v1.Hash, v1.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v53.Bounded, v53.AccountId32][]
    get(block: Block): Promise<([number, v53.Bounded, v53.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    v1: new StorageType('Democracy.DepositOf', 'Optional', [v1.PropIndex], sts.tuple(() => [sts.array(() => v1.AccountId), v1.BalanceOf])) as DepositOfV1,
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.PropIndex): Promise<([v1.AccountId[], v1.BalanceOf] | undefined)>
    getMany(block: Block, keys: v1.PropIndex[]): Promise<([v1.AccountId[], v1.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v1.PropIndex[]>
    getKeys(block: Block, key: v1.PropIndex): Promise<v1.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.PropIndex): AsyncIterable<v1.PropIndex[]>
    getPairs(block: Block): Promise<[k: v1.PropIndex, v: ([v1.AccountId[], v1.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v1.PropIndex): Promise<[k: v1.PropIndex, v: ([v1.AccountId[], v1.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.PropIndex, v: ([v1.AccountId[], v1.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.PropIndex): AsyncIterable<[k: v1.PropIndex, v: ([v1.AccountId[], v1.BalanceOf] | undefined)][]>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v1: new StorageType('Democracy.Preimages', 'Optional', [v1.Hash], v1.PreimageStatus) as PreimagesV1,
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v42: new StorageType('Democracy.Preimages', 'Optional', [v42.H256], v42.PreimageStatus) as PreimagesV42,
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.Hash): Promise<(v1.PreimageStatus | undefined)>
    getMany(block: Block, keys: v1.Hash[]): Promise<(v1.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v1.Hash[]>
    getKeys(block: Block, key: v1.Hash): Promise<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<v1.Hash[]>
    getPairs(block: Block): Promise<[k: v1.Hash, v: (v1.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v1.Hash): Promise<[k: v1.Hash, v: (v1.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Hash, v: (v1.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<[k: v1.Hash, v: (v1.PreimageStatus | undefined)][]>
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface PreimagesV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.H256): Promise<(v42.PreimageStatus | undefined)>
    getMany(block: Block, keys: v42.H256[]): Promise<(v42.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v42.H256[]>
    getKeys(block: Block, key: v42.H256): Promise<v42.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.H256): AsyncIterable<v42.H256[]>
    getPairs(block: Block): Promise<[k: v42.H256, v: (v42.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v42.H256): Promise<[k: v42.H256, v: (v42.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.H256, v: (v42.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.H256): AsyncIterable<[k: v42.H256, v: (v42.PreimageStatus | undefined)][]>
}

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    v1: new StorageType('Democracy.ReferendumCount', 'Default', [], v1.ReferendumIndex) as ReferendumCountV1,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ReferendumIndex
    get(block: Block): Promise<(v1.ReferendumIndex | undefined)>
}

export const lowestUnbaked =  {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    v1: new StorageType('Democracy.LowestUnbaked', 'Default', [], v1.ReferendumIndex) as LowestUnbakedV1,
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface LowestUnbakedV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ReferendumIndex
    get(block: Block): Promise<(v1.ReferendumIndex | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v1: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v1.ReferendumIndex], v1.ReferendumInfo) as ReferendumInfoOfV1,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v42: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v42.ReferendumInfo) as ReferendumInfoOfV42,
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v53: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v53.ReferendumInfo) as ReferendumInfoOfV53,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.ReferendumIndex): Promise<(v1.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v1.ReferendumIndex[]): Promise<(v1.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v1.ReferendumIndex[]>
    getKeys(block: Block, key: v1.ReferendumIndex): Promise<v1.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.ReferendumIndex): AsyncIterable<v1.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v1.ReferendumIndex, v: (v1.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v1.ReferendumIndex): Promise<[k: v1.ReferendumIndex, v: (v1.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.ReferendumIndex, v: (v1.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.ReferendumIndex): AsyncIterable<[k: v1.ReferendumIndex, v: (v1.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v42.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v42.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v42.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v42.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v42.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v42.ReferendumInfo | undefined)][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v53.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v53.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v53.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v53.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v53.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v53.ReferendumInfo | undefined)][]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v1: new StorageType('Democracy.VotingOf', 'Default', [v1.AccountId], v1.Voting) as VotingOfV1,
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v42: new StorageType('Democracy.VotingOf', 'Default', [v42.AccountId32], v42.Voting) as VotingOfV42,
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Voting
    get(block: Block, key: v1.AccountId): Promise<(v1.Voting | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.Voting | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.Voting | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.Voting | undefined)][]>
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Voting
    get(block: Block, key: v42.AccountId32): Promise<(v42.Voting | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.Voting | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.Voting | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.Voting | undefined)][]>
}

export const locks =  {
    /**
     *  Accounts for which there are locks in action which may be removed at some point in the
     *  future. The value is the block number at which the lock expires and may be removed.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v1: new StorageType('Democracy.Locks', 'Optional', [v1.AccountId], v1.BlockNumber) as LocksV1,
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface LocksV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.AccountId): Promise<(v1.BlockNumber | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.BlockNumber | undefined)][]>
}

export const lastTabledWasExternal =  {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    v1: new StorageType('Democracy.LastTabledWasExternal', 'Default', [], sts.boolean()) as LastTabledWasExternalV1,
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface LastTabledWasExternalV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const nextExternal =  {
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v1: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v1.Hash, v1.VoteThreshold])) as NextExternalV1,
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v53: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v53.Bounded, v53.VoteThreshold])) as NextExternalV53,
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v1.Hash, v1.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v53.Bounded, v53.VoteThreshold] | undefined)>
}

export const blacklist =  {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    v1: new StorageType('Democracy.Blacklist', 'Optional', [v1.Hash], sts.tuple(() => [v1.BlockNumber, sts.array(() => v1.AccountId)])) as BlacklistV1,
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface BlacklistV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.Hash): Promise<([v1.BlockNumber, v1.AccountId[]] | undefined)>
    getMany(block: Block, keys: v1.Hash[]): Promise<([v1.BlockNumber, v1.AccountId[]] | undefined)[]>
    getKeys(block: Block): Promise<v1.Hash[]>
    getKeys(block: Block, key: v1.Hash): Promise<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<v1.Hash[]>
    getPairs(block: Block): Promise<[k: v1.Hash, v: ([v1.BlockNumber, v1.AccountId[]] | undefined)][]>
    getPairs(block: Block, key: v1.Hash): Promise<[k: v1.Hash, v: ([v1.BlockNumber, v1.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Hash, v: ([v1.BlockNumber, v1.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<[k: v1.Hash, v: ([v1.BlockNumber, v1.AccountId[]] | undefined)][]>
}

export const cancellations =  {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    v1: new StorageType('Democracy.Cancellations', 'Default', [v1.Hash], sts.boolean()) as CancellationsV1,
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface CancellationsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v1.Hash): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v1.Hash[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v1.Hash[]>
    getKeys(block: Block, key: v1.Hash): Promise<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<v1.Hash[]>
    getPairs(block: Block): Promise<[k: v1.Hash, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v1.Hash): Promise<[k: v1.Hash, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Hash, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<[k: v1.Hash, v: (boolean | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v1: new StorageType('Democracy.StorageVersion', 'Optional', [], v1.Releases) as StorageVersionV1,
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v42: new StorageType('Democracy.StorageVersion', 'Optional', [], v42.Type_544) as StorageVersionV42,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.Type_544 | undefined)>
}
