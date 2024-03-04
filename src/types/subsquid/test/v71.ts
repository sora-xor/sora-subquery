import {sts, Result, Option, Bytes, BitSequence} from './support'

export type H256 = Bytes

export type Call = Call_Assets | Call_Babe | Call_BagsList | Call_Band | Call_BridgeDataSigner | Call_BridgeMultisig | Call_BridgeProxy | Call_CeresGovernancePlatform | Call_CeresLaunchpad | Call_CeresLiquidityLocker | Call_CeresStaking | Call_CeresTokenLocker | Call_Council | Call_DEXAPI | Call_DemeterFarmingPlatform | Call_Democracy | Call_ElectionProviderMultiPhase | Call_ElectionsPhragmen | Call_EthBridge | Call_Faucet | Call_Grandpa | Call_HermesGovernancePlatform | Call_Identity | Call_ImOnline | Call_IrohaMigration | Call_LiquidityProxy | Call_MulticollateralBondingCurvePool | Call_Multisig | Call_MultisigVerifier | Call_OracleProxy | Call_OrderBook | Call_ParachainBridgeApp | Call_Permissions | Call_PoolXYK | Call_Preimage | Call_PswapDistribution | Call_QATools | Call_Referrals | Call_Rewards | Call_Scheduler | Call_Session | Call_Staking | Call_SubstrateBridgeInboundChannel | Call_Sudo | Call_System | Call_Technical | Call_TechnicalCommittee | Call_TechnicalMembership | Call_Timestamp | Call_TradingPair | Call_Utility | Call_VestedRewards | Call_XSTPool | Call_XorFee

export interface Call_Assets {
    __kind: 'Assets'
    value: AssetsCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_BagsList {
    __kind: 'BagsList'
    value: BagsListCall
}

export interface Call_Band {
    __kind: 'Band'
    value: BandCall
}

export interface Call_BridgeDataSigner {
    __kind: 'BridgeDataSigner'
    value: BridgeDataSignerCall
}

export interface Call_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigCall
}

export interface Call_BridgeProxy {
    __kind: 'BridgeProxy'
    value: BridgeProxyCall
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

export interface Call_MultisigVerifier {
    __kind: 'MultisigVerifier'
    value: MultisigVerifierCall
}

export interface Call_OracleProxy {
    __kind: 'OracleProxy'
    value: OracleProxyCall
}

export interface Call_OrderBook {
    __kind: 'OrderBook'
    value: OrderBookCall
}

export interface Call_ParachainBridgeApp {
    __kind: 'ParachainBridgeApp'
    value: ParachainBridgeAppCall
}

export interface Call_Permissions {
    __kind: 'Permissions'
    value: PermissionsCall
}

export interface Call_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionCall
}

export interface Call_QATools {
    __kind: 'QATools'
    value: QAToolsCall
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

export interface Call_SubstrateBridgeInboundChannel {
    __kind: 'SubstrateBridgeInboundChannel'
    value: SubstrateBridgeInboundChannelCall
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
export type XSTPoolCall = XSTPoolCall_disable_synthetic_asset | XSTPoolCall_enable_synthetic_asset | XSTPoolCall_register_synthetic_asset | XSTPoolCall_remove_synthetic_asset | XSTPoolCall_set_reference_asset | XSTPoolCall_set_synthetic_asset_fee | XSTPoolCall_set_synthetic_base_asset_floor_price

/**
 * Disable synthetic asset.
 * 
 * Removes synthetic from exchanging
 * and removes XSTPool liquidity source for corresponding trading pair.
 * 
 * - `origin`: the sudo account on whose behalf the transaction is being executed,
 * - `synthetic_asset`: synthetic asset id to disable.
 */
export interface XSTPoolCall_disable_synthetic_asset {
    __kind: 'disable_synthetic_asset'
    syntheticAsset: AssetId32
}

export interface XSTPoolCall_enable_synthetic_asset {
    __kind: 'enable_synthetic_asset'
    assetId: AssetId32
    referenceSymbol: SymbolName
    feeRatio: FixedPoint
}

/**
 * Register and enable new synthetic asset with `reference_symbol` price binding
 */
export interface XSTPoolCall_register_synthetic_asset {
    __kind: 'register_synthetic_asset'
    assetSymbol: AssetSymbol
    assetName: AssetName
    referenceSymbol: SymbolName
    feeRatio: FixedPoint
}

/**
 * Entirely remove synthetic asset (including linked symbol info)
 */
export interface XSTPoolCall_remove_synthetic_asset {
    __kind: 'remove_synthetic_asset'
    syntheticAsset: AssetId32
}

/**
 * Change reference asset which is used to determine collateral assets value.
 * Intended to be e.g., stablecoin DAI.
 * 
 * - `origin`: the sudo account on whose behalf the transaction is being executed,
 * - `reference_asset_id`: asset id of the new reference asset.
 */
export interface XSTPoolCall_set_reference_asset {
    __kind: 'set_reference_asset'
    referenceAssetId: AssetId32
}

/**
 * Set synthetic asset fee.
 * 
 * This fee will be used to determine the amount of synthetic base asset (e.g. XST) to be
 * burned when user buys synthetic asset.
 * 
 * - `origin`: the sudo account on whose behalf the transaction is being executed,
 * - `synthetic_asset`: synthetic asset id to set fee for,
 * - `fee_ratio`: fee ratio with precision = 18, so 1000000000000000000 = 1 = 100% fee.
 */
export interface XSTPoolCall_set_synthetic_asset_fee {
    __kind: 'set_synthetic_asset_fee'
    syntheticAsset: AssetId32
    feeRatio: FixedPoint
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

export type AssetName = Bytes

export type AssetSymbol = Bytes

export interface FixedPoint {
    inner: bigint
}

export type SymbolName = Bytes

export interface AssetId32 {
    code: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestedRewardsCall = VestedRewardsCall_claim_crowdloan_rewards | VestedRewardsCall_claim_rewards | VestedRewardsCall_register_crowdloan | VestedRewardsCall_update_rewards

export interface VestedRewardsCall_claim_crowdloan_rewards {
    __kind: 'claim_crowdloan_rewards'
    crowdloan: CrowdloanTag
}

/**
 * Claim all available PSWAP rewards by account signing this transaction.
 */
export interface VestedRewardsCall_claim_rewards {
    __kind: 'claim_rewards'
}

export interface VestedRewardsCall_register_crowdloan {
    __kind: 'register_crowdloan'
    tag: CrowdloanTag
    startBlock: number
    length: number
    rewards: [AssetId32, bigint][]
    contributions: [AccountId32, bigint][]
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

export type AccountId32 = Bytes

export type CrowdloanTag = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_as_derivative | UtilityCall_batch | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

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
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
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
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
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
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
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
 * Dispatch a function call with a specified weight.
 * 
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type OriginCaller = OriginCaller_Council | OriginCaller_SubstrateDispatch | OriginCaller_TechnicalCommittee | OriginCaller_Void | OriginCaller_system

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_278
}

export interface OriginCaller_SubstrateDispatch {
    __kind: 'SubstrateDispatch'
    value: Type_280
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_279
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

export type Type_279 = Type_279_Member | Type_279_Members | Type_279__Phantom

export interface Type_279_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_279_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_279__Phantom {
    __kind: '_Phantom'
}

export interface Type_280 {
    origin: CallOriginOutput
}

export interface CallOriginOutput {
    networkId: SubNetworkId
    messageId: H256
    timepoint: GenericTimepoint
}

export type GenericTimepoint = GenericTimepoint_EVM | GenericTimepoint_Parachain | GenericTimepoint_Pending | GenericTimepoint_Sora | GenericTimepoint_Unknown

export interface GenericTimepoint_EVM {
    __kind: 'EVM'
    value: bigint
}

export interface GenericTimepoint_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface GenericTimepoint_Pending {
    __kind: 'Pending'
}

export interface GenericTimepoint_Sora {
    __kind: 'Sora'
    value: number
}

export interface GenericTimepoint_Unknown {
    __kind: 'Unknown'
}

export type SubNetworkId = SubNetworkId_Alphanet | SubNetworkId_Kusama | SubNetworkId_Liberland | SubNetworkId_Mainnet | SubNetworkId_Polkadot | SubNetworkId_Rococo

export interface SubNetworkId_Alphanet {
    __kind: 'Alphanet'
}

export interface SubNetworkId_Kusama {
    __kind: 'Kusama'
}

export interface SubNetworkId_Liberland {
    __kind: 'Liberland'
}

export interface SubNetworkId_Mainnet {
    __kind: 'Mainnet'
}

export interface SubNetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface SubNetworkId_Rococo {
    __kind: 'Rococo'
}

export type Type_278 = Type_278_Member | Type_278_Members | Type_278__Phantom

export interface Type_278_Member {
    __kind: 'Member'
    value: AccountId32
}

export interface Type_278_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_278__Phantom {
    __kind: '_Phantom'
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
export type TechnicalCommitteeCall = TechnicalCommitteeCall_close | TechnicalCommitteeCall_close_old_weight | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_vote

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
    proposalWeightBound: Weight
    lengthBound: number
}

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
export interface TechnicalCommitteeCall_close_old_weight {
    __kind: 'close_old_weight'
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
export type SystemCall = SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

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
    weight: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SubstrateBridgeInboundChannelCall = SubstrateBridgeInboundChannelCall_submit

export interface SubstrateBridgeInboundChannelCall_submit {
    __kind: 'submit'
    networkId: SubNetworkId
    commitment: GenericCommitment
    proof: MultiProof
}

export type MultiProof = MultiProof_Multisig

export interface MultiProof_Multisig {
    __kind: 'Multisig'
    value: Proof
}

export interface Proof {
    digest: AuxiliaryDigest
    proof: Signature[]
}

export type Signature = Bytes

export interface AuxiliaryDigest {
    logs: AuxiliaryDigestItem[]
}

export type AuxiliaryDigestItem = AuxiliaryDigestItem_Commitment

export interface AuxiliaryDigestItem_Commitment {
    __kind: 'Commitment'
    value: [GenericNetworkId, H256]
}

export type GenericNetworkId = GenericNetworkId_EVM | GenericNetworkId_EVMLegacy | GenericNetworkId_Sub

export interface GenericNetworkId_EVM {
    __kind: 'EVM'
    value: bigint
}

export interface GenericNetworkId_EVMLegacy {
    __kind: 'EVMLegacy'
    value: number
}

export interface GenericNetworkId_Sub {
    __kind: 'Sub'
    value: SubNetworkId
}

export type GenericCommitment = GenericCommitment_EVM | GenericCommitment_Sub

export interface GenericCommitment_EVM {
    __kind: 'EVM'
    value: Type_546
}

export interface GenericCommitment_Sub {
    __kind: 'Sub'
    value: Commitment
}

export interface Commitment {
    messages: BridgeMessage[]
    nonce: bigint
}

export interface BridgeMessage {
    payload: Bytes
    timepoint: GenericTimepoint
}

export interface Type_546 {
    nonce: bigint
    totalMaxGas: bigint
    messages: Message[]
}

export interface Message {
    target: H160
    maxGas: bigint
    payload: Bytes
}

export type H160 = Bytes

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_cancel_deferred_slash | StakingCall_chill | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_force_new_era | StakingCall_force_new_era_always | StakingCall_force_no_eras | StakingCall_force_unstake | StakingCall_increase_validator_count | StakingCall_kick | StakingCall_nominate | StakingCall_payout_stakers | StakingCall_reap_stash | StakingCall_rebond | StakingCall_scale_validator_count | StakingCall_set_controller | StakingCall_set_invulnerables | StakingCall_set_min_commission | StakingCall_set_payee | StakingCall_set_staking_configs | StakingCall_set_validator_count | StakingCall_unbond | StakingCall_validate | StakingCall_withdraw_unbonded

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
 * Can be called by the `T::AdminOrigin`.
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
 * Increments the ideal number of validators upto maximum of
 * `ElectionProviderBase::MaxWinners`.
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
 * Scale up the ideal number of validators by a factor upto maximum of
 * `ElectionProviderBase::MaxWinners`.
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
 * Set the validators who cannot be slashed (if any).
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: AccountId32[]
}

/**
 * Sets the minimum amount of commission that each validators must maintain.
 * 
 * This call has lower privilege requirements than `set_staking_config` and can be called
 * by the `T::AdminOrigin`. Root can always call this.
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: Perbill
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
 * RuntimeOrigin must be Root to call this function.
 * 
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_287
    maxValidatorCount: Type_287
    chillThreshold: Type_288
    minCommission: Type_289
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
 * can co-exists at the same time. If there are no unlocking chunks slots available
 * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
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

export type Type_289 = Type_289_Noop | Type_289_Remove | Type_289_Set

export interface Type_289_Noop {
    __kind: 'Noop'
}

export interface Type_289_Remove {
    __kind: 'Remove'
}

export interface Type_289_Set {
    __kind: 'Set'
    value: Perbill
}

export type Type_288 = Type_288_Noop | Type_288_Remove | Type_288_Set

export interface Type_288_Noop {
    __kind: 'Noop'
}

export interface Type_288_Remove {
    __kind: 'Remove'
}

export interface Type_288_Set {
    __kind: 'Set'
    value: Percent
}

export type Type_287 = Type_287_Noop | Type_287_Remove | Type_287_Set

export interface Type_287_Noop {
    __kind: 'Noop'
}

export interface Type_287_Remove {
    __kind: 'Remove'
}

export interface Type_287_Set {
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

export type Perbill = number

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
    call: Call
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
    call: Call
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
    call: Call
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
    call: Call
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
export type QAToolsCall = QAToolsCall_order_book_create_and_fill_batch | QAToolsCall_order_book_fill_batch

/**
 * Create multiple many order books with parameters and fill them according to given parameters.
 * 
 * Balance for placing the orders is minted automatically, trading pairs are
 * created if needed.
 * 
 * In order to create empty order books, one can leave settings empty.
 * 
 * Parameters:
 * - `origin`: root
 * - `bids_owner`: Creator of the buy orders placed on the order books,
 * - `asks_owner`: Creator of the sell orders placed on the order books,
 * - `settings`: Parameters for creation of the order book and placing the orders in each order book.
 */
export interface QAToolsCall_order_book_create_and_fill_batch {
    __kind: 'order_book_create_and_fill_batch'
    bidsOwner: AccountId32
    asksOwner: AccountId32
    settings: [OrderBookId, OrderBookAttributes, OrderBookFill][]
}

/**
 * Fill the order books according to given parameters.
 * 
 * Balance for placing the orders is minted automatically.
 * 
 * Parameters:
 * - `origin`: root
 * - `bids_owner`: Creator of the buy orders placed on the order books,
 * - `asks_owner`: Creator of the sell orders placed on the order books,
 * - `settings`: Parameters for placing the orders in each order book.
 */
export interface QAToolsCall_order_book_fill_batch {
    __kind: 'order_book_fill_batch'
    bidsOwner: AccountId32
    asksOwner: AccountId32
    settings: [OrderBookId, OrderBookFill][]
}

export interface OrderBookFill {
    asks?: (SideFill | undefined)
    bids?: (SideFill | undefined)
    randomSeed?: (number | undefined)
}

export interface SideFill {
    highestPrice: bigint
    lowestPrice: bigint
    priceStep: bigint
    ordersPerPrice: number
    lifespan?: (bigint | undefined)
    amountRangeInclusive?: (RandomAmount | undefined)
}

export interface RandomAmount {
    min: bigint
    max: bigint
}

export interface OrderBookAttributes {
    tickSize: bigint
    stepLotSize: bigint
    minLotSize: bigint
    maxLotSize: bigint
}

export interface OrderBookId {
    dexId: number
    base: AssetId32
    quote: AssetId32
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
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_request_preimage | PreimageCall_unnote_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Bytes
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: H256
}

/**
 * Clear an unrequested preimage from the runtime storage.
 * 
 * If `len` is provided, then it will be a much cheaper operation.
 * 
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: H256
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: H256
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
export type ParachainBridgeAppCall = ParachainBridgeAppCall_add_assetid_paraid | ParachainBridgeAppCall_burn | ParachainBridgeAppCall_finalize_asset_registration | ParachainBridgeAppCall_mint | ParachainBridgeAppCall_register_sidechain_asset | ParachainBridgeAppCall_register_thischain_asset | ParachainBridgeAppCall_remove_assetid_paraid | ParachainBridgeAppCall_set_minimum_xcm_incoming_asset_count | ParachainBridgeAppCall_update_transaction_status

export interface ParachainBridgeAppCall_add_assetid_paraid {
    __kind: 'add_assetid_paraid'
    networkId: SubNetworkId
    paraId: number
    assetId: AssetId32
}

export interface ParachainBridgeAppCall_burn {
    __kind: 'burn'
    networkId: SubNetworkId
    assetId: AssetId32
    recipient: VersionedMultiLocation
    amount: bigint
}

export interface ParachainBridgeAppCall_finalize_asset_registration {
    __kind: 'finalize_asset_registration'
    assetId: AssetId32
    assetKind: Type_556
}

export interface ParachainBridgeAppCall_mint {
    __kind: 'mint'
    assetId: AssetId32
    sender?: (VersionedMultiLocation | undefined)
    recipient: AccountId32
    amount: bigint
}

export interface ParachainBridgeAppCall_register_sidechain_asset {
    __kind: 'register_sidechain_asset'
    networkId: SubNetworkId
    sidechainAsset: V3AssetId
    symbol: AssetSymbol
    name: AssetName
    decimals: number
    allowedParachains: number[]
    minimalXcmAmount: bigint
}

export interface ParachainBridgeAppCall_register_thischain_asset {
    __kind: 'register_thischain_asset'
    networkId: SubNetworkId
    assetId: AssetId32
    sidechainAsset: V3AssetId
    allowedParachains: number[]
    minimalXcmAmount: bigint
}

export interface ParachainBridgeAppCall_remove_assetid_paraid {
    __kind: 'remove_assetid_paraid'
    networkId: SubNetworkId
    paraId: number
    assetId: AssetId32
}

export interface ParachainBridgeAppCall_set_minimum_xcm_incoming_asset_count {
    __kind: 'set_minimum_xcm_incoming_asset_count'
    networkId: SubNetworkId
    assetId: AssetId32
    minimalXcmAmount: bigint
}

export interface ParachainBridgeAppCall_update_transaction_status {
    __kind: 'update_transaction_status'
    messageId: H256
    transferStatus: XCMAppTransferStatus
}

export type XCMAppTransferStatus = XCMAppTransferStatus_Success | XCMAppTransferStatus_XCMTransferError

export interface XCMAppTransferStatus_Success {
    __kind: 'Success'
}

export interface XCMAppTransferStatus_XCMTransferError {
    __kind: 'XCMTransferError'
}

export type V3AssetId = V3AssetId_Abstract | V3AssetId_Concrete

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export type V3Junction = V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_GlobalConsensus | V3Junction_OnlyChild | V3Junction_PalletInstance | V3Junction_Parachain | V3Junction_Plurality

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network?: (V3NetworkId | undefined)
    id: Bytes
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network?: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network?: (V3NetworkId | undefined)
    key: Bytes
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Bytes
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export type V3BodyPart = V3BodyPart_AtLeastProportion | V3BodyPart_Fraction | V3BodyPart_Members | V3BodyPart_MoreThanProportion | V3BodyPart_Voice

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export type V3BodyId = V3BodyId_Administration | V3BodyId_Defense | V3BodyId_Executive | V3BodyId_Index | V3BodyId_Judicial | V3BodyId_Legislative | V3BodyId_Moniker | V3BodyId_Technical | V3BodyId_Treasury | V3BodyId_Unit

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Bytes
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export type V3NetworkId = V3NetworkId_BitcoinCash | V3NetworkId_BitcoinCore | V3NetworkId_ByFork | V3NetworkId_ByGenesis | V3NetworkId_Ethereum | V3NetworkId_Kusama | V3NetworkId_Polkadot | V3NetworkId_Rococo | V3NetworkId_Westend | V3NetworkId_Wococo

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Bytes
}

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Bytes
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export type Type_556 = Type_556_Sidechain | Type_556_Thischain

export interface Type_556_Sidechain {
    __kind: 'Sidechain'
}

export interface Type_556_Thischain {
    __kind: 'Thischain'
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Junction = V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_PalletInstance | V2Junction_Parachain | V2Junction_Plurality

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Bytes
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Bytes
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: WeakBoundedVec
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2BodyPart = V2BodyPart_AtLeastProportion | V2BodyPart_Fraction | V2BodyPart_Members | V2BodyPart_MoreThanProportion | V2BodyPart_Voice

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export type V2BodyId = V2BodyId_Administration | V2BodyId_Defense | V2BodyId_Executive | V2BodyId_Index | V2BodyId_Judicial | V2BodyId_Legislative | V2BodyId_Named | V2BodyId_Technical | V2BodyId_Treasury | V2BodyId_Unit

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export type WeakBoundedVec = Bytes

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Kusama | V2NetworkId_Named | V2NetworkId_Polkadot

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: WeakBoundedVec
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OrderBookCall = OrderBookCall_cancel_limit_order | OrderBookCall_cancel_limit_orders_batch | OrderBookCall_change_orderbook_status | OrderBookCall_create_orderbook | OrderBookCall_delete_orderbook | OrderBookCall_execute_market_order | OrderBookCall_place_limit_order | OrderBookCall_update_orderbook

export interface OrderBookCall_cancel_limit_order {
    __kind: 'cancel_limit_order'
    orderBookId: OrderBookId
    orderId: bigint
}

export interface OrderBookCall_cancel_limit_orders_batch {
    __kind: 'cancel_limit_orders_batch'
    limitOrdersToCancel: [OrderBookId, bigint[]][]
}

export interface OrderBookCall_change_orderbook_status {
    __kind: 'change_orderbook_status'
    orderBookId: OrderBookId
    status: OrderBookStatus
}

export interface OrderBookCall_create_orderbook {
    __kind: 'create_orderbook'
    orderBookId: OrderBookId
    tickSize: bigint
    stepLotSize: bigint
    minLotSize: bigint
    maxLotSize: bigint
}

export interface OrderBookCall_delete_orderbook {
    __kind: 'delete_orderbook'
    orderBookId: OrderBookId
}

export interface OrderBookCall_execute_market_order {
    __kind: 'execute_market_order'
    orderBookId: OrderBookId
    direction: PriceVariant
    amount: bigint
}

export interface OrderBookCall_place_limit_order {
    __kind: 'place_limit_order'
    orderBookId: OrderBookId
    price: bigint
    amount: bigint
    side: PriceVariant
    lifespan?: (bigint | undefined)
}

export interface OrderBookCall_update_orderbook {
    __kind: 'update_orderbook'
    orderBookId: OrderBookId
    tickSize: bigint
    stepLotSize: bigint
    minLotSize: bigint
    maxLotSize: bigint
}

export type PriceVariant = PriceVariant_Buy | PriceVariant_Sell

export interface PriceVariant_Buy {
    __kind: 'Buy'
}

export interface PriceVariant_Sell {
    __kind: 'Sell'
}

export type OrderBookStatus = OrderBookStatus_OnlyCancel | OrderBookStatus_PlaceAndCancel | OrderBookStatus_Stop | OrderBookStatus_Trade

export interface OrderBookStatus_OnlyCancel {
    __kind: 'OnlyCancel'
}

export interface OrderBookStatus_PlaceAndCancel {
    __kind: 'PlaceAndCancel'
}

export interface OrderBookStatus_Stop {
    __kind: 'Stop'
}

export interface OrderBookStatus_Trade {
    __kind: 'Trade'
}

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
export type MultisigVerifierCall = MultisigVerifierCall_add_peer | MultisigVerifierCall_initialize | MultisigVerifierCall_remove_peer

export interface MultisigVerifierCall_add_peer {
    __kind: 'add_peer'
    peer: Bytes
}

export interface MultisigVerifierCall_initialize {
    __kind: 'initialize'
    networkId: GenericNetworkId
    peers: Bytes[]
}

export interface MultisigVerifierCall_remove_peer {
    __kind: 'remove_peer'
    peer: Bytes
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
    maxWeight: Weight
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
 *     - Reads: Multisig Storage, [Caller Account]
 *     - Writes: Multisig Storage, [Caller Account]
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: AccountId32[]
    maybeTimepoint?: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
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
 *     - Read: Multisig Storage, [Caller Account], Refund Account
 *     - Write: Multisig Storage, [Caller Account], Refund Account
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityProxyCall = LiquidityProxyCall_disable_liquidity_source | LiquidityProxyCall_enable_liquidity_source | LiquidityProxyCall_set_adar_commission_ratio | LiquidityProxyCall_swap | LiquidityProxyCall_swap_transfer | LiquidityProxyCall_swap_transfer_batch | LiquidityProxyCall_xorless_transfer

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

export interface LiquidityProxyCall_set_adar_commission_ratio {
    __kind: 'set_adar_commission_ratio'
    commissionRatio: bigint
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

/**
 * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
 * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
 * be used for swapping, receiver accounts and their desired outcome amount in asset,
 * specified for the current batch.
 * 
 * - `origin`: the account on whose behalf the transaction is being executed,
 * - `swap_batches`: the vector containing the SwapBatchInfo structs,
 * - `input_asset_id`: ID of the asset being sold,
 * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
 * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
 *                            determined by filter_mode,
 * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
 */
export interface LiquidityProxyCall_swap_transfer_batch {
    __kind: 'swap_transfer_batch'
    swapBatches: SwapBatchInfo[]
    inputAssetId: AssetId32
    maxInputAmount: bigint
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
}

/**
 * Extrinsic which is enable XORless transfers.
 * Internally it's swaps `asset_id` to `desired_xor_amount` of `XOR` and transfers remaining amount of `asset_id` to `receiver`.
 * Client apps should specify the XOR amount which should be paid as a fee in `desired_xor_amount` parameter.
 * If sender will not have enough XOR to pay fees after execution, transaction will be rejected.
 * This extrinsic is done as temporary solution for XORless transfers, in future it would be removed
 * and logic for XORless extrinsics should be moved to xor-fee pallet.
 */
export interface LiquidityProxyCall_xorless_transfer {
    __kind: 'xorless_transfer'
    dexId: number
    assetId: AssetId32
    receiver: AccountId32
    amount: bigint
    desiredXorAmount: bigint
    maxAmountIn: bigint
    selectedSourceTypes: LiquiditySourceType[]
    filterMode: FilterMode
    additionalData?: (BoundedVec | undefined)
}

export type BoundedVec = Bytes

export interface SwapBatchInfo {
    outcomeAssetId: AssetId32
    outcomeAssetReuse: bigint
    dexId: number
    receivers: BatchReceiverInfo[]
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

export type LiquiditySourceType = LiquiditySourceType_BondingCurvePool | LiquiditySourceType_MockPool | LiquiditySourceType_MockPool2 | LiquiditySourceType_MockPool3 | LiquiditySourceType_MockPool4 | LiquiditySourceType_MulticollateralBondingCurvePool | LiquiditySourceType_OrderBook | LiquiditySourceType_XSTPool | LiquiditySourceType_XYKPool

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

export interface LiquiditySourceType_OrderBook {
    __kind: 'OrderBook'
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
 * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
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
    identity: H256
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
    title: BoundedString
    description: Bytes
    options: Bytes[]
}

/**
 * Vote for some option
 */
export interface HermesGovernancePlatformCall_vote {
    __kind: 'vote'
    pollId: H256
    votingOption: Bytes
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

export type BoundedString = Bytes

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
    equivocationProof: Type_294
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
    equivocationProof: Type_294
    keyOwnerProof: MembershipProof
}

export interface MembershipProof {
    session: number
    trieNodes: Bytes[]
    validatorCount: number
}

export interface Type_294 {
    setId: bigint
    equivocation: Equivocation
}

export type Equivocation = Equivocation_Precommit | Equivocation_Prevote

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_301
}

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_296
}

export interface Type_296 {
    roundNumber: bigint
    identity: Public
    first: [Prevote, Bytes]
    second: [Prevote, Bytes]
}

export interface Prevote {
    targetHash: H256
    targetNumber: number
}

export interface Type_301 {
    roundNumber: bigint
    identity: Public
    first: [Precommit, Bytes]
    second: [Precommit, Bytes]
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

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

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

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
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

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
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
 * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
 * started, else, nothing happens.
 * 
 * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
 * it is returned.
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
    slashBond: boolean
    rerunElection: boolean
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
export type DemocracyCall = DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_cancel_referendum | DemocracyCall_clear_public_proposals | DemocracyCall_delegate | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_default | DemocracyCall_external_propose_majority | DemocracyCall_fast_track | DemocracyCall_propose | DemocracyCall_remove_other_vote | DemocracyCall_remove_vote | DemocracyCall_second | DemocracyCall_undelegate | DemocracyCall_unlock | DemocracyCall_veto_external | DemocracyCall_vote

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
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
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
    proposal: Bounded
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
    proposal: Bounded
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
 * 	Must be always greater than zero.
 * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
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
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
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
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
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

export type Bounded = Bounded_Inline | Bounded_Legacy | Bounded_Lookup

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Bytes
}

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: H256
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: H256
    len: number
}

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
export type DEXAPICall = DEXAPICall_disable_liquidity_source | DEXAPICall_enable_liquidity_source

export interface DEXAPICall_disable_liquidity_source {
    __kind: 'disable_liquidity_source'
    source: LiquiditySourceType
}

export interface DEXAPICall_enable_liquidity_source {
    __kind: 'enable_liquidity_source'
    source: LiquiditySourceType
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_close | CouncilCall_close_old_weight | CouncilCall_disapprove_proposal | CouncilCall_execute | CouncilCall_propose | CouncilCall_set_members | CouncilCall_vote

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
    proposalWeightBound: Weight
    lengthBound: number
}

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
export interface CouncilCall_close_old_weight {
    __kind: 'close_old_weight'
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
    pollAsset: AssetId32
    pollStartTimestamp: bigint
    pollEndTimestamp: bigint
    title: BoundedString
    description: Bytes
    options: Bytes[]
}

/**
 * Voting for option
 */
export interface CeresGovernancePlatformCall_vote {
    __kind: 'vote'
    pollId: H256
    votingOption: number
    numberOfVotes: bigint
}

/**
 * Withdraw voting funds
 */
export interface CeresGovernancePlatformCall_withdraw {
    __kind: 'withdraw'
    pollId: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BridgeProxyCall = BridgeProxyCall_add_limited_asset | BridgeProxyCall_burn | BridgeProxyCall_remove_limited_asset | BridgeProxyCall_update_transfer_limit

export interface BridgeProxyCall_add_limited_asset {
    __kind: 'add_limited_asset'
    assetId: AssetId32
}

export interface BridgeProxyCall_burn {
    __kind: 'burn'
    networkId: GenericNetworkId
    assetId: AssetId32
    recipient: GenericAccount
    amount: bigint
}

export interface BridgeProxyCall_remove_limited_asset {
    __kind: 'remove_limited_asset'
    assetId: AssetId32
}

export interface BridgeProxyCall_update_transfer_limit {
    __kind: 'update_transfer_limit'
    settings: TransferLimitSettings
}

export interface TransferLimitSettings {
    maxAmount: bigint
    periodBlocks: number
}

export type GenericAccount = GenericAccount_EVM | GenericAccount_Parachain | GenericAccount_Root | GenericAccount_Sora | GenericAccount_Unknown

export interface GenericAccount_EVM {
    __kind: 'EVM'
    value: H160
}

export interface GenericAccount_Parachain {
    __kind: 'Parachain'
    value: VersionedMultiLocation
}

export interface GenericAccount_Root {
    __kind: 'Root'
}

export interface GenericAccount_Sora {
    __kind: 'Sora'
    value: AccountId32
}

export interface GenericAccount_Unknown {
    __kind: 'Unknown'
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
    maxWeight: Weight
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
    maxWeight: Weight
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
export type BridgeDataSignerCall = BridgeDataSignerCall_add_peer | BridgeDataSignerCall_approve | BridgeDataSignerCall_finish_add_peer | BridgeDataSignerCall_finish_remove_peer | BridgeDataSignerCall_register_network | BridgeDataSignerCall_remove_peer

export interface BridgeDataSignerCall_add_peer {
    __kind: 'add_peer'
    networkId: GenericNetworkId
    peer: Bytes
}

export interface BridgeDataSignerCall_approve {
    __kind: 'approve'
    networkId: GenericNetworkId
    data: H256
    signature: Signature
}

export interface BridgeDataSignerCall_finish_add_peer {
    __kind: 'finish_add_peer'
    peer: Bytes
}

export interface BridgeDataSignerCall_finish_remove_peer {
    __kind: 'finish_remove_peer'
    peer: Bytes
}

export interface BridgeDataSignerCall_register_network {
    __kind: 'register_network'
    networkId: GenericNetworkId
    peers: Bytes[]
}

export interface BridgeDataSignerCall_remove_peer {
    __kind: 'remove_peer'
    networkId: GenericNetworkId
    peer: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BandCall = BandCall_add_relayers | BandCall_force_relay | BandCall_relay | BandCall_remove_relayers | BandCall_set_dynamic_fee_parameters

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

export interface BandCall_set_dynamic_fee_parameters {
    __kind: 'set_dynamic_fee_parameters'
    feeParameters: FeeCalculationParameters
}

export interface FeeCalculationParameters {
    decay: FixedPoint
    minFee: FixedPoint
    deviation: FixedPoint
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
export type AssetsCall = AssetsCall_burn | AssetsCall_force_mint | AssetsCall_mint | AssetsCall_register | AssetsCall_set_non_mintable | AssetsCall_transfer | AssetsCall_update_balance | AssetsCall_update_info

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

/**
 * Add or remove abs(`by_amount`) from the balance of `who` under
 * `currency_id`. If positive `by_amount`, do add, else do remove.
 * 
 * Basically a wrapper of `MultiCurrencyExtended::update_balance`
 * for testing purposes.
 * 
 * TODO: move into tests extrinsic collection pallet
 */
export interface AssetsCall_update_balance {
    __kind: 'update_balance'
    who: AccountId32
    currencyId: AssetId32
    amount: bigint
}

/**
 * Change information about asset. Can only be done by root
 * 
 * - `origin`: caller Account, should be root
 * - `asset_id`: Id of asset to change,
 * - `new_symbol`: New asset symbol. If None asset symbol will not change
 * - `new_name`: New asset name. If None asset name will not change
 */
export interface AssetsCall_update_info {
    __kind: 'update_info'
    assetId: AssetId32
    newSymbol?: (AssetSymbol | undefined)
    newName?: (AssetName | undefined)
}

export type Description = Bytes

export type ContentSource = Bytes

export const H256 = sts.bytes()

export const OrderBookFill: sts.Type<OrderBookFill> = sts.struct(() => {
    return  {
        asks: sts.option(() => SideFill),
        bids: sts.option(() => SideFill),
        randomSeed: sts.option(() => sts.number()),
    }
})

export const SideFill: sts.Type<SideFill> = sts.struct(() => {
    return  {
        highestPrice: sts.bigint(),
        lowestPrice: sts.bigint(),
        priceStep: sts.bigint(),
        ordersPerPrice: sts.number(),
        lifespan: sts.option(() => sts.bigint()),
        amountRangeInclusive: sts.option(() => RandomAmount),
    }
})

export const RandomAmount: sts.Type<RandomAmount> = sts.struct(() => {
    return  {
        min: sts.bigint(),
        max: sts.bigint(),
    }
})

export const OrderBookAttributes: sts.Type<OrderBookAttributes> = sts.struct(() => {
    return  {
        tickSize: sts.bigint(),
        stepLotSize: sts.bigint(),
        minLotSize: sts.bigint(),
        maxLotSize: sts.bigint(),
    }
})

export const OrderBookId: sts.Type<OrderBookId> = sts.struct(() => {
    return  {
        dexId: sts.number(),
        base: AssetId32,
        quote: AssetId32,
    }
})

export const AssetId32: sts.Type<AssetId32> = sts.struct(() => {
    return  {
        code: sts.bytes(),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

export const OriginCaller: sts.Type<OriginCaller> = sts.closedEnum(() => {
    return  {
        Council: Type_278,
        SubstrateDispatch: Type_280,
        TechnicalCommittee: Type_279,
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

export const Type_279: sts.Type<Type_279> = sts.closedEnum(() => {
    return  {
        Member: AccountId32,
        Members: sts.tuple(() => [sts.number(), sts.number()]),
        _Phantom: sts.unit(),
    }
})

export const Type_280: sts.Type<Type_280> = sts.struct(() => {
    return  {
        origin: CallOriginOutput,
    }
})

export const CallOriginOutput: sts.Type<CallOriginOutput> = sts.struct(() => {
    return  {
        networkId: SubNetworkId,
        messageId: H256,
        timepoint: GenericTimepoint,
    }
})

export const GenericTimepoint: sts.Type<GenericTimepoint> = sts.closedEnum(() => {
    return  {
        EVM: sts.bigint(),
        Parachain: sts.number(),
        Pending: sts.unit(),
        Sora: sts.number(),
        Unknown: sts.unit(),
    }
})

export const SubNetworkId: sts.Type<SubNetworkId> = sts.closedEnum(() => {
    return  {
        Alphanet: sts.unit(),
        Kusama: sts.unit(),
        Liberland: sts.unit(),
        Mainnet: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
    }
})

export const Type_278: sts.Type<Type_278> = sts.closedEnum(() => {
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

export const AccountId32 = sts.bytes()

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Assets: AssetsCall,
        Babe: BabeCall,
        BagsList: BagsListCall,
        Band: BandCall,
        BridgeDataSigner: BridgeDataSignerCall,
        BridgeMultisig: BridgeMultisigCall,
        BridgeProxy: BridgeProxyCall,
        CeresGovernancePlatform: CeresGovernancePlatformCall,
        CeresLaunchpad: CeresLaunchpadCall,
        CeresLiquidityLocker: CeresLiquidityLockerCall,
        CeresStaking: CeresStakingCall,
        CeresTokenLocker: CeresTokenLockerCall,
        Council: CouncilCall,
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
        MultisigVerifier: MultisigVerifierCall,
        OracleProxy: OracleProxyCall,
        OrderBook: OrderBookCall,
        ParachainBridgeApp: ParachainBridgeAppCall,
        Permissions: PermissionsCall,
        PoolXYK: PoolXYKCall,
        Preimage: PreimageCall,
        PswapDistribution: PswapDistributionCall,
        QATools: QAToolsCall,
        Referrals: ReferralsCall,
        Rewards: RewardsCall,
        Scheduler: SchedulerCall,
        Session: SessionCall,
        Staking: StakingCall,
        SubstrateBridgeInboundChannel: SubstrateBridgeInboundChannelCall,
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

export const FixedU128 = sts.bigint()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XSTPoolCall: sts.Type<XSTPoolCall> = sts.closedEnum(() => {
    return  {
        disable_synthetic_asset: sts.enumStruct({
            syntheticAsset: AssetId32,
        }),
        enable_synthetic_asset: sts.enumStruct({
            assetId: AssetId32,
            referenceSymbol: SymbolName,
            feeRatio: FixedPoint,
        }),
        register_synthetic_asset: sts.enumStruct({
            assetSymbol: AssetSymbol,
            assetName: AssetName,
            referenceSymbol: SymbolName,
            feeRatio: FixedPoint,
        }),
        remove_synthetic_asset: sts.enumStruct({
            syntheticAsset: AssetId32,
        }),
        set_reference_asset: sts.enumStruct({
            referenceAssetId: AssetId32,
        }),
        set_synthetic_asset_fee: sts.enumStruct({
            syntheticAsset: AssetId32,
            feeRatio: FixedPoint,
        }),
        set_synthetic_base_asset_floor_price: sts.enumStruct({
            floorPrice: sts.bigint(),
        }),
    }
})

export const AssetName = sts.bytes()

export const AssetSymbol = sts.bytes()

export const FixedPoint: sts.Type<FixedPoint> = sts.struct(() => {
    return  {
        inner: sts.bigint(),
    }
})

export const SymbolName = sts.bytes()

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const VestedRewardsCall: sts.Type<VestedRewardsCall> = sts.closedEnum(() => {
    return  {
        claim_crowdloan_rewards: sts.enumStruct({
            crowdloan: CrowdloanTag,
        }),
        claim_rewards: sts.unit(),
        register_crowdloan: sts.enumStruct({
            tag: CrowdloanTag,
            startBlock: sts.number(),
            length: sts.number(),
            rewards: sts.array(() => sts.tuple(() => [AssetId32, sts.bigint()])),
            contributions: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
        }),
        update_rewards: sts.enumStruct({
            rewards: sts.array(() => sts.tuple(() => [AccountId32, sts.array(() => sts.tuple(() => [RewardReason, sts.bigint()]))])),
        }),
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

export const CrowdloanTag = sts.bytes()

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
        with_weight: sts.enumStruct({
            call: Call,
            weight: Weight,
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
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        close_old_weight: sts.enumStruct({
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
            weight: Weight,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SubstrateBridgeInboundChannelCall: sts.Type<SubstrateBridgeInboundChannelCall> = sts.closedEnum(() => {
    return  {
        submit: sts.enumStruct({
            networkId: SubNetworkId,
            commitment: GenericCommitment,
            proof: MultiProof,
        }),
    }
})

export const MultiProof: sts.Type<MultiProof> = sts.closedEnum(() => {
    return  {
        Multisig: Proof,
    }
})

export const Proof: sts.Type<Proof> = sts.struct(() => {
    return  {
        digest: AuxiliaryDigest,
        proof: sts.array(() => Signature),
    }
})

export const Signature = sts.bytes()

export const AuxiliaryDigest: sts.Type<AuxiliaryDigest> = sts.struct(() => {
    return  {
        logs: sts.array(() => AuxiliaryDigestItem),
    }
})

export const AuxiliaryDigestItem: sts.Type<AuxiliaryDigestItem> = sts.closedEnum(() => {
    return  {
        Commitment: sts.tuple(() => [GenericNetworkId, H256]),
    }
})

export const GenericNetworkId: sts.Type<GenericNetworkId> = sts.closedEnum(() => {
    return  {
        EVM: sts.bigint(),
        EVMLegacy: sts.number(),
        Sub: SubNetworkId,
    }
})

export const GenericCommitment: sts.Type<GenericCommitment> = sts.closedEnum(() => {
    return  {
        EVM: Type_546,
        Sub: Commitment,
    }
})

export const Commitment: sts.Type<Commitment> = sts.struct(() => {
    return  {
        messages: sts.array(() => BridgeMessage),
        nonce: sts.bigint(),
    }
})

export const BridgeMessage: sts.Type<BridgeMessage> = sts.struct(() => {
    return  {
        payload: sts.bytes(),
        timepoint: GenericTimepoint,
    }
})

export const Type_546: sts.Type<Type_546> = sts.struct(() => {
    return  {
        nonce: sts.bigint(),
        totalMaxGas: sts.bigint(),
        messages: sts.array(() => Message),
    }
})

export const Message: sts.Type<Message> = sts.struct(() => {
    return  {
        target: H160,
        maxGas: sts.bigint(),
        payload: sts.bytes(),
    }
})

export const H160 = sts.bytes()

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
        set_invulnerables: sts.enumStruct({
            invulnerables: sts.array(() => AccountId32),
        }),
        set_min_commission: sts.enumStruct({
            new: Perbill,
        }),
        set_payee: sts.enumStruct({
            payee: RewardDestination,
        }),
        set_staking_configs: sts.enumStruct({
            minNominatorBond: ConfigOp,
            minValidatorBond: ConfigOp,
            maxNominatorCount: Type_287,
            maxValidatorCount: Type_287,
            chillThreshold: Type_288,
            minCommission: Type_289,
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

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export const Type_289: sts.Type<Type_289> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Perbill,
    }
})

export const Type_288: sts.Type<Type_288> = sts.closedEnum(() => {
    return  {
        Noop: sts.unit(),
        Remove: sts.unit(),
        Set: Percent,
    }
})

export const Type_287: sts.Type<Type_287> = sts.closedEnum(() => {
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

export const Perbill = sts.number()

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

export const Public = sts.bytes()

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
            call: Call,
        }),
        schedule_after: sts.enumStruct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named: sts.enumStruct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
        }),
        schedule_named_after: sts.enumStruct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: Call,
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
export const QAToolsCall: sts.Type<QAToolsCall> = sts.closedEnum(() => {
    return  {
        order_book_create_and_fill_batch: sts.enumStruct({
            bidsOwner: AccountId32,
            asksOwner: AccountId32,
            settings: sts.array(() => sts.tuple(() => [OrderBookId, OrderBookAttributes, OrderBookFill])),
        }),
        order_book_fill_batch: sts.enumStruct({
            bidsOwner: AccountId32,
            asksOwner: AccountId32,
            settings: sts.array(() => sts.tuple(() => [OrderBookId, OrderBookFill])),
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
export const PreimageCall: sts.Type<PreimageCall> = sts.closedEnum(() => {
    return  {
        note_preimage: sts.enumStruct({
            bytes: sts.bytes(),
        }),
        request_preimage: sts.enumStruct({
            hash: H256,
        }),
        unnote_preimage: sts.enumStruct({
            hash: H256,
        }),
        unrequest_preimage: sts.enumStruct({
            hash: H256,
        }),
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
export const ParachainBridgeAppCall: sts.Type<ParachainBridgeAppCall> = sts.closedEnum(() => {
    return  {
        add_assetid_paraid: sts.enumStruct({
            networkId: SubNetworkId,
            paraId: sts.number(),
            assetId: AssetId32,
        }),
        burn: sts.enumStruct({
            networkId: SubNetworkId,
            assetId: AssetId32,
            recipient: VersionedMultiLocation,
            amount: sts.bigint(),
        }),
        finalize_asset_registration: sts.enumStruct({
            assetId: AssetId32,
            assetKind: Type_556,
        }),
        mint: sts.enumStruct({
            assetId: AssetId32,
            sender: sts.option(() => VersionedMultiLocation),
            recipient: AccountId32,
            amount: sts.bigint(),
        }),
        register_sidechain_asset: sts.enumStruct({
            networkId: SubNetworkId,
            sidechainAsset: V3AssetId,
            symbol: AssetSymbol,
            name: AssetName,
            decimals: sts.number(),
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        }),
        register_thischain_asset: sts.enumStruct({
            networkId: SubNetworkId,
            assetId: AssetId32,
            sidechainAsset: V3AssetId,
            allowedParachains: sts.array(() => sts.number()),
            minimalXcmAmount: sts.bigint(),
        }),
        remove_assetid_paraid: sts.enumStruct({
            networkId: SubNetworkId,
            paraId: sts.number(),
            assetId: AssetId32,
        }),
        set_minimum_xcm_incoming_asset_count: sts.enumStruct({
            networkId: SubNetworkId,
            assetId: AssetId32,
            minimalXcmAmount: sts.bigint(),
        }),
        update_transaction_status: sts.enumStruct({
            messageId: H256,
            transferStatus: XCMAppTransferStatus,
        }),
    }
})

export const XCMAppTransferStatus: sts.Type<XCMAppTransferStatus> = sts.closedEnum(() => {
    return  {
        Success: sts.unit(),
        XCMTransferError: sts.unit(),
    }
})

export const V3AssetId: sts.Type<V3AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V3MultiLocation,
    }
})

export const V3MultiLocation: sts.Type<V3MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V3Junctions,
    }
})

export const V3Junctions: sts.Type<V3Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V3Junction,
        X2: sts.tuple(() => [V3Junction, V3Junction]),
        X3: sts.tuple(() => [V3Junction, V3Junction, V3Junction]),
        X4: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction]),
        X5: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X6: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X7: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
        X8: sts.tuple(() => [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]),
    }
})

export const V3Junction: sts.Type<V3Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: sts.option(() => V3NetworkId),
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.enumStruct({
            length: sts.number(),
            data: sts.bytes(),
        }),
        GlobalConsensus: V3NetworkId,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V3BodyId,
            part: V3BodyPart,
        }),
    }
})

export const V3BodyPart: sts.Type<V3BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V3BodyId: sts.Type<V3BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Moniker: sts.bytes(),
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const V3NetworkId: sts.Type<V3NetworkId> = sts.closedEnum(() => {
    return  {
        BitcoinCash: sts.unit(),
        BitcoinCore: sts.unit(),
        ByFork: sts.enumStruct({
            blockNumber: sts.bigint(),
            blockHash: sts.bytes(),
        }),
        ByGenesis: sts.bytes(),
        Ethereum: sts.enumStruct({
            chainId: sts.bigint(),
        }),
        Kusama: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
        Westend: sts.unit(),
        Wococo: sts.unit(),
    }
})

export const Type_556: sts.Type<Type_556> = sts.closedEnum(() => {
    return  {
        Sidechain: sts.unit(),
        Thischain: sts.unit(),
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
    }
})

export const V2MultiLocation: sts.Type<V2MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V2Junctions,
    }
})

export const V2Junctions: sts.Type<V2Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V2Junction,
        X2: sts.tuple(() => [V2Junction, V2Junction]),
        X3: sts.tuple(() => [V2Junction, V2Junction, V2Junction]),
        X4: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction]),
        X5: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X6: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X7: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
        X8: sts.tuple(() => [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]),
    }
})

export const V2Junction: sts.Type<V2Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V2NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V2NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V2NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: WeakBoundedVec,
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V2BodyId,
            part: V2BodyPart,
        }),
    }
})

export const V2BodyPart: sts.Type<V2BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V2BodyId: sts.Type<V2BodyId> = sts.closedEnum(() => {
    return  {
        Administration: sts.unit(),
        Defense: sts.unit(),
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: WeakBoundedVec,
        Technical: sts.unit(),
        Treasury: sts.unit(),
        Unit: sts.unit(),
    }
})

export const WeakBoundedVec = sts.bytes()

export const V2NetworkId: sts.Type<V2NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: WeakBoundedVec,
        Polkadot: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const OrderBookCall: sts.Type<OrderBookCall> = sts.closedEnum(() => {
    return  {
        cancel_limit_order: sts.enumStruct({
            orderBookId: OrderBookId,
            orderId: sts.bigint(),
        }),
        cancel_limit_orders_batch: sts.enumStruct({
            limitOrdersToCancel: sts.array(() => sts.tuple(() => [OrderBookId, sts.array(() => sts.bigint())])),
        }),
        change_orderbook_status: sts.enumStruct({
            orderBookId: OrderBookId,
            status: OrderBookStatus,
        }),
        create_orderbook: sts.enumStruct({
            orderBookId: OrderBookId,
            tickSize: sts.bigint(),
            stepLotSize: sts.bigint(),
            minLotSize: sts.bigint(),
            maxLotSize: sts.bigint(),
        }),
        delete_orderbook: sts.enumStruct({
            orderBookId: OrderBookId,
        }),
        execute_market_order: sts.enumStruct({
            orderBookId: OrderBookId,
            direction: PriceVariant,
            amount: sts.bigint(),
        }),
        place_limit_order: sts.enumStruct({
            orderBookId: OrderBookId,
            price: sts.bigint(),
            amount: sts.bigint(),
            side: PriceVariant,
            lifespan: sts.option(() => sts.bigint()),
        }),
        update_orderbook: sts.enumStruct({
            orderBookId: OrderBookId,
            tickSize: sts.bigint(),
            stepLotSize: sts.bigint(),
            minLotSize: sts.bigint(),
            maxLotSize: sts.bigint(),
        }),
    }
})

export const PriceVariant: sts.Type<PriceVariant> = sts.closedEnum(() => {
    return  {
        Buy: sts.unit(),
        Sell: sts.unit(),
    }
})

export const OrderBookStatus: sts.Type<OrderBookStatus> = sts.closedEnum(() => {
    return  {
        OnlyCancel: sts.unit(),
        PlaceAndCancel: sts.unit(),
        Stop: sts.unit(),
        Trade: sts.unit(),
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

export const Oracle: sts.Type<Oracle> = sts.closedEnum(() => {
    return  {
        BandChainFeed: sts.unit(),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const MultisigVerifierCall: sts.Type<MultisigVerifierCall> = sts.closedEnum(() => {
    return  {
        add_peer: sts.enumStruct({
            peer: sts.bytes(),
        }),
        initialize: sts.enumStruct({
            networkId: GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        }),
        remove_peer: sts.enumStruct({
            peer: sts.bytes(),
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
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => AccountId32),
            maybeTimepoint: sts.option(() => Timepoint),
            call: Call,
            maxWeight: Weight,
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
        set_adar_commission_ratio: sts.enumStruct({
            commissionRatio: sts.bigint(),
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
            swapBatches: sts.array(() => SwapBatchInfo),
            inputAssetId: AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => LiquiditySourceType),
            filterMode: FilterMode,
        }),
        xorless_transfer: sts.enumStruct({
            dexId: sts.number(),
            assetId: AssetId32,
            receiver: AccountId32,
            amount: sts.bigint(),
            desiredXorAmount: sts.bigint(),
            maxAmountIn: sts.bigint(),
            selectedSourceTypes: sts.array(() => LiquiditySourceType),
            filterMode: FilterMode,
            additionalData: sts.option(() => BoundedVec),
        }),
    }
})

export const BoundedVec = sts.bytes()

export const SwapBatchInfo: sts.Type<SwapBatchInfo> = sts.struct(() => {
    return  {
        outcomeAssetId: AssetId32,
        outcomeAssetReuse: sts.bigint(),
        dexId: sts.number(),
        receivers: sts.array(() => BatchReceiverInfo),
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

export const LiquiditySourceType: sts.Type<LiquiditySourceType> = sts.closedEnum(() => {
    return  {
        BondingCurvePool: sts.unit(),
        MockPool: sts.unit(),
        MockPool2: sts.unit(),
        MockPool3: sts.unit(),
        MockPool4: sts.unit(),
        MulticollateralBondingCurvePool: sts.unit(),
        OrderBook: sts.unit(),
        XSTPool: sts.unit(),
        XYKPool: sts.unit(),
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
            identity: H256,
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
            title: BoundedString,
            description: sts.bytes(),
            options: sts.array(() => sts.bytes()),
        }),
        vote: sts.enumStruct({
            pollId: H256,
            votingOption: sts.bytes(),
        }),
        withdraw_funds_creator: sts.enumStruct({
            pollId: H256,
        }),
        withdraw_funds_voter: sts.enumStruct({
            pollId: H256,
        }),
    }
})

export const BoundedString = sts.bytes()

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
            equivocationProof: Type_294,
            keyOwnerProof: MembershipProof,
        }),
        report_equivocation_unsigned: sts.enumStruct({
            equivocationProof: Type_294,
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

export const Type_294: sts.Type<Type_294> = sts.struct(() => {
    return  {
        setId: sts.bigint(),
        equivocation: Equivocation,
    }
})

export const Equivocation: sts.Type<Equivocation> = sts.closedEnum(() => {
    return  {
        Precommit: Type_301,
        Prevote: Type_296,
    }
})

export const Type_296: sts.Type<Type_296> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Prevote, sts.bytes()]),
        second: sts.tuple(() => [Prevote, sts.bytes()]),
    }
})

export const Prevote: sts.Type<Prevote> = sts.struct(() => {
    return  {
        targetHash: H256,
        targetNumber: sts.number(),
    }
})

export const Type_301: sts.Type<Type_301> = sts.struct(() => {
    return  {
        roundNumber: sts.bigint(),
        identity: Public,
        first: sts.tuple(() => [Precommit, sts.bytes()]),
        second: sts.tuple(() => [Precommit, sts.bytes()]),
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

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
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
            slashBond: sts.boolean(),
            rerunElection: sts.boolean(),
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
        external_propose: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_default: sts.enumStruct({
            proposal: Bounded,
        }),
        external_propose_majority: sts.enumStruct({
            proposal: Bounded,
        }),
        fast_track: sts.enumStruct({
            proposalHash: H256,
            votingPeriod: sts.number(),
            delay: sts.number(),
        }),
        propose: sts.enumStruct({
            proposal: Bounded,
            value: sts.bigint(),
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

export const Bounded: sts.Type<Bounded> = sts.closedEnum(() => {
    return  {
        Inline: sts.bytes(),
        Legacy: sts.enumStruct({
            hash: H256,
        }),
        Lookup: sts.enumStruct({
            hash: H256,
            len: sts.number(),
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
        disable_liquidity_source: sts.enumStruct({
            source: LiquiditySourceType,
        }),
        enable_liquidity_source: sts.enumStruct({
            source: LiquiditySourceType,
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
            proposalWeightBound: Weight,
            lengthBound: sts.number(),
        }),
        close_old_weight: sts.enumStruct({
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
            pollAsset: AssetId32,
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
            title: BoundedString,
            description: sts.bytes(),
            options: sts.array(() => sts.bytes()),
        }),
        vote: sts.enumStruct({
            pollId: H256,
            votingOption: sts.number(),
            numberOfVotes: sts.bigint(),
        }),
        withdraw: sts.enumStruct({
            pollId: H256,
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BridgeProxyCall: sts.Type<BridgeProxyCall> = sts.closedEnum(() => {
    return  {
        add_limited_asset: sts.enumStruct({
            assetId: AssetId32,
        }),
        burn: sts.enumStruct({
            networkId: GenericNetworkId,
            assetId: AssetId32,
            recipient: GenericAccount,
            amount: sts.bigint(),
        }),
        remove_limited_asset: sts.enumStruct({
            assetId: AssetId32,
        }),
        update_transfer_limit: sts.enumStruct({
            settings: TransferLimitSettings,
        }),
    }
})

export const TransferLimitSettings: sts.Type<TransferLimitSettings> = sts.struct(() => {
    return  {
        maxAmount: sts.bigint(),
        periodBlocks: sts.number(),
    }
})

export const GenericAccount: sts.Type<GenericAccount> = sts.closedEnum(() => {
    return  {
        EVM: H160,
        Parachain: VersionedMultiLocation,
        Root: sts.unit(),
        Sora: AccountId32,
        Unknown: sts.unit(),
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
            maxWeight: Weight,
        }),
        as_multi: sts.enumStruct({
            id: AccountId32,
            maybeTimepoint: sts.option(() => BridgeTimepoint),
            call: sts.bytes(),
            storeCall: sts.boolean(),
            maxWeight: Weight,
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
export const BridgeDataSignerCall: sts.Type<BridgeDataSignerCall> = sts.closedEnum(() => {
    return  {
        add_peer: sts.enumStruct({
            networkId: GenericNetworkId,
            peer: sts.bytes(),
        }),
        approve: sts.enumStruct({
            networkId: GenericNetworkId,
            data: H256,
            signature: Signature,
        }),
        finish_add_peer: sts.enumStruct({
            peer: sts.bytes(),
        }),
        finish_remove_peer: sts.enumStruct({
            peer: sts.bytes(),
        }),
        register_network: sts.enumStruct({
            networkId: GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        }),
        remove_peer: sts.enumStruct({
            networkId: GenericNetworkId,
            peer: sts.bytes(),
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
        set_dynamic_fee_parameters: sts.enumStruct({
            feeParameters: FeeCalculationParameters,
        }),
    }
})

export const FeeCalculationParameters: sts.Type<FeeCalculationParameters> = sts.struct(() => {
    return  {
        decay: FixedPoint,
        minFee: FixedPoint,
        deviation: FixedPoint,
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
        update_balance: sts.enumStruct({
            who: AccountId32,
            currencyId: AssetId32,
            amount: sts.bigint(),
        }),
        update_info: sts.enumStruct({
            assetId: AssetId32,
            newSymbol: sts.option(() => AssetSymbol),
            newName: sts.option(() => AssetName),
        }),
    }
})

export const Description = sts.bytes()

export const ContentSource = sts.bytes()
