import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const propose =  {
    name: 'Democracy.propose',
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
    v1: new CallType(
        'Democracy.propose',
        sts.struct({
            proposalHash: v1.Hash,
            value: sts.bigint(),
        })
    ),
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
    v53: new CallType(
        'Democracy.propose',
        sts.struct({
            proposal: v53.Bounded,
            value: sts.bigint(),
        })
    ),
}

export const second =  {
    name: 'Democracy.second',
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
    v1: new CallType(
        'Democracy.second',
        sts.struct({
            proposal: sts.number(),
            secondsUpperBound: sts.number(),
        })
    ),
    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    v53: new CallType(
        'Democracy.second',
        sts.struct({
            proposal: sts.number(),
        })
    ),
}

export const vote =  {
    name: 'Democracy.vote',
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
    v1: new CallType(
        'Democracy.vote',
        sts.struct({
            refIndex: sts.number(),
            vote: v1.AccountVote,
        })
    ),
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
    v42: new CallType(
        'Democracy.vote',
        sts.struct({
            refIndex: sts.number(),
            vote: v42.AccountVote,
        })
    ),
}

export const emergencyCancel =  {
    name: 'Democracy.emergency_cancel',
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
    v1: new CallType(
        'Democracy.emergency_cancel',
        sts.struct({
            refIndex: v1.ReferendumIndex,
        })
    ),
}

export const externalPropose =  {
    name: 'Democracy.external_propose',
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
    v1: new CallType(
        'Democracy.external_propose',
        sts.struct({
            proposalHash: v1.Hash,
        })
    ),
    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    v53: new CallType(
        'Democracy.external_propose',
        sts.struct({
            proposal: v53.Bounded,
        })
    ),
}

export const externalProposeMajority =  {
    name: 'Democracy.external_propose_majority',
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
    v1: new CallType(
        'Democracy.external_propose_majority',
        sts.struct({
            proposalHash: v1.Hash,
        })
    ),
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
    v53: new CallType(
        'Democracy.external_propose_majority',
        sts.struct({
            proposal: v53.Bounded,
        })
    ),
}

export const externalProposeDefault =  {
    name: 'Democracy.external_propose_default',
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
    v1: new CallType(
        'Democracy.external_propose_default',
        sts.struct({
            proposalHash: v1.Hash,
        })
    ),
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
    v53: new CallType(
        'Democracy.external_propose_default',
        sts.struct({
            proposal: v53.Bounded,
        })
    ),
}

export const fastTrack =  {
    name: 'Democracy.fast_track',
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
    v1: new CallType(
        'Democracy.fast_track',
        sts.struct({
            proposalHash: v1.Hash,
            votingPeriod: v1.BlockNumber,
            delay: v1.BlockNumber,
        })
    ),
}

export const vetoExternal =  {
    name: 'Democracy.veto_external',
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
    v1: new CallType(
        'Democracy.veto_external',
        sts.struct({
            proposalHash: v1.Hash,
        })
    ),
}

export const cancelReferendum =  {
    name: 'Democracy.cancel_referendum',
    /**
     *  Remove a referendum.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `ref_index`: The index of the referendum to cancel.
     * 
     *  # Weight: `O(1)`.
     */
    v1: new CallType(
        'Democracy.cancel_referendum',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelQueued =  {
    name: 'Democracy.cancel_queued',
    /**
     *  Cancel a proposal queued for enactment.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  - `which`: The index of the referendum to cancel.
     * 
     *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
     */
    v1: new CallType(
        'Democracy.cancel_queued',
        sts.struct({
            which: v1.ReferendumIndex,
        })
    ),
}

export const delegate =  {
    name: 'Democracy.delegate',
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
    v1: new CallType(
        'Democracy.delegate',
        sts.struct({
            to: v1.AccountId,
            conviction: v1.Conviction,
            balance: v1.BalanceOf,
        })
    ),
}

export const undelegate =  {
    name: 'Democracy.undelegate',
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
    v1: new CallType(
        'Democracy.undelegate',
        sts.unit()
    ),
}

export const clearPublicProposals =  {
    name: 'Democracy.clear_public_proposals',
    /**
     *  Clears all public proposals.
     * 
     *  The dispatch origin of this call must be _Root_.
     * 
     *  Weight: `O(1)`.
     */
    v1: new CallType(
        'Democracy.clear_public_proposals',
        sts.unit()
    ),
}

export const notePreimage =  {
    name: 'Democracy.note_preimage',
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
    v1: new CallType(
        'Democracy.note_preimage',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const notePreimageOperational =  {
    name: 'Democracy.note_preimage_operational',
    /**
     *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
     */
    v1: new CallType(
        'Democracy.note_preimage_operational',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const noteImminentPreimage =  {
    name: 'Democracy.note_imminent_preimage',
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
    v1: new CallType(
        'Democracy.note_imminent_preimage',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const noteImminentPreimageOperational =  {
    name: 'Democracy.note_imminent_preimage_operational',
    /**
     *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
     */
    v1: new CallType(
        'Democracy.note_imminent_preimage_operational',
        sts.struct({
            encodedProposal: sts.bytes(),
        })
    ),
}

export const reapPreimage =  {
    name: 'Democracy.reap_preimage',
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
    v1: new CallType(
        'Democracy.reap_preimage',
        sts.struct({
            proposalHash: v1.Hash,
            proposalLenUpperBound: sts.number(),
        })
    ),
}

export const unlock =  {
    name: 'Democracy.unlock',
    /**
     *  Unlock tokens that have an expired lock.
     * 
     *  The dispatch origin of this call must be _Signed_.
     * 
     *  - `target`: The account to remove the lock on.
     * 
     *  Weight: `O(R)` with R number of vote of target.
     */
    v1: new CallType(
        'Democracy.unlock',
        sts.struct({
            target: v1.AccountId,
        })
    ),
}

export const removeVote =  {
    name: 'Democracy.remove_vote',
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
    v1: new CallType(
        'Democracy.remove_vote',
        sts.struct({
            index: v1.ReferendumIndex,
        })
    ),
}

export const removeOtherVote =  {
    name: 'Democracy.remove_other_vote',
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
    v1: new CallType(
        'Democracy.remove_other_vote',
        sts.struct({
            target: v1.AccountId,
            index: v1.ReferendumIndex,
        })
    ),
}

export const enactProposal =  {
    name: 'Democracy.enact_proposal',
    /**
     *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
     */
    v1: new CallType(
        'Democracy.enact_proposal',
        sts.struct({
            proposalHash: v1.Hash,
            index: v1.ReferendumIndex,
        })
    ),
}

export const blacklist =  {
    name: 'Democracy.blacklist',
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
    v1: new CallType(
        'Democracy.blacklist',
        sts.struct({
            proposalHash: v1.Hash,
            maybeRefIndex: sts.option(() => v1.ReferendumIndex),
        })
    ),
}

export const cancelProposal =  {
    name: 'Democracy.cancel_proposal',
    /**
     *  Remove a proposal.
     * 
     *  The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     *  - `prop_index`: The index of the proposal to cancel.
     * 
     *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    v1: new CallType(
        'Democracy.cancel_proposal',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}
