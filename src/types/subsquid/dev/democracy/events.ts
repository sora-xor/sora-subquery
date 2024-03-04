import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    v70: new EventType(
        'Democracy.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const tabled =  {
    name: 'Democracy.Tabled',
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v70: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const externalTabled =  {
    name: 'Democracy.ExternalTabled',
    /**
     * An external proposal has been tabled.
     */
    v70: new EventType(
        'Democracy.ExternalTabled',
        sts.unit()
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     * A referendum has begun.
     */
    v70: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v70.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    v70: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     * A proposal has been rejected by referendum.
     */
    v70: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    v70: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const delegated =  {
    name: 'Democracy.Delegated',
    /**
     * An account has delegated their vote to another account.
     */
    v70: new EventType(
        'Democracy.Delegated',
        sts.struct({
            who: v70.AccountId32,
            target: v70.AccountId32,
        })
    ),
}

export const undelegated =  {
    name: 'Democracy.Undelegated',
    /**
     * An account has cancelled a previous delegation operation.
     */
    v70: new EventType(
        'Democracy.Undelegated',
        sts.struct({
            account: v70.AccountId32,
        })
    ),
}

export const vetoed =  {
    name: 'Democracy.Vetoed',
    /**
     * An external proposal has been vetoed.
     */
    v70: new EventType(
        'Democracy.Vetoed',
        sts.struct({
            who: v70.AccountId32,
            proposalHash: v70.H256,
            until: sts.number(),
        })
    ),
}

export const blacklisted =  {
    name: 'Democracy.Blacklisted',
    /**
     * A proposal_hash has been blacklisted permanently.
     */
    v70: new EventType(
        'Democracy.Blacklisted',
        sts.struct({
            proposalHash: v70.H256,
        })
    ),
}

export const voted =  {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    v70: new EventType(
        'Democracy.Voted',
        sts.struct({
            voter: v70.AccountId32,
            refIndex: sts.number(),
            vote: v70.AccountVote,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v70: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v70.AccountId32,
            propIndex: sts.number(),
        })
    ),
}

export const proposalCanceled =  {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    v70: new EventType(
        'Democracy.ProposalCanceled',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}
