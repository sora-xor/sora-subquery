import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const setUncles =  {
    name: 'Authorship.set_uncles',
    /**
     *  Provide a set of uncles.
     */
    v33: new CallType(
        'Authorship.set_uncles',
        sts.struct({
            newUncles: sts.array(() => v33.Header),
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
