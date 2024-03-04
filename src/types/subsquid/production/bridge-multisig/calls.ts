import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v3 from '../v3'
import * as v7 from '../v7'
import * as v19 from '../v19'
import * as v22 from '../v22'
import * as v23 from '../v23'
import * as v26 from '../v26'
import * as v32 from '../v32'
import * as v33 from '../v33'
import * as v35 from '../v35'
import * as v37 from '../v37'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v43 from '../v43'
import * as v45 from '../v45'
import * as v46 from '../v46'
import * as v47 from '../v47'
import * as v50 from '../v50'
import * as v53 from '../v53'
import * as v57 from '../v57'
import * as v59 from '../v59'
import * as v60 from '../v60'
import * as v63 from '../v63'
import * as v64 from '../v64'
import * as v66 from '../v66'
import * as v70 from '../v70'

export const registerMultisig =  {
    name: 'BridgeMultisig.register_multisig',
    /**
     *  Create a new multisig account.
     *  TODO: update weights for `register_multisig`
     *  # <weight>
     *  Key: M - length of members,
     *  - One storage reads - O(1)
     *  - One search in sorted list - O(logM)
     *  - Confirmation that the list is sorted - O(M)
     *  - One storage writes - O(1)
     *  - One event
     *  Total Complexity: O(M + logM)
     *  # <weight>
     */
    v1: new CallType(
        'BridgeMultisig.register_multisig',
        sts.struct({
            signatories: sts.array(() => v1.AccountId),
            threshold: v1.Percent,
        })
    ),
    /**
     *  Create a new multisig account.
     *  TODO: update weights for `register_multisig`
     *  # <weight>
     *  Key: M - length of members,
     *  - One storage reads - O(1)
     *  - One search in sorted list - O(logM)
     *  - Confirmation that the list is sorted - O(M)
     *  - One storage writes - O(1)
     *  - One event
     *  Total Complexity: O(M + logM)
     *  # <weight>
     */
    v3: new CallType(
        'BridgeMultisig.register_multisig',
        sts.struct({
            signatories: sts.array(() => v3.AccountId),
        })
    ),
}

export const removeSignatory =  {
    name: 'BridgeMultisig.remove_signatory',
    /**
     *  Remove the signatory from the multisig account.
     *  Can only be called by a multisig account.
     * 
     *  TODO: update weights for `remove_signatory`
     *  # <weight>
     *  Key: length of members in multisigConfig: M
     *  - One storage reads - O(1)
     *  - remove items in list - O(M)
     *  Total complexity - O(M)
     *  # <weight>
     */
    v1: new CallType(
        'BridgeMultisig.remove_signatory',
        sts.struct({
            signatory: v1.AccountId,
        })
    ),
}

export const addSignatory =  {
    name: 'BridgeMultisig.add_signatory',
    /**
     *  Add a new signatory to the multisig account.
     *  Can only be called by a multisig account.
     * 
     *  TODO: update weights for `add_signatory`
     *  # <weight>
     *  Key: length of members in multisigConfig: M
     *  - One storage read - O(1)
     *  - search in members - O(M)
     *  - Storage write - O(M)
     *  Total complexity - O(M)
     *  # <weight>
     */
    v1: new CallType(
        'BridgeMultisig.add_signatory',
        sts.struct({
            newMember: v1.AccountId,
        })
    ),
}

export const asMultiThreshold1 =  {
    name: 'BridgeMultisig.as_multi_threshold_1',
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v1: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v1.AccountId,
            call: v1.Type_50,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v3: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v3.AccountId,
            call: v3.Type_49,
            timepoint: v3.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v7: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v7.AccountId,
            call: v7.Type_49,
            timepoint: v7.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v19: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v19.AccountId,
            call: v19.Type_54,
            timepoint: v19.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v22: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v22.AccountId,
            call: v22.Type_43,
            timepoint: v22.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v23: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v23.AccountId,
            call: v23.Type_54,
            timepoint: v23.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v26: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v26.AccountId,
            call: v26.Type_54,
            timepoint: v26.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v32: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v32.AccountId,
            call: v32.Type_54,
            timepoint: v32.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v33: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v33.AccountId,
            call: v33.Type_55,
            timepoint: v33.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v35: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v35.AccountId,
            call: v35.Type_55,
            timepoint: v35.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v37: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v37.AccountId,
            call: v37.Type_56,
            timepoint: v37.BridgeTimepoint,
        })
    ),
    /**
     *  Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `other_signatories`: The accounts (other than the sender) who are part of the
     *  multi-signature, but do not participate in the approval process.
     *  - `call`: The call to be executed.
     * 
     *  Result is equivalent to the dispatched result.
     * 
     *  # <weight>
     *  O(Z + C) where Z is the length of the call and C its execution weight.
     *  -------------------------------
     *  - Base Weight: 33.72 + 0.002 * Z µs
     *  - DB Weight: None
     *  - Plus Call Weight
     *  # </weight>
     */
    v38: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v38.AccountId,
            call: v38.Type_56,
            timepoint: v38.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v42: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v42.AccountId32,
            call: v42.Call,
            timepoint: v42.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v43: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v43.AccountId32,
            call: v43.Call,
            timepoint: v43.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v45: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v45.AccountId32,
            call: v45.Call,
            timepoint: v45.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v46: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v46.AccountId32,
            call: v46.Call,
            timepoint: v46.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v47: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v47.AccountId32,
            call: v47.Call,
            timepoint: v47.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v50: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v50.AccountId32,
            call: v50.Call,
            timepoint: v50.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v53: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v53.AccountId32,
            call: v53.Call,
            timepoint: v53.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v57: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v57.AccountId32,
            call: v57.Call,
            timepoint: v57.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v59: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v59.AccountId32,
            call: v59.Call,
            timepoint: v59.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v60: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v60.AccountId32,
            call: v60.Call,
            timepoint: v60.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v63: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v63.AccountId32,
            call: v63.Call,
            timepoint: v63.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v64: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v64.AccountId32,
            call: v64.Call,
            timepoint: v64.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v66: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v66.AccountId32,
            call: v66.Call,
            timepoint: v66.BridgeTimepoint,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - Base Weight: 33.72 + 0.002 * Z µs
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    v70: new CallType(
        'BridgeMultisig.as_multi_threshold_1',
        sts.struct({
            id: v70.AccountId32,
            call: v70.Call,
            timepoint: v70.BridgeTimepoint,
        })
    ),
}

export const asMulti =  {
    name: 'BridgeMultisig.as_multi',
    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  If there are enough, then dispatch the call.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call`: The call to be executed.
     * 
     *  NOTE: Unless this is the final approval, you will generally want to use
     *  `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     *  on success, result is `Ok` and the result from the interior call, if it was executed,
     *  may be found in the deposited `MultisigExecuted` event.
     * 
     *  # <weight>
     *  - `O(S + Z + Call)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - The weight of the `call`.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  -------------------------------
     *  - Base Weight:
     *      - Create:          41.89 + 0.118 * S + .002 * Z µs
     *      - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *      - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *      - Complete:        39.94 + 0.26  * S + .002 * Z µs
     *  - DB Weight:
     *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *  - Plus Call Weight
     *  # </weight>
     */
    v1: new CallType(
        'BridgeMultisig.as_multi',
        sts.struct({
            id: v1.AccountId,
            maybeTimepoint: sts.option(() => v1.BridgeTimepoint),
            call: v1.OpaqueCall,
            storeCall: sts.boolean(),
            maxWeight: v1.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *   deposit taken for its lifetime of
     *   `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - Base Weight:
     *     - Create:          41.89 + 0.118 * S + .002 * Z µs
     *     - Create w/ Store: 53.57 + 0.119 * S + .003 * Z µs
     *     - Approve:         31.39 + 0.136 * S + .002 * Z µs
     *     - Complete:        39.94 + 0.26  * S + .002 * Z µs
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
     *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
     * - Plus Call Weight
     * # </weight>
     */
    v53: new CallType(
        'BridgeMultisig.as_multi',
        sts.struct({
            id: v53.AccountId32,
            maybeTimepoint: sts.option(() => v53.BridgeTimepoint),
            call: sts.bytes(),
            storeCall: sts.boolean(),
            maxWeight: v53.Weight,
        })
    ),
}

export const approveAsMulti =  {
    name: 'BridgeMultisig.approve_as_multi',
    /**
     *  Register approval for a dispatch to be made from a deterministic composite account if
     *  approved by a total of `threshold - 1` of `other_signatories`.
     * 
     *  Payment: `DepositBase` will be reserved if this is the first approval, plus
     *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     *  is cancelled.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     *  not the first approval, then it must be `Some`, with the timepoint (block number and
     *  transaction index) of the first approval transaction.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - Up to one binary search and insert (`O(logS + S)`).
     *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     *  - One event.
     *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *    deposit taken for its lifetime of
     *    `DepositBase + threshold * DepositFactor`.
     *  ----------------------------------
     *  - Base Weight:
     *      - Create: 44.71 + 0.088 * S
     *      - Approve: 31.48 + 0.116 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account]
     *      - Write: Multisig Storage, [Caller Account]
     *  # </weight>
     */
    v1: new CallType(
        'BridgeMultisig.approve_as_multi',
        sts.struct({
            id: v1.AccountId,
            maybeTimepoint: sts.option(() => v1.BridgeTimepoint),
            callHash: sts.bytes(),
            maxWeight: v1.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
     *   deposit taken for its lifetime of
     *   `DepositBase + threshold * DepositFactor`.
     * ----------------------------------
     * - Base Weight:
     *     - Create: 44.71 + 0.088 * S
     *     - Approve: 31.48 + 0.116 * S
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account]
     *     - Write: Multisig Storage, [Caller Account]
     * # </weight>
     */
    v53: new CallType(
        'BridgeMultisig.approve_as_multi',
        sts.struct({
            id: v53.AccountId32,
            maybeTimepoint: sts.option(() => v53.BridgeTimepoint),
            callHash: sts.bytes(),
            maxWeight: v53.Weight,
        })
    ),
}

export const cancelAsMulti =  {
    name: 'BridgeMultisig.cancel_as_multi',
    /**
     *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     *  for this operation will be unreserved on success.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  - `threshold`: The total number of approvals for this dispatch before it is executed.
     *  - `other_signatories`: The accounts (other than the sender) who can approve this
     *  dispatch. May not be empty.
     *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
     *  transaction for this dispatch.
     *  - `call_hash`: The hash of the call to be executed.
     * 
     *  # <weight>
     *  - `O(S)`.
     *  - Up to one balance-reserve or unreserve operation.
     *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     *  - One encode & hash, both of complexity `O(S)`.
     *  - One event.
     *  - I/O: 1 read `O(S)`, one remove.
     *  - Storage: removes one item.
     *  ----------------------------------
     *  - Base Weight: 36.07 + 0.124 * S
     *  - DB Weight:
     *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     *  # </weight>
     */
    v1: new CallType(
        'BridgeMultisig.cancel_as_multi',
        sts.struct({
            id: v1.AccountId,
            timepoint: v1.BridgeTimepoint,
            callHash: sts.bytes(),
        })
    ),
}
