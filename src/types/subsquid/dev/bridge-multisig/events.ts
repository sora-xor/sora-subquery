import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const multisigAccountCreated =  {
    name: 'BridgeMultisig.MultisigAccountCreated',
    /**
     * A new multisig created. [multisig]
     */
    v70: new EventType(
        'BridgeMultisig.MultisigAccountCreated',
        v70.AccountId32
    ),
}

export const newMultisig =  {
    name: 'BridgeMultisig.NewMultisig',
    /**
     * A new multisig operation has begun. [approving, multisig, call_hash]
     */
    v70: new EventType(
        'BridgeMultisig.NewMultisig',
        sts.tuple([v70.AccountId32, v70.AccountId32, sts.bytes()])
    ),
}

export const multisigApproval =  {
    name: 'BridgeMultisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
     */
    v70: new EventType(
        'BridgeMultisig.MultisigApproval',
        sts.tuple([v70.AccountId32, v70.BridgeTimepoint, v70.AccountId32, sts.bytes()])
    ),
}

export const multisigExecuted =  {
    name: 'BridgeMultisig.MultisigExecuted',
    /**
     * A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    v70: new EventType(
        'BridgeMultisig.MultisigExecuted',
        sts.tuple([v70.AccountId32, v70.BridgeTimepoint, v70.AccountId32, sts.bytes(), sts.option(() => v70.DispatchError)])
    ),
}

export const multisigCancelled =  {
    name: 'BridgeMultisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
     */
    v70: new EventType(
        'BridgeMultisig.MultisigCancelled',
        sts.tuple([v70.AccountId32, v70.BridgeTimepoint, v70.AccountId32, sts.bytes()])
    ),
}
