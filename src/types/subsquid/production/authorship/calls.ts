import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const setUncles =  {
    name: 'Authorship.set_uncles',
    /**
     *  Provide a set of uncles.
     */
    v1: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v1.Header),
        })
    ),
    /**
     * Provide a set of uncles.
     */
    v42: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v42.Header),
        })
    ),
}
