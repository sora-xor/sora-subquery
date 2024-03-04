import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v37 from '../v37'

export const updateMultiplier =  {
    name: 'XorFee.update_multiplier',
    /**
     *  Update the multiplier for weight -> fee conversion.
     */
    v37: new CallType(
        'XorFee.update_multiplier',
        sts.struct({
            newMultiplier: v37.FixedU128,
        })
    ),
}
