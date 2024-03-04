import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const updateMultiplier =  {
    name: 'XorFee.update_multiplier',
    /**
     * Update the multiplier for weight -> fee conversion.
     */
    v70: new CallType(
        'XorFee.update_multiplier',
        sts.struct({
            newMultiplier: v70.FixedU128,
        })
    ),
}
