import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v53 from '../v53'

export const vote =  {
    name: 'ElectionsPhragmen.vote',
    /**
     *  Vote for a set of candidates for the upcoming round of election. This can be called to
     *  set the initial votes, or update already existing votes.
     * 
     *  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
     *  reserved. The deposit is based on the number of votes and can be updated over time.
     * 
     *  The `votes` should:
     *    - not be empty.
     *    - be less than the number of possible candidates. Note that all current members and
     *      runners-up are also automatically candidates for the next round.
     * 
     *  If `value` is more than `who`'s total balance, then the maximum of the two is used.
     * 
     *  The dispatch origin of this call must be signed.
     * 
     *  ### Warning
     * 
     *  It is the responsibility of the caller to **NOT** place all of their balance into the
     *  lock and keep some for further operations.
     * 
     *  # <weight>
     *  We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
     *  # </weight>
     */
    v1: new CallType(
        'ElectionsPhragmen.vote',
        sts.struct({
            votes: sts.array(() => v1.AccountId),
            value: sts.bigint(),
        })
    ),
}

export const removeVoter =  {
    name: 'ElectionsPhragmen.remove_voter',
    /**
     *  Remove `origin` as a voter.
     * 
     *  This removes the lock and returns the deposit.
     * 
     *  The dispatch origin of this call must be signed and be a voter.
     */
    v1: new CallType(
        'ElectionsPhragmen.remove_voter',
        sts.unit()
    ),
}

export const submitCandidacy =  {
    name: 'ElectionsPhragmen.submit_candidacy',
    /**
     *  Submit oneself for candidacy. A fixed amount of deposit is recorded.
     * 
     *  All candidates are wiped at the end of the term. They either become a member/runner-up,
     *  or leave the system while their deposit is slashed.
     * 
     *  The dispatch origin of this call must be signed.
     * 
     *  ### Warning
     * 
     *  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
     *  to get their deposit back. Losing the spot in an election will always lead to a slash.
     * 
     *  # <weight>
     *  The number of current candidates must be provided as witness data.
     *  # </weight>
     */
    v1: new CallType(
        'ElectionsPhragmen.submit_candidacy',
        sts.struct({
            candidateCount: sts.number(),
        })
    ),
}

export const renounceCandidacy =  {
    name: 'ElectionsPhragmen.renounce_candidacy',
    /**
     *  Renounce one's intention to be a candidate for the next election round. 3 potential
     *  outcomes exist:
     * 
     *  - `origin` is a candidate and not elected in any set. In this case, the deposit is
     *    unreserved, returned and origin is removed as a candidate.
     *  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
     *    origin is removed as a runner-up.
     *  - `origin` is a current member. In this case, the deposit is unreserved and origin is
     *    removed as a member, consequently not being a candidate for the next round anymore.
     *    Similar to [`remove_members`], if replacement runners exists, they are immediately used.
     *    If the prime is renouncing, then no prime will exist until the next round.
     * 
     *  The dispatch origin of this call must be signed, and have one of the above roles.
     * 
     *  # <weight>
     *  The type of renouncing must be provided as witness data.
     *  # </weight>
     */
    v1: new CallType(
        'ElectionsPhragmen.renounce_candidacy',
        sts.struct({
            renouncing: v1.Renouncing,
        })
    ),
}

export const removeMember =  {
    name: 'ElectionsPhragmen.remove_member',
    /**
     *  Remove a particular member from the set. This is effective immediately and the bond of
     *  the outgoing member is slashed.
     * 
     *  If a runner-up is available, then the best runner-up will be removed and replaces the
     *  outgoing member. Otherwise, a new phragmen election is started.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  Note that this does not affect the designated block number of the next election.
     * 
     *  # <weight>
     *  If we have a replacement, we use a small weight. Else, since this is a root call and
     *  will go into phragmen, we assume full block for now.
     *  # </weight>
     */
    v1: new CallType(
        'ElectionsPhragmen.remove_member',
        sts.struct({
            who: v1.LookupSource,
            hasReplacement: sts.boolean(),
        })
    ),
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
    v53: new CallType(
        'ElectionsPhragmen.remove_member',
        sts.struct({
            who: v53.AccountId32,
            slashBond: sts.boolean(),
            rerunElection: sts.boolean(),
        })
    ),
}

export const cleanDefunctVoters =  {
    name: 'ElectionsPhragmen.clean_defunct_voters',
    /**
     *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
     *  deposit of the removed voters are returned.
     * 
     *  This is an root function to be used only for cleaning the state.
     * 
     *  The dispatch origin of this call must be root.
     * 
     *  # <weight>
     *  The total number of voters and those that are defunct must be provided as witness data.
     *  # </weight>
     */
    v1: new CallType(
        'ElectionsPhragmen.clean_defunct_voters',
        sts.struct({
            numVoters: sts.number(),
            numDefunct: sts.number(),
        })
    ),
}
