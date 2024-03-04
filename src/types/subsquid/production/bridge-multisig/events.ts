import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const multisigAccountCreated =  {
    name: 'BridgeMultisig.MultisigAccountCreated',
    /**
     *  A new multisig created. [multisig]
     */
    v1: new EventType(
        'BridgeMultisig.MultisigAccountCreated',
        v1.AccountId
    ),
}

export const newMultisig =  {
    name: 'BridgeMultisig.NewMultisig',
    /**
     *  A new multisig operation has begun. [approving, multisig, call_hash]
     */
    v1: new EventType(
        'BridgeMultisig.NewMultisig',
        sts.tuple([v1.AccountId, v1.AccountId, sts.bytes()])
    ),
}

export const multisigApproval =  {
    name: 'BridgeMultisig.MultisigApproval',
    /**
     *  A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
     */
    v1: new EventType(
        'BridgeMultisig.MultisigApproval',
        sts.tuple([v1.AccountId, v1.BridgeTimepoint, v1.AccountId, sts.bytes()])
    ),
}

export const multisigExecuted =  {
    name: 'BridgeMultisig.MultisigExecuted',
    /**
     *  A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    v1: new EventType(
        'BridgeMultisig.MultisigExecuted',
        sts.tuple([v1.AccountId, v1.BridgeTimepoint, v1.AccountId, sts.bytes(), v1.DispatchResultWithPostInfo])
    ),
    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    v42: new EventType(
        'BridgeMultisig.MultisigExecuted',
        sts.tuple([v42.AccountId32, v42.BridgeTimepoint, v42.AccountId32, sts.bytes(), sts.option(() => v42.DispatchError)])
    ),
    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    v53: new EventType(
        'BridgeMultisig.MultisigExecuted',
        sts.tuple([v53.AccountId32, v53.BridgeTimepoint, v53.AccountId32, sts.bytes(), sts.option(() => v53.DispatchError)])
    ),
}

export const multisigCancelled =  {
    name: 'BridgeMultisig.MultisigCancelled',
    /**
     *  A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
     */
    v1: new EventType(
        'BridgeMultisig.MultisigCancelled',
        sts.tuple([v1.AccountId, v1.BridgeTimepoint, v1.AccountId, sts.bytes()])
    ),
}
