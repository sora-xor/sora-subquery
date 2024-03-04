import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const publicPropCount =  {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    v33: new StorageType('Democracy.PublicPropCount', 'Default', [], v33.PropIndex) as PublicPropCountV33,
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface PublicPropCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.PropIndex
    get(block: Block): Promise<(v33.PropIndex | undefined)>
}

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    v33: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [v33.PropIndex, v33.Hash, v33.AccountId]))) as PublicPropsV33,
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    v52: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), v52.Bounded, v52.AccountId32]))) as PublicPropsV52,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface PublicPropsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.PropIndex, v33.Hash, v33.AccountId][]
    get(block: Block): Promise<([v33.PropIndex, v33.Hash, v33.AccountId][] | undefined)>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v52.Bounded, v52.AccountId32][]
    get(block: Block): Promise<([number, v52.Bounded, v52.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    v33: new StorageType('Democracy.DepositOf', 'Optional', [v33.PropIndex], sts.tuple(() => [sts.array(() => v33.AccountId), v33.BalanceOf])) as DepositOfV33,
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.PropIndex): Promise<([v33.AccountId[], v33.BalanceOf] | undefined)>
    getMany(block: Block, keys: v33.PropIndex[]): Promise<([v33.AccountId[], v33.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v33.PropIndex[]>
    getKeys(block: Block, key: v33.PropIndex): Promise<v33.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.PropIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.PropIndex): AsyncIterable<v33.PropIndex[]>
    getPairs(block: Block): Promise<[k: v33.PropIndex, v: ([v33.AccountId[], v33.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v33.PropIndex): Promise<[k: v33.PropIndex, v: ([v33.AccountId[], v33.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.PropIndex, v: ([v33.AccountId[], v33.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.PropIndex): AsyncIterable<[k: v33.PropIndex, v: ([v33.AccountId[], v33.BalanceOf] | undefined)][]>
}

export const preimages =  {
    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    v33: new StorageType('Democracy.Preimages', 'Optional', [v33.Hash], v33.PreimageStatus) as PreimagesV33,
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
export interface PreimagesV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.Hash): Promise<(v33.PreimageStatus | undefined)>
    getMany(block: Block, keys: v33.Hash[]): Promise<(v33.PreimageStatus | undefined)[]>
    getKeys(block: Block): Promise<v33.Hash[]>
    getKeys(block: Block, key: v33.Hash): Promise<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<v33.Hash[]>
    getPairs(block: Block): Promise<[k: v33.Hash, v: (v33.PreimageStatus | undefined)][]>
    getPairs(block: Block, key: v33.Hash): Promise<[k: v33.Hash, v: (v33.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.Hash, v: (v33.PreimageStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<[k: v33.Hash, v: (v33.PreimageStatus | undefined)][]>
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
    v33: new StorageType('Democracy.ReferendumCount', 'Default', [], v33.ReferendumIndex) as ReferendumCountV33,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ReferendumIndex
    get(block: Block): Promise<(v33.ReferendumIndex | undefined)>
}

export const lowestUnbaked =  {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    v33: new StorageType('Democracy.LowestUnbaked', 'Default', [], v33.ReferendumIndex) as LowestUnbakedV33,
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface LowestUnbakedV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ReferendumIndex
    get(block: Block): Promise<(v33.ReferendumIndex | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    v33: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [v33.ReferendumIndex], v33.ReferendumInfo) as ReferendumInfoOfV33,
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
    v52: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], v52.ReferendumInfo) as ReferendumInfoOfV52,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.ReferendumIndex): Promise<(v33.ReferendumInfo | undefined)>
    getMany(block: Block, keys: v33.ReferendumIndex[]): Promise<(v33.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.ReferendumIndex[]>
    getKeys(block: Block, key: v33.ReferendumIndex): Promise<v33.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.ReferendumIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.ReferendumIndex): AsyncIterable<v33.ReferendumIndex[]>
    getPairs(block: Block): Promise<[k: v33.ReferendumIndex, v: (v33.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: v33.ReferendumIndex): Promise<[k: v33.ReferendumIndex, v: (v33.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.ReferendumIndex, v: (v33.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.ReferendumIndex): AsyncIterable<[k: v33.ReferendumIndex, v: (v33.ReferendumInfo | undefined)][]>
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
export interface ReferendumInfoOfV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v52.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v52.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v52.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v52.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v52.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v52.ReferendumInfo | undefined)][]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    v33: new StorageType('Democracy.VotingOf', 'Default', [v33.AccountId], v33.Voting) as VotingOfV33,
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
export interface VotingOfV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Voting
    get(block: Block, key: v33.AccountId): Promise<(v33.Voting | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.Voting | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.Voting | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.Voting | undefined)][]>
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
    v33: new StorageType('Democracy.Locks', 'Optional', [v33.AccountId], v33.BlockNumber) as LocksV33,
}

/**
 *  Accounts for which there are locks in action which may be removed at some point in the
 *  future. The value is the block number at which the lock expires and may be removed.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface LocksV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.BlockNumber | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.BlockNumber | undefined)][]>
}

export const lastTabledWasExternal =  {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    v33: new StorageType('Democracy.LastTabledWasExternal', 'Default', [], sts.boolean()) as LastTabledWasExternalV33,
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface LastTabledWasExternalV33  {
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
    v33: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v33.Hash, v33.VoteThreshold])) as NextExternalV33,
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    v52: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [v52.Bounded, v52.VoteThreshold])) as NextExternalV52,
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v33.Hash, v33.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([v52.Bounded, v52.VoteThreshold] | undefined)>
}

export const blacklist =  {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    v33: new StorageType('Democracy.Blacklist', 'Optional', [v33.Hash], sts.tuple(() => [v33.BlockNumber, sts.array(() => v33.AccountId)])) as BlacklistV33,
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface BlacklistV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.Hash): Promise<([v33.BlockNumber, v33.AccountId[]] | undefined)>
    getMany(block: Block, keys: v33.Hash[]): Promise<([v33.BlockNumber, v33.AccountId[]] | undefined)[]>
    getKeys(block: Block): Promise<v33.Hash[]>
    getKeys(block: Block, key: v33.Hash): Promise<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<v33.Hash[]>
    getPairs(block: Block): Promise<[k: v33.Hash, v: ([v33.BlockNumber, v33.AccountId[]] | undefined)][]>
    getPairs(block: Block, key: v33.Hash): Promise<[k: v33.Hash, v: ([v33.BlockNumber, v33.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.Hash, v: ([v33.BlockNumber, v33.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<[k: v33.Hash, v: ([v33.BlockNumber, v33.AccountId[]] | undefined)][]>
}

export const cancellations =  {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    v33: new StorageType('Democracy.Cancellations', 'Default', [v33.Hash], sts.boolean()) as CancellationsV33,
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface CancellationsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v33.Hash): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v33.Hash[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v33.Hash[]>
    getKeys(block: Block, key: v33.Hash): Promise<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<v33.Hash[]>
    getPairs(block: Block): Promise<[k: v33.Hash, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v33.Hash): Promise<[k: v33.Hash, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.Hash, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<[k: v33.Hash, v: (boolean | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v33: new StorageType('Democracy.StorageVersion', 'Optional', [], v33.Releases) as StorageVersionV33,
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v42: new StorageType('Democracy.StorageVersion', 'Optional', [], v42.Type_549) as StorageVersionV42,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.Releases | undefined)>
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.Type_549 | undefined)>
}
