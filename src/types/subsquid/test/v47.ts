import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface HermesPollInfo {
    creator: AccountId32
    hermesLocked: bigint
    pollStartTimestamp: bigint
    pollEndTimestamp: bigint
    title: string
    description: string
    creatorHermesWithdrawn: boolean
}

export const HermesPollInfo: sts.Type<HermesPollInfo> = sts.struct(() => {
    return  {
        creator: AccountId32,
        hermesLocked: sts.bigint(),
        pollStartTimestamp: sts.bigint(),
        pollEndTimestamp: sts.bigint(),
        title: sts.string(),
        description: sts.string(),
        creatorHermesWithdrawn: sts.boolean(),
    }
})

export type AccountId32 = Bytes

export interface HermesVotingInfo {
    votingOption: VotingOption
    numberOfHermes: bigint
    hermesWithdrawn: boolean
}

export type VotingOption = VotingOption_No | VotingOption_Yes

export interface VotingOption_No {
    __kind: 'No'
}

export interface VotingOption_Yes {
    __kind: 'Yes'
}

export const HermesVotingInfo: sts.Type<HermesVotingInfo> = sts.struct(() => {
    return  {
        votingOption: VotingOption,
        numberOfHermes: sts.bigint(),
        hermesWithdrawn: sts.boolean(),
    }
})

export interface AssetId32 {
    code: Bytes
}

export interface ILOInfo {
    iloOrganizer: AccountId32
    tokensForIlo: bigint
    tokensForLiquidity: bigint
    iloPrice: bigint
    softCap: bigint
    hardCap: bigint
    minContribution: bigint
    maxContribution: bigint
    refundType: boolean
    liquidityPercent: bigint
    listingPrice: bigint
    lockupDays: number
    startTimestamp: bigint
    endTimestamp: bigint
    contributorsVesting: ContributorsVesting
    teamVesting: TeamVesting
    soldTokens: bigint
    fundsRaised: bigint
    succeeded: boolean
    failed: boolean
    lpTokens: bigint
    claimedLpTokens: boolean
    finishTimestamp: bigint
    baseAsset: AssetId32
}

export interface TeamVesting {
    teamVestingTotalTokens: bigint
    teamVestingFirstReleasePercent: bigint
    teamVestingPeriod: bigint
    teamVestingPercent: bigint
}

export interface ContributorsVesting {
    firstReleasePercent: bigint
    vestingPeriod: bigint
    vestingPercent: bigint
}

export const ILOInfo: sts.Type<ILOInfo> = sts.struct(() => {
    return  {
        iloOrganizer: AccountId32,
        tokensForIlo: sts.bigint(),
        tokensForLiquidity: sts.bigint(),
        iloPrice: sts.bigint(),
        softCap: sts.bigint(),
        hardCap: sts.bigint(),
        minContribution: sts.bigint(),
        maxContribution: sts.bigint(),
        refundType: sts.boolean(),
        liquidityPercent: sts.bigint(),
        listingPrice: sts.bigint(),
        lockupDays: sts.number(),
        startTimestamp: sts.bigint(),
        endTimestamp: sts.bigint(),
        contributorsVesting: ContributorsVesting,
        teamVesting: TeamVesting,
        soldTokens: sts.bigint(),
        fundsRaised: sts.bigint(),
        succeeded: sts.boolean(),
        failed: sts.boolean(),
        lpTokens: sts.bigint(),
        claimedLpTokens: sts.boolean(),
        finishTimestamp: sts.bigint(),
        baseAsset: AssetId32,
    }
})

export const TeamVesting: sts.Type<TeamVesting> = sts.struct(() => {
    return  {
        teamVestingTotalTokens: sts.bigint(),
        teamVestingFirstReleasePercent: sts.bigint(),
        teamVestingPeriod: sts.bigint(),
        teamVestingPercent: sts.bigint(),
    }
})

export const ContributorsVesting: sts.Type<ContributorsVesting> = sts.struct(() => {
    return  {
        firstReleasePercent: sts.bigint(),
        vestingPeriod: sts.bigint(),
        vestingPercent: sts.bigint(),
    }
})

export interface ScheduledV3 {
    maybeId?: (Bytes | undefined)
    priority: number
    call: MaybeHashed
    maybePeriodic?: ([number, number] | undefined)
    origin: OriginCaller
}

export type OriginCaller = OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_202
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_203
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export type RawOrigin = RawOrigin_None | RawOrigin_Root | RawOrigin_Signed

export interface RawOrigin_None {
    __kind: 'None'
}

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: AccountId32
}

export type Void = never

export type Type_203 = Type_203_Member | Type_203_Members | Type_203__Phantom

export interface Type_203_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_203_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_203__Phantom {
    __kind: '_Phantom'
}

export type Type_202 = Type_202_Member | Type_202_Members | Type_202__Phantom

export interface Type_202_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_202_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_202__Phantom {
    __kind: '_Phantom'
}

export type MaybeHashed = MaybeHashed_Hash | MaybeHashed_Value

export interface MaybeHashed_Hash {
    __kind: 'Hash'
    value: H256
}

export interface MaybeHashed_Value {
    __kind: 'Value'
    value: Call
}

export const ScheduledV3: sts.Type<ScheduledV3> = sts.struct(() => {
    return  {
        maybeId: sts.option(() => sts.bytes()),
        priority: sts.number(),
        call: MaybeHashed,
        maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
        origin: OriginCaller,
    }
})

export type H256 = Bytes

export type Call = Call_Assets | Call_Authorship | Call_Babe | Call_BagsList | Call_Balances | Call_Band | Call_BridgeMultisig | Call_CeresGovernancePlatform | Call_CeresLaunchpad | Call_CeresLiquidityLocker | Call_CeresStaking | Call_CeresTokenLocker | Call_Council | Call_Currencies | Call_DEXAPI | Call_DemeterFarmingPlatform | Call_Democracy | Call_ElectionProviderMultiPhase | Call_ElectionsPhragmen | Call_EthBridge | Call_Faucet | Call_Grandpa | Call_HermesGovernancePlatform | Call_Identity | Call_ImOnline | Call_IrohaMigration | Call_LiquidityProxy | Call_MulticollateralBondingCurvePool | Call_Multisig | Call_OracleProxy | Call_Permissions | Call_PoolXYK | Call_PswapDistribution | Call_Referrals | Call_Rewards | Call_Scheduler | Call_Session | Call_Staking | Call_Sudo | Call_System | Call_Technical | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_TradingPair | Call_Utility | Call_VestedRewards | Call_XSTPool | Call_XorFee

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_BagsList {
    __kind: 'BagsList'
    value: BagsListCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Band {
    __kind: 'Band'
    value: BandCall
}

export interface Call_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigCall
}

export interface Call_CeresGovernancePlatform {
    __kind: 'CeresGovernancePlatform'
    value: CeresGovernancePlatformCall
}

export interface Call_CeresLaunchpad {
    __kind: 'CeresLaunchpad'
    value: CeresLaunchpadCall
}

export interface Call_CeresLiquidityLocker {
    __kind: 'CeresLiquidityLocker'
    value: CeresLiquidityLockerCall
}

export interface Call_CeresStaking {
    __kind: 'CeresStaking'
    value: CeresStakingCall
}

export interface Call_CeresTokenLocker {
    __kind: 'CeresTokenLocker'
    value: CeresTokenLockerCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_Currencies {
    __kind: 'Currencies'
    value: CurrenciesCall
}

export interface Call_DEXAPI {
    __kind: 'DEXAPI'
    value: DEXAPICall
}

export interface Call_DemeterFarmingPlatform {
    __kind: 'DemeterFarmingPlatform'
    value: DemeterFarmingPlatformCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenCall
}

export interface Call_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeCall
}

export interface Call_Faucet {
    __kind: 'Faucet'
    value: FaucetCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_HermesGovernancePlatform {
    __kind: 'HermesGovernancePlatform'
    value: HermesGovernancePlatformCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationCall
}

export interface Call_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyCall
}

export interface Call_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_OracleProxy {
    __kind: 'OracleProxy'
    value: OracleProxyCall
}

export interface Call_Permissions {
    __kind: 'Permissions'
    value: PermissionsCall
}

export interface Call_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKCall
}

export interface Call_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionCall
}

export interface Call_Referrals {
    __kind: 'Referrals'
    value: ReferralsCall
}

export interface Call_Rewards {
    __kind: 'Rewards'
    value: RewardsCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Technical {
    __kind: 'Technical'
    value: TechnicalCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsCall
}

export interface Call_XSTPool {
    __kind: 'XSTPool'
    value: XSTPoolCall
}

export interface Call_XorFee {
    __kind: 'XorFee'
    value: XorFeeCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XorFeeCall = XorFeeCall_update_multiplier

/**
 * Update the multiplier for weight -> fee conversion.
 */
export interface XorFeeCall_update_multiplier {
    __kind: 'update_multiplier'
    newMultiplier: FixedU128
}

export type FixedU128 = bigint

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XSTPoolCall = XSTPoolCall_enable_synthetic_asset | XSTPoolCall_initialize_pool | XSTPoolCall_set_reference_asset | XSTPoolCall_set_synthetic_base_asset_floor_price

export interface XSTPoolCall_enable_synthetic_asset {
    __kind: 'enable_synthetic_asset'
    syntheticAsset: AssetId32
}

/**
 * Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
 */
export interface XSTPoolCall_initialize_pool {
    __kind: 'initialize_pool'
    syntheticAssetId: AssetId32
}

/**
 * Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
 */
export interface XSTPoolCall_set_reference_asset {
    __kind: 'set_reference_asset'
    referenceAssetId: AssetId32
}

/**
 * Set floor price for the synthetic base asset
 * 
 * - `origin`: root account
 * - `floor_price`: floor price for the synthetic base asset
 */
export interface XSTPoolCall_set_synthetic_base_asset_floor_price {
    __kind: 'set_synthetic_base_asset_floor_price'
    floorPrice: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestedRewardsCall = VestedRewardsCall_claim_crowdloan_rewards | VestedRewardsCall_claim_rewards | VestedRewardsCall_update_rewards

export interface VestedRewardsCall_claim_crowdloan_rewards {
    __kind: 'claim_crowdloan_rewards'
    assetId: AssetId32
}

/**
 * Claim all available PSWAP rewards by account signing this transaction.
 */
export interface VestedRewardsCall_claim_rewards {
    __kind: 'claim_rewards'
}

export interface VestedRewardsCall_update_rewards {
    __kind: 'update_rewards'
    rewards: [AccountId32, [RewardReason, bigint][]][]
}

export type RewardReason = RewardReason_BuyOnBondingCurve | RewardReason_Crowdloan | RewardReason_DeprecatedMarketMakerVolume | RewardReason_LiquidityProvisionFarming | RewardReason_Unspecified

export interface RewardReason_BuyOnBondingCurve {
    __kind: 'BuyOnBondingCurve'
}

export interface RewardReason_Crowdloan {
    __kind: 'Crowdloan'
}

export interface RewardReason_DeprecatedMarketMakerVolume {
    __kind: 'DeprecatedMarketMakerVolume'
}

export interface RewardReason_LiquidityProvisionFarming {
    __kind: 'LiquidityProvisionFarming'
}

export interface RewardReason_Unspecified {
    __kind: 'Unspecified'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TradingPairCall = TradingPairCall_register

/**
 * Register trading pair on the given DEX.
 * Can be only called by the DEX owner.
 * 
 * - `dex_id`: ID of the exchange.
 * - `base_asset_id`: base asset ID.
 * - `target_asset_id`: target asset ID.
 */
export interface TradingPairCall_register {
    __kind: 'register'
    dexId: number
    baseAssetId: AssetId32
    targetAssetId: AssetId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_change_key | TechnicalMembershipCall_clear_prime | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_swap_member

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: AccountId32
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: AccountId32[]
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: AccountId32
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: AccountId32
    add: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: Perbill
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

export type Perbill = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: AccountId32
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: AccountId32
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_kick | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_history_depth | StakingCall_set_invulnerables | StakingCall_set_payee | StakingCall_set_staking_configs | StakingCall_set_validator_count | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

/**
 * Take the origin account as a stash and lock up `value` of its balance. `controller` will
 * be the account that controls it.
 * 
 * `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 * Emits `Bonded`.
 * # <weight>
 * - Independent of the arguments. Moderate complexity.
 * - O(1).
 * - Three extra DB entries.
 * 
 * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 * unless the `origin` falls below _existential deposit_ and gets removed as dust.
 * ------------------
 * # </weight>
 */
export interface StakingCall_bond {
    __kind: 'bond'
    controller: AccountId32
    value: bigint
    payee: RewardDestination
}

/**
 * Add some extra amount that have appeared in the stash `free_balance` into the balance up
 * for staking.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * Use this if there are additional funds in your stash account that you wish to bond.
 * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
 * any limitation on the amount that can be added.
 * 
 * Emits `Bonded`.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - O(1).
 * # </weight>
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * Cancel enactment of a deferred slash.
 * 
 * Can be called by the `T::SlashCancelOrigin`.
 * 
 * Parameters: era and indices of the slashes for that era to kill.
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * Declare no desire to either validate or nominate.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains one read.
 * - Writes are limited to the `origin` account key.
 * # </weight>
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * Declare a `controller` to stop participating as either a validator or nominator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_, but can be called by anyone.
 * 
 * If the caller is the same as the controller being targeted, then no further checks are
 * enforced, and this function behaves just like `chill`.
 * 
 * If the caller is different than the controller being targeted, the following conditions
 * must be met:
 * 
 * * `controller` must belong to a nominator who has become non-decodable,
 * 
 * Or:
 * 
 * * A `ChillThreshold` must be set and checked which defines how close to the max
 *   nominators or validators we must reach before users can start chilling one-another.
 * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
 *   how close we are to the threshold.
 * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
 *   if this is a person that should be chilled because they have not met the threshold
 *   bond required.
 * 
 * This can be helpful if bond requirements are updated, and we need to remove old users
 * who do not satisfy these requirements.
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: AccountId32
}

/**
 * Force a validator to have at least the minimum commission. This will not affect a
 * validator who already has a commission greater than or equal to the minimum. Any account
 * can call this.
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: AccountId32
}

/**
 * Force there to be a new era at the end of the next session. After this, it will be
 * reset to normal (non-forced) behaviour.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 * 
 * # <weight>
 * - No arguments.
 * - Weight: O(1)
 * - Write ForceEra
 * # </weight>
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * Force there to be a new era at the end of sessions indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * Force there to be no new eras indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * Thus the election process may be ongoing when this is called. In this case the
 * election will continue until the next era is triggered.
 * 
 * # <weight>
 * - No arguments.
 * - Weight: O(1)
 * - Write: ForceEra
 * # </weight>
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * Force a current staker to become completely unstaked, immediately.
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * Increments the ideal number of validators.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * Remove the given nominations from the calling validator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * - `who`: A list of nominator stash accounts who are nominating this validator which
 *   should no longer be nominating this validator.
 * 
 * Note: Making this call only makes sense if you first set the validator preferences to
 * block any further nominations.
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: AccountId32[]
}

/**
 * Declare the desire to nominate `targets` for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - The transaction's complexity is proportional to the size of `targets` (N)
 * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
 * - Both the reads and writes follow a similar pattern.
 * # </weight>
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: AccountId32[]
}

/**
 * Pay out all the stakers behind a single validator for a single era.
 * 
 * - `validator_stash` is the stash account of the validator. Their nominators, up to
 *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 * - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 * The origin of this call must be _Signed_. Any account can call this function, even if
 * it is not one of the stakers.
 * 
 * # <weight>
 * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
 * - Contains a limited number of reads and writes.
 * -----------
 * N is the Number of payouts for the validator (including the validator)
 * Weight:
 * - Reward Destination Staked: O(N)
 * - Reward Destination Controller (Creating): O(N)
 * 
 *   NOTE: weights are assuming that payouts are made to alive stash account (Staked).
 *   Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
 * # </weight>
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: AccountId32
    era: number
}

/**
 * Remove all data structures concerning a staker/stash once it is at a state where it can
 * be considered `dust` in the staking system. The requirements are:
 * 
 * 1. the `total_balance` of the stash is below existential deposit.
 * 2. or, the `ledger.total` of the stash is below existential deposit.
 * 
 * The former can happen in cases like a slash; the latter when a fully unbonded account
 * is still receiving staking rewards in `RewardDestination::Staked`.
 * 
 * It can be called by anyone, as long as `stash` meets the above requirements.
 * 
 * Refunds the transaction fees upon successful execution.
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: AccountId32
    numSlashingSpans: number
}

/**
 * Rebond a portion of the stash scheduled to be unlocked.
 * 
 * The dispatch origin must be signed by the controller.
 * 
 * # <weight>
 * - Time complexity: O(L), where L is unlocking chunks
 * - Bounded by `MaxUnlockingChunks`.
 * - Storage changes: Can't increase storage, only decrease it.
 * # </weight>
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * Scale up the ideal number of validators by a factor.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Same as [`Self::set_validator_count`].
 * # </weight>
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: Percent
}

/**
 * (Re-)set the controller of a stash.
 * 
 * Effects will be felt instantly (as soon as this function is completed successfully).
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ----------
 * Weight: O(1)
 * DB Weight:
 * - Read: Bonded, Ledger New Controller, Ledger Old Controller
 * - Write: Bonded, Ledger New Controller, Ledger Old Controller
 * # </weight>
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
    controller: AccountId32
}

/**
 * Set `HistoryDepth` value. This function will delete any history information
 * when `HistoryDepth` is reduced.
 * 
 * Parameters:
 * - `new_history_depth`: The new history depth you would like to set.
 * - `era_items_deleted`: The number of items that will be deleted by this dispatch. This
 *   should report all the storage items that will be deleted by clearing old era history.
 *   Needed to report an accurate weight for the dispatch. Trusted by `Root` to report an
 *   accurate number.
 * 
 * Origin must be root.
 * 
 * # <weight>
 * - E: Number of history depths removed, i.e. 10 -> 7 = 3
 * - Weight: O(E)
 * - DB Weight:
 *     - Reads: Current Era, History Depth
 *     - Writes: History Depth
 *     - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
 *     - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake,
 *       ErasStartSessionIndex
 * # </weight>
 */
export interface StakingCall_set_history_depth {
    __kind: 'set_history_depth'
    newHistoryDepth: number
    eraItemsDeleted: number
}

/**
 * Set the validators who cannot be slashed (if any).
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId32[]
}

/**
 * (Re-)set the payment target for a controller.
 * 
 * Effects will be felt instantly (as soon as this function is completed successfully).
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * # <weight>
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ---------
 * - Weight: O(1)
 * - DB Weight:
 *     - Read: Ledger
 *     - Write: Payee
 * # </weight>
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * Update the various staking configurations .
 * 
 * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
 * * `min_validator_bond`: The minimum active bond needed to be a validator.
 * * `max_nominator_count`: The max number of users who can be a nominator at once. When
 *   set to `None`, no limit is enforced.
 * * `max_validator_count`: The max number of users who can be a validator at once. When
 *   set to `None`, no limit is enforced.
 * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
 *   should be filled in order for the `chill_other` transaction to work.
 * * `min_commission`: The minimum amount of commission that each validators must maintain.
 *   This is checked only upon calling `validate`. Existing validators are not affected.
 * 
 * Origin must be Root to call this function.
 * 
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_212
    maxValidatorCount: Type_212
    chillThreshold: Type_213
    minCommission: Type_214
}

/**
 * Sets the ideal number of validators.
 * 
 * The dispatch origin must be Root.
 * 
 * # <weight>
 * Weight: O(1)
 * Write: Validator Count
 * # </weight>
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 * period ends. If this leaves an amount actively bonded less than
 * T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 * the funds out of management ready for transfer.
 * 
 * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
 * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 * to be called first to remove some of the chunks (if possible).
 * 
 * If a user encounters the `InsufficientBond` error when calling this extrinsic,
 * they should call `chill` first in order to free up their bonded funds.
 * 
 * Emits `Unbonded`.
 * 
 * See also [`Call::withdraw_unbonded`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * Declare the desire to validate for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 * This essentially frees up that balance to be used by the stash account to do
 * whatever it wants.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller.
 * 
 * Emits `Withdrawn`.
 * 
 * See also [`Call::unbond`].
 * 
 * # <weight>
 * Complexity O(S) where S is the number of slashing spans to remove
 * NOTE: Weight annotation is the kill scenario, we refund otherwise.
 * # </weight>
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type Type_214 = Type_214_Noop | Type_214_Remove | Type_214_Set

export interface Type_214_Noop {
    __kind: 'Noop'
}

export interface Type_214_Remove {
    __kind: 'Remove'
}

export interface Type_214_Set {
    __kind: 'Set'
    value: Perbill
}

export type Type_213 = Type_213_Noop | Type_213_Remove | Type_213_Set

export interface Type_213_Noop {
    __kind: 'Noop'
}

export interface Type_213_Remove {
    __kind: 'Remove'
}

export interface Type_213_Set {
    __kind: 'Set'
    value: Percent
}

export type Type_212 = Type_212_Noop | Type_212_Remove | Type_212_Set

export interface Type_212_Noop {
    __kind: 'Noop'
}

export interface Type_212_Remove {
    __kind: 'Remove'
}

export interface Type_212_Set {
    __kind: 'Set'
    value: number
}

export type ConfigOp = ConfigOp_Noop | ConfigOp_Remove | ConfigOp_Set

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export type Percent = number

export type RewardDestination = RewardDestination_Account | RewardDestination_Controller | RewardDestination_None | RewardDestination_Staked | RewardDestination_Stash

export interface RewardDestination_Account {
    __kind: 'Account'
    value: AccountId32
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

export interface SessionKeys {
    babe: Bytes
    grandpa: Public
    imOnline: Bytes
    beefy: Bytes
}

export type Public = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_cancel | SchedulerCall_cancel_named | SchedulerCall_schedule | SchedulerCall_schedule_after | SchedulerCall_schedule_named | SchedulerCall_schedule_named_after

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Bytes
}

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Bytes
    when: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Bytes
    after: number
    maybePeriodic?: ([number, number] | undefined)
    priority: number
    call: MaybeHashed
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RewardsCall = RewardsCall_add_umi_nft_receivers | RewardsCall_claim

/**
 * Finalize the update of unclaimed VAL data in storage
 * Add addresses, who will receive UMI NFT rewards.
 */
export interface RewardsCall_add_umi_nft_receivers {
    __kind: 'add_umi_nft_receivers'
    receivers: H160[]
}

/**
 * Claim the reward with signature.
 */
export interface RewardsCall_claim {
    __kind: 'claim'
    signature: Bytes
}

export type H160 = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ReferralsCall = ReferralsCall_reserve | ReferralsCall_set_referrer | ReferralsCall_unreserve

/**
 * Reserves the balance from the account for a special balance that can be used to pay referrals' fees
 */
export interface ReferralsCall_reserve {
    __kind: 'reserve'
    balance: bigint
}

/**
 * Sets the referrer for the account
 */
export interface ReferralsCall_set_referrer {
    __kind: 'set_referrer'
    referrer: AccountId32
}

/**
 * Unreserves the balance and transfers it back to the account
 */
export interface ReferralsCall_unreserve {
    __kind: 'unreserve'
    balance: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PswapDistributionCall = PswapDistributionCall_claim_incentive

export interface PswapDistributionCall_claim_incentive {
    __kind: 'claim_incentive'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PoolXYKCall = PoolXYKCall_deposit_liquidity | PoolXYKCall_initialize_pool | PoolXYKCall_withdraw_liquidity

export interface PoolXYKCall_deposit_liquidity {
    __kind: 'deposit_liquidity'
    dexId: number
    inputAssetA: AssetId32
    inputAssetB: AssetId32
    inputADesired: bigint
    inputBDesired: bigint
    inputAMin: bigint
    inputBMin: bigint
}

export interface PoolXYKCall_initialize_pool {
    __kind: 'initialize_pool'
    dexId: number
    assetA: AssetId32
    assetB: AssetId32
}

export interface PoolXYKCall_withdraw_liquidity {
    __kind: 'withdraw_liquidity'
    dexId: number
    outputAssetA: AssetId32
    outputAssetB: AssetId32
    markerAssetDesired: bigint
    outputAMin: bigint
    outputBMin: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PermissionsCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OracleProxyCall = OracleProxyCall_disable_oracle | OracleProxyCall_enable_oracle

/**
 * Disables a specified oracle
 * 
 * Checks if the caller is root
 * 
 * - `origin`: the sudo account
 * - `oracle`: oracle variant which should be disabled
 */
export interface OracleProxyCall_disable_oracle {
    __kind: 'disable_oracle'
    oracle: Oracle
}

/**
 * Enables a specified oracle
 * 
 * Checks if the caller is root
 * 
 * - `origin`: the sudo account
 * - `oracle`: oracle variant which should be enabled
 */
export interface OracleProxyCall_enable_oracle {
    __kind: 'enable_oracle'
    oracle: Oracle
}

export type Oracle = Oracle_BandChainFeed

export interface Oracle_BandChainFeed {
    __kind: 'BandChainFeed'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_approve_as_multi | MultisigCall_as_multi | MultisigCall_as_multi_threshold_1 | MultisigCall_cancel_as_multi

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    callHash: Bytes
    maxWeight: bigint
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Bytes
    storeCall: boolean
    maxWeight: bigint
}

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: AccountId32[]
    call: Call
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    timepoint: Timepoint
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MulticollateralBondingCurvePoolCall = MulticollateralBondingCurvePoolCall_initialize_pool | MulticollateralBondingCurvePoolCall_set_optional_reward_multiplier | MulticollateralBondingCurvePoolCall_set_price_bias | MulticollateralBondingCurvePoolCall_set_price_change_config | MulticollateralBondingCurvePoolCall_set_reference_asset

/**
 * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
 */
export interface MulticollateralBondingCurvePoolCall_initialize_pool {
    __kind: 'initialize_pool'
    collateralAssetId: AssetId32
}

/**
 * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
 * `None` value indicates reward without change, same as Some(1.0).
 */
export interface MulticollateralBondingCurvePoolCall_set_optional_reward_multiplier {
    __kind: 'set_optional_reward_multiplier'
    collateralAssetId: AssetId32
    multiplier?: (FixedPoint | undefined)
}

/**
 * Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
 */
export interface MulticollateralBondingCurvePoolCall_set_price_bias {
    __kind: 'set_price_bias'
    priceBias: bigint
}

/**
 * Changes price change rate and step
 */
export interface MulticollateralBondingCurvePoolCall_set_price_change_config {
    __kind: 'set_price_change_config'
    priceChangeRate: bigint
    priceChangeStep: bigint
}

/**
 * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
 */
export interface MulticollateralBondingCurvePoolCall_set_reference_asset {
    __kind: 'set_reference_asset'
    referenceAssetId: AssetId32
}

export interface FixedPoint {
    inner: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityProxyCall = LiquidityProxyCall_disable_liquidity_source | LiquidityProxyCall_enable_liquidity_source | LiquidityProxyCall_swap | LiquidityProxyCall_swap_transfer | LiquidityProxyCall_swap_transfer_batch

/**
 * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
 * 
 * - `liquidity_source`: the liquidity source to be disabled.
 */
export interface LiquidityProxyCall_disable_liquidity_source {
    __kind: 'disable_liquidity_source'
    liquiditySource: LiquiditySourceType
}

/**
 * Enables XST or TBC liquidity source.
 * 
 * - `liquidity_source`: the liquidity source to be enabled.
 */
export interface LiquidityProxyCall_enable_liquidity_source {
    __kind: 'enable_liquidity_source'
    liquiditySource: LiquiditySourceType
}

/**
 * Perform swap of tokens (input/output defined via SwapAmount direction).
 * 
 * - `origin`: the account on whose behalf the transaction is being executed,
 * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
 * - `input_asset_id`: ID of the asset being sold,
 * - `output_asset_id`: ID of the asset being bought,
 * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
 * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
 * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
 */
export interface LiquidityProxyCall_swap {
    __kind: 'swap'
    dexId: number
    inputAssetId: AssetId32
    outputAssetId: AssetId32
    swapAmount: SwapAmount
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
}

/**
 * Perform swap of tokens (input/output defined via SwapAmount direction).
 * 
 * - `origin`: the account on whose behalf the transaction is being executed,
 * - `receiver`: the account that receives the output,
 * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
 * - `input_asset_id`: ID of the asset being sold,
 * - `output_asset_id`: ID of the asset being bought,
 * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
 * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
 * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
 */
export interface LiquidityProxyCall_swap_transfer {
    __kind: 'swap_transfer'
    receiver: AccountId32
    dexId: number
    inputAssetId: AssetId32
    outputAssetId: AssetId32
    swapAmount: SwapAmount
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
}

export interface LiquidityProxyCall_swap_transfer_batch {
    __kind: 'swap_transfer_batch'
    receivers: BatchReceiverInfo[]
    dexId: number
    inputAssetId: AssetId32
    outputAssetId: AssetId32
    maxInputAmount: bigint
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
}

export interface BatchReceiverInfo {
    accountId: AccountId32
    targetAmount: bigint
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

export type SwapAmount = SwapAmount_WithDesiredInput | SwapAmount_WithDesiredOutput

export interface SwapAmount_WithDesiredInput {
    __kind: 'WithDesiredInput'
    desiredAmountIn: bigint
    minAmountOut: bigint
}

export interface SwapAmount_WithDesiredOutput {
    __kind: 'WithDesiredOutput'
    desiredAmountOut: bigint
    maxAmountIn: bigint
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IrohaMigrationCall = IrohaMigrationCall_migrate

export interface IrohaMigrationCall_migrate {
    __kind: 'migrate'
    irohaAddress: string
    irohaPublicKey: string
    irohaSignature: string
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * # <weight>
 * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
 *   length of `heartbeat.network_state.external_address`
 *   - `O(K)`: decoding of length `K`
 *   - `O(E)`: decoding/encoding of length `E`
 * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *   `ReceivedHeartbeats`
 * - DbWrites: `ReceivedHeartbeats`
 * # </weight>
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Bytes
}

export interface Heartbeat {
    blockNumber: number
    networkState: OpaqueNetworkState
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export interface OpaqueNetworkState {
    peerId: OpaquePeerId
    externalAddresses: OpaqueMultiaddr[]
}

export type OpaqueMultiaddr = Bytes

export type OpaquePeerId = Bytes

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_add_sub | IdentityCall_cancel_request | IdentityCall_clear_identity | IdentityCall_kill_identity | IdentityCall_provide_judgement | IdentityCall_quit_sub | IdentityCall_remove_sub | IdentityCall_rename_sub | IdentityCall_request_judgement | IdentityCall_set_account_id | IdentityCall_set_fee | IdentityCall_set_fields | IdentityCall_set_identity | IdentityCall_set_subs

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * # <weight>
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 * - One storage mutation (codec `O(R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: AccountId32
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: AccountId32
    data: Data
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - One storage mutation `O(R + X)`.
 * - One event
 * # </weight>
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 * - One balance-unreserve operation.
 * - `2` storage reads and `S + 2` storage deletions.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`.
 * - One balance-reserve operation.
 * - `S + 2` storage mutations.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: AccountId32
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-transfer operation.
 * - Up to one account-lookup operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: AccountId32
    judgement: Judgement
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: AccountId32
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: AccountId32
    data: Data
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: AccountId32
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: BitFlags
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * # <weight>
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 * - One balance reserve operation.
 * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * # <weight>
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 * - At most one balance operations.
 * - DB:
 *   - `P + S` storage mutations (codec complexity `O(1)`)
 *   - One storage read (codec complexity `O(P)`).
 *   - One storage write (codec complexity `O(S)`).
 *   - One storage-exists (`IdentityOf::contains_key`).
 * # </weight>
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [AccountId32, Data][]
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint?: (Bytes | undefined)
    image: Data
    twitter: Data
}

export type BitFlags = bigint

export type Judgement = Judgement_Erroneous | Judgement_FeePaid | Judgement_KnownGood | Judgement_LowQuality | Judgement_OutOfDate | Judgement_Reasonable | Judgement_Unknown

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export type Data = Data_BlakeTwo256 | Data_Keccak256 | Data_None | Data_Raw0 | Data_Raw1 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw2 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw3 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Sha256 | Data_ShaThree256

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Bytes
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Bytes
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
    value: Bytes
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HermesGovernancePlatformCall = HermesGovernancePlatformCall_change_min_hermes_for_creating_poll | HermesGovernancePlatformCall_change_min_hermes_for_voting | HermesGovernancePlatformCall_create_poll | HermesGovernancePlatformCall_vote | HermesGovernancePlatformCall_withdraw_funds_creator | HermesGovernancePlatformCall_withdraw_funds_voter

/**
 * Change minimum Hermes for creating a poll
 */
export interface HermesGovernancePlatformCall_change_min_hermes_for_creating_poll {
    __kind: 'change_min_hermes_for_creating_poll'
    hermesAmount: bigint
}

/**
 * Change minimum Hermes for voting
 */
export interface HermesGovernancePlatformCall_change_min_hermes_for_voting {
    __kind: 'change_min_hermes_for_voting'
    hermesAmount: bigint
}

/**
 * Create poll
 */
export interface HermesGovernancePlatformCall_create_poll {
    __kind: 'create_poll'
    pollStartTimestamp: bigint
    pollEndTimestamp: bigint
    title: string
    description: string
}

/**
 * Vote for some option
 */
export interface HermesGovernancePlatformCall_vote {
    __kind: 'vote'
    pollId: H256
    votingOption: VotingOption
}

/**
 * Withdraw funds creator
 */
export interface HermesGovernancePlatformCall_withdraw_funds_creator {
    __kind: 'withdraw_funds_creator'
    pollId: H256
}

/**
 * Withdraw funds voter
 */
export interface HermesGovernancePlatformCall_withdraw_funds_voter {
    __kind: 'withdraw_funds_voter'
    pollId: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall = GrandpaCall_note_stalled | GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned

/**
 * Note that the current authority set of the GRANDPA finality gadget has stalled.
 * 
 * This will trigger a forced authority set change at the beginning of the next session, to
 * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
 * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
 * The block production rate (which may be slowed down because of finality lagging) should
 * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
 * authority will start voting on top of `best_finalized_block_number` for new finalized
 * blocks. `best_finalized_block_number` should be the highest of the latest finalized
 * block of all validators of the new authority set.
 * 
 * Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_221
    keyOwnerProof: MembershipProof
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 * 
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_221
    keyOwnerProof: MembershipProof
}

export interface MembershipProof {
    session: number
    trieNodes: Bytes[]
    validatorCount: number
}

export interface Type_221 {
    setId: bigint
    equivocation: Equivocation
}

export type Equivocation = Equivocation_Precommit | Equivocation_Prevote

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_228
}

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_223
}

export interface Type_223 {
    roundNumber: bigint
    identity: Public
    first: [Prevote, Signature]
    second: [Prevote, Signature]
}

export type Signature = Bytes

export interface Prevote {
    targetHash: H256
    targetNumber: number
}

export interface Type_228 {
    roundNumber: bigint
    identity: Public
    first: [Precommit, Signature]
    second: [Precommit, Signature]
}

export interface Precommit {
    targetHash: H256
    targetNumber: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FaucetCall = FaucetCall_reset_rewards | FaucetCall_transfer | FaucetCall_update_limit

export interface FaucetCall_reset_rewards {
    __kind: 'reset_rewards'
}

/**
 * Transfers the specified amount of asset to the specified account.
 * The supported assets are: XOR, VAL, PSWAP.
 * 
 * # Errors
 * 
 * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
 * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
 * NotEnoughReserves is returned if `amount` is greater than the reserves
 */
export interface FaucetCall_transfer {
    __kind: 'transfer'
    assetId: AssetId32
    target: AccountId32
    amount: bigint
}

export interface FaucetCall_update_limit {
    __kind: 'update_limit'
    newLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EthBridgeCall = EthBridgeCall_abort_request | EthBridgeCall_add_asset | EthBridgeCall_add_peer | EthBridgeCall_add_sidechain_token | EthBridgeCall_approve_request | EthBridgeCall_finalize_incoming_request | EthBridgeCall_force_add_peer | EthBridgeCall_import_incoming_request | EthBridgeCall_migrate | EthBridgeCall_prepare_for_migration | EthBridgeCall_register_bridge | EthBridgeCall_register_existing_sidechain_asset | EthBridgeCall_register_incoming_request | EthBridgeCall_remove_peer | EthBridgeCall_remove_sidechain_asset | EthBridgeCall_request_from_sidechain | EthBridgeCall_transfer_to_sidechain

/**
 * Cancels a registered request.
 * 
 * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
 * removes it from the request queues.
 * 
 * Can only be called from a bridge account.
 */
export interface EthBridgeCall_abort_request {
    __kind: 'abort_request'
    hash: H256
    error: DispatchError
    networkId: number
}

/**
 * Add a Thischain asset to the bridge whitelist.
 * 
 * Can only be called by root.
 * 
 * Parameters:
 * - `asset_id` - Thischain asset identifier.
 * - `network_id` - network identifier to which the asset should be added.
 */
export interface EthBridgeCall_add_asset {
    __kind: 'add_asset'
    assetId: AssetId32
    networkId: number
}

/**
 * Add a new peer to the bridge peers set.
 * 
 * Parameters:
 * - `account_id` - account id on thischain.
 * - `address` - account id on sidechain.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_add_peer {
    __kind: 'add_peer'
    accountId: AccountId32
    address: H160
    networkId: number
}

/**
 * Add a Sidechain token to the bridge whitelist.
 * 
 * Parameters:
 * - `token_address` - token contract address.
 * - `symbol` - token symbol (ticker).
 * - `name` - token name.
 * - `decimals` -  token precision.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_add_sidechain_token {
    __kind: 'add_sidechain_token'
    tokenAddress: H160
    symbol: string
    name: string
    decimals: number
    networkId: number
}

/**
 * Approve the given outgoing request. The function is used by bridge peers.
 * 
 * Verifies the peer signature of the given request and adds it to `RequestApprovals`.
 * Once quorum is collected, the request gets finalized and removed from request queue.
 */
export interface EthBridgeCall_approve_request {
    __kind: 'approve_request'
    ocwPublic: Bytes
    hash: H256
    signatureParams: SignatureParams
    networkId: number
}

/**
 * Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
 * 
 * Can be only called from a bridge account.
 * 
 * Parameters:
 * - `request` - an incoming request.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_finalize_incoming_request {
    __kind: 'finalize_incoming_request'
    hash: H256
    networkId: number
}

/**
 * Add the given peer to the peers set without additional checks.
 * 
 * Can only be called by a root account.
 */
export interface EthBridgeCall_force_add_peer {
    __kind: 'force_add_peer'
    who: AccountId32
    address: H160
    networkId: number
}

/**
 * Import the given incoming request.
 * 
 * Register's the load request, then registers and finalizes the incoming request if it
 * succeeded, otherwise aborts the load request.
 * 
 * Can only be called by a bridge account.
 */
export interface EthBridgeCall_import_incoming_request {
    __kind: 'import_incoming_request'
    loadIncomingRequest: LoadIncomingRequest
    incomingRequestResult: Result<IncomingRequest, DispatchError>
}

/**
 * Migrate the given bridge to a new smart-contract.
 * 
 * Can only be called by an authority.
 * 
 * Parameters:
 * - `new_contract_address` - new sidechain ocntract address.
 * - `erc20_native_tokens` - migrated assets ids.
 * - `network_id` - bridge network identifier.
 */
export interface EthBridgeCall_migrate {
    __kind: 'migrate'
    newContractAddress: H160
    erc20NativeTokens: H160[]
    networkId: number
    newSignatureVersion: BridgeSignatureVersion
}

/**
 * Prepare the given bridge for migration.
 * 
 * Can only be called by an authority.
 * 
 * Parameters:
 * - `network_id` - bridge network identifier.
 */
export interface EthBridgeCall_prepare_for_migration {
    __kind: 'prepare_for_migration'
    networkId: number
}

/**
 * Register a new bridge.
 * 
 * Parameters:
 * - `bridge_contract_address` - address of smart-contract deployed on a corresponding
 * network.
 * - `initial_peers` - a set of initial network peers.
 */
export interface EthBridgeCall_register_bridge {
    __kind: 'register_bridge'
    bridgeContractAddress: H160
    initialPeers: AccountId32[]
    signatureVersion: BridgeSignatureVersion
}

/**
 * Register existing asset
 * 
 * Can only be called by root.
 */
export interface EthBridgeCall_register_existing_sidechain_asset {
    __kind: 'register_existing_sidechain_asset'
    assetId: AssetId32
    tokenAddress: H160
    networkId: number
}

/**
 * Register the given incoming request and add it to the queue.
 * 
 * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
 * corresponding load-incoming-request and removes the load-request from the queue.
 * 
 * Can only be called by a bridge account.
 */
export interface EthBridgeCall_register_incoming_request {
    __kind: 'register_incoming_request'
    incomingRequest: IncomingRequest
}

/**
 * Remove peer from the the bridge peers set.
 * 
 * Parameters:
 * - `account_id` - account id on thischain.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_remove_peer {
    __kind: 'remove_peer'
    accountId: AccountId32
    peerAddress?: (H160 | undefined)
    networkId: number
}

/**
 * Remove asset
 * 
 * Can only be called by root.
 */
export interface EthBridgeCall_remove_sidechain_asset {
    __kind: 'remove_sidechain_asset'
    assetId: AssetId32
    networkId: number
}

/**
 * Load incoming request from Sidechain by the given transaction hash.
 * 
 * Parameters:
 * - `eth_tx_hash` - transaction hash on Sidechain.
 * - `kind` - incoming request type.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_request_from_sidechain {
    __kind: 'request_from_sidechain'
    ethTxHash: H256
    kind: IncomingRequestKind
    networkId: number
}

/**
 * Transfer some amount of the given asset to Sidechain address.
 * 
 * Note: if the asset kind is `Sidechain`, the amount should fit in the asset's precision
 * on sidechain (`SidechainAssetPrecision`) without extra digits. For example, assume
 * some ERC-20 (`T`) token has `decimals=6`, and the corresponding asset on substrate has
 * `7`. Alice's balance on thischain is `0.1000009`. If Alice would want to transfer all
 * the amount, she will get an error `NonZeroDust`, because of the `9` at the end, so, the
 * correct amount would be `0.100000` (only 6 digits after the decimal point).
 * 
 * Parameters:
 * - `asset_id` - thischain asset id.
 * - `to` - sidechain account id.
 * - `amount` - amount of the asset.
 * - `network_id` - network identifier.
 */
export interface EthBridgeCall_transfer_to_sidechain {
    __kind: 'transfer_to_sidechain'
    assetId: AssetId32
    to: H160
    amount: bigint
    networkId: number
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

export type BridgeSignatureVersion = BridgeSignatureVersion_V1 | BridgeSignatureVersion_V2 | BridgeSignatureVersion_V3

export interface BridgeSignatureVersion_V1 {
    __kind: 'V1'
}

export interface BridgeSignatureVersion_V2 {
    __kind: 'V2'
}

export interface BridgeSignatureVersion_V3 {
    __kind: 'V3'
}

export type IncomingRequest = IncomingRequest_AddToken | IncomingRequest_CancelOutgoingRequest | IncomingRequest_ChangePeers | IncomingRequest_ChangePeersCompat | IncomingRequest_MarkAsDone | IncomingRequest_Migrate | IncomingRequest_PrepareForMigration | IncomingRequest_Transfer

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

export interface IncomingRequest_ChangePeersCompat {
    __kind: 'ChangePeersCompat'
    value: IncomingChangePeersCompat
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
    from: H160
    to: AccountId32
    assetId: AssetId32
    assetKind: AssetKind
    amount: bigint
    author: AccountId32
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
    shouldTakeFee: boolean
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
    value: number
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
    author: AccountId32
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingMigrate {
    newContractAddress: H160
    author: AccountId32
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingMarkAsDoneRequest {
    outgoingRequestHash: H256
    initialRequestHash: H256
    author: AccountId32
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingChangePeersCompat {
    peerAccountId: AccountId32
    peerAddress: H160
    added: boolean
    contract: ChangePeersContract
    author: AccountId32
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export type ChangePeersContract = ChangePeersContract_VAL | ChangePeersContract_XOR

export interface ChangePeersContract_VAL {
    __kind: 'VAL'
}

export interface ChangePeersContract_XOR {
    __kind: 'XOR'
}

export interface IncomingChangePeers {
    peerAccountId?: (AccountId32 | undefined)
    peerAddress: H160
    removed: boolean
    author: AccountId32
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export interface IncomingCancelOutgoingRequest {
    outgoingRequest: OutgoingRequest
    outgoingRequestHash: H256
    initialRequestHash: H256
    txInput: Bytes
    author: AccountId32
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export type OutgoingRequest = OutgoingRequest_AddAsset | OutgoingRequest_AddPeer | OutgoingRequest_AddPeerCompat | OutgoingRequest_AddToken | OutgoingRequest_Migrate | OutgoingRequest_PrepareForMigration | OutgoingRequest_RemovePeer | OutgoingRequest_RemovePeerCompat | OutgoingRequest_Transfer

export interface OutgoingRequest_AddAsset {
    __kind: 'AddAsset'
    value: OutgoingAddAsset
}

export interface OutgoingRequest_AddPeer {
    __kind: 'AddPeer'
    value: OutgoingAddPeer
}

export interface OutgoingRequest_AddPeerCompat {
    __kind: 'AddPeerCompat'
    value: OutgoingAddPeerCompat
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

export interface OutgoingRequest_RemovePeerCompat {
    __kind: 'RemovePeerCompat'
    value: OutgoingRemovePeerCompat
}

export interface OutgoingRequest_Transfer {
    __kind: 'Transfer'
    value: OutgoingTransfer
}

export interface OutgoingTransfer {
    from: AccountId32
    to: H160
    assetId: AssetId32
    amount: bigint
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingRemovePeerCompat {
    author: AccountId32
    peerAccountId: AccountId32
    peerAddress: H160
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingRemovePeer {
    author: AccountId32
    peerAccountId: AccountId32
    peerAddress: H160
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
    compatHash?: (H256 | undefined)
}

export interface OutgoingPrepareForMigration {
    author: AccountId32
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingMigrate {
    author: AccountId32
    newContractAddress: H160
    erc20NativeTokens: H160[]
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
    newSignatureVersion: BridgeSignatureVersion
}

export interface OutgoingAddToken {
    author: AccountId32
    tokenAddress: H160
    symbol: string
    name: string
    decimals: number
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingAddPeerCompat {
    author: AccountId32
    peerAddress: H160
    peerAccountId: AccountId32
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingAddPeer {
    author: AccountId32
    peerAddress: H160
    peerAccountId: AccountId32
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface OutgoingAddAsset {
    author: AccountId32
    assetId: AssetId32
    nonce: number
    networkId: number
    timepoint: BridgeTimepoint
}

export interface IncomingAddToken {
    tokenAddress: H160
    assetId: AssetId32
    precision: number
    symbol: AssetSymbol
    name: AssetName
    author: AccountId32
    txHash: H256
    atHeight: bigint
    timepoint: BridgeTimepoint
    networkId: number
}

export type AssetName = Bytes

export type AssetSymbol = Bytes

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
    author: AccountId32
    hash: H256
    timepoint: BridgeTimepoint
    kind: IncomingTransactionRequestKind
    networkId: number
}

export interface LoadIncomingMetaRequest {
    author: AccountId32
    hash: H256
    timepoint: BridgeTimepoint
    kind: IncomingMetaRequestKind
    networkId: number
}

export interface SignatureParams {
    r: Bytes
    s: Bytes
    v: number
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional

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
    value: ModuleError
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

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_UnknownAsset | TokenError_Unsupported | TokenError_WouldDie

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

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface ModuleError {
    index: number
    error: Bytes
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionsPhragmenCall = ElectionsPhragmenCall_clean_defunct_voters | ElectionsPhragmenCall_remove_member | ElectionsPhragmenCall_remove_voter | ElectionsPhragmenCall_renounce_candidacy | ElectionsPhragmenCall_submit_candidacy | ElectionsPhragmenCall_vote

/**
 * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 * deposit of the removed voters are returned.
 * 
 * This is an root function to be used only for cleaning the state.
 * 
 * The dispatch origin of this call must be root.
 * 
 * # <weight>
 * The total number of voters and those that are defunct must be provided as witness data.
 * # </weight>
 */
export interface ElectionsPhragmenCall_clean_defunct_voters {
    __kind: 'clean_defunct_voters'
    numVoters: number
    numDefunct: number
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, a new phragmen election is started.
 * 
 * The dispatch origin of this call must be root.
 * 
 * Note that this does not affect the designated block number of the next election.
 * 
 * # <weight>
 * If we have a replacement, we use a small weight. Else, since this is a root call and
 * will go into phragmen, we assume full block for now.
 * # </weight>
 */
export interface ElectionsPhragmenCall_remove_member {
    __kind: 'remove_member'
    who: AccountId32
    hasReplacement: boolean
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface ElectionsPhragmenCall_remove_voter {
    __kind: 'remove_voter'
}

/**
 * Renounce one's intention to be a candidate for the next election round. 3 potential
 * outcomes exist:
 * 
 * - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *   unreserved, returned and origin is removed as a candidate.
 * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *   origin is removed as a runner-up.
 * - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *   removed as a member, consequently not being a candidate for the next round anymore.
 *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *   are immediately used. If the prime is renouncing, then no prime will exist until the
 *   next round.
 * 
 * The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 * # <weight>
 * The type of renouncing must be provided as witness data.
 * # </weight>
 */
export interface ElectionsPhragmenCall_renounce_candidacy {
    __kind: 'renounce_candidacy'
    renouncing: Renouncing
}

/**
 * Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 * All candidates are wiped at the end of the term. They either become a member/runner-up,
 * or leave the system while their deposit is slashed.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 * to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 * # <weight>
 * The number of current candidates must be provided as witness data.
 * # </weight>
 */
export interface ElectionsPhragmenCall_submit_candidacy {
    __kind: 'submit_candidacy'
    candidateCount: number
}

/**
 * Vote for a set of candidates for the upcoming round of election. This can be called to
 * set the initial votes, or update already existing votes.
 * 
 * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 * reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 * The `votes` should:
 *   - not be empty.
 *   - be less than the number of possible candidates. Note that all current members and
 *     runners-up are also automatically candidates for the next round.
 * 
 * If `value` is more than `who`'s free balance, then the maximum of the two is used.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * It is the responsibility of the caller to **NOT** place all of their balance into the
 * lock and keep some for further operations.
 * 
 * # <weight>
 * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 * # </weight>
 */
export interface ElectionsPhragmenCall_vote {
    __kind: 'vote'
    votes: AccountId32[]
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionProviderMultiPhaseCall = ElectionProviderMultiPhaseCall_governance_fallback | ElectionProviderMultiPhaseCall_set_emergency_election_result | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score | ElectionProviderMultiPhaseCall_submit | ElectionProviderMultiPhaseCall_submit_unsigned

/**
 * Trigger the governance fallback.
 * 
 * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
 * calling [`Call::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters?: (number | undefined)
    maybeMaxTargets?: (number | undefined)
}

/**
 * Set a solution in the queue, to be handed out to the client of this pallet in the next
 * call to `ElectionProvider::elect`.
 * 
 * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
 * 
 * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
 * feasibility check itself can in principle cause the election process to fail (due to
 * memory/weight constrains).
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [AccountId32, Support][]
}

/**
 * Set a new value for `MinimumUntrustedScore`.
 * 
 * Dispatch origin must be aligned with `T::ForceOrigin`.
 * 
 * This check can be turned off by setting the value to `None`.
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore?: (ElectionScore | undefined)
}

/**
 * Submit a solution for the signed phase.
 * 
 * The dispatch origin fo this call must be __signed__.
 * 
 * The solution is potentially queued, based on the claimed score and processed at the end
 * of the signed phase.
 * 
 * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
 * might be rewarded, slashed, or get all or a part of the deposit back.
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
}

/**
 * Submit a solution for the unsigned phase.
 * 
 * The dispatch origin fo this call must be __none__.
 * 
 * This submission is checked on the fly. Moreover, this unsigned solution is only
 * validated when submitted to the pool from the **local** node. Effectively, this means
 * that only active validators can submit this transaction when authoring a block (similar
 * to an inherent).
 * 
 * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
 * panic if the solution submitted by the validator is invalid in any way, effectively
 * putting their authoring reward at risk.
 * 
 * No deposit or reward is associated with this submission.
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export interface RawSolution {
    solution: NposCompactSolution24
    score: ElectionScore
    round: number
}

export interface NposCompactSolution24 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
    votes17: [number, [number, number][], number][]
    votes18: [number, [number, number][], number][]
    votes19: [number, [number, number][], number][]
    votes20: [number, [number, number][], number][]
    votes21: [number, [number, number][], number][]
    votes22: [number, [number, number][], number][]
    votes23: [number, [number, number][], number][]
    votes24: [number, [number, number][], number][]
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export interface Support {
    total: bigint
    voters: [AccountId32, bigint][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_queued | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_enact_proposal | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_propose | DemocracyCall_reap_preimage | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: H256
    maybeRefIndex?: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * Cancel a proposal queued for enactment.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `which`: The index of the referendum to cancel.
 * 
 * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
    __kind: 'cancel_queued'
    which: number
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: AccountId32
    conviction: Conviction
    balance: bigint
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
    __kind: 'enact_proposal'
    proposalHash: H256
    index: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *   Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposalHash: H256
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposalHash: H256
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposalHash: H256
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *   `FastTrackVotingPeriod` if too low.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: H256
    votingPeriod: number
    delay: number
}

/**
 * Register the preimage for an upcoming proposal. This requires the proposal to be
 * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 * the preimage has not been uploaded before and matches some imminent proposal,
 * no fee is paid.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
    __kind: 'note_imminent_preimage'
    encodedProposal: Bytes
}

/**
 * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
    __kind: 'note_imminent_preimage_operational'
    encodedProposal: Bytes
}

/**
 * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 * in the dispatch queue but does require a deposit, returned once enacted.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
    __kind: 'note_preimage'
    encodedProposal: Bytes
}

/**
 * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
    __kind: 'note_preimage_operational'
    encodedProposal: Bytes
}

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 * 
 * Weight: `O(p)`
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposalHash: H256
    value: bigint
}

/**
 * Remove an expired proposal preimage and collect the deposit.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `proposal_hash`: The preimage hash of a proposal.
 * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
 *   weighted according to this value with no refund.
 * 
 * This will only work after `VotingPeriod` blocks from the time that the preimage was
 * noted, if it's the same account doing it. If it's a different account, then it'll only
 * work an additional `EnactmentPeriod` later.
 * 
 * Emits `PreimageReaped`.
 * 
 * Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
    __kind: 'reap_preimage'
    proposalHash: H256
    proposalLenUpperBound: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: AccountId32
    index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *   proposal. Extrinsic is weighted according to this value with no refund.
 * 
 * Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
    secondsUpperBound: number
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: AccountId32
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: H256
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

export type AccountVote = AccountVote_Split | AccountVote_Standard

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: Vote
    balance: bigint
}

export type Vote = number

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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemeterFarmingPlatformCall = DemeterFarmingPlatformCall_add_pool | DemeterFarmingPlatformCall_change_info | DemeterFarmingPlatformCall_change_pool_deposit_fee | DemeterFarmingPlatformCall_change_pool_multiplier | DemeterFarmingPlatformCall_change_token_info | DemeterFarmingPlatformCall_change_total_tokens | DemeterFarmingPlatformCall_deposit | DemeterFarmingPlatformCall_get_rewards | DemeterFarmingPlatformCall_register_token | DemeterFarmingPlatformCall_remove_pool | DemeterFarmingPlatformCall_withdraw

/**
 * Add pool
 */
export interface DemeterFarmingPlatformCall_add_pool {
    __kind: 'add_pool'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    multiplier: number
    depositFee: bigint
    isCore: boolean
}

/**
 * Change info
 */
export interface DemeterFarmingPlatformCall_change_info {
    __kind: 'change_info'
    changedUser: AccountId32
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    poolTokens: bigint
}

/**
 * Change pool deposit fee
 */
export interface DemeterFarmingPlatformCall_change_pool_deposit_fee {
    __kind: 'change_pool_deposit_fee'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    depositFee: bigint
}

/**
 * Change pool multiplier
 */
export interface DemeterFarmingPlatformCall_change_pool_multiplier {
    __kind: 'change_pool_multiplier'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    newMultiplier: number
}

/**
 * Change token info
 */
export interface DemeterFarmingPlatformCall_change_token_info {
    __kind: 'change_token_info'
    poolAsset: AssetId32
    tokenPerBlock: bigint
    farmsAllocation: bigint
    stakingAllocation: bigint
    teamAllocation: bigint
    teamAccount: AccountId32
}

/**
 * Change total tokens
 */
export interface DemeterFarmingPlatformCall_change_total_tokens {
    __kind: 'change_total_tokens'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    totalTokens: bigint
}

/**
 * Deposit to pool
 */
export interface DemeterFarmingPlatformCall_deposit {
    __kind: 'deposit'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
    pooledTokens: bigint
}

/**
 * Get rewards
 */
export interface DemeterFarmingPlatformCall_get_rewards {
    __kind: 'get_rewards'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
}

/**
 * Register token for farming
 */
export interface DemeterFarmingPlatformCall_register_token {
    __kind: 'register_token'
    poolAsset: AssetId32
    tokenPerBlock: bigint
    farmsAllocation: bigint
    stakingAllocation: bigint
    teamAllocation: bigint
    teamAccount: AccountId32
}

/**
 * Remove pool
 */
export interface DemeterFarmingPlatformCall_remove_pool {
    __kind: 'remove_pool'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    isFarm: boolean
}

/**
 * Withdraw
 */
export interface DemeterFarmingPlatformCall_withdraw {
    __kind: 'withdraw'
    baseAsset: AssetId32
    poolAsset: AssetId32
    rewardAsset: AssetId32
    pooledTokens: bigint
    isFarm: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DEXAPICall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
    __kind: 'transfer'
    dest: AccountId32
    currencyId: AssetId32
    amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
    __kind: 'transfer_native_currency'
    dest: AccountId32
    amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
    __kind: 'update_balance'
    who: AccountId32
    currencyId: AssetId32
    amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: H256
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: H256
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: AccountId32[]
    prime?: (AccountId32 | undefined)
    oldCount: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: H256
    index: number
    approve: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresTokenLockerCall = CeresTokenLockerCall_change_fee | CeresTokenLockerCall_lock_tokens | CeresTokenLockerCall_withdraw_tokens

/**
 * Change fee
 */
export interface CeresTokenLockerCall_change_fee {
    __kind: 'change_fee'
    newFee: bigint
}

/**
 * Lock tokens
 */
export interface CeresTokenLockerCall_lock_tokens {
    __kind: 'lock_tokens'
    assetId: AssetId32
    unlockingTimestamp: bigint
    numberOfTokens: bigint
}

/**
 * Withdraw tokens
 */
export interface CeresTokenLockerCall_withdraw_tokens {
    __kind: 'withdraw_tokens'
    assetId: AssetId32
    unlockingTimestamp: bigint
    numberOfTokens: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresStakingCall = CeresStakingCall_change_rewards_remaining | CeresStakingCall_deposit | CeresStakingCall_withdraw

/**
 * Change RewardsRemaining
 */
export interface CeresStakingCall_change_rewards_remaining {
    __kind: 'change_rewards_remaining'
    rewardsRemaining: bigint
}

export interface CeresStakingCall_deposit {
    __kind: 'deposit'
    amount: bigint
}

export interface CeresStakingCall_withdraw {
    __kind: 'withdraw'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresLiquidityLockerCall = CeresLiquidityLockerCall_change_ceres_fee | CeresLiquidityLockerCall_lock_liquidity

/**
 * Change CERES fee
 */
export interface CeresLiquidityLockerCall_change_ceres_fee {
    __kind: 'change_ceres_fee'
    ceresFee: bigint
}

/**
 * Lock liquidity
 */
export interface CeresLiquidityLockerCall_lock_liquidity {
    __kind: 'lock_liquidity'
    assetA: AssetId32
    assetB: AssetId32
    unlockingTimestamp: bigint
    percentageOfPoolTokens: bigint
    option: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresLaunchpadCall = CeresLaunchpadCall_add_whitelisted_contributor | CeresLaunchpadCall_add_whitelisted_ilo_organizer | CeresLaunchpadCall_change_ceres_burn_fee | CeresLaunchpadCall_change_ceres_contribution_fee | CeresLaunchpadCall_change_fee_percent_for_raised_funds | CeresLaunchpadCall_claim | CeresLaunchpadCall_claim_lp_tokens | CeresLaunchpadCall_claim_pswap_rewards | CeresLaunchpadCall_contribute | CeresLaunchpadCall_create_ilo | CeresLaunchpadCall_emergency_withdraw | CeresLaunchpadCall_finish_ilo | CeresLaunchpadCall_remove_whitelisted_contributor | CeresLaunchpadCall_remove_whitelisted_ilo_organizer

/**
 * Add whitelisted contributor
 */
export interface CeresLaunchpadCall_add_whitelisted_contributor {
    __kind: 'add_whitelisted_contributor'
    contributor: AccountId32
}

/**
 * Add whitelisted ILO organizer
 */
export interface CeresLaunchpadCall_add_whitelisted_ilo_organizer {
    __kind: 'add_whitelisted_ilo_organizer'
    iloOrganizer: AccountId32
}

/**
 * Change CERES burn fee
 */
export interface CeresLaunchpadCall_change_ceres_burn_fee {
    __kind: 'change_ceres_burn_fee'
    ceresFee: bigint
}

/**
 * Change CERES contribution fee
 */
export interface CeresLaunchpadCall_change_ceres_contribution_fee {
    __kind: 'change_ceres_contribution_fee'
    ceresFee: bigint
}

/**
 * Change fee percent on raised funds in successful ILO
 */
export interface CeresLaunchpadCall_change_fee_percent_for_raised_funds {
    __kind: 'change_fee_percent_for_raised_funds'
    feePercent: bigint
}

/**
 * Claim tokens
 */
export interface CeresLaunchpadCall_claim {
    __kind: 'claim'
    assetId: AssetId32
}

/**
 * Claim LP tokens
 */
export interface CeresLaunchpadCall_claim_lp_tokens {
    __kind: 'claim_lp_tokens'
    assetId: AssetId32
}

/**
 * Claim PSWAP rewards
 */
export interface CeresLaunchpadCall_claim_pswap_rewards {
    __kind: 'claim_pswap_rewards'
}

/**
 * Contribute
 */
export interface CeresLaunchpadCall_contribute {
    __kind: 'contribute'
    assetId: AssetId32
    fundsToContribute: bigint
}

/**
 * Create ILO
 */
export interface CeresLaunchpadCall_create_ilo {
    __kind: 'create_ilo'
    baseAsset: AssetId32
    assetId: AssetId32
    tokensForIlo: bigint
    tokensForLiquidity: bigint
    iloPrice: bigint
    softCap: bigint
    hardCap: bigint
    minContribution: bigint
    maxContribution: bigint
    refundType: boolean
    liquidityPercent: bigint
    listingPrice: bigint
    lockupDays: number
    startTimestamp: bigint
    endTimestamp: bigint
    teamVestingTotalTokens: bigint
    teamVestingFirstReleasePercent: bigint
    teamVestingPeriod: bigint
    teamVestingPercent: bigint
    firstReleasePercent: bigint
    vestingPeriod: bigint
    vestingPercent: bigint
}

/**
 * Emergency withdraw
 */
export interface CeresLaunchpadCall_emergency_withdraw {
    __kind: 'emergency_withdraw'
    assetId: AssetId32
}

/**
 * Finish ILO
 */
export interface CeresLaunchpadCall_finish_ilo {
    __kind: 'finish_ilo'
    assetId: AssetId32
}

/**
 * Remove whitelisted contributor
 */
export interface CeresLaunchpadCall_remove_whitelisted_contributor {
    __kind: 'remove_whitelisted_contributor'
    contributor: AccountId32
}

/**
 * Remove whitelisted ILO organizer
 */
export interface CeresLaunchpadCall_remove_whitelisted_ilo_organizer {
    __kind: 'remove_whitelisted_ilo_organizer'
    iloOrganizer: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CeresGovernancePlatformCall = CeresGovernancePlatformCall_create_poll | CeresGovernancePlatformCall_vote | CeresGovernancePlatformCall_withdraw

/**
 * Create poll
 */
export interface CeresGovernancePlatformCall_create_poll {
    __kind: 'create_poll'
    pollId: Bytes
    numberOfOptions: number
    pollStartTimestamp: bigint
    pollEndTimestamp: bigint
}

/**
 * Voting for option
 */
export interface CeresGovernancePlatformCall_vote {
    __kind: 'vote'
    pollId: Bytes
    votingOption: number
    numberOfVotes: bigint
}

/**
 * Withdraw voting funds
 */
export interface CeresGovernancePlatformCall_withdraw {
    __kind: 'withdraw'
    pollId: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BridgeMultisigCall = BridgeMultisigCall_add_signatory | BridgeMultisigCall_approve_as_multi | BridgeMultisigCall_as_multi | BridgeMultisigCall_as_multi_threshold_1 | BridgeMultisigCall_cancel_as_multi | BridgeMultisigCall_register_multisig | BridgeMultisigCall_remove_signatory

/**
 * Add a new signatory to the multisig account.
 * Can only be called by a multisig account.
 * 
 * TODO: update weights for `add_signatory`
 * # <weight>
 * Key: length of members in multisigConfig: M
 * - One storage read - O(1)
 * - search in members - O(M)
 * - Storage write - O(M)
 * Total complexity - O(M)
 * # <weight>
 */
export interface BridgeMultisigCall_add_signatory {
    __kind: 'add_signatory'
    newMember: AccountId32
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *   deposit taken for its lifetime of
 *   `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - Base Weight:
 *     - Create: 44.71 + 0.088 * S
 *     - Approve: 31.48 + 0.116 * S
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
 */
export interface BridgeMultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    id: AccountId32
    maybeTimepoint?: (BridgeTimepoint | undefined)
    callHash: Bytes
    maxWeight: bigint
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *   deposit taken for its lifetime of
 *   `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - Base Weight:
 *     - Create:          41.89 + 0.118 * S + .002 * Z µs
 *     - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
 *     - Approve:         31.39 + 0.136 * S + .002 * Z µs
 *     - Complete:        39.94 + 0.26  * S + .002 * Z µs
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 * - Plus Call Weight
 * # </weight>
 */
export interface BridgeMultisigCall_as_multi {
    __kind: 'as_multi'
    id: AccountId32
    maybeTimepoint?: (BridgeTimepoint | undefined)
    call: Bytes
    storeCall: boolean
    maxWeight: bigint
}

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - Base Weight: 33.72 + 0.002 * Z µs
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface BridgeMultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    id: AccountId32
    call: Call
    timepoint: BridgeTimepoint
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - Base Weight: 36.07 + 0.124 * S
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 * # </weight>
 */
export interface BridgeMultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    id: AccountId32
    timepoint: BridgeTimepoint
    callHash: Bytes
}

/**
 * Create a new multisig account.
 * TODO: update weights for `register_multisig`
 * # <weight>
 * Key: M - length of members,
 * - One storage reads - O(1)
 * - One search in sorted list - O(logM)
 * - Confirmation that the list is sorted - O(M)
 * - One storage writes - O(1)
 * - One event
 * Total Complexity: O(M + logM)
 * # <weight>
 */
export interface BridgeMultisigCall_register_multisig {
    __kind: 'register_multisig'
    signatories: AccountId32[]
}

/**
 * Remove the signatory from the multisig account.
 * Can only be called by a multisig account.
 * 
 * TODO: update weights for `remove_signatory`
 * # <weight>
 * Key: length of members in multisigConfig: M
 * - One storage reads - O(1)
 * - remove items in list - O(M)
 * Total complexity - O(M)
 * # <weight>
 */
export interface BridgeMultisigCall_remove_signatory {
    __kind: 'remove_signatory'
    signatory: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BandCall = BandCall_add_relayers | BandCall_force_relay | BandCall_relay | BandCall_remove_relayers

/**
 * Add `account_ids` to the list of trusted relayers.
 * 
 * Ignores repeated accounts in `account_ids`.
 * If one of account is already a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
 * be returned.
 * 
 * - `origin`: the sudo account on whose behalf the transaction is being executed,
 * - `account_ids`: list of new trusted relayers to add.
 */
export interface BandCall_add_relayers {
    __kind: 'add_relayers'
    accountIds: AccountId32[]
}

/**
 * Similar to [`relay()`] but without the resolve time guard.
 * 
 * Should be used in emergency situations i.e. then previous value was
 * relayed by a faulty/malicious actor.
 * 
 * - `origin`: the relayer account on whose behalf the transaction is being executed,
 * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
 * - `resolve_time`: symbols which rates are provided,
 * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
 */
export interface BandCall_force_relay {
    __kind: 'force_relay'
    rates: [SymbolName, bigint][]
    resolveTime: bigint
    requestId: bigint
}

/**
 * Relay a list of symbols and their associated rates along with the resolve time and request id on `BandChain`.
 * 
 * Checks if:
 * - The caller is a relayer;
 * - The `resolve_time` for a particular symbol is not lower than previous saved value, ignores this rate if so;
 * 
 * If `rates` contains duplicated symbols, then the last rate will be stored.
 * 
 * - `origin`: the relayer account on whose behalf the transaction is being executed,
 * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
 * - `resolve_time`: symbols which rates are provided,
 * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
 */
export interface BandCall_relay {
    __kind: 'relay'
    rates: [SymbolName, bigint][]
    resolveTime: bigint
    requestId: bigint
}

/**
 * Remove `account_ids` from the list of trusted relayers.
 * 
 * Ignores repeated accounts in `account_ids`.
 * If one of account is not a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
 * be returned.
 * 
 * - `origin`: the sudo account on whose behalf the transaction is being executed,
 * - `account_ids`: list of relayers to remove.
 */
export interface BandCall_remove_relayers {
    __kind: 'remove_relayers'
    accountIds: AccountId32[]
}

export type SymbolName = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_keep_alive

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: AccountId32
    dest: AccountId32
    value: bigint
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: AccountId32
    amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: AccountId32
    newFree: bigint
    newReserved: bigint
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: AccountId32
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: AccountId32
    keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: AccountId32
    value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BagsListCall = BagsListCall_put_in_front_of | BagsListCall_rebag

/**
 * Move the caller's Id directly in front of `lighter`.
 * 
 * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
 * the account going in front of `lighter`.
 * 
 * Only works if
 * - both nodes are within the same bag,
 * - and `origin` has a greater `Score` than `lighter`.
 */
export interface BagsListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: AccountId32
}

/**
 * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
 * changed its score that it should properly fall into a different bag than its current
 * one.
 * 
 * Anyone can call this function about any potentially dislocated account.
 * 
 * Will always update the stored score of `dislocated` to the correct score, based on
 * `ScoreProvider`.
 * 
 * If `dislocated` does not exists, it returns an error.
 */
export interface BagsListCall_rebag {
    __kind: 'rebag'
    dislocated: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BabeCall = BabeCall_plan_config_change | BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned

/**
 * Plan an epoch config change. The epoch config change is recorded and will be enacted on
 * the next call to `enact_epoch_change`. The config will be activated one epoch after.
 * Multiple calls to this method will replace any existing planned config change that had
 * not been enacted yet.
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

export interface EquivocationProof {
    offender: Bytes
    slot: Slot
    firstHeader: Header
    secondHeader: Header
}

export interface Header {
    parentHash: H256
    number: number
    stateRoot: H256
    extrinsicsRoot: H256
    digest: Digest
}

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Bytes, Bytes]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Bytes, Bytes]
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Bytes, Bytes]
}

export type Slot = bigint

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export type AllowedSlots = AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots | AllowedSlots_PrimarySlots

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetsCall = AssetsCall_burn | AssetsCall_force_mint | AssetsCall_mint | AssetsCall_register | AssetsCall_set_non_mintable | AssetsCall_transfer

/**
 * Performs a checked Asset burn, can only be done
 * by corresponding asset owner with own account.
 * 
 * - `origin`: caller Account, from which Asset amount is burned,
 * - `asset_id`: Id of burned Asset,
 * - `amount`: burned Asset amount.
 */
export interface AssetsCall_burn {
    __kind: 'burn'
    assetId: AssetId32
    amount: bigint
}

/**
 * Performs an unchecked Asset mint, can only be done
 * by root account.
 * 
 * Should be used as extrinsic call only.
 * `Currencies::updated_balance()` should be deprecated. Using `force_mint` allows us to
 * perform extra actions for minting, such as buy-back, extra-minting and etc.
 * 
 * - `origin`: caller Account, which issues Asset minting,
 * - `asset_id`: Id of minted Asset,
 * - `to`: Id of Account, to which Asset amount is minted,
 * - `amount`: minted Asset amount.
 */
export interface AssetsCall_force_mint {
    __kind: 'force_mint'
    assetId: AssetId32
    to: AccountId32
    amount: bigint
}

/**
 * Performs a checked Asset mint, can only be done
 * by corresponding asset owner account.
 * 
 * - `origin`: caller Account, which issues Asset minting,
 * - `asset_id`: Id of minted Asset,
 * - `to`: Id of Account, to which Asset amount is minted,
 * - `amount`: minted Asset amount.
 */
export interface AssetsCall_mint {
    __kind: 'mint'
    assetId: AssetId32
    to: AccountId32
    amount: bigint
}

/**
 * Performs an asset registration.
 * 
 * Registers new `AssetId` for the given `origin`.
 * AssetSymbol should represent string with only uppercase latin chars with max length of 7.
 * AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
 */
export interface AssetsCall_register {
    __kind: 'register'
    symbol: AssetSymbol
    name: AssetName
    initialSupply: bigint
    isMintable: boolean
    isIndivisible: boolean
    optContentSrc?: (ContentSource | undefined)
    optDesc?: (Description | undefined)
}

/**
 * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
 * Operation can not be undone.
 * 
 * - `origin`: caller Account, should correspond to Asset owner
 * - `asset_id`: Id of burned Asset,
 */
export interface AssetsCall_set_non_mintable {
    __kind: 'set_non_mintable'
    assetId: AssetId32
}

/**
 * Performs a checked Asset transfer.
 * 
 * - `origin`: caller Account, from which Asset amount is withdrawn,
 * - `asset_id`: Id of transferred Asset,
 * - `to`: Id of Account, to which Asset amount is deposited,
 * - `amount`: transferred Asset amount.
 */
export interface AssetsCall_transfer {
    __kind: 'transfer'
    assetId: AssetId32
    to: AccountId32
    amount: bigint
}

export type Description = Bytes

export type ContentSource = Bytes

export interface EventRecord {
    phase: Phase
    event: Event
    topics: H256[]
}

export type Event = Event_Assets | Event_BagsList | Event_Balances | Event_Band | Event_BridgeMultisig | Event_CeresGovernancePlatform | Event_CeresLaunchpad | Event_CeresLiquidityLocker | Event_CeresStaking | Event_CeresTokenLocker | Event_Council | Event_DemeterFarmingPlatform | Event_Democracy | Event_ElectionProviderMultiPhase | Event_ElectionsPhragmen | Event_EthBridge | Event_Faucet | Event_Grandpa | Event_HermesGovernancePlatform | Event_Identity | Event_ImOnline | Event_IrohaMigration | Event_LiquidityProxy | Event_MulticollateralBondingCurvePool | Event_Multisig | Event_Offences | Event_OracleProxy | Event_Permissions | Event_PoolXYK | Event_PriceTools | Event_PswapDistribution | Event_Rewards | Event_Scheduler | Event_Session | Event_Staking | Event_Sudo | Event_System | Event_Technical | Event_TechnicalCommittee | Event_TechnicalMembership | Event_Tokens | Event_TradingPair | Event_Utility | Event_VestedRewards | Event_XSTPool | Event_XorFee

export interface Event_Assets {
    __kind: 'Assets'
    value: AssetsEvent
}

export interface Event_BagsList {
    __kind: 'BagsList'
    value: BagsListEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Band {
    __kind: 'Band'
    value: BandEvent
}

export interface Event_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigEvent
}

export interface Event_CeresGovernancePlatform {
    __kind: 'CeresGovernancePlatform'
    value: CeresGovernancePlatformEvent
}

export interface Event_CeresLaunchpad {
    __kind: 'CeresLaunchpad'
    value: CeresLaunchpadEvent
}

export interface Event_CeresLiquidityLocker {
    __kind: 'CeresLiquidityLocker'
    value: CeresLiquidityLockerEvent
}

export interface Event_CeresStaking {
    __kind: 'CeresStaking'
    value: CeresStakingEvent
}

export interface Event_CeresTokenLocker {
    __kind: 'CeresTokenLocker'
    value: CeresTokenLockerEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_DemeterFarmingPlatform {
    __kind: 'DemeterFarmingPlatform'
    value: DemeterFarmingPlatformEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenEvent
}

export interface Event_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeEvent
}

export interface Event_Faucet {
    __kind: 'Faucet'
    value: FaucetEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_HermesGovernancePlatform {
    __kind: 'HermesGovernancePlatform'
    value: HermesGovernancePlatformEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationEvent
}

export interface Event_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyEvent
}

export interface Event_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_OracleProxy {
    __kind: 'OracleProxy'
    value: OracleProxyEvent
}

export interface Event_Permissions {
    __kind: 'Permissions'
    value: PermissionsEvent
}

export interface Event_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKEvent
}

export interface Event_PriceTools {
    __kind: 'PriceTools'
    value: PriceToolsEvent
}

export interface Event_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionEvent
}

export interface Event_Rewards {
    __kind: 'Rewards'
    value: RewardsEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Technical {
    __kind: 'Technical'
    value: TechnicalEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_Tokens {
    __kind: 'Tokens'
    value: TokensEvent
}

export interface Event_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsEvent
}

export interface Event_XSTPool {
    __kind: 'XSTPool'
    value: XSTPoolEvent
}

export interface Event_XorFee {
    __kind: 'XorFee'
    value: XorFeeEvent
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XorFeeEvent = XorFeeEvent_FeeWithdrawn | XorFeeEvent_ReferrerRewarded | XorFeeEvent_WeightToFeeMultiplierUpdated

/**
 * Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
 */
export interface XorFeeEvent_FeeWithdrawn {
    __kind: 'FeeWithdrawn'
    value: [AccountId32, bigint]
}

/**
 * The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
 */
export interface XorFeeEvent_ReferrerRewarded {
    __kind: 'ReferrerRewarded'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * New multiplier for weight to fee conversion is set
 * (*1_000_000_000_000_000_000). [New value]
 */
export interface XorFeeEvent_WeightToFeeMultiplierUpdated {
    __kind: 'WeightToFeeMultiplierUpdated'
    value: FixedU128
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XSTPoolEvent = XSTPoolEvent_PoolInitialized | XSTPoolEvent_ReferenceAssetChanged | XSTPoolEvent_SyntheticAssetEnabled | XSTPoolEvent_SyntheticBaseAssetFloorPriceChanged

/**
 * Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
 */
export interface XSTPoolEvent_PoolInitialized {
    __kind: 'PoolInitialized'
    value: [number, AssetId32]
}

/**
 * Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface XSTPoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: AssetId32
}

/**
 * Synthetic asset was enabled. [Synthetic Asset Id]
 */
export interface XSTPoolEvent_SyntheticAssetEnabled {
    __kind: 'SyntheticAssetEnabled'
    value: AssetId32
}

/**
 * Floor price of the synthetic base asset has been changed. [New Floor Price]
 */
export interface XSTPoolEvent_SyntheticBaseAssetFloorPriceChanged {
    __kind: 'SyntheticBaseAssetFloorPriceChanged'
    value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VestedRewardsEvent = VestedRewardsEvent_ActualDoesntMatchAvailable | VestedRewardsEvent_FailedToSaveCalculatedReward | VestedRewardsEvent_RewardsVested

/**
 * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
 */
export interface VestedRewardsEvent_ActualDoesntMatchAvailable {
    __kind: 'ActualDoesntMatchAvailable'
    value: RewardReason
}

/**
 * Saving reward for account has failed in a distribution series. [account]
 */
export interface VestedRewardsEvent_FailedToSaveCalculatedReward {
    __kind: 'FailedToSaveCalculatedReward'
    value: AccountId32
}

/**
 * Rewards vested, limits were raised. [vested amount]
 */
export interface VestedRewardsEvent_RewardsVested {
    __kind: 'RewardsVested'
    value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_BatchInterrupted | UtilityEvent_DispatchedAs | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Result<null, DispatchError>
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TradingPairEvent = TradingPairEvent_TradingPairStored

/**
 * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
 */
export interface TradingPairEvent_TradingPairStored {
    __kind: 'TradingPairStored'
    value: [number, TradingPair]
}

export interface TradingPair {
    baseAssetId: AssetId32
    targetAssetId: AssetId32
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TokensEvent = TokensEvent_BalanceSet | TokensEvent_Deposited | TokensEvent_DustLost | TokensEvent_Endowed | TokensEvent_LockRemoved | TokensEvent_LockSet | TokensEvent_ReserveRepatriated | TokensEvent_Reserved | TokensEvent_Slashed | TokensEvent_TotalIssuanceSet | TokensEvent_Transfer | TokensEvent_Unreserved | TokensEvent_Withdrawn

/**
 * A balance was set by root.
 */
export interface TokensEvent_BalanceSet {
    __kind: 'BalanceSet'
    currencyId: AssetId32
    who: AccountId32
    free: bigint
    reserved: bigint
}

/**
 * Deposited some balance into an account
 */
export interface TokensEvent_Deposited {
    __kind: 'Deposited'
    currencyId: AssetId32
    who: AccountId32
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below
 * ExistentialDeposit, resulting in an outright loss.
 */
export interface TokensEvent_DustLost {
    __kind: 'DustLost'
    currencyId: AssetId32
    who: AccountId32
    amount: bigint
}

/**
 * An account was created with some free balance.
 */
export interface TokensEvent_Endowed {
    __kind: 'Endowed'
    currencyId: AssetId32
    who: AccountId32
    amount: bigint
}

/**
 * Some locked funds were unlocked
 */
export interface TokensEvent_LockRemoved {
    __kind: 'LockRemoved'
    lockId: Bytes
    currencyId: AssetId32
    who: AccountId32
}

/**
 * Some funds are locked
 */
export interface TokensEvent_LockSet {
    __kind: 'LockSet'
    lockId: Bytes
    currencyId: AssetId32
    who: AccountId32
    amount: bigint
}

/**
 * Some reserved balance was repatriated (moved from reserved to
 * another account).
 */
export interface TokensEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    currencyId: AssetId32
    from: AccountId32
    to: AccountId32
    amount: bigint
    status: BalanceStatus
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface TokensEvent_Reserved {
    __kind: 'Reserved'
    currencyId: AssetId32
    who: AccountId32
    amount: bigint
}

/**
 * Some balances were slashed (e.g. due to mis-behavior)
 */
export interface TokensEvent_Slashed {
    __kind: 'Slashed'
    currencyId: AssetId32
    who: AccountId32
    freeAmount: bigint
    reservedAmount: bigint
}

/**
 * The total issuance of an currency has been set
 */
export interface TokensEvent_TotalIssuanceSet {
    __kind: 'TotalIssuanceSet'
    currencyId: AssetId32
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface TokensEvent_Transfer {
    __kind: 'Transfer'
    currencyId: AssetId32
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface TokensEvent_Unreserved {
    __kind: 'Unreserved'
    currencyId: AssetId32
    who: AccountId32
    amount: bigint
}

/**
 * Some balances were withdrawn (e.g. pay for transaction fee)
 */
export interface TokensEvent_Withdrawn {
    __kind: 'Withdrawn'
    currencyId: AssetId32
    who: AccountId32
    amount: bigint
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    proposalIndex: number
    proposalHash: H256
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    proposalHash: H256
    voted: boolean
    yes: number
    no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalEvent = TechnicalEvent_Burned | TechnicalEvent_InputTransferred | TechnicalEvent_Minted | TechnicalEvent_OutputTransferred | TechnicalEvent_SwapSuccess

/**
 * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
 * For full kind of accounts like in Minted.
 */
export interface TechnicalEvent_Burned {
    __kind: 'Burned'
    value: [TechAssetId, TechAccountId, bigint, bigint]
}

/**
 * Some assets were transferred in. [asset, from, to, amount].
 * TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_InputTransferred {
    __kind: 'InputTransferred'
    value: [TechAssetId, AccountId32, TechAccountId, bigint]
}

/**
 * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
 * This is not only for pure TechAccountId.
 * TechAccountId can be just wrapped AccountId.
 */
export interface TechnicalEvent_Minted {
    __kind: 'Minted'
    value: [TechAssetId, TechAccountId, bigint, bigint]
}

/**
 * Some assets were transferred out. [asset, from, to, amount].
 * TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_OutputTransferred {
    __kind: 'OutputTransferred'
    value: [TechAssetId, TechAccountId, AccountId32, bigint]
}

/**
 * Swap operaction is finalised [initiator, finaliser].
 * TechAccountId is only pure TechAccountId.
 */
export interface TechnicalEvent_SwapSuccess {
    __kind: 'SwapSuccess'
    value: AccountId32
}

export type TechAccountId = TechAccountId_Generic | TechAccountId_None | TechAccountId_Pure | TechAccountId_Wrapped | TechAccountId_WrappedRepr

export interface TechAccountId_Generic {
    __kind: 'Generic'
    value: [Bytes, Bytes]
}

export interface TechAccountId_None {
    __kind: 'None'
}

export interface TechAccountId_Pure {
    __kind: 'Pure'
    value: [number, TechPurpose]
}

export interface TechAccountId_Wrapped {
    __kind: 'Wrapped'
    value: AccountId32
}

export interface TechAccountId_WrappedRepr {
    __kind: 'WrappedRepr'
    value: AccountId32
}

export type TechPurpose = TechPurpose_FeeCollector | TechPurpose_FeeCollectorForPair | TechPurpose_Identifier | TechPurpose_LiquidityKeeper

export interface TechPurpose_FeeCollector {
    __kind: 'FeeCollector'
}

export interface TechPurpose_FeeCollectorForPair {
    __kind: 'FeeCollectorForPair'
    value: Type_79
}

export interface TechPurpose_Identifier {
    __kind: 'Identifier'
    value: Bytes
}

export interface TechPurpose_LiquidityKeeper {
    __kind: 'LiquidityKeeper'
    value: Type_79
}

export interface Type_79 {
    baseAssetId: TechAssetId
    targetAssetId: TechAssetId
}

export type TechAssetId = TechAssetId_Escaped | TechAssetId_Wrapped

export interface TechAssetId_Escaped {
    __kind: 'Escaped'
    value: Bytes
}

export interface TechAssetId_Wrapped {
    __kind: 'Wrapped'
    value: PredefinedAssetId
}

export type PredefinedAssetId = PredefinedAssetId_DAI | PredefinedAssetId_DOT | PredefinedAssetId_ETH | PredefinedAssetId_KSM | PredefinedAssetId_PSWAP | PredefinedAssetId_TBCD | PredefinedAssetId_USDT | PredefinedAssetId_VAL | PredefinedAssetId_XOR | PredefinedAssetId_XST | PredefinedAssetId_XSTUSD

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

export interface PredefinedAssetId_TBCD {
    __kind: 'TBCD'
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

export interface PredefinedAssetId_XST {
    __kind: 'XST'
}

export interface PredefinedAssetId_XSTUSD {
    __kind: 'XSTUSD'
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess | SystemEvent_KilledAccount | SystemEvent_NewAccount | SystemEvent_Remarked

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: AccountId32
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: AccountId32
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: AccountId32
    hash: H256
}

export interface DispatchInfo {
    weight: bigint
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer?: (AccountId32 | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Result<null, DispatchError>
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Result<null, DispatchError>
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_Bonded | StakingEvent_Chilled | StakingEvent_EraPaid | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_PayoutStarted | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_StakersElected | StakingEvent_StakingElectionFailed | StakingEvent_Unbonded | StakingEvent_ValidatorPrefsSet | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [AccountId32, bigint]
}

/**
 * An account has stopped participating as either a validator or nominator.
 * \[stash\]
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    value: AccountId32
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 * \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    value: [number, bigint]
}

/**
 * A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [AccountId32, AccountId32]
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 * The stakers' rewards are getting paid. \[era_index, validator_stash\]
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    value: [number, AccountId32]
}

/**
 * The nominator has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    value: [AccountId32, bigint]
}

/**
 * One validator (and its nominators) has been slashed by the given amount.
 * \[validator, amount\]
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    value: [AccountId32, bigint]
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [AccountId32, bigint]
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    value: [AccountId32, ValidatorPrefs]
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_CallLookupFailed | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallLookupFailed {
    __kind: 'CallLookupFailed'
    task: [number, number]
    id?: (Bytes | undefined)
    error: LookupError
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id?: (Bytes | undefined)
    result: Result<null, DispatchError>
}

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

export type LookupError = LookupError_BadFormat | LookupError_Unknown

export interface LookupError_BadFormat {
    __kind: 'BadFormat'
}

export interface LookupError_Unknown {
    __kind: 'Unknown'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type RewardsEvent = RewardsEvent_Claimed | RewardsEvent_MigrationCompleted

/**
 * The account has claimed their rewards. [account]
 */
export interface RewardsEvent_Claimed {
    __kind: 'Claimed'
    value: AccountId32
}

/**
 * Storage migration to version 1.2.0 completed
 */
export interface RewardsEvent_MigrationCompleted {
    __kind: 'MigrationCompleted'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PswapDistributionEvent = PswapDistributionEvent_BurnRateChanged | PswapDistributionEvent_FeesExchangeFailed | PswapDistributionEvent_FeesExchanged | PswapDistributionEvent_IncentiveDistributed | PswapDistributionEvent_IncentiveDistributionFailed | PswapDistributionEvent_IncentivesBurnedAfterExchange | PswapDistributionEvent_NothingToDistribute | PswapDistributionEvent_NothingToExchange

/**
 * Burn rate updated.
 * [Current Burn Rate]
 */
export interface PswapDistributionEvent_BurnRateChanged {
    __kind: 'BurnRateChanged'
    value: FixedPoint
}

/**
 * Problem occurred that resulted in fees exchange not done.
 * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id, Exchange error]
 */
export interface PswapDistributionEvent_FeesExchangeFailed {
    __kind: 'FeesExchangeFailed'
    value: [number, AccountId32, AssetId32, bigint, AssetId32, DispatchError]
}

/**
 * Fees successfully exchanged for appropriate amount of pool tokens.
 * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
 */
export interface PswapDistributionEvent_FeesExchanged {
    __kind: 'FeesExchanged'
    value: [number, AccountId32, AssetId32, bigint, AssetId32, bigint]
}

/**
 * Incentives successfully sent out to shareholders.
 * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
 */
export interface PswapDistributionEvent_IncentiveDistributed {
    __kind: 'IncentiveDistributed'
    value: [number, AccountId32, AssetId32, bigint, bigint]
}

/**
 * Problem occurred that resulted in incentive distribution not done.
 * [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_IncentiveDistributionFailed {
    __kind: 'IncentiveDistributionFailed'
    value: [number, AccountId32]
}

/**
 * This is needed for other pallet that will use this variables, for example this is
 * farming pallet.
 * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
 * Incentives burned (Incentives that is not revived (to burn)]).
 */
export interface PswapDistributionEvent_IncentivesBurnedAfterExchange {
    __kind: 'IncentivesBurnedAfterExchange'
    value: [number, AssetId32, bigint, bigint]
}

/**
 * Fees Account contains zero incentive tokens, thus distribution is dismissed.
 * [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToDistribute {
    __kind: 'NothingToDistribute'
    value: [number, AccountId32]
}

/**
 * Fees Account contains zero base tokens, thus exchange is dismissed.
 * [DEX Id, Fees Account Id]
 */
export interface PswapDistributionEvent_NothingToExchange {
    __kind: 'NothingToExchange'
    value: [number, AccountId32]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PriceToolsEvent = never

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PoolXYKEvent = PoolXYKEvent_PoolIsInitialized

export interface PoolXYKEvent_PoolIsInitialized {
    __kind: 'PoolIsInitialized'
    value: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PermissionsEvent = PermissionsEvent_PermissionAssigned | PermissionsEvent_PermissionCreated | PermissionsEvent_PermissionGranted | PermissionsEvent_PermissionTransfered

/**
 * Permission was assigned to the account in the scope. [permission, who]
 */
export interface PermissionsEvent_PermissionAssigned {
    __kind: 'PermissionAssigned'
    value: [number, AccountId32]
}

/**
 * Permission was created with an owner. [permission, who]
 */
export interface PermissionsEvent_PermissionCreated {
    __kind: 'PermissionCreated'
    value: [number, AccountId32]
}

/**
 * Permission was granted to a holder. [permission, who]
 */
export interface PermissionsEvent_PermissionGranted {
    __kind: 'PermissionGranted'
    value: [number, AccountId32]
}

/**
 * Permission was transfered to a new owner. [permission, who]
 */
export interface PermissionsEvent_PermissionTransfered {
    __kind: 'PermissionTransfered'
    value: [number, AccountId32]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type OracleProxyEvent = OracleProxyEvent_OracleDisabled | OracleProxyEvent_OracleEnabled

/**
 * Oracle was successfully disabled. [oracle]
 */
export interface OracleProxyEvent_OracleDisabled {
    __kind: 'OracleDisabled'
    value: Oracle
}

/**
 * Oracle was successfully enabled. [oracle]
 */
export interface OracleProxyEvent_OracleEnabled {
    __kind: 'OracleEnabled'
    value: Oracle
}

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Bytes
    timeslot: Bytes
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
    result: Result<null, DispatchError>
}

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: AccountId32
    multisig: AccountId32
    callHash: Bytes
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MulticollateralBondingCurvePoolEvent = MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated | MulticollateralBondingCurvePoolEvent_PoolInitialized | MulticollateralBondingCurvePoolEvent_PriceBiasChanged | MulticollateralBondingCurvePoolEvent_PriceChangeConfigChanged | MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged

/**
 * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
 */
export interface MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated {
    __kind: 'OptionalRewardMultiplierUpdated'
    value: [AssetId32, (FixedPoint | undefined)]
}

/**
 * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_PoolInitialized {
    __kind: 'PoolInitialized'
    value: [number, AssetId32]
}

/**
 * Price bias was changed. [New Price Bias]
 */
export interface MulticollateralBondingCurvePoolEvent_PriceBiasChanged {
    __kind: 'PriceBiasChanged'
    value: bigint
}

/**
 * Price change config was changed. [New Price Change Rate, New Price Change Step]
 */
export interface MulticollateralBondingCurvePoolEvent_PriceChangeConfigChanged {
    __kind: 'PriceChangeConfigChanged'
    value: [bigint, bigint]
}

/**
 * Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: AssetId32
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type LiquidityProxyEvent = LiquidityProxyEvent_Exchange | LiquidityProxyEvent_LiquiditySourceDisabled | LiquidityProxyEvent_LiquiditySourceEnabled

/**
 * Exchange of tokens has been performed
 * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
 */
export interface LiquidityProxyEvent_Exchange {
    __kind: 'Exchange'
    value: [AccountId32, number, AssetId32, AssetId32, bigint, bigint, bigint, LiquiditySourceId[]]
}

/**
 * Liquidity source was disabled
 */
export interface LiquidityProxyEvent_LiquiditySourceDisabled {
    __kind: 'LiquiditySourceDisabled'
    value: LiquiditySourceType
}

/**
 * Liquidity source was enabled
 */
export interface LiquidityProxyEvent_LiquiditySourceEnabled {
    __kind: 'LiquiditySourceEnabled'
    value: LiquiditySourceType
}

export interface LiquiditySourceId {
    dexId: number
    liquiditySourceIndex: LiquiditySourceType
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IrohaMigrationEvent = IrohaMigrationEvent_Migrated

/**
 * Migrated. [source, target]
 */
export interface IrohaMigrationEvent_Migrated {
    __kind: 'Migrated'
    value: [string, AccountId32]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Bytes
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [AccountId32, Exposure][]
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId32
    value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: AccountId32
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: AccountId32
    registrarIndex: number
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type HermesGovernancePlatformEvent = HermesGovernancePlatformEvent_Created | HermesGovernancePlatformEvent_CreatorFundsWithdrawn | HermesGovernancePlatformEvent_MinimumHermesForCreatingPollChanged | HermesGovernancePlatformEvent_MinimumHermesForVotingChanged | HermesGovernancePlatformEvent_Voted | HermesGovernancePlatformEvent_VoterFundsWithdrawn

/**
 * Create poll [who, title, start_timestamp, end_timestamp]
 */
export interface HermesGovernancePlatformEvent_Created {
    __kind: 'Created'
    value: [AccountId32, string, bigint, bigint]
}

/**
 * Creator Funds Withdrawn [who, balance]
 */
export interface HermesGovernancePlatformEvent_CreatorFundsWithdrawn {
    __kind: 'CreatorFundsWithdrawn'
    value: [AccountId32, bigint]
}

/**
 * Change minimum Hermes for creating poll [balance]
 */
export interface HermesGovernancePlatformEvent_MinimumHermesForCreatingPollChanged {
    __kind: 'MinimumHermesForCreatingPollChanged'
    value: bigint
}

/**
 * Change minimum Hermes for voting [balance]
 */
export interface HermesGovernancePlatformEvent_MinimumHermesForVotingChanged {
    __kind: 'MinimumHermesForVotingChanged'
    value: bigint
}

/**
 * Voting [who, poll, option]
 */
export interface HermesGovernancePlatformEvent_Voted {
    __kind: 'Voted'
    value: [AccountId32, H256, VotingOption]
}

/**
 * Voter Funds Withdrawn [who, balance]
 */
export interface HermesGovernancePlatformEvent_VoterFundsWithdrawn {
    __kind: 'VoterFundsWithdrawn'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Public, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type FaucetEvent = FaucetEvent_LimitUpdated | FaucetEvent_Transferred

export interface FaucetEvent_LimitUpdated {
    __kind: 'LimitUpdated'
    value: bigint
}

export interface FaucetEvent_Transferred {
    __kind: 'Transferred'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type EthBridgeEvent = EthBridgeEvent_ApprovalsCollected | EthBridgeEvent_CancellationFailed | EthBridgeEvent_IncomingRequestFinalizationFailed | EthBridgeEvent_IncomingRequestFinalized | EthBridgeEvent_RequestAborted | EthBridgeEvent_RequestFinalizationFailed | EthBridgeEvent_RequestRegistered

/**
 * The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
 */
export interface EthBridgeEvent_ApprovalsCollected {
    __kind: 'ApprovalsCollected'
    value: H256
}

/**
 * The request wasn't finalized nor cancelled. [Request Hash]
 */
export interface EthBridgeEvent_CancellationFailed {
    __kind: 'CancellationFailed'
    value: H256
}

/**
 * The incoming request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalizationFailed {
    __kind: 'IncomingRequestFinalizationFailed'
    value: H256
}

/**
 * The incoming request has been finalized. [Request Hash]
 */
export interface EthBridgeEvent_IncomingRequestFinalized {
    __kind: 'IncomingRequestFinalized'
    value: H256
}

/**
 * The request was aborted and cancelled. [Request Hash]
 */
export interface EthBridgeEvent_RequestAborted {
    __kind: 'RequestAborted'
    value: H256
}

/**
 * The request finalization has been failed. [Request Hash]
 */
export interface EthBridgeEvent_RequestFinalizationFailed {
    __kind: 'RequestFinalizationFailed'
    value: H256
}

/**
 * New request has been registered. [Request Hash]
 */
export interface EthBridgeEvent_RequestRegistered {
    __kind: 'RequestRegistered'
    value: H256
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ElectionsPhragmenEvent = ElectionsPhragmenEvent_CandidateSlashed | ElectionsPhragmenEvent_ElectionError | ElectionsPhragmenEvent_EmptyTerm | ElectionsPhragmenEvent_MemberKicked | ElectionsPhragmenEvent_NewTerm | ElectionsPhragmenEvent_Renounced | ElectionsPhragmenEvent_SeatHolderSlashed

/**
 * A candidate was slashed by amount due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface ElectionsPhragmenEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    candidate: AccountId32
    amount: bigint
}

/**
 * Internal error happened while trying to perform election.
 */
export interface ElectionsPhragmenEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 * No (or not enough) candidates existed for this round. This is different from
 * `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsPhragmenEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 * A member has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface ElectionsPhragmenEvent_MemberKicked {
    __kind: 'MemberKicked'
    member: AccountId32
}

/**
 * A new term with new_members. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface ElectionsPhragmenEvent_NewTerm {
    __kind: 'NewTerm'
    newMembers: [AccountId32, bigint][]
}

/**
 * Someone has renounced their candidacy.
 */
export interface ElectionsPhragmenEvent_Renounced {
    __kind: 'Renounced'
    candidate: AccountId32
}

/**
 * A seat holder was slashed by amount by being forcefully removed from the set.
 */
export interface ElectionsPhragmenEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    seatHolder: AccountId32
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 * The election has been finalized, with `Some` of the given computation, or else if the
 * election failed, `None`.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    electionCompute?: (ElectionCompute | undefined)
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: AccountId32
    value: bigint
}

/**
 * The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    round: number
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: AccountId32
    value: bigint
}

/**
 * A solution was stored with the given compute.
 * 
 * If the solution is signed, this means that it hasn't yet been processed. If the
 * solution is unsigned, this means that it has also been processed.
 * 
 * The `bool` is `true` when a previous solution was ejected to make room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    electionCompute: ElectionCompute
    prevEjected: boolean
}

/**
 * The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    round: number
}

export type ElectionCompute = ElectionCompute_Emergency | ElectionCompute_Fallback | ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Executed | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageReaped | DemocracyEvent_PreimageUsed | DemocracyEvent_ProposalCanceled | DemocracyEvent_Proposed | DemocracyEvent_Seconded | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_Voted

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    proposalHash: H256
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    refIndex: number
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    who: AccountId32
    target: AccountId32
}

/**
 * A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    refIndex: number
    result: Result<null, DispatchError>
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    refIndex: number
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    refIndex: number
}

/**
 * A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    proposalHash: H256
    refIndex: number
}

/**
 * A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    proposalHash: H256
    refIndex: number
}

/**
 * A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    proposalHash: H256
    who: AccountId32
    deposit: bigint
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    proposalHash: H256
    provider: AccountId32
    deposit: bigint
    reaper: AccountId32
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    proposalHash: H256
    provider: AccountId32
    deposit: bigint
}

/**
 * A proposal got canceled.
 */
export interface DemocracyEvent_ProposalCanceled {
    __kind: 'ProposalCanceled'
    propIndex: number
}

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
    deposit: bigint
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
    __kind: 'Seconded'
    seconder: AccountId32
    propIndex: number
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    refIndex: number
    threshold: VoteThreshold
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    proposalIndex: number
    deposit: bigint
    depositors: AccountId32[]
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    account: AccountId32
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    who: AccountId32
    proposalHash: H256
    until: number
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
    __kind: 'Voted'
    voter: AccountId32
    refIndex: number
    vote: AccountVote
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemeterFarmingPlatformEvent = DemeterFarmingPlatformEvent_DepositFeeChanged | DemeterFarmingPlatformEvent_Deposited | DemeterFarmingPlatformEvent_InfoChanged | DemeterFarmingPlatformEvent_MultiplierChanged | DemeterFarmingPlatformEvent_PoolAdded | DemeterFarmingPlatformEvent_PoolRemoved | DemeterFarmingPlatformEvent_RewardWithdrawn | DemeterFarmingPlatformEvent_TokenInfoChanged | DemeterFarmingPlatformEvent_TokenRegistered | DemeterFarmingPlatformEvent_TotalTokensChanged | DemeterFarmingPlatformEvent_Withdrawn

/**
 * DepositFeeChanged [who, base_asset, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_DepositFeeChanged {
    __kind: 'DepositFeeChanged'
    value: [AccountId32, AssetId32, AssetId32, AssetId32, boolean, bigint]
}

/**
 * Deposited [who, base_asset, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_Deposited {
    __kind: 'Deposited'
    value: [AccountId32, AssetId32, AssetId32, AssetId32, boolean, bigint]
}

/**
 * Info changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_InfoChanged {
    __kind: 'InfoChanged'
    value: [AccountId32, AssetId32, AssetId32, AssetId32, boolean, bigint]
}

/**
 * Multiplier Changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_MultiplierChanged {
    __kind: 'MultiplierChanged'
    value: [AccountId32, AssetId32, AssetId32, AssetId32, boolean, number]
}

/**
 * Pool added [who, base_asset, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_PoolAdded {
    __kind: 'PoolAdded'
    value: [AccountId32, AssetId32, AssetId32, AssetId32, boolean]
}

/**
 * Pool removed [who, base_asset, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_PoolRemoved {
    __kind: 'PoolRemoved'
    value: [AccountId32, AssetId32, AssetId32, AssetId32, boolean]
}

/**
 * Reward Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_RewardWithdrawn {
    __kind: 'RewardWithdrawn'
    value: [AccountId32, bigint, AssetId32, AssetId32, AssetId32, boolean]
}

/**
 * Token info changed [who, what]
 */
export interface DemeterFarmingPlatformEvent_TokenInfoChanged {
    __kind: 'TokenInfoChanged'
    value: [AccountId32, AssetId32]
}

/**
 * Token registered [who, what]
 */
export interface DemeterFarmingPlatformEvent_TokenRegistered {
    __kind: 'TokenRegistered'
    value: [AccountId32, AssetId32]
}

/**
 * Total tokens changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
 */
export interface DemeterFarmingPlatformEvent_TotalTokensChanged {
    __kind: 'TotalTokensChanged'
    value: [AccountId32, AssetId32, AssetId32, AssetId32, boolean, bigint]
}

/**
 * Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
 */
export interface DemeterFarmingPlatformEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint, AssetId32, AssetId32, AssetId32, boolean]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Closed | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    proposalIndex: number
    proposalHash: H256
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    proposalHash: H256
    voted: boolean
    yes: number
    no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresTokenLockerEvent = CeresTokenLockerEvent_FeeChanged | CeresTokenLockerEvent_Locked | CeresTokenLockerEvent_Withdrawn

/**
 * Fee Changed [who, amount]
 */
export interface CeresTokenLockerEvent_FeeChanged {
    __kind: 'FeeChanged'
    value: [AccountId32, bigint]
}

/**
 * Funds Locked [who, amount, asset]
 */
export interface CeresTokenLockerEvent_Locked {
    __kind: 'Locked'
    value: [AccountId32, bigint, AssetId32]
}

/**
 * Funds Withdrawn [who, amount, asset]
 */
export interface CeresTokenLockerEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint, AssetId32]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresStakingEvent = CeresStakingEvent_Deposited | CeresStakingEvent_RewardsChanged | CeresStakingEvent_Withdrawn

/**
 * Ceres deposited. [who, amount]
 */
export interface CeresStakingEvent_Deposited {
    __kind: 'Deposited'
    value: [AccountId32, bigint]
}

/**
 * Rewards changed [balance]
 */
export interface CeresStakingEvent_RewardsChanged {
    __kind: 'RewardsChanged'
    value: bigint
}

/**
 * Staked Ceres and rewards withdrawn. [who, staked, rewards]
 */
export interface CeresStakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresLiquidityLockerEvent = CeresLiquidityLockerEvent_Locked

/**
 * Funds Locked [who, amount, timestamp]
 */
export interface CeresLiquidityLockerEvent_Locked {
    __kind: 'Locked'
    value: [AccountId32, bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresLaunchpadEvent = CeresLaunchpadEvent_Claimed | CeresLaunchpadEvent_ClaimedLP | CeresLaunchpadEvent_ClaimedPSWAP | CeresLaunchpadEvent_Contributed | CeresLaunchpadEvent_EmergencyWithdrawn | CeresLaunchpadEvent_FeeChanged | CeresLaunchpadEvent_ILOCreated | CeresLaunchpadEvent_ILOFinished | CeresLaunchpadEvent_RemovedWhitelistedContributor | CeresLaunchpadEvent_RemovedWhitelistedIloOrganizer | CeresLaunchpadEvent_WhitelistedContributor | CeresLaunchpadEvent_WhitelistedIloOrganizer

/**
 * Claim tokens [who, what]
 */
export interface CeresLaunchpadEvent_Claimed {
    __kind: 'Claimed'
    value: [AccountId32, AssetId32]
}

/**
 * Claim LP Tokens [who, what]
 */
export interface CeresLaunchpadEvent_ClaimedLP {
    __kind: 'ClaimedLP'
    value: [AccountId32, AssetId32]
}

/**
 * PSWAP claimed
 */
export interface CeresLaunchpadEvent_ClaimedPSWAP {
    __kind: 'ClaimedPSWAP'
}

/**
 * Contribute [who, what, balance]
 */
export interface CeresLaunchpadEvent_Contributed {
    __kind: 'Contributed'
    value: [AccountId32, AssetId32, bigint]
}

/**
 * Emergency withdraw [who, what, balance]
 */
export interface CeresLaunchpadEvent_EmergencyWithdrawn {
    __kind: 'EmergencyWithdrawn'
    value: [AccountId32, AssetId32, bigint]
}

/**
 * Fee changed [balance]
 */
export interface CeresLaunchpadEvent_FeeChanged {
    __kind: 'FeeChanged'
    value: bigint
}

/**
 * ILO created [who, what]
 */
export interface CeresLaunchpadEvent_ILOCreated {
    __kind: 'ILOCreated'
    value: [AccountId32, AssetId32]
}

/**
 * ILO finished [who, what]
 */
export interface CeresLaunchpadEvent_ILOFinished {
    __kind: 'ILOFinished'
    value: [AccountId32, AssetId32]
}

/**
 * Contributor removed [who]
 */
export interface CeresLaunchpadEvent_RemovedWhitelistedContributor {
    __kind: 'RemovedWhitelistedContributor'
    value: AccountId32
}

/**
 * ILO organizer removed [who]
 */
export interface CeresLaunchpadEvent_RemovedWhitelistedIloOrganizer {
    __kind: 'RemovedWhitelistedIloOrganizer'
    value: AccountId32
}

/**
 * Contributor whitelisted [who]
 */
export interface CeresLaunchpadEvent_WhitelistedContributor {
    __kind: 'WhitelistedContributor'
    value: AccountId32
}

/**
 * ILO organizer whitelisted [who]
 */
export interface CeresLaunchpadEvent_WhitelistedIloOrganizer {
    __kind: 'WhitelistedIloOrganizer'
    value: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CeresGovernancePlatformEvent = CeresGovernancePlatformEvent_Created | CeresGovernancePlatformEvent_Voted | CeresGovernancePlatformEvent_Withdrawn

/**
 * Create poll [who, option, start_timestamp, end_timestamp]
 */
export interface CeresGovernancePlatformEvent_Created {
    __kind: 'Created'
    value: [AccountId32, number, bigint, bigint]
}

/**
 * Voting [who, poll, option, balance]
 */
export interface CeresGovernancePlatformEvent_Voted {
    __kind: 'Voted'
    value: [AccountId32, Bytes, number, bigint]
}

/**
 * Withdrawn [who, balance]
 */
export interface CeresGovernancePlatformEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint]
}

/**
 * Events type.
 */
export type BridgeMultisigEvent = BridgeMultisigEvent_MultisigAccountCreated | BridgeMultisigEvent_MultisigApproval | BridgeMultisigEvent_MultisigCancelled | BridgeMultisigEvent_MultisigExecuted | BridgeMultisigEvent_NewMultisig

/**
 * A new multisig created. [multisig]
 */
export interface BridgeMultisigEvent_MultisigAccountCreated {
    __kind: 'MultisigAccountCreated'
    value: AccountId32
}

/**
 * A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [AccountId32, BridgeTimepoint, AccountId32, Bytes]
}

/**
 * A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [AccountId32, BridgeTimepoint, AccountId32, Bytes]
}

/**
 * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
 */
export interface BridgeMultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [AccountId32, BridgeTimepoint, AccountId32, Bytes, (DispatchError | undefined)]
}

/**
 * A new multisig operation has begun. [approving, multisig, call_hash]
 */
export interface BridgeMultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [AccountId32, AccountId32, Bytes]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BandEvent = BandEvent_RelayersAdded | BandEvent_RelayersRemoved | BandEvent_SymbolsRelayed

/**
 * Added new trusted relayer accounts. [relayers]
 */
export interface BandEvent_RelayersAdded {
    __kind: 'RelayersAdded'
    value: AccountId32[]
}

/**
 * Relayer accounts were removed from trusted list. [relayers]
 */
export interface BandEvent_RelayersRemoved {
    __kind: 'RelayersRemoved'
    value: AccountId32[]
}

/**
 * New symbol rates were successfully relayed. [symbols]
 */
export interface BandEvent_SymbolsRelayed {
    __kind: 'SymbolsRelayed'
    value: SymbolName[]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Slashed | BalancesEvent_Transfer | BalancesEvent_Unreserved | BalancesEvent_Withdraw

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: AccountId32
    free: bigint
    reserved: bigint
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: AccountId32
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: AccountId32
    amount: bigint
}

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: AccountId32
    freeBalance: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: AccountId32
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: AccountId32
    amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BagsListEvent = BagsListEvent_Rebagged | BagsListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface BagsListEvent_Rebagged {
    __kind: 'Rebagged'
    who: AccountId32
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface BagsListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: AccountId32
    newScore: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type AssetsEvent = AssetsEvent_AssetRegistered | AssetsEvent_AssetSetNonMintable | AssetsEvent_Burn | AssetsEvent_Mint | AssetsEvent_Transfer

/**
 * New asset has been registered. [Asset Id, Asset Owner Account]
 */
export interface AssetsEvent_AssetRegistered {
    __kind: 'AssetRegistered'
    value: [AssetId32, AccountId32]
}

/**
 * Asset is set as non-mintable. [Target Asset Id]
 */
export interface AssetsEvent_AssetSetNonMintable {
    __kind: 'AssetSetNonMintable'
    value: AssetId32
}

/**
 * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
 */
export interface AssetsEvent_Burn {
    __kind: 'Burn'
    value: [AccountId32, AssetId32, bigint]
}

/**
 * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
 */
export interface AssetsEvent_Mint {
    __kind: 'Mint'
    value: [AccountId32, AccountId32, AssetId32, bigint]
}

/**
 * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
 */
export interface AssetsEvent_Transfer {
    __kind: 'Transfer'
    value: [AccountId32, AccountId32, AssetId32, bigint]
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
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Assets: AssetsEvent,
        BagsList: BagsListEvent,
        Balances: BalancesEvent,
        Band: BandEvent,
        BridgeMultisig: BridgeMultisigEvent,
        CeresGovernancePlatform: CeresGovernancePlatformEvent,
        CeresLaunchpad: CeresLaunchpadEvent,
        CeresLiquidityLocker: CeresLiquidityLockerEvent,
        CeresStaking: CeresStakingEvent,
        CeresTokenLocker: CeresTokenLockerEvent,
        Council: CouncilEvent,
        DemeterFarmingPlatform: DemeterFarmingPlatformEvent,
        Democracy: DemocracyEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
        ElectionsPhragmen: ElectionsPhragmenEvent,
        EthBridge: EthBridgeEvent,
        Faucet: FaucetEvent,
        Grandpa: GrandpaEvent,
        HermesGovernancePlatform: HermesGovernancePlatformEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        IrohaMigration: IrohaMigrationEvent,
        LiquidityProxy: LiquidityProxyEvent,
        MulticollateralBondingCurvePool: MulticollateralBondingCurvePoolEvent,
        Multisig: MultisigEvent,
        Offences: OffencesEvent,
        OracleProxy: OracleProxyEvent,
        Permissions: PermissionsEvent,
        PoolXYK: PoolXYKEvent,
        PriceTools: PriceToolsEvent,
        PswapDistribution: PswapDistributionEvent,
        Rewards: RewardsEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Staking: StakingEvent,
        Sudo: SudoEvent,
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const XorFeeEvent: sts.Type<XorFeeEvent> = sts.closedEnum(() => {
    return  {
        FeeWithdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
        ReferrerRewarded: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
        WeightToFeeMultiplierUpdated: FixedU128,
    }
})

export const FixedU128 = sts.bigint()

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const XSTPoolEvent: sts.Type<XSTPoolEvent> = sts.closedEnum(() => {
    return  {
        PoolInitialized: sts.tuple(() => [sts.number(), AssetId32]),
        ReferenceAssetChanged: AssetId32,
        SyntheticAssetEnabled: AssetId32,
        SyntheticBaseAssetFloorPriceChanged: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const VestedRewardsEvent: sts.Type<VestedRewardsEvent> = sts.closedEnum(() => {
    return  {
        ActualDoesntMatchAvailable: RewardReason,
        FailedToSaveCalculatedReward: AccountId32,
        RewardsVested: sts.bigint(),
    }
})

export const RewardReason: sts.Type<RewardReason> = sts.closedEnum(() => {
    return  {
        BuyOnBondingCurve: sts.unit(),
        Crowdloan: sts.unit(),
        DeprecatedMarketMakerVolume: sts.unit(),
        LiquidityProvisionFarming: sts.unit(),
        Unspecified: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchCompletedWithErrors: sts.unit(),
        BatchInterrupted: sts.enumStruct({
            index: sts.number(),
            error: DispatchError,
        }),
        DispatchedAs: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ItemCompleted: sts.unit(),
        ItemFailed: sts.enumStruct({
            error: DispatchError,
        }),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return  {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TradingPairEvent: sts.Type<TradingPairEvent> = sts.closedEnum(() => {
    return  {
        TradingPairStored: sts.tuple(() => [sts.number(), TradingPair]),
    }
})

export const TradingPair: sts.Type<TradingPair> = sts.struct(() => {
    return  {
        baseAssetId: AssetId32,
        targetAssetId: AssetId32,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TokensEvent: sts.Type<TokensEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        }),
        Deposited: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DustLost: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Endowed: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            amount: sts.bigint(),
        }),
        LockRemoved: sts.enumStruct({
            lockId: sts.bytes(),
            currencyId: AssetId32,
            who: AccountId32,
        }),
        LockSet: sts.enumStruct({
            lockId: sts.bytes(),
            currencyId: AssetId32,
            who: AccountId32,
            amount: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            currencyId: AssetId32,
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
            status: BalanceStatus,
        }),
        Reserved: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        }),
        TotalIssuanceSet: sts.enumStruct({
            currencyId: AssetId32,
            amount: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            currencyId: AssetId32,
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Withdrawn: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            proposalHash: H256,
        }),
        Closed: sts.enumStruct({
            proposalHash: H256,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            proposalHash: H256,
        }),
        Executed: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            proposalIndex: sts.number(),
            proposalHash: H256,
            threshold: sts.number(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            proposalHash: H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TechnicalEvent: sts.Type<TechnicalEvent> = sts.closedEnum(() => {
    return  {
        Burned: sts.tuple(() => [TechAssetId, TechAccountId, sts.bigint(), sts.bigint()]),
        InputTransferred: sts.tuple(() => [TechAssetId, AccountId32, TechAccountId, sts.bigint()]),
        Minted: sts.tuple(() => [TechAssetId, TechAccountId, sts.bigint(), sts.bigint()]),
        OutputTransferred: sts.tuple(() => [TechAssetId, TechAccountId, AccountId32, sts.bigint()]),
        SwapSuccess: AccountId32,
    }
})

export const TechAccountId: sts.Type<TechAccountId> = sts.closedEnum(() => {
    return  {
        Generic: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        None: sts.unit(),
        Pure: sts.tuple(() => [sts.number(), TechPurpose]),
        Wrapped: AccountId32,
        WrappedRepr: AccountId32,
    }
})

export const TechPurpose: sts.Type<TechPurpose> = sts.closedEnum(() => {
    return  {
        FeeCollector: sts.unit(),
        FeeCollectorForPair: Type_79,
        Identifier: sts.bytes(),
        LiquidityKeeper: Type_79,
    }
})

export const Type_79: sts.Type<Type_79> = sts.struct(() => {
    return  {
        baseAssetId: TechAssetId,
        targetAssetId: TechAssetId,
    }
})

export const TechAssetId: sts.Type<TechAssetId> = sts.closedEnum(() => {
    return  {
        Escaped: sts.bytes(),
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
        TBCD: sts.unit(),
        USDT: sts.unit(),
        VAL: sts.unit(),
        XOR: sts.unit(),
        XST: sts.unit(),
        XSTUSD: sts.unit(),
    }
})

/**
 * Event for the System pallet.
 */
export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.enumStruct({
            dispatchError: DispatchError,
            dispatchInfo: DispatchInfo,
        }),
        ExtrinsicSuccess: sts.enumStruct({
            dispatchInfo: DispatchInfo,
        }),
        KilledAccount: sts.enumStruct({
            account: AccountId32,
        }),
        NewAccount: sts.enumStruct({
            account: AccountId32,
        }),
        Remarked: sts.enumStruct({
            sender: AccountId32,
            hash: H256,
        }),
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: sts.bigint(),
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return  {
        KeyChanged: sts.enumStruct({
            oldSudoer: sts.option(() => AccountId32),
        }),
        Sudid: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
        SudoAsDone: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Chilled: AccountId32,
        EraPaid: sts.tuple(() => [sts.number(), sts.bigint()]),
        Kicked: sts.tuple(() => [AccountId32, AccountId32]),
        OldSlashingReportDiscarded: sts.number(),
        PayoutStarted: sts.tuple(() => [sts.number(), AccountId32]),
        Rewarded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Slashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        ValidatorPrefsSet: sts.tuple(() => [AccountId32, ValidatorPrefs]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        CallLookupFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            error: LookupError,
        }),
        Canceled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        Dispatched: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Scheduled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
    }
})

export const LookupError: sts.Type<LookupError> = sts.closedEnum(() => {
    return  {
        BadFormat: sts.unit(),
        Unknown: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const RewardsEvent: sts.Type<RewardsEvent> = sts.closedEnum(() => {
    return  {
        Claimed: AccountId32,
        MigrationCompleted: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const PswapDistributionEvent: sts.Type<PswapDistributionEvent> = sts.closedEnum(() => {
    return  {
        BurnRateChanged: FixedPoint,
        FeesExchangeFailed: sts.tuple(() => [sts.number(), AccountId32, AssetId32, sts.bigint(), AssetId32, DispatchError]),
        FeesExchanged: sts.tuple(() => [sts.number(), AccountId32, AssetId32, sts.bigint(), AssetId32, sts.bigint()]),
        IncentiveDistributed: sts.tuple(() => [sts.number(), AccountId32, AssetId32, sts.bigint(), sts.bigint()]),
        IncentiveDistributionFailed: sts.tuple(() => [sts.number(), AccountId32]),
        IncentivesBurnedAfterExchange: sts.tuple(() => [sts.number(), AssetId32, sts.bigint(), sts.bigint()]),
        NothingToDistribute: sts.tuple(() => [sts.number(), AccountId32]),
        NothingToExchange: sts.tuple(() => [sts.number(), AccountId32]),
    }
})

export const FixedPoint: sts.Type<FixedPoint> = sts.struct(() => {
    return  {
        inner: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const PriceToolsEvent: sts.Type<PriceToolsEvent> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const PoolXYKEvent: sts.Type<PoolXYKEvent> = sts.closedEnum(() => {
    return  {
        PoolIsInitialized: AccountId32,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const PermissionsEvent: sts.Type<PermissionsEvent> = sts.closedEnum(() => {
    return  {
        PermissionAssigned: sts.tuple(() => [sts.number(), AccountId32]),
        PermissionCreated: sts.tuple(() => [sts.number(), AccountId32]),
        PermissionGranted: sts.tuple(() => [sts.number(), AccountId32]),
        PermissionTransfered: sts.tuple(() => [sts.number(), AccountId32]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const OracleProxyEvent: sts.Type<OracleProxyEvent> = sts.closedEnum(() => {
    return  {
        OracleDisabled: Oracle,
        OracleEnabled: Oracle,
    }
})

export const Oracle: sts.Type<Oracle> = sts.closedEnum(() => {
    return  {
        BandChainFeed: sts.unit(),
    }
})

/**
 * Events type.
 */
export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return  {
        Offence: sts.enumStruct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigCancelled: sts.enumStruct({
            cancelling: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigExecuted: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        NewMultisig: sts.enumStruct({
            approving: AccountId32,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const MulticollateralBondingCurvePoolEvent: sts.Type<MulticollateralBondingCurvePoolEvent> = sts.closedEnum(() => {
    return  {
        OptionalRewardMultiplierUpdated: sts.tuple(() => [AssetId32, sts.option(() => FixedPoint)]),
        PoolInitialized: sts.tuple(() => [sts.number(), AssetId32]),
        PriceBiasChanged: sts.bigint(),
        PriceChangeConfigChanged: sts.tuple(() => [sts.bigint(), sts.bigint()]),
        ReferenceAssetChanged: AssetId32,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const LiquidityProxyEvent: sts.Type<LiquidityProxyEvent> = sts.closedEnum(() => {
    return  {
        Exchange: sts.tuple(() => [AccountId32, sts.number(), AssetId32, AssetId32, sts.bigint(), sts.bigint(), sts.bigint(), sts.array(() => LiquiditySourceId)]),
        LiquiditySourceDisabled: LiquiditySourceType,
        LiquiditySourceEnabled: LiquiditySourceType,
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

export const LiquiditySourceId: sts.Type<LiquiditySourceId> = sts.struct(() => {
    return  {
        dexId: sts.number(),
        liquiditySourceIndex: LiquiditySourceType,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const IrohaMigrationEvent: sts.Type<IrohaMigrationEvent> = sts.closedEnum(() => {
    return  {
        Migrated: sts.tuple(() => [sts.string(), AccountId32]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: sts.enumStruct({
            authorityId: sts.bytes(),
        }),
        SomeOffline: sts.enumStruct({
            offline: sts.array(() => sts.tuple(() => [AccountId32, Exposure])),
        }),
    }
})

export const Exposure: sts.Type<Exposure> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId32,
        value: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentityKilled: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentitySet: sts.enumStruct({
            who: AccountId32,
        }),
        JudgementGiven: sts.enumStruct({
            target: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementRequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementUnrequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        RegistrarAdded: sts.enumStruct({
            registrarIndex: sts.number(),
        }),
        SubIdentityAdded: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRemoved: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRevoked: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const HermesGovernancePlatformEvent: sts.Type<HermesGovernancePlatformEvent> = sts.closedEnum(() => {
    return  {
        Created: sts.tuple(() => [AccountId32, sts.string(), sts.bigint(), sts.bigint()]),
        CreatorFundsWithdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
        MinimumHermesForCreatingPollChanged: sts.bigint(),
        MinimumHermesForVotingChanged: sts.bigint(),
        Voted: sts.tuple(() => [AccountId32, H256, VotingOption]),
        VoterFundsWithdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.enumStruct({
            authoritySet: sts.array(() => sts.tuple(() => [Public, sts.bigint()])),
        }),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const Public = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const FaucetEvent: sts.Type<FaucetEvent> = sts.closedEnum(() => {
    return  {
        LimitUpdated: sts.bigint(),
        Transferred: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ElectionsPhragmenEvent: sts.Type<ElectionsPhragmenEvent> = sts.closedEnum(() => {
    return  {
        CandidateSlashed: sts.enumStruct({
            candidate: AccountId32,
            amount: sts.bigint(),
        }),
        ElectionError: sts.unit(),
        EmptyTerm: sts.unit(),
        MemberKicked: sts.enumStruct({
            member: AccountId32,
        }),
        NewTerm: sts.enumStruct({
            newMembers: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
        }),
        Renounced: sts.enumStruct({
            candidate: AccountId32,
        }),
        SeatHolderSlashed: sts.enumStruct({
            seatHolder: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFinalized: sts.enumStruct({
            electionCompute: sts.option(() => ElectionCompute),
        }),
        Rewarded: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SignedPhaseStarted: sts.enumStruct({
            round: sts.number(),
        }),
        Slashed: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SolutionStored: sts.enumStruct({
            electionCompute: ElectionCompute,
            prevEjected: sts.boolean(),
        }),
        UnsignedPhaseStarted: sts.enumStruct({
            round: sts.number(),
        }),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return  {
        Emergency: sts.unit(),
        Fallback: sts.unit(),
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Blacklisted: sts.enumStruct({
            proposalHash: H256,
        }),
        Cancelled: sts.enumStruct({
            refIndex: sts.number(),
        }),
        Delegated: sts.enumStruct({
            who: AccountId32,
            target: AccountId32,
        }),
        Executed: sts.enumStruct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ExternalTabled: sts.unit(),
        NotPassed: sts.enumStruct({
            refIndex: sts.number(),
        }),
        Passed: sts.enumStruct({
            refIndex: sts.number(),
        }),
        PreimageInvalid: sts.enumStruct({
            proposalHash: H256,
            refIndex: sts.number(),
        }),
        PreimageMissing: sts.enumStruct({
            proposalHash: H256,
            refIndex: sts.number(),
        }),
        PreimageNoted: sts.enumStruct({
            proposalHash: H256,
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        PreimageReaped: sts.enumStruct({
            proposalHash: H256,
            provider: AccountId32,
            deposit: sts.bigint(),
            reaper: AccountId32,
        }),
        PreimageUsed: sts.enumStruct({
            proposalHash: H256,
            provider: AccountId32,
            deposit: sts.bigint(),
        }),
        ProposalCanceled: sts.enumStruct({
            propIndex: sts.number(),
        }),
        Proposed: sts.enumStruct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        }),
        Seconded: sts.enumStruct({
            seconder: AccountId32,
            propIndex: sts.number(),
        }),
        Started: sts.enumStruct({
            refIndex: sts.number(),
            threshold: VoteThreshold,
        }),
        Tabled: sts.enumStruct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => AccountId32),
        }),
        Undelegated: sts.enumStruct({
            account: AccountId32,
        }),
        Vetoed: sts.enumStruct({
            who: AccountId32,
            proposalHash: H256,
            until: sts.number(),
        }),
        Voted: sts.enumStruct({
            voter: AccountId32,
            refIndex: sts.number(),
            vote: AccountVote,
        }),
    }
})

export const AccountVote: sts.Type<AccountVote> = sts.closedEnum(() => {
    return  {
        Split: sts.enumStruct({
            aye: sts.bigint(),
            nay: sts.bigint(),
        }),
        Standard: sts.enumStruct({
            vote: Vote,
            balance: sts.bigint(),
        }),
    }
})

export const Vote = sts.number()

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const DemeterFarmingPlatformEvent: sts.Type<DemeterFarmingPlatformEvent> = sts.closedEnum(() => {
    return  {
        DepositFeeChanged: sts.tuple(() => [AccountId32, AssetId32, AssetId32, AssetId32, sts.boolean(), sts.bigint()]),
        Deposited: sts.tuple(() => [AccountId32, AssetId32, AssetId32, AssetId32, sts.boolean(), sts.bigint()]),
        InfoChanged: sts.tuple(() => [AccountId32, AssetId32, AssetId32, AssetId32, sts.boolean(), sts.bigint()]),
        MultiplierChanged: sts.tuple(() => [AccountId32, AssetId32, AssetId32, AssetId32, sts.boolean(), sts.number()]),
        PoolAdded: sts.tuple(() => [AccountId32, AssetId32, AssetId32, AssetId32, sts.boolean()]),
        PoolRemoved: sts.tuple(() => [AccountId32, AssetId32, AssetId32, AssetId32, sts.boolean()]),
        RewardWithdrawn: sts.tuple(() => [AccountId32, sts.bigint(), AssetId32, AssetId32, AssetId32, sts.boolean()]),
        TokenInfoChanged: sts.tuple(() => [AccountId32, AssetId32]),
        TokenRegistered: sts.tuple(() => [AccountId32, AssetId32]),
        TotalTokensChanged: sts.tuple(() => [AccountId32, AssetId32, AssetId32, AssetId32, sts.boolean(), sts.bigint()]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint(), AssetId32, AssetId32, AssetId32, sts.boolean()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            proposalHash: H256,
        }),
        Closed: sts.enumStruct({
            proposalHash: H256,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            proposalHash: H256,
        }),
        Executed: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            proposalIndex: sts.number(),
            proposalHash: H256,
            threshold: sts.number(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            proposalHash: H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CeresTokenLockerEvent: sts.Type<CeresTokenLockerEvent> = sts.closedEnum(() => {
    return  {
        FeeChanged: sts.tuple(() => [AccountId32, sts.bigint()]),
        Locked: sts.tuple(() => [AccountId32, sts.bigint(), AssetId32]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint(), AssetId32]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CeresStakingEvent: sts.Type<CeresStakingEvent> = sts.closedEnum(() => {
    return  {
        Deposited: sts.tuple(() => [AccountId32, sts.bigint()]),
        RewardsChanged: sts.bigint(),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint(), sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CeresLiquidityLockerEvent: sts.Type<CeresLiquidityLockerEvent> = sts.closedEnum(() => {
    return  {
        Locked: sts.tuple(() => [AccountId32, sts.bigint(), sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CeresLaunchpadEvent: sts.Type<CeresLaunchpadEvent> = sts.closedEnum(() => {
    return  {
        Claimed: sts.tuple(() => [AccountId32, AssetId32]),
        ClaimedLP: sts.tuple(() => [AccountId32, AssetId32]),
        ClaimedPSWAP: sts.unit(),
        Contributed: sts.tuple(() => [AccountId32, AssetId32, sts.bigint()]),
        EmergencyWithdrawn: sts.tuple(() => [AccountId32, AssetId32, sts.bigint()]),
        FeeChanged: sts.bigint(),
        ILOCreated: sts.tuple(() => [AccountId32, AssetId32]),
        ILOFinished: sts.tuple(() => [AccountId32, AssetId32]),
        RemovedWhitelistedContributor: AccountId32,
        RemovedWhitelistedIloOrganizer: AccountId32,
        WhitelistedContributor: AccountId32,
        WhitelistedIloOrganizer: AccountId32,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CeresGovernancePlatformEvent: sts.Type<CeresGovernancePlatformEvent> = sts.closedEnum(() => {
    return  {
        Created: sts.tuple(() => [AccountId32, sts.number(), sts.bigint(), sts.bigint()]),
        Voted: sts.tuple(() => [AccountId32, sts.bytes(), sts.number(), sts.bigint()]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * Events type.
 */
export const BridgeMultisigEvent: sts.Type<BridgeMultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigAccountCreated: AccountId32,
        MultisigApproval: sts.tuple(() => [AccountId32, BridgeTimepoint, AccountId32, sts.bytes()]),
        MultisigCancelled: sts.tuple(() => [AccountId32, BridgeTimepoint, AccountId32, sts.bytes()]),
        MultisigExecuted: sts.tuple(() => [AccountId32, BridgeTimepoint, AccountId32, sts.bytes(), sts.option(() => DispatchError)]),
        NewMultisig: sts.tuple(() => [AccountId32, AccountId32, sts.bytes()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const BandEvent: sts.Type<BandEvent> = sts.closedEnum(() => {
    return  {
        RelayersAdded: sts.array(() => AccountId32),
        RelayersRemoved: sts.array(() => AccountId32),
        SymbolsRelayed: sts.array(() => SymbolName),
    }
})

export const SymbolName = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.enumStruct({
            who: AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DustLost: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Endowed: sts.enumStruct({
            account: AccountId32,
            freeBalance: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
            destinationStatus: BalanceStatus,
        }),
        Reserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Withdraw: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const BagsListEvent: sts.Type<BagsListEvent> = sts.closedEnum(() => {
    return  {
        Rebagged: sts.enumStruct({
            who: AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        }),
        ScoreUpdated: sts.enumStruct({
            who: AccountId32,
            newScore: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const AssetsEvent: sts.Type<AssetsEvent> = sts.closedEnum(() => {
    return  {
        AssetRegistered: sts.tuple(() => [AssetId32, AccountId32]),
        AssetSetNonMintable: AssetId32,
        Burn: sts.tuple(() => [AccountId32, AssetId32, sts.bigint()]),
        Mint: sts.tuple(() => [AccountId32, AccountId32, AssetId32, sts.bigint()]),
        Transfer: sts.tuple(() => [AccountId32, AccountId32, AssetId32, sts.bigint()]),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const AssetId32: sts.Type<AssetId32> = sts.struct(() => {
    return  {
        code: sts.bytes(),
    }
})

export const MaybeHashed: sts.Type<MaybeHashed> = sts.closedEnum(() => {
    return  {
        Hash: H256,
        Value: Call,
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_202,
        TechnicalCommittee: Type_203,
        Void: Void,
        system: RawOrigin,
    }
})

export const RawOrigin: sts.Type<RawOrigin> = sts.closedEnum(() => {
    return  {
        None: sts.unit(),
        Root: sts.unit(),
        Signed: AccountId32,
    }
})

export const Void: sts.Type<Void> = sts.closedEnum(() => {
    return  {
    }
})

export const Type_203: sts.Type<Type_203> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_202: sts.Type<Type_202> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const BridgeTimepoint: sts.Type<BridgeTimepoint> = sts.struct(() => {
    return  {
        height: MultiChainHeight,
        index: sts.number(),
    }
})

export const MultiChainHeight: sts.Type<MultiChainHeight> = sts.closedEnum(() => {
    return  {
        Sidechain: sts.bigint(),
        Thischain: sts.number(),
    }
})

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Assets: AssetsCall,
        Authorship: AuthorshipCall,
        Babe: BabeCall,
        BagsList: BagsListCall,
        Balances: BalancesCall,
        Band: BandCall,
        BridgeMultisig: BridgeMultisigCall,
        CeresGovernancePlatform: CeresGovernancePlatformCall,
        CeresLaunchpad: CeresLaunchpadCall,
        CeresLiquidityLocker: CeresLiquidityLockerCall,
        CeresStaking: CeresStakingCall,
        CeresTokenLocker: CeresTokenLockerCall,
        Council: CouncilCall,
        Currencies: CurrenciesCall,
        DEXAPI: DEXAPICall,
        DemeterFarmingPlatform: DemeterFarmingPlatformCall,
        Democracy: DemocracyCall,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseCall,
        ElectionsPhragmen: ElectionsPhragmenCall,
        EthBridge: EthBridgeCall,
        Faucet: FaucetCall,
        Grandpa: GrandpaCall,
        HermesGovernancePlatform: HermesGovernancePlatformCall,
        Identity: IdentityCall,
        ImOnline: ImOnlineCall,
        IrohaMigration: IrohaMigrationCall,
        LiquidityProxy: LiquidityProxyCall,
        MulticollateralBondingCurvePool: MulticollateralBondingCurvePoolCall,
        Multisig: MultisigCall,
        OracleProxy: OracleProxyCall,
        Permissions: PermissionsCall,
        PoolXYK: PoolXYKCall,
        PswapDistribution: PswapDistributionCall,
        Referrals: ReferralsCall,
        Rewards: RewardsCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Staking: StakingCall,
        Sudo: SudoCall,
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XorFeeCall: sts.Type<XorFeeCall> = sts.closedEnum(() => {
    return  {
        update_multiplier: sts.enumStruct({
            newMultiplier: FixedU128,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XSTPoolCall: sts.Type<XSTPoolCall> = sts.closedEnum(() => {
    return  {
        enable_synthetic_asset: sts.enumStruct({
            syntheticAsset: AssetId32,
        }),
        initialize_pool: sts.enumStruct({
            syntheticAssetId: AssetId32,
        }),
        set_reference_asset: sts.enumStruct({
            referenceAssetId: AssetId32,
        }),
        set_synthetic_base_asset_floor_price: sts.enumStruct({
            floorPrice: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const VestedRewardsCall: sts.Type<VestedRewardsCall> = sts.closedEnum(() => {
    return  {
        claim_crowdloan_rewards: sts.enumStruct({
            assetId: AssetId32,
        }),
        claim_rewards: sts.unit(),
        update_rewards: sts.enumStruct({
            rewards: sts.array(() => sts.tuple(() => [AccountId32, sts.array(() => sts.tuple(() => [RewardReason, sts.bigint()]))])),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const UtilityCall: sts.Type<UtilityCall> = sts.closedEnum(() => {
    return  {
        as_derivative: sts.enumStruct({
            index: sts.number(),
            call: Call,
        }),
        batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        batch_all: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
        dispatch_as: sts.enumStruct({
            asOrigin: OriginCaller,
            call: Call,
        }),
        force_batch: sts.enumStruct({
            calls: sts.array(() => Call),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TradingPairCall: sts.Type<TradingPairCall> = sts.closedEnum(() => {
    return  {
        register: sts.enumStruct({
            dexId: sts.number(),
            baseAssetId: AssetId32,
            targetAssetId: AssetId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TechnicalMembershipCall: sts.Type<TechnicalMembershipCall> = sts.closedEnum(() => {
    return  {
        add_member: sts.enumStruct({
            who: AccountId32,
        }),
        change_key: sts.enumStruct({
            new: AccountId32,
        }),
        clear_prime: sts.unit(),
        remove_member: sts.enumStruct({
            who: AccountId32,
        }),
        reset_members: sts.enumStruct({
            members: sts.array(() => AccountId32),
        }),
        set_prime: sts.enumStruct({
            who: AccountId32,
        }),
        swap_member: sts.enumStruct({
            remove: AccountId32,
            add: AccountId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TechnicalCommitteeCall: sts.Type<TechnicalCommitteeCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TechnicalCall: sts.Type<TechnicalCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        fill_block: sts.enumStruct({
            ratio: Perbill,
        }),
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
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
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

export const Perbill = sts.number()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: AccountId32,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: AccountId32,
            call: Call,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Call,
            weight: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const StakingCall: sts.Type<StakingCall> = sts.closedEnum(() => {
    return  {
        bond: sts.enumStruct({
            controller: AccountId32,
            value: sts.bigint(),
            payee: RewardDestination,
        }),
        bond_extra: sts.enumStruct({
            maxAdditional: sts.bigint(),
        }),
        cancel_deferred_slash: sts.enumStruct({
            era: sts.number(),
            slashIndices: sts.array(() => sts.number()),
        }),
        chill: sts.unit(),
        chill_other: sts.enumStruct({
            controller: AccountId32,
        }),
        force_apply_min_commission: sts.enumStruct({
            validatorStash: AccountId32,
        }),
        force_new_era: sts.unit(),
        force_new_era_always: sts.unit(),
        force_no_eras: sts.unit(),
        force_unstake: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        increase_validator_count: sts.enumStruct({
            additional: sts.number(),
        }),
        kick: sts.enumStruct({
            who: sts.array(() => AccountId32),
        }),
        nominate: sts.enumStruct({
            targets: sts.array(() => AccountId32),
        }),
        payout_stakers: sts.enumStruct({
            validatorStash: AccountId32,
            era: sts.number(),
        }),
        reap_stash: sts.enumStruct({
            stash: AccountId32,
            numSlashingSpans: sts.number(),
        }),
        rebond: sts.enumStruct({
            value: sts.bigint(),
        }),
        scale_validator_count: sts.enumStruct({
            factor: Percent,
        }),
        set_controller: sts.enumStruct({
            controller: AccountId32,
        }),
        set_history_depth: sts.enumStruct({
            newHistoryDepth: sts.number(),
            eraItemsDeleted: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: ConfigOp,
            minValidatorBond: ConfigOp,
            maxNominatorCount: Type_212,
            maxValidatorCount: Type_212,
            chillThreshold: Type_213,
            minCommission: Type_214,
        }),
        set_validator_count: sts.enumStruct({
            new: sts.number(),
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

export const Type_214: sts.Type<Type_214> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export const Type_213: sts.Type<Type_213> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Percent,
    }
})

export const Type_212: sts.Type<Type_212> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.number(),
    }
})

export const ConfigOp: sts.Type<ConfigOp> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: sts.bigint(),
    }
})

export const Percent = sts.number()

export const RewardDestination: sts.Type<RewardDestination> = sts.closedEnum(() => {
    return  {
        Account: AccountId32,
        Controller: sts.unit(),
        None: sts.unit(),
        Staked: sts.unit(),
        Stash: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return  {
        babe: sts.bytes(),
        grandpa: Public,
        imOnline: sts.bytes(),
        beefy: sts.bytes(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SchedulerCall: sts.Type<SchedulerCall> = sts.closedEnum(() => {
    return  {
        cancel: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        cancel_named: sts.enumStruct({
            id: sts.bytes(),
        }),
        schedule: sts.enumStruct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: MaybeHashed,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const RewardsCall: sts.Type<RewardsCall> = sts.closedEnum(() => {
    return  {
        add_umi_nft_receivers: sts.enumStruct({
            receivers: sts.array(() => H160),
        }),
        claim: sts.enumStruct({
            signature: sts.bytes(),
        }),
    }
})

export const H160 = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ReferralsCall: sts.Type<ReferralsCall> = sts.closedEnum(() => {
    return  {
        reserve: sts.enumStruct({
            balance: sts.bigint(),
        }),
        set_referrer: sts.enumStruct({
            referrer: AccountId32,
        }),
        unreserve: sts.enumStruct({
            balance: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PswapDistributionCall: sts.Type<PswapDistributionCall> = sts.closedEnum(() => {
    return  {
        claim_incentive: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PoolXYKCall: sts.Type<PoolXYKCall> = sts.closedEnum(() => {
    return  {
        deposit_liquidity: sts.enumStruct({
            dexId: sts.number(),
            inputAssetA: AssetId32,
            inputAssetB: AssetId32,
            inputADesired: sts.bigint(),
            inputBDesired: sts.bigint(),
            inputAMin: sts.bigint(),
            inputBMin: sts.bigint(),
        }),
        initialize_pool: sts.enumStruct({
            dexId: sts.number(),
            assetA: AssetId32,
            assetB: AssetId32,
        }),
        withdraw_liquidity: sts.enumStruct({
            dexId: sts.number(),
            outputAssetA: AssetId32,
            outputAssetB: AssetId32,
            markerAssetDesired: sts.bigint(),
            outputAMin: sts.bigint(),
            outputBMin: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PermissionsCall: sts.Type<PermissionsCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const OracleProxyCall: sts.Type<OracleProxyCall> = sts.closedEnum(() => {
    return  {
        disable_oracle: sts.enumStruct({
            oracle: Oracle,
        }),
        enable_oracle: sts.enumStruct({
            oracle: Oracle,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const MultisigCall: sts.Type<MultisigCall> = sts.closedEnum(() => {
    return  {
        approve_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            callHash: sts.bytes(),
            maxWeight: sts.bigint(),
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: sts.bytes(),
            storeCall: sts.boolean(),
            maxWeight: sts.bigint(),
        }),
        as_multi_threshold_1: sts.enumStruct({
            otherSignatories: sts.array(() => AccountId32),
            call: Call,
        }),
        cancel_as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            timepoint: Timepoint,
            callHash: sts.bytes(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const MulticollateralBondingCurvePoolCall: sts.Type<MulticollateralBondingCurvePoolCall> = sts.closedEnum(() => {
    return  {
        initialize_pool: sts.enumStruct({
            collateralAssetId: AssetId32,
        }),
        set_optional_reward_multiplier: sts.enumStruct({
            collateralAssetId: AssetId32,
            multiplier: sts.option(() => FixedPoint),
        }),
        set_price_bias: sts.enumStruct({
            priceBias: sts.bigint(),
        }),
        set_price_change_config: sts.enumStruct({
            priceChangeRate: sts.bigint(),
            priceChangeStep: sts.bigint(),
        }),
        set_reference_asset: sts.enumStruct({
            referenceAssetId: AssetId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const LiquidityProxyCall: sts.Type<LiquidityProxyCall> = sts.closedEnum(() => {
    return  {
        disable_liquidity_source: sts.enumStruct({
            liquiditySource: LiquiditySourceType,
        }),
        enable_liquidity_source: sts.enumStruct({
            liquiditySource: LiquiditySourceType,
        }),
        swap: sts.enumStruct({
            dexId: sts.number(),
            inputAssetId: AssetId32,
            outputAssetId: AssetId32,
            swapAmount: SwapAmount,
            selectedSourceTypes: sts.array(() => LiquiditySourceType),
            filterMode: FilterMode,
        }),
        swap_transfer: sts.enumStruct({
            receiver: AccountId32,
            dexId: sts.number(),
            inputAssetId: AssetId32,
            outputAssetId: AssetId32,
            swapAmount: SwapAmount,
            selectedSourceTypes: sts.array(() => LiquiditySourceType),
            filterMode: FilterMode,
        }),
        swap_transfer_batch: sts.enumStruct({
            receivers: sts.array(() => BatchReceiverInfo),
            dexId: sts.number(),
            inputAssetId: AssetId32,
            outputAssetId: AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => LiquiditySourceType),
            filterMode: FilterMode,
        }),
    }
})

export const BatchReceiverInfo: sts.Type<BatchReceiverInfo> = sts.struct(() => {
    return  {
        accountId: AccountId32,
        targetAmount: sts.bigint(),
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
        WithDesiredInput: sts.enumStruct({
            desiredAmountIn: sts.bigint(),
            minAmountOut: sts.bigint(),
        }),
        WithDesiredOutput: sts.enumStruct({
            desiredAmountOut: sts.bigint(),
            maxAmountIn: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const IrohaMigrationCall: sts.Type<IrohaMigrationCall> = sts.closedEnum(() => {
    return  {
        migrate: sts.enumStruct({
            irohaAddress: sts.string(),
            irohaPublicKey: sts.string(),
            irohaSignature: sts.string(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ImOnlineCall: sts.Type<ImOnlineCall> = sts.closedEnum(() => {
    return  {
        heartbeat: sts.enumStruct({
            heartbeat: Heartbeat,
            signature: sts.bytes(),
        }),
    }
})

export const Heartbeat: sts.Type<Heartbeat> = sts.struct(() => {
    return  {
        blockNumber: sts.number(),
        networkState: OpaqueNetworkState,
        sessionIndex: sts.number(),
        authorityIndex: sts.number(),
        validatorsLen: sts.number(),
    }
})

export const OpaqueNetworkState: sts.Type<OpaqueNetworkState> = sts.struct(() => {
    return  {
        peerId: OpaquePeerId,
        externalAddresses: sts.array(() => OpaqueMultiaddr),
    }
})

export const OpaqueMultiaddr = sts.bytes()

export const OpaquePeerId = sts.bytes()

/**
 * Identity pallet declaration.
 */
export const IdentityCall: sts.Type<IdentityCall> = sts.closedEnum(() => {
    return  {
        add_registrar: sts.enumStruct({
            account: AccountId32,
        }),
        add_sub: sts.enumStruct({
            sub: AccountId32,
            data: Data,
        }),
        cancel_request: sts.enumStruct({
            regIndex: sts.number(),
        }),
        clear_identity: sts.unit(),
        kill_identity: sts.enumStruct({
            target: AccountId32,
        }),
        provide_judgement: sts.enumStruct({
            regIndex: sts.number(),
            target: AccountId32,
            judgement: Judgement,
        }),
        quit_sub: sts.unit(),
        remove_sub: sts.enumStruct({
            sub: AccountId32,
        }),
        rename_sub: sts.enumStruct({
            sub: AccountId32,
            data: Data,
        }),
        request_judgement: sts.enumStruct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        }),
        set_account_id: sts.enumStruct({
            index: sts.number(),
            new: AccountId32,
        }),
        set_fee: sts.enumStruct({
            index: sts.number(),
            fee: sts.bigint(),
        }),
        set_fields: sts.enumStruct({
            index: sts.number(),
            fields: BitFlags,
        }),
        set_identity: sts.enumStruct({
            info: IdentityInfo,
        }),
        set_subs: sts.enumStruct({
            subs: sts.array(() => sts.tuple(() => [AccountId32, Data])),
        }),
    }
})

export const IdentityInfo: sts.Type<IdentityInfo> = sts.struct(() => {
    return  {
        additional: sts.array(() => sts.tuple(() => [Data, Data])),
        display: Data,
        legal: Data,
        web: Data,
        riot: Data,
        email: Data,
        pgpFingerprint: sts.option(() => sts.bytes()),
        image: Data,
        twitter: Data,
    }
})

export const BitFlags = sts.bigint()

export const Judgement: sts.Type<Judgement> = sts.closedEnum(() => {
    return  {
        Erroneous: sts.unit(),
        FeePaid: sts.bigint(),
        KnownGood: sts.unit(),
        LowQuality: sts.unit(),
        OutOfDate: sts.unit(),
        Reasonable: sts.unit(),
        Unknown: sts.unit(),
    }
})

export const Data: sts.Type<Data> = sts.closedEnum(() => {
    return  {
        BlakeTwo256: sts.bytes(),
        Keccak256: sts.bytes(),
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
        Sha256: sts.bytes(),
        ShaThree256: sts.bytes(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const HermesGovernancePlatformCall: sts.Type<HermesGovernancePlatformCall> = sts.closedEnum(() => {
    return  {
        change_min_hermes_for_creating_poll: sts.enumStruct({
            hermesAmount: sts.bigint(),
        }),
        change_min_hermes_for_voting: sts.enumStruct({
            hermesAmount: sts.bigint(),
        }),
        create_poll: sts.enumStruct({
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
            title: sts.string(),
            description: sts.string(),
        }),
        vote: sts.enumStruct({
            pollId: H256,
            votingOption: VotingOption,
        }),
        withdraw_funds_creator: sts.enumStruct({
            pollId: H256,
        }),
        withdraw_funds_voter: sts.enumStruct({
            pollId: H256,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const GrandpaCall: sts.Type<GrandpaCall> = sts.closedEnum(() => {
    return  {
        note_stalled: sts.enumStruct({
            delay: sts.number(),
            bestFinalizedBlockNumber: sts.number(),
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: Type_221,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_221,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const MembershipProof: sts.Type<MembershipProof> = sts.struct(() => {
    return  {
        session: sts.number(),
        trieNodes: sts.array(() => sts.bytes()),
        validatorCount: sts.number(),
    }
})

export const Type_221: sts.Type<Type_221> = sts.struct(() => {
    return  {
        setId: sts.bigint(),
        equivocation: Equivocation,
    }
})

export const Equivocation: sts.Type<Equivocation> = sts.closedEnum(() => {
    return  {
        Precommit: Type_228,
        Prevote: Type_223,
    }
})

export const Type_223: sts.Type<Type_223> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Prevote, Signature]),
        second: sts.tuple(() => [Prevote, Signature]),
    }
})

export const Signature = sts.bytes()

export const Prevote: sts.Type<Prevote> = sts.struct(() => {
    return  {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

export const Type_228: sts.Type<Type_228> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Precommit, Signature]),
        second: sts.tuple(() => [Precommit, Signature]),
    }
})

export const Precommit: sts.Type<Precommit> = sts.struct(() => {
    return  {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const FaucetCall: sts.Type<FaucetCall> = sts.closedEnum(() => {
    return  {
        reset_rewards: sts.unit(),
        transfer: sts.enumStruct({
            assetId: AssetId32,
            target: AccountId32,
            amount: sts.bigint(),
        }),
        update_limit: sts.enumStruct({
            newLimit: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const EthBridgeCall: sts.Type<EthBridgeCall> = sts.closedEnum(() => {
    return  {
        abort_request: sts.enumStruct({
            hash: H256,
            error: DispatchError,
            networkId: sts.number(),
        }),
        add_asset: sts.enumStruct({
            assetId: AssetId32,
            networkId: sts.number(),
        }),
        add_peer: sts.enumStruct({
            accountId: AccountId32,
            address: H160,
            networkId: sts.number(),
        }),
        add_sidechain_token: sts.enumStruct({
            tokenAddress: H160,
            symbol: sts.string(),
            name: sts.string(),
            decimals: sts.number(),
            networkId: sts.number(),
        }),
        approve_request: sts.enumStruct({
            ocwPublic: sts.bytes(),
            hash: H256,
            signatureParams: SignatureParams,
            networkId: sts.number(),
        }),
        finalize_incoming_request: sts.enumStruct({
            hash: H256,
            networkId: sts.number(),
        }),
        force_add_peer: sts.enumStruct({
            who: AccountId32,
            address: H160,
            networkId: sts.number(),
        }),
        import_incoming_request: sts.enumStruct({
            loadIncomingRequest: LoadIncomingRequest,
            incomingRequestResult: sts.result(() => IncomingRequest, () => DispatchError),
        }),
        migrate: sts.enumStruct({
            newContractAddress: H160,
            erc20NativeTokens: sts.array(() => H160),
            networkId: sts.number(),
            newSignatureVersion: BridgeSignatureVersion,
        }),
        prepare_for_migration: sts.enumStruct({
            networkId: sts.number(),
        }),
        register_bridge: sts.enumStruct({
            bridgeContractAddress: H160,
            initialPeers: sts.array(() => AccountId32),
            signatureVersion: BridgeSignatureVersion,
        }),
        register_existing_sidechain_asset: sts.enumStruct({
            assetId: AssetId32,
            tokenAddress: H160,
            networkId: sts.number(),
        }),
        register_incoming_request: sts.enumStruct({
            incomingRequest: IncomingRequest,
        }),
        remove_peer: sts.enumStruct({
            accountId: AccountId32,
            peerAddress: sts.option(() => H160),
            networkId: sts.number(),
        }),
        remove_sidechain_asset: sts.enumStruct({
            assetId: AssetId32,
            networkId: sts.number(),
        }),
        request_from_sidechain: sts.enumStruct({
            ethTxHash: H256,
            kind: IncomingRequestKind,
            networkId: sts.number(),
        }),
        transfer_to_sidechain: sts.enumStruct({
            assetId: AssetId32,
            to: H160,
            amount: sts.bigint(),
            networkId: sts.number(),
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

export const BridgeSignatureVersion: sts.Type<BridgeSignatureVersion> = sts.closedEnum(() => {
    return  {
        V1: sts.unit(),
        V2: sts.unit(),
        V3: sts.unit(),
    }
})

export const IncomingRequest: sts.Type<IncomingRequest> = sts.closedEnum(() => {
    return  {
        AddToken: IncomingAddToken,
        CancelOutgoingRequest: IncomingCancelOutgoingRequest,
        ChangePeers: IncomingChangePeers,
        ChangePeersCompat: IncomingChangePeersCompat,
        MarkAsDone: IncomingMarkAsDoneRequest,
        Migrate: IncomingMigrate,
        PrepareForMigration: IncomingPrepareForMigration,
        Transfer: IncomingTransfer,
    }
})

export const IncomingTransfer: sts.Type<IncomingTransfer> = sts.struct(() => {
    return  {
        from: H160,
        to: AccountId32,
        assetId: AssetId32,
        assetKind: AssetKind,
        amount: sts.bigint(),
        author: AccountId32,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
        shouldTakeFee: sts.boolean(),
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
        author: AccountId32,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
    }
})

export const IncomingMigrate: sts.Type<IncomingMigrate> = sts.struct(() => {
    return  {
        newContractAddress: H160,
        author: AccountId32,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
    }
})

export const IncomingMarkAsDoneRequest: sts.Type<IncomingMarkAsDoneRequest> = sts.struct(() => {
    return  {
        outgoingRequestHash: H256,
        initialRequestHash: H256,
        author: AccountId32,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
    }
})

export const IncomingChangePeersCompat: sts.Type<IncomingChangePeersCompat> = sts.struct(() => {
    return  {
        peerAccountId: AccountId32,
        peerAddress: H160,
        added: sts.boolean(),
        contract: ChangePeersContract,
        author: AccountId32,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
    }
})

export const ChangePeersContract: sts.Type<ChangePeersContract> = sts.closedEnum(() => {
    return  {
        VAL: sts.unit(),
        XOR: sts.unit(),
    }
})

export const IncomingChangePeers: sts.Type<IncomingChangePeers> = sts.struct(() => {
    return  {
        peerAccountId: sts.option(() => AccountId32),
        peerAddress: H160,
        removed: sts.boolean(),
        author: AccountId32,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
    }
})

export const IncomingCancelOutgoingRequest: sts.Type<IncomingCancelOutgoingRequest> = sts.struct(() => {
    return  {
        outgoingRequest: OutgoingRequest,
        outgoingRequestHash: H256,
        initialRequestHash: H256,
        txInput: sts.bytes(),
        author: AccountId32,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
    }
})

export const OutgoingRequest: sts.Type<OutgoingRequest> = sts.closedEnum(() => {
    return  {
        AddAsset: OutgoingAddAsset,
        AddPeer: OutgoingAddPeer,
        AddPeerCompat: OutgoingAddPeerCompat,
        AddToken: OutgoingAddToken,
        Migrate: OutgoingMigrate,
        PrepareForMigration: OutgoingPrepareForMigration,
        RemovePeer: OutgoingRemovePeer,
        RemovePeerCompat: OutgoingRemovePeerCompat,
        Transfer: OutgoingTransfer,
    }
})

export const OutgoingTransfer: sts.Type<OutgoingTransfer> = sts.struct(() => {
    return  {
        from: AccountId32,
        to: H160,
        assetId: AssetId32,
        amount: sts.bigint(),
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingRemovePeerCompat: sts.Type<OutgoingRemovePeerCompat> = sts.struct(() => {
    return  {
        author: AccountId32,
        peerAccountId: AccountId32,
        peerAddress: H160,
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingRemovePeer: sts.Type<OutgoingRemovePeer> = sts.struct(() => {
    return  {
        author: AccountId32,
        peerAccountId: AccountId32,
        peerAddress: H160,
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
        compatHash: sts.option(() => H256),
    }
})

export const OutgoingPrepareForMigration: sts.Type<OutgoingPrepareForMigration> = sts.struct(() => {
    return  {
        author: AccountId32,
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingMigrate: sts.Type<OutgoingMigrate> = sts.struct(() => {
    return  {
        author: AccountId32,
        newContractAddress: H160,
        erc20NativeTokens: sts.array(() => H160),
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
        newSignatureVersion: BridgeSignatureVersion,
    }
})

export const OutgoingAddToken: sts.Type<OutgoingAddToken> = sts.struct(() => {
    return  {
        author: AccountId32,
        tokenAddress: H160,
        symbol: sts.string(),
        name: sts.string(),
        decimals: sts.number(),
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingAddPeerCompat: sts.Type<OutgoingAddPeerCompat> = sts.struct(() => {
    return  {
        author: AccountId32,
        peerAddress: H160,
        peerAccountId: AccountId32,
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingAddPeer: sts.Type<OutgoingAddPeer> = sts.struct(() => {
    return  {
        author: AccountId32,
        peerAddress: H160,
        peerAccountId: AccountId32,
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
    }
})

export const OutgoingAddAsset: sts.Type<OutgoingAddAsset> = sts.struct(() => {
    return  {
        author: AccountId32,
        assetId: AssetId32,
        nonce: sts.number(),
        networkId: sts.number(),
        timepoint: BridgeTimepoint,
    }
})

export const IncomingAddToken: sts.Type<IncomingAddToken> = sts.struct(() => {
    return  {
        tokenAddress: H160,
        assetId: AssetId32,
        precision: sts.number(),
        symbol: AssetSymbol,
        name: AssetName,
        author: AccountId32,
        txHash: H256,
        atHeight: sts.bigint(),
        timepoint: BridgeTimepoint,
        networkId: sts.number(),
    }
})

export const AssetName = sts.bytes()

export const AssetSymbol = sts.bytes()

export const LoadIncomingRequest: sts.Type<LoadIncomingRequest> = sts.closedEnum(() => {
    return  {
        Meta: sts.tuple(() => [LoadIncomingMetaRequest, H256]),
        Transaction: LoadIncomingTransactionRequest,
    }
})

export const LoadIncomingTransactionRequest: sts.Type<LoadIncomingTransactionRequest> = sts.struct(() => {
    return  {
        author: AccountId32,
        hash: H256,
        timepoint: BridgeTimepoint,
        kind: IncomingTransactionRequestKind,
        networkId: sts.number(),
    }
})

export const LoadIncomingMetaRequest: sts.Type<LoadIncomingMetaRequest> = sts.struct(() => {
    return  {
        author: AccountId32,
        hash: H256,
        timepoint: BridgeTimepoint,
        kind: IncomingMetaRequestKind,
        networkId: sts.number(),
    }
})

export const SignatureParams: sts.Type<SignatureParams> = sts.struct(() => {
    return  {
        r: sts.bytes(),
        s: sts.bytes(),
        v: sts.number(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ElectionsPhragmenCall: sts.Type<ElectionsPhragmenCall> = sts.closedEnum(() => {
    return  {
        clean_defunct_voters: sts.enumStruct({
            numVoters: sts.number(),
            numDefunct: sts.number(),
        }),
        remove_member: sts.enumStruct({
            who: AccountId32,
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
            votes: sts.array(() => AccountId32),
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ElectionProviderMultiPhaseCall: sts.Type<ElectionProviderMultiPhaseCall> = sts.closedEnum(() => {
    return  {
        governance_fallback: sts.enumStruct({
            maybeMaxVoters: sts.option(() => sts.number()),
            maybeMaxTargets: sts.option(() => sts.number()),
        }),
        set_emergency_election_result: sts.enumStruct({
            supports: sts.array(() => sts.tuple(() => [AccountId32, Support])),
        }),
        set_minimum_untrusted_score: sts.enumStruct({
            maybeNextScore: sts.option(() => ElectionScore),
        }),
        submit: sts.enumStruct({
            rawSolution: RawSolution,
        }),
        submit_unsigned: sts.enumStruct({
            rawSolution: RawSolution,
            witness: SolutionOrSnapshotSize,
        }),
    }
})

export const SolutionOrSnapshotSize: sts.Type<SolutionOrSnapshotSize> = sts.struct(() => {
    return  {
        voters: sts.number(),
        targets: sts.number(),
    }
})

export const RawSolution: sts.Type<RawSolution> = sts.struct(() => {
    return  {
        solution: NposCompactSolution24,
        score: ElectionScore,
        round: sts.number(),
    }
})

export const NposCompactSolution24: sts.Type<NposCompactSolution24> = sts.struct(() => {
    return  {
        votes1: sts.array(() => sts.tuple(() => [sts.number(), sts.number()])),
        votes2: sts.array(() => sts.tuple(() => [sts.number(), sts.tuple(() => [sts.number(), sts.number()]), sts.number()])),
        votes3: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes4: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes5: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes6: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes7: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes8: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes9: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes10: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes11: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes12: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes13: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes14: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes15: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes16: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes17: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes18: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes19: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes20: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes21: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes22: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes23: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
        votes24: sts.array(() => sts.tuple(() => [sts.number(), sts.array(() => sts.tuple(() => [sts.number(), sts.number()])), sts.number()])),
    }
})

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return  {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
    }
})

export const Support: sts.Type<Support> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        voters: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DemocracyCall: sts.Type<DemocracyCall> = sts.closedEnum(() => {
    return  {
        blacklist: sts.enumStruct({
            proposalHash: H256,
            maybeRefIndex: sts.option(() => sts.number()),
        }),
        cancel_proposal: sts.enumStruct({
            propIndex: sts.number(),
        }),
        cancel_queued: sts.enumStruct({
            which: sts.number(),
        }),
        cancel_referendum: sts.enumStruct({
            refIndex: sts.number(),
        }),
        clear_public_proposals: sts.unit(),
        delegate: sts.enumStruct({
            to: AccountId32,
            conviction: Conviction,
            balance: sts.bigint(),
        }),
        emergency_cancel: sts.enumStruct({
            refIndex: sts.number(),
        }),
        enact_proposal: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
        }),
        external_propose: sts.enumStruct({
            proposalHash: H256,
        }),
        external_propose_default: sts.enumStruct({
            proposalHash: H256,
        }),
        external_propose_majority: sts.enumStruct({
            proposalHash: H256,
        }),
        fast_track: sts.enumStruct({
            proposalHash: H256,
            votingPeriod: sts.number(),
            delay: sts.number(),
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
            proposalHash: H256,
            value: sts.bigint(),
        }),
        reap_preimage: sts.enumStruct({
            proposalHash: H256,
            proposalLenUpperBound: sts.number(),
        }),
        remove_other_vote: sts.enumStruct({
            target: AccountId32,
            index: sts.number(),
        }),
        remove_vote: sts.enumStruct({
            index: sts.number(),
        }),
        second: sts.enumStruct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        }),
        undelegate: sts.unit(),
        unlock: sts.enumStruct({
            target: AccountId32,
        }),
        veto_external: sts.enumStruct({
            proposalHash: H256,
        }),
        vote: sts.enumStruct({
            refIndex: sts.number(),
            vote: AccountVote,
        }),
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DemeterFarmingPlatformCall: sts.Type<DemeterFarmingPlatformCall> = sts.closedEnum(() => {
    return  {
        add_pool: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
            multiplier: sts.number(),
            depositFee: sts.bigint(),
            isCore: sts.boolean(),
        }),
        change_info: sts.enumStruct({
            changedUser: AccountId32,
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
            poolTokens: sts.bigint(),
        }),
        change_pool_deposit_fee: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
            depositFee: sts.bigint(),
        }),
        change_pool_multiplier: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
            newMultiplier: sts.number(),
        }),
        change_token_info: sts.enumStruct({
            poolAsset: AssetId32,
            tokenPerBlock: sts.bigint(),
            farmsAllocation: sts.bigint(),
            stakingAllocation: sts.bigint(),
            teamAllocation: sts.bigint(),
            teamAccount: AccountId32,
        }),
        change_total_tokens: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
            totalTokens: sts.bigint(),
        }),
        deposit: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
            pooledTokens: sts.bigint(),
        }),
        get_rewards: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
        }),
        register_token: sts.enumStruct({
            poolAsset: AssetId32,
            tokenPerBlock: sts.bigint(),
            farmsAllocation: sts.bigint(),
            stakingAllocation: sts.bigint(),
            teamAllocation: sts.bigint(),
            teamAccount: AccountId32,
        }),
        remove_pool: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            isFarm: sts.boolean(),
        }),
        withdraw: sts.enumStruct({
            baseAsset: AssetId32,
            poolAsset: AssetId32,
            rewardAsset: AssetId32,
            pooledTokens: sts.bigint(),
            isFarm: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DEXAPICall: sts.Type<DEXAPICall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CurrenciesCall: sts.Type<CurrenciesCall> = sts.closedEnum(() => {
    return  {
        transfer: sts.enumStruct({
            dest: AccountId32,
            currencyId: AssetId32,
            amount: sts.bigint(),
        }),
        transfer_native_currency: sts.enumStruct({
            dest: AccountId32,
            amount: sts.bigint(),
        }),
        update_balance: sts.enumStruct({
            who: AccountId32,
            currencyId: AssetId32,
            amount: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CouncilCall: sts.Type<CouncilCall> = sts.closedEnum(() => {
    return  {
        close: sts.enumStruct({
            proposalHash: H256,
            index: sts.number(),
            proposalWeightBound: sts.bigint(),
            lengthBound: sts.number(),
        }),
        disapprove_proposal: sts.enumStruct({
            proposalHash: H256,
        }),
        execute: sts.enumStruct({
            proposal: Call,
            lengthBound: sts.number(),
        }),
        propose: sts.enumStruct({
            threshold: sts.number(),
            proposal: Call,
            lengthBound: sts.number(),
        }),
        set_members: sts.enumStruct({
            newMembers: sts.array(() => AccountId32),
            prime: sts.option(() => AccountId32),
            oldCount: sts.number(),
        }),
        vote: sts.enumStruct({
            proposal: H256,
            index: sts.number(),
            approve: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CeresTokenLockerCall: sts.Type<CeresTokenLockerCall> = sts.closedEnum(() => {
    return  {
        change_fee: sts.enumStruct({
            newFee: sts.bigint(),
        }),
        lock_tokens: sts.enumStruct({
            assetId: AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        }),
        withdraw_tokens: sts.enumStruct({
            assetId: AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CeresStakingCall: sts.Type<CeresStakingCall> = sts.closedEnum(() => {
    return  {
        change_rewards_remaining: sts.enumStruct({
            rewardsRemaining: sts.bigint(),
        }),
        deposit: sts.enumStruct({
            amount: sts.bigint(),
        }),
        withdraw: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CeresLiquidityLockerCall: sts.Type<CeresLiquidityLockerCall> = sts.closedEnum(() => {
    return  {
        change_ceres_fee: sts.enumStruct({
            ceresFee: sts.bigint(),
        }),
        lock_liquidity: sts.enumStruct({
            assetA: AssetId32,
            assetB: AssetId32,
            unlockingTimestamp: sts.bigint(),
            percentageOfPoolTokens: sts.bigint(),
            option: sts.boolean(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CeresLaunchpadCall: sts.Type<CeresLaunchpadCall> = sts.closedEnum(() => {
    return  {
        add_whitelisted_contributor: sts.enumStruct({
            contributor: AccountId32,
        }),
        add_whitelisted_ilo_organizer: sts.enumStruct({
            iloOrganizer: AccountId32,
        }),
        change_ceres_burn_fee: sts.enumStruct({
            ceresFee: sts.bigint(),
        }),
        change_ceres_contribution_fee: sts.enumStruct({
            ceresFee: sts.bigint(),
        }),
        change_fee_percent_for_raised_funds: sts.enumStruct({
            feePercent: sts.bigint(),
        }),
        claim: sts.enumStruct({
            assetId: AssetId32,
        }),
        claim_lp_tokens: sts.enumStruct({
            assetId: AssetId32,
        }),
        claim_pswap_rewards: sts.unit(),
        contribute: sts.enumStruct({
            assetId: AssetId32,
            fundsToContribute: sts.bigint(),
        }),
        create_ilo: sts.enumStruct({
            baseAsset: AssetId32,
            assetId: AssetId32,
            tokensForIlo: sts.bigint(),
            tokensForLiquidity: sts.bigint(),
            iloPrice: sts.bigint(),
            softCap: sts.bigint(),
            hardCap: sts.bigint(),
            minContribution: sts.bigint(),
            maxContribution: sts.bigint(),
            refundType: sts.boolean(),
            liquidityPercent: sts.bigint(),
            listingPrice: sts.bigint(),
            lockupDays: sts.number(),
            startTimestamp: sts.bigint(),
            endTimestamp: sts.bigint(),
            teamVestingTotalTokens: sts.bigint(),
            teamVestingFirstReleasePercent: sts.bigint(),
            teamVestingPeriod: sts.bigint(),
            teamVestingPercent: sts.bigint(),
            firstReleasePercent: sts.bigint(),
            vestingPeriod: sts.bigint(),
            vestingPercent: sts.bigint(),
        }),
        emergency_withdraw: sts.enumStruct({
            assetId: AssetId32,
        }),
        finish_ilo: sts.enumStruct({
            assetId: AssetId32,
        }),
        remove_whitelisted_contributor: sts.enumStruct({
            contributor: AccountId32,
        }),
        remove_whitelisted_ilo_organizer: sts.enumStruct({
            iloOrganizer: AccountId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CeresGovernancePlatformCall: sts.Type<CeresGovernancePlatformCall> = sts.closedEnum(() => {
    return  {
        create_poll: sts.enumStruct({
            pollId: sts.bytes(),
            numberOfOptions: sts.number(),
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
        }),
        vote: sts.enumStruct({
            pollId: sts.bytes(),
            votingOption: sts.number(),
            numberOfVotes: sts.bigint(),
        }),
        withdraw: sts.enumStruct({
            pollId: sts.bytes(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BridgeMultisigCall: sts.Type<BridgeMultisigCall> = sts.closedEnum(() => {
    return  {
        add_signatory: sts.enumStruct({
            newMember: AccountId32,
        }),
        approve_as_multi: sts.enumStruct({
            id: AccountId32,
            maybeTimepoint: sts.option(() => BridgeTimepoint),
            callHash: sts.bytes(),
            maxWeight: sts.bigint(),
        }),
        as_multi: sts.enumStruct({
            id: AccountId32,
            maybeTimepoint: sts.option(() => BridgeTimepoint),
            call: sts.bytes(),
            storeCall: sts.boolean(),
            maxWeight: sts.bigint(),
        }),
        as_multi_threshold_1: sts.enumStruct({
            id: AccountId32,
            call: Call,
            timepoint: BridgeTimepoint,
        }),
        cancel_as_multi: sts.enumStruct({
            id: AccountId32,
            timepoint: BridgeTimepoint,
            callHash: sts.bytes(),
        }),
        register_multisig: sts.enumStruct({
            signatories: sts.array(() => AccountId32),
        }),
        remove_signatory: sts.enumStruct({
            signatory: AccountId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BandCall: sts.Type<BandCall> = sts.closedEnum(() => {
    return  {
        add_relayers: sts.enumStruct({
            accountIds: sts.array(() => AccountId32),
        }),
        force_relay: sts.enumStruct({
            rates: sts.array(() => sts.tuple(() => [SymbolName, sts.bigint()])),
            resolveTime: sts.bigint(),
            requestId: sts.bigint(),
        }),
        relay: sts.enumStruct({
            rates: sts.array(() => sts.tuple(() => [SymbolName, sts.bigint()])),
            resolveTime: sts.bigint(),
            requestId: sts.bigint(),
        }),
        remove_relayers: sts.enumStruct({
            accountIds: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: AccountId32,
            dest: AccountId32,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: AccountId32,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: AccountId32,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: AccountId32,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: AccountId32,
            value: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BagsListCall: sts.Type<BagsListCall> = sts.closedEnum(() => {
    return  {
        put_in_front_of: sts.enumStruct({
            lighter: AccountId32,
        }),
        rebag: sts.enumStruct({
            dislocated: AccountId32,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BabeCall: sts.Type<BabeCall> = sts.closedEnum(() => {
    return  {
        plan_config_change: sts.enumStruct({
            config: NextConfigDescriptor,
        }),
        report_equivocation: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: EquivocationProof,
            keyOwnerProof: MembershipProof,
        }),
    }
})

export const EquivocationProof: sts.Type<EquivocationProof> = sts.struct(() => {
    return  {
        offender: sts.bytes(),
        slot: Slot,
        firstHeader: Header,
        secondHeader: Header,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: H256,
        number: sts.number(),
        stateRoot: H256,
        extrinsicsRoot: H256,
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
        Consensus: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Other: sts.bytes(),
        PreRuntime: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

export const Slot = sts.bigint()

export const NextConfigDescriptor: sts.Type<NextConfigDescriptor> = sts.closedEnum(() => {
    return  {
        V1: sts.enumStruct({
            c: sts.tuple(() => [sts.bigint(), sts.bigint()]),
            allowedSlots: AllowedSlots,
        }),
    }
})

export const AllowedSlots: sts.Type<AllowedSlots> = sts.closedEnum(() => {
    return  {
        PrimaryAndSecondaryPlainSlots: sts.unit(),
        PrimaryAndSecondaryVRFSlots: sts.unit(),
        PrimarySlots: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuthorshipCall: sts.Type<AuthorshipCall> = sts.closedEnum(() => {
    return  {
        set_uncles: sts.enumStruct({
            newUncles: sts.array(() => Header),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AssetsCall: sts.Type<AssetsCall> = sts.closedEnum(() => {
    return  {
        burn: sts.enumStruct({
            assetId: AssetId32,
            amount: sts.bigint(),
        }),
        force_mint: sts.enumStruct({
            assetId: AssetId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        mint: sts.enumStruct({
            assetId: AssetId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        register: sts.enumStruct({
            symbol: AssetSymbol,
            name: AssetName,
            initialSupply: sts.bigint(),
            isMintable: sts.boolean(),
            isIndivisible: sts.boolean(),
            optContentSrc: sts.option(() => ContentSource),
            optDesc: sts.option(() => Description),
        }),
        set_non_mintable: sts.enumStruct({
            assetId: AssetId32,
        }),
        transfer: sts.enumStruct({
            assetId: AssetId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const Description = sts.bytes()

export const ContentSource = sts.bytes()

export const VotingOption: sts.Type<VotingOption> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const H256 = sts.bytes()

export const AccountId32 = sts.bytes()
