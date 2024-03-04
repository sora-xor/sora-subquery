import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     *  A new multisig operation has begun. \[approving, multisig, call_hash\]
     */
    v33: new EventType(
        'Multisig.NewMultisig',
        sts.tuple([v33.AccountId, v33.AccountId, v33.CallHash])
    ),
    /**
     * A new multisig operation has begun.
     */
    v42: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: v42.AccountId32,
            multisig: v42.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     *  A multisig operation has been approved by someone.
     *  \[approving, timepoint, multisig, call_hash\]
     */
    v33: new EventType(
        'Multisig.MultisigApproval',
        sts.tuple([v33.AccountId, v33.Timepoint, v33.AccountId, v33.CallHash])
    ),
    /**
     * A multisig operation has been approved by someone.
     */
    v42: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: v42.AccountId32,
            timepoint: v42.Timepoint,
            multisig: v42.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     *  A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
     */
    v33: new EventType(
        'Multisig.MultisigExecuted',
        sts.tuple([v33.AccountId, v33.Timepoint, v33.AccountId, v33.CallHash, v33.DispatchResult])
    ),
    /**
     * A multisig operation has been executed.
     */
    v42: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v42.AccountId32,
            timepoint: v42.Timepoint,
            multisig: v42.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v42.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v52: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v52.AccountId32,
            timepoint: v52.Timepoint,
            multisig: v52.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v52.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     *  A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
     */
    v33: new EventType(
        'Multisig.MultisigCancelled',
        sts.tuple([v33.AccountId, v33.Timepoint, v33.AccountId, v33.CallHash])
    ),
    /**
     * A multisig operation has been cancelled.
     */
    v42: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: v42.AccountId32,
            timepoint: v42.Timepoint,
            multisig: v42.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
