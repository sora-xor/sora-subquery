import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const multisigAccountCreated =  {
    name: 'BridgeMultisig.MultisigAccountCreated',
    /**
     *  A new multisig created. [multisig]
     */
    v33: new EventType(
        'BridgeMultisig.MultisigAccountCreated',
        v33.AccountId
    ),
}

export const newMultisig =  {
    name: 'BridgeMultisig.NewMultisig',
    /**
     *  A new multisig operation has begun. [approving, multisig, call_hash]
     */
    v33: new EventType(
        'BridgeMultisig.NewMultisig',
        sts.tuple([v33.AccountId, v33.AccountId, sts.bytes()])
    ),
}

export const multisigApproval =  {
    name: 'BridgeMultisig.MultisigApproval',
    /**
     *  A multisig operation has been approved by someone. [approving, timepoint, multisig, call_hash]
     */
    v33: new EventType(
        'BridgeMultisig.MultisigApproval',
        sts.tuple([v33.AccountId, v33.BridgeTimepoint, v33.AccountId, sts.bytes()])
    ),
}

export const multisigExecuted =  {
    name: 'BridgeMultisig.MultisigExecuted',
    /**
     *  A multisig operation has been executed. [approving, timepoint, multisig, call_hash]
     */
    v33: new EventType(
        'BridgeMultisig.MultisigExecuted',
        sts.tuple([v33.AccountId, v33.BridgeTimepoint, v33.AccountId, sts.bytes(), v33.DispatchResultWithPostInfo])
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
    v52: new EventType(
        'BridgeMultisig.MultisigExecuted',
        sts.tuple([v52.AccountId32, v52.BridgeTimepoint, v52.AccountId32, sts.bytes(), sts.option(() => v52.DispatchError)])
    ),
}

export const multisigCancelled =  {
    name: 'BridgeMultisig.MultisigCancelled',
    /**
     *  A multisig operation has been cancelled. [cancelling, timepoint, multisig, call_hash]
     */
    v33: new EventType(
        'BridgeMultisig.MultisigCancelled',
        sts.tuple([v33.AccountId, v33.BridgeTimepoint, v33.AccountId, sts.bytes()])
    ),
}
