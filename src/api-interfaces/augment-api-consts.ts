// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Vec, u16, u32, u64, u8 } from '@polkadot/types';
import type { Codec, ITuple } from '@polkadot/types/types';
import type { AccountId, Balance, BalanceOf, BlockNumber, H160, LockIdentifier, Moment, Perbill, RuntimeDbWeight } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { WeightToFeeCoefficient } from '@polkadot/types/interfaces/support';
import type { BlockLength, BlockWeights } from '@polkadot/types/interfaces/system';
import type { CurrencyIdOf } from 'sora/api-interfaces/sora';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    babe: {
      [key: string]: Codec;
      /**
       * The number of **slots** that an epoch takes. We couple sessions to
       * epochs, i.e. we start a new session once the new epoch begins.
       * NOTE: Currently it is not possible to change the epoch duration
       * after the chain has started. Attempting to do so will brick block
       * production.
       **/
      epochDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The expected average block time at which BABE should be creating
       * blocks. Since BABE is probabilistic it is not trivial to figure out
       * what the expected average block time should be based on the slot
       * duration and the security parameter `c` (where `1 - c` represents
       * the probability of a slot being empty).
       **/
      expectedBlockTime: Moment & AugmentedConst<ApiType>;
    };
    balances: {
      [key: string]: Codec;
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: Balance & AugmentedConst<ApiType>;
    };
    currencies: {
      [key: string]: Codec;
      getNativeCurrencyId: CurrencyIdOf & AugmentedConst<ApiType>;
    };
    democracy: {
      [key: string]: Codec;
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The minimum period of locking and the period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case where
       * they are on the losing side of a vote.
       **/
      enactmentPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for an emergency referendum.
       **/
      fastTrackVotingPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of balance that must be deposited per byte of preimage stored.
       **/
      preimageByteDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: BlockNumber & AugmentedConst<ApiType>;
    };
    electionsPhragmen: {
      [key: string]: Codec;
      candidacyBond: BalanceOf & AugmentedConst<ApiType>;
      desiredMembers: u32 & AugmentedConst<ApiType>;
      desiredRunnersUp: u32 & AugmentedConst<ApiType>;
      moduleId: LockIdentifier & AugmentedConst<ApiType>;
      termDuration: BlockNumber & AugmentedConst<ApiType>;
      votingBondBase: BalanceOf & AugmentedConst<ApiType>;
      votingBondFactor: BalanceOf & AugmentedConst<ApiType>;
    };
    ethBridge: {
      [key: string]: Codec;
      removePeerAccountIds: Vec<ITuple<[AccountId, H160]>> & AugmentedConst<ApiType>;
      removePendingOutgoingRequestsAfter: BlockNumber & AugmentedConst<ApiType>;
      trackPendingIncomingRequestsAfter: ITuple<[BlockNumber, u64]> & AugmentedConst<ApiType>;
    };
    identity: {
      [key: string]: Codec;
      /**
       * The amount held on deposit for a registered identity.
       **/
      basicDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will be
       * another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: BalanceOf & AugmentedConst<ApiType>;
    };
    multisig: {
      [key: string]: Codec;
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to store
       * a dispatch call for later.
       **/
      depositBase: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       **/
      depositFactor: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed for a given multisig.
       **/
      maxSignatories: u16 & AugmentedConst<ApiType>;
    };
    staking: {
      [key: string]: Codec;
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: EraIndex & AugmentedConst<ApiType>;
      /**
       * The number of blocks before the end of the era from which election submissions are allowed.
       * 
       * Setting this to zero will disable the offchain compute and only on-chain seq-phragmen will
       * be used.
       * 
       * This is bounded by being within the last session. Hence, setting it to a value more than the
       * length of a session will be pointless.
       **/
      electionLookahead: BlockNumber & AugmentedConst<ApiType>;
      /**
       * Maximum number of balancing iterations to run in the offchain submission.
       * 
       * If set to 0, balance_solution will not be executed at all.
       **/
      maxIterations: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of nominators rewarded for each validator.
       * 
       * For each validator only the `$MaxNominatorRewardedPerValidator` biggest stakers can claim
       * their reward. This used to limit the i/o cost for the nominator payout.
       **/
      maxNominatorRewardedPerValidator: u32 & AugmentedConst<ApiType>;
      /**
       * The threshold of improvement that should be provided for a new solution to be accepted.
       **/
      minSolutionScoreBump: Perbill & AugmentedConst<ApiType>;
      /**
       * Number of sessions per era.
       **/
      sessionsPerEra: SessionIndex & AugmentedConst<ApiType>;
      /**
       * Number of eras that slashes are deferred by, after computation.
       * 
       * This should be less than the bonding duration.
       * Set to 0 if slashes should be applied immediately, without opportunity for
       * intervention.
       **/
      slashDeferDuration: EraIndex & AugmentedConst<ApiType>;
    };
    system: {
      [key: string]: Codec;
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: BlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: BlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: RuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS85 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u8 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: RuntimeVersion & AugmentedConst<ApiType>;
    };
    timestamp: {
      [key: string]: Codec;
      /**
       * The minimum period between blocks. Beware that this is different to the *expected* period
       * that the block production apparatus provides. Your chosen consensus system will generally
       * work with this to determine a sensible block time. e.g. For Aura, it will be double this
       * period on default settings.
       **/
      minimumPeriod: Moment & AugmentedConst<ApiType>;
    };
    transactionPayment: {
      [key: string]: Codec;
      /**
       * The fee to be paid for making a transaction; the per-byte portion.
       **/
      transactionByteFee: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The polynomial that is applied in order to derive fee from weight.
       **/
      weightToFee: Vec<WeightToFeeCoefficient> & AugmentedConst<ApiType>;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [key: string]: QueryableModuleConsts;
  }
}
