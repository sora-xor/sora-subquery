import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    v70: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: v70.AccountId32,
            multisig: v70.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    v70: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: v70.AccountId32,
            timepoint: v70.Timepoint,
            multisig: v70.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    v70: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v70.AccountId32,
            timepoint: v70.Timepoint,
            multisig: v70.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v70.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    v70: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: v70.AccountId32,
            timepoint: v70.Timepoint,
            multisig: v70.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
