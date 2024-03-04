import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface EventRecord {
    phase: Phase
    event: Type_420
    topics: Hash[]
}

export type Hash = Bytes

export type Type_420 = Type_420_Assets | Type_420_Balances | Type_420_BridgeMultisig | Type_420_Council | Type_420_Currencies | Type_420_DEXAPI | Type_420_Democracy | Type_420_ElectionsPhragmen | Type_420_EthBridge | Type_420_Grandpa | Type_420_Identity | Type_420_ImOnline | Type_420_IrohaMigration | Type_420_LiquidityProxy | Type_420_MulticollateralBondingCurvePool | Type_420_Multisig | Type_420_Offences | Type_420_Permissions | Type_420_PoolXYK | Type_420_PswapDistribution | Type_420_Rewards | Type_420_Scheduler | Type_420_Session | Type_420_Staking | Type_420_System | Type_420_Technical | Type_420_TechnicalCommittee | Type_420_TechnicalMembership | Type_420_Tokens | Type_420_TradingPair | Type_420_Utility | Type_420_VestedRewards | Type_420_XorFee

export interface Type_420_Assets {
    __kind: 'Assets'
    value: AssetsEvent
}

export interface Type_420_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Type_420_BridgeMultisig {
    __kind: 'BridgeMultisig'
    value: BridgeMultisigEvent
}

export interface Type_420_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Type_420_Currencies {
    __kind: 'Currencies'
    value: CurrenciesEvent
}

export interface Type_420_DEXAPI {
    __kind: 'DEXAPI'
    value: DEXAPIEvent
}

export interface Type_420_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Type_420_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenEvent
}

export interface Type_420_EthBridge {
    __kind: 'EthBridge'
    value: EthBridgeEvent
}

export interface Type_420_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Type_420_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Type_420_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Type_420_IrohaMigration {
    __kind: 'IrohaMigration'
    value: IrohaMigrationEvent
}

export interface Type_420_LiquidityProxy {
    __kind: 'LiquidityProxy'
    value: LiquidityProxyEvent
}

export interface Type_420_MulticollateralBondingCurvePool {
    __kind: 'MulticollateralBondingCurvePool'
    value: MulticollateralBondingCurvePoolEvent
}

export interface Type_420_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Type_420_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Type_420_Permissions {
    __kind: 'Permissions'
    value: PermissionsEvent
}

export interface Type_420_PoolXYK {
    __kind: 'PoolXYK'
    value: PoolXYKEvent
}

export interface Type_420_PswapDistribution {
    __kind: 'PswapDistribution'
    value: PswapDistributionEvent
}

export interface Type_420_Rewards {
    __kind: 'Rewards'
    value: RewardsEvent
}

export interface Type_420_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Type_420_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Type_420_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Type_420_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Type_420_Technical {
    __kind: 'Technical'
    value: TechnicalEvent
}

export interface Type_420_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Type_420_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Type_420_Tokens {
    __kind: 'Tokens'
    value: TokensEvent
}

export interface Type_420_TradingPair {
    __kind: 'TradingPair'
    value: TradingPairEvent
}

export interface Type_420_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Type_420_VestedRewards {
    __kind: 'VestedRewards'
    value: VestedRewardsEvent
}

export interface Type_420_XorFee {
    __kind: 'XorFee'
    value: XorFeeEvent
}

export type XorFeeEvent = XorFeeEvent_FeeWithdrawn

/**
 *  Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
 */
export interface XorFeeEvent_FeeWithdrawn {
    __kind: 'FeeWithdrawn'
    value: [AccountId, Balance]
}

export type Balance = bigint

export type AccountId = Bytes

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

export type AssetId = Bytes

export type DEXId = number

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

export type MemberCount = number

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

export type Weight = bigint

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

export type SessionIndex = number

export type MultiCurrencyBalance = bigint

export type EraIndex = number

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

export type BlockNumber = number

export type RewardsEvent = RewardsEvent_Claimed

/**
 *  The account has claimed their rewards. [account]
 */
export interface RewardsEvent_Claimed {
    __kind: 'Claimed'
    value: AccountId
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

export type Fixed = bigint

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

export interface Timepoint {
    height: BlockNumber
    index: number
}

export type MulticollateralBondingCurvePoolEvent = MulticollateralBondingCurvePoolEvent_OptionalRewardMultiplierUpdated | MulticollateralBondingCurvePoolEvent_PoolInitialized | MulticollateralBondingCurvePoolEvent_ReferenceAssetChanged

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

export type String = Bytes

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

export type AuthorityId = Bytes

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

export type RegistrarIndex = number

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

export type H256 = Bytes

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

export type ReferendumIndex = number

export type DEXAPIEvent = DEXAPIEvent_DirectExchange

/**
 *  Exchange of tokens has been performed
 *  [Sender Account, Receiver Account, DEX Id, LiquiditySourceType, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
 */
export interface DEXAPIEvent_DirectExchange {
    __kind: 'DirectExchange'
    value: [AccountId, AccountId, DEXId, LiquiditySourceType, AssetId, AssetId, Balance, Balance, Balance]
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

export type BalanceOf = bigint

export type AmountOf = bigint

export type CurrencyIdOf = Bytes

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

export type TAssetBalance = bigint

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
        event: Type_420,
        topics: sts.array(() => Hash),
    }
})

export const Hash = sts.bytes()

export const Type_420: sts.Type<Type_420> = sts.closedEnum(() => {
    return  {
        Assets: AssetsEvent,
        Balances: BalancesEvent,
        BridgeMultisig: BridgeMultisigEvent,
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
        XorFee: XorFeeEvent,
    }
})

export const XorFeeEvent: sts.Type<XorFeeEvent> = sts.closedEnum(() => {
    return  {
        FeeWithdrawn: sts.tuple(() => [AccountId, Balance]),
    }
})

export const Balance = sts.bigint()

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

export const AssetId = sts.bytes()

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

export const MemberCount = sts.number()

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

export const BlockNumber = sts.number()

export const RewardsEvent: sts.Type<RewardsEvent> = sts.closedEnum(() => {
    return  {
        Claimed: AccountId,
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

export const AccountId = sts.bytes()

export const DEXId = sts.number()
