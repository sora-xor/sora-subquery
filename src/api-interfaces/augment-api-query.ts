// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeSet, Bytes, Data, Option, Text, U8aFixed, Vec, bool, u32, u64, u8 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { BabeAuthorityWeight, MaybeRandomness, NextConfigDescriptor, Randomness } from '@polkadot/types/interfaces/babe';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { EthereumAddress } from '@polkadot/types/interfaces/claims';
import type { Votes } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { PreimageStatus, PropIndex, Proposal, ReferendumIndex, ReferendumInfo, Voting } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { RegistrarInfo, Registration } from '@polkadot/types/interfaces/identity';
import type { AuthIndex } from '@polkadot/types/interfaces/imOnline';
import type { DeferredOffenceOf, Kind, OffenceDetails, OpaqueTimeSlot, ReportIdOf } from '@polkadot/types/interfaces/offences';
import type { AccountId, Address, AssetId, Balance, BalanceOf, BlockNumber, H256, Hash, KeyTypeId, Moment, OpaqueCall, Perbill, Releases, Slot, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { ActiveEraInfo, ElectionResult, ElectionScore, ElectionStatus, EraIndex, EraRewardPoints, Exposure, Forcing, Nominations, RewardDestination, SeatHolder, SlashingSpans, SpanIndex, SpanRecord, StakingLedger, UnappliedSlash, ValidatorPrefs, Voter } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig, Timepoint } from '@polkadot/types/interfaces/utility';
import type { AssetRecord } from 'sora/api-interfaces/assets';
import type { AssetKind, BridgeNetworkId, BridgeStatus, EthPeersSync, OffchainRequest, RequestStatus, SignatureParams } from 'sora/api-interfaces/ethBridge';
import type { AssetName, AssetSymbol, BalancePrecision, CurrencyId, DEXId, DEXInfo, DistributionAccounts, Duration, Fixed, HolderId, LiquiditySourceType, MarketMakerInfo, Mode, MultiCurrencyBalanceOf, MultisigAccount, OwnerId, PendingMultisigAccount, PermissionId, RewardInfo, Scope, StorageVersion, TechAccountId, TradingPair } from 'sora/api-interfaces/sora';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    assets: {
      /**
       * Asset Id -> (Symbol, Precision, Is Mintable)
       **/
      assetInfos: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<ITuple<[AssetSymbol, AssetName, BalancePrecision, bool]>>, [AssetId]>;
      /**
       * Asset Id -> Owner Account Id
       **/
      assetOwners: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<AccountId>, [AssetId]>;
      /**
       * Asset Id -> AssetRecord<T>
       **/
      assetRecordAssetId: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Option<AssetRecord>>, [AssetId]>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>, []>;
    };
    babe: {
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []>;
      /**
       * Temporary value (cleared at block finalization) that includes the VRF output generated
       * at this block. This field should always be populated during block processing unless
       * secondary plain slots are enabled (which don't contain a VRF output).
       **/
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<MaybeRandomness>, []>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<ApiType, () => Observable<Option<MaybeRandomness>>, []>;
      /**
       * How late the current block is compared to its parent.
       * 
       * This entry is populated as part of block execution and is cleaned up
       * on block finalization. Querying this storage entry outside of block
       * execution context should always yield zero.
       **/
      lateness: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * Next epoch authorities.
       **/
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AuthorityId, BabeAuthorityWeight]>>>, []>;
      /**
       * Next epoch configuration, if changed.
       **/
      nextEpochConfig: AugmentedQuery<ApiType, () => Observable<Option<NextConfigDescriptor>>, []>;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []>;
      /**
       * The epoch randomness for the *current* epoch.
       * 
       * # Security
       * 
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<Randomness>, []>;
      /**
       * Randomness under construction.
       * 
       * We make a tradeoff between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       * 
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
       **/
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Randomness>>, [u32]>;
    };
    balances: {
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>, [AccountId]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
    };
    bridgeMultisig: {
      /**
       * Multisignature accounts.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<MultisigAccount>>, [AccountId]>;
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[OpaqueCall, AccountId, BalanceOf]>>>, [U8aFixed]>;
      dispatchedCalls: AugmentedQueryDoubleMap<ApiType, (key1: U8aFixed | string | Uint8Array, key2: Timepoint | { height?: any; index?: any } | string | Uint8Array) => Observable<ITuple<[]>>, [U8aFixed, Timepoint]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: U8aFixed | string | Uint8Array) => Observable<Option<Multisig>>, [AccountId, U8aFixed]>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>, [Hash]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<bool>, [Hash]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: PropIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId>, BalanceOf]>>>, [PropIndex]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Accounts for which there are locks in action which may be removed at some point in the
       * future. The value is the block number at which the lock expires and may be removed.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>, [AccountId]>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<PreimageStatus>>, [Hash]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<PropIndex>, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Option<ReferendumInfo>>, [ReferendumIndex]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<Releases>>, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voting>, [AccountId]>;
    };
    dexapi: {
      enabledSourceTypes: AugmentedQuery<ApiType, () => Observable<Vec<LiquiditySourceType>>, []>;
    };
    dexManager: {
      dexInfos: AugmentedQuery<ApiType, (arg: DEXId | AnyNumber | Uint8Array) => Observable<Option<DEXInfo>>, [DEXId]>;
    };
    electionsPhragmen: {
      /**
       * The present candidate list. A current member or runner-up can never enter this vector
       * and is always implicitly assumed to be a candidate.
       * 
       * Second element is the deposit.
       * 
       * Invariant: Always sorted based on account id.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>, []>;
      /**
       * The total number of vote rounds that have happened, excluding the upcoming one.
       **/
      electionRounds: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The current elected members.
       * 
       * Invariant: Always sorted based on account id.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []>;
      /**
       * The current reserved runners-up.
       * 
       * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
       * last (i.e. _best_) runner-up will be replaced.
       **/
      runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<SeatHolder>>, []>;
      /**
       * Votes and locked stake of a particular voter.
       * 
       * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
       **/
      voting: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voter>, [AccountId]>;
    };
    ethBridge: {
      /**
       * Requests made by an account.
       **/
      accountRequests: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<ITuple<[BridgeNetworkId, H256]>>>, [AccountId]>;
      /**
       * Thischain authority account.
       **/
      authorityAccount: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
      /**
       * Multi-signature bridge peers' account. `None` if there is no account and network with the given ID.
       **/
      bridgeAccount: AugmentedQuery<ApiType, (arg: BridgeNetworkId | AnyNumber | Uint8Array) => Observable<Option<AccountId>>, [BridgeNetworkId]>;
      /**
       * Smart-contract address on Sidechain.
       **/
      bridgeContractAddress: AugmentedQuery<ApiType, (arg: BridgeNetworkId | AnyNumber | Uint8Array) => Observable<Address>, [BridgeNetworkId]>;
      /**
       * Bridge status.
       **/
      bridgeStatuses: AugmentedQuery<ApiType, (arg: BridgeNetworkId | AnyNumber | Uint8Array) => Observable<Option<BridgeStatus>>, [BridgeNetworkId]>;
      /**
       * Used to identify an incoming request by the corresponding load request.
       **/
      loadToIncomingRequestHash: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: H256 | string | Uint8Array) => Observable<H256>, [BridgeNetworkId, H256]>;
      /**
       * Next Network ID counter.
       **/
      nextNetworkId: AugmentedQuery<ApiType, () => Observable<BridgeNetworkId>, []>;
      /**
       * Should be used in conjunction with `on_runtime_upgrade` to ensure an upgrade is executed
       * once, even if the code is not removed in time.
       **/
      palletStorageVersion: AugmentedQuery<ApiType, () => Observable<StorageVersion>, []>;
      /**
       * Peer account ID on Thischain.
       **/
      peerAccountId: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: Address | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => Observable<AccountId>, [BridgeNetworkId, Address]>;
      /**
       * Peer address on Sidechain.
       **/
      peerAddress: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Address>, [BridgeNetworkId, AccountId]>;
      /**
       * Network peers set.
       **/
      peers: AugmentedQuery<ApiType, (arg: BridgeNetworkId | AnyNumber | Uint8Array) => Observable<BTreeSet<AccountId>>, [BridgeNetworkId]>;
      /**
       * Used for compatibility with XOR and VAL contracts.
       **/
      pendingEthPeersSync: AugmentedQuery<ApiType, () => Observable<EthPeersSync>, []>;
      /**
       * Network pending (being added/removed) peer.
       **/
      pendingPeer: AugmentedQuery<ApiType, (arg: BridgeNetworkId | AnyNumber | Uint8Array) => Observable<Option<AccountId>>, [BridgeNetworkId]>;
      /**
       * Registered asset kind.
       **/
      registeredAsset: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<Option<AssetKind>>, [BridgeNetworkId, AssetId]>;
      /**
       * Registered token `AssetId` on Thischain.
       **/
      registeredSidechainAsset: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: Address | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => Observable<Option<AssetId>>, [BridgeNetworkId, Address]>;
      /**
       * Registered asset address on Sidechain.
       **/
      registeredSidechainToken: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<Option<Address>>, [BridgeNetworkId, AssetId]>;
      /**
       * Outgoing requests approvals.
       **/
      requestApprovals: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: H256 | string | Uint8Array) => Observable<BTreeSet<SignatureParams>>, [BridgeNetworkId, H256]>;
      /**
       * Registered requests.
       **/
      requests: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: H256 | string | Uint8Array) => Observable<Option<OffchainRequest>>, [BridgeNetworkId, H256]>;
      /**
       * Registered requests queue handled by off-chain workers.
       **/
      requestsQueue: AugmentedQuery<ApiType, (arg: BridgeNetworkId | AnyNumber | Uint8Array) => Observable<Vec<H256>>, [BridgeNetworkId]>;
      /**
       * Requests statuses.
       **/
      requestStatuses: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: H256 | string | Uint8Array) => Observable<Option<RequestStatus>>, [BridgeNetworkId, H256]>;
      /**
       * Requests submission height map (on substrate).
       **/
      requestSubmissionHeight: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: H256 | string | Uint8Array) => Observable<BlockNumber>, [BridgeNetworkId, H256]>;
      /**
       * Precision (decimals) of a registered sidechain asset. Should be the same as in the ERC-20
       * contract.
       **/
      sidechainAssetPrecision: AugmentedQueryDoubleMap<ApiType, (key1: BridgeNetworkId | AnyNumber | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<BalancePrecision>, [BridgeNetworkId, AssetId]>;
      /**
       * Sora VAL master contract address.
       **/
      valMasterContractAddress: AugmentedQuery<ApiType, () => Observable<Address>, []>;
      /**
       * Sora XOR master contract address.
       **/
      xorMasterContractAddress: AugmentedQuery<ApiType, () => Observable<Address>, []>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [SetId]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>, []>;
    };
    identity: {
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Registration>>, [AccountId]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<RegistrarInfo>>>, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[BalanceOf, Vec<AccountId>]>>, [AccountId]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[AccountId, Data]>>>, [AccountId]>;
    };
    imOnline: {
      /**
       * For each session index, we keep a mapping of `ValidatorId<T>` to the
       * number of blocks authored by the given authority.
       **/
      authoredBlocks: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: ValidatorId | string | Uint8Array) => Observable<u32>, [SessionIndex, ValidatorId]>;
      /**
       * The block number after which it's ok to send heartbeats in current session.
       * 
       * At the beginning of each session we set this to a value that should
       * fall roughly in the middle of the session duration.
       * The idea is to first wait for the validators to produce a block
       * in the current session, so that the heartbeat later on will not be necessary.
       **/
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * The current set of keys that may issue a heartbeat.
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []>;
      /**
       * For each session index, we keep a mapping of `AuthIndex` to
       * `offchain::OpaqueNetworkState`.
       **/
      receivedHeartbeats: AugmentedQueryDoubleMap<ApiType, (key1: SessionIndex | AnyNumber | Uint8Array, key2: AuthIndex | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [SessionIndex, AuthIndex]>;
    };
    irohaMigration: {
      account: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
      balances: AugmentedQuery<ApiType, (arg: Text | string) => Observable<Option<Balance>>, [Text]>;
      migratedAccounts: AugmentedQuery<ApiType, (arg: Text | string) => Observable<Option<AccountId>>, [Text]>;
      pendingMultiSigAccounts: AugmentedQuery<ApiType, (arg: Text | string) => Observable<PendingMultisigAccount>, [Text]>;
      pendingReferrals: AugmentedQuery<ApiType, (arg: Text | string) => Observable<Vec<AccountId>>, [Text]>;
      publicKeys: AugmentedQuery<ApiType, (arg: Text | string) => Observable<Vec<ITuple<[bool, Text]>>>, [Text]>;
      quorums: AugmentedQuery<ApiType, (arg: Text | string) => Observable<u8>, [Text]>;
      referrers: AugmentedQuery<ApiType, (arg: Text | string) => Observable<Option<Text>>, [Text]>;
    };
    multicollateralBondingCurvePool: {
      /**
       * Coefficient which determines the fraction of input collateral token to be exchanged to XOR and
       * be distributed to predefined accounts. Relevant for the Buy function (when a user buys new XOR).
       **/
      alwaysDistributeCoefficient: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Reward multipliers for special assets. Asset Id => Reward Multiplier
       **/
      assetsWithOptionalRewardMultiplier: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Option<Fixed>>, [AssetId]>;
      /**
       * Base fee in XOR which is deducted on all trades, currently it's burned: 0.3%.
       **/
      baseFee: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Current reserves balance for collateral tokens, used for client usability.
       **/
      collateralReserves: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Balance>, [AssetId]>;
      /**
       * Accounts that receive 20% buy/sell margin according predefined proportions.
       **/
      distributionAccountsEntry: AugmentedQuery<ApiType, () => Observable<DistributionAccounts>, []>;
      /**
       * Collateral Assets allowed to be sold on bonding curve.
       **/
      enabledTargets: AugmentedQuery<ApiType, () => Observable<BTreeSet<AssetId>>, []>;
      freeReservesAccountId: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
      /**
       * Account which stores actual PSWAP intended for rewards.
       **/
      incentivesAccountId: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
      /**
       * Number of reserve currencies selling which user will get rewards, namely all registered collaterals except PSWAP and VAL.
       **/
      incentivisedCurrenciesNum: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Buy price starting constant. This is the price users pay for new XOR.
       **/
      initialPrice: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Amount of PSWAP initially stored in account dedicated for TBC rewards. Actual account balance will deplete over time,
       * however this constant is not modified.
       **/
      initialPswapRewardsSupply: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
      pendingFreeReserves: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AssetId, Balance]>>>, []>;
      priceChangeRate: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Cofficients in buy price function.
       **/
      priceChangeStep: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Asset that is used to compare collateral assets by value, e.g., DAI.
       **/
      referenceAssetId: AugmentedQuery<ApiType, () => Observable<AssetId>, []>;
      /**
       * Technical account used to store collateral tokens.
       **/
      reservesAcc: AugmentedQuery<ApiType, () => Observable<TechAccountId>, []>;
      /**
       * Registry to store information about rewards owned by users in PSWAP. (claim_limit, available_rewards)
       **/
      rewards: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Balance, Balance]>>, [AccountId]>;
      /**
       * Sets the sell function as a fraction of the buy function, so there is margin between the two functions.
       **/
      sellPriceCoefficient: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Total amount of PSWAP owned by accounts.
       **/
      totalRewards: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
    };
    multisig: {
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[OpaqueCall, AccountId, BalanceOf]>>>, [U8aFixed]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: U8aFixed | string | Uint8Array) => Observable<Option<Multisig>>, [AccountId, U8aFixed]>;
    };
    offences: {
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQueryDoubleMap<ApiType, (key1: Kind | string | Uint8Array, key2: OpaqueTimeSlot | string | Uint8Array) => Observable<Vec<ReportIdOf>>, [Kind, OpaqueTimeSlot]>;
      /**
       * Deferred reports that have been rejected by the offence handler and need to be submitted
       * at a later time.
       **/
      deferredOffences: AugmentedQuery<ApiType, () => Observable<Vec<DeferredOffenceOf>>, []>;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<ApiType, (arg: ReportIdOf | string | Uint8Array) => Observable<Option<OffenceDetails>>, [ReportIdOf]>;
      /**
       * Enumerates all reports of a kind along with the time they happened.
       * 
       * All reports are sorted by the time of offence.
       * 
       * Note that the actual type of this mapping is `Vec<u8>`, this is because values of
       * different types are not supported at the moment so we are doing the manual serialization.
       **/
      reportsByKindIndex: AugmentedQuery<ApiType, (arg: Kind | string | Uint8Array) => Observable<Bytes>, [Kind]>;
    };
    permissions: {
      modes: AugmentedQuery<ApiType, (arg: PermissionId | AnyNumber | Uint8Array) => Observable<Mode>, [PermissionId]>;
      owners: AugmentedQueryDoubleMap<ApiType, (key1: PermissionId | AnyNumber | Uint8Array, key2: Scope | { Limited: any } | { Unlimited: any } | string | Uint8Array) => Observable<Vec<OwnerId>>, [PermissionId, Scope]>;
      permissions: AugmentedQueryDoubleMap<ApiType, (key1: HolderId | string | Uint8Array, key2: Scope | { Limited: any } | { Unlimited: any } | string | Uint8Array) => Observable<Vec<PermissionId>>, [HolderId, Scope]>;
    };
    poolXyk: {
      /**
       * Collection of all registered marker tokens.
       **/
      markerTokensIndex: AugmentedQuery<ApiType, () => Observable<BTreeSet<AssetId>>, []>;
      /**
       * Properties of particular pool. [Reserves Account Id, Fees Account Id, Marker Asset Id]
       **/
      properties: AugmentedQueryDoubleMap<ApiType, (key1: AssetId | AnyNumber | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, AccountId, AssetId]>>>, [AssetId, AssetId]>;
      /**
       * Updated after last liquidity change operation.
       * [Base Asset Id (XOR) -> Target Asset Id => (Base Balance, Target Balance)].
       * This storage records is not used as source of information, but used as quick cache for
       * information that comes from balances for assets from technical accounts.
       * For example, communication with technical accounts and their storage is not needed, and this
       * pair to balance cache can be used quickly.
       **/
      reserves: AugmentedQueryDoubleMap<ApiType, (key1: AssetId | AnyNumber | Uint8Array, key2: AssetId | AnyNumber | Uint8Array) => Observable<ITuple<[Balance, Balance]>>, [AssetId, AssetId]>;
    };
    pswapDistribution: {
      /**
       * Amount of incentive tokens to be burned on each distribution.
       **/
      burnRate: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * (Burn Rate Increase Delta, Burn Rate Max)
       **/
      burnUpdateInfo: AugmentedQuery<ApiType, () => Observable<ITuple<[Fixed, Fixed]>>, []>;
      /**
       * Sum of all shares of incentive token owners.
       **/
      claimableShares: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Fraction of PSWAP that could be reminted for parliament.
       **/
      parliamentPswapFraction: AugmentedQuery<ApiType, () => Observable<Fixed>, []>;
      /**
       * Information about owned portion of stored incentive tokens. Shareholder -> Owned Fraction
       **/
      shareholderAccounts: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Fixed>, [AccountId]>;
      /**
       * Store for information about accounts containing fees, that participate in incentive distribution mechanism.
       * Fees Account Id -> (DEX Id, Pool Marker Asset Id, Distribution Frequency, Block Offset) Frequency MUST be non-zero.
       **/
      subscribedAccounts: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<ITuple<[DEXId, AssetId, BlockNumber, BlockNumber]>>>, [AccountId]>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
    };
    referralSystem: {
      referrers: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]>;
    };
    rewards: {
      pswapFarmOwners: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Balance>, [EthereumAddress]>;
      pswapWaifuOwners: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Balance>, [EthereumAddress]>;
      reservesAcc: AugmentedQuery<ApiType, () => Observable<TechAccountId>, []>;
      valOwners: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Balance>, [EthereumAddress]>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>, [BlockNumber]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>, [Bytes]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []>;
      /**
       * Indices of disabled validators.
       * 
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>, [ITuple<[KeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, [ValidatorId]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []>;
    };
    staking: {
      /**
       * The active era information, it holds index and start.
       * 
       * The active era is the era being currently rewarded. Validator set of this era must be
       * equal to [`SessionInterface::validators`].
       **/
      activeEra: AugmentedQuery<ApiType, () => Observable<Option<ActiveEraInfo>>, []>;
      /**
       * Map from all locked "stash" accounts to the controller account.
       **/
      bonded: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<AccountId>>, [AccountId]>;
      /**
       * A mapping from still-bonded eras to the first session index of that era.
       * 
       * Must contains information for eras for the range:
       * `[active_era - bounding_duration; active_era]`
       **/
      bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[EraIndex, SessionIndex]>>>, []>;
      /**
       * The amount of currency given to reporters of a slash event which was
       * canceled by extraordinary circumstances (e.g. governance).
       **/
      canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * The current era index.
       * 
       * This is the latest planned era, depending on how the Session pallet queues the validator
       * set, it might be active or not.
       **/
      currentEra: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []>;
      /**
       * The earliest era for which we have a pending, unapplied slash.
       **/
      earliestUnappliedSlash: AugmentedQuery<ApiType, () => Observable<Option<EraIndex>>, []>;
      /**
       * Flag to control the execution of the offchain election. When `Open(_)`, we accept
       * solutions to be submitted.
       **/
      eraElectionStatus: AugmentedQuery<ApiType, () => Observable<ElectionStatus>, []>;
      /**
       * Rewards for the last `HISTORY_DEPTH` eras.
       * If reward hasn't been set or has been removed then 0 reward is returned.
       **/
      erasRewardPoints: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<EraRewardPoints>, [EraIndex]>;
      /**
       * Exposure of validator at era.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakers: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Exposure>, [EraIndex, AccountId]>;
      /**
       * Clipped Exposure of validator at era.
       * 
       * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
       * `T::MaxNominatorRewardedPerValidator` biggest stakers.
       * (Note: the field `total` and `own` of the exposure remains unchanged).
       * This is used to limit the i/o cost for the nominator payout.
       * 
       * This is keyed fist by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       **/
      erasStakersClipped: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Exposure>, [EraIndex, AccountId]>;
      /**
       * The session index at which the era start for the last `HISTORY_DEPTH` eras.
       * 
       * Note: This tracks the starting session (i.e. session index when era start being active)
       * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
       **/
      erasStartSessionIndex: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>, [EraIndex]>;
      /**
       * The total amount staked for the last `HISTORY_DEPTH` eras.
       * If total hasn't been set or has been removed then 0 stake is returned.
       **/
      erasTotalStake: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<BalanceOf>, [EraIndex]>;
      /**
       * Similar to `ErasStakers`, this holds the preferences of validators.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after `HISTORY_DEPTH` eras.
       **/
      erasValidatorPrefs: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<ValidatorPrefs>, [EraIndex, AccountId]>;
      /**
       * The total validator era payout for the last `HISTORY_DEPTH` eras.
       * 
       * Eras that haven't finished yet or has been removed doesn't have reward.
       **/
      erasValidatorReward: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Option<MultiCurrencyBalanceOf>>, [EraIndex]>;
      /**
       * The amount of VAL burned during this era.
       **/
      eraValBurned: AugmentedQuery<ApiType, () => Observable<MultiCurrencyBalanceOf>, []>;
      /**
       * Mode of era forcing.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<Forcing>, []>;
      /**
       * Number of eras to keep in history.
       * 
       * Information is kept for eras in `[current_era - history_depth; current_era]`.
       * 
       * Must be more than the number of eras delayed by session otherwise. I.e. active era must
       * always be in history. I.e. `active_era > current_era - history_depth` must be
       * guaranteed.
       **/
      historyDepth: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
       * easy to initialize and the performance hit is minimal (we expect no more than four
       * invulnerables) and restricted to testnets.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * True if the current **planned** session is final. Note that this does not take era
       * forcing into account.
       **/
      isCurrentSessionFinal: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Map from all (unlocked) "controller" accounts to the info regarding the staking.
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<StakingLedger>>, [AccountId]>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The map from nominator stash key to the set of stash keys of all validators to nominate.
       **/
      nominators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<Nominations>>, [AccountId]>;
      /**
       * All slashing events on nominators, mapped by era to the highest slash value of the era.
       **/
      nominatorSlashInEra: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex, AccountId]>;
      /**
       * Where the reward payment should be made. Keyed by stash.
       **/
      payee: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<RewardDestination>, [AccountId]>;
      /**
       * The next validator set. At the end of an era, if this is available (potentially from the
       * result of an offchain worker), it is immediately used. Otherwise, the on-chain election
       * is executed.
       **/
      queuedElected: AugmentedQuery<ApiType, () => Observable<Option<ElectionResult>>, []>;
      /**
       * The score of the current [`QueuedElected`].
       **/
      queuedScore: AugmentedQuery<ApiType, () => Observable<Option<ElectionScore>>, []>;
      /**
       * Slashing spans for stash accounts.
       **/
      slashingSpans: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<SlashingSpans>>, [AccountId]>;
      /**
       * The percentage of the slash that is distributed to reporters.
       * 
       * The rest of the slashed value is handled by the `Slash`.
       **/
      slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>, []>;
      /**
       * Snapshot of nominators at the beginning of the current election window. This should only
       * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
       **/
      snapshotNominators: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>, []>;
      /**
       * Snapshot of validators at the beginning of the current election window. This should only
       * have a value when [`EraElectionStatus`] == `ElectionStatus::Open(_)`.
       **/
      snapshotValidators: AugmentedQuery<ApiType, () => Observable<Option<Vec<AccountId>>>, []>;
      /**
       * Records information about the maximum slash of a stash within a slashing span,
       * as well as how much reward has been paid out.
       **/
      spanSlash: AugmentedQuery<ApiType, (arg: ITuple<[AccountId, SpanIndex]> | [AccountId | string | Uint8Array, SpanIndex | AnyNumber | Uint8Array]) => Observable<SpanRecord>, [ITuple<[AccountId, SpanIndex]>]>;
      /**
       * True if network has been upgraded to this version.
       * Storage version of the pallet.
       * 
       * This is set to v5.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
      /**
       * The time span since genesis, incremented at the end of each era.
       **/
      timeSinceGenesis: AugmentedQuery<ApiType, () => Observable<Duration>, []>;
      /**
       * All unapplied slashes that are queued for later.
       **/
      unappliedSlashes: AugmentedQuery<ApiType, (arg: EraIndex | AnyNumber | Uint8Array) => Observable<Vec<UnappliedSlash>>, [EraIndex]>;
      /**
       * The ideal number of staking participants.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The map from (wannabe) validator stash key to the preferences of that validator.
       **/
      validators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ValidatorPrefs>, [AccountId]>;
      /**
       * All slashing events on validators, mapped by era to the highest slash proportion
       * and slash value of the era.
       **/
      validatorSlashInEra: AugmentedQueryDoubleMap<ApiType, (key1: EraIndex | AnyNumber | Uint8Array, key2: AccountId | string | Uint8Array) => Observable<Option<ITuple<[Perbill, BalanceOf]>>>, [EraIndex, AccountId]>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToDualRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]>;
    };
    technicalMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>, []>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: CurrencyId | AnyNumber | Uint8Array) => Observable<AccountData>, [AccountId, CurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQueryDoubleMap<ApiType, (key1: AccountId | string | Uint8Array, key2: CurrencyId | AnyNumber | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId, CurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: CurrencyId | AnyNumber | Uint8Array) => Observable<Balance>, [CurrencyId]>;
    };
    tradingPair: {
      enabledSources: AugmentedQueryDoubleMap<ApiType, (key1: DEXId | AnyNumber | Uint8Array, key2: TradingPair | { base_asset_id?: any; target_asset_id?: any } | string | Uint8Array) => Observable<Option<BTreeSet<LiquiditySourceType>>>, [DEXId, TradingPair]>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
    };
    vestedRewards: {
      /**
       * Registry of market makers with large transaction volumes (>1 XOR per transaction).
       **/
      marketMakersRegistry: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<MarketMakerInfo>, [AccountId]>;
      /**
       * Reserved for future use
       * Mapping between users and their owned rewards of different kinds, which are vested.
       **/
      rewards: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<RewardInfo>, [AccountId]>;
      /**
       * Reserved for future use
       * Total amount of PSWAP pending rewards.
       **/
      totalRewards: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
    };
    xorFee: {
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  }
}
