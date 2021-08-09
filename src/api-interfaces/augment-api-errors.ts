// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/errors' {
  export interface AugmentedErrors<ApiType> {
    assets: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * An asset with a given ID already exists.
       **/
      AssetIdAlreadyExists: AugmentedError<ApiType>;
      /**
       * An asset with a given ID not exists.
       **/
      AssetIdNotExists: AugmentedError<ApiType>;
      /**
       * Minting for particular asset id is disabled.
       **/
      AssetSupplyIsNotMintable: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * A number is out of range of the balance type.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Name is not valid. It must contain only uppercase or lowercase latin characters or numbers or spaces, length <= 33.
       **/
      InvalidAssetName: AugmentedError<ApiType>;
      /**
       * Caller does not own requested asset.
       **/
      InvalidAssetOwner: AugmentedError<ApiType>;
      /**
       * Symbol is not valid. It must contain only uppercase latin characters or numbers, length <= 7.
       **/
      InvalidAssetSymbol: AugmentedError<ApiType>;
      /**
       * Precision value is not valid, it should represent a number of decimal places for number, max is 30.
       **/
      InvalidPrecision: AugmentedError<ApiType>;
    };
    authorship: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedError<ApiType>;
    };
    balances: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
    };
    bridgeMultisig: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * Call with the given hash was already dispatched.
       **/
      AlreadyDispatched: AugmentedError<ApiType>;
      /**
       * The given account ID is already presented in the signatories.
       **/
      AlreadyInSignatories: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * The multisig account is already registered.
       **/
      MultisigAlreadyExists: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * The given account ID is not presented in the signatories.
       **/
      NotInSignatories: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender wasn't contained in the other signatories; it shouldn be.
       **/
      SenderNotInSignatories: AugmentedError<ApiType>;
      /**
       * Signatories list unordered or contains duplicated entries.
       **/
      SignatoriesAreNotUniqueOrUnordered: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * Corresponding multisig account wasn't found.
       **/
      UnknownMultisigAccount: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      WeightTooLow: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Threshold should not be zero.
       **/
      ZeroThreshold: AugmentedError<ApiType>;
    };
    council: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    currencies: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
    };
    democracy: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Unknown index
       **/
      BadIndex: AugmentedError<ApiType>;
      /**
       * Preimage already noted
       **/
      DuplicatePreimage: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Imminent
       **/
      Imminent: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * The provided witness data is wrong.
       **/
      InvalidWitness: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * Not delegated
       **/
      NotDelegated: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * The lock on the account to be unlocked has not yet expired.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * Not imminent
       **/
      NotImminent: AugmentedError<ApiType>;
      /**
       * The target account does not have a lock.
       **/
      NotLocked: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * An unexpected integer overflow occurred.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Invalid preimage
       **/
      PreimageInvalid: AugmentedError<ApiType>;
      /**
       * Preimage not found
       **/
      PreimageMissing: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Too early
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * Maximum number of proposals reached.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * An unexpected integer underflow occurred.
       **/
      Underflow: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
    };
    dexManager: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * DEX with given Id is not registered.
       **/
      DEXDoesNotExist: AugmentedError<ApiType>;
      /**
       * DEX with given id is already registered.
       **/
      DEXIdAlreadyExists: AugmentedError<ApiType>;
      /**
       * Account with given Id is not registered.
       **/
      InvalidAccountId: AugmentedError<ApiType>;
      /**
       * Numeric value provided as fee is not valid, e.g. out of basis-point range.
       **/
      InvalidFeeValue: AugmentedError<ApiType>;
    };
    electionsPhragmen: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Duplicated candidate submission.
       **/
      DuplicatedCandidate: AugmentedError<ApiType>;
      /**
       * Candidate does not have enough funds.
       **/
      InsufficientCandidateFunds: AugmentedError<ApiType>;
      /**
       * The renouncing origin presented a wrong `Renouncing` parameter.
       **/
      InvalidRenouncing: AugmentedError<ApiType>;
      /**
       * Prediction regarding replacement after member removal is wrong.
       **/
      InvalidReplacement: AugmentedError<ApiType>;
      /**
       * The provided count of number of votes is incorrect.
       **/
      InvalidVoteCount: AugmentedError<ApiType>;
      /**
       * The provided count of number of candidates is incorrect.
       **/
      InvalidWitnessData: AugmentedError<ApiType>;
      /**
       * Cannot vote with stake less than minimum balance.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * Cannot vote more than maximum allowed.
       **/
      MaximumVotesExceeded: AugmentedError<ApiType>;
      /**
       * Member cannot re-submit candidacy.
       **/
      MemberSubmit: AugmentedError<ApiType>;
      /**
       * Must be a voter.
       **/
      MustBeVoter: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Must vote for at least one candidate.
       **/
      NoVotes: AugmentedError<ApiType>;
      /**
       * Cannot report self.
       **/
      ReportSelf: AugmentedError<ApiType>;
      /**
       * Runner cannot re-submit candidacy.
       **/
      RunnerUpSubmit: AugmentedError<ApiType>;
      /**
       * Cannot vote more than candidates.
       **/
      TooManyVotes: AugmentedError<ApiType>;
      /**
       * Voter can not pay voting bond.
       **/
      UnableToPayBond: AugmentedError<ApiType>;
      /**
       * Cannot vote when no candidates or members exist.
       **/
      UnableToVote: AugmentedError<ApiType>;
    };
    ethBridge: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account not found.
       **/
      AccountNotFound: AugmentedError<ApiType>;
      /**
       * Funds are already claimed.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * The request was purposely cancelled.
       **/
      Cancelled: AugmentedError<ApiType>;
      /**
       * Can't add more peers.
       **/
      CantAddMorePeers: AugmentedError<ApiType>;
      /**
       * Can't remove more peers.
       **/
      CantRemoveMorePeers: AugmentedError<ApiType>;
      /**
       * Can't reserve funds.
       **/
      CantReserveFunds: AugmentedError<ApiType>;
      /**
       * Contract is already in migration stage.
       **/
      ContractIsAlreadyInMigrationStage: AugmentedError<ApiType>;
      /**
       * Contract is in migration stage.
       **/
      ContractIsInMigrationStage: AugmentedError<ApiType>;
      /**
       * Contract is not on migration stage.
       **/
      ContractIsNotInMigrationStage: AugmentedError<ApiType>;
      /**
       * Duplicated request.
       **/
      DuplicatedRequest: AugmentedError<ApiType>;
      /**
       * Ethereum ABI decoding error.
       **/
      EthAbiDecodingError: AugmentedError<ApiType>;
      /**
       * Ethereum ABI encoding error.
       **/
      EthAbiEncodingError: AugmentedError<ApiType>;
      /**
       * Ethereum log was removed.
       **/
      EthLogWasRemoved: AugmentedError<ApiType>;
      /**
       * Ethereum transaction is failed.
       **/
      EthTransactionIsFailed: AugmentedError<ApiType>;
      /**
       * Ethereum transaction is pending.
       **/
      EthTransactionIsPending: AugmentedError<ApiType>;
      /**
       * Ethereum transaction is succeeded.
       **/
      EthTransactionIsSucceeded: AugmentedError<ApiType>;
      /**
       * Expected Ethereum network.
       **/
      ExpectedEthNetwork: AugmentedError<ApiType>;
      /**
       * Expected an incoming request.
       **/
      ExpectedIncomingRequest: AugmentedError<ApiType>;
      /**
       * Expected an outgoing request.
       **/
      ExpectedOutgoingRequest: AugmentedError<ApiType>;
      /**
       * Expected pending request.
       **/
      ExpectedPendingRequest: AugmentedError<ApiType>;
      /**
       * A transfer of XOR was expected.
       **/
      ExpectedXORTransfer: AugmentedError<ApiType>;
      /**
       * Failed to get an asset by id.
       **/
      FailedToGetAssetById: AugmentedError<ApiType>;
      /**
       * Failed to load substrate block header.
       **/
      FailedToLoadBlockHeader: AugmentedError<ApiType>;
      /**
       * Failed to load current sidechain height.
       **/
      FailedToLoadCurrentSidechainHeight: AugmentedError<ApiType>;
      /**
       * Failed to load substrate finalized head.
       **/
      FailedToLoadFinalizedHead: AugmentedError<ApiType>;
      /**
       * Failed to query sidechain 'used' variable.
       **/
      FailedToLoadIsUsed: AugmentedError<ApiType>;
      /**
       * Failed to load token precision.
       **/
      FailedToLoadPrecision: AugmentedError<ApiType>;
      /**
       * Failed to load sidechain node parameters.
       **/
      FailedToLoadSidechainNodeParams: AugmentedError<ApiType>;
      /**
       * Failed to load sidechain transaction.
       **/
      FailedToLoadTransaction: AugmentedError<ApiType>;
      /**
       * Failed to parse transaction hash in a call.
       **/
      FailedToParseTxHashInCall: AugmentedError<ApiType>;
      /**
       * Failed to send signed message.
       **/
      FailedToSendSignedTransaction: AugmentedError<ApiType>;
      /**
       * Failed to sign message.
       **/
      FailedToSignMessage: AugmentedError<ApiType>;
      /**
       * Failed to unreserve asset.
       **/
      FailedToUnreserve: AugmentedError<ApiType>;
      /**
       * Forbidden.
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Error fetching HTTP.
       **/
      HttpFetchingError: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * Invalid account id value.
       **/
      InvalidAccountId: AugmentedError<ApiType>;
      /**
       * Invalid address value.
       **/
      InvalidAddress: AugmentedError<ApiType>;
      /**
       * Invalid amount value.
       **/
      InvalidAmount: AugmentedError<ApiType>;
      /**
       * Invalid array value.
       **/
      InvalidArray: AugmentedError<ApiType>;
      /**
       * Invalid asset id value.
       **/
      InvalidAssetId: AugmentedError<ApiType>;
      /**
       * Invalid balance value.
       **/
      InvalidBalance: AugmentedError<ApiType>;
      /**
       * Invalid bool value.
       **/
      InvalidBool: AugmentedError<ApiType>;
      /**
       * Invalid byte value.
       **/
      InvalidByte: AugmentedError<ApiType>;
      /**
       * Invalid contract input.
       **/
      InvalidContractInput: AugmentedError<ApiType>;
      /**
       * Invalid contract function input.
       **/
      InvalidFunctionInput: AugmentedError<ApiType>;
      /**
       * Invalid h256 value.
       **/
      InvalidH256: AugmentedError<ApiType>;
      /**
       * Invalid peer signature.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Invalid string value.
       **/
      InvalidString: AugmentedError<ApiType>;
      /**
       * Invalid uint value.
       **/
      InvalidUint: AugmentedError<ApiType>;
      /**
       * Failed to deserialize JSON.
       **/
      JsonDeserializationError: AugmentedError<ApiType>;
      /**
       * Failed to serialize JSON.
       **/
      JsonSerializationError: AugmentedError<ApiType>;
      /**
       * No local account for signing available.
       **/
      NoLocalAccountForSigning: AugmentedError<ApiType>;
      /**
       * Non-zero dust.
       **/
      NonZeroDust: AugmentedError<ApiType>;
      /**
       * No pending peer.
       **/
      NoPendingPeer: AugmentedError<ApiType>;
      /**
       * Unknown error.
       **/
      Other: AugmentedError<ApiType>;
      /**
       * Peer is already added.
       **/
      PeerIsAlreadyAdded: AugmentedError<ApiType>;
      /**
       * Request was removed and refunded.
       **/
      RemovedAndRefunded: AugmentedError<ApiType>;
      /**
       * Request is already registered.
       **/
      RequestIsAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Request is not owned by the author.
       **/
      RequestIsNotOwnedByTheAuthor: AugmentedError<ApiType>;
      /**
       * Request is not ready.
       **/
      RequestIsNotReady: AugmentedError<ApiType>;
      /**
       * Request is not finalized on Sidechain.
       **/
      RequestNotFinalizedOnSidechain: AugmentedError<ApiType>;
      /**
       * The sidechain asset is alredy registered.
       **/
      SidechainAssetIsAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Token is already added.
       **/
      TokenIsAlreadyAdded: AugmentedError<ApiType>;
      /**
       * Token is not owned by the author.
       **/
      TokenIsNotOwnedByTheAuthor: AugmentedError<ApiType>;
      /**
       * Too many pending peers.
       **/
      TooManyPendingPeers: AugmentedError<ApiType>;
      /**
       * Sidechain transaction might have failed due to gas limit.
       **/
      TransactionMightHaveFailedDueToGasLimit: AugmentedError<ApiType>;
      /**
       * Unable to pay transfer fees.
       **/
      UnableToPayFees: AugmentedError<ApiType>;
      /**
       * Functionality is unavailable.
       **/
      Unavailable: AugmentedError<ApiType>;
      /**
       * Unknown asset id.
       **/
      UnknownAssetId: AugmentedError<ApiType>;
      /**
       * Unknown contract address.
       **/
      UnknownContractAddress: AugmentedError<ApiType>;
      /**
       * Unknown contract event.
       **/
      UnknownEvent: AugmentedError<ApiType>;
      /**
       * Unknown method ID.
       **/
      UnknownMethodId: AugmentedError<ApiType>;
      /**
       * Unknown network.
       **/
      UnknownNetwork: AugmentedError<ApiType>;
      /**
       * Unknown peer address.
       **/
      UnknownPeerAddress: AugmentedError<ApiType>;
      /**
       * Unknown peer id.
       **/
      UnknownPeerId: AugmentedError<ApiType>;
      /**
       * Unknown request.
       **/
      UnknownRequest: AugmentedError<ApiType>;
      /**
       * Unknown token address.
       **/
      UnknownTokenAddress: AugmentedError<ApiType>;
      /**
       * Unsupported asset id.
       **/
      UnsupportedAssetId: AugmentedError<ApiType>;
      /**
       * Unsupported asset precision.
       **/
      UnsupportedAssetPrecision: AugmentedError<ApiType>;
      /**
       * Token is unsupported.
       **/
      UnsupportedToken: AugmentedError<ApiType>;
      /**
       * Wrong pending peer.
       **/
      WrongPendingPeer: AugmentedError<ApiType>;
    };
    farming: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
    };
    faucet: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Amount is above limit.
       **/
      AmountAboveLimit: AugmentedError<ApiType>;
      /**
       * Asset is not supported.
       **/
      AssetNotSupported: AugmentedError<ApiType>;
      /**
       * Not enough reserves.
       **/
      NotEnoughReserves: AugmentedError<ApiType>;
    };
    grandpa: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
    };
    identity: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
    };
    imOnline: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
    };
    irohaMigration: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Iroha account is already migrated
       **/
      AccountAlreadyMigrated: AugmentedError<ApiType>;
      /**
       * Iroha account is not found
       **/
      AccountNotFound: AugmentedError<ApiType>;
      /**
       * Milti-signature account creation failed
       **/
      MultiSigCreationFailed: AugmentedError<ApiType>;
      /**
       * Public key is already used
       **/
      PublicKeyAlreadyUsed: AugmentedError<ApiType>;
      /**
       * Public key is not found
       **/
      PublicKeyNotFound: AugmentedError<ApiType>;
      /**
       * Failed to parse public key
       **/
      PublicKeyParsingFailed: AugmentedError<ApiType>;
      /**
       * Referral migration failed
       **/
      ReferralMigrationFailed: AugmentedError<ApiType>;
      /**
       * Signatory addition to multi-signature account failed
       **/
      SignatoryAdditionFailed: AugmentedError<ApiType>;
      /**
       * Failed to parse signature
       **/
      SignatureParsingFailed: AugmentedError<ApiType>;
      /**
       * Failed to verify signature
       **/
      SignatureVerificationFailed: AugmentedError<ApiType>;
    };
    liquidityProxy: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Path exists but it's not possible to perform exchange with currently available liquidity on pools.
       **/
      AggregationError: AugmentedError<ApiType>;
      /**
       * Specified parameters lead to arithmetic error
       **/
      CalculationError: AugmentedError<ApiType>;
      /**
       * Failure while calculating price ignoring non-linearity of liquidity source.
       **/
      FailedToCalculatePriceWithoutImpact: AugmentedError<ApiType>;
      /**
       * Selected filtering request is not allowed.
       **/
      ForbiddenFilter: AugmentedError<ApiType>;
      /**
       * None of the sources has enough reserves to execute a trade
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Fee value outside of the basis points range [0..10000]
       **/
      InvalidFeeValue: AugmentedError<ApiType>;
      /**
       * Max fee exceeded
       **/
      MaxFeeExceeded: AugmentedError<ApiType>;
      /**
       * Slippage either exceeds minimum tolerated output or maximum tolerated input.
       **/
      SlippageNotTolerated: AugmentedError<ApiType>;
      /**
       * No route exists in a given DEX for given parameters to carry out the swap
       **/
      UnavailableExchangePath: AugmentedError<ApiType>;
    };
    multicollateralBondingCurvePool: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The pool can't perform exchange on itself.
       **/
      CannotExchangeWithSelf: AugmentedError<ApiType>;
      /**
       * Liquidity source can't exchange assets with the given IDs on the given DEXId.
       **/
      CantExchange: AugmentedError<ApiType>;
      /**
       * Failure while calculating price ignoring non-linearity of liquidity source.
       **/
      FailedToCalculatePriceWithoutImpact: AugmentedError<ApiType>;
      /**
       * Could not calculate fee including sell penalty.
       **/
      FeeCalculationFailed: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * It's not enough reserves in the pool to perform the operation.
       **/
      NotEnoughReserves: AugmentedError<ApiType>;
      /**
       * Either user has no pending rewards or current limit is exceeded at the moment.
       **/
      NothingToClaim: AugmentedError<ApiType>;
      /**
       * Attempt to initialize pool for pair that already exists.
       **/
      PoolAlreadyInitializedForPair: AugmentedError<ApiType>;
      /**
       * Attempt to get info for uninitialized pool.
       **/
      PoolNotInitialized: AugmentedError<ApiType>;
      /**
       * An error occurred while calculating the price.
       **/
      PriceCalculationFailed: AugmentedError<ApiType>;
      /**
       * User has pending reward, but rewards supply is insufficient at the moment.
       **/
      RewardsSupplyShortage: AugmentedError<ApiType>;
      /**
       * Indicated limits for slippage has not been met during transaction execution.
       **/
      SlippageLimitExceeded: AugmentedError<ApiType>;
      /**
       * Indicated collateral asset is not enabled for pool.
       **/
      UnsupportedCollateralAssetId: AugmentedError<ApiType>;
    };
    multisig: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      WeightTooLow: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
    };
    permissions: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The account either doesn't have the permission or has the restriction.
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * Permission already exists in the system.
       **/
      PermissionAlreadyExists: AugmentedError<ApiType>;
      /**
       * Account doesn't hold a permission.
       **/
      PermissionNotFound: AugmentedError<ApiType>;
      /**
       * Account doesn't own a permission.
       **/
      PermissionNotOwned: AugmentedError<ApiType>;
    };
    poolXyk: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The account balance is invalid.
       **/
      AccountBalanceIsInvalid: AugmentedError<ApiType>;
      /**
       * Error in asset decoding.
       **/
      AssetDecodingError: AugmentedError<ApiType>;
      /**
       * In this case assets must not be same.
       **/
      AssetsMustNotBeSame: AugmentedError<ApiType>;
      /**
       * The base asset is not matched with any asset arguments.
       **/
      BaseAssetIsNotMatchedWithAnyAssetArguments: AugmentedError<ApiType>;
      /**
       * The values that is calculated is out out of required bounds.
       **/
      CalculatedValueIsNotMeetsRequiredBoundaries: AugmentedError<ApiType>;
      /**
       * Calculated value is out of desired bounds.
       **/
      CalculatedValueIsOutOfDesiredBounds: AugmentedError<ApiType>;
      /**
       * Some values need to be same, the destination amount must be same.
       **/
      DestinationAmountMustBeSame: AugmentedError<ApiType>;
      /**
       * Destination amount of liquidity is not large enough.
       **/
      DestinationAmountOfLiquidityIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Destination base balance is not large enough.
       **/
      DestinationBaseBalanceIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Destination base balance is not large enough.
       **/
      DestinationTargetBalanceIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Failure while calculating price ignoring non-linearity of liquidity source.
       **/
      FailedToCalculatePriceWithoutImpact: AugmentedError<ApiType>;
      /**
       * The fee account is invalid.
       **/
      FeeAccountIsInvalid: AugmentedError<ApiType>;
      /**
       * Math calculation with fixed number has failed to complete.
       **/
      FixedWrapperCalculationFailed: AugmentedError<ApiType>;
      /**
       * In this case getting fee from destination is impossible.
       **/
      GettingFeeFromDestinationIsImpossible: AugmentedError<ApiType>;
      /**
       * Impossible to decide asset pair amounts.
       **/
      ImpossibleToDecideAssetPairAmounts: AugmentedError<ApiType>;
      /**
       * Impossible to decide deposit liquidity amounts.
       **/
      ImpossibleToDecideDepositLiquidityAmounts: AugmentedError<ApiType>;
      /**
       * It is impossible to decide valid pair values from range for this pool.
       **/
      ImpossibleToDecideValidPairValuesFromRangeForThisPool: AugmentedError<ApiType>;
      /**
       * Impossible to decide withdraw liquidity amounts.
       **/
      ImpossibleToDecideWithdrawLiquidityAmounts: AugmentedError<ApiType>;
      /**
       * Couldn't increase reference counter for the account that adds liquidity.
       * It is expected to never happen because if the account has funds to add liquidity, it has a provider from balances.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * Initial liquidity deposit ratio must be defined.
       **/
      InitialLiqudityDepositRatioMustBeDefined: AugmentedError<ApiType>;
      /**
       * Asset for liquidity marking is invalid.
       **/
      InvalidAssetForLiquidityMarking: AugmentedError<ApiType>;
      /**
       * Invalid deposit liquidity base asset amount.
       **/
      InvalidDepositLiquidityBasicAssetAmount: AugmentedError<ApiType>;
      /**
       * Invalid deposit liquidity destination amount.
       **/
      InvalidDepositLiquidityDestinationAmount: AugmentedError<ApiType>;
      /**
       * Invalid deposit liquidity target asset amount.
       **/
      InvalidDepositLiquidityTargetAssetAmount: AugmentedError<ApiType>;
      /**
       * The minimum bound values of balance are invalid.
       **/
      InvalidMinimumBoundValueOfBalance: AugmentedError<ApiType>;
      /**
       * Invalid withdraw liquidity base asset amount.
       **/
      InvalidWithdrawLiquidityBasicAssetAmount: AugmentedError<ApiType>;
      /**
       * Invalid withdraw liquidity target asset amount.
       **/
      InvalidWithdrawLiquidityTargetAssetAmount: AugmentedError<ApiType>;
      /**
       * Pair swap action fee is smaller than recommended.
       **/
      PairSwapActionFeeIsSmallerThanRecommended: AugmentedError<ApiType>;
      /**
       * Pair swap action minimum liquidity is smaller than recommended.
       **/
      PairSwapActionMinimumLiquidityIsSmallerThanRecommended: AugmentedError<ApiType>;
      /**
       * Pool becomes invalid after operation.
       **/
      PoolBecameInvalidAfterOperation: AugmentedError<ApiType>;
      /**
       * The pool initialization is invalid and has failed.
       **/
      PoolInitializationIsInvalid: AugmentedError<ApiType>;
      /**
       * The pool is already initialized.
       **/
      PoolIsAlreadyInitialized: AugmentedError<ApiType>;
      /**
       * The pool has empty liquidity.
       **/
      PoolIsEmpty: AugmentedError<ApiType>;
      /**
       * The balance structure of pool is invalid.
       **/
      PoolIsInvalid: AugmentedError<ApiType>;
      /**
       * Pool pair ratio and pair swap ratio are different.
       **/
      PoolPairRatioAndPairSwapRatioIsDifferent: AugmentedError<ApiType>;
      /**
       * Pool token supply has reached limit of data type.
       **/
      PoolTokenSupplyOverflow: AugmentedError<ApiType>;
      /**
       * This range values is not validy by rules of correct range.
       **/
      RangeValuesIsInvalid: AugmentedError<ApiType>;
      /**
       * Some values need to be same, the source amount must be same.
       **/
      SourceAmountMustBeSame: AugmentedError<ApiType>;
      /**
       * Source and client accounts do not match as equal.
       **/
      SourceAndClientAccountDoNotMatchAsEqual: AugmentedError<ApiType>;
      /**
       * Source balance is not large enough.
       **/
      SourceBalanceIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Source balance of liquidity is not large enough.
       **/
      SourceBalanceOfLiquidityTokensIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Source base amount is not large enough.
       **/
      SourceBaseAmountIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Source base amount is too large.
       **/
      SourceBaseAmountIsTooLarge: AugmentedError<ApiType>;
      /**
       * Target balance is not large enough.
       **/
      TargetBalanceIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Target base amount is not large enough.
       **/
      TargetBaseAmountIsNotLargeEnough: AugmentedError<ApiType>;
      /**
       * Technical asset is not representable.
       **/
      TechAssetIsNotRepresentable: AugmentedError<ApiType>;
      /**
       * This case if not supported by logic of pool of validation code.
       **/
      ThisCaseIsNotSupported: AugmentedError<ApiType>;
      /**
       * It is impossible to calculate fee for some pair swap operation, or other operation.
       **/
      UnableToCalculateFee: AugmentedError<ApiType>;
      /**
       * Unable to convert asset to tech asset id.
       **/
      UnableToConvertAssetToTechAssetId: AugmentedError<ApiType>;
      /**
       * Unable or impossible to decide marker asset.
       **/
      UnableToDecideMarkerAsset: AugmentedError<ApiType>;
      /**
       * Unable to provide liquidity because its XOR part is lesser than the minimum value (0.007)
       **/
      UnableToDepositXorLessThanMinimum: AugmentedError<ApiType>;
      /**
       * It is not possible to derive fee account.
       **/
      UnableToDeriveFeeAccount: AugmentedError<ApiType>;
      /**
       * Unable or impossible to get asset representation.
       **/
      UnableToGetAssetRepr: AugmentedError<ApiType>;
      /**
       * Is is impossible to get balance.
       **/
      UnableToGetBalance: AugmentedError<ApiType>;
      /**
       * Unable to get XOR part from marker asset.
       **/
      UnableToGetXORPartFromMarkerAsset: AugmentedError<ApiType>;
      /**
       * Attempt to quote via unsupported path, i.e. both output and input tokens are not XOR.
       **/
      UnsupportedQuotePath: AugmentedError<ApiType>;
      /**
       * Amount parameter has zero value, it is invalid.
       **/
      ZeroValueInAmountParameter: AugmentedError<ApiType>;
    };
    priceTools: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * AssetId has been already registered.
       **/
      AssetAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Failed to calculate new average price.
       **/
      AveragePriceCalculationFailed: AugmentedError<ApiType>;
      /**
       * Failed to perform quote to get average price.
       **/
      FailedToQuoteAveragePrice: AugmentedError<ApiType>;
      /**
       * Either spot price records has been reset or not initialized yet. Wait till spot price
       * quote is recovered and span is recalculated.
       **/
      InsufficientSpotPriceData: AugmentedError<ApiType>;
      /**
       * Requested quote path is not supported.
       **/
      UnsupportedQuotePath: AugmentedError<ApiType>;
      /**
       * Failed to add new spot price to average.
       **/
      UpdateAverageWithSpotPriceFailed: AugmentedError<ApiType>;
    };
    pswapDistribution: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Error occurred during calculation, e.g. underflow/overflow of share amount.
       **/
      CalculationError: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * Error while setting frequency, subscription can only be invoked for frequency value >= 1.
       **/
      InvalidFrequency: AugmentedError<ApiType>;
      /**
       * Error while attempting to subscribe Account which is already subscribed.
       **/
      SubscriptionActive: AugmentedError<ApiType>;
      /**
       * Error while attempting to unsubscribe Account which is not subscribed.
       **/
      UnknownSubscription: AugmentedError<ApiType>;
      /**
       * Can't claim incentives as none is available for account at the moment.
       **/
      ZeroClaimableIncentives: AugmentedError<ApiType>;
    };
    referralSystem: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account already has a referrer.
       **/
      AlreadyHasReferrer: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
    };
    rewards: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Address is not eligible for any rewards
       **/
      AddressNotEligible: AugmentedError<ApiType>;
      /**
       * Occurs if an attempt to repeat the unclaimed VAL data update is made
       **/
      IllegalCall: AugmentedError<ApiType>;
      /**
       * The account has no claimable rewards at the time of claiming request
       **/
      NothingToClaim: AugmentedError<ApiType>;
      /**
       * The signature is invalid
       **/
      SignatureInvalid: AugmentedError<ApiType>;
      /**
       * The signature verification failed
       **/
      SignatureVerificationFailed: AugmentedError<ApiType>;
    };
    scheduler: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
    };
    session: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
    };
    staking: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedError<ApiType>;
      /**
       * Internal state has become somehow corrupted and the operation cannot continue.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * A nomination target was supplied that was blocked or otherwise not a validator.
       **/
      BadTarget: AugmentedError<ApiType>;
      /**
       * The call is not allowed at the given time due to restrictions of election period.
       **/
      CallNotAllowed: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Can not bond with value less than minimum balance.
       **/
      InsufficientValue: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * Error while building the assignment type from the compact. This can happen if an index
       * is invalid, or if the weights _overflow_.
       **/
      OffchainElectionBogusCompact: AugmentedError<ApiType>;
      /**
       * The submitted result has unknown edges that are not among the presented winners.
       **/
      OffchainElectionBogusEdge: AugmentedError<ApiType>;
      /**
       * The election size is invalid.
       **/
      OffchainElectionBogusElectionSize: AugmentedError<ApiType>;
      /**
       * One of the submitted nominators has an edge to which they have not voted on chain.
       **/
      OffchainElectionBogusNomination: AugmentedError<ApiType>;
      /**
       * One of the submitted nominators is not an active nominator on chain.
       **/
      OffchainElectionBogusNominator: AugmentedError<ApiType>;
      /**
       * The claimed score does not match with the one computed from the data.
       **/
      OffchainElectionBogusScore: AugmentedError<ApiType>;
      /**
       * A self vote must only be originated from a validator to ONLY themselves.
       **/
      OffchainElectionBogusSelfVote: AugmentedError<ApiType>;
      /**
       * One of the submitted winners is not an active candidate on chain (index is out of range
       * in snapshot).
       **/
      OffchainElectionBogusWinner: AugmentedError<ApiType>;
      /**
       * Incorrect number of winners were presented.
       **/
      OffchainElectionBogusWinnerCount: AugmentedError<ApiType>;
      /**
       * The submitted result is received out of the open window.
       **/
      OffchainElectionEarlySubmission: AugmentedError<ApiType>;
      /**
       * One of the submitted nominators has an edge which is submitted before the last non-zero
       * slash of the target.
       **/
      OffchainElectionSlashedNomination: AugmentedError<ApiType>;
      /**
       * The submitted result is not as good as the one stored on chain.
       **/
      OffchainElectionWeakSubmission: AugmentedError<ApiType>;
      /**
       * The snapshot data of the current window is missing.
       **/
      SnapshotUnavailable: AugmentedError<ApiType>;
      /**
       * Too many nomination targets supplied.
       **/
      TooManyTargets: AugmentedError<ApiType>;
    };
    sudo: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
    };
    system: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
    };
    technical: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Swap has already been claimed.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Swap already exists.
       **/
      AlreadyExist: AugmentedError<ApiType>;
      /**
       * Associated `AccountId` not found with a given `TechnicalAccountId`.
       **/
      AssociatedAccountIdNotFound: AugmentedError<ApiType>;
      /**
       * Claim action mismatch.
       **/
      ClaimActionMismatch: AugmentedError<ApiType>;
      /**
       * Failed to decode `AccountId` from a hash.
       **/
      DecodeAccountIdFailed: AugmentedError<ApiType>;
      /**
       * Duration has not yet passed for the swap to be cancelled.
       **/
      DurationNotPassed: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Swap proof is invalid.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * This function or ablility is still not implemented.
       **/
      NotImplemented: AugmentedError<ApiType>;
      /**
       * If argument must be technical, and only regular values inside it is allowed
       **/
      OnlyPureTechnicalAccount: AugmentedError<ApiType>;
      /**
       * If argument must be technical, and only regular values inside it is allowed
       **/
      OnlyRegularAccount: AugmentedError<ApiType>;
      /**
       * If argument must be technical, and only regular values inside it is allowed
       **/
      OnlyRegularAsset: AugmentedError<ApiType>;
      /**
       * If argument must be technical, and only regular values inside it is allowed
       **/
      OnlyRegularBalance: AugmentedError<ApiType>;
      /**
       * Operation with abstract checking is impossible.
       **/
      OperationWithAbstractCheckingIsImposible: AugmentedError<ApiType>;
      /**
       * Got an overflow after adding.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Type must sport mapping from hash to special subset of `AccountId32`
       **/
      RepresentativeMustBeSupported: AugmentedError<ApiType>;
      /**
       * Source does not match.
       **/
      SourceMismatch: AugmentedError<ApiType>;
      /**
       * Errors should have helpful documentation associated with them.
       **/
      StorageOverflow: AugmentedError<ApiType>;
      /**
       * It is not posible to find record in storage map about `AccountId32` representation for
       * technical account.
       **/
      TechAccountIdIsNotRegistered: AugmentedError<ApiType>;
      /**
       * If argument must be technical, and only pure technical value is allowed
       **/
      TechAccountIdMustBePure: AugmentedError<ApiType>;
      /**
       * It is not posible to extract code from `AccountId32` as representation
       * or find it in storage.
       **/
      UnableToGetReprFromTechAccountId: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
    };
    tokens: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * This operation will cause balance to overflow
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Account still has active reserved
       **/
      StillHasActiveReserved: AugmentedError<ApiType>;
      /**
       * This operation will cause total issuance to overflow
       **/
      TotalIssuanceOverflow: AugmentedError<ApiType>;
    };
    tradingPair: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The specified base asset ID for the trading pair is not allowed.
       **/
      ForbiddenBaseAssetId: AugmentedError<ApiType>;
      /**
       * The specified base asset ID is the same as target asset ID.
       **/
      IdenticalAssetIds: AugmentedError<ApiType>;
      /**
       * Trading pair is not registered for given DEXId.
       **/
      TradingPairDoesntExist: AugmentedError<ApiType>;
      /**
       * Registering trading pair already exists.
       **/
      TradingPairExists: AugmentedError<ApiType>;
    };
    vestedRewards: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * Account has pending rewards but it has not been vested yet.
       **/
      ClaimLimitExceeded: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * Account has no pending rewards to claim.
       **/
      NothingToClaim: AugmentedError<ApiType>;
      /**
       * Account holding dedicated reward reserves is empty. This likely means that some of reward programmes have finished.
       **/
      RewardsSupplyShortage: AugmentedError<ApiType>;
      /**
       * Attempt to claim rewards of type, which is not handled.
       **/
      UnhandledRewardType: AugmentedError<ApiType>;
    };
    xstPool: {
      [key: string]: AugmentedError<ApiType>;
      /**
       * The pool can't perform exchange on itself.
       **/
      CannotExchangeWithSelf: AugmentedError<ApiType>;
      /**
       * Liquidity source can't exchange assets with the given IDs on the given DEXId.
       **/
      CantExchange: AugmentedError<ApiType>;
      /**
       * Failure while calculating price ignoring non-linearity of liquidity source.
       **/
      FailedToCalculatePriceWithoutImpact: AugmentedError<ApiType>;
      /**
       * Could not calculate fee.
       **/
      FeeCalculationFailed: AugmentedError<ApiType>;
      /**
       * Increment account reference error.
       **/
      IncRefError: AugmentedError<ApiType>;
      /**
       * Attempt to initialize pool for pair that already exists.
       **/
      PoolAlreadyInitializedForPair: AugmentedError<ApiType>;
      /**
       * Attempt to get info for uninitialized pool.
       **/
      PoolNotInitialized: AugmentedError<ApiType>;
      /**
       * An error occurred while calculating the price.
       **/
      PriceCalculationFailed: AugmentedError<ApiType>;
      /**
       * Indicated limits for slippage has not been met during transaction execution.
       **/
      SlippageLimitExceeded: AugmentedError<ApiType>;
      /**
       * Indicated collateral asset is not enabled for pool.
       **/
      UnsupportedCollateralAssetId: AugmentedError<ApiType>;
    };
  }

  export interface DecoratedErrors<ApiType extends ApiTypes> extends AugmentedErrors<ApiType> {
    [key: string]: ModuleErrors<ApiType>;
  }
}
