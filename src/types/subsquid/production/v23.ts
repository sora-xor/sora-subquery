import {sts, Result, Option, Bytes, BitSequence} from './support'

export type BlockNumber = number

export interface Scheduled {
    maybeId?: (Bytes | undefined)
    priority: SchedulePriority
    call: Type_54
    maybePeriodic?: (SchedulePeriod | undefined)
    origin: PalletsOrigin
}

export type PalletsOrigin = PalletsOrigin_Council | PalletsOrigin_System | PalletsOrigin_TechnicalCommittee

export interface PalletsOrigin_Council {
    __kind: 'Council'
    value: CollectiveOrigin
}

export interface PalletsOrigin_System {
    __kind: 'System'
    value: SystemOrigin
}

export interface PalletsOrigin_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: CollectiveOrigin
}

export type SystemOrigin = SystemOrigin_None | SystemOrigin_Root | SystemOrigin_Signed

export interface SystemOrigin_None {
    __kind: 'None'
}

export interface SystemOrigin_Root {
    __kind: 'Root'
}

export interface SystemOrigin_Signed {
    __kind: 'Signed'
    value: AccountId
}

export type AccountId = Bytes

export type CollectiveOrigin = CollectiveOrigin_Member | CollectiveOrigin_Members

export interface CollectiveOrigin_Member {
    __kind: 'Member'
    value: AccountId
}

export interface CollectiveOrigin_Members {
    __kind: 'Members'
    value: [MemberCount, MemberCount]
}

export type MemberCount = number

export type SchedulePeriod = [BlockNumber, number]

export type Type_54 = Type_54_Assets | Type_54_Authorship | Type_54_Babe | Type_54_Balances | Type_54_BridgeMultisig | Type_54_CeresLiquidityLocker | Type_54_CeresStaking | Type_54_Council | Type_54_Currencies | Type_54_DEXAPI | Type_54_Democracy | Type_54_ElectionsPhragmen | Type_54_EthBridge | Type_54_Farming | Type_54_Grandpa | Type_54_Identity | Type_54_ImOnline | Type_54_IrohaMigration | Type_54_LiquidityProxy | Type_54_MulticollateralBondingCurvePool | Type_54_Multisig | Type_54_Offences | Type_54_Permissions | Type_54_PoolXYK | Type_54_PswapDistribution | Type_54_RandomnessCollectiveFlip | Type_54_Referrals | Type_54_Rewards | Type_54_Scheduler | Type_54_Session | Type_54_Staking | Type_54_System | Type_54_Technical | Type_54_TechnicalCommittee | Type_54_TechnicalMembership | Type_54_Timestamp | Type_54_TradingPair | Type_54_Utility | Type_54_VestedRewards | Type_54_XSTPool | Type_54_XorFee

export interface Type_54_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Type_54_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Type_54_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Type_54_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Type_54_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigCall
}

export interface Type_54_CeresLiquidityLocker {
    __kind: 'CeresLiquidityLocker'
    value: CeresLiquidityLockerCall
}

export interface Type_54_CeresStaking {
    __kind: 'CeresStaking'
    value: CeresStakingCall
}

export interface Type_54_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Type_54_Currencies {
    __kind: 'Currencies'
    value: CurrenciesCall
}

export interface Type_54_DEXAPI {
    __kind: 'DEXAPI'
    value: DEXAPICall
}

export interface Type_54_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Type_54_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenCall
}

export interface Type_54_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeCall
}

export interface Type_54_Farming {
    __kind: 'Farming'
    value: FarmingCall
}

export interface Type_54_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Type_54_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Type_54_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Type_54_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationCall
}

export interface Type_54_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyCall
}

export interface Type_54_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolCall
}

export interface Type_54_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Type_54_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Type_54_Permissions {
    __kind: 'Permissions'
    value: PermissionsCall
}

export interface Type_54_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKCall
}

export interface Type_54_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionCall
}

export interface Type_54_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Type_54_Referrals {
    __kind: 'Referrals'
    value: ReferralsCall
}

export interface Type_54_Rewards {
    __kind: 'Rewards'
    value: RewardsCall
}

export interface Type_54_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Type_54_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Type_54_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Type_54_System {
    __kind: 'System'
    value: SystemCall
}

export interface Type_54_Technical {
    __kind: 'Technical'
    value: TechnicalCall
}

export interface Type_54_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Type_54_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Type_54_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Type_54_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairCall
}

export interface Type_54_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Type_54_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsCall
}

export interface Type_54_XSTPool {
    __kind: 'XSTPool'
    value: XSTPoolCall
}

export interface Type_54_XorFee {
    __kind: 'XorFee'
    value: XorFeeCall
}

export type XorFeeCall = never

export type XSTPoolCall = XSTPoolCall_enable_synthetic_asset | XSTPoolCall_initialize_pool | XSTPoolCall_set_reference_asset

export interface XSTPoolCall_enable_synthetic_asset {
    __kind: 'enable_synthetic_asset'
    syntheticAsset: AssetId
}

/**
 *  Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
 */
export interface XSTPoolCall_initialize_pool {
    __kind: 'initialize_pool'
    syntheticAssetId: AssetId
}

/**
 *  Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
 */
export interface XSTPoolCall_set_reference_asset {
    __kind: 'set_reference_asset'
    referenceAssetId: AssetId
}

export type AssetId = Bytes

export type VestedRewardsCall = VestedRewardsCall_claim_rewards | VestedRewardsCall_inject_market_makers | VestedRewardsCall_set_asset_pair

/**
 *  Claim all available PSWAP rewards by account signing this transaction.
 */
export interface VestedRewardsCall_claim_rewards {
    __kind: 'claim_rewards'
}

/**
 *  Inject market makers snapshot into storage.
 */
export interface VestedRewardsCall_inject_market_makers {
    __kind: 'inject_market_makers'
    snapshot: [AccountId, number, Balance][]
}

/**
 *  Allow/disallow a market making pair.
 */
export interface VestedRewardsCall_set_asset_pair {
    __kind: 'set_asset_pair'
    fromAssetId: AssetId
    toAssetId: AssetId
    marketMakingRewardsAllowed: boolean
}

export type Balance = bigint

export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Type_54
}

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Type_54[]
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Type_54[]
}

export type TradingPairCall = TradingPairCall_register

/**
 *  Register trading pair on the given DEX.
 *  Can be only called by the DEX owner.
 * 
 *  - `dex_id`: ID of the exchange.
 *  - `base_asset_id`: base asset ID.
 *  - `target_asset_id`: target asset ID.
 */
export interface TradingPairCall_register {
    __kind: 'register'
    dexId: DEXId
    baseAssetId: AssetId
    targetAssetId: AssetId
}

export type DEXId = number

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: AccountId
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId[]
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: AccountId
    add: AccountId
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Hash
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Hash
    index: number
    approve: boolean
}

export type TechnicalCall = never

export type SystemCall = SystemCall_fill_block | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_set_changes_trie_config | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: Perbill
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Key
    subkeys: number
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Key[]
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - Base Weight: 0.665 µs, independent of remark length.
 *  - No DB operations.
 *  # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
    __kind: 'set_changes_trie_config'
    changesTrieConfig?: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: KeyValue[]
}

export type KeyValue = [StorageKey, StorageData]

export type StorageData = Bytes

export type StorageKey = Bytes

export interface ChangesTrieConfiguration {
    digestInterval: number
    digestLevels: number
}

export type Key = Bytes

export type Perbill = number

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_kick | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_history_depth | StakingCall_set_invulnerables | StakingCall_set_payee | StakingCall_set_validator_count | StakingCall_submit_election_solution | StakingCall_submit_election_solution_unsigned | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
 *  ------------------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
 *  - Write: Bonded, Payee, [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: LookupSource
    value: bigint
    payee: RewardDestination
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
 *  that can be added.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
 *  it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  - One DB entry.
 *  ------------
 *  DB Weight:
 *  - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
 *  - Write: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 *  Cancel enactment of a deferred slash.
 * 
 *  Can be called by the `T::SlashCancelOrigin`.
 * 
 *  Parameters: era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  Complexity: O(U + S)
 *  with U unapplied slashes weighted with U=1000
 *  and S is the number of slash indices to be canceled.
 *  - Read: Unapplied Slashes
 *  - Write: Unapplied Slashes
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: EraIndex
    slashIndices: number[]
}

/**
 *  Declare no desire to either validate or nominate.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  --------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger
 *  - Write: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Weight: O(1)
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  O(S) where S is the number of slashing spans to be removed
 *  Reads: Bonded, Slashing Spans, Account, Locks
 *  Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
 *  Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId
    numSlashingSpans: number
}

/**
 *  Increments the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 *  Remove the given nominations from the calling validator.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
 *  account should represent a validator.
 * 
 *  - `who`: A list of nominator stash accounts who are nominating this validator which
 *    should no longer be nominating this validator.
 * 
 *  Note: Making this call only makes sense if you first set the validator preferences to
 *  block any further nominations.
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: LookupSource[]
}

/**
 *  Declare the desire to nominate `targets` for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era. This can only be called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `targets` (N)
 *  which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
 *  - Both the reads and writes follow a similar pattern.
 *  ---------
 *  Weight: O(N)
 *  where N is the number of targets
 *  DB Weight:
 *  - Reads: Era Election Status, Ledger, Current Era
 *  - Writes: Validators, Nominators
 *  # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: LookupSource[]
}

/**
 *  Pay out all the stakers behind a single validator for a single era.
 * 
 *  - `validator_stash` is the stash account of the validator. Their nominators, up to
 *    `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 *  - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 *  The origin of this call must be _Signed_. Any account can call this function, even if
 *  it is not one of the stakers.
 * 
 *  This can only be called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: at most O(MaxNominatorRewardedPerValidator).
 *  - Contains a limited number of reads and writes.
 *  -----------
 *  N is the Number of payouts for the validator (including the validator)
 *  Weight:
 *  - Reward Destination Staked: O(N)
 *  - Reward Destination Controller (Creating): O(N)
 *  DB Weight:
 *  - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
 *          ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
 *  - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
 *  - Write Each: System Account, Locks, Ledger (3 items)
 * 
 *    NOTE: weights are assuming that payouts are made to alive stash account (Staked).
 *    Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
 *  # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId
    era: EraIndex
}

/**
 *  Remove all data structure concerning a staker/stash once its balance is at the minimum.
 *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
 *  and the target `stash` must have no funds left beyond the ED.
 * 
 *  This can be called from any origin.
 * 
 *  - `stash`: The stash account to reap. Its balance must be zero.
 * 
 *  # <weight>
 *  Complexity: O(S) where S is the number of slashing spans on the account.
 *  DB Weight:
 *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
 *  - Writes Each: SpanSlash * S
 *  # </weight>
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId
    numSlashingSpans: number
}

/**
 *  Rebond a portion of the stash scheduled to be unlocked.
 * 
 *  The dispatch origin must be signed by the controller, and it can be only called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: O(L), where L is unlocking chunks
 *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
 *  - Storage changes: Can't increase storage, only decrease it.
 *  ---------------
 *  - DB Weight:
 *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
 *      - Writes: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 *  Scale up the ideal number of validators by a factor.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 *  (Re-)set the controller of a stash.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
 *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
 *  # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: LookupSource
}

/**
 *  Set `HistoryDepth` value. This function will delete any history information
 *  when `HistoryDepth` is reduced.
 * 
 *  Parameters:
 *  - `new_history_depth`: The new history depth you would like to set.
 *  - `era_items_deleted`: The number of items that will be deleted by this dispatch.
 *     This should report all the storage items that will be deleted by clearing old
 *     era history. Needed to report an accurate weight for the dispatch. Trusted by
 *     `Root` to report an accurate number.
 * 
 *  Origin must be root.
 * 
 *  # <weight>
 *  - E: Number of history depths removed, i.e. 10 -> 7 = 3
 *  - Weight: O(E)
 *  - DB Weight:
 *      - Reads: Current Era, History Depth
 *      - Writes: History Depth
 *      - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *      - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
 *  # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
}

/**
 *  Set the validators who cannot be slashed (if any).
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - O(V)
 *  - Write: Invulnerables
 *  # </weight>
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId[]
}

/**
 *  (Re-)set the payment target for a controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ---------
 *  - Weight: O(1)
 *  - DB Weight:
 *      - Read: Ledger
 *      - Write: Payee
 *  # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 *  Sets the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Weight: O(1)
 *  Write: Validator Count
 *  # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 *  Submit an election result to the chain. If the solution:
 * 
 *  1. is valid.
 *  2. has a better score than a potentially existing solution on chain.
 * 
 *  then, it will be _put_ on chain.
 * 
 *  A solution consists of two pieces of data:
 * 
 *  1. `winners`: a flat vector of all the winners of the round.
 *  2. `assignments`: the compact version of an assignment vector that encodes the edge
 *     weights.
 * 
 *  Both of which may be computed using _phragmen_, or any other algorithm.
 * 
 *  Additionally, the submitter must provide:
 * 
 *  - The `score` that they claim their solution has.
 * 
 *  Both validators and nominators will be represented by indices in the solution. The
 *  indices should respect the corresponding types ([`ValidatorIndex`] and
 *  [`NominatorIndex`]). Moreover, they should be valid when used to index into
 *  [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
 *  solution to be rejected. These two storage items are set during the election window and
 *  may be used to determine the indices.
 * 
 *  A solution is valid if:
 * 
 *  0. It is submitted when [`EraElectionStatus`] is `Open`.
 *  1. Its claimed score is equal to the score computed on-chain.
 *  2. Presents the correct number of winners.
 *  3. All indexes must be value according to the snapshot vectors. All edge values must
 *     also be correct and should not overflow the granularity of the ratio type (i.e. 256
 *     or billion).
 *  4. For each edge, all targets are actually nominated by the voter.
 *  5. Has correct self-votes.
 * 
 *  A solutions score is consisted of 3 parameters:
 * 
 *  1. `min { support.total }` for each support of a winner. This value should be maximized.
 *  2. `sum { support.total }` for each support of a winner. This value should be minimized.
 *  3. `sum { support.total^2 }` for each support of a winner. This value should be
 *     minimized (to ensure less variance)
 * 
 *  # <weight>
 *  The transaction is assumed to be the longest path, a better solution.
 *    - Initial solution is almost the same.
 *    - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
 *  # </weight>
 */
export interface StakingCall_submit_election_solution {
    __kind: 'submit_election_solution'
    winners: ValidatorIndex[]
    compact: CompactAssignments
    score: ElectionScore
    era: EraIndex
    size: ElectionSize
}

/**
 *  Unsigned version of `submit_election_solution`.
 * 
 *  Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
 *  from the local node to be included. In other words, only the block author can include a
 *  transaction in the block.
 * 
 *  # <weight>
 *  See [`submit_election_solution`].
 *  # </weight>
 */
export interface StakingCall_submit_election_solution_unsigned {
    __kind: 'submit_election_solution_unsigned'
    winners: ValidatorIndex[]
    compact: CompactAssignments
    score: ElectionScore
    era: EraIndex
    size: ElectionSize
}

/**
 *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *  period ends. If this leaves an amount actively bonded less than
 *  T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *  the funds out of management ready for transfer.
 * 
 *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 *  to be called first to remove some of the chunks (if possible).
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Unbonded`.
 * 
 *  See also [`Call::withdraw_unbonded`].
 * 
 *  # <weight>
 *  - Independent of the arguments. Limited but potentially exploitable complexity.
 *  - Contains a limited number of reads.
 *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
 *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
 *    The only way to clean the aforementioned storage item is also user-controlled via
 *    `withdraw_unbonded`.
 *  - One DB entry.
 *  ----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
 *  - Write: Locks, Ledger, BalanceOf Stash,
 *  </weight>
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 *  Declare the desire to validate for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  -----------
 *  Weight: O(1)
 *  DB Weight:
 *  - Read: Era Election Status, Ledger
 *  - Write: Nominators, Validators
 *  # </weight>
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Withdrawn`.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
 *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
 *   indirectly user-controlled. See [`unbond`] for more detail.
 *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
 *  - Writes are limited to the `origin` account key.
 *  ---------------
 *  Complexity O(S) where S is the number of slashing spans to remove
 *  Update:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
 *  - Writes: [Origin Account], Locks, Ledger
 *  Kill:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
 *    Account], Locks, BalanceOf stash
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
 *    [Origin Account], Locks, BalanceOf stash.
 *  - Writes Each: SpanSlash * S
 *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export interface ElectionSize {
    validators: number
    nominators: number
}

export type ElectionScore = bigint[]

export interface CompactAssignments {
    votes1: [NominatorIndexCompact, ValidatorIndexCompact][]
    votes2: [NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact][]
    votes3: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes4: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes5: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes6: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes7: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes8: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes9: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes10: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes11: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes12: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes13: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes14: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes15: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
    votes16: [NominatorIndexCompact, CompactScoreCompact[], ValidatorIndexCompact][]
}

export type CompactScoreCompact = [ValidatorIndexCompact, OffchainAccuracyCompact]

export type OffchainAccuracyCompact = number

export type ValidatorIndexCompact = number

export type NominatorIndexCompact = number

export type ValidatorIndex = number

export type Percent = number

export type EraIndex = number

export type RewardDestination = RewardDestination_Account | RewardDestination_Controller | RewardDestination_None | RewardDestination_Staked | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export type LookupSource = Bytes

export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwnder`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: Keys
    proof: Bytes
}

export type Keys = [Sr25519Public, Sr25519Public, Sr25519Public]

export type Sr25519Public = Bytes

export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 *  Cancel an anonymously scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.15 + 2.869 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: BlockNumber
    index: number
}

/**
 *  Cancel a named scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 24.91 + 2.907 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 *  Anonymously schedule a task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.29 + .126 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda
 *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_54
}

/**
 *  Anonymously schedule a task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_54
}

/**
 *  Schedule a named task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 29.6 + .159 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_54
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: BlockNumber
    maybePeriodic?: (Period | undefined)
    priority: Priority
    call: Type_54
}

export type Priority = number

export type Period = [BlockNumber, number]

export type RewardsCall = RewardsCall_claim | RewardsCall_finalize_storage_migration

export interface RewardsCall_claim {
    __kind: 'claim'
    signature: Bytes
}

/**
 *  Finalize the update of unclaimed VAL data in storage
 */
export interface RewardsCall_finalize_storage_migration {
    __kind: 'finalize_storage_migration'
    amounts: [EthereumAddress, Balance][]
}

export type EthereumAddress = Bytes

export type ReferralsCall = ReferralsCall_reserve | ReferralsCall_set_referrer | ReferralsCall_unreserve

/**
 *  Reserves the balance from the account for a special balance that can be used to pay referrals' fees
 */
export interface ReferralsCall_reserve {
    __kind: 'reserve'
    balance: Balance
}

/**
 *  Sets the referrer for the account
 */
export interface ReferralsCall_set_referrer {
    __kind: 'set_referrer'
    referrer: AccountId
}

/**
 *  Unreserves the balance and transfers it back to the account
 */
export interface ReferralsCall_unreserve {
    __kind: 'unreserve'
    balance: Balance
}

export type RandomnessCollectiveFlipCall = never

export type PswapDistributionCall = PswapDistributionCall_claim_incentive

export interface PswapDistributionCall_claim_incentive {
    __kind: 'claim_incentive'
}

export type PoolXYKCall = PoolXYKCall_deposit_liquidity | PoolXYKCall_initialize_pool | PoolXYKCall_withdraw_liquidity

export interface PoolXYKCall_deposit_liquidity {
    __kind: 'deposit_liquidity'
    dexId: DEXIdOf
    inputAssetA: AssetIdOf
    inputAssetB: AssetIdOf
    inputADesired: Balance
    inputBDesired: Balance
    inputAMin: Balance
    inputBMin: Balance
}

export interface PoolXYKCall_initialize_pool {
    __kind: 'initialize_pool'
    dexId: DEXIdOf
    assetA: AssetIdOf
    assetB: AssetIdOf
}

export interface PoolXYKCall_withdraw_liquidity {
    __kind: 'withdraw_liquidity'
    dexId: DEXIdOf
    outputAssetA: AssetIdOf
    outputAssetB: AssetIdOf
    markerAssetDesired: Balance
    outputAMin: Balance
    outputBMin: Balance
}

export type AssetIdOf = Bytes

export type DEXIdOf = number

export type PermissionsCall = never

export type OffencesCall = never

export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  -------------------------------
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId[]
    maybeTimepoint?: (Timepoint | undefined)
    call: OpaqueCall
    storeCall: boolean
    maxWeight: Weight
}

/**
 *  Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `other_signatories`: The accounts (other than the sender) who are part of the
 *  multi-signature, but do not participate in the approval process.
 *  - `call`: The call to be executed.
 * 
 *  Result is equivalent to the dispatched result.
 * 
 *  # <weight>
 *  O(Z + C) where Z is the length of the call and C its execution weight.
 *  -------------------------------
 *  - DB Weight: None
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId[]
    call: Type_54
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 *  # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId[]
    timepoint: Timepoint
    callHash: Bytes
}

export type OpaqueCall = Bytes

export type Weight = bigint

export interface Timepoint {
    height: BlockNumber
    index: number
}

export type MulticollateralBondingCurvePoolCall = MulticollateralBondingCurvePoolCall_initialize_pool | MulticollateralBondingCurvePoolCall_set_optional_reward_multiplier | MulticollateralBondingCurvePoolCall_set_price_bias | MulticollateralBondingCurvePoolCall_set_price_change_config | MulticollateralBondingCurvePoolCall_set_reference_asset

/**
 *  Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
 */
export interface MulticollateralBondingCurvePoolCall_initialize_pool {
    __kind: 'initialize_pool'
    collateralAssetId: AssetId
}

/**
 *  Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
 *  `None` value indicates reward without change, same as Some(1.0).
 */
export interface MulticollateralBondingCurvePoolCall_set_optional_reward_multiplier {
    __kind: 'set_optional_reward_multiplier'
    collateralAssetId: AssetId
    multiplier?: (Fixed | undefined)
}

/**
 *  Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
 */
export interface MulticollateralBondingCurvePoolCall_set_price_bias {
    __kind: 'set_price_bias'
    priceBias: Balance
}

/**
 *  Changes price change rate and step
 */
export interface MulticollateralBondingCurvePoolCall_set_price_change_config {
    __kind: 'set_price_change_config'
    priceChangeRate: Balance
    priceChangeStep: Balance
}

/**
 *  Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
 */
export interface MulticollateralBondingCurvePoolCall_set_reference_asset {
    __kind: 'set_reference_asset'
    referenceAssetId: AssetId
}

export type Fixed = bigint

export type LiquidityProxyCall = LiquidityProxyCall_swap

/**
 *  Perform swap of tokens (input/output defined via SwapAmount direction).
 * 
 *  - `origin`: the account on whose behalf the transaction is being executed,
 *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
 *  - `input_asset_id`: ID of the asset being sold,
 *  - `output_asset_id`: ID of the asset being bought,
 *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
 *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
 *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
 */
export interface LiquidityProxyCall_swap {
    __kind: 'swap'
    dexId: DEXId
    inputAssetId: AssetId
    outputAssetId: AssetId
    swapAmount: SwapAmount
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
}

export type FilterMode = FilterMode_AllowSelected | FilterMode_Disabled | FilterMode_ForbidSelected

export interface FilterMode_AllowSelected {
    __kind: 'AllowSelected'
}

export interface FilterMode_Disabled {
    __kind: 'Disabled'
}

export interface FilterMode_ForbidSelected {
    __kind: 'ForbidSelected'
}

export type LiquiditySourceType = LiquiditySourceType_BondingCurvePool | LiquiditySourceType_MockPool | LiquiditySourceType_MockPool2 | LiquiditySourceType_MockPool3 | LiquiditySourceType_MockPool4 | LiquiditySourceType_MulticollateralBondingCurvePool | LiquiditySourceType_XSTPool | LiquiditySourceType_XYKPool

export interface LiquiditySourceType_BondingCurvePool {
    __kind: 'BondingCurvePool'
}

export interface LiquiditySourceType_MockPool {
    __kind: 'MockPool'
}

export interface LiquiditySourceType_MockPool2 {
    __kind: 'MockPool2'
}

export interface LiquiditySourceType_MockPool3 {
    __kind: 'MockPool3'
}

export interface LiquiditySourceType_MockPool4 {
    __kind: 'MockPool4'
}

export interface LiquiditySourceType_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
}

export interface LiquiditySourceType_XSTPool {
    __kind: 'XSTPool'
}

export interface LiquiditySourceType_XYKPool {
    __kind: 'XYKPool'
}

export type SwapAmount = SwapAmount_WithDesiredInput | SwapAmount_WithDesiredOutput

export interface SwapAmount_WithDesiredInput {
    __kind: 'WithDesiredInput'
    value: SwapWithDesiredInput
}

export interface SwapAmount_WithDesiredOutput {
    __kind: 'WithDesiredOutput'
    value: SwapWithDesiredOutput
}

export interface SwapWithDesiredOutput {
    desiredAmountOut: Balance
    maxAmountIn: Balance
}

export interface SwapWithDesiredInput {
    desiredAmountIn: Balance
    minAmountOut: Balance
}

export type IrohaMigrationCall = IrohaMigrationCall_migrate

export interface IrohaMigrationCall_migrate {
    __kind: 'migrate'
    irohaAddress: String
    irohaPublicKey: String
    irohaSignature: String
}

export type String = Bytes

export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 *  # <weight>
 *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
 *    and E is length of `heartbeat.network_state.external_address`
 *    - `O(K)`: decoding of length `K`
 *    - `O(E)`: decoding/encoding of length `E`
 *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *    `ReceivedHeartbeats`
 *  - DbWrites: `ReceivedHeartbeats`
 *  # </weight>
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Signature
}

export type Signature = Bytes

export interface Heartbeat {
    blockNumber: BlockNumber
    networkState: OpaqueNetworkState
    sessionIndex: SessionIndex
    authorityIndex: AuthIndex
    validatorsLen: number
}

export type AuthIndex = number

export type SessionIndex = number

export interface OpaqueNetworkState {
    peerId: OpaquePeerId
    externalAddresses: OpaqueMultiaddr[]
}

export type OpaqueMultiaddr = Bytes

export type OpaquePeerId = Bytes

export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 *  Add a registrar to the system.
 * 
 *  The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 *  - `account`: the account of the registrar.
 * 
 *  Emits `RegistrarAdded` if successful.
 * 
 *  # <weight>
 *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 *  - One storage mutation (codec `O(R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: AccountId
}

/**
 *  Add the given account to the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Cancel a previous request.
 * 
 *  Payment: A previously reserved deposit is returned on success.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 *  Emits `JudgementUnrequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - One storage mutation `O(R + X)`.
 *  - One event
 *  # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: RegistrarIndex
}

/**
 *  Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 *  Payment: All reserved balances on the account are returned.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  Emits `IdentityCleared` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`
 *    - where `R` registrar-count (governance-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *    - where `X` additional-field-count (deposit-bounded and code-bounded).
 *  - One balance-unreserve operation.
 *  - `2` storage reads and `S + 2` storage deletions.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 *  Remove an account's identity and sub-account information and slash the deposits.
 * 
 *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 *  `Slash`. Verification request deposits are not returned; they should be cancelled
 *  manually using `cancel_request`.
 * 
 *  The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 * 
 *  Emits `IdentityKilled` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`.
 *  - One balance-reserve operation.
 *  - `S + 2` storage mutations.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: LookupSource
}

/**
 *  Provide a judgement for an account's identity.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `reg_index`.
 * 
 *  - `reg_index`: the index of the registrar whose judgement is being made.
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 *  Emits `JudgementGiven` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-transfer operation.
 *  - Up to one account-lookup operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: LookupSource
    judgement: IdentityJudgement
}

/**
 *  Remove the sender as a sub-account.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender (*not* the original depositor).
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  super-identity.
 * 
 *  NOTE: This should not normally be used, but is provided in the case that the non-
 *  controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 *  Remove the given account from the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: LookupSource
}

/**
 *  Alter the associated name of the given sub-account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: LookupSource
    data: Data
}

/**
 *  Request a judgement from a registrar.
 * 
 *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 *  given.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is requested.
 *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 *  ```nocompile
 *  Self::registrars().get(reg_index).unwrap().fee
 *  ```
 * 
 *  Emits `JudgementRequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 *  Change the account associated with a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `new`: the new account ID.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: AccountId
}

/**
 *  Set the fee required for a judgement to be requested from a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fee`: the new fee.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 *  Set the field information for a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fields`: the fields that the registrar concerns themselves with.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 *  Set an account's identity information and reserve the appropriate deposit.
 * 
 *  If the account already has identity information, the deposit is taken as part payment
 *  for the new deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `info`: The identity information.
 * 
 *  Emits `IdentitySet` if successful.
 * 
 *  # <weight>
 *  - `O(X + X' + R)`
 *    - where `X` additional-field-count (deposit-bounded and code-bounded)
 *    - where `R` judgements-count (registrar-count-bounded)
 *  - One balance reserve operation.
 *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 *  Set the sub-accounts of the sender.
 * 
 *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  - `subs`: The identity's (new) sub-accounts.
 * 
 *  # <weight>
 *  - `O(P + S)`
 *    - where `P` old-subs-count (hard- and deposit-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *  - At most one balance operations.
 *  - DB:
 *    - `P + S` storage mutations (codec complexity `O(1)`)
 *    - One storage read (codec complexity `O(P)`).
 *    - One storage write (codec complexity `O(S)`).
 *    - One storage-exists (`IdentityOf::contains_key`).
 *  # </weight>
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId, Data][]
}

export interface IdentityInfo {
    additional: IdentityInfoAdditional[]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (H160 | undefined)
    image: Data
    twitter: Data
}

export type H160 = Bytes

export type IdentityInfoAdditional = [Data, Data]

export type IdentityJudgement = IdentityJudgement_Erroneous | IdentityJudgement_FeePaid | IdentityJudgement_KnownGood | IdentityJudgement_LowQuality | IdentityJudgement_OutOfDate | IdentityJudgement_Reasonable | IdentityJudgement_Unknown

export interface IdentityJudgement_Erroneous {
    __kind: 'Erroneous'
}

export interface IdentityJudgement_FeePaid {
    __kind: 'FeePaid'
    value: Balance
}

export interface IdentityJudgement_KnownGood {
    __kind: 'KnownGood'
}

export interface IdentityJudgement_LowQuality {
    __kind: 'LowQuality'
}

export interface IdentityJudgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface IdentityJudgement_Reasonable {
    __kind: 'Reasonable'
}

export interface IdentityJudgement_Unknown {
    __kind: 'Unknown'
}

export type RegistrarIndex = number

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: H256
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: H256
}

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Bytes
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Bytes
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Bytes
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Bytes
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Bytes
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Bytes
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Bytes
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Bytes
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Bytes
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Bytes
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Bytes
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Bytes
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Bytes
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Bytes
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Bytes
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Bytes
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Bytes
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Bytes
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Bytes
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Bytes
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Bytes
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Bytes
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Bytes
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Bytes
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Bytes
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Bytes
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Bytes
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Bytes
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Bytes
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Bytes
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Bytes
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Bytes
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Bytes
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: H256
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: H256
}

export type H256 = Bytes

export type GrandpaCall = GrandpaCall_note_stalled | GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned

/**
 *  Note that the current authority set of the GRANDPA finality gadget has
 *  stalled. This will trigger a forced authority set change at the beginning
 *  of the next session, to be enacted `delay` blocks after that. The delay
 *  should be high enough to safely assume that the block signalling the
 *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 *  will start the new authority set using the given finalized block as base.
 *  Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: BlockNumber
    bestFinalizedBlockNumber: BlockNumber
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: GrandpaEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

export interface KeyOwnerProof {
    session: SessionIndex
    trieNodes: Bytes[]
    validatorCount: ValidatorCount
}

export type ValidatorCount = number

export interface GrandpaEquivocationProof {
    setId: SetId
    equivocation: GrandpaEquivocation
}

export type GrandpaEquivocation = GrandpaEquivocation_Precommit | GrandpaEquivocation_Prevote

export interface GrandpaEquivocation_Precommit {
    __kind: 'Precommit'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Prevote {
    __kind: 'Prevote'
    value: GrandpaEquivocationValue
}

export interface GrandpaEquivocationValue {
    roundNumber: bigint
    identity: AuthorityId
    first: [GrandpaPrevote, AuthoritySignature]
    second: [GrandpaPrevote, AuthoritySignature]
}

export type AuthoritySignature = Bytes

export interface GrandpaPrevote {
    targetHash: Hash
    targetNumber: BlockNumber
}

export type AuthorityId = Bytes

export type SetId = bigint

export type FarmingCall = FarmingCall_migrate_to_1_1

export interface FarmingCall_migrate_to_1_1 {
    __kind: 'migrate_to_1_1'
}

export type EthBridgeCall = EthBridgeCall_abort_request | EthBridgeCall_add_asset | EthBridgeCall_add_peer | EthBridgeCall_add_sidechain_token | EthBridgeCall_approve_request | EthBridgeCall_finalize_incoming_request | EthBridgeCall_force_add_peer | EthBridgeCall_import_incoming_request | EthBridgeCall_migrate | EthBridgeCall_migrate_to_0_2_0 | EthBridgeCall_prepare_for_migration | EthBridgeCall_register_bridge | EthBridgeCall_register_incoming_request | EthBridgeCall_remove_peer | EthBridgeCall_request_from_sidechain | EthBridgeCall_transfer_to_sidechain

/**
 *  Cancels a registered request.
 * 
 *  Loads request by the given `hash`, cancels it, changes its status to `Failed` and
 *  removes it from the request queues.
 * 
 *  Can only be called from a bridge account.
 */
export interface EthBridgeCall_abort_request {
    __kind: 'abort_request'
    hash: H256
    error: DispatchError
    networkId: BridgeNetworkId
}

/**
 *  Add a Thischain asset to the bridge whitelist.
 * 
 *  Can only be called by root.
 * 
 *  Parameters:
 *  - `asset_id` - Thischain asset identifier.
 *  - `network_id` - network identifier to which the asset should be added.
 */
export interface EthBridgeCall_add_asset {
    __kind: 'add_asset'
    assetId: AssetIdOf
    networkId: BridgeNetworkId
}

/**
 *  Add a new peer to the bridge peers set.
 * 
 *  Parameters:
 *  - `account_id` - account id on thischain.
 *  - `address` - account id on sidechain.
 *  - `network_id` - network identifier.
 */
export interface EthBridgeCall_add_peer {
    __kind: 'add_peer'
    accountId: AccountId
    address: EthereumAddress
    networkId: BridgeNetworkId
}

/**
 *  Add a Sidechain token to the bridge whitelist.
 * 
 *  Parameters:
 *  - `token_address` - token contract address.
 *  - `symbol` - token symbol (ticker).
 *  - `name` - token name.
 *  - `decimals` -  token precision.
 *  - `network_id` - network identifier.
 */
export interface EthBridgeCall_add_sidechain_token {
    __kind: 'add_sidechain_token'
    tokenAddress: EthereumAddress
    symbol: String
    name: String
    decimals: number
    networkId: BridgeNetworkId
}

/**
 *  Approve the given outgoing request. The function is used by bridge peers.
 * 
 *  Verifies the peer signature of the given request and adds it to `RequestApprovals`.
 *  Once quorum is collected, the request gets finalized and removed from request queue.
 */
export interface EthBridgeCall_approve_request {
    __kind: 'approve_request'
    ocwPublic: Public
    hash: H256
    signatureParams: SignatureParams
    networkId: BridgeNetworkId
}

/**
 *  Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
 * 
 *  Can be only called from a bridge account.
 * 
 *  Parameters:
 *  - `request` - an incoming request.
 *  - `network_id` - network identifier.
 */
export interface EthBridgeCall_finalize_incoming_request {
    __kind: 'finalize_incoming_request'
    hash: H256
    networkId: BridgeNetworkId
}

/**
 *  Add the given peer to the peers set without additional checks.
 * 
 *  Can only be called by a root account.
 */
export interface EthBridgeCall_force_add_peer {
    __kind: 'force_add_peer'
    who: AccountId
    address: EthereumAddress
    networkId: BridgeNetworkId
}

/**
 *  Import the given incoming request.
 * 
 *  Register's the load request, then registers and finalizes the incoming request if it
 *  succeeded, otherwise aborts the load request.
 * 
 *  Can only be called by a bridge account.
 */
export interface EthBridgeCall_import_incoming_request {
    __kind: 'import_incoming_request'
    loadIncomingRequest: LoadIncomingRequest
    incomingRequestResult: Result<IncomingRequest, DispatchError>
}

/**
 *  Migrate the given bridge to a new smart-contract.
 * 
 *  Can only be called by an authority.
 * 
 *  Parameters:
 *  - `new_contract_address` - new sidechain ocntract address.
 *  - `erc20_native_tokens` - migrated assets ids.
 *  - `network_id` - bridge network identifier.
 */
export interface EthBridgeCall_migrate {
    __kind: 'migrate'
    newContractAddress: EthereumAddress
    erc20NativeTokens: EthereumAddress[]
    networkId: BridgeNetworkId
}

export interface EthBridgeCall_migrate_to_0_2_0 {
    __kind: 'migrate_to_0_2_0'
}

/**
 *  Prepare the given bridge for migration.
 * 
 *  Can only be called by an authority.
 * 
 *  Parameters:
 *  - `network_id` - bridge network identifier.
 */
export interface EthBridgeCall_prepare_for_migration {
    __kind: 'prepare_for_migration'
    networkId: BridgeNetworkId
}

/**
 *  Register a new bridge.
 * 
 *  Parameters:
 *  - `bridge_contract_address` - address of smart-contract deployed on a corresponding
 *  network.
 *  - `initial_peers` - a set of initial network peers.
 */
export interface EthBridgeCall_register_bridge {
    __kind: 'register_bridge'
    bridgeContractAddress: EthereumAddress
    initialPeers: AccountId[]
}

/**
 *  Register the given incoming request and add it to the queue.
 * 
 *  Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
 *  corresponding load-incoming-request and removes the load-request from the queue.
 * 
 *  Can only be called by a bridge account.
 */
export interface EthBridgeCall_register_incoming_request {
    __kind: 'register_incoming_request'
    incomingRequest: IncomingRequest
}

/**
 *  Remove peer from the the bridge peers set.
 * 
 *  Parameters:
 *  - `account_id` - account id on thischain.
 *  - `network_id` - network identifier.
 */
export interface EthBridgeCall_remove_peer {
    __kind: 'remove_peer'
    accountId: AccountId
    networkId: BridgeNetworkId
}

/**
 *  Load incoming request from Sidechain by the given transaction hash.
 * 
 *  Parameters:
 *  - `eth_tx_hash` - transaction hash on Sidechain.
 *  - `kind` - incoming request type.
 *  - `network_id` - network identifier.
 */
export interface EthBridgeCall_request_from_sidechain {
    __kind: 'request_from_sidechain'
    ethTxHash: H256
    kind: IncomingRequestKind
    networkId: BridgeNetworkId
}

/**
 *  Transfer some amount of the given asset to Sidechain address.
 * 
 *  Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
 *  on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
 *  some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
 *  `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
 *  the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
 *  correct amount would be `0.100000` (only 6 digits after the decimal point).
 * 
 *  Parameters:
 *  - `asset_id` - thischain asset id.
 *  - `to` - sidechain account id.
 *  - `amount` - amount of the asset.
 *  - `network_id` - network identifier.
 */
export interface EthBridgeCall_transfer_to_sidechain {
    __kind: 'transfer_to_sidechain'
    assetId: AssetIdOf
    to: EthereumAddress
    amount: Balance
    networkId: BridgeNetworkId
}

export type IncomingRequestKind = IncomingRequestKind_Meta | IncomingRequestKind_Transaction

export interface IncomingRequestKind_Meta {
    __kind: 'Meta'
    value: IncomingMetaRequestKind
}

export interface IncomingRequestKind_Transaction {
    __kind: 'Transaction'
    value: IncomingTransactionRequestKind
}

export type IncomingTransactionRequestKind = IncomingTransactionRequestKind_AddAsset | IncomingTransactionRequestKind_AddPeer | IncomingTransactionRequestKind_AddPeerCompat | IncomingTransactionRequestKind_Migrate | IncomingTransactionRequestKind_PrepareForMigration | IncomingTransactionRequestKind_RemovePeer | IncomingTransactionRequestKind_RemovePeerCompat | IncomingTransactionRequestKind_Transfer | IncomingTransactionRequestKind_TransferXOR

export interface IncomingTransactionRequestKind_AddAsset {
    __kind: 'AddAsset'
}

export interface IncomingTransactionRequestKind_AddPeer {
    __kind: 'AddPeer'
}

export interface IncomingTransactionRequestKind_AddPeerCompat {
    __kind: 'AddPeerCompat'
}

export interface IncomingTransactionRequestKind_Migrate {
    __kind: 'Migrate'
}

export interface IncomingTransactionRequestKind_PrepareForMigration {
    __kind: 'PrepareForMigration'
}

export interface IncomingTransactionRequestKind_RemovePeer {
    __kind: 'RemovePeer'
}

export interface IncomingTransactionRequestKind_RemovePeerCompat {
    __kind: 'RemovePeerCompat'
}

export interface IncomingTransactionRequestKind_Transfer {
    __kind: 'Transfer'
}

export interface IncomingTransactionRequestKind_TransferXOR {
    __kind: 'TransferXOR'
}

export type IncomingMetaRequestKind = IncomingMetaRequestKind_CancelOutgoingRequest | IncomingMetaRequestKind_MarkAsDone

export interface IncomingMetaRequestKind_CancelOutgoingRequest {
    __kind: 'CancelOutgoingRequest'
}

export interface IncomingMetaRequestKind_MarkAsDone {
    __kind: 'MarkAsDone'
}

export type IncomingRequest = IncomingRequest_AddToken | IncomingRequest_CancelOutgoingRequest | IncomingRequest_ChangePeers | IncomingRequest_MarkAsDone | IncomingRequest_Migrate | IncomingRequest_PrepareForMigration | IncomingRequest_Transfer

export interface IncomingRequest_AddToken {
    __kind: 'AddToken'
    value: IncomingAddToken
}

export interface IncomingRequest_CancelOutgoingRequest {
    __kind: 'CancelOutgoingRequest'
    value: IncomingCancelOutgoingRequest
}

export interface IncomingRequest_ChangePeers {
    __kind: 'ChangePeers'
    value: IncomingChangePeers
}

export interface IncomingRequest_MarkAsDone {
    __kind: 'MarkAsDone'
    value: IncomingMarkAsDoneRequest
}

export interface IncomingRequest_Migrate {
    __kind: 'Migrate'
    value: IncomingMigrate
}

export interface IncomingRequest_PrepareForMigration {
    __kind: 'PrepareForMigration'
    value: IncomingPrepareForMigration
}

export interface IncomingRequest_Transfer {
    __kind: 'Transfer'
    value: IncomingTransfer
}

export interface IncomingTransfer {
    from: EthereumAddress
    to: AccountId
    assetId: AssetId
    assetKind: AssetKind
    amount: Balance
    author: AccountId
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: BridgeNetworkId
}

export interface BridgeTimepoint {
    height: MultiChainHeight
    index: number
}

export type MultiChainHeight = MultiChainHeight_Sidechain | MultiChainHeight_Thischain

export interface MultiChainHeight_Sidechain {
    __kind: 'Sidechain'
    value: bigint
}

export interface MultiChainHeight_Thischain {
    __kind: 'Thischain'
    value: BlockNumber
}

export type AssetKind = AssetKind_Sidechain | AssetKind_SidechainOwned | AssetKind_Thischain

export interface AssetKind_Sidechain {
    __kind: 'Sidechain'
}

export interface AssetKind_SidechainOwned {
    __kind: 'SidechainOwned'
}

export interface AssetKind_Thischain {
    __kind: 'Thischain'
}

export interface IncomingPrepareForMigration {
    author: AccountId
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: BridgeNetworkId
}

export interface IncomingMigrate {
    newContractAddress: EthereumAddress
    author: AccountId
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: BridgeNetworkId
}

export interface IncomingMarkAsDoneRequest {
    outgoingRequestHash: H256
    initialRequestHash: H256
    author: AccountId
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: BridgeNetworkId
}

export interface IncomingChangePeers {
    peerAccountId: AccountId
    peerAddress: EthereumAddress
    added: boolean
    author: AccountId
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: BridgeNetworkId
}

export interface IncomingCancelOutgoingRequest {
    outgoingRequest: OutgoingRequest
    outgoingRequestHash: H256
    initialRequestHash: H256
    txInput: Bytes
    author: AccountId
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: BridgeNetworkId
}

export type OutgoingRequest = OutgoingRequest_AddAsset | OutgoingRequest_AddPeer | OutgoingRequest_AddToken | OutgoingRequest_Migrate | OutgoingRequest_PrepareForMigration | OutgoingRequest_RemovePeer | OutgoingRequest_Transfer

export interface OutgoingRequest_AddAsset {
    __kind: 'AddAsset'
    value: OutgoingAddAsset
}

export interface OutgoingRequest_AddPeer {
    __kind: 'AddPeer'
    value: OutgoingAddPeer
}

export interface OutgoingRequest_AddToken {
    __kind: 'AddToken'
    value: OutgoingAddToken
}

export interface OutgoingRequest_Migrate {
    __kind: 'Migrate'
    value: OutgoingMigrate
}

export interface OutgoingRequest_PrepareForMigration {
    __kind: 'PrepareForMigration'
    value: OutgoingPrepareForMigration
}

export interface OutgoingRequest_RemovePeer {
    __kind: 'RemovePeer'
    value: OutgoingRemovePeer
}

export interface OutgoingRequest_Transfer {
    __kind: 'Transfer'
    value: OutgoingTransfer
}

export interface OutgoingTransfer {
    from: AccountId
    to: EthereumAddress
    assetId: AssetId
    amount: Balance
    nonce: Index
    networkId: BridgeNetworkId
    timepoint: BridgeTimepoint
}

export type Index = number

export interface OutgoingRemovePeer {
    author: AccountId
    peerAccountId: AccountId
    peerAddress: EthereumAddress
    nonce: Index
    networkId: BridgeNetworkId
    timepoint: BridgeTimepoint
}

export interface OutgoingPrepareForMigration {
    author: AccountId
    nonce: Index
    networkId: BridgeNetworkId
    timepoint: BridgeTimepoint
}

export interface OutgoingMigrate {
    author: AccountId
    newContractAddress: EthereumAddress
    erc20NativeTokens: EthereumAddress[]
    nonce: Index
    networkId: BridgeNetworkId
    timepoint: BridgeTimepoint
}

export interface OutgoingAddToken {
    author: AccountId
    tokenAddress: EthereumAddress
    ticker: String
    name: String
    decimals: number
    nonce: Index
    networkId: BridgeNetworkId
    timepoint: BridgeTimepoint
}

export interface OutgoingAddPeer {
    author: AccountId
    peerAddress: EthereumAddress
    peerAccountId: AccountId
    nonce: Index
    networkId: BridgeNetworkId
    timepoint: BridgeTimepoint
}

export interface OutgoingAddAsset {
    author: AccountId
    assetId: AssetId
    supply: Balance
    nonce: Index
    networkId: BridgeNetworkId
    timepoint: BridgeTimepoint
}

export interface IncomingAddToken {
    tokenAddress: EthereumAddress
    assetId: AssetId
    precision: BalancePrecision
    symbol: AssetSymbol
    name: AssetName
    author: AccountId
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: BridgeNetworkId
}

export type AssetName = Bytes

export type AssetSymbol = Bytes

export type BalancePrecision = number

export type LoadIncomingRequest = LoadIncomingRequest_Meta | LoadIncomingRequest_Transaction

export interface LoadIncomingRequest_Meta {
    __kind: 'Meta'
    value: [LoadIncomingMetaRequest, H256]
}

export interface LoadIncomingRequest_Transaction {
    __kind: 'Transaction'
    value: LoadIncomingTransactionRequest
}

export interface LoadIncomingTransactionRequest {
    author: AccountId
    hash: H256
    timepoint: BridgeTimepoint
    kind: IncomingTransactionRequestKind
    networkId: BridgeNetworkId
}

export interface LoadIncomingMetaRequest {
    author: AccountId
    hash: H256
    timepoint: BridgeTimepoint
    kind: IncomingMetaRequestKind
    networkId: BridgeNetworkId
}

export interface SignatureParams {
    r: Bytes
    s: Bytes
    v: number
}

export type Public = Bytes

export type BridgeNetworkId = number

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: DispatchErrorModule
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_Overflow | TokenError_Underflow | TokenError_UnknownAsset | TokenError_WouldDie

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface DispatchErrorModule {
    index: number
    error: number
}

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export type ElectionsPhragmenCall = ElectionsPhragmenCall_clean_defunct_voters | ElectionsPhragmenCall_remove_member | ElectionsPhragmenCall_remove_voter | ElectionsPhragmenCall_renounce_candidacy | ElectionsPhragmenCall_submit_candidacy | ElectionsPhragmenCall_vote

/**
 *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 *  deposit of the removed voters are returned.
 * 
 *  This is an root function to be used only for cleaning the state.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  # <weight>
 *  The total number of voters and those that are defunct must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsPhragmenCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen election is started.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  If we have a replacement, we use a small weight. Else, since this is a root call and
 *  will go into phragmen, we assume full block for now.
 *  # </weight>
 */
export interface ElectionsPhragmenCall_remove_member {
    __kind: 'remove_member'
    who: LookupSource
    hasReplacement: boolean
}

/**
 *  Remove `origin` as a voter.
 * 
 *  This removes the lock and returns the deposit.
 * 
 *  The dispatch origin of this call must be signed and be a voter.
 */
export interface ElectionsPhragmenCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 * 
 *  - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *    origin is removed as a runner-up.
 *  - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_members`], if replacement runners exists, they are immediately used.
 *    If the prime is renouncing, then no prime will exist until the next round.
 * 
 *  The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 *  # <weight>
 *  The type of renouncing must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsPhragmenCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 *  Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 *  All candidates are wiped at the end of the term. They either become a member/runner-up,
 *  or leave the system while their deposit is slashed.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 *  to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 *  # <weight>
 *  The number of current candidates must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsPhragmenCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 *  Vote for a set of candidates for the upcoming round of election. This can be called to
 *  set the initial votes, or update already existing votes.
 * 
 *  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 *  reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of possible candidates. Note that all current members and
 *      runners-up are also automatically candidates for the next round.
 * 
 *  If `value` is more than `who`'s total balance, then the maximum of the two is used.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  It is the responsibility of the caller to **NOT** place all of their balance into the
 *  lock and keep some for further operations.
 * 
 *  # <weight>
 *  We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 *  # </weight>
 */
export interface ElectionsPhragmenCall_vote {
    __kind: 'vote'
    votes: AccountId[]
    value: bigint
}

export type Renouncing = Renouncing_Candidate | Renouncing_Member | Renouncing_RunnerUp

export interface Renouncing_Candidate {
    __kind: 'Candidate'
    value: number
}

export interface Renouncing_Member {
    __kind: 'Member'
}

export interface Renouncing_RunnerUp {
    __kind: 'RunnerUp'
}

export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_queued | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_enact_proposal | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_propose | DemocracyCall_reap_preimage | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 *  Permanently place a proposal into the blacklist. This prevents it from ever being
 *  proposed again.
 * 
 *  If called on a queued public or external proposal, then this will result in it being
 *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 *  then it will be cancelled.
 * 
 *  The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 *  - `proposal_hash`: The proposal hash to blacklist permanently.
 *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 *  cancelled.
 * 
 *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *    reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Hash
    maybeRefIndex?: (ReferendumIndex | undefined)
}

/**
 *  Remove a proposal.
 * 
 *  The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 *  - `prop_index`: The index of the proposal to cancel.
 * 
 *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: ReferendumIndex
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 *  Delegate the voting power (with some given conviction) of the sending account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 * 
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: AccountId
    conviction: Conviction
    balance: BalanceOf
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: ReferendumIndex
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: Hash
    index: ReferendumIndex
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: Hash
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: Hash
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: Hash
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  The dispatch of this call must be `FastTrackOrigin`.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `FastTrackVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 * 
 *  Emits `Started`.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Hash
    votingPeriod: BlockNumber
    delay: BlockNumber
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 *  the preimage has not been uploaded before and matches some imminent proposal,
 *  no fee is paid.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Bytes
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Bytes
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Bytes
}

/**
 *  Propose a sensitive action to be taken.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender must
 *  have funds to cover the deposit.
 * 
 *  - `proposal_hash`: The hash of the proposal preimage.
 *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 *  Emits `Proposed`.
 * 
 *  Weight: `O(p)`
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: Hash
    value: bigint
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proposal_hash`: The preimage hash of a proposal.
 *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
 *    Extrinsic is weighted according to this value with no refund.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 * 
 *  Emits `PreimageReaped`.
 * 
 *  Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: Hash
    proposalLenUpperBound: number
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If the `target` is equal to the signer, then this function is exactly equivalent to
 *  `remove_vote`. If not equal to the signer, then the vote must have expired,
 *  either because the referendum was cancelled, because the voter lost the referendum or
 *  because the conviction period is over.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account of the vote to be removed; this account must have voted for
 *    referendum `index`.
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: AccountId
    index: ReferendumIndex
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If:
 *  - the referendum was cancelled, or
 *  - the referendum is ongoing, or
 *  - the referendum has ended such that
 *    - the vote of the account was in opposition to the result; or
 *    - there was no conviction to the account's vote; or
 *    - the account made a split vote
 *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
 *  funds being available.
 * 
 *  If, however, the referendum has ended and:
 *  - it finished corresponding to the vote of the account, and
 *  - the account made a standard vote with conviction, and
 *  - the lock period of the conviction is not over
 *  ...then the lock will be aggregated into the overall account's lock, which may involve
 *  *overlocking* (where the two locks are combined into a single lock that is the maximum
 *  of both the amount locked and the time is it locked for).
 * 
 *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *  registered for referendum `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: ReferendumIndex
}

/**
 *  Signals agreement with a particular proposal.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender
 *  must have funds to cover the deposit, equal to the original deposit.
 * 
 *  - `proposal`: The index of the proposal to second.
 *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *    proposal. Extrinsic is weighted according to this value with no refund.
 * 
 *  Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
}

/**
 *  Undelegate the voting power of the sending account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be
 *  currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: AccountId
}

/**
 *  Veto and blacklist the external proposal hash.
 * 
 *  The dispatch origin of this call must be `VetoOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 *  Emits `Vetoed`.
 * 
 *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Hash
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `ref_index`: The index of the referendum to vote for.
 *  - `vote`: The vote configuration.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    value: AccountVoteSplit
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    value: AccountVoteStandard
}

export interface AccountVoteStandard {
    vote: Vote
    balance: Balance
}

export type Vote = number

export interface AccountVoteSplit {
    aye: Balance
    nay: Balance
}

export type BalanceOf = bigint

export type Conviction = Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x | Conviction_None

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export interface Conviction_None {
    __kind: 'None'
}

export type ReferendumIndex = number

export type DEXAPICall = DEXAPICall_swap

/**
 *  Perform swap with specified parameters. Gateway for invoking liquidity source exchanges.
 * 
 *  - `dex_id`: ID of the exchange.
 *  - `liquidity_source_type`: Type of liquidity source to perform swap on.
 *  - `input_asset_id`: ID of Asset to be deposited from sender account into pool reserves.
 *  - `output_asset_id`: ID of Asset t0 be withdrawn from pool reserves into receiver account.
 *  - `amount`: Either amount of desired input or output tokens, determined by `swap_variant` parameter.
 *  - `limit`: Either maximum input amount or minimum output amount tolerated for successful swap,
 *             determined by `swap_variant` parameter.
 *  - `swap_variant`: Either 'WithDesiredInput' or 'WithDesiredOutput', indicates amounts purpose.
 *  - `receiver`: Optional value, indicates AccountId for swap receiver. If not set, default is `sender`.
 */
export interface DEXAPICall_swap {
    __kind: 'swap'
    dexId: DEXId
    liquiditySourceType: LiquiditySourceType
    inputAssetId: AssetId
    outputAssetId: AssetId
    amount: Balance
    limit: Balance
    swapVariant: SwapVariant
    receiver?: (AccountId | undefined)
}

export type SwapVariant = SwapVariant_WithDesiredInput | SwapVariant_WithDesiredOutput

export interface SwapVariant_WithDesiredInput {
    __kind: 'WithDesiredInput'
}

export interface SwapVariant_WithDesiredOutput {
    __kind: 'WithDesiredOutput'
}

export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 *  Transfer some balance to another account under `currency_id`.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    currencyId: CurrencyIdOf
    amount: bigint
}

/**
 *  Transfer some native currency to another account.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: LookupSource
    amount: bigint
}

/**
 *  update amount of account `who` under `currency_id`.
 * 
 *  The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
    __kind: 'update_balance'
    who: LookupSource
    currencyId: CurrencyIdOf
    amount: AmountOf
}

export type AmountOf = bigint

export type CurrencyIdOf = Bytes

export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Hash
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Hash
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Proposal
    lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Proposal
    lengthBound: number
}

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId[]
    prime?: (AccountId | undefined)
    oldCount: MemberCount
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Hash
    index: number
    approve: boolean
}

export type CeresStakingCall = CeresStakingCall_deposit | CeresStakingCall_withdraw

export interface CeresStakingCall_deposit {
    __kind: 'deposit'
    amount: Balance
}

export interface CeresStakingCall_withdraw {
    __kind: 'withdraw'
}

export type CeresLiquidityLockerCall = CeresLiquidityLockerCall_change_ceres_fee | CeresLiquidityLockerCall_lock_liquidity

/**
 *  Change CERES fee
 */
export interface CeresLiquidityLockerCall_change_ceres_fee {
    __kind: 'change_ceres_fee'
    ceresFee: Balance
}

/**
 *  Lock liquidity
 */
export interface CeresLiquidityLockerCall_lock_liquidity {
    __kind: 'lock_liquidity'
    assetA: AssetIdOf
    assetB: AssetIdOf
    unlockingBlock: BlockNumber
    percentageOfPoolTokens: Balance
    option: boolean
}

export type BridgeMultisigCall = BridgeMultisigCall_add_signatory | BridgeMultisigCall_approve_as_multi | BridgeMultisigCall_as_multi | BridgeMultisigCall_as_multi_threshold_1 | BridgeMultisigCall_cancel_as_multi | BridgeMultisigCall_register_multisig | BridgeMultisigCall_remove_signatory

/**
 *  Add a new signatory to the multisig account.
 *  Can only be called by a multisig account.
 * 
 *  TODO: update weights for `add_signatory`
 *  # <weight>
 *  Key: length of members in multisigConfig: M
 *  - One storage read - O(1)
 *  - search in members - O(M)
 *  - Storage write - O(M)
 *  Total complexity - O(M)
 *  # <weight>
 */
export interface BridgeMultisigCall_add_signatory {
    __kind: 'add_signatory'
    newMember: AccountId
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  ----------------------------------
 *  - Base Weight:
 *      - Create: 44.71 + 0.088 * S
 *      - Approve: 31.48 + 0.116 * S
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface BridgeMultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    id: AccountId
    maybeTimepoint?: (BridgeTimepoint | undefined)
    callHash: Bytes
    maxWeight: Weight
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  -------------------------------
 *  - Base Weight:
 *      - Create:          41.89 + 0.118 * S + .002 * Z µs
 *      - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
 *      - Approve:         31.39 + 0.136 * S + .002 * Z µs
 *      - Complete:        39.94 + 0.26  * S + .002 * Z µs
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *  - Plus Call Weight
 *  # </weight>
 */
export interface BridgeMultisigCall_as_multi {
    __kind: 'as_multi'
    id: AccountId
    maybeTimepoint?: (BridgeTimepoint | undefined)
    call: OpaqueCall
    storeCall: boolean
    maxWeight: Weight
}

/**
 *  Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `other_signatories`: The accounts (other than the sender) who are part of the
 *  multi-signature, but do not participate in the approval process.
 *  - `call`: The call to be executed.
 * 
 *  Result is equivalent to the dispatched result.
 * 
 *  # <weight>
 *  O(Z + C) where Z is the length of the call and C its execution weight.
 *  -------------------------------
 *  - Base Weight: 33.72 + 0.002 * Z µs
 *  - DB Weight: None
 *  - Plus Call Weight
 *  # </weight>
 */
export interface BridgeMultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    id: AccountId
    call: Type_54
    timepoint: BridgeTimepoint
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  ----------------------------------
 *  - Base Weight: 36.07 + 0.124 * S
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 *  # </weight>
 */
export interface BridgeMultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    id: AccountId
    timepoint: BridgeTimepoint
    callHash: Bytes
}

/**
 *  Create a new multisig account.
 *  TODO: update weights for `register_multisig`
 *  # <weight>
 *  Key: M - length of members,
 *  - One storage reads - O(1)
 *  - One search in sorted list - O(logM)
 *  - Confirmation that the list is sorted - O(M)
 *  - One storage writes - O(1)
 *  - One event
 *  Total Complexity: O(M + logM)
 *  # <weight>
 */
export interface BridgeMultisigCall_register_multisig {
    __kind: 'register_multisig'
    signatories: AccountId[]
}

/**
 *  Remove the signatory from the multisig account.
 *  Can only be called by a multisig account.
 * 
 *  TODO: update weights for `remove_signatory`
 *  # <weight>
 *  Key: length of members in multisigConfig: M
 *  - One storage reads - O(1)
 *  - remove items in list - O(M)
 *  Total complexity - O(M)
 *  # <weight>
 */
export interface BridgeMultisigCall_remove_signatory {
    __kind: 'remove_signatory'
    signatory: AccountId
}

export type BalancesCall = BalancesCall_force_transfer | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_keep_alive

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: LookupSource
    dest: LookupSource
    value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: LookupSource
    newFree: bigint
    newReserved: bigint
}

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: LookupSource
    value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Pallet.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: LookupSource
    value: bigint
}

export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: BabeEquivocationProof
    keyOwnerProof: KeyOwnerProof
}

export interface BabeEquivocationProof {
    offender: AuthorityId
    slotNumber: SlotNumber
    firstHeader: Header
    secondHeader: Header
}

export interface Header {
    parentHash: Hash
    number: number
    stateRoot: Hash
    extrinsicsRoot: Hash
    digest: Digest
}

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_ChangesTrieSignal | DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal | DigestItem_SealV0

export interface DigestItem_AuthoritiesChange {
    __kind: 'AuthoritiesChange'
    value: AuthorityId[]
}

export interface DigestItem_ChangesTrieRoot {
    __kind: 'ChangesTrieRoot'
    value: Hash
}

export interface DigestItem_ChangesTrieSignal {
    __kind: 'ChangesTrieSignal'
    value: ChangesTrieSignal
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: Consensus
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: PreRuntime
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: Seal
}

export interface DigestItem_SealV0 {
    __kind: 'SealV0'
    value: SealV0
}

export type SealV0 = [bigint, Signature]

export type Seal = [ConsensusEngineId, Bytes]

export type PreRuntime = [ConsensusEngineId, Bytes]

export type Consensus = [ConsensusEngineId, Bytes]

export type ConsensusEngineId = Bytes

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
    __kind: 'NewConfiguration'
    value?: (ChangesTrieConfiguration | undefined)
}

export type SlotNumber = bigint

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export type AssetsCall = AssetsCall_burn | AssetsCall_mint | AssetsCall_register | AssetsCall_set_non_mintable | AssetsCall_transfer

/**
 *  Performs a checked Asset burn, can only be done
 *  by corresponding asset owner with own account.
 * 
 *  - `origin`: caller Account, from which Asset amount is burned,
 *  - `asset_id`: Id of burned Asset,
 *  - `amount`: burned Asset amount.
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    assetId: AssetId
    amount: TAssetBalance
}

/**
 *  Performs a checked Asset mint, can only be done
 *  by corresponding asset owner account.
 * 
 *  - `origin`: caller Account, which issues Asset minting,
 *  - `asset_id`: Id of minted Asset,
 *  - `to`: Id of Account, to which Asset amount is minted,
 *  - `amount`: minted Asset amount.
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    assetId: AssetId
    to: AccountId
    amount: TAssetBalance
}

/**
 *  Performs an asset registration.
 * 
 *  Registers new `AssetId` for the given `origin`.
 *  AssetSymbol should represent string with only uppercase latin chars with max length of 7.
 *  AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
 */
export interface AssetsCall_register {
    __kind: 'register'
    symbol: AssetSymbol
    name: AssetName
    initialSupply: TAssetBalance
    isMintable: boolean
    isNft: boolean
    optContentSrc?: (ContentSource | undefined)
    optDesc?: (Description | undefined)
}

/**
 *  Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
 *  Operation can not be undone.
 * 
 *  - `origin`: caller Account, should correspond to Asset owner
 *  - `asset_id`: Id of burned Asset,
 */
export interface AssetsCall_set_non_mintable {
    __kind: 'set_non_mintable'
    assetId: AssetId
}

/**
 *  Performs a checked Asset transfer.
 * 
 *  - `origin`: caller Account, from which Asset amount is withdrawn,
 *  - `asset_id`: Id of transferred Asset,
 *  - `to`: Id of Account, to which Asset amount is deposited,
 *  - `amount`: transferred Asset amount.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    assetId: AssetId
    to: AccountId
    amount: TAssetBalance
}

export type Description = Bytes

export type ContentSource = Bytes

export type TAssetBalance = bigint

export type SchedulePriority = number

export const Scheduled: sts.Type<Scheduled> = sts.struct(() => {
    return  {
        maybeId: sts.option(() => sts.bytes()),
        priority: SchedulePriority,
        call: Type_54,
        maybePeriodic: sts.option(() => SchedulePeriod),
        origin: PalletsOrigin,
    }
})

export const PalletsOrigin: sts.Type<PalletsOrigin> = sts.closedEnum(() => {
    return  {
        Council: CollectiveOrigin,
        System: SystemOrigin,
        TechnicalCommittee: CollectiveOrigin,
    }
})

export const SystemOrigin: sts.Type<SystemOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId,
    }
})

export const CollectiveOrigin: sts.Type<CollectiveOrigin> = sts.closedEnum(() => {
    return  {
        Member: AccountId,
        Members: sts.tuple(() => [MemberCount, MemberCount]),
    }
})

export const MemberCount = sts.number()

export const SchedulePeriod = sts.tuple(() => [BlockNumber, sts.number()])

export const SchedulePriority = sts.number()

export type Hash = Bytes

export type Proposal = Proposal_Assets | Proposal_Authorship | Proposal_Babe | Proposal_Balances | Proposal_BridgeMultisig | Proposal_CeresLiquidityLocker | Proposal_CeresStaking | Proposal_Council | Proposal_Currencies | Proposal_DEXAPI | Proposal_Democracy | Proposal_ElectionsPhragmen | Proposal_EthBridge | Proposal_Farming | Proposal_Grandpa | Proposal_Identity | Proposal_ImOnline | Proposal_IrohaMigration | Proposal_LiquidityProxy | Proposal_MulticollateralBondingCurvePool | Proposal_Multisig | Proposal_Offences | Proposal_Permissions | Proposal_PoolXYK | Proposal_PswapDistribution | Proposal_RandomnessCollectiveFlip | Proposal_Referrals | Proposal_Rewards | Proposal_Scheduler | Proposal_Session | Proposal_Staking | Proposal_System | Proposal_Technical | Proposal_TechnicalCommittee | Proposal_TechnicalMembership | Proposal_Timestamp | Proposal_TradingPair | Proposal_Utility | Proposal_VestedRewards | Proposal_XSTPool | Proposal_XorFee

export interface Proposal_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Proposal_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Proposal_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Proposal_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Proposal_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigCall
}

export interface Proposal_CeresLiquidityLocker {
    __kind: 'CeresLiquidityLocker'
    value: CeresLiquidityLockerCall
}

export interface Proposal_CeresStaking {
    __kind: 'CeresStaking'
    value: CeresStakingCall
}

export interface Proposal_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Proposal_Currencies {
    __kind: 'Currencies'
    value: CurrenciesCall
}

export interface Proposal_DEXAPI {
    __kind: 'DEXAPI'
    value: DEXAPICall
}

export interface Proposal_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Proposal_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenCall
}

export interface Proposal_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeCall
}

export interface Proposal_Farming {
    __kind: 'Farming'
    value: FarmingCall
}

export interface Proposal_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Proposal_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Proposal_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Proposal_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationCall
}

export interface Proposal_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyCall
}

export interface Proposal_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolCall
}

export interface Proposal_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Proposal_Offences {
    __kind: 'Offences'
    value: OffencesCall
}

export interface Proposal_Permissions {
    __kind: 'Permissions'
    value: PermissionsCall
}

export interface Proposal_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKCall
}

export interface Proposal_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionCall
}

export interface Proposal_RandomnessCollectiveFlip {
    __kind: 'RandomnessCollectiveFlip'
    value: RandomnessCollectiveFlipCall
}

export interface Proposal_Referrals {
    __kind: 'Referrals'
    value: ReferralsCall
}

export interface Proposal_Rewards {
    __kind: 'Rewards'
    value: RewardsCall
}

export interface Proposal_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Proposal_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Proposal_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Proposal_System {
    __kind: 'System'
    value: SystemCall
}

export interface Proposal_Technical {
    __kind: 'Technical'
    value: TechnicalCall
}

export interface Proposal_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Proposal_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Proposal_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Proposal_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairCall
}

export interface Proposal_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Proposal_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsCall
}

export interface Proposal_XSTPool {
    __kind: 'XSTPool'
    value: XSTPoolCall
}

export interface Proposal_XorFee {
    __kind: 'XorFee'
    value: XorFeeCall
}

export const Hash = sts.bytes()

export interface EventRecord {
    phase: Phase
    event: Type_434
    topics: Hash[]
}

export type Type_434 = Type_434_Assets | Type_434_Balances | Type_434_BridgeMultisig | Type_434_CeresLiquidityLocker | Type_434_CeresStaking | Type_434_Council | Type_434_Currencies | Type_434_DEXAPI | Type_434_Democracy | Type_434_ElectionsPhragmen | Type_434_EthBridge | Type_434_Grandpa | Type_434_Identity | Type_434_ImOnline | Type_434_IrohaMigration | Type_434_LiquidityProxy | Type_434_MulticollateralBondingCurvePool | Type_434_Multisig | Type_434_Offences | Type_434_Permissions | Type_434_PoolXYK | Type_434_PswapDistribution | Type_434_Rewards | Type_434_Scheduler | Type_434_Session | Type_434_Staking | Type_434_System | Type_434_Technical | Type_434_TechnicalCommittee | Type_434_TechnicalMembership | Type_434_Tokens | Type_434_TradingPair | Type_434_Utility | Type_434_VestedRewards | Type_434_XSTPool | Type_434_XorFee

export interface Type_434_Assets {
    __kind: 'Assets'
    value: AssetsEvent
}

export interface Type_434_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Type_434_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigEvent
}

export interface Type_434_CeresLiquidityLocker {
    __kind: 'CeresLiquidityLocker'
    value: CeresLiquidityLockerEvent
}

export interface Type_434_CeresStaking {
    __kind: 'CeresStaking'
    value: CeresStakingEvent
}

export interface Type_434_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Type_434_Currencies {
    __kind: 'Currencies'
    value: CurrenciesEvent
}

export interface Type_434_DEXAPI {
    __kind: 'DEXAPI'
    value: DEXAPIEvent
}

export interface Type_434_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Type_434_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenEvent
}

export interface Type_434_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeEvent
}

export interface Type_434_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Type_434_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Type_434_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Type_434_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationEvent
}

export interface Type_434_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyEvent
}

export interface Type_434_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolEvent
}

export interface Type_434_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Type_434_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Type_434_Permissions {
    __kind: 'Permissions'
    value: PermissionsEvent
}

export interface Type_434_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKEvent
}

export interface Type_434_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionEvent
}

export interface Type_434_Rewards {
    __kind: 'Rewards'
    value: RewardsEvent
}

export interface Type_434_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Type_434_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Type_434_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Type_434_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Type_434_Technical {
    __kind: 'Technical'
    value: TechnicalEvent
}

export interface Type_434_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Type_434_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Type_434_Tokens {
    __kind: 'Tokens'
    value: TokensEvent
}

export interface Type_434_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairEvent
}

export interface Type_434_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Type_434_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsEvent
}

export interface Type_434_XSTPool {
    __kind: 'XSTPool'
    value: XSTPoolEvent
}

export interface Type_434_XorFee {
    __kind: 'XorFee'
    value: XorFeeEvent
}

export type XorFeeEvent = XorFeeEvent_FeeWithdrawn | XorFeeEvent_ReferrerRewarded

/**
 *  Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
 */
export interface XorFeeEvent_FeeWithdrawn {
    __kind: 'FeeWithdrawn'
    value: [AccountId, Balance]
}

/**
 *  The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
 */
export interface XorFeeEvent_ReferrerRewarded {
    __kind: 'ReferrerRewarded'
    value: [AccountId, AccountId, Balance]
}

export type XSTPoolEvent = XSTPoolEvent_PoolInitialized | XSTPoolEvent_ReferenceAssetChanged

/**
 *  Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
 */
export interface XSTPoolEvent_PoolInitialized {
    __kind: 'PoolInitialized'
    value: [DEXId, AssetId]
}

/**
 *  Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface XSTPoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: AssetId
}

export type VestedRewardsEvent = VestedRewardsEvent_ActualDoesntMatchAvailable | VestedRewardsEvent_AddingZeroMarketMakerReward | VestedRewardsEvent_FailedToSaveCalculatedReward | VestedRewardsEvent_NoEligibleMarketMakers | VestedRewardsEvent_RewardsVested

/**
 *  Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
 */
export interface VestedRewardsEvent_ActualDoesntMatchAvailable {
    __kind: 'ActualDoesntMatchAvailable'
    value: RewardReason
}

/**
 *  Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
 */
export interface VestedRewardsEvent_AddingZeroMarketMakerReward {
    __kind: 'AddingZeroMarketMakerReward'
    value: AccountId
}

/**
 *  Saving reward for account has failed in a distribution series. [account]
 */
export interface VestedRewardsEvent_FailedToSaveCalculatedReward {
    __kind: 'FailedToSaveCalculatedReward'
    value: AccountId
}

/**
 *  Couldn't find any account with enough transactions to count market maker rewards.
 */
export interface VestedRewardsEvent_NoEligibleMarketMakers {
    __kind: 'NoEligibleMarketMakers'
}

/**
 *  Rewards vested, limits were raised. [vested amount]
 */
export interface VestedRewardsEvent_RewardsVested {
    __kind: 'RewardsVested'
    value: Balance
}

export type RewardReason = RewardReason_BuyOnBondingCurve | RewardReason_LiquidityProvisionFarming | RewardReason_MarketMakerVolume | RewardReason_Unspecified

export interface RewardReason_BuyOnBondingCurve {
    __kind: 'BuyOnBondingCurve'
}

export interface RewardReason_LiquidityProvisionFarming {
    __kind: 'LiquidityProvisionFarming'
}

export interface RewardReason_MarketMakerVolume {
    __kind: 'MarketMakerVolume'
}

export interface RewardReason_Unspecified {
    __kind: 'Unspecified'
}

export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchInterrupted

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

export type TradingPairEvent = TradingPairEvent_TradingPairStored

/**
 *  Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
 */
export interface TradingPairEvent_TradingPairStored {
    __kind: 'TradingPairStored'
    value: [DEXId, TradingPair]
}

export interface TradingPair {
    baseAssetId: AssetId
    targetAssetId: AssetId
}

export type TokensEvent = TokensEvent_DustLost | TokensEvent_Transferred

/**
 *  An account was removed whose balance was non-zero but below
 *  ExistentialDeposit, resulting in an outright loss. \[account,
 *  currency_id, amount\]
 */
export interface TokensEvent_DustLost {
    __kind: 'DustLost'
    value: [AccountId, CurrencyId, Balance]
}

/**
 *  Token transfer success. \[currency_id, from, to, amount\]
 */
export interface TokensEvent_Transferred {
    __kind: 'Transferred'
    value: [CurrencyId, AccountId, AccountId, Balance]
}

export type CurrencyId = Bytes

export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 *  Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 *  One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 *  The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 *  The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 *  The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 *  Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: Hash
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    value: [Hash, MemberCount, MemberCount]
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: Hash
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [Hash, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Hash, DispatchResult]
}

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId, ProposalIndex, Hash, MemberCount]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [AccountId, Hash, boolean, MemberCount, MemberCount]
}

export type ProposalIndex = number

export type DispatchResult = Result<null, DispatchError>

export type TechnicalEvent = TechnicalEvent_Burned | TechnicalEvent_InputTransferred | TechnicalEvent_Minted | TechnicalEvent_OutputTransferred | TechnicalEvent_SwapSuccess

/**
 *  Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
 *  For full kind of accounts like in Minted.
 */
export interface TechnicalEvent_Burned {
    __kind: 'Burned'
    value: [TechAssetId, TechAccountId, Balance, Balance]
}

/**
 *  Some assets were transferred in. [asset, from, to, amount].
 *  TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_InputTransferred {
    __kind: 'InputTransferred'
    value: [TechAssetId, AccountId, TechAccountId, Balance]
}

/**
 *  Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
 *  This is not only for pure TechAccountId.
 *  TechAccountId can be just wrapped AccountId.
 */
export interface TechnicalEvent_Minted {
    __kind: 'Minted'
    value: [TechAssetId, TechAccountId, Balance, Balance]
}

/**
 *  Some assets were transferred out. [asset, from, to, amount].
 *  TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_OutputTransferred {
    __kind: 'OutputTransferred'
    value: [TechAssetId, TechAccountId, AccountId, Balance]
}

/**
 *  Swap operaction is finalised [initiator, finaliser].
 *  TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_SwapSuccess {
    __kind: 'SwapSuccess'
    value: AccountId
}

export type TechAccountId = TechAccountId_Generic | TechAccountId_Pure | TechAccountId_Wrapped | TechAccountId_WrappedRepr

export interface TechAccountId_Generic {
    __kind: 'Generic'
    value: [Bytes, Bytes]
}

export interface TechAccountId_Pure {
    __kind: 'Pure'
    value: [DEXId, TechPurpose]
}

export interface TechAccountId_Wrapped {
    __kind: 'Wrapped'
    value: AccountId
}

export interface TechAccountId_WrappedRepr {
    __kind: 'WrappedRepr'
    value: AccountId
}

export type TechPurpose = TechPurpose_FeeCollector | TechPurpose_FeeCollectorForPair | TechPurpose_Identifier | TechPurpose_LiquidityKeeper

export interface TechPurpose_FeeCollector {
    __kind: 'FeeCollector'
}

export interface TechPurpose_FeeCollectorForPair {
    __kind: 'FeeCollectorForPair'
    value: TechTradingPair
}

export interface TechPurpose_Identifier {
    __kind: 'Identifier'
    value: Bytes
}

export interface TechPurpose_LiquidityKeeper {
    __kind: 'LiquidityKeeper'
    value: TechTradingPair
}

export interface TechTradingPair {
    baseAssetId: TechAssetId
    targetAssetId: TechAssetId
}

export type TechAssetId = TechAssetId_Escaped | TechAssetId_Wrapped

export interface TechAssetId_Escaped {
    __kind: 'Escaped'
    value: AssetId
}

export interface TechAssetId_Wrapped {
    __kind: 'Wrapped'
    value: PredefinedAssetId
}

export type PredefinedAssetId = PredefinedAssetId_DAI | PredefinedAssetId_DOT | PredefinedAssetId_ETH | PredefinedAssetId_KSM | PredefinedAssetId_PSWAP | PredefinedAssetId_USDT | PredefinedAssetId_VAL | PredefinedAssetId_XOR | PredefinedAssetId_XSTUSD

export interface PredefinedAssetId_DAI {
    __kind: 'DAI'
}

export interface PredefinedAssetId_DOT {
    __kind: 'DOT'
}

export interface PredefinedAssetId_ETH {
    __kind: 'ETH'
}

export interface PredefinedAssetId_KSM {
    __kind: 'KSM'
}

export interface PredefinedAssetId_PSWAP {
    __kind: 'PSWAP'
}

export interface PredefinedAssetId_USDT {
    __kind: 'USDT'
}

export interface PredefinedAssetId_VAL {
    __kind: 'VAL'
}

export interface PredefinedAssetId_XOR {
    __kind: 'XOR'
}

export interface PredefinedAssetId_XSTUSD {
    __kind: 'XSTUSD'
}

export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess | SystemEvent_KilledAccount | SystemEvent_NewAccount

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: AccountId
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: AccountId
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

export type DispatchClass = DispatchClass_Mandatory | DispatchClass_Normal | DispatchClass_Operational

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export type StakingEvent = StakingEvent_Bonded | StakingEvent_EraPayout | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_Reward | StakingEvent_Slash | StakingEvent_SolutionStored | StakingEvent_StakingElection | StakingEvent_Unbonded | StakingEvent_Withdrawn

/**
 *  An account has bonded this amount. \[stash, amount\]
 * 
 *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 *  it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [AccountId, Balance]
}

/**
 *  The era payout has been set; the first balance is the validator-payout; the second is
 *  the remainder from the maximum amount of reward.
 *  \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPayout {
    __kind: 'EraPayout'
    value: [EraIndex, MultiCurrencyBalance]
}

/**
 *  A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [AccountId, AccountId]
}

/**
 *  An old slashing report from a prior era was discarded because it could
 *  not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: SessionIndex
}

/**
 *  The staker has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Reward {
    __kind: 'Reward'
    value: [AccountId, MultiCurrencyBalance]
}

/**
 *  One validator (and its nominators) has been slashed by the given amount.
 *  \[validator, amount\]
 */
export interface StakingEvent_Slash {
    __kind: 'Slash'
    value: [AccountId, Balance]
}

/**
 *  A new solution for the upcoming election has been stored. \[compute\]
 */
export interface StakingEvent_SolutionStored {
    __kind: 'SolutionStored'
    value: ElectionCompute
}

/**
 *  A new set of stakers was elected with the given \[compute\].
 */
export interface StakingEvent_StakingElection {
    __kind: 'StakingElection'
    value: ElectionCompute
}

/**
 *  An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [AccountId, Balance]
}

/**
 *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 *  from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId, Balance]
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export type MultiCurrencyBalance = bigint

export type SessionEvent = SessionEvent_NewSession

/**
 *  New session has happened. Note that the argument is the \[session_index\], not the block
 *  number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: SessionIndex
}

export type SchedulerEvent = SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_Scheduled

/**
 *  Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [BlockNumber, number]
}

/**
 *  Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [TaskAddress, (Bytes | undefined), DispatchResult]
}

/**
 *  Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [BlockNumber, number]
}

export type TaskAddress = [BlockNumber, number]

export type RewardsEvent = RewardsEvent_Claimed | RewardsEvent_MigrationCompleted

/**
 *  The account has claimed their rewards. [account]
 */
export interface RewardsEvent_Claimed {
    __kind: 'Claimed'
    value: AccountId
}

/**
 *  Storage migration to version 1.2.0 completed
 */
export interface RewardsEvent_MigrationCompleted {
    __kind: 'MigrationCompleted'
}

export type PswapDistributionEvent = PswapDistributionEvent_BurnRateChanged | PswapDistributionEvent_FeesExchangeFailed | PswapDistributionEvent_FeesExchanged | PswapDistributionEvent_IncentiveDistributed | PswapDistributionEvent_IncentiveDistributionFailed | PswapDistributionEvent_IncentivesBurnedAfterExchange | PswapDistributionEvent_NothingToDistribute | PswapDistributionEvent_NothingToExchange

/**
 *  Burn rate updated.
 *  [Current Burn Rate]
 */
export interface PswapDistributionEvent_BurnRateChanged {
    __kind: 'BurnRateChanged'
    value: Fixed
}

/**
 *  Problem occurred that resulted in fees exchange not done.
 *  [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
 */
export interface PswapDistributionEvent_FeesExchangeFailed {
    __kind: 'FeesExchangeFailed'
    value: [DEXId, AccountId, AssetId, Balance, AssetId]
}

/**
 *  Fees successfully exchanged for appropriate amount of pool tokens.
 *  [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
 */
export interface PswapDistributionEvent_FeesExchanged {
    __kind: 'FeesExchanged'
    value: [DEXId, AccountId, AssetId, Balance, AssetId, Balance]
}

/**
 *  Incentives successfully sent out to shareholders.
 *  [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
 */
export interface PswapDistributionEvent_IncentiveDistributed {
    __kind: 'IncentiveDistributed'
    value: [DEXId, AccountId, AssetId, Balance, bigint]
}

/**
 *  Problem occurred that resulted in incentive distribution not done.
 *  [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_IncentiveDistributionFailed {
    __kind: 'IncentiveDistributionFailed'
    value: [DEXId, AccountId]
}

/**
 *  This is needed for other pallet that will use this variables, for example this is
 *  farming pallet.
 *  [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
 *  Incentives burned (Incentives that is not revived (to burn)]).
 */
export interface PswapDistributionEvent_IncentivesBurnedAfterExchange {
    __kind: 'IncentivesBurnedAfterExchange'
    value: [DEXId, AssetId, Balance, Balance]
}

/**
 *  Fees Account contains zero incentive tokens, thus distribution is dismissed.
 *  [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToDistribute {
    __kind: 'NothingToDistribute'
    value: [DEXId, AccountId]
}

/**
 *  Fees Account contains zero base tokens, thus exchange is dismissed.
 *  [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToExchange {
    __kind: 'NothingToExchange'
    value: [DEXId, AccountId]
}

export type PoolXYKEvent = PoolXYKEvent_PoolIsInitialized

export interface PoolXYKEvent_PoolIsInitialized {
    __kind: 'PoolIsInitialized'
    value: AccountId
}

export type PermissionsEvent = PermissionsEvent_PermissionAssigned | PermissionsEvent_PermissionCreated | PermissionsEvent_PermissionGranted | PermissionsEvent_PermissionTransfered

/**
 *  Permission was assigned to the account in the scope. [permission, who]
 */
export interface PermissionsEvent_PermissionAssigned {
    __kind: 'PermissionAssigned'
    value: [number, AccountId]
}

/**
 *  Permission was created with an owner. [permission, who]
 */
export interface PermissionsEvent_PermissionCreated {
    __kind: 'PermissionCreated'
    value: [number, AccountId]
}

/**
 *  Permission was granted to a holder. [permission, who]
 */
export interface PermissionsEvent_PermissionGranted {
    __kind: 'PermissionGranted'
    value: [number, AccountId]
}

/**
 *  Permission was transfered to a new owner. [permission, who]
 */
export interface PermissionsEvent_PermissionTransfered {
    __kind: 'PermissionTransfered'
    value: [number, AccountId]
}

export type OffencesEvent = OffencesEvent_Offence

/**
 *  There is an offence reported of the given `kind` happened at the `session_index` and
 *  (kind-specific) time slot. This event is not deposited for duplicate slashes. last
 *  element indicates of the offence was applied (true) or queued (false)
 *  \[kind, timeslot, applied\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    value: [Kind, OpaqueTimeSlot, boolean]
}

export type OpaqueTimeSlot = Bytes

export type Kind = Bytes

export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 *  A multisig operation has been approved by someone.
 *  \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [AccountId, Timepoint, AccountId, CallHash]
}

/**
 *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [AccountId, Timepoint, AccountId, CallHash]
}

/**
 *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [AccountId, Timepoint, AccountId, CallHash, DispatchResult]
}

/**
 *  A new multisig operation has begun. \[approving, multisig, call_hash\]
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [AccountId, AccountId, CallHash]
}

export type CallHash = Bytes

export type MulticollateralBondingCurvePoolEvent = MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated | MulticollateralBondingCurvePoolEvent_PoolInitialized | MulticollateralBondingCurvePoolEvent_PriceBiasChanged | MulticollateralBondingCurvePoolEvent_PriceChangeConfigChanged | MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged

/**
 *  Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
 */
export interface MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated {
    __kind: 'OptionalRewardMultiplierUpdated'
    value: [AssetId, (Fixed | undefined)]
}

/**
 *  Pool is initialized for pair. [DEX Id, Collateral Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_PoolInitialized {
    __kind: 'PoolInitialized'
    value: [DEXId, AssetId]
}

/**
 *  Price bias was changed. [New Price Bias]
 */
export interface MulticollateralBondingCurvePoolEvent_PriceBiasChanged {
    __kind: 'PriceBiasChanged'
    value: Balance
}

/**
 *  Price change config was changed. [New Price Change Rate, New Price Change Step]
 */
export interface MulticollateralBondingCurvePoolEvent_PriceChangeConfigChanged {
    __kind: 'PriceChangeConfigChanged'
    value: [Balance, Balance]
}

/**
 *  Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: AssetId
}

export type LiquidityProxyEvent = LiquidityProxyEvent_Exchange

/**
 *  Exchange of tokens has been performed
 *  [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
 */
export interface LiquidityProxyEvent_Exchange {
    __kind: 'Exchange'
    value: [AccountId, DEXId, AssetId, AssetId, Balance, Balance, Balance]
}

export type IrohaMigrationEvent = IrohaMigrationEvent_Migrated

/**
 *  Migrated. [source, target]
 */
export interface IrohaMigrationEvent_Migrated {
    __kind: 'Migrated'
    value: [String, AccountId]
}

export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 *  At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 *  A new heartbeat was received from `AuthorityId` \[authority_id\]
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: AuthorityId
}

/**
 *  At the end of the session, at least one validator was found to be \[offline\].
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: IdentificationTuple[]
}

export type IdentificationTuple = [ValidatorId, FullIdentification]

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId
    value: bigint
}

export type ValidatorId = Bytes

export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 *  A name was cleared, and the given balance returned. \[who, deposit\]
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [AccountId, Balance]
}

/**
 *  A name was removed and the given balance slashed. \[who, deposit\]
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [AccountId, Balance]
}

/**
 *  A name was set or reset (which will remove all judgements). \[who\]
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: AccountId
}

/**
 *  A judgement was given by a registrar. \[target, registrar_index\]
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A judgement was asked from a registrar. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A judgement request was retracted. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A registrar was added. \[registrar_index\]
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: RegistrarIndex
}

/**
 *  A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    value: [AccountId, AccountId, Balance]
}

/**
 *  A sub-identity was removed from an identity and the deposit freed.
 *  \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    value: [AccountId, AccountId, Balance]
}

/**
 *  A sub-identity was cleared, and the given deposit repatriated from the
 *  main identity account to the sub-identity account. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    value: [AccountId, AccountId, Balance]
}

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: NextAuthority[]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type NextAuthority = [AuthorityId, AuthorityWeight]

export type AuthorityWeight = bigint

export type EthBridgeEvent = EthBridgeEvent_ApprovalsCollected | EthBridgeEvent_CancellationFailed | EthBridgeEvent_IncomingRequestFinalizationFailed | EthBridgeEvent_IncomingRequestFinalized | EthBridgeEvent_RequestAborted | EthBridgeEvent_RequestFinalizationFailed | EthBridgeEvent_RequestRegistered

/**
 *  The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
 */
export interface EthBridgeEvent_ApprovalsCollected {
    __kind: 'ApprovalsCollected'
    value: H256
}

/**
 *  The request wasn't finalized nor cancelled. [Request Hash]
 */
export interface EthBridgeEvent_CancellationFailed {
    __kind: 'CancellationFailed'
    value: H256
}

/**
 *  The incoming request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalizationFailed {
    __kind: 'IncomingRequestFinalizationFailed'
    value: H256
}

/**
 *  The incoming request has been finalized. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalized {
    __kind: 'IncomingRequestFinalized'
    value: H256
}

/**
 *  The request was aborted and cancelled. [Request Hash]
 */
export interface EthBridgeEvent_RequestAborted {
    __kind: 'RequestAborted'
    value: H256
}

/**
 *  The request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_RequestFinalizationFailed {
    __kind: 'RequestFinalizationFailed'
    value: H256
}

/**
 *  New request has been registered. [Request Hash]
 */
export interface EthBridgeEvent_RequestRegistered {
    __kind: 'RequestRegistered'
    value: H256
}

export type ElectionsPhragmenEvent = ElectionsPhragmenEvent_CandidateSlashed | ElectionsPhragmenEvent_ElectionError | ElectionsPhragmenEvent_EmptyTerm | ElectionsPhragmenEvent_MemberKicked | ElectionsPhragmenEvent_NewTerm | ElectionsPhragmenEvent_Renounced | ElectionsPhragmenEvent_SeatHolderSlashed

/**
 *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
 *  runner-up.
 * 
 *  Note that old members and runners-up are also candidates.
 */
export interface ElectionsPhragmenEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    value: [AccountId, Balance]
}

/**
 *  Internal error happened while trying to perform election.
 */
export interface ElectionsPhragmenEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 *  No (or not enough) candidates existed for this round. This is different from
 *  `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsPhragmenEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
 *  `EmptyTerm`.
 */
export interface ElectionsPhragmenEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: AccountId
}

/**
 *  A new term with \[new_members\]. This indicates that enough candidates existed to run the
 *  election, not that enough have has been elected. The inner value must be examined for
 *  this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
 *  none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
 */
export interface ElectionsPhragmenEvent_NewTerm {
    __kind: 'NewTerm'
    value: [AccountId, Balance][]
}

/**
 *  Someone has renounced their candidacy.
 */
export interface ElectionsPhragmenEvent_Renounced {
    __kind: 'Renounced'
    value: AccountId
}

/**
 *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
 */
export interface ElectionsPhragmenEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    value: [AccountId, Balance]
}

export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Executed | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageReaped | DemocracyEvent_PreimageUsed | DemocracyEvent_Proposed | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Unlocked | DemocracyEvent_Vetoed

/**
 *  A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    value: Hash
}

/**
 *  A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: ReferendumIndex
}

/**
 *  An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId, AccountId]
}

/**
 *  A proposal has been enacted. \[ref_index, is_ok\]
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [ReferendumIndex, boolean]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 *  A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: ReferendumIndex
}

/**
 *  A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: ReferendumIndex
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [Hash, ReferendumIndex]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [Hash, ReferendumIndex]
}

/**
 *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [Hash, AccountId, Balance]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper.
 *  \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [Hash, AccountId, Balance, AccountId]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 *  \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [Hash, AccountId, Balance]
}

/**
 *  A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [PropIndex, Balance]
}

/**
 *  A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [ReferendumIndex, VoteThreshold]
}

/**
 *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [PropIndex, Balance, AccountId[]]
}

/**
 *  An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId
}

/**
 *  An \[account\] has been unlocked successfully.
 */
export interface DemocracyEvent_Unlocked {
    __kind: 'Unlocked'
    value: AccountId
}

/**
 *  An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [AccountId, Hash, BlockNumber]
}

export type VoteThreshold = VoteThreshold_SimpleMajority | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SuperMajorityApprove

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export type PropIndex = number

export type DEXAPIEvent = DEXAPIEvent_DirectExchange

/**
 *  Exchange of tokens has been performed
 *  [Sender Account, Receiver Account, DEX Id, LiquiditySourceType, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
 */
export interface DEXAPIEvent_DirectExchange {
    __kind: 'DirectExchange'
    value: [AccountId, AccountId, DEXId, LiquiditySourceType, AssetId, AssetId, Balance, Balance, Balance]
}

export type CurrenciesEvent = CurrenciesEvent_BalanceUpdated | CurrenciesEvent_Deposited | CurrenciesEvent_Transferred | CurrenciesEvent_Withdrawn

/**
 *  Update balance success. [currency_id, who, amount]
 */
export interface CurrenciesEvent_BalanceUpdated {
    __kind: 'BalanceUpdated'
    value: [CurrencyIdOf, AccountId, AmountOf]
}

/**
 *  Deposit success. [currency_id, who, amount]
 */
export interface CurrenciesEvent_Deposited {
    __kind: 'Deposited'
    value: [CurrencyIdOf, AccountId, BalanceOf]
}

/**
 *  Currency transfer success. [currency_id, from, to, amount]
 */
export interface CurrenciesEvent_Transferred {
    __kind: 'Transferred'
    value: [CurrencyIdOf, AccountId, AccountId, BalanceOf]
}

/**
 *  Withdraw success. [currency_id, who, amount]
 */
export interface CurrenciesEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [CurrencyIdOf, AccountId, BalanceOf]
}

export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Closed | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: Hash
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    value: [Hash, MemberCount, MemberCount]
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: Hash
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [Hash, DispatchResult]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Hash, DispatchResult]
}

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId, ProposalIndex, Hash, MemberCount]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [AccountId, Hash, boolean, MemberCount, MemberCount]
}

export type CeresStakingEvent = CeresStakingEvent_Deposited | CeresStakingEvent_Withdrawn

/**
 *  Ceres deposited. [who, amount]
 */
export interface CeresStakingEvent_Deposited {
    __kind: 'Deposited'
    value: [AccountId, Balance]
}

/**
 *  Staked Ceres and rewards withdrawn. [who, staked, rewards]
 */
export interface CeresStakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId, Balance, Balance]
}

export type CeresLiquidityLockerEvent = CeresLiquidityLockerEvent_Locked

/**
 *  Funds Locked [who, amount, block]
 */
export interface CeresLiquidityLockerEvent_Locked {
    __kind: 'Locked'
    value: [AccountId, Balance, BlockNumber]
}

export type BridgeMultisigEvent = BridgeMultisigEvent_MultisigAccountCreated | BridgeMultisigEvent_MultisigApproval | BridgeMultisigEvent_MultisigCancelled | BridgeMultisigEvent_MultisigExecuted | BridgeMultisigEvent_NewMultisig

/**
 *  A new multisig created. [multisig]
 */
export interface BridgeMultisigEvent_MultisigAccountCreated {
    __kind: 'MultisigAccountCreated'
    value: AccountId
}

/**
 *  A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [AccountId, BridgeTimepoint, AccountId, Bytes]
}

/**
 *  A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [AccountId, BridgeTimepoint, AccountId, Bytes]
}

/**
 *  A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [AccountId, BridgeTimepoint, AccountId, Bytes, DispatchResultWithPostInfo]
}

/**
 *  A new multisig operation has begun. [approving, multisig, call_hash]
 */
export interface BridgeMultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [AccountId, AccountId, Bytes]
}

export type DispatchResultWithPostInfo = Result<PostDispatchInfo, DispatchErrorWithPostInfoTPostDispatchInfo>

export interface DispatchErrorWithPostInfoTPostDispatchInfo {
    postInfo: PostDispatchInfo
    error: DispatchError
}

export interface PostDispatchInfo {
    actualWeight?: (Weight | undefined)
    paysFee: Pays
}

export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Transfer | BalancesEvent_Unreserved

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [AccountId, Balance, Balance]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [AccountId, Balance]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [AccountId, Balance]
}

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [AccountId, Balance]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [AccountId, AccountId, Balance, BalanceStatus]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [AccountId, Balance]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [AccountId, AccountId, Balance]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [AccountId, Balance]
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type AssetsEvent = AssetsEvent_AssetRegistered | AssetsEvent_AssetSetNonMintable | AssetsEvent_Burn | AssetsEvent_Mint | AssetsEvent_Transfer

/**
 *  New asset has been registered. [Asset Id, Asset Owner Account]
 */
export interface AssetsEvent_AssetRegistered {
    __kind: 'AssetRegistered'
    value: [AssetId, AccountId]
}

/**
 *  Asset is set as non-mintable. [Target Asset Id]
 */
export interface AssetsEvent_AssetSetNonMintable {
    __kind: 'AssetSetNonMintable'
    value: AssetId
}

/**
 *  Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
 */
export interface AssetsEvent_Burn {
    __kind: 'Burn'
    value: [AccountId, AssetId, TAssetBalance]
}

/**
 *  Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
 */
export interface AssetsEvent_Mint {
    __kind: 'Mint'
    value: [AccountId, AccountId, AssetId, TAssetBalance]
}

/**
 *  Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
 */
export interface AssetsEvent_Transfer {
    __kind: 'Transfer'
    value: [AccountId, AccountId, AssetId, TAssetBalance]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Phase,
        event: Type_434,
        topics: sts.array(() => Hash),
    }
})

export const Type_434: sts.Type<Type_434> = sts.closedEnum(() => {
    return  {
        Assets: AssetsEvent,
        Balances: BalancesEvent,
        BridgeMultisig: BridgeMultisigEvent,
        CeresLiquidityLocker: CeresLiquidityLockerEvent,
        CeresStaking: CeresStakingEvent,
        Council: CouncilEvent,
        Currencies: CurrenciesEvent,
        DEXAPI: DEXAPIEvent,
        Democracy: DemocracyEvent,
        ElectionsPhragmen: ElectionsPhragmenEvent,
        EthBridge: EthBridgeEvent,
        Grandpa: GrandpaEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        IrohaMigration: IrohaMigrationEvent,
        LiquidityProxy: LiquidityProxyEvent,
        MulticollateralBondingCurvePool: MulticollateralBondingCurvePoolEvent,
        Multisig: MultisigEvent,
        Offences: OffencesEvent,
        Permissions: PermissionsEvent,
        PoolXYK: PoolXYKEvent,
        PswapDistribution: PswapDistributionEvent,
        Rewards: RewardsEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Staking: StakingEvent,
        System: SystemEvent,
        Technical: TechnicalEvent,
        TechnicalCommittee: TechnicalCommitteeEvent,
        TechnicalMembership: TechnicalMembershipEvent,
        Tokens: TokensEvent,
        TradingPair: TradingPairEvent,
        Utility: UtilityEvent,
        VestedRewards: VestedRewardsEvent,
        XSTPool: XSTPoolEvent,
        XorFee: XorFeeEvent,
    }
})

export const XorFeeEvent: sts.Type<XorFeeEvent> = sts.closedEnum(() => {
    return  {
        FeeWithdrawn: sts.tuple(() => [AccountId, Balance]),
        ReferrerRewarded: sts.tuple(() => [AccountId, AccountId, Balance]),
    }
})

export const Balance = sts.bigint()

export const XSTPoolEvent: sts.Type<XSTPoolEvent> = sts.closedEnum(() => {
    return  {
        PoolInitialized: sts.tuple(() => [DEXId, AssetId]),
        ReferenceAssetChanged: AssetId,
    }
})

export const AssetId = sts.bytes()

export const DEXId = sts.number()

export const VestedRewardsEvent: sts.Type<VestedRewardsEvent> = sts.closedEnum(() => {
    return  {
        ActualDoesntMatchAvailable: RewardReason,
        AddingZeroMarketMakerReward: AccountId,
        FailedToSaveCalculatedReward: AccountId,
        NoEligibleMarketMakers: sts.unit(),
        RewardsVested: Balance,
    }
})

export const RewardReason: sts.Type<RewardReason> = sts.closedEnum(() => {
    return  {
        BuyOnBondingCurve: sts.unit(),
        LiquidityProvisionFarming: sts.unit(),
        MarketMakerVolume: sts.unit(),
        Unspecified: sts.unit(),
    }
})

export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchInterrupted: sts.tuple(() => [sts.number(), DispatchError]),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: DispatchErrorModule,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
        UnknownAsset: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export const DispatchErrorModule: sts.Type<DispatchErrorModule> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.number(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export const TradingPairEvent: sts.Type<TradingPairEvent> = sts.closedEnum(() => {
    return  {
        TradingPairStored: sts.tuple(() => [DEXId, TradingPair]),
    }
})

export const TradingPair: sts.Type<TradingPair> = sts.struct(() => {
    return  {
        baseAssetId: AssetId,
        targetAssetId: AssetId,
    }
})

export const TokensEvent: sts.Type<TokensEvent> = sts.closedEnum(() => {
    return  {
        DustLost: sts.tuple(() => [AccountId, CurrencyId, Balance]),
        Transferred: sts.tuple(() => [CurrencyId, AccountId, AccountId, Balance]),
    }
})

export const CurrencyId = sts.bytes()

export const TechnicalMembershipEvent: sts.Type<TechnicalMembershipEvent> = sts.closedEnum(() => {
    return  {
        Dummy: sts.unit(),
        KeyChanged: sts.unit(),
        MemberAdded: sts.unit(),
        MemberRemoved: sts.unit(),
        MembersReset: sts.unit(),
        MembersSwapped: sts.unit(),
    }
})

export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: Hash,
        Closed: sts.tuple(() => [Hash, MemberCount, MemberCount]),
        Disapproved: Hash,
        Executed: sts.tuple(() => [Hash, DispatchResult]),
        MemberExecuted: sts.tuple(() => [Hash, DispatchResult]),
        Proposed: sts.tuple(() => [AccountId, ProposalIndex, Hash, MemberCount]),
        Voted: sts.tuple(() => [AccountId, Hash, sts.boolean(), MemberCount, MemberCount]),
    }
})

export const ProposalIndex = sts.number()

export const DispatchResult = sts.result(() => sts.unit(), () => DispatchError)

export const TechnicalEvent: sts.Type<TechnicalEvent> = sts.closedEnum(() => {
    return  {
        Burned: sts.tuple(() => [TechAssetId, TechAccountId, Balance, Balance]),
        InputTransferred: sts.tuple(() => [TechAssetId, AccountId, TechAccountId, Balance]),
        Minted: sts.tuple(() => [TechAssetId, TechAccountId, Balance, Balance]),
        OutputTransferred: sts.tuple(() => [TechAssetId, TechAccountId, AccountId, Balance]),
        SwapSuccess: AccountId,
    }
})

export const TechAccountId: sts.Type<TechAccountId> = sts.closedEnum(() => {
    return  {
        Generic: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Pure: sts.tuple(() => [DEXId, TechPurpose]),
        Wrapped: AccountId,
        WrappedRepr: AccountId,
    }
})

export const TechPurpose: sts.Type<TechPurpose> = sts.closedEnum(() => {
    return  {
        FeeCollector: sts.unit(),
        FeeCollectorForPair: TechTradingPair,
        Identifier: sts.bytes(),
        LiquidityKeeper: TechTradingPair,
    }
})

export const TechTradingPair: sts.Type<TechTradingPair> = sts.struct(() => {
    return  {
        baseAssetId: TechAssetId,
        targetAssetId: TechAssetId,
    }
})

export const TechAssetId: sts.Type<TechAssetId> = sts.closedEnum(() => {
    return  {
        Escaped: AssetId,
        Wrapped: PredefinedAssetId,
    }
})

export const PredefinedAssetId: sts.Type<PredefinedAssetId> = sts.closedEnum(() => {
    return  {
        DAI: sts.unit(),
        DOT: sts.unit(),
        ETH: sts.unit(),
        KSM: sts.unit(),
        PSWAP: sts.unit(),
        USDT: sts.unit(),
        VAL: sts.unit(),
        XOR: sts.unit(),
        XSTUSD: sts.unit(),
    }
})

export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.tuple(() => [DispatchError, DispatchInfo]),
        ExtrinsicSuccess: DispatchInfo,
        KilledAccount: AccountId,
        NewAccount: AccountId,
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: Weight,
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

export const Weight = sts.bigint()

export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.tuple(() => [AccountId, Balance]),
        EraPayout: sts.tuple(() => [EraIndex, MultiCurrencyBalance]),
        Kicked: sts.tuple(() => [AccountId, AccountId]),
        OldSlashingReportDiscarded: SessionIndex,
        Reward: sts.tuple(() => [AccountId, MultiCurrencyBalance]),
        Slash: sts.tuple(() => [AccountId, Balance]),
        SolutionStored: ElectionCompute,
        StakingElection: ElectionCompute,
        Unbonded: sts.tuple(() => [AccountId, Balance]),
        Withdrawn: sts.tuple(() => [AccountId, Balance]),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return  {
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

export const SessionIndex = sts.number()

export const MultiCurrencyBalance = sts.bigint()

export const EraIndex = sts.number()

export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: SessionIndex,
    }
})

export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        Canceled: sts.tuple(() => [BlockNumber, sts.number()]),
        Dispatched: sts.tuple(() => [TaskAddress, sts.option(() => sts.bytes()), DispatchResult]),
        Scheduled: sts.tuple(() => [BlockNumber, sts.number()]),
    }
})

export const TaskAddress = sts.tuple(() => [BlockNumber, sts.number()])

export const RewardsEvent: sts.Type<RewardsEvent> = sts.closedEnum(() => {
    return  {
        Claimed: AccountId,
        MigrationCompleted: sts.unit(),
    }
})

export const PswapDistributionEvent: sts.Type<PswapDistributionEvent> = sts.closedEnum(() => {
    return  {
        BurnRateChanged: Fixed,
        FeesExchangeFailed: sts.tuple(() => [DEXId, AccountId, AssetId, Balance, AssetId]),
        FeesExchanged: sts.tuple(() => [DEXId, AccountId, AssetId, Balance, AssetId, Balance]),
        IncentiveDistributed: sts.tuple(() => [DEXId, AccountId, AssetId, Balance, sts.bigint()]),
        IncentiveDistributionFailed: sts.tuple(() => [DEXId, AccountId]),
        IncentivesBurnedAfterExchange: sts.tuple(() => [DEXId, AssetId, Balance, Balance]),
        NothingToDistribute: sts.tuple(() => [DEXId, AccountId]),
        NothingToExchange: sts.tuple(() => [DEXId, AccountId]),
    }
})

export const Fixed = sts.bigint()

export const PoolXYKEvent: sts.Type<PoolXYKEvent> = sts.closedEnum(() => {
    return  {
        PoolIsInitialized: AccountId,
    }
})

export const PermissionsEvent: sts.Type<PermissionsEvent> = sts.closedEnum(() => {
    return  {
        PermissionAssigned: sts.tuple(() => [sts.number(), AccountId]),
        PermissionCreated: sts.tuple(() => [sts.number(), AccountId]),
        PermissionGranted: sts.tuple(() => [sts.number(), AccountId]),
        PermissionTransfered: sts.tuple(() => [sts.number(), AccountId]),
    }
})

export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return  {
        Offence: sts.tuple(() => [Kind, OpaqueTimeSlot, sts.boolean()]),
    }
})

export const OpaqueTimeSlot = sts.bytes()

export const Kind = sts.bytes()

export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.tuple(() => [AccountId, Timepoint, AccountId, CallHash]),
        MultisigCancelled: sts.tuple(() => [AccountId, Timepoint, AccountId, CallHash]),
        MultisigExecuted: sts.tuple(() => [AccountId, Timepoint, AccountId, CallHash, DispatchResult]),
        NewMultisig: sts.tuple(() => [AccountId, AccountId, CallHash]),
    }
})

export const CallHash = sts.bytes()

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: BlockNumber,
        index: sts.number(),
    }
})

export const MulticollateralBondingCurvePoolEvent: sts.Type<MulticollateralBondingCurvePoolEvent> = sts.closedEnum(() => {
    return  {
        OptionalRewardMultiplierUpdated: sts.tuple(() => [AssetId, sts.option(() => Fixed)]),
        PoolInitialized: sts.tuple(() => [DEXId, AssetId]),
        PriceBiasChanged: Balance,
        PriceChangeConfigChanged: sts.tuple(() => [Balance, Balance]),
        ReferenceAssetChanged: AssetId,
    }
})

export const LiquidityProxyEvent: sts.Type<LiquidityProxyEvent> = sts.closedEnum(() => {
    return  {
        Exchange: sts.tuple(() => [AccountId, DEXId, AssetId, AssetId, Balance, Balance, Balance]),
    }
})

export const IrohaMigrationEvent: sts.Type<IrohaMigrationEvent> = sts.closedEnum(() => {
    return  {
        Migrated: sts.tuple(() => [String, AccountId]),
    }
})

export const String = sts.bytes()

export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: AuthorityId,
        SomeOffline: sts.array(() => IdentificationTuple),
    }
})

export const IdentificationTuple = sts.tuple(() => [ValidatorId, FullIdentification])

export const FullIdentification: sts.Type<FullIdentification> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId,
        value: sts.bigint(),
    }
})

export const ValidatorId = sts.bytes()

export const AuthorityId = sts.bytes()

export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.tuple(() => [AccountId, Balance]),
        IdentityKilled: sts.tuple(() => [AccountId, Balance]),
        IdentitySet: AccountId,
        JudgementGiven: sts.tuple(() => [AccountId, RegistrarIndex]),
        JudgementRequested: sts.tuple(() => [AccountId, RegistrarIndex]),
        JudgementUnrequested: sts.tuple(() => [AccountId, RegistrarIndex]),
        RegistrarAdded: RegistrarIndex,
        SubIdentityAdded: sts.tuple(() => [AccountId, AccountId, Balance]),
        SubIdentityRemoved: sts.tuple(() => [AccountId, AccountId, Balance]),
        SubIdentityRevoked: sts.tuple(() => [AccountId, AccountId, Balance]),
    }
})

export const RegistrarIndex = sts.number()

export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.array(() => NextAuthority),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const NextAuthority = sts.tuple(() => [AuthorityId, AuthorityWeight])

export const AuthorityWeight = sts.bigint()

export const EthBridgeEvent: sts.Type<EthBridgeEvent> = sts.closedEnum(() => {
    return  {
        ApprovalsCollected: H256,
        CancellationFailed: H256,
        IncomingRequestFinalizationFailed: H256,
        IncomingRequestFinalized: H256,
        RequestAborted: H256,
        RequestFinalizationFailed: H256,
        RequestRegistered: H256,
    }
})

export const H256 = sts.bytes()

export const ElectionsPhragmenEvent: sts.Type<ElectionsPhragmenEvent> = sts.closedEnum(() => {
    return  {
        CandidateSlashed: sts.tuple(() => [AccountId, Balance]),
        ElectionError: sts.unit(),
        EmptyTerm: sts.unit(),
        MemberKicked: AccountId,
        NewTerm: sts.array(() => sts.tuple(() => [AccountId, Balance])),
        Renounced: AccountId,
        SeatHolderSlashed: sts.tuple(() => [AccountId, Balance]),
    }
})

export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Blacklisted: Hash,
        Cancelled: ReferendumIndex,
        Delegated: sts.tuple(() => [AccountId, AccountId]),
        Executed: sts.tuple(() => [ReferendumIndex, sts.boolean()]),
        ExternalTabled: sts.unit(),
        NotPassed: ReferendumIndex,
        Passed: ReferendumIndex,
        PreimageInvalid: sts.tuple(() => [Hash, ReferendumIndex]),
        PreimageMissing: sts.tuple(() => [Hash, ReferendumIndex]),
        PreimageNoted: sts.tuple(() => [Hash, AccountId, Balance]),
        PreimageReaped: sts.tuple(() => [Hash, AccountId, Balance, AccountId]),
        PreimageUsed: sts.tuple(() => [Hash, AccountId, Balance]),
        Proposed: sts.tuple(() => [PropIndex, Balance]),
        Started: sts.tuple(() => [ReferendumIndex, VoteThreshold]),
        Tabled: sts.tuple(() => [PropIndex, Balance, sts.array(() => AccountId)]),
        Undelegated: AccountId,
        Unlocked: AccountId,
        Vetoed: sts.tuple(() => [AccountId, Hash, BlockNumber]),
    }
})

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export const PropIndex = sts.number()

export const ReferendumIndex = sts.number()

export const DEXAPIEvent: sts.Type<DEXAPIEvent> = sts.closedEnum(() => {
    return  {
        DirectExchange: sts.tuple(() => [AccountId, AccountId, DEXId, LiquiditySourceType, AssetId, AssetId, Balance, Balance, Balance]),
    }
})

export const LiquiditySourceType: sts.Type<LiquiditySourceType> = sts.closedEnum(() => {
    return  {
        BondingCurvePool: sts.unit(),
        MockPool: sts.unit(),
        MockPool2: sts.unit(),
        MockPool3: sts.unit(),
        MockPool4: sts.unit(),
        MulticollateralBondingCurvePool: sts.unit(),
        XSTPool: sts.unit(),
        XYKPool: sts.unit(),
    }
})

export const CurrenciesEvent: sts.Type<CurrenciesEvent> = sts.closedEnum(() => {
    return  {
        BalanceUpdated: sts.tuple(() => [CurrencyIdOf, AccountId, AmountOf]),
        Deposited: sts.tuple(() => [CurrencyIdOf, AccountId, BalanceOf]),
        Transferred: sts.tuple(() => [CurrencyIdOf, AccountId, AccountId, BalanceOf]),
        Withdrawn: sts.tuple(() => [CurrencyIdOf, AccountId, BalanceOf]),
    }
})

export const BalanceOf = sts.bigint()

export const AmountOf = sts.bigint()

export const CurrencyIdOf = sts.bytes()

export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: Hash,
        Closed: sts.tuple(() => [Hash, MemberCount, MemberCount]),
        Disapproved: Hash,
        Executed: sts.tuple(() => [Hash, DispatchResult]),
        MemberExecuted: sts.tuple(() => [Hash, DispatchResult]),
        Proposed: sts.tuple(() => [AccountId, ProposalIndex, Hash, MemberCount]),
        Voted: sts.tuple(() => [AccountId, Hash, sts.boolean(), MemberCount, MemberCount]),
    }
})

export const CeresStakingEvent: sts.Type<CeresStakingEvent> = sts.closedEnum(() => {
    return  {
        Deposited: sts.tuple(() => [AccountId, Balance]),
        Withdrawn: sts.tuple(() => [AccountId, Balance, Balance]),
    }
})

export const CeresLiquidityLockerEvent: sts.Type<CeresLiquidityLockerEvent> = sts.closedEnum(() => {
    return  {
        Locked: sts.tuple(() => [AccountId, Balance, BlockNumber]),
    }
})

export const BridgeMultisigEvent: sts.Type<BridgeMultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigAccountCreated: AccountId,
        MultisigApproval: sts.tuple(() => [AccountId, BridgeTimepoint, AccountId, sts.bytes()]),
        MultisigCancelled: sts.tuple(() => [AccountId, BridgeTimepoint, AccountId, sts.bytes()]),
        MultisigExecuted: sts.tuple(() => [AccountId, BridgeTimepoint, AccountId, sts.bytes(), DispatchResultWithPostInfo]),
        NewMultisig: sts.tuple(() => [AccountId, AccountId, sts.bytes()]),
    }
})

export const DispatchResultWithPostInfo = sts.result(() => PostDispatchInfo, () => DispatchErrorWithPostInfoTPostDispatchInfo)

export const DispatchErrorWithPostInfoTPostDispatchInfo: sts.Type<DispatchErrorWithPostInfoTPostDispatchInfo> = sts.struct(() => {
    return  {
        postInfo: PostDispatchInfo,
        error: DispatchError,
    }
})

export const PostDispatchInfo: sts.Type<PostDispatchInfo> = sts.struct(() => {
    return  {
        actualWeight: sts.option(() => Weight),
        paysFee: Pays,
    }
})

export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.tuple(() => [AccountId, Balance, Balance]),
        Deposit: sts.tuple(() => [AccountId, Balance]),
        DustLost: sts.tuple(() => [AccountId, Balance]),
        Endowed: sts.tuple(() => [AccountId, Balance]),
        ReserveRepatriated: sts.tuple(() => [AccountId, AccountId, Balance, BalanceStatus]),
        Reserved: sts.tuple(() => [AccountId, Balance]),
        Transfer: sts.tuple(() => [AccountId, AccountId, Balance]),
        Unreserved: sts.tuple(() => [AccountId, Balance]),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

export const AssetsEvent: sts.Type<AssetsEvent> = sts.closedEnum(() => {
    return  {
        AssetRegistered: sts.tuple(() => [AssetId, AccountId]),
        AssetSetNonMintable: AssetId,
        Burn: sts.tuple(() => [AccountId, AssetId, TAssetBalance]),
        Mint: sts.tuple(() => [AccountId, AccountId, AssetId, TAssetBalance]),
        Transfer: sts.tuple(() => [AccountId, AccountId, AssetId, TAssetBalance]),
    }
})

export const TAssetBalance = sts.bigint()

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const Priority = sts.number()

export const Period = sts.tuple(() => [BlockNumber, sts.number()])

export const BlockNumber = sts.number()

export const Proposal: sts.Type<Proposal> = sts.closedEnum(() => {
    return  {
        Assets: AssetsCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        BridgeMultisig: BridgeMultisigCall,
        CeresLiquidityLocker: CeresLiquidityLockerCall,
        CeresStaking: CeresStakingCall,
        Council: CouncilCall,
        Currencies: CurrenciesCall,
        DEXAPI: DEXAPICall,
        Democracy: DemocracyCall,
        ElectionsPhragmen: ElectionsPhragmenCall,
        EthBridge: EthBridgeCall,
        Farming: FarmingCall,
        Grandpa: GrandpaCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        IrohaMigration: IrohaMigrationCall,
        LiquidityProxy: LiquidityProxyCall,
        MulticollateralBondingCurvePool: MulticollateralBondingCurvePoolCall,
        Multisig: MultisigCall,
        Offences: OffencesCall,
        Permissions: PermissionsCall,
        PoolXYK: PoolXYKCall,
        PswapDistribution: PswapDistributionCall,
        RandomnessCollectiveFlip: RandomnessCollectiveFlipCall,
        Referrals: ReferralsCall,
        Rewards: RewardsCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Staking: StakingCall,
        System: SystemCall,
        Technical: TechnicalCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        TradingPair: TradingPairCall,
        Utility: UtilityCall,
        VestedRewards: VestedRewardsCall,
        XSTPool: XSTPoolCall,
        XorFee: XorFeeCall,
    }
})

export const XorFeeCall: sts.Type<XorFeeCall> = sts.closedEnum(() => {
    return  {
    }
})

export const XSTPoolCall: sts.Type<XSTPoolCall> = sts.closedEnum(() => {
    return  {
        enable_synthetic_asset: sts.enumStruct({
            syntheticAsset: AssetId,
        }),
        initialize_pool: sts.enumStruct({
            syntheticAssetId: AssetId,
        }),
        set_reference_asset: sts.enumStruct({
            referenceAssetId: AssetId,
        }),
    }
})

export const VestedRewardsCall: sts.Type<VestedRewardsCall> = sts.closedEnum(() => {
    return  {
        claim_rewards: sts.unit(),
        inject_market_makers: sts.enumStruct({
            snapshot: sts.array(() => sts.tuple(() => [AccountId, sts.number(), Balance])),
        }),
        set_asset_pair: sts.enumStruct({
            fromAssetId: AssetId,
            toAssetId: AssetId,
            marketMakingRewardsAllowed: sts.boolean(),
        }),
    }
})

export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Type_54,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Type_54),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Type_54),
        }),
    }
})

export const TradingPairCall: sts.Type<TradingPairCall> = sts.closedEnum(() => {
    return  {
        register: sts.enumStruct({
            dexId: DEXId,
            baseAssetId: AssetId,
            targetAssetId: AssetId,
        }),
    }
})

export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: AccountId,
        }),
        change_key: sts.enumStruct({
            new: AccountId,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: AccountId,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId),
        }),
        set_prime: sts.enumStruct({
            who: AccountId,
        }),
        swap_member: sts.enumStruct({
            remove: AccountId,
            add: AccountId,
        }),
    }
})

export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: Hash,
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const TechnicalCall: sts.Type<TechnicalCall> = sts.closedEnum(() => {
    return  {
    }
})

export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        fill_block: sts.enumStruct({
            ratio: Perbill,
        }),
        kill_prefix: sts.enumStruct({
            prefix: Key,
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => Key),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_changes_trie_config: sts.enumStruct({
            changesTrieConfig: sts.option(() => ChangesTrieConfiguration),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => KeyValue),
        }),
    }
})

export const KeyValue = sts.tuple(() => [StorageKey, StorageData])

export const StorageData = sts.bytes()

export const StorageKey = sts.bytes()

export const ChangesTrieConfiguration: sts.Type<ChangesTrieConfiguration> = sts.struct(() => {
    return  {
        digestInterval: sts.number(),
        digestLevels: sts.number(),
    }
})

export const Key = sts.bytes()

export const Perbill = sts.number()

export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            controller: LookupSource,
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: EraIndex,
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        kick: sts.enumStruct({
            who: sts.array(() => LookupSource),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => LookupSource),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId,
            era: EraIndex,
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.enumStruct({
            controller: LookupSource,
        }),
        set_history_depth: sts.enumStruct({
            newHistoryDepth: sts.number(),
            eraItemsDeleted: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId),
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
        }),
        submit_election_solution: sts.enumStruct({
            winners: sts.array(() => ValidatorIndex),
            compact: CompactAssignments,
            score: ElectionScore,
            era: EraIndex,
            size: ElectionSize,
        }),
        submit_election_solution_unsigned: sts.enumStruct({
            winners: sts.array(() => ValidatorIndex),
            compact: CompactAssignments,
            score: ElectionScore,
            era: EraIndex,
            size: ElectionSize,
        }),
        unbond: sts.enumStruct({
            value: sts.bigint(),
        }),
        validate: sts.enumStruct({
            prefs: ValidatorPrefs,
        }),
        withdraw_unbonded: sts.enumStruct({
            numSlashingSpans: sts.number(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export const ElectionSize: sts.Type<ElectionSize> = sts.struct(() => {
    return  {
        validators: sts.number(),
        nominators: sts.number(),
    }
})

export const ElectionScore = sts.array(() => sts.bigint())

export const CompactAssignments: sts.Type<CompactAssignments> = sts.struct(() => {
    return  {
        votes1: sts.array(() => sts.tuple(() => [NominatorIndexCompact, ValidatorIndexCompact])),
        votes2: sts.array(() => sts.tuple(() => [NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact])),
        votes3: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes4: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes5: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes6: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes7: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes8: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes9: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes10: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes11: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes12: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes13: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes14: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes15: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
        votes16: sts.array(() => sts.tuple(() => [NominatorIndexCompact, sts.array(() => CompactScoreCompact), ValidatorIndexCompact])),
    }
})

export const CompactScoreCompact = sts.tuple(() => [ValidatorIndexCompact, OffchainAccuracyCompact])

export const OffchainAccuracyCompact = sts.number()

export const ValidatorIndexCompact = sts.number()

export const NominatorIndexCompact = sts.number()

export const ValidatorIndex = sts.number()

export const Percent = sts.number()

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        Account: AccountId,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

export const LookupSource = sts.bytes()

export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: Keys,
            proof: sts.bytes(),
        }),
    }
})

export const Keys = sts.tuple(() => [Sr25519Public, Sr25519Public, Sr25519Public])

export const Sr25519Public = sts.bytes()

export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: BlockNumber,
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_54,
        }),
        schedule_after: sts.enumStruct({
            after: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_54,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_54,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: BlockNumber,
            maybePeriodic: sts.option(() => Period),
            priority: Priority,
            call: Type_54,
        }),
    }
})

export const RewardsCall: sts.Type<RewardsCall> = sts.closedEnum(() => {
    return  {
        claim: sts.enumStruct({
            signature: sts.bytes(),
        }),
        finalize_storage_migration: sts.enumStruct({
            amounts: sts.array(() => sts.tuple(() => [EthereumAddress, Balance])),
        }),
    }
})

export const EthereumAddress = sts.bytes()

export const ReferralsCall: sts.Type<ReferralsCall> = sts.closedEnum(() => {
    return  {
        reserve: sts.enumStruct({
            balance: Balance,
        }),
        set_referrer: sts.enumStruct({
            referrer: AccountId,
        }),
        unreserve: sts.enumStruct({
            balance: Balance,
        }),
    }
})

export const RandomnessCollectiveFlipCall: sts.Type<RandomnessCollectiveFlipCall> = sts.closedEnum(() => {
    return  {
    }
})

export const PswapDistributionCall: sts.Type<PswapDistributionCall> = sts.closedEnum(() => {
    return  {
        claim_incentive: sts.unit(),
    }
})

export const PoolXYKCall: sts.Type<PoolXYKCall> = sts.closedEnum(() => {
    return  {
        deposit_liquidity: sts.enumStruct({
            dexId: DEXIdOf,
            inputAssetA: AssetIdOf,
            inputAssetB: AssetIdOf,
            inputADesired: Balance,
            inputBDesired: Balance,
            inputAMin: Balance,
            inputBMin: Balance,
        }),
        initialize_pool: sts.enumStruct({
            dexId: DEXIdOf,
            assetA: AssetIdOf,
            assetB: AssetIdOf,
        }),
        withdraw_liquidity: sts.enumStruct({
            dexId: DEXIdOf,
            outputAssetA: AssetIdOf,
            outputAssetB: AssetIdOf,
            markerAssetDesired: Balance,
            outputAMin: Balance,
            outputBMin: Balance,
        }),
    }
})

export const AssetIdOf = sts.bytes()

export const DEXIdOf = sts.number()

export const PermissionsCall: sts.Type<PermissionsCall> = sts.closedEnum(() => {
    return  {
    }
})

export const OffencesCall: sts.Type<OffencesCall> = sts.closedEnum(() => {
    return  {
    }
})

export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            maybeTimepoint: sts.option(() => Timepoint),
            call: OpaqueCall,
            storeCall: sts.boolean(),
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId),
            call: Type_54,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

export const OpaqueCall = sts.bytes()

export const MulticollateralBondingCurvePoolCall: sts.Type<MulticollateralBondingCurvePoolCall> = sts.closedEnum(() => {
    return  {
        initialize_pool: sts.enumStruct({
            collateralAssetId: AssetId,
        }),
        set_optional_reward_multiplier: sts.enumStruct({
            collateralAssetId: AssetId,
            multiplier: sts.option(() => Fixed),
        }),
        set_price_bias: sts.enumStruct({
            priceBias: Balance,
        }),
        set_price_change_config: sts.enumStruct({
            priceChangeRate: Balance,
            priceChangeStep: Balance,
        }),
        set_reference_asset: sts.enumStruct({
            referenceAssetId: AssetId,
        }),
    }
})

export const LiquidityProxyCall: sts.Type<LiquidityProxyCall> = sts.closedEnum(() => {
    return  {
        swap: sts.enumStruct({
            dexId: DEXId,
            inputAssetId: AssetId,
            outputAssetId: AssetId,
            swapAmount: SwapAmount,
            selectedSourceTypes: sts.array(() => LiquiditySourceType),
            filterMode: FilterMode,
        }),
    }
})

export const FilterMode: sts.Type<FilterMode> = sts.closedEnum(() => {
    return  {
        AllowSelected: sts.unit(),
        Disabled: sts.unit(),
        ForbidSelected: sts.unit(),
    }
})

export const SwapAmount: sts.Type<SwapAmount> = sts.closedEnum(() => {
    return  {
        WithDesiredInput: SwapWithDesiredInput,
        WithDesiredOutput: SwapWithDesiredOutput,
    }
})

export const SwapWithDesiredOutput: sts.Type<SwapWithDesiredOutput> = sts.struct(() => {
    return  {
        desiredAmountOut: Balance,
        maxAmountIn: Balance,
    }
})

export const SwapWithDesiredInput: sts.Type<SwapWithDesiredInput> = sts.struct(() => {
    return  {
        desiredAmountIn: Balance,
        minAmountOut: Balance,
    }
})

export const IrohaMigrationCall: sts.Type<IrohaMigrationCall> = sts.closedEnum(() => {
    return  {
        migrate: sts.enumStruct({
            irohaAddress: String,
            irohaPublicKey: String,
            irohaSignature: String,
        }),
    }
})

export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return  {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: Signature,
        }),
    }
})

export const Signature = sts.bytes()

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return  {
        blockNumber: BlockNumber,
        networkState: OpaqueNetworkState,
        sessionIndex: SessionIndex,
        authorityIndex: AuthIndex,
        validatorsLen: sts.number(),
    }
})

export const AuthIndex = sts.number()

export const OpaqueNetworkState: sts.Type<OpaqueNetworkState> = sts.struct(() => {
    return  {
        peerId: OpaquePeerId,
        externalAddresses: sts.array(() => OpaqueMultiaddr),
    }
})

export const OpaqueMultiaddr = sts.bytes()

export const OpaquePeerId = sts.bytes()

export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        add_registrar: sts.enumStruct({
            account: AccountId,
        }),
        add_sub: sts.enumStruct({
            sub: LookupSource,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: RegistrarIndex,
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: LookupSource,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: LookupSource,
            judgement: IdentityJudgement,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: LookupSource,
        }),
        rename_sub: sts.enumStruct({
            sub: LookupSource,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: AccountId,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: sts.bigint(),
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => IdentityInfoAdditional),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => H160),
        image: Data,
        twitter: Data,
    }
})

export const H160 = sts.bytes()

export const IdentityInfoAdditional = sts.tuple(() => [Data, Data])

export const IdentityJudgement: sts.Type<IdentityJudgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: Balance,
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: H256,
        Keccak256: H256,
        None: sts.unit(),
        Raw0: sts.bytes(),
        Raw1: sts.bytes(),
        Raw10: sts.bytes(),
        Raw11: sts.bytes(),
        Raw12: sts.bytes(),
        Raw13: sts.bytes(),
        Raw14: sts.bytes(),
        Raw15: sts.bytes(),
        Raw16: sts.bytes(),
        Raw17: sts.bytes(),
        Raw18: sts.bytes(),
        Raw19: sts.bytes(),
        Raw2: sts.bytes(),
        Raw20: sts.bytes(),
        Raw21: sts.bytes(),
        Raw22: sts.bytes(),
        Raw23: sts.bytes(),
        Raw24: sts.bytes(),
        Raw25: sts.bytes(),
        Raw26: sts.bytes(),
        Raw27: sts.bytes(),
        Raw28: sts.bytes(),
        Raw29: sts.bytes(),
        Raw3: sts.bytes(),
        Raw30: sts.bytes(),
        Raw31: sts.bytes(),
        Raw32: sts.bytes(),
        Raw4: sts.bytes(),
        Raw5: sts.bytes(),
        Raw6: sts.bytes(),
        Raw7: sts.bytes(),
        Raw8: sts.bytes(),
        Raw9: sts.bytes(),
        Sha256: H256,
        ShaThree256: H256,
    }
})

export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return  {
        note_stalled: sts.enumStruct({
            delay: BlockNumber,
            bestFinalizedBlockNumber: BlockNumber,
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: GrandpaEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: GrandpaEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
    }
})

export const KeyOwnerProof: sts.Type<KeyOwnerProof> = sts.struct(() => {
    return  {
        session: SessionIndex,
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: ValidatorCount,
    }
})

export const ValidatorCount = sts.number()

export const GrandpaEquivocationProof: sts.Type<GrandpaEquivocationProof> = sts.struct(() => {
    return  {
        setId: SetId,
        equivocation: GrandpaEquivocation,
    }
})

export const GrandpaEquivocation: sts.Type<GrandpaEquivocation> = sts.closedEnum(() => {
    return  {
        Precommit: GrandpaEquivocationValue,
        Prevote: GrandpaEquivocationValue,
    }
})

export const GrandpaEquivocationValue: sts.Type<GrandpaEquivocationValue> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: AuthorityId,
        first: sts.tuple(() => [GrandpaPrevote, AuthoritySignature]),
        second: sts.tuple(() => [GrandpaPrevote, AuthoritySignature]),
    }
})

export const AuthoritySignature = sts.bytes()

export const GrandpaPrevote: sts.Type<GrandpaPrevote> = sts.struct(() => {
    return  {
        targetHash: Hash,
        targetNumber: BlockNumber,
    }
})

export const SetId = sts.bigint()

export const FarmingCall: sts.Type<FarmingCall> = sts.closedEnum(() => {
    return  {
        migrate_to_1_1: sts.unit(),
    }
})

export const EthBridgeCall: sts.Type<EthBridgeCall> = sts.closedEnum(() => {
    return  {
        abort_request: sts.enumStruct({
            hash: H256,
            error: DispatchError,
            networkId: BridgeNetworkId,
        }),
        add_asset: sts.enumStruct({
            assetId: AssetIdOf,
            networkId: BridgeNetworkId,
        }),
        add_peer: sts.enumStruct({
            accountId: AccountId,
            address: EthereumAddress,
            networkId: BridgeNetworkId,
        }),
        add_sidechain_token: sts.enumStruct({
            tokenAddress: EthereumAddress,
            symbol: String,
            name: String,
            decimals: sts.number(),
            networkId: BridgeNetworkId,
        }),
        approve_request: sts.enumStruct({
            ocwPublic: Public,
            hash: H256,
            signatureParams: SignatureParams,
            networkId: BridgeNetworkId,
        }),
        finalize_incoming_request: sts.enumStruct({
            hash: H256,
            networkId: BridgeNetworkId,
        }),
        force_add_peer: sts.enumStruct({
            who: AccountId,
            address: EthereumAddress,
            networkId: BridgeNetworkId,
        }),
        import_incoming_request: sts.enumStruct({
            loadIncomingRequest: LoadIncomingRequest,
            incomingRequestResult: sts.result(() => IncomingRequest, () => DispatchError),
        }),
        migrate: sts.enumStruct({
            newContractAddress: EthereumAddress,
            erc20NativeTokens: sts.array(() => EthereumAddress),
            networkId: BridgeNetworkId,
        }),
        migrate_to_0_2_0: sts.unit(),
        prepare_for_migration: sts.enumStruct({
            networkId: BridgeNetworkId,
        }),
        register_bridge: sts.enumStruct({
            bridgeContractAddress: EthereumAddress,
            initialPeers: sts.array(() => AccountId),
        }),
        register_incoming_request: sts.enumStruct({
            incomingRequest: IncomingRequest,
        }),
        remove_peer: sts.enumStruct({
            accountId: AccountId,
            networkId: BridgeNetworkId,
        }),
        request_from_sidechain: sts.enumStruct({
            ethTxHash: H256,
            kind: IncomingRequestKind,
            networkId: BridgeNetworkId,
        }),
        transfer_to_sidechain: sts.enumStruct({
            assetId: AssetIdOf,
            to: EthereumAddress,
            amount: Balance,
            networkId: BridgeNetworkId,
        }),
    }
})

export const IncomingRequestKind: sts.Type<IncomingRequestKind> = sts.closedEnum(() => {
    return  {
        Meta: IncomingMetaRequestKind,
        Transaction: IncomingTransactionRequestKind,
    }
})

export const IncomingTransactionRequestKind: sts.Type<IncomingTransactionRequestKind> = sts.closedEnum(() => {
    return  {
        AddAsset: sts.unit(),
        AddPeer: sts.unit(),
        AddPeerCompat: sts.unit(),
        Migrate: sts.unit(),
        PrepareForMigration: sts.unit(),
        RemovePeer: sts.unit(),
        RemovePeerCompat: sts.unit(),
        Transfer: sts.unit(),
        TransferXOR: sts.unit(),
    }
})

export const IncomingMetaRequestKind: sts.Type<IncomingMetaRequestKind> = sts.closedEnum(() => {
    return  {
        CancelOutgoingRequest: sts.unit(),
        MarkAsDone: sts.unit(),
    }
})

export const IncomingRequest: sts.Type<IncomingRequest> = sts.closedEnum(() => {
    return  {
        AddToken: IncomingAddToken,
        CancelOutgoingRequest: IncomingCancelOutgoingRequest,
        ChangePeers: IncomingChangePeers,
        MarkAsDone: IncomingMarkAsDoneRequest,
        Migrate: IncomingMigrate,
        PrepareForMigration: IncomingPrepareForMigration,
        Transfer: IncomingTransfer,
    }
})

export const IncomingTransfer: sts.Type<IncomingTransfer> = sts.struct(() => {
    return  {
        from: EthereumAddress,
        to: AccountId,
        assetId: AssetId,
        assetKind: AssetKind,
        amount: Balance,
        author: AccountId,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: BridgeNetworkId,
    }
})

export const AssetKind: sts.Type<AssetKind> = sts.closedEnum(() => {
    return  {
        Sidechain: sts.unit(),
        SidechainOwned: sts.unit(),
        Thischain: sts.unit(),
    }
})

export const IncomingPrepareForMigration: sts.Type<IncomingPrepareForMigration> = sts.struct(() => {
    return  {
        author: AccountId,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: BridgeNetworkId,
    }
})

export const IncomingMigrate: sts.Type<IncomingMigrate> = sts.struct(() => {
    return  {
        newContractAddress: EthereumAddress,
        author: AccountId,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: BridgeNetworkId,
    }
})

export const IncomingMarkAsDoneRequest: sts.Type<IncomingMarkAsDoneRequest> = sts.struct(() => {
    return  {
        outgoingRequestHash: H256,
        initialRequestHash: H256,
        author: AccountId,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: BridgeNetworkId,
    }
})

export const IncomingChangePeers: sts.Type<IncomingChangePeers> = sts.struct(() => {
    return  {
        peerAccountId: AccountId,
        peerAddress: EthereumAddress,
        added: sts.boolean(),
        author: AccountId,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: BridgeNetworkId,
    }
})

export const IncomingCancelOutgoingRequest: sts.Type<IncomingCancelOutgoingRequest> = sts.struct(() => {
    return  {
        outgoingRequest: OutgoingRequest,
        outgoingRequestHash: H256,
        initialRequestHash: H256,
        txInput: sts.bytes(),
        author: AccountId,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: BridgeNetworkId,
    }
})

export const OutgoingRequest: sts.Type<OutgoingRequest> = sts.closedEnum(() => {
    return  {
        AddAsset: OutgoingAddAsset,
        AddPeer: OutgoingAddPeer,
        AddToken: OutgoingAddToken,
        Migrate: OutgoingMigrate,
        PrepareForMigration: OutgoingPrepareForMigration,
        RemovePeer: OutgoingRemovePeer,
        Transfer: OutgoingTransfer,
    }
})

export const OutgoingTransfer: sts.Type<OutgoingTransfer> = sts.struct(() => {
    return  {
        from: AccountId,
        to: EthereumAddress,
        assetId: AssetId,
        amount: Balance,
        nonce: Index,
        networkId: BridgeNetworkId,
        timepoint: BridgeTimepoint,
    }
})

export const Index = sts.number()

export const OutgoingRemovePeer: sts.Type<OutgoingRemovePeer> = sts.struct(() => {
    return  {
        author: AccountId,
        peerAccountId: AccountId,
        peerAddress: EthereumAddress,
        nonce: Index,
        networkId: BridgeNetworkId,
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingPrepareForMigration: sts.Type<OutgoingPrepareForMigration> = sts.struct(() => {
    return  {
        author: AccountId,
        nonce: Index,
        networkId: BridgeNetworkId,
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingMigrate: sts.Type<OutgoingMigrate> = sts.struct(() => {
    return  {
        author: AccountId,
        newContractAddress: EthereumAddress,
        erc20NativeTokens: sts.array(() => EthereumAddress),
        nonce: Index,
        networkId: BridgeNetworkId,
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingAddToken: sts.Type<OutgoingAddToken> = sts.struct(() => {
    return  {
        author: AccountId,
        tokenAddress: EthereumAddress,
        ticker: String,
        name: String,
        decimals: sts.number(),
        nonce: Index,
        networkId: BridgeNetworkId,
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingAddPeer: sts.Type<OutgoingAddPeer> = sts.struct(() => {
    return  {
        author: AccountId,
        peerAddress: EthereumAddress,
        peerAccountId: AccountId,
        nonce: Index,
        networkId: BridgeNetworkId,
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingAddAsset: sts.Type<OutgoingAddAsset> = sts.struct(() => {
    return  {
        author: AccountId,
        assetId: AssetId,
        supply: Balance,
        nonce: Index,
        networkId: BridgeNetworkId,
        timepoint: BridgeTimepoint,
    }
})

export const IncomingAddToken: sts.Type<IncomingAddToken> = sts.struct(() => {
    return  {
        tokenAddress: EthereumAddress,
        assetId: AssetId,
        precision: BalancePrecision,
        symbol: AssetSymbol,
        name: AssetName,
        author: AccountId,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: BridgeNetworkId,
    }
})

export const AssetName = sts.bytes()

export const AssetSymbol = sts.bytes()

export const BalancePrecision = sts.number()

export const LoadIncomingRequest: sts.Type<LoadIncomingRequest> = sts.closedEnum(() => {
    return  {
        Meta: sts.tuple(() => [LoadIncomingMetaRequest, H256]),
        Transaction: LoadIncomingTransactionRequest,
    }
})

export const LoadIncomingTransactionRequest: sts.Type<LoadIncomingTransactionRequest> = sts.struct(() => {
    return  {
        author: AccountId,
        hash: H256,
        timepoint: BridgeTimepoint,
        kind: IncomingTransactionRequestKind,
        networkId: BridgeNetworkId,
    }
})

export const LoadIncomingMetaRequest: sts.Type<LoadIncomingMetaRequest> = sts.struct(() => {
    return  {
        author: AccountId,
        hash: H256,
        timepoint: BridgeTimepoint,
        kind: IncomingMetaRequestKind,
        networkId: BridgeNetworkId,
    }
})

export const SignatureParams: sts.Type<SignatureParams> = sts.struct(() => {
    return  {
        r: sts.bytes(),
        s: sts.bytes(),
        v: sts.number(),
    }
})

export const Public = sts.bytes()

export const BridgeNetworkId = sts.number()

export const ElectionsPhragmenCall: sts.Type<ElectionsPhragmenCall> = sts.closedEnum(() => {
    return  {
        clean_defunct_voters: sts.enumStruct({
            numVoters: sts.number(),
            numDefunct: sts.number(),
        }),
        remove_member: sts.enumStruct({
            who: LookupSource,
            hasReplacement: sts.boolean(),
        }),
        remove_voter: sts.unit(),
        renounce_candidacy: sts.enumStruct({
            renouncing: Renouncing,
        }),
        submit_candidacy: sts.enumStruct({
            candidateCount: sts.number(),
        }),
        vote: sts.enumStruct({
            votes: sts.array(() => AccountId),
            value: sts.bigint(),
        }),
    }
})

export const Renouncing: sts.Type<Renouncing> = sts.closedEnum(() => {
    return  {
        Candidate: sts.number(),
        Member: sts.unit(),
        RunnerUp: sts.unit(),
    }
})

export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        blacklist: sts.enumStruct({
            proposalHash: Hash,
            maybeRefIndex: sts.option(() => ReferendumIndex),
        }),
        cancel_proposal: sts.enumStruct({
            propIndex: sts.number(),
        }),
        cancel_queued: sts.enumStruct({
            which: ReferendumIndex,
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: AccountId,
            conviction: Conviction,
            balance: BalanceOf,
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: ReferendumIndex,
        }),
        enact_proposal: sts.enumStruct({
            proposalHash: Hash,
            index: ReferendumIndex,
        }),
        external_propose: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_default: sts.enumStruct({
            proposalHash: Hash,
        }),
        external_propose_majority: sts.enumStruct({
            proposalHash: Hash,
        }),
        fast_track: sts.enumStruct({
            proposalHash: Hash,
            votingPeriod: BlockNumber,
            delay: BlockNumber,
        }),
        note_imminent_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_imminent_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        note_preimage_operational: sts.enumStruct({
            encodedProposal: sts.bytes(),
        }),
        propose: sts.enumStruct({
            proposalHash: Hash,
            value: sts.bigint(),
        }),
        reap_preimage: sts.enumStruct({
            proposalHash: Hash,
            proposalLenUpperBound: sts.number(),
        }),
        remove_other_vote: sts.enumStruct({
            target: AccountId,
            index: ReferendumIndex,
        }),
        remove_vote: sts.enumStruct({
            index: ReferendumIndex,
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: AccountId,
        }),
        veto_external: sts.enumStruct({
            proposalHash: Hash,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: AccountVoteSplit,
        Standard: AccountVoteStandard,
    }
})

export const AccountVoteStandard: sts.Type<AccountVoteStandard> = sts.struct(() => {
    return  {
        vote: Vote,
        balance: Balance,
    }
})

export const Vote = sts.number()

export const AccountVoteSplit: sts.Type<AccountVoteSplit> = sts.struct(() => {
    return  {
        aye: Balance,
        nay: Balance,
    }
})

export const Conviction: sts.Type<Conviction> = sts.closedEnum(() => {
    return  {
        Locked1x: sts.unit(),
        Locked2x: sts.unit(),
        Locked3x: sts.unit(),
        Locked4x: sts.unit(),
        Locked5x: sts.unit(),
        Locked6x: sts.unit(),
        None: sts.unit(),
    }
})

export const DEXAPICall: sts.Type<DEXAPICall> = sts.closedEnum(() => {
    return  {
        swap: sts.enumStruct({
            dexId: DEXId,
            liquiditySourceType: LiquiditySourceType,
            inputAssetId: AssetId,
            outputAssetId: AssetId,
            amount: Balance,
            limit: Balance,
            swapVariant: SwapVariant,
            receiver: sts.option(() => AccountId),
        }),
    }
})

export const SwapVariant: sts.Type<SwapVariant> = sts.closedEnum(() => {
    return  {
        WithDesiredInput: sts.unit(),
        WithDesiredOutput: sts.unit(),
    }
})

export const CurrenciesCall: sts.Type<CurrenciesCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            dest: LookupSource,
            currencyId: CurrencyIdOf,
            amount: sts.bigint(),
        }),
        transfer_native_currency: sts.enumStruct({
            dest: LookupSource,
            amount: sts.bigint(),
        }),
        update_balance: sts.enumStruct({
            who: LookupSource,
            currencyId: CurrencyIdOf,
            amount: AmountOf,
        }),
    }
})

export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: Hash,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: Hash,
        }),
        execute: sts.enumStruct({
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Proposal,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId),
            prime: sts.option(() => AccountId),
            oldCount: MemberCount,
        }),
        vote: sts.enumStruct({
            proposal: Hash,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

export const CeresStakingCall: sts.Type<CeresStakingCall> = sts.closedEnum(() => {
    return  {
        deposit: sts.enumStruct({
            amount: Balance,
        }),
        withdraw: sts.unit(),
    }
})

export const CeresLiquidityLockerCall: sts.Type<CeresLiquidityLockerCall> = sts.closedEnum(() => {
    return  {
        change_ceres_fee: sts.enumStruct({
            ceresFee: Balance,
        }),
        lock_liquidity: sts.enumStruct({
            assetA: AssetIdOf,
            assetB: AssetIdOf,
            unlockingBlock: BlockNumber,
            percentageOfPoolTokens: Balance,
            option: sts.boolean(),
        }),
    }
})

export const BridgeMultisigCall: sts.Type<BridgeMultisigCall> = sts.closedEnum(() => {
    return  {
        add_signatory: sts.enumStruct({
            newMember: AccountId,
        }),
        approve_as_multi: sts.enumStruct({
            id: AccountId,
            maybeTimepoint: sts.option(() => BridgeTimepoint),
            callHash: sts.bytes(),
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            id: AccountId,
            maybeTimepoint: sts.option(() => BridgeTimepoint),
            call: OpaqueCall,
            storeCall: sts.boolean(),
            maxWeight: Weight,
        }),
        as_multi_threshold_1: sts.enumStruct({
            id: AccountId,
            call: Type_54,
            timepoint: BridgeTimepoint,
        }),
        cancel_as_multi: sts.enumStruct({
            id: AccountId,
            timepoint: BridgeTimepoint,
            callHash: sts.bytes(),
        }),
        register_multisig: sts.enumStruct({
            signatories: sts.array(() => AccountId),
        }),
        remove_signatory: sts.enumStruct({
            signatory: AccountId,
        }),
    }
})

export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: LookupSource,
            dest: LookupSource,
            value: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: LookupSource,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: LookupSource,
            value: sts.bigint(),
        }),
    }
})

export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return  {
        report_equivocation: sts.enumStruct({
            equivocationProof: BabeEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: BabeEquivocationProof,
            keyOwnerProof: KeyOwnerProof,
        }),
    }
})

export const BabeEquivocationProof: sts.Type<BabeEquivocationProof> = sts.struct(() => {
    return  {
        offender: AuthorityId,
        slotNumber: SlotNumber,
        firstHeader: Header,
        secondHeader: Header,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: Hash,
        number: sts.number(),
        stateRoot: Hash,
        extrinsicsRoot: Hash,
        digest: Digest,
    }
})

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return  {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return  {
        AuthoritiesChange: sts.array(() => AuthorityId),
        ChangesTrieRoot: Hash,
        ChangesTrieSignal: ChangesTrieSignal,
        Consensus: Consensus,
        Other: sts.bytes(),
        PreRuntime: PreRuntime,
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: Seal,
        SealV0: SealV0,
    }
})

export const SealV0 = sts.tuple(() => [sts.bigint(), Signature])

export const Seal = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const PreRuntime = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const Consensus = sts.tuple(() => [ConsensusEngineId, sts.bytes()])

export const ConsensusEngineId = sts.bytes()

export const ChangesTrieSignal: sts.Type<ChangesTrieSignal> = sts.closedEnum(() => {
    return  {
        NewConfiguration: sts.option(() => ChangesTrieConfiguration),
    }
})

export const SlotNumber = sts.bigint()

export const AuthorshipCall: sts.Type<AuthorshipCall> = sts.closedEnum(() => {
    return  {
        set_uncles: sts.enumStruct({
            newUncles: sts.array(() => Header),
        }),
    }
})

export const AssetsCall: sts.Type<AssetsCall> = sts.closedEnum(() => {
    return  {
        burn: sts.enumStruct({
            assetId: AssetId,
            amount: TAssetBalance,
        }),
        mint: sts.enumStruct({
            assetId: AssetId,
            to: AccountId,
            amount: TAssetBalance,
        }),
        register: sts.enumStruct({
            symbol: AssetSymbol,
            name: AssetName,
            initialSupply: TAssetBalance,
            isMintable: sts.boolean(),
            isNft: sts.boolean(),
            optContentSrc: sts.option(() => ContentSource),
            optDesc: sts.option(() => Description),
        }),
        set_non_mintable: sts.enumStruct({
            assetId: AssetId,
        }),
        transfer: sts.enumStruct({
            assetId: AssetId,
            to: AccountId,
            amount: TAssetBalance,
        }),
    }
})

export const Description = sts.bytes()

export const ContentSource = sts.bytes()

export const BridgeTimepoint: sts.Type<BridgeTimepoint> = sts.struct(() => {
    return  {
        height: MultiChainHeight,
        index: sts.number(),
    }
})

export const MultiChainHeight: sts.Type<MultiChainHeight> = sts.closedEnum(() => {
    return  {
        Sidechain: sts.bigint(),
        Thischain: BlockNumber,
    }
})

export const Type_54: sts.Type<Type_54> = sts.closedEnum(() => {
    return  {
        Assets: AssetsCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        Balances: BalancesCall,
        BridgeMultisig: BridgeMultisigCall,
        CeresLiquidityLocker: CeresLiquidityLockerCall,
        CeresStaking: CeresStakingCall,
        Council: CouncilCall,
        Currencies: CurrenciesCall,
        DEXAPI: DEXAPICall,
        Democracy: DemocracyCall,
        ElectionsPhragmen: ElectionsPhragmenCall,
        EthBridge: EthBridgeCall,
        Farming: FarmingCall,
        Grandpa: GrandpaCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        IrohaMigration: IrohaMigrationCall,
        LiquidityProxy: LiquidityProxyCall,
        MulticollateralBondingCurvePool: MulticollateralBondingCurvePoolCall,
        Multisig: MultisigCall,
        Offences: OffencesCall,
        Permissions: PermissionsCall,
        PoolXYK: PoolXYKCall,
        PswapDistribution: PswapDistributionCall,
        RandomnessCollectiveFlip: RandomnessCollectiveFlipCall,
        Referrals: ReferralsCall,
        Rewards: RewardsCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Staking: StakingCall,
        System: SystemCall,
        Technical: TechnicalCall,
        TechnicalCommittee: TechnicalCommitteeCall,
        TechnicalMembership: TechnicalMembershipCall,
        Timestamp: TimestampCall,
        TradingPair: TradingPairCall,
        Utility: UtilityCall,
        VestedRewards: VestedRewardsCall,
        XSTPool: XSTPoolCall,
        XorFee: XorFeeCall,
    }
})

export const AccountId = sts.bytes()
