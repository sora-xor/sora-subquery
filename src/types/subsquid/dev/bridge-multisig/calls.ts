import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const registerMultisig =  {
    name: 'BridgeMultisig.register_multisig',
    /**
     * Create a new multisig account.
     * TODO: update weights for `register_multisig`
     * # <weight>
     * Key: M - length of members,
     * - One storage reads - O(1)
     * - One search in sorted list - O(logM)
     * - Confirmation that the list is sorted - O(M)
     * - One storage writes - O(1)
     * - One event
     * Total Complexity: O(M + logM)
     * # <weight>
     */
    v70: new CallType(
        'BridgeMultisig.register_multisig',
        sts.struct({
            signatories: sts.array(() => v70.AccountId32),
        })
    ),
}

export const removeSignatory =  {
    name: 'BridgeMultisig.remove_signatory',
    /**
     * Remove the signatory from the multisig account.
     * Can only be called by a multisig account.
     * 
     * TODO: update weights for `remove_signatory`
     * # <weight>
     * Key: length of members in multisigConfig: M
     * - One storage reads - O(1)
     * - remove items in list - O(M)
     * Total complexity - O(M)
     * # <weight>
     */
    v70: new CallType(
        'BridgeMultisig.remove_signatory',
        sts.struct({
            signatory: v70.AccountId32,
        })
    ),
}

export const addSignatory =  {
    name: 'BridgeMultisig.add_signatory',
    /**
     * Add a new signatory to the multisig account.
     * Can only be called by a multisig account.
     * 
     * TODO: update weights for `add_signatory`
     * # <weight>
     * Key: length of members in multisigConfig: M
     * - One storage read - O(1)
     * - search in members - O(M)
     * - Storage write - O(M)
     * Total complexity - O(M)
     * # <weight>
     */
    v70: new CallType(
        'BridgeMultisig.add_signatory',
        sts.struct({
            newMember: v70.AccountId32,
        })
    ),
}

export const asMultiThreshold1 =  {
    name: 'BridgeMultisig.as_multi_threshold_1',
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
    v70: new CallType(
        'BridgeMultisig.as_multi',
        sts.struct({
            id: v70.AccountId32,
            maybeTimepoint: sts.option(() => v70.BridgeTimepoint),
            call: sts.bytes(),
            storeCall: sts.boolean(),
            maxWeight: v70.Weight,
        })
    ),
}

export const approveAsMulti =  {
    name: 'BridgeMultisig.approve_as_multi',
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
    v70: new CallType(
        'BridgeMultisig.approve_as_multi',
        sts.struct({
            id: v70.AccountId32,
            maybeTimepoint: sts.option(() => v70.BridgeTimepoint),
            callHash: sts.bytes(),
            maxWeight: v70.Weight,
        })
    ),
}

export const cancelAsMulti =  {
    name: 'BridgeMultisig.cancel_as_multi',
    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * # <weight>
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     * ----------------------------------
     * - Base Weight: 36.07 + 0.124 * S
     * - DB Weight:
     *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
     *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
     * # </weight>
     */
    v70: new CallType(
        'BridgeMultisig.cancel_as_multi',
        sts.struct({
            id: v70.AccountId32,
            timepoint: v70.BridgeTimepoint,
            callHash: sts.bytes(),
        })
    ),
}
