import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v22 from '../v22'

export const sudo =  {
    name: 'Sudo.sudo',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v22: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v22.Type_43,
        })
    ),
}

export const sudoUncheckedWeight =  {
    name: 'Sudo.sudo_unchecked_weight',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Root` origin.
     *  This function does not check the weight of the call, and instead allows the
     *  Sudo user to specify the weight of the call.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - The weight of this call is defined by the caller.
     *  # </weight>
     */
    v22: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v22.Type_43,
            weight: v22.Weight,
        })
    ),
}

export const setKey =  {
    name: 'Sudo.set_key',
    /**
     *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    v22: new CallType(
        'Sudo.set_key',
        sts.struct({
            new: v22.LookupSource,
        })
    ),
}

export const sudoAs =  {
    name: 'Sudo.sudo_as',
    /**
     *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
     *  a given account.
     * 
     *  The dispatch origin for this call must be _Signed_.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB write (event).
     *  - Weight of derivative `call` execution + 10,000.
     *  # </weight>
     */
    v22: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v22.LookupSource,
            call: v22.Type_43,
        })
    ),
}
