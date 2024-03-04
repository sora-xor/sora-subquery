import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface FixedPoint {
    inner: bigint
}

export const FixedPoint: sts.Type<FixedPoint> = sts.struct(() => {
    return  {
        inner: sts.bigint(),
    }
})

export interface EventRecord {
    phase: Type_186
    event: Event
    topics: H256[]
}

export type H256 = Bytes

export type Event = Event_Assets | Event_BagsList | Event_Balances | Event_Band | Event_BridgeDataSigner | Event_BridgeMultisig | Event_BridgeProxy | Event_CeresGovernancePlatform | Event_CeresLaunchpad | Event_CeresLiquidityLocker | Event_CeresStaking | Event_CeresTokenLocker | Event_Council | Event_DemeterFarmingPlatform | Event_Democracy | Event_ElectionProviderMultiPhase | Event_ElectionsPhragmen | Event_EthBridge | Event_Faucet | Event_Grandpa | Event_HermesGovernancePlatform | Event_Identity | Event_ImOnline | Event_IrohaMigration | Event_LeafProvider | Event_LiquidityProxy | Event_MulticollateralBondingCurvePool | Event_Multisig | Event_MultisigVerifier | Event_Offences | Event_OracleProxy | Event_ParachainBridgeApp | Event_Permissions | Event_PoolXYK | Event_Preimage | Event_PriceTools | Event_PswapDistribution | Event_Rewards | Event_Scheduler | Event_Session | Event_Staking | Event_SubstrateBridgeInboundChannel | Event_SubstrateBridgeOutboundChannel | Event_SubstrateDispatch | Event_Sudo | Event_System | Event_Technical | Event_TechnicalCommittee | Event_TechnicalMembership | Event_Tokens | Event_TradingPair | Event_TransactionPayment | Event_Utility | Event_VestedRewards | Event_XSTPool | Event_XorFee

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

export interface Event_BridgeDataSigner {
    __kind: 'BridgeDataSigner'
    value: BridgeDataSignerEvent
}

export interface Event_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigEvent
}

export interface Event_BridgeProxy {
    __kind: 'BridgeProxy'
    value: BridgeProxyEvent
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

export interface Event_LeafProvider {
    __kind: 'LeafProvider'
    value: LeafProviderEvent
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

export interface Event_MultisigVerifier {
    __kind: 'MultisigVerifier'
    value: MultisigVerifierEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_OracleProxy {
    __kind: 'OracleProxy'
    value: OracleProxyEvent
}

export interface Event_ParachainBridgeApp {
    __kind: 'ParachainBridgeApp'
    value: ParachainBridgeAppEvent
}

export interface Event_Permissions {
    __kind: 'Permissions'
    value: PermissionsEvent
}

export interface Event_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
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

export interface Event_SubstrateBridgeInboundChannel {
    __kind: 'SubstrateBridgeInboundChannel'
    value: SubstrateBridgeInboundChannelEvent
}

export interface Event_SubstrateBridgeOutboundChannel {
    __kind: 'SubstrateBridgeOutboundChannel'
    value: SubstrateBridgeOutboundChannelEvent
}

export interface Event_SubstrateDispatch {
    __kind: 'SubstrateDispatch'
    value: SubstrateDispatchEvent
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

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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

export type FixedU128 = bigint

export type AccountId32 = Bytes

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type XSTPoolEvent = XSTPoolEvent_ReferenceAssetChanged | XSTPoolEvent_SyntheticAssetDisabled | XSTPoolEvent_SyntheticAssetEnabled | XSTPoolEvent_SyntheticAssetFeeChanged | XSTPoolEvent_SyntheticAssetRemoved | XSTPoolEvent_SyntheticBaseAssetFloorPriceChanged

/**
 * Reference Asset has been changed for pool. [New Reference Asset Id]
 */
export interface XSTPoolEvent_ReferenceAssetChanged {
    __kind: 'ReferenceAssetChanged'
    value: AssetId32
}

/**
 * Synthetic asset has been disabled. [Synthetic Asset Id]
 */
export interface XSTPoolEvent_SyntheticAssetDisabled {
    __kind: 'SyntheticAssetDisabled'
    value: AssetId32
}

/**
 * Synthetic asset has been enabled. [Synthetic Asset Id, Reference Symbol]
 */
export interface XSTPoolEvent_SyntheticAssetEnabled {
    __kind: 'SyntheticAssetEnabled'
    value: [AssetId32, SymbolName]
}

/**
 * Synthetic asset fee has been changed. [Synthetic Asset Id, New Fee]
 */
export interface XSTPoolEvent_SyntheticAssetFeeChanged {
    __kind: 'SyntheticAssetFeeChanged'
    value: [AssetId32, FixedPoint]
}

/**
 * Synthetic asset has been removed. [Synthetic Asset Id, Reference Symbol]
 */
export interface XSTPoolEvent_SyntheticAssetRemoved {
    __kind: 'SyntheticAssetRemoved'
    value: [AssetId32, SymbolName]
}

/**
 * Floor price of the synthetic base asset has been changed. [New Floor Price]
 */
export interface XSTPoolEvent_SyntheticBaseAssetFloorPriceChanged {
    __kind: 'SyntheticBaseAssetFloorPriceChanged'
    value: bigint
}

export type SymbolName = Bytes

export interface AssetId32 {
    code: Bytes
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type VestedRewardsEvent = VestedRewardsEvent_ActualDoesntMatchAvailable | VestedRewardsEvent_CrowdloanClaimed | VestedRewardsEvent_FailedToSaveCalculatedReward | VestedRewardsEvent_RewardsVested

/**
 * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
 */
export interface VestedRewardsEvent_ActualDoesntMatchAvailable {
    __kind: 'ActualDoesntMatchAvailable'
    value: RewardReason
}

/**
 * Claimed crowdloan rewards
 */
export interface VestedRewardsEvent_CrowdloanClaimed {
    __kind: 'CrowdloanClaimed'
    value: [AccountId32, AssetId32, bigint]
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: AccountId32
    actualFee: bigint
    tip: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TokensEvent = TokensEvent_BalanceSet | TokensEvent_Deposited | TokensEvent_DustLost | TokensEvent_Endowed | TokensEvent_LockRemoved | TokensEvent_LockSet | TokensEvent_Locked | TokensEvent_ReserveRepatriated | TokensEvent_Reserved | TokensEvent_Slashed | TokensEvent_TotalIssuanceSet | TokensEvent_Transfer | TokensEvent_Unlocked | TokensEvent_Unreserved | TokensEvent_Withdrawn

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
 * Some free balance was locked.
 */
export interface TokensEvent_Locked {
    __kind: 'Locked'
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
 * Some locked balance was freed.
 */
export interface TokensEvent_Unlocked {
    __kind: 'Unlocked'
    currencyId: AssetId32
    who: AccountId32
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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

export type TechPurpose = TechPurpose_FeeCollector | TechPurpose_FeeCollectorForPair | TechPurpose_Identifier | TechPurpose_OrderBookLiquidityKeeper | TechPurpose_XykLiquidityKeeper

export interface TechPurpose_FeeCollector {
    __kind: 'FeeCollector'
}

export interface TechPurpose_FeeCollectorForPair {
    __kind: 'FeeCollectorForPair'
    value: Type_85
}

export interface TechPurpose_Identifier {
    __kind: 'Identifier'
    value: Bytes
}

export interface TechPurpose_OrderBookLiquidityKeeper {
    __kind: 'OrderBookLiquidityKeeper'
    value: Type_85
}

export interface TechPurpose_XykLiquidityKeeper {
    __kind: 'XykLiquidityKeeper'
    value: Type_85
}

export interface Type_85 {
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

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SubstrateDispatchEvent = SubstrateDispatchEvent_MessageDecodeFailed | SubstrateDispatchEvent_MessageDispatched | SubstrateDispatchEvent_MessageRejected

/**
 * We have failed to decode a Call from the message.
 */
export interface SubstrateDispatchEvent_MessageDecodeFailed {
    __kind: 'MessageDecodeFailed'
    value: MessageId
}

/**
 * Message has been dispatched with given result.
 */
export interface SubstrateDispatchEvent_MessageDispatched {
    __kind: 'MessageDispatched'
    value: [MessageId, Result<null, DispatchError>]
}

/**
 * Message has been rejected
 */
export interface SubstrateDispatchEvent_MessageRejected {
    __kind: 'MessageRejected'
    value: MessageId
}

export interface MessageId {
    sender: GenericNetworkId
    receiver: GenericNetworkId
    batchNonce?: (bigint | undefined)
    messageNonce: bigint
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

export type SubNetworkId = SubNetworkId_Custom | SubNetworkId_Kusama | SubNetworkId_Mainnet | SubNetworkId_Polkadot | SubNetworkId_Rococo

export interface SubNetworkId_Custom {
    __kind: 'Custom'
    value: number
}

export interface SubNetworkId_Kusama {
    __kind: 'Kusama'
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

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SubstrateBridgeOutboundChannelEvent = SubstrateBridgeOutboundChannelEvent_MessageAccepted

export interface SubstrateBridgeOutboundChannelEvent_MessageAccepted {
    __kind: 'MessageAccepted'
    networkId: SubNetworkId
    batchNonce: bigint
    messageNonce: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SubstrateBridgeInboundChannelEvent = never

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_Bonded | StakingEvent_Chilled | StakingEvent_EraPaid | StakingEvent_ForceEra | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_PayoutStarted | StakingEvent_Rewarded | StakingEvent_SlashReported | StakingEvent_Slashed | StakingEvent_StakersElected | StakingEvent_StakingElectionFailed | StakingEvent_Unbonded | StakingEvent_ValidatorPrefsSet | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    stash: AccountId32
    amount: bigint
}

/**
 * An account has stopped participating as either a validator or nominator.
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    stash: AccountId32
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    eraIndex: number
    validatorPayout: bigint
}

/**
 * A new force era mode was set.
 */
export interface StakingEvent_ForceEra {
    __kind: 'ForceEra'
    mode: Forcing
}

/**
 * A nominator has been kicked from a validator.
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    nominator: AccountId32
    stash: AccountId32
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    sessionIndex: number
}

/**
 * The stakers' rewards are getting paid.
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    eraIndex: number
    validatorStash: AccountId32
}

/**
 * The nominator has been rewarded by this amount.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: AccountId32
    amount: bigint
}

/**
 * A slash for the given validator, for the given percentage of their stake, at the given
 * era as been reported.
 */
export interface StakingEvent_SlashReported {
    __kind: 'SlashReported'
    validator: AccountId32
    fraction: Perbill
    slashEra: number
}

/**
 * One staker (and potentially its nominators) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: AccountId32
    amount: bigint
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
 * An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    stash: AccountId32
    amount: bigint
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    stash: AccountId32
    prefs: ValidatorPrefs
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    stash: AccountId32
    amount: bigint
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type Perbill = number

export type Forcing = Forcing_ForceAlways | Forcing_ForceNew | Forcing_ForceNone | Forcing_NotForcing

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
export type SchedulerEvent = SchedulerEvent_CallUnavailable | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_PeriodicFailed | SchedulerEvent_PermanentlyOverweight | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id?: (Bytes | undefined)
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
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type PriceToolsEvent = never

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type PreimageEvent = PreimageEvent_Cleared | PreimageEvent_Noted | PreimageEvent_Requested

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: H256
}

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: H256
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: H256
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type PoolXYKEvent = PoolXYKEvent_PoolIsInitialized

export interface PoolXYKEvent_PoolIsInitialized {
    __kind: 'PoolIsInitialized'
    value: AccountId32
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ParachainBridgeAppEvent = ParachainBridgeAppEvent_Burned | ParachainBridgeAppEvent_Minted

/**
 * [network_id, asset_id, sender, recepient, amount]
 */
export interface ParachainBridgeAppEvent_Burned {
    __kind: 'Burned'
    value: [SubNetworkId, AssetId32, AccountId32, VersionedMultiLocation, bigint]
}

/**
 * [network_id, asset_id, sender, recepient, amount]
 */
export interface ParachainBridgeAppEvent_Minted {
    __kind: 'Minted'
    value: [SubNetworkId, AssetId32, (VersionedMultiLocation | undefined), AccountId32, bigint]
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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

export type Oracle = Oracle_BandChainFeed

export interface Oracle_BandChainFeed {
    __kind: 'BandChainFeed'
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type MultisigVerifierEvent = MultisigVerifierEvent_NetworkInitialized | MultisigVerifierEvent_PeerAdded | MultisigVerifierEvent_PeerRemoved | MultisigVerifierEvent_VerificationSuccessful

export interface MultisigVerifierEvent_NetworkInitialized {
    __kind: 'NetworkInitialized'
    value: GenericNetworkId
}

export interface MultisigVerifierEvent_PeerAdded {
    __kind: 'PeerAdded'
    value: Bytes
}

export interface MultisigVerifierEvent_PeerRemoved {
    __kind: 'PeerRemoved'
    value: Bytes
}

export interface MultisigVerifierEvent_VerificationSuccessful {
    __kind: 'VerificationSuccessful'
    value: GenericNetworkId
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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

export interface Timepoint {
    height: number
    index: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type LiquidityProxyEvent = LiquidityProxyEvent_ADARFeeWithdrawn | LiquidityProxyEvent_BatchSwapExecuted | LiquidityProxyEvent_Exchange | LiquidityProxyEvent_LiquiditySourceDisabled | LiquidityProxyEvent_LiquiditySourceEnabled | LiquidityProxyEvent_XorlessTransfer

/**
 * ADAR fee which is withdrawn from reused outcome asset amount
 * [Asset Id, ADAR Fee]
 */
export interface LiquidityProxyEvent_ADARFeeWithdrawn {
    __kind: 'ADARFeeWithdrawn'
    value: [AssetId32, bigint]
}

/**
 * Batch of swap transfers has been performed
 * [Input asset ADAR Fee, Input amount]
 */
export interface LiquidityProxyEvent_BatchSwapExecuted {
    __kind: 'BatchSwapExecuted'
    value: [bigint, bigint]
}

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

/**
 * XORless transfer has been performed
 * [Asset Id, Caller Account, Receiver Account, Amount, Additional Data]
 */
export interface LiquidityProxyEvent_XorlessTransfer {
    __kind: 'XorlessTransfer'
    value: [AssetId32, AccountId32, AccountId32, bigint, (BoundedVec | undefined)]
}

export type BoundedVec = Bytes

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

export interface LiquiditySourceId {
    dexId: number
    liquiditySourceIndex: LiquiditySourceType
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type LeafProviderEvent = never

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type HermesGovernancePlatformEvent = HermesGovernancePlatformEvent_Created | HermesGovernancePlatformEvent_CreatorFundsWithdrawn | HermesGovernancePlatformEvent_MinimumHermesForCreatingPollChanged | HermesGovernancePlatformEvent_MinimumHermesForVotingChanged | HermesGovernancePlatformEvent_Voted | HermesGovernancePlatformEvent_VoterFundsWithdrawn

/**
 * Create poll [who, title, start_timestamp, end_timestamp]
 */
export interface HermesGovernancePlatformEvent_Created {
    __kind: 'Created'
    value: [AccountId32, Bytes, bigint, bigint]
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
    value: [AccountId32, H256, BoundedString]
}

/**
 * Voter Funds Withdrawn [who, balance]
 */
export interface HermesGovernancePlatformEvent_VoterFundsWithdrawn {
    __kind: 'VoterFundsWithdrawn'
    value: [AccountId32, bigint]
}

export type BoundedString = Bytes

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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

export type Public = Bytes

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type EthBridgeEvent = EthBridgeEvent_ApprovalsCollected | EthBridgeEvent_CancellationFailed | EthBridgeEvent_IncomingRequestFinalizationFailed | EthBridgeEvent_IncomingRequestFinalized | EthBridgeEvent_RegisterRequestFailed | EthBridgeEvent_RequestAborted | EthBridgeEvent_RequestFinalizationFailed | EthBridgeEvent_RequestRegistered

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
 * The request registration has been failed. [Request Hash, Error]
 */
export interface EthBridgeEvent_RegisterRequestFailed {
    __kind: 'RegisterRequestFailed'
    value: [H256, DispatchError]
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFailed | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_PhaseTransitioned | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored

/**
 * An election failed.
 * 
 * Not much can be said about which computes failed in the process.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFailed {
    __kind: 'ElectionFailed'
}

/**
 * The election has been finalized, with the given computation and score.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    compute: ElectionCompute
    score: ElectionScore
}

/**
 * There was a phase transition in a given round.
 */
export interface ElectionProviderMultiPhaseEvent_PhaseTransitioned {
    __kind: 'PhaseTransitioned'
    from: Phase
    to: Phase
    round: number
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
 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
 * Otherwise, the solution was stored either during the unsigned phase or by
 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 * room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    origin?: (AccountId32 | undefined)
    prevEjected: boolean
}

export type Phase = Phase_Emergency | Phase_Off | Phase_Signed | Phase_Unsigned

export interface Phase_Emergency {
    __kind: 'Emergency'
}

export interface Phase_Off {
    __kind: 'Off'
}

export interface Phase_Signed {
    __kind: 'Signed'
}

export interface Phase_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_ProposalCanceled | DemocracyEvent_Proposed | DemocracyEvent_Seconded | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_Voted

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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
 * Events for the ETH module.
 */
export type BridgeProxyEvent = BridgeProxyEvent_RefundFailed | BridgeProxyEvent_RequestStatusUpdate

export interface BridgeProxyEvent_RefundFailed {
    __kind: 'RefundFailed'
    value: H256
}

export interface BridgeProxyEvent_RequestStatusUpdate {
    __kind: 'RequestStatusUpdate'
    value: [H256, MessageStatus]
}

export type MessageStatus = MessageStatus_Approved | MessageStatus_Committed | MessageStatus_Done | MessageStatus_Failed | MessageStatus_InQueue | MessageStatus_Refunded

export interface MessageStatus_Approved {
    __kind: 'Approved'
}

export interface MessageStatus_Committed {
    __kind: 'Committed'
}

export interface MessageStatus_Done {
    __kind: 'Done'
}

export interface MessageStatus_Failed {
    __kind: 'Failed'
}

export interface MessageStatus_InQueue {
    __kind: 'InQueue'
}

export interface MessageStatus_Refunded {
    __kind: 'Refunded'
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

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BridgeDataSignerEvent = BridgeDataSignerEvent_AddedPeer | BridgeDataSignerEvent_ApprovalAccepted | BridgeDataSignerEvent_Approved | BridgeDataSignerEvent_Initialized | BridgeDataSignerEvent_RemovedPeer

export interface BridgeDataSignerEvent_AddedPeer {
    __kind: 'AddedPeer'
    networkId: GenericNetworkId
    peer: Bytes
}

export interface BridgeDataSignerEvent_ApprovalAccepted {
    __kind: 'ApprovalAccepted'
    networkId: GenericNetworkId
    data: H256
    signature: Signature
}

export interface BridgeDataSignerEvent_Approved {
    __kind: 'Approved'
    networkId: GenericNetworkId
    data: H256
    signatures: Signature[]
}

export interface BridgeDataSignerEvent_Initialized {
    __kind: 'Initialized'
    networkId: GenericNetworkId
    peers: Bytes[]
}

export interface BridgeDataSignerEvent_RemovedPeer {
    __kind: 'RemovedPeer'
    networkId: GenericNetworkId
    peer: Bytes
}

export type Signature = Bytes

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
    value: [SymbolName, bigint][]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type AssetsEvent = AssetsEvent_AssetRegistered | AssetsEvent_AssetSetNonMintable | AssetsEvent_AssetUpdated | AssetsEvent_Burn | AssetsEvent_Mint | AssetsEvent_Transfer

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
 * Asset info has been updated
 */
export interface AssetsEvent_AssetUpdated {
    __kind: 'AssetUpdated'
    value: [AssetId32, (AssetSymbol | undefined), (AssetName | undefined)]
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

export type AssetName = Bytes

export type AssetSymbol = Bytes

export type Type_186 = Type_186_ApplyExtrinsic | Type_186_Finalization | Type_186_Initialization

export interface Type_186_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_186_Finalization {
    __kind: 'Finalization'
}

export interface Type_186_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Type_186,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const H256 = sts.bytes()

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Assets: AssetsEvent,
        BagsList: BagsListEvent,
        Balances: BalancesEvent,
        Band: BandEvent,
        BridgeDataSigner: BridgeDataSignerEvent,
        BridgeMultisig: BridgeMultisigEvent,
        BridgeProxy: BridgeProxyEvent,
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
        LeafProvider: LeafProviderEvent,
        LiquidityProxy: LiquidityProxyEvent,
        MulticollateralBondingCurvePool: MulticollateralBondingCurvePoolEvent,
        Multisig: MultisigEvent,
        MultisigVerifier: MultisigVerifierEvent,
        Offences: OffencesEvent,
        OracleProxy: OracleProxyEvent,
        ParachainBridgeApp: ParachainBridgeAppEvent,
        Permissions: PermissionsEvent,
        PoolXYK: PoolXYKEvent,
        Preimage: PreimageEvent,
        PriceTools: PriceToolsEvent,
        PswapDistribution: PswapDistributionEvent,
        Rewards: RewardsEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Staking: StakingEvent,
        SubstrateBridgeInboundChannel: SubstrateBridgeInboundChannelEvent,
        SubstrateBridgeOutboundChannel: SubstrateBridgeOutboundChannelEvent,
        SubstrateDispatch: SubstrateDispatchEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        Technical: TechnicalEvent,
        TechnicalCommittee: TechnicalCommitteeEvent,
        TechnicalMembership: TechnicalMembershipEvent,
        Tokens: TokensEvent,
        TradingPair: TradingPairEvent,
        TransactionPayment: TransactionPaymentEvent,
        Utility: UtilityEvent,
        VestedRewards: VestedRewardsEvent,
        XSTPool: XSTPoolEvent,
        XorFee: XorFeeEvent,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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

export const AccountId32 = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const XSTPoolEvent: sts.Type<XSTPoolEvent> = sts.closedEnum(() => {
    return  {
        ReferenceAssetChanged: AssetId32,
        SyntheticAssetDisabled: AssetId32,
        SyntheticAssetEnabled: sts.tuple(() => [AssetId32, SymbolName]),
        SyntheticAssetFeeChanged: sts.tuple(() => [AssetId32, FixedPoint]),
        SyntheticAssetRemoved: sts.tuple(() => [AssetId32, SymbolName]),
        SyntheticBaseAssetFloorPriceChanged: sts.bigint(),
    }
})

export const SymbolName = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const VestedRewardsEvent: sts.Type<VestedRewardsEvent> = sts.closedEnum(() => {
    return  {
        ActualDoesntMatchAvailable: RewardReason,
        CrowdloanClaimed: sts.tuple(() => [AccountId32, AssetId32, sts.bigint()]),
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const TransactionPaymentEvent: sts.Type<TransactionPaymentEvent> = sts.closedEnum(() => {
    return  {
        TransactionFeePaid: sts.enumStruct({
            who: AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
        Locked: sts.enumStruct({
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
        Unlocked: sts.enumStruct({
            currencyId: AssetId32,
            who: AccountId32,
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
        FeeCollectorForPair: Type_85,
        Identifier: sts.bytes(),
        OrderBookLiquidityKeeper: Type_85,
        XykLiquidityKeeper: Type_85,
    }
})

export const Type_85: sts.Type<Type_85> = sts.struct(() => {
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

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const SubstrateDispatchEvent: sts.Type<SubstrateDispatchEvent> = sts.closedEnum(() => {
    return  {
        MessageDecodeFailed: MessageId,
        MessageDispatched: sts.tuple(() => [MessageId, sts.result(() => sts.unit(), () => DispatchError)]),
        MessageRejected: MessageId,
    }
})

export const MessageId: sts.Type<MessageId> = sts.struct(() => {
    return  {
        sender: GenericNetworkId,
        receiver: GenericNetworkId,
        batchNonce: sts.option(() => sts.bigint()),
        messageNonce: sts.bigint(),
    }
})

export const GenericNetworkId: sts.Type<GenericNetworkId> = sts.closedEnum(() => {
    return  {
        EVM: sts.bigint(),
        EVMLegacy: sts.number(),
        Sub: SubNetworkId,
    }
})

export const SubNetworkId: sts.Type<SubNetworkId> = sts.closedEnum(() => {
    return  {
        Custom: sts.number(),
        Kusama: sts.unit(),
        Mainnet: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const SubstrateBridgeOutboundChannelEvent: sts.Type<SubstrateBridgeOutboundChannelEvent> = sts.closedEnum(() => {
    return  {
        MessageAccepted: sts.enumStruct({
            networkId: SubNetworkId,
            batchNonce: sts.bigint(),
            messageNonce: sts.bigint(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const SubstrateBridgeInboundChannelEvent: sts.Type<SubstrateBridgeInboundChannelEvent> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        Chilled: sts.enumStruct({
            stash: AccountId32,
        }),
        EraPaid: sts.enumStruct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
        }),
        ForceEra: sts.enumStruct({
            mode: Forcing,
        }),
        Kicked: sts.enumStruct({
            nominator: AccountId32,
            stash: AccountId32,
        }),
        OldSlashingReportDiscarded: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
        PayoutStarted: sts.enumStruct({
            eraIndex: sts.number(),
            validatorStash: AccountId32,
        }),
        Rewarded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        SlashReported: sts.enumStruct({
            validator: AccountId32,
            fraction: Perbill,
            slashEra: sts.number(),
        }),
        Slashed: sts.enumStruct({
            staker: AccountId32,
            amount: sts.bigint(),
        }),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        ValidatorPrefsSet: sts.enumStruct({
            stash: AccountId32,
            prefs: ValidatorPrefs,
        }),
        Withdrawn: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export const Perbill = sts.number()

export const Forcing: sts.Type<Forcing> = sts.closedEnum(() => {
    return  {
        ForceAlways: sts.unit(),
        ForceNew: sts.unit(),
        ForceNone: sts.unit(),
        NotForcing: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
        CallUnavailable: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
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
        PeriodicFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        PermanentlyOverweight: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        Scheduled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const PriceToolsEvent: sts.Type<PriceToolsEvent> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const PreimageEvent: sts.Type<PreimageEvent> = sts.closedEnum(() => {
    return  {
        Cleared: sts.enumStruct({
            hash: H256,
        }),
        Noted: sts.enumStruct({
            hash: H256,
        }),
        Requested: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const PoolXYKEvent: sts.Type<PoolXYKEvent> = sts.closedEnum(() => {
    return  {
        PoolIsInitialized: AccountId32,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ParachainBridgeAppEvent: sts.Type<ParachainBridgeAppEvent> = sts.closedEnum(() => {
    return  {
        Burned: sts.tuple(() => [SubNetworkId, AssetId32, AccountId32, VersionedMultiLocation, sts.bigint()]),
        Minted: sts.tuple(() => [SubNetworkId, AssetId32, sts.option(() => VersionedMultiLocation), AccountId32, sts.bigint()]),
    }
})

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V2: V2MultiLocation,
        V3: V3MultiLocation,
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const MultisigVerifierEvent: sts.Type<MultisigVerifierEvent> = sts.closedEnum(() => {
    return  {
        NetworkInitialized: GenericNetworkId,
        PeerAdded: sts.bytes(),
        PeerRemoved: sts.bytes(),
        VerificationSuccessful: GenericNetworkId,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const LiquidityProxyEvent: sts.Type<LiquidityProxyEvent> = sts.closedEnum(() => {
    return  {
        ADARFeeWithdrawn: sts.tuple(() => [AssetId32, sts.bigint()]),
        BatchSwapExecuted: sts.tuple(() => [sts.bigint(), sts.bigint()]),
        Exchange: sts.tuple(() => [AccountId32, sts.number(), AssetId32, AssetId32, sts.bigint(), sts.bigint(), sts.bigint(), sts.array(() => LiquiditySourceId)]),
        LiquiditySourceDisabled: LiquiditySourceType,
        LiquiditySourceEnabled: LiquiditySourceType,
        XorlessTransfer: sts.tuple(() => [AssetId32, AccountId32, AccountId32, sts.bigint(), sts.option(() => BoundedVec)]),
    }
})

export const BoundedVec = sts.bytes()

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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const LeafProviderEvent: sts.Type<LeafProviderEvent> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const IrohaMigrationEvent: sts.Type<IrohaMigrationEvent> = sts.closedEnum(() => {
    return  {
        Migrated: sts.tuple(() => [sts.string(), AccountId32]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const HermesGovernancePlatformEvent: sts.Type<HermesGovernancePlatformEvent> = sts.closedEnum(() => {
    return  {
        Created: sts.tuple(() => [AccountId32, sts.bytes(), sts.bigint(), sts.bigint()]),
        CreatorFundsWithdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
        MinimumHermesForCreatingPollChanged: sts.bigint(),
        MinimumHermesForVotingChanged: sts.bigint(),
        Voted: sts.tuple(() => [AccountId32, H256, BoundedString]),
        VoterFundsWithdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

export const BoundedString = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const EthBridgeEvent: sts.Type<EthBridgeEvent> = sts.closedEnum(() => {
    return  {
        ApprovalsCollected: H256,
        CancellationFailed: H256,
        IncomingRequestFinalizationFailed: H256,
        IncomingRequestFinalized: H256,
        RegisterRequestFailed: sts.tuple(() => [H256, DispatchError]),
        RequestAborted: H256,
        RequestFinalizationFailed: H256,
        RequestRegistered: H256,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFailed: sts.unit(),
        ElectionFinalized: sts.enumStruct({
            compute: ElectionCompute,
            score: ElectionScore,
        }),
        PhaseTransitioned: sts.enumStruct({
            from: Phase,
            to: Phase,
            round: sts.number(),
        }),
        Rewarded: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SolutionStored: sts.enumStruct({
            compute: ElectionCompute,
            origin: sts.option(() => AccountId32),
            prevEjected: sts.boolean(),
        }),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        Emergency: sts.unit(),
        Off: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.tuple(() => [sts.boolean(), sts.number()]),
    }
})

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return  {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
        ExternalTabled: sts.unit(),
        NotPassed: sts.enumStruct({
            refIndex: sts.number(),
        }),
        Passed: sts.enumStruct({
            refIndex: sts.number(),
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const CeresLiquidityLockerEvent: sts.Type<CeresLiquidityLockerEvent> = sts.closedEnum(() => {
    return  {
        Locked: sts.tuple(() => [AccountId32, sts.bigint(), sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
 * Events for the ETH module.
 */
export const BridgeProxyEvent: sts.Type<BridgeProxyEvent> = sts.closedEnum(() => {
    return  {
        RefundFailed: H256,
        RequestStatusUpdate: sts.tuple(() => [H256, MessageStatus]),
    }
})

export const MessageStatus: sts.Type<MessageStatus> = sts.closedEnum(() => {
    return  {
        Approved: sts.unit(),
        Committed: sts.unit(),
        Done: sts.unit(),
        Failed: sts.unit(),
        InQueue: sts.unit(),
        Refunded: sts.unit(),
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

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const BridgeDataSignerEvent: sts.Type<BridgeDataSignerEvent> = sts.closedEnum(() => {
    return  {
        AddedPeer: sts.enumStruct({
            networkId: GenericNetworkId,
            peer: sts.bytes(),
        }),
        ApprovalAccepted: sts.enumStruct({
            networkId: GenericNetworkId,
            data: H256,
            signature: Signature,
        }),
        Approved: sts.enumStruct({
            networkId: GenericNetworkId,
            data: H256,
            signatures: sts.array(() => Signature),
        }),
        Initialized: sts.enumStruct({
            networkId: GenericNetworkId,
            peers: sts.array(() => sts.bytes()),
        }),
        RemovedPeer: sts.enumStruct({
            networkId: GenericNetworkId,
            peer: sts.bytes(),
        }),
    }
})

export const Signature = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const BandEvent: sts.Type<BandEvent> = sts.closedEnum(() => {
    return  {
        RelayersAdded: sts.array(() => AccountId32),
        RelayersRemoved: sts.array(() => AccountId32),
        SymbolsRelayed: sts.array(() => sts.tuple(() => [SymbolName, sts.bigint()])),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
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
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export const AssetsEvent: sts.Type<AssetsEvent> = sts.closedEnum(() => {
    return  {
        AssetRegistered: sts.tuple(() => [AssetId32, AccountId32]),
        AssetSetNonMintable: AssetId32,
        AssetUpdated: sts.tuple(() => [AssetId32, sts.option(() => AssetSymbol), sts.option(() => AssetName)]),
        Burn: sts.tuple(() => [AccountId32, AssetId32, sts.bigint()]),
        Mint: sts.tuple(() => [AccountId32, AccountId32, AssetId32, sts.bigint()]),
        Transfer: sts.tuple(() => [AccountId32, AccountId32, AssetId32, sts.bigint()]),
    }
})

export const AssetName = sts.bytes()

export const AssetSymbol = sts.bytes()

export const Type_186: sts.Type<Type_186> = sts.closedEnum(() => {
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
