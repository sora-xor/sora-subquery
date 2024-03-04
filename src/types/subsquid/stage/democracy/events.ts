import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     *  A motion has been proposed by a public account. \[proposal_index, deposit\]
     */
    v33: new EventType(
        'Democracy.Proposed',
        sts.tuple([v33.PropIndex, v33.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v42: new EventType(
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
     *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
     */
    v33: new EventType(
        'Democracy.Tabled',
        sts.tuple([v33.PropIndex, v33.Balance, sts.array(() => v33.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v42: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v42.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v52: new EventType(
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
     *  An external proposal has been tabled.
     */
    v33: new EventType(
        'Democracy.ExternalTabled',
        sts.unit()
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     *  A referendum has begun. \[ref_index, threshold\]
     */
    v33: new EventType(
        'Democracy.Started',
        sts.tuple([v33.ReferendumIndex, v33.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v42: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v42.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     *  A proposal has been approved by referendum. \[ref_index\]
     */
    v33: new EventType(
        'Democracy.Passed',
        v33.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v42: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     *  A proposal has been rejected by referendum. \[ref_index\]
     */
    v33: new EventType(
        'Democracy.NotPassed',
        v33.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v42: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     *  A referendum has been cancelled. \[ref_index\]
     */
    v33: new EventType(
        'Democracy.Cancelled',
        v33.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v42: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    /**
     *  A proposal has been enacted. \[ref_index, is_ok\]
     */
    v33: new EventType(
        'Democracy.Executed',
        sts.tuple([v33.ReferendumIndex, sts.boolean()])
    ),
    /**
     * A proposal has been enacted.
     */
    v42: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
}

export const delegated =  {
    name: 'Democracy.Delegated',
    /**
     *  An account has delegated their vote to another account. \[who, target\]
     */
    v33: new EventType(
        'Democracy.Delegated',
        sts.tuple([v33.AccountId, v33.AccountId])
    ),
    /**
     * An account has delegated their vote to another account.
     */
    v42: new EventType(
        'Democracy.Delegated',
        sts.struct({
            who: v42.AccountId32,
            target: v42.AccountId32,
        })
    ),
}

export const undelegated =  {
    name: 'Democracy.Undelegated',
    /**
     *  An \[account\] has cancelled a previous delegation operation.
     */
    v33: new EventType(
        'Democracy.Undelegated',
        v33.AccountId
    ),
    /**
     * An account has cancelled a previous delegation operation.
     */
    v42: new EventType(
        'Democracy.Undelegated',
        sts.struct({
            account: v42.AccountId32,
        })
    ),
}

export const vetoed =  {
    name: 'Democracy.Vetoed',
    /**
     *  An external proposal has been vetoed. \[who, proposal_hash, until\]
     */
    v33: new EventType(
        'Democracy.Vetoed',
        sts.tuple([v33.AccountId, v33.Hash, v33.BlockNumber])
    ),
    /**
     * An external proposal has been vetoed.
     */
    v42: new EventType(
        'Democracy.Vetoed',
        sts.struct({
            who: v42.AccountId32,
            proposalHash: v42.H256,
            until: sts.number(),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
     */
    v33: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v33.Hash, v33.AccountId, v33.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v42: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v42.H256,
            who: v42.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     *  \[proposal_hash, provider, deposit\]
     */
    v33: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v33.Hash, v33.AccountId, v33.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v42: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v42.H256,
            provider: v42.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     *  A proposal could not be executed because its preimage was invalid.
     *  \[proposal_hash, ref_index\]
     */
    v33: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v33.Hash, v33.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v42: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v42.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     *  A proposal could not be executed because its preimage was missing.
     *  \[proposal_hash, ref_index\]
     */
    v33: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v33.Hash, v33.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v42: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v42.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     *  A registered preimage was removed and the deposit collected by the reaper.
     *  \[proposal_hash, provider, deposit, reaper\]
     */
    v33: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v33.Hash, v33.AccountId, v33.Balance, v33.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v42: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v42.H256,
            provider: v42.AccountId32,
            deposit: sts.bigint(),
            reaper: v42.AccountId32,
        })
    ),
}

export const unlocked =  {
    name: 'Democracy.Unlocked',
    /**
     *  An \[account\] has been unlocked successfully.
     */
    v33: new EventType(
        'Democracy.Unlocked',
        v33.AccountId
    ),
}

export const blacklisted =  {
    name: 'Democracy.Blacklisted',
    /**
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    v33: new EventType(
        'Democracy.Blacklisted',
        v33.Hash
    ),
    /**
     * A proposal_hash has been blacklisted permanently.
     */
    v42: new EventType(
        'Democracy.Blacklisted',
        sts.struct({
            proposalHash: v42.H256,
        })
    ),
}

export const voted =  {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    v42: new EventType(
        'Democracy.Voted',
        sts.struct({
            voter: v42.AccountId32,
            refIndex: sts.number(),
            vote: v42.AccountVote,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v42: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v42.AccountId32,
            propIndex: sts.number(),
        })
    ),
}

export const proposalCanceled =  {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    v42: new EventType(
        'Democracy.ProposalCanceled',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}
