// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, Text, U8aFixed, Vec, bool, u128, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { TAssetBalance } from '@polkadot/types/interfaces/assets';
import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { PropIndex, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { AuthorityList } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarIndex } from '@polkadot/types/interfaces/identity';
import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
import type { AccountId, AssetId, Balance, BalanceOf, BlockNumber, CallHash, H256, Hash, PhantomData } from '@polkadot/types/interfaces/runtime';
import type { TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { IdentificationTuple, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ElectionCompute, EraIndex } from '@polkadot/types/interfaces/staking';
import type { DispatchError, DispatchInfo, DispatchResult } from '@polkadot/types/interfaces/system';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { MultiCurrencyBalance } from 'sora/api-interfaces/balance';
import type { AmountOf, CurrencyId, CurrencyIdOf, DEXId, DispatchResultWithPostInfo, Fixed, LiquiditySourceType, RewardReason, TechAccountId, TechAssetId, TradingPair } from 'sora/api-interfaces/sora';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/events' {
  export interface AugmentedEvents<ApiType> {
    assets: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New asset has been registered. [Asset Id, Asset Owner Account]
       **/
      AssetRegistered: AugmentedEvent<ApiType, [AssetId, AccountId]>;
      /**
       * Asset is set as non-mintable. [Target Asset Id]
       **/
      AssetSetNonMintable: AugmentedEvent<ApiType, [AssetId]>;
      /**
       * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
       **/
      Burn: AugmentedEvent<ApiType, [AccountId, AssetId, TAssetBalance]>;
      /**
       * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
       **/
      Mint: AugmentedEvent<ApiType, [AccountId, AccountId, AssetId, TAssetBalance]>;
      /**
       * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, AssetId, TAssetBalance]>;
    };
    balances: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A balance was set by root. \[who, free, reserved\]
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId, Balance, Balance]>;
      /**
       * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss. \[account, balance\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account was created with some free balance. \[account, free_balance\]
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was reserved (moved from free to reserved). \[who, value\]
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       * \[from, to, balance, destination_status\]
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId, AccountId, Balance, BalanceStatus]>;
      /**
       * Transfer succeeded. \[from, to, value\]
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * Some balance was unreserved (moved from reserved to free). \[who, value\]
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    bridgeMultisig: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A new multisig created. [multisig]
       **/
      MultisigAccountCreated: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, U8aFixed]>;
      /**
       * A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, U8aFixed]>;
      /**
       * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, U8aFixed, DispatchResultWithPostInfo]>;
      /**
       * A new multisig operation has begun. [approving, multisig, call_hash]
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId, AccountId, U8aFixed]>;
    };
    council: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    currencies: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Update balance success. [currency_id, who, amount]
       **/
      BalanceUpdated: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AmountOf]>;
      /**
       * Deposit success. [currency_id, who, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
      /**
       * Currency transfer success. [currency_id, from, to, amount]
       **/
      Transferred: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, AccountId, BalanceOf]>;
      /**
       * Withdraw success. [currency_id, who, amount]
       **/
      Withdrawn: AugmentedEvent<ApiType, [CurrencyIdOf, AccountId, BalanceOf]>;
    };
    democracy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A proposal \[hash\] has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A referendum has been cancelled. \[ref_index\]
       **/
      Cancelled: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * A proposal has been enacted. \[ref_index, is_ok\]
       **/
      Executed: AugmentedEvent<ApiType, [ReferendumIndex, bool]>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum. \[ref_index\]
       **/
      NotPassed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal has been approved by referendum. \[ref_index\]
       **/
      Passed: AugmentedEvent<ApiType, [ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was invalid.
       * \[proposal_hash, ref_index\]
       **/
      PreimageInvalid: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal could not be executed because its preimage was missing.
       * \[proposal_hash, ref_index\]
       **/
      PreimageMissing: AugmentedEvent<ApiType, [Hash, ReferendumIndex]>;
      /**
       * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
       **/
      PreimageNoted: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A registered preimage was removed and the deposit collected by the reaper.
       * \[proposal_hash, provider, deposit, reaper\]
       **/
      PreimageReaped: AugmentedEvent<ApiType, [Hash, AccountId, Balance, AccountId]>;
      /**
       * A proposal preimage was removed and used (the deposit was returned).
       * \[proposal_hash, provider, deposit\]
       **/
      PreimageUsed: AugmentedEvent<ApiType, [Hash, AccountId, Balance]>;
      /**
       * A motion has been proposed by a public account. \[proposal_index, deposit\]
       **/
      Proposed: AugmentedEvent<ApiType, [PropIndex, Balance]>;
      /**
       * A referendum has begun. \[ref_index, threshold\]
       **/
      Started: AugmentedEvent<ApiType, [ReferendumIndex, VoteThreshold]>;
      /**
       * A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
       **/
      Tabled: AugmentedEvent<ApiType, [PropIndex, Balance, Vec<AccountId>]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An \[account\] has been unlocked successfully.
       **/
      Unlocked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * An external proposal has been vetoed. \[who, proposal_hash, until\]
       **/
      Vetoed: AugmentedEvent<ApiType, [AccountId, Hash, BlockNumber]>;
    };
    dexapi: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Exchange of tokens has been performed
       * [Sender Account, Receiver Account, DEX Id, LiquiditySourceType, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
       **/
      DirectExchange: AugmentedEvent<ApiType, [AccountId, AccountId, DEXId, LiquiditySourceType, AssetId, AssetId, Balance, Balance, Balance]>;
    };
    electionsPhragmen: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A \[member\] has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new term with \[new_members\]. This indicates that enough candidates existed to run the
       * election, not that enough have has been elected. The inner value must be examined for
       * this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond slashed and
       * none were elected, whilst `EmptyTerm` means that no candidates existed to begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [Vec<ITuple<[AccountId, Balance]>>]>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    ethBridge: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The request's approvals have been collected. [Encoded Outgoing Request, Signatures]
       **/
      ApprovalsCollected: AugmentedEvent<ApiType, [H256]>;
      /**
       * The request wasn't finalized nor cancelled. [Request Hash]
       **/
      CancellationFailed: AugmentedEvent<ApiType, [H256]>;
      /**
       * The incoming request finalization has been failed. [Request Hash]
       **/
      IncomingRequestFinalizationFailed: AugmentedEvent<ApiType, [H256]>;
      /**
       * The incoming request has been finalized. [Request Hash]
       **/
      IncomingRequestFinalized: AugmentedEvent<ApiType, [H256]>;
      /**
       * The request was aborted and cancelled. [Request Hash]
       **/
      RequestAborted: AugmentedEvent<ApiType, [H256]>;
      /**
       * The request finalization has been failed. [Request Hash]
       **/
      RequestFinalizationFailed: AugmentedEvent<ApiType, [H256]>;
      /**
       * New request has been registered. [Request Hash]
       **/
      RequestRegistered: AugmentedEvent<ApiType, [H256]>;
    };
    faucet: {
      [key: string]: AugmentedEvent<ApiType>;
      Transferred: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    grandpa: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New authority set has been applied. \[authority_set\]
       **/
      NewAuthorities: AugmentedEvent<ApiType, [AuthorityList]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
    };
    identity: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A name was cleared, and the given balance returned. \[who, deposit\]
       **/
      IdentityCleared: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was removed and the given balance slashed. \[who, deposit\]
       **/
      IdentityKilled: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A name was set or reset (which will remove all judgements). \[who\]
       **/
      IdentitySet: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A judgement was given by a registrar. \[target, registrar_index\]
       **/
      JudgementGiven: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement was asked from a registrar. \[who, registrar_index\]
       **/
      JudgementRequested: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A judgement request was retracted. \[who, registrar_index\]
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [AccountId, RegistrarIndex]>;
      /**
       * A registrar was added. \[registrar_index\]
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [RegistrarIndex]>;
      /**
       * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       * \[sub, main, deposit\]
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account. \[sub, main, deposit\]
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [AccountId, AccountId, Balance]>;
    };
    imOnline: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId` \[authority_id\]
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [AuthorityId]>;
      /**
       * At the end of the session, at least one validator was found to be \[offline\].
       **/
      SomeOffline: AugmentedEvent<ApiType, [Vec<IdentificationTuple>]>;
    };
    irohaMigration: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Migrated. [source, target]
       **/
      Migrated: AugmentedEvent<ApiType, [Text, AccountId]>;
    };
    liquidityProxy: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Exchange of tokens has been performed
       * [Caller Account, DEX Id, Input Asset Id, Output Asset Id, Input Amount, Output Amount, Fee Amount]
       **/
      Exchange: AugmentedEvent<ApiType, [AccountId, DEXId, AssetId, AssetId, Balance, Balance, Balance]>;
    };
    multicollateralBondingCurvePool: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
       **/
      OptionalRewardMultiplierUpdated: AugmentedEvent<ApiType, [AssetId, Option<Fixed>]>;
      /**
       * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
       **/
      PoolInitialized: AugmentedEvent<ApiType, [DEXId, AssetId]>;
      /**
       * Reference Asset has been changed for pool. [New Reference Asset Id]
       **/
      ReferenceAssetChanged: AugmentedEvent<ApiType, [AssetId]>;
    };
    multisig: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A multisig operation has been approved by someone.
       * \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigApproval: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash]>;
      /**
       * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
      /**
       * A new multisig operation has begun. \[approving, multisig, call_hash\]
       **/
      NewMultisig: AugmentedEvent<ApiType, [AccountId, AccountId, CallHash]>;
    };
    offences: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes. last
       * element indicates of the offence was applied (true) or queued (false)
       * \[kind, timeslot, applied\].
       **/
      Offence: AugmentedEvent<ApiType, [Kind, OpaqueTimeSlot, bool]>;
    };
    permissions: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Permission was assigned to the account in the scope. [permission, who]
       **/
      PermissionAssigned: AugmentedEvent<ApiType, [u32, AccountId]>;
      /**
       * Permission was created with an owner. [permission, who]
       **/
      PermissionCreated: AugmentedEvent<ApiType, [u32, AccountId]>;
      /**
       * Permission was granted to a holder. [permission, who]
       **/
      PermissionGranted: AugmentedEvent<ApiType, [u32, AccountId]>;
      /**
       * Permission was transfered to a new owner. [permission, who]
       **/
      PermissionTransfered: AugmentedEvent<ApiType, [u32, AccountId]>;
    };
    poolXyk: {
      [key: string]: AugmentedEvent<ApiType>;
      PoolIsInitialized: AugmentedEvent<ApiType, [AccountId]>;
    };
    priceTools: {
      [key: string]: AugmentedEvent<ApiType>;
    };
    pswapDistribution: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Burn rate updated.
       * [Current Burn Rate]
       **/
      BurnRateChanged: AugmentedEvent<ApiType, [Fixed]>;
      /**
       * Fees successfully exchanged for appropriate amount of pool tokens.
       * [DEX Id, Fees Account Id, Fees Asset Id, Fees Spent Amount, Incentive Asset Id, Incentive Received Amount]
       **/
      FeesExchanged: AugmentedEvent<ApiType, [DEXId, AccountId, AssetId, Balance, AssetId, Balance]>;
      /**
       * Problem occurred that resulted in fees exchange not done.
       * [DEX Id, Fees Account Id, Fees Asset Id, Available Fees Amount, Incentive Asset Id]
       **/
      FeesExchangeFailed: AugmentedEvent<ApiType, [DEXId, AccountId, AssetId, Balance, AssetId]>;
      /**
       * Incentives successfully sent out to shareholders.
       * [DEX Id, Fees Account Id, Incentive Asset Id, Incentive Total Distributed Amount, Number of shareholders]
       **/
      IncentiveDistributed: AugmentedEvent<ApiType, [DEXId, AccountId, AssetId, Balance, u128]>;
      /**
       * Problem occurred that resulted in incentive distribution not done.
       * [DEX Id, Fees Account Id, Incentive Asset Id, Available Incentive Amount]
       **/
      IncentiveDistributionFailed: AugmentedEvent<ApiType, [DEXId, AccountId, AssetId, Balance]>;
      /**
       * This is needed for other pallet that will use this variables, for example this is
       * farming pallet.
       * [DEX Id, Incentive Asset Id, Total exchanged incentives (Incentives burned after exchange),
       * Incentives burned (Incentives that is not revived (to burn)]).
       **/
      IncentivesBurnedAfterExchange: AugmentedEvent<ApiType, [DEXId, AssetId, Balance, Balance]>;
      /**
       * Fees Account contains zero incentive tokens, thus distribution is dismissed.
       * [DEX Id, Fees Account Id]
       **/
      NothingToDistribute: AugmentedEvent<ApiType, [DEXId, AccountId]>;
      /**
       * Fees Account contains zero base tokens, thus exchange is dismissed.
       * [DEX Id, Fees Account Id]
       **/
      NothingToExchange: AugmentedEvent<ApiType, [DEXId, AccountId]>;
    };
    rewards: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The account has claimed their rewards. [account]
       **/
      Claimed: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Storage migration to version 1.2.0 completed
       **/
      MigrationCompleted: AugmentedEvent<ApiType, []>;
    };
    scheduler: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Canceled some task. \[when, index\]
       **/
      Canceled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
      /**
       * Dispatched some task. \[task, id, result\]
       **/
      Dispatched: AugmentedEvent<ApiType, [TaskAddress, Option<Bytes>, DispatchResult]>;
      /**
       * Scheduled some task. \[when, index\]
       **/
      Scheduled: AugmentedEvent<ApiType, [BlockNumber, u32]>;
    };
    session: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * New session has happened. Note that the argument is the \[session_index\], not the block
       * number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [SessionIndex]>;
    };
    staking: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       * \[era_index, validator_payout, remainder\]
       **/
      EraPayout: AugmentedEvent<ApiType, [EraIndex, MultiCurrencyBalance]>;
      /**
       * A nominator has been kicked from a validator. \[nominator, stash\]
       **/
      Kicked: AugmentedEvent<ApiType, [AccountId, AccountId]>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed. \[session_index\]
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [SessionIndex]>;
      /**
       * The staker has been rewarded by this amount. \[stash, amount\]
       **/
      Reward: AugmentedEvent<ApiType, [AccountId, MultiCurrencyBalance]>;
      /**
       * One validator (and its nominators) has been slashed by the given amount.
       * \[validator, amount\]
       **/
      Slash: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * A new solution for the upcoming election has been stored. \[compute\]
       **/
      SolutionStored: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * A new set of stakers was elected with the given \[compute\].
       **/
      StakingElection: AugmentedEvent<ApiType, [ElectionCompute]>;
      /**
       * An account has unbonded this amount. \[stash, amount\]
       **/
      Unbonded: AugmentedEvent<ApiType, [AccountId, Balance]>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue. \[stash, amount\]
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    sudo: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * The \[sudoer\] just switched identity; the old key is supplied.
       **/
      KeyChanged: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [DispatchResult]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [DispatchResult]>;
    };
    system: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed. \[error, info\]
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [DispatchError, DispatchInfo]>;
      /**
       * An extrinsic completed successfully. \[info\]
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [DispatchInfo]>;
      /**
       * An \[account\] was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * A new \[account\] was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId]>;
    };
    technical: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
       * For full kind of accounts like in Minted.
       **/
      Burned: AugmentedEvent<ApiType, [TechAssetId, TechAccountId, Balance, Balance]>;
      /**
       * Some assets were transferred in. [asset, from, to, amount].
       * TechAccountId is only pure TechAccountId.
       **/
      InputTransferred: AugmentedEvent<ApiType, [TechAssetId, AccountId, TechAccountId, Balance]>;
      /**
       * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
       * This is not only for pure TechAccountId.
       * TechAccountId can be just wrapped AccountId.
       **/
      Minted: AugmentedEvent<ApiType, [TechAssetId, TechAccountId, Balance, Balance]>;
      /**
       * Some assets were transferred out. [asset, from, to, amount].
       * TechAccountId is only pure TechAccountId.
       **/
      OutputTransferred: AugmentedEvent<ApiType, [TechAssetId, TechAccountId, AccountId, Balance]>;
      /**
       * Swap operaction is finalised [initiator, finaliser].
       * TechAccountId is only pure TechAccountId.
       **/
      SwapSuccess: AugmentedEvent<ApiType, [AccountId]>;
    };
    technicalCommittee: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * A motion was approved by the required threshold.
       * \[proposal_hash\]
       **/
      Approved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       * \[proposal_hash, yes, no\]
       **/
      Closed: AugmentedEvent<ApiType, [Hash, MemberCount, MemberCount]>;
      /**
       * A motion was not approved by the required threshold.
       * \[proposal_hash\]
       **/
      Disapproved: AugmentedEvent<ApiType, [Hash]>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      Executed: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       * \[proposal_hash, result\]
       **/
      MemberExecuted: AugmentedEvent<ApiType, [Hash, DispatchResult]>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       * \[account, proposal_index, proposal_hash, threshold\]
       **/
      Proposed: AugmentedEvent<ApiType, [AccountId, ProposalIndex, Hash, MemberCount]>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       * \[account, proposal_hash, voted, yes, no\]
       **/
      Voted: AugmentedEvent<ApiType, [AccountId, Hash, bool, MemberCount, MemberCount]>;
    };
    technicalMembership: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, [PhantomData]>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
    };
    tokens: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss. \[account,
       * currency_id, amount\]
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId, CurrencyId, Balance]>;
      /**
       * Token transfer success. \[currency_id, from, to, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [CurrencyId, AccountId, AccountId, Balance]>;
    };
    tradingPair: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
       **/
      TradingPairStored: AugmentedEvent<ApiType, [DEXId, TradingPair]>;
    };
    utility: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error. \[index, error\]
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, DispatchError]>;
    };
    vestedRewards: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Attempted to claim reward, but actual claimed amount is less than expected. [reason for reward]
       **/
      ActualDoesntMatchAvailable: AugmentedEvent<ApiType, [RewardReason]>;
      /**
       * Account was chosen as eligible for market maker rewards, however calculated reward turned into 0. [account]
       **/
      AddingZeroMarketMakerReward: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Saving reward for account has failed in a distribution series. [account]
       **/
      FailedToSaveCalculatedReward: AugmentedEvent<ApiType, [AccountId]>;
      /**
       * Couldn't find any account with enough transactions to count market maker rewards.
       **/
      NoEligibleMarketMakers: AugmentedEvent<ApiType, []>;
      /**
       * Rewards vested, limits were raised. [vested amount]
       **/
      RewardsVested: AugmentedEvent<ApiType, [Balance]>;
    };
    xorFee: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
       **/
      FeeWithdrawn: AugmentedEvent<ApiType, [AccountId, Balance]>;
    };
    xstPool: {
      [key: string]: AugmentedEvent<ApiType>;
      /**
       * Pool is initialized for pair. [DEX Id, Synthetic Asset Id]
       **/
      PoolInitialized: AugmentedEvent<ApiType, [DEXId, AssetId]>;
      /**
       * Reference Asset has been changed for pool. [New Reference Asset Id]
       **/
      ReferenceAssetChanged: AugmentedEvent<ApiType, [AssetId]>;
    };
  }

  export interface DecoratedEvents<ApiType extends ApiTypes> extends AugmentedEvents<ApiType> {
    [key: string]: ModuleEvents<ApiType>;
  }
}
