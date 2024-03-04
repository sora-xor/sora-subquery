import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const proposed =  {
    name: 'TechnicalCommittee.Proposed',
    /**
     *  A motion (given hash) has been proposed (by given account) with a threshold (given
     *  `MemberCount`).
     *  \[account, proposal_index, proposal_hash, threshold\]
     */
    v1: new EventType(
        'TechnicalCommittee.Proposed',
        sts.tuple([v1.AccountId, v1.ProposalIndex, v1.Hash, v1.MemberCount])
    ),
    /**
     * A motion (given hash) has been proposed (by given account) with a threshold (given
     * `MemberCount`).
     */
    v42: new EventType(
        'TechnicalCommittee.Proposed',
        sts.struct({
            account: v42.AccountId32,
            proposalIndex: sts.number(),
            proposalHash: v42.H256,
            threshold: sts.number(),
        })
    ),
}

export const voted =  {
    name: 'TechnicalCommittee.Voted',
    /**
     *  A motion (given hash) has been voted on by given account, leaving
     *  a tally (yes votes and no votes given respectively as `MemberCount`).
     *  \[account, proposal_hash, voted, yes, no\]
     */
    v1: new EventType(
        'TechnicalCommittee.Voted',
        sts.tuple([v1.AccountId, v1.Hash, sts.boolean(), v1.MemberCount, v1.MemberCount])
    ),
    /**
     * A motion (given hash) has been voted on by given account, leaving
     * a tally (yes votes and no votes given respectively as `MemberCount`).
     */
    v42: new EventType(
        'TechnicalCommittee.Voted',
        sts.struct({
            account: v42.AccountId32,
            proposalHash: v42.H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}

export const approved =  {
    name: 'TechnicalCommittee.Approved',
    /**
     *  A motion was approved by the required threshold.
     *  \[proposal_hash\]
     */
    v1: new EventType(
        'TechnicalCommittee.Approved',
        v1.Hash
    ),
    /**
     * A motion was approved by the required threshold.
     */
    v42: new EventType(
        'TechnicalCommittee.Approved',
        sts.struct({
            proposalHash: v42.H256,
        })
    ),
}

export const disapproved =  {
    name: 'TechnicalCommittee.Disapproved',
    /**
     *  A motion was not approved by the required threshold.
     *  \[proposal_hash\]
     */
    v1: new EventType(
        'TechnicalCommittee.Disapproved',
        v1.Hash
    ),
    /**
     * A motion was not approved by the required threshold.
     */
    v42: new EventType(
        'TechnicalCommittee.Disapproved',
        sts.struct({
            proposalHash: v42.H256,
        })
    ),
}

export const executed =  {
    name: 'TechnicalCommittee.Executed',
    /**
     *  A motion was executed; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    v1: new EventType(
        'TechnicalCommittee.Executed',
        sts.tuple([v1.Hash, v1.DispatchResult])
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v42: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v42.H256,
            result: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
    /**
     * A motion was executed; result will be `Ok` if it returned without error.
     */
    v53: new EventType(
        'TechnicalCommittee.Executed',
        sts.struct({
            proposalHash: v53.H256,
            result: sts.result(() => sts.unit(), () => v53.DispatchError),
        })
    ),
}

export const memberExecuted =  {
    name: 'TechnicalCommittee.MemberExecuted',
    /**
     *  A single member did some action; result will be `Ok` if it returned without error.
     *  \[proposal_hash, result\]
     */
    v1: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.tuple([v1.Hash, v1.DispatchResult])
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v42: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: v42.H256,
            result: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
    /**
     * A single member did some action; result will be `Ok` if it returned without error.
     */
    v53: new EventType(
        'TechnicalCommittee.MemberExecuted',
        sts.struct({
            proposalHash: v53.H256,
            result: sts.result(() => sts.unit(), () => v53.DispatchError),
        })
    ),
}

export const closed =  {
    name: 'TechnicalCommittee.Closed',
    /**
     *  A proposal was closed because its threshold was reached or after its duration was up.
     *  \[proposal_hash, yes, no\]
     */
    v1: new EventType(
        'TechnicalCommittee.Closed',
        sts.tuple([v1.Hash, v1.MemberCount, v1.MemberCount])
    ),
    /**
     * A proposal was closed because its threshold was reached or after its duration was up.
     */
    v42: new EventType(
        'TechnicalCommittee.Closed',
        sts.struct({
            proposalHash: v42.H256,
            yes: sts.number(),
            no: sts.number(),
        })
    ),
}
