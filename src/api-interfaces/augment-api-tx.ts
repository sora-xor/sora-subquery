// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Data, Option, Result, Text, U8aFixed, Vec, bool, u16, u32, u64, u8 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { TAssetBalance } from '@polkadot/types/interfaces/assets';
import type { BabeEquivocationProof } from '@polkadot/types/interfaces/babe';
import type { EthereumAddress } from '@polkadot/types/interfaces/claims';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { AccountVote, Conviction, PropIndex, Proposal, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { Renouncing } from '@polkadot/types/interfaces/elections';
import type { Extrinsic, Signature } from '@polkadot/types/interfaces/extrinsics';
import type { GrandpaEquivocationProof, KeyOwnerProof } from '@polkadot/types/interfaces/grandpa';
import type { IdentityFields, IdentityInfo, IdentityJudgement, RegistrarIndex } from '@polkadot/types/interfaces/identity';
import type { Heartbeat } from '@polkadot/types/interfaces/imOnline';
import type { AccountId, AccountIdOf, AssetId, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, H256, Hash, Header, KeyValue, LookupSource, Moment, OpaqueCall, Perbill, Percent, Weight } from '@polkadot/types/interfaces/runtime';
import type { Period, Priority } from '@polkadot/types/interfaces/scheduler';
import type { Keys } from '@polkadot/types/interfaces/session';
import type { CompactAssignments, ElectionScore, ElectionSize, EraIndex, RewardDestination, ValidatorIndex, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import type { DispatchError, Key } from '@polkadot/types/interfaces/system';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { BridgeNetworkId, IncomingRequest, IncomingRequestKind, LoadIncomingRequest, SignatureParams } from 'sora/api-interfaces/ethBridge';
import type { AmountOf, AssetIdOf, AssetName, AssetSymbol, CurrencyIdOf, DEXId, DEXIdOf, FilterMode, Fixed, LiquiditySourceType, Public, SwapAmount, SwapVariant } from 'sora/api-interfaces/sora';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    assets: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Performs a checked Asset burn, can only be done
       * by corresponding asset owner with own account.
       * 
       * - `origin`: caller Account, from which Asset amount is burned,
       * - `asset_id`: Id of burned Asset,
       * - `amount`: burned Asset amount.
       **/
      burn: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array, amount: TAssetBalance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, TAssetBalance]>;
      /**
       * Performs a checked Asset mint, can only be done
       * by corresponding asset owner account.
       * 
       * - `origin`: caller Account, which issues Asset minting,
       * - `asset_id`: Id of minted Asset,
       * - `to`: Id of Account, to which Asset amount is minted,
       * - `amount`: minted Asset amount.
       **/
      mint: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array, to: AccountId | string | Uint8Array, amount: TAssetBalance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AccountId, TAssetBalance]>;
      /**
       * Performs an asset registration.
       * 
       * Registers new `AssetId` for the given `origin`.
       * AssetSymbol should represent string with only uppercase latin chars with max length of 7.
       * AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
       **/
      register: AugmentedSubmittable<(symbol: AssetSymbol | string | Uint8Array, name: AssetName | string | Uint8Array, initialSupply: TAssetBalance | AnyNumber | Uint8Array, isMintable: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetSymbol, AssetName, TAssetBalance, bool]>;
      /**
       * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
       * Operation can not be undone.
       * 
       * - `origin`: caller Account, should correspond to Asset owner
       * - `asset_id`: Id of burned Asset,
       **/
      setNonMintable: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId]>;
      /**
       * Performs a checked Asset transfer.
       * 
       * - `origin`: caller Account, from which Asset amount is withdrawn,
       * - `asset_id`: Id of transferred Asset,
       * - `to`: Id of Account, to which Asset amount is deposited,
       * - `amount`: transferred Asset amount.
       **/
      transfer: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array, to: AccountId | string | Uint8Array, amount: TAssetBalance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AccountId, TAssetBalance]>;
    };
    authorship: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Provide a set of uncles.
       **/
      setUncles: AugmentedSubmittable<(newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Header>]>;
    };
    babe: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Report authority equivocation/misbehavior. This method will verify
       * the equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence will
       * be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: BabeEquivocationProof | { offender?: any; slotNumber?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BabeEquivocationProof, KeyOwnerProof]>;
      /**
       * Report authority equivocation/misbehavior. This method will verify
       * the equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence will
       * be reported.
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: BabeEquivocationProof | { offender?: any; slotNumber?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BabeEquivocationProof, KeyOwnerProof]>;
    };
    balances: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, Compact<Balance>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       * 
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * ---------------------
       * - Base Weight:
       * - Creating: 27.56 µs
       * - Killing: 35.11 µs
       * - DB Weight: 1 Read, 1 Write to `who`
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>, Compact<Balance>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * ---------------------------------
       * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
       * - DB Weight: 1 Read and 1 Write to destination account
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       * # <weight>
       * - Cheaper than transfer because account cannot be killed.
       * - Base Weight: 51.4 µs
       * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
       * #</weight>
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
    };
    bridgeMultisig: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       **/
      addSignatory: AugmentedSubmittable<(newMember: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
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
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * ----------------------------------
       * - Base Weight:
       * - Create: 44.71 + 0.088 * S
       * - Approve: 31.48 + 0.116 * S
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account]
       * - Write: Multisig Storage, [Caller Account]
       * # </weight>
       **/
      approveAsMulti: AugmentedSubmittable<(id: AccountId | string | Uint8Array, maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Option<Timepoint>, U8aFixed, Weight]>;
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
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * -------------------------------
       * - Base Weight:
       * - Create:          41.89 + 0.118 * S + .002 * Z µs
       * - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
       * - Approve:         31.39 + 0.136 * S + .002 * Z µs
       * - Complete:        39.94 + 0.26  * S + .002 * Z µs
       * - DB Weight:
       * - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Plus Call Weight
       * # </weight>
       **/
      asMulti: AugmentedSubmittable<(id: AccountId | string | Uint8Array, maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: OpaqueCall | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Option<Timepoint>, OpaqueCall, bool, Weight]>;
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
       **/
      asMultiThreshold1: AugmentedSubmittable<(id: AccountId | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array, timepoint: Timepoint | { height?: any; index?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Call, Timepoint]>;
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
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       * ----------------------------------
       * - Base Weight: 36.07 + 0.124 * S
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account], Refund Account, Calls
       * - Write: Multisig Storage, [Caller Account], Refund Account, Calls
       * # </weight>
       **/
      cancelAsMulti: AugmentedSubmittable<(id: AccountId | string | Uint8Array, timepoint: Timepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Timepoint, U8aFixed]>;
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
       **/
      registerMultisig: AugmentedSubmittable<(signatories: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
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
       **/
      removeSignatory: AugmentedSubmittable<(signatory: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
    };
    council: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, proposalWeightBound: Compact<Weight> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, Compact<Weight>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
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
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Proposal, Compact<u32>]>;
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
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<MemberCount>, Proposal, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       * 
       * Requires root origin.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array, oldCount: MemberCount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Option<AccountId>, MemberCount]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, bool]>;
    };
    currencies: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Transfer some balance to another account under `currency_id`.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | AnyNumber | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Transfer some native currency to another account.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>]>;
      /**
       * update amount of account `who` under `currency_id`.
       * 
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | AnyNumber | Uint8Array, amount: AmountOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, AmountOf]>;
    };
    democracy: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * reasonable value).
       **/
      blacklist: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, maybeRefIndex: Option<ReferendumIndex> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Option<ReferendumIndex>]>;
      /**
       * Remove a proposal.
       * 
       * The dispatch origin of this call must be `CancelProposalOrigin`.
       * 
       * - `prop_index`: The index of the proposal to cancel.
       * 
       * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<PropIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<PropIndex>]>;
      /**
       * Cancel a proposal queued for enactment.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * - `which`: The index of the referendum to cancel.
       * 
       * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
       **/
      cancelQueued: AugmentedSubmittable<(which: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Remove a referendum.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * - `ref_index`: The index of the referendum to cancel.
       * 
       * # Weight: `O(1)`.
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ReferendumIndex>]>;
      /**
       * Clears all public proposals.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * Weight: `O(1)`.
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Delegate the voting power (with some given conviction) of the sending account.
       * 
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * 
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       * 
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must
       * not be more than the account's current balance.
       * 
       * Emits `Delegated`.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      delegate: AugmentedSubmittable<(to: AccountId | string | Uint8Array, conviction: Conviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Conviction, BalanceOf]>;
      /**
       * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
       * referendum.
       * 
       * The dispatch origin of this call must be `CancellationOrigin`.
       * 
       * -`ref_index`: The index of the referendum to cancel.
       * 
       * Weight: `O(1)`.
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Enact a proposal from a referendum. For now we just make the weight be the maximum.
       **/
      enactProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, ReferendumIndex]>;
      /**
       * Schedule a referendum to be tabled once it is legal to schedule an external
       * referendum.
       * 
       * The dispatch origin of this call must be `ExternalOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
       * Decoding vec of length V. Charged as maximum
       **/
      externalPropose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
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
       **/
      externalProposeDefault: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
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
       **/
      externalProposeMajority: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Schedule the currently externally-proposed majority-carries referendum to be tabled
       * immediately. If there is no externally-proposed referendum currently, or if there is one
       * but it is not a majority-carries referendum then it fails.
       * 
       * The dispatch of this call must be `FastTrackOrigin`.
       * 
       * - `proposal_hash`: The hash of the current external proposal.
       * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
       * `FastTrackVotingPeriod` if too low.
       * - `delay`: The number of block after voting has ended in approval and this should be
       * enacted. This doesn't have a minimum amount.
       * 
       * Emits `Started`.
       * 
       * Weight: `O(1)`
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, votingPeriod: BlockNumber | AnyNumber | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, BlockNumber, BlockNumber]>;
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
       **/
      noteImminentPreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
       **/
      noteImminentPreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
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
       **/
      notePreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
       **/
      notePreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
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
       **/
      propose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<BalanceOf>]>;
      /**
       * Remove an expired proposal preimage and collect the deposit.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `proposal_hash`: The preimage hash of a proposal.
       * - `proposal_length_upper_bound`: an upper bound on length of the proposal.
       * Extrinsic is weighted according to this value with no refund.
       * 
       * This will only work after `VotingPeriod` blocks from the time that the preimage was
       * noted, if it's the same account doing it. If it's a different account, then it'll only
       * work an additional `EnactmentPeriod` later.
       * 
       * Emits `PreimageReaped`.
       * 
       * Weight: `O(D)` where D is length of proposal.
       **/
      reapPreimage: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, proposalLenUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<u32>]>;
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
       * referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: AccountId | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ReferendumIndex]>;
      /**
       * Remove a vote for a referendum.
       * 
       * If:
       * - the referendum was cancelled, or
       * - the referendum is ongoing, or
       * - the referendum has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
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
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Signals agreement with a particular proposal.
       * 
       * The dispatch origin of this call must be _Signed_ and the sender
       * must have funds to cover the deposit, equal to the original deposit.
       * 
       * - `proposal`: The index of the proposal to second.
       * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
       * proposal. Extrinsic is weighted according to this value with no refund.
       * 
       * Weight: `O(S)` where S is the number of seconds a proposal already has.
       **/
      second: AugmentedSubmittable<(proposal: Compact<PropIndex> | AnyNumber | Uint8Array, secondsUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<PropIndex>, Compact<u32>]>;
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
       * voted on. Weight is charged as if maximum votes.
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unlock tokens that have an expired lock.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account to remove the lock on.
       * 
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
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
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
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
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: AccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ReferendumIndex>, AccountVote]>;
    };
    dexapi: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Perform swap with specified parameters. Gateway for invoking liquidity source exchanges.
       * 
       * - `dex_id`: ID of the exchange.
       * - `liquidity_source_type`: Type of liquidity source to perform swap on.
       * - `input_asset_id`: ID of Asset to be deposited from sender account into pool reserves.
       * - `output_asset_id`: ID of Asset t0 be withdrawn from pool reserves into receiver account.
       * - `amount`: Either amount of desired input or output tokens, determined by `swap_variant` parameter.
       * - `limit`: Either maximum input amount or minimum output amount tolerated for successful swap,
       * determined by `swap_variant` parameter.
       * - `swap_variant`: Either 'WithDesiredInput' or 'WithDesiredOutput', indicates amounts purpose.
       * - `receiver`: Optional value, indicates AccountId for swap receiver. If not set, default is `sender`.
       **/
      swap: AugmentedSubmittable<(dexId: DEXId | AnyNumber | Uint8Array, liquiditySourceType: LiquiditySourceType | 'XYKPool' | 'BondingCurvePool' | 'MulticollateralBondingCurvePool' | 'MockPool' | 'MockPool2' | 'MockPool3' | 'MockPool4' | number | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array, limit: Balance | AnyNumber | Uint8Array, swapVariant: SwapVariant | 'WithDesiredInput' | 'WithDesiredOutput' | number | Uint8Array, receiver: Option<AccountId> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXId, LiquiditySourceType, AssetId, AssetId, Balance, Balance, SwapVariant, Option<AccountId>]>;
    };
    electionsPhragmen: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       **/
      cleanDefunctVoters: AugmentedSubmittable<(numVoters: u32 | AnyNumber | Uint8Array, numDefunct: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
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
       **/
      removeMember: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, hasReplacement: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, bool]>;
      /**
       * Remove `origin` as a voter.
       * 
       * This removes the lock and returns the deposit.
       * 
       * The dispatch origin of this call must be signed and be a voter.
       **/
      removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Renounce one's intention to be a candidate for the next election round. 3 potential
       * outcomes exist:
       * 
       * - `origin` is a candidate and not elected in any set. In this case, the deposit is
       * unreserved, returned and origin is removed as a candidate.
       * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
       * origin is removed as a runner-up.
       * - `origin` is a current member. In this case, the deposit is unreserved and origin is
       * removed as a member, consequently not being a candidate for the next round anymore.
       * Similar to [`remove_members`], if replacement runners exists, they are immediately used.
       * If the prime is renouncing, then no prime will exist until the next round.
       * 
       * The dispatch origin of this call must be signed, and have one of the above roles.
       * 
       * # <weight>
       * The type of renouncing must be provided as witness data.
       * # </weight>
       **/
      renounceCandidacy: AugmentedSubmittable<(renouncing: Renouncing | { Member: any } | { RunnerUp: any } | { Candidate: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Renouncing]>;
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
       **/
      submitCandidacy: AugmentedSubmittable<(candidateCount: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Vote for a set of candidates for the upcoming round of election. This can be called to
       * set the initial votes, or update already existing votes.
       * 
       * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
       * reserved. The deposit is based on the number of votes and can be updated over time.
       * 
       * The `votes` should:
       * - not be empty.
       * - be less than the number of possible candidates. Note that all current members and
       * runners-up are also automatically candidates for the next round.
       * 
       * If `value` is more than `who`'s total balance, then the maximum of the two is used.
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
       **/
      vote: AugmentedSubmittable<(votes: Vec<AccountId> | (AccountId | string | Uint8Array)[], value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Compact<BalanceOf>]>;
    };
    ethBridge: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Cancels a registered request.
       * 
       * Loads request by the given `hash`, cancels it, changes its status to `Failed` and
       * removes it from the request queues.
       * 
       * Can only be called from a bridge account.
       **/
      abortRequest: AugmentedSubmittable<(hash: H256 | string | Uint8Array, error: DispatchError | { Other: any } | { CannotLookup: any } | { BadOrigin: any } | { Module: any } | { ConsumerRemaining: any } | { NoProviders: any } | { Token: any } | string | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, DispatchError, BridgeNetworkId]>;
      /**
       * Add a Thischain asset to the bridge whitelist.
       * 
       * Parameters:
       * - `asset_id` - Thischain asset identifier.
       * - `network_id` - network identifier to which the asset should be added.
       **/
      addAsset: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, BridgeNetworkId]>;
      /**
       * Add a new peer to the bridge peers set.
       * 
       * Parameters:
       * - `account_id` - account id on thischain.
       * - `address` - account id on sidechain.
       * - `network_id` - network identifier.
       **/
      addPeer: AugmentedSubmittable<(accountId: AccountId | string | Uint8Array, address: EthereumAddress | string | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, EthereumAddress, BridgeNetworkId]>;
      /**
       * Add a Sidechain token to the bridge whitelist.
       * 
       * Parameters:
       * - `token_address` - token contract address.
       * - `symbol` - token symbol (ticker).
       * - `name` - token name.
       * - `decimals` -  token precision.
       * - `network_id` - network identifier.
       **/
      addSidechainToken: AugmentedSubmittable<(tokenAddress: EthereumAddress | string | Uint8Array, symbol: Text | string, name: Text | string, decimals: u8 | AnyNumber | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [EthereumAddress, Text, Text, u8, BridgeNetworkId]>;
      /**
       * Approve the given outgoing request. The function is used by bridge peers.
       * 
       * Verifies the peer signature of the given request and adds it to `RequestApprovals`.
       * Once quorum is collected, the request gets finalized and removed from request queue.
       **/
      approveRequest: AugmentedSubmittable<(ocwPublic: Public | string | Uint8Array, hash: H256 | string | Uint8Array, signatureParams: SignatureParams | { r?: any; s?: any; v?: any } | string | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Public, H256, SignatureParams, BridgeNetworkId]>;
      /**
       * Finalize incoming request (see `Pallet::finalize_incoming_request_inner`).
       * 
       * Can be only called from a bridge account.
       * 
       * Parameters:
       * - `request` - an incoming request.
       * - `network_id` - network identifier.
       **/
      finalizeIncomingRequest: AugmentedSubmittable<(hash: H256 | string | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, BridgeNetworkId]>;
      /**
       * Add the given peer to the peers set without additional checks.
       * 
       * Can only be called by a root account.
       **/
      forceAddPeer: AugmentedSubmittable<(who: AccountId | string | Uint8Array, address: EthereumAddress | string | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, EthereumAddress, BridgeNetworkId]>;
      /**
       * Import the given incoming request.
       * 
       * Register's the load request, then registers and finalizes the incoming request if it
       * succeeded, otherwise aborts the load request.
       * 
       * Can only be called by a bridge account.
       **/
      importIncomingRequest: AugmentedSubmittable<(loadIncomingRequest: LoadIncomingRequest | { Transaction: any } | { Meta: any } | string | Uint8Array, incomingRequestResult: Result<IncomingRequest, DispatchError> | { Ok: any } | { Err: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LoadIncomingRequest, Result<IncomingRequest, DispatchError>]>;
      /**
       * Migrate the given bridge to a new smart-contract.
       * 
       * Can only be called by an authority.
       * 
       * Parameters:
       * - `new_contract_address` - new sidechain ocntract address.
       * - `erc20_native_tokens` - migrated assets ids.
       * - `network_id` - bridge network identifier.
       **/
      migrate: AugmentedSubmittable<(newContractAddress: EthereumAddress | string | Uint8Array, erc20NativeTokens: Vec<EthereumAddress> | (EthereumAddress | string | Uint8Array)[], networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [EthereumAddress, Vec<EthereumAddress>, BridgeNetworkId]>;
      migrateTo020: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Prepare the given bridge for migration.
       * 
       * Can only be called by an authority.
       * 
       * Parameters:
       * - `network_id` - bridge network identifier.
       **/
      prepareForMigration: AugmentedSubmittable<(networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BridgeNetworkId]>;
      /**
       * Register a new bridge.
       * 
       * Parameters:
       * - `bridge_contract_address` - address of smart-contract deployed on a corresponding
       * network.
       * - `initial_peers` - a set of initial network peers.
       **/
      registerBridge: AugmentedSubmittable<(bridgeContractAddress: EthereumAddress | string | Uint8Array, initialPeers: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [EthereumAddress, Vec<AccountId>]>;
      /**
       * Register the given incoming request and add it to the queue.
       * 
       * Calls `validate` and `prepare` on the request, adds it to the queue and maps it with the
       * corresponding load-incoming-request and removes the load-request from the queue.
       * 
       * Can only be called by a bridge account.
       **/
      registerIncomingRequest: AugmentedSubmittable<(incomingRequest: IncomingRequest | { Transfer: any } | { AddToken: any } | { ChangePeers: any } | { CancelOutgoingRequest: any } | { MarkAsDone: any } | { PrepareForMigration: any } | { Migrate: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [IncomingRequest]>;
      /**
       * Remove peer from the the bridge peers set.
       * 
       * Parameters:
       * - `account_id` - account id on thischain.
       * - `network_id` - network identifier.
       **/
      removePeer: AugmentedSubmittable<(accountId: AccountId | string | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, BridgeNetworkId]>;
      /**
       * Load incoming request from Sidechain by the given transaction hash.
       * 
       * Parameters:
       * - `eth_tx_hash` - transaction hash on Sidechain.
       * - `kind` - incoming request type.
       * - `network_id` - network identifier.
       **/
      requestFromSidechain: AugmentedSubmittable<(ethTxHash: H256 | string | Uint8Array, kind: IncomingRequestKind | { Transaction: any } | { Meta: any } | string | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, IncomingRequestKind, BridgeNetworkId]>;
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
       **/
      transferToSidechain: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, to: EthereumAddress | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array, networkId: BridgeNetworkId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, EthereumAddress, Balance, BridgeNetworkId]>;
    };
    farming: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      migrateTo11: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    faucet: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      resetRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Transfers the specified amount of asset to the specified account.
       * The supported assets are: XOR, VAL, PSWAP.
       * 
       * # Errors
       * 
       * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
       * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
       * NotEnoughReserves is returned if `amount` is greater than the reserves
       **/
      transfer: AugmentedSubmittable<(assetId: AssetId | AnyNumber | Uint8Array, target: AccountIdOf | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, AccountIdOf, Balance]>;
    };
    grandpa: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Note that the current authority set of the GRANDPA finality gadget has
       * stalled. This will trigger a forced authority set change at the beginning
       * of the next session, to be enacted `delay` blocks after that. The delay
       * should be high enough to safely assume that the block signalling the
       * forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
       * will start the new authority set using the given finalized block as base.
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: BlockNumber | AnyNumber | Uint8Array, bestFinalizedBlockNumber: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, BlockNumber]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [GrandpaEquivocationProof, KeyOwnerProof]>;
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
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: KeyOwnerProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [GrandpaEquivocationProof, KeyOwnerProof]>;
    };
    identity: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       **/
      addRegistrar: AugmentedSubmittable<(account: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Add the given account to the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      addSub: AugmentedSubmittable<(sub: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Data]>;
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
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: RegistrarIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [RegistrarIndex]>;
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
       * - where `R` registrar-count (governance-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       * - One balance-unreserve operation.
       * - `2` storage reads and `S + 2` storage deletions.
       * - One event.
       * # </weight>
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
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
       * with a registered identity.
       * 
       * Emits `IdentityKilled` if successful.
       * 
       * # <weight>
       * - `O(R + S + X)`.
       * - One balance-reserve operation.
       * - `S + 2` storage mutations.
       * - One event.
       * # </weight>
       **/
      killIdentity: AugmentedSubmittable<(target: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Provide a judgement for an account's identity.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `reg_index`.
       * 
       * - `reg_index`: the index of the registrar whose judgement is being made.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
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
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, target: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: IdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<RegistrarIndex>, LookupSource, IdentityJudgement]>;
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
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove the given account from the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      removeSub: AugmentedSubmittable<(sub: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Alter the associated name of the given sub-account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      renameSub: AugmentedSubmittable<(sub: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Data]>;
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
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<RegistrarIndex> | AnyNumber | Uint8Array, maxFee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<RegistrarIndex>, Compact<BalanceOf>]>;
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
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<RegistrarIndex>, AccountId]>;
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
       **/
      setFee: AugmentedSubmittable<(index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fee: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<RegistrarIndex>, Compact<BalanceOf>]>;
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
       **/
      setFields: AugmentedSubmittable<(index: Compact<RegistrarIndex> | AnyNumber | Uint8Array, fields: IdentityFields) => SubmittableExtrinsic<ApiType>, [Compact<RegistrarIndex>, IdentityFields]>;
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
       * - where `X` additional-field-count (deposit-bounded and code-bounded)
       * - where `R` judgements-count (registrar-count-bounded)
       * - One balance reserve operation.
       * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
       * - One event.
       * # </weight>
       **/
      setIdentity: AugmentedSubmittable<(info: IdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [IdentityInfo]>;
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
       * - where `P` old-subs-count (hard- and deposit-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - At most one balance operations.
       * - DB:
       * - `P + S` storage mutations (codec complexity `O(1)`)
       * - One storage read (codec complexity `O(P)`).
       * - One storage write (codec complexity `O(S)`).
       * - One storage-exists (`IdentityOf::contains_key`).
       * # </weight>
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId, Data]>> | ([AccountId | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId, Data]>>]>;
    };
    imOnline: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * # <weight>
       * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
       * and E is length of `heartbeat.network_state.external_address`
       * - `O(K)`: decoding of length `K`
       * - `O(E)`: decoding/encoding of length `E`
       * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
       * `ReceivedHeartbeats`
       * - DbWrites: `ReceivedHeartbeats`
       * # </weight>
       **/
      heartbeat: AugmentedSubmittable<(heartbeat: Heartbeat | { blockNumber?: any; networkState?: any; sessionIndex?: any; authorityIndex?: any; validatorsLen?: any } | string | Uint8Array, signature: Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Heartbeat, Signature]>;
    };
    irohaMigration: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      migrate: AugmentedSubmittable<(irohaAddress: Text | string, irohaPublicKey: Text | string, irohaSignature: Text | string) => SubmittableExtrinsic<ApiType>, [Text, Text, Text]>;
    };
    liquidityProxy: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       **/
      swap: AugmentedSubmittable<(dexId: DEXId | AnyNumber | Uint8Array, inputAssetId: AssetId | AnyNumber | Uint8Array, outputAssetId: AssetId | AnyNumber | Uint8Array, swapAmount: SwapAmount | { WithDesiredInput: any } | { WithDesiredOutput: any } | string | Uint8Array, selectedSourceTypes: Vec<LiquiditySourceType> | (LiquiditySourceType | 'XYKPool' | 'BondingCurvePool' | 'MulticollateralBondingCurvePool' | 'MockPool' | 'MockPool2' | 'MockPool3' | 'MockPool4' | number | Uint8Array)[], filterMode: FilterMode | 'Disabled' | 'ForbidSelected' | 'AllowSelected' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXId, AssetId, AssetId, SwapAmount, Vec<LiquiditySourceType>, FilterMode]>;
    };
    multicollateralBondingCurvePool: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
       **/
      initializePool: AugmentedSubmittable<(collateralAssetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId]>;
      /**
       * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
       * `None` value indicates reward without change, same as Some(1.0).
       **/
      setOptionalRewardMultiplier: AugmentedSubmittable<(collateralAssetId: AssetId | AnyNumber | Uint8Array, multiplier: Option<Fixed> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId, Option<Fixed>]>;
      /**
       * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
       **/
      setReferenceAsset: AugmentedSubmittable<(referenceAssetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId]>;
    };
    multisig: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account]
       * - Write: Multisig Storage, [Caller Account]
       * # </weight>
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, U8aFixed, Weight]>;
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
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * -------------------------------
       * - DB Weight:
       * - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Plus Call Weight
       * # </weight>
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: OpaqueCall | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, OpaqueCall, bool, Weight]>;
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
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Call]>;
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
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account], Refund Account, Calls
       * - Write: Multisig Storage, [Caller Account], Refund Account, Calls
       * # </weight>
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], timepoint: Timepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Timepoint, U8aFixed]>;
    };
    poolXyk: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      depositLiquidity: AugmentedSubmittable<(dexId: DEXIdOf | AnyNumber | Uint8Array, inputAssetA: AssetIdOf | AnyNumber | Uint8Array, inputAssetB: AssetIdOf | AnyNumber | Uint8Array, inputADesired: Balance | AnyNumber | Uint8Array, inputBDesired: Balance | AnyNumber | Uint8Array, inputAMin: Balance | AnyNumber | Uint8Array, inputBMin: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXIdOf, AssetIdOf, AssetIdOf, Balance, Balance, Balance, Balance]>;
      initializePool: AugmentedSubmittable<(dexId: DEXIdOf | AnyNumber | Uint8Array, assetA: AssetIdOf | AnyNumber | Uint8Array, assetB: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXIdOf, AssetIdOf, AssetIdOf]>;
      withdrawLiquidity: AugmentedSubmittable<(dexId: DEXIdOf | AnyNumber | Uint8Array, outputAssetA: AssetIdOf | AnyNumber | Uint8Array, outputAssetB: AssetIdOf | AnyNumber | Uint8Array, markerAssetDesired: Balance | AnyNumber | Uint8Array, outputAMin: Balance | AnyNumber | Uint8Array, outputBMin: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXIdOf, AssetIdOf, AssetIdOf, Balance, Balance, Balance]>;
    };
    pswapDistribution: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      claimIncentive: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
    };
    rewards: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      claim: AugmentedSubmittable<(signature: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Finalize the update of unclaimed VAL data in storage
       **/
      finalizeStorageMigration: AugmentedSubmittable<(amounts: Vec<ITuple<[EthereumAddress, Balance]>> | ([EthereumAddress | string | Uint8Array, Balance | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[EthereumAddress, Balance]>>]>;
    };
    scheduler: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Cancel an anonymously scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.15 + 2.869 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancel: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, u32]>;
      /**
       * Cancel a named scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 24.91 + 2.907 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Anonymously schedule a task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.29 + .126 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda
       * - Will use base weight of 25 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      schedule: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       * 
       * # <weight>
       * Same as [`schedule`].
       * # </weight>
       **/
      scheduleAfter: AugmentedSubmittable<(after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 29.6 + .159 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 35 which should be good for more than 30 scheduled calls
       * # </weight>
       **/
      scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task after a delay.
       * 
       * # <weight>
       * Same as [`schedule_named`].
       * # </weight>
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
    };
    session: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwnder`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: Keys, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Keys, Bytes]>;
    };
    staking: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Take the origin account as a stash and lock up `value` of its balance. `controller` will
       * be the account that controls it.
       * 
       * `value` must be more than the `minimum_balance` specified by `T::Currency`.
       * 
       * The dispatch origin for this call must be _Signed_ by the stash account.
       * 
       * Emits `Bonded`.
       * 
       * # <weight>
       * - Independent of the arguments. Moderate complexity.
       * - O(1).
       * - Three extra DB entries.
       * 
       * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
       * unless the `origin` falls below _existential deposit_ and gets removed as dust.
       * ------------------
       * Weight: O(1)
       * DB Weight:
       * - Read: Bonded, Ledger, [Origin Account], Current Era, History Depth, Locks
       * - Write: Bonded, Payee, [Origin Account], Locks, Ledger
       * # </weight>
       **/
      bond: AugmentedSubmittable<(controller: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array, payee: RewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>, RewardDestination]>;
      /**
       * Add some extra amount that have appeared in the stash `free_balance` into the balance up
       * for staking.
       * 
       * Use this if there are additional funds in your stash account that you wish to bond.
       * Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
       * that can be added.
       * 
       * The dispatch origin for this call must be _Signed_ by the stash, not the controller and
       * it can be only called when [`EraElectionStatus`] is `Closed`.
       * 
       * Emits `Bonded`.
       * 
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - O(1).
       * - One DB entry.
       * ------------
       * DB Weight:
       * - Read: Era Election Status, Bonded, Ledger, [Origin Account], Locks
       * - Write: [Origin Account], Locks, Ledger
       * # </weight>
       **/
      bondExtra: AugmentedSubmittable<(maxAdditional: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>]>;
      /**
       * Cancel enactment of a deferred slash.
       * 
       * Can be called by the `T::SlashCancelOrigin`.
       * 
       * Parameters: era and indices of the slashes for that era to kill.
       * 
       * # <weight>
       * Complexity: O(U + S)
       * with U unapplied slashes weighted with U=1000
       * and S is the number of slash indices to be canceled.
       * - Read: Unapplied Slashes
       * - Write: Unapplied Slashes
       * # </weight>
       **/
      cancelDeferredSlash: AugmentedSubmittable<(era: EraIndex | AnyNumber | Uint8Array, slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [EraIndex, Vec<u32>]>;
      /**
       * Declare no desire to either validate or nominate.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * 
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - Contains one read.
       * - Writes are limited to the `origin` account key.
       * --------
       * Weight: O(1)
       * DB Weight:
       * - Read: EraElectionStatus, Ledger
       * - Write: Validators, Nominators
       * # </weight>
       **/
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force there to be a new era at the end of the next session. After this, it will be
       * reset to normal (non-forced) behaviour.
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * - No arguments.
       * - Weight: O(1)
       * - Write ForceEra
       * # </weight>
       **/
      forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force there to be a new era at the end of sessions indefinitely.
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * - Weight: O(1)
       * - Write: ForceEra
       * # </weight>
       **/
      forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force there to be no new eras indefinitely.
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * - No arguments.
       * - Weight: O(1)
       * - Write: ForceEra
       * # </weight>
       **/
      forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force a current staker to become completely unstaked, immediately.
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * O(S) where S is the number of slashing spans to be removed
       * Reads: Bonded, Slashing Spans, Account, Locks
       * Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Account, Locks
       * Writes Each: SpanSlash * S
       * # </weight>
       **/
      forceUnstake: AugmentedSubmittable<(stash: AccountId | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, u32]>;
      /**
       * Increments the ideal number of validators.
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * Same as [`set_validator_count`].
       * # </weight>
       **/
      increaseValidatorCount: AugmentedSubmittable<(additional: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove the given nominations from the calling validator.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`. The controller
       * account should represent a validator.
       * 
       * - `who`: A list of nominator stash accounts who are nominating this validator which
       * should no longer be nominating this validator.
       * 
       * Note: Making this call only makes sense if you first set the validator preferences to
       * block any further nominations.
       **/
      kick: AugmentedSubmittable<(who: Vec<LookupSource> | (LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<LookupSource>]>;
      /**
       * Declare the desire to nominate `targets` for the origin controller.
       * 
       * Effects will be felt at the beginning of the next era. This can only be called when
       * [`EraElectionStatus`] is `Closed`.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * 
       * # <weight>
       * - The transaction's complexity is proportional to the size of `targets` (N)
       * which is capped at CompactAssignments::LIMIT (MAX_NOMINATIONS).
       * - Both the reads and writes follow a similar pattern.
       * ---------
       * Weight: O(N)
       * where N is the number of targets
       * DB Weight:
       * - Reads: Era Election Status, Ledger, Current Era
       * - Writes: Validators, Nominators
       * # </weight>
       **/
      nominate: AugmentedSubmittable<(targets: Vec<LookupSource> | (LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<LookupSource>]>;
      /**
       * Pay out all the stakers behind a single validator for a single era.
       * 
       * - `validator_stash` is the stash account of the validator. Their nominators, up to
       * `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
       * - `era` may be any era between `[current_era - history_depth; current_era]`.
       * 
       * The origin of this call must be _Signed_. Any account can call this function, even if
       * it is not one of the stakers.
       * 
       * This can only be called when [`EraElectionStatus`] is `Closed`.
       * 
       * # <weight>
       * - Time complexity: at most O(MaxNominatorRewardedPerValidator).
       * - Contains a limited number of reads and writes.
       * -----------
       * N is the Number of payouts for the validator (including the validator)
       * Weight:
       * - Reward Destination Staked: O(N)
       * - Reward Destination Controller (Creating): O(N)
       * DB Weight:
       * - Read: EraElectionStatus, CurrentEra, HistoryDepth, ErasValidatorReward,
       * ErasStakersClipped, ErasRewardPoints, ErasValidatorPrefs (8 items)
       * - Read Each: Bonded, Ledger, Payee, Locks, System Account (5 items)
       * - Write Each: System Account, Locks, Ledger (3 items)
       * 
       * NOTE: weights are assuming that payouts are made to alive stash account (Staked).
       * Paying even a dead controller is cheaper weight-wise. We don't do any refunds here.
       * # </weight>
       **/
      payoutStakers: AugmentedSubmittable<(validatorStash: AccountId | string | Uint8Array, era: EraIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, EraIndex]>;
      /**
       * Remove all data structure concerning a staker/stash once its balance is at the minimum.
       * This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
       * and the target `stash` must have no funds left beyond the ED.
       * 
       * This can be called from any origin.
       * 
       * - `stash`: The stash account to reap. Its balance must be zero.
       * 
       * # <weight>
       * Complexity: O(S) where S is the number of slashing spans on the account.
       * DB Weight:
       * - Reads: Stash Account, Bonded, Slashing Spans, Locks
       * - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators, Stash Account, Locks
       * - Writes Each: SpanSlash * S
       * # </weight>
       **/
      reapStash: AugmentedSubmittable<(stash: AccountId | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, u32]>;
      /**
       * Rebond a portion of the stash scheduled to be unlocked.
       * 
       * The dispatch origin must be signed by the controller, and it can be only called when
       * [`EraElectionStatus`] is `Closed`.
       * 
       * # <weight>
       * - Time complexity: O(L), where L is unlocking chunks
       * - Bounded by `MAX_UNLOCKING_CHUNKS`.
       * - Storage changes: Can't increase storage, only decrease it.
       * ---------------
       * - DB Weight:
       * - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
       * - Writes: [Origin Account], Locks, Ledger
       * # </weight>
       **/
      rebond: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>]>;
      /**
       * Scale up the ideal number of validators by a factor.
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * Same as [`set_validator_count`].
       * # </weight>
       **/
      scaleValidatorCount: AugmentedSubmittable<(factor: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Percent]>;
      /**
       * (Re-)set the controller of a stash.
       * 
       * Effects will be felt at the beginning of the next era.
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
       **/
      setController: AugmentedSubmittable<(controller: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Set `HistoryDepth` value. This function will delete any history information
       * when `HistoryDepth` is reduced.
       * 
       * Parameters:
       * - `new_history_depth`: The new history depth you would like to set.
       * - `era_items_deleted`: The number of items that will be deleted by this dispatch.
       * This should report all the storage items that will be deleted by clearing old
       * era history. Needed to report an accurate weight for the dispatch. Trusted by
       * `Root` to report an accurate number.
       * 
       * Origin must be root.
       * 
       * # <weight>
       * - E: Number of history depths removed, i.e. 10 -> 7 = 3
       * - Weight: O(E)
       * - DB Weight:
       * - Reads: Current Era, History Depth
       * - Writes: History Depth
       * - Clear Prefix Each: Era Stakers, EraStakersClipped, ErasValidatorPrefs
       * - Writes Each: ErasValidatorReward, ErasRewardPoints, ErasTotalStake, ErasStartSessionIndex
       * # </weight>
       **/
      setHistoryDepth: AugmentedSubmittable<(newHistoryDepth: Compact<EraIndex> | AnyNumber | Uint8Array, eraItemsDeleted: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<EraIndex>, Compact<u32>]>;
      /**
       * Set the validators who cannot be slashed (if any).
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * - O(V)
       * - Write: Invulnerables
       * # </weight>
       **/
      setInvulnerables: AugmentedSubmittable<(invulnerables: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * (Re-)set the payment target for a controller.
       * 
       * Effects will be felt at the beginning of the next era.
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
       * - Read: Ledger
       * - Write: Payee
       * # </weight>
       **/
      setPayee: AugmentedSubmittable<(payee: RewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [RewardDestination]>;
      /**
       * Sets the ideal number of validators.
       * 
       * The dispatch origin must be Root.
       * 
       * # <weight>
       * Weight: O(1)
       * Write: Validator Count
       * # </weight>
       **/
      setValidatorCount: AugmentedSubmittable<(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Submit an election result to the chain. If the solution:
       * 
       * 1. is valid.
       * 2. has a better score than a potentially existing solution on chain.
       * 
       * then, it will be _put_ on chain.
       * 
       * A solution consists of two pieces of data:
       * 
       * 1. `winners`: a flat vector of all the winners of the round.
       * 2. `assignments`: the compact version of an assignment vector that encodes the edge
       * weights.
       * 
       * Both of which may be computed using _phragmen_, or any other algorithm.
       * 
       * Additionally, the submitter must provide:
       * 
       * - The `score` that they claim their solution has.
       * 
       * Both validators and nominators will be represented by indices in the solution. The
       * indices should respect the corresponding types ([`ValidatorIndex`] and
       * [`NominatorIndex`]). Moreover, they should be valid when used to index into
       * [`SnapshotValidators`] and [`SnapshotNominators`]. Any invalid index will cause the
       * solution to be rejected. These two storage items are set during the election window and
       * may be used to determine the indices.
       * 
       * A solution is valid if:
       * 
       * 0. It is submitted when [`EraElectionStatus`] is `Open`.
       * 1. Its claimed score is equal to the score computed on-chain.
       * 2. Presents the correct number of winners.
       * 3. All indexes must be value according to the snapshot vectors. All edge values must
       * also be correct and should not overflow the granularity of the ratio type (i.e. 256
       * or billion).
       * 4. For each edge, all targets are actually nominated by the voter.
       * 5. Has correct self-votes.
       * 
       * A solutions score is consisted of 3 parameters:
       * 
       * 1. `min { support.total }` for each support of a winner. This value should be maximized.
       * 2. `sum { support.total }` for each support of a winner. This value should be minimized.
       * 3. `sum { support.total^2 }` for each support of a winner. This value should be
       * minimized (to ensure less variance)
       * 
       * # <weight>
       * The transaction is assumed to be the longest path, a better solution.
       * - Initial solution is almost the same.
       * - Worse solution is retraced in pre-dispatch-checks which sets its own weight.
       * # </weight>
       **/
      submitElectionSolution: AugmentedSubmittable<(winners: Vec<ValidatorIndex> | (ValidatorIndex | AnyNumber | Uint8Array)[], compact: CompactAssignments | { votes1?: any; votes2?: any; votes3?: any; votes4?: any; votes5?: any; votes6?: any; votes7?: any; votes8?: any; votes9?: any; votes10?: any; votes11?: any; votes12?: any; votes13?: any; votes14?: any; votes15?: any; votes16?: any } | string | Uint8Array, score: ElectionScore, era: EraIndex | AnyNumber | Uint8Array, size: ElectionSize | { validators?: any; nominators?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ValidatorIndex>, CompactAssignments, ElectionScore, EraIndex, ElectionSize]>;
      /**
       * Unsigned version of `submit_election_solution`.
       * 
       * Note that this must pass the [`ValidateUnsigned`] check which only allows transactions
       * from the local node to be included. In other words, only the block author can include a
       * transaction in the block.
       * 
       * # <weight>
       * See [`submit_election_solution`].
       * # </weight>
       **/
      submitElectionSolutionUnsigned: AugmentedSubmittable<(winners: Vec<ValidatorIndex> | (ValidatorIndex | AnyNumber | Uint8Array)[], compact: CompactAssignments | { votes1?: any; votes2?: any; votes3?: any; votes4?: any; votes5?: any; votes6?: any; votes7?: any; votes8?: any; votes9?: any; votes10?: any; votes11?: any; votes12?: any; votes13?: any; votes14?: any; votes15?: any; votes16?: any } | string | Uint8Array, score: ElectionScore, era: EraIndex | AnyNumber | Uint8Array, size: ElectionSize | { validators?: any; nominators?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ValidatorIndex>, CompactAssignments, ElectionScore, EraIndex, ElectionSize]>;
      /**
       * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
       * period ends. If this leaves an amount actively bonded less than
       * T::Currency::minimum_balance(), then it is increased to the full amount.
       * 
       * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
       * the funds out of management ready for transfer.
       * 
       * No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
       * can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
       * to be called first to remove some of the chunks (if possible).
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * 
       * Emits `Unbonded`.
       * 
       * See also [`Call::withdraw_unbonded`].
       * 
       * # <weight>
       * - Independent of the arguments. Limited but potentially exploitable complexity.
       * - Contains a limited number of reads.
       * - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
       * will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
       * The only way to clean the aforementioned storage item is also user-controlled via
       * `withdraw_unbonded`.
       * - One DB entry.
       * ----------
       * Weight: O(1)
       * DB Weight:
       * - Read: EraElectionStatus, Ledger, CurrentEra, Locks, BalanceOf Stash,
       * - Write: Locks, Ledger, BalanceOf Stash,
       * </weight>
       **/
      unbond: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>]>;
      /**
       * Declare the desire to validate for the origin controller.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * 
       * # <weight>
       * - Independent of the arguments. Insignificant complexity.
       * - Contains a limited number of reads.
       * - Writes are limited to the `origin` account key.
       * -----------
       * Weight: O(1)
       * DB Weight:
       * - Read: Era Election Status, Ledger
       * - Write: Nominators, Validators
       * # </weight>
       **/
      validate: AugmentedSubmittable<(prefs: ValidatorPrefs | { commission?: any; blocked?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ValidatorPrefs]>;
      /**
       * Remove any unlocked chunks from the `unlocking` queue from our management.
       * 
       * This essentially frees up that balance to be used by the stash account to do
       * whatever it wants.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * And, it can be only called when [`EraElectionStatus`] is `Closed`.
       * 
       * Emits `Withdrawn`.
       * 
       * See also [`Call::unbond`].
       * 
       * # <weight>
       * - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
       * It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
       * indirectly user-controlled. See [`unbond`] for more detail.
       * - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
       * - Writes are limited to the `origin` account key.
       * ---------------
       * Complexity O(S) where S is the number of slashing spans to remove
       * Update:
       * - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
       * - Writes: [Origin Account], Locks, Ledger
       * Kill:
       * - Reads: EraElectionStatus, Ledger, Current Era, Bonded, Slashing Spans, [Origin
       * Account], Locks, BalanceOf stash
       * - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Nominators,
       * [Origin Account], Locks, BalanceOf stash.
       * - Writes Each: SpanSlash * S
       * NOTE: Weight annotation is the kill scenario, we refund otherwise.
       * # </weight>
       **/
      withdrawUnbonded: AugmentedSubmittable<(numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
    };
    sudo: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
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
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
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
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Call]>;
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
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Weight]>;
    };
    system: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       * 
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * - Base Weight: 0.834 * P µs
       * - Writes: Number of subkeys + 1
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Key, u32]>;
      /**
       * Kill some items from storage.
       * 
       * # <weight>
       * - `O(IK)` where `I` length of `keys` and `K` length of one key
       * - `I` storage deletions.
       * - Base Weight: .378 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Key>]>;
      /**
       * Make some on-chain remark.
       * 
       * # <weight>
       * - `O(1)`
       * - Base Weight: 0.665 µs, independent of remark length.
       * - No DB operations.
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new changes trie configuration.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: Uses `append` API, so O(1)
       * - Base Weight: 7.218 µs
       * - DB Weight:
       * - Writes: Changes Trie, System Digest
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<ChangesTrieConfiguration>]>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very expensive.
       * We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full block.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * - Base Weight: 1.405 µs
       * - 1 write to HEAP_PAGES
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       * 
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * - Base Weight: 0.568 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>, [Vec<KeyValue>]>;
    };
    technicalCommittee: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, proposalWeightBound: Compact<Weight> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, Compact<Weight>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
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
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Proposal, Compact<u32>]>;
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
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<MemberCount>, Proposal, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       * 
       * Requires root origin.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array, oldCount: MemberCount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Option<AccountId>, MemberCount]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, bool]>;
    };
    technicalMembership: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
    };
    timestamp: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
    };
    tradingPair: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Register trading pair on the given DEX.
       * Can be only called by the DEX owner.
       * 
       * - `dex_id`: ID of the exchange.
       * - `base_asset_id`: base asset ID.
       * - `target_asset_id`: target asset ID.
       **/
      register: AugmentedSubmittable<(dexId: DEXId | AnyNumber | Uint8Array, baseAssetId: AssetId | AnyNumber | Uint8Array, targetAssetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [DEXId, AssetId, AssetId]>;
    };
    utility: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
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
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin.
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
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin.
       * 
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
    };
    vestedRewards: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Claim all available PSWAP rewards by account signing this transaction.
       **/
      claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Inject market makers snapshot into storage.
       **/
      injectMarketMakers: AugmentedSubmittable<(snapshot: Vec<ITuple<[AccountId, u32, Balance]>> | ([AccountId | string | Uint8Array, u32 | AnyNumber | Uint8Array, Balance | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId, u32, Balance]>>]>;
    };
    xstPool: {
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
      /**
       * Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
       **/
      initializePool: AugmentedSubmittable<(syntheticAssetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId]>;
      /**
       * Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
       **/
      setReferenceAsset: AugmentedSubmittable<(referenceAssetId: AssetId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetId]>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    [key: string]: SubmittableModuleExtrinsics<ApiType>;
  }
}
