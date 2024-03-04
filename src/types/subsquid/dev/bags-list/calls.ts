import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const rebag =  {
    name: 'BagsList.rebag',
    /**
     * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
     * changed its score that it should properly fall into a different bag than its current
     * one.
     * 
     * Anyone can call this function about any potentially dislocated account.
     * 
     * Will always update the stored score of `dislocated` to the correct score, based on
     * `ScoreProvider`.
     * 
     * If `dislocated` does not exists, it returns an error.
     */
    v70: new CallType(
        'BagsList.rebag',
        sts.struct({
            dislocated: v70.AccountId32,
        })
    ),
}

export const putInFrontOf =  {
    name: 'BagsList.put_in_front_of',
    /**
     * Move the caller's Id directly in front of `lighter`.
     * 
     * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
     * the account going in front of `lighter`.
     * 
     * Only works if
     * - both nodes are within the same bag,
     * - and `origin` has a greater `Score` than `lighter`.
     */
    v70: new CallType(
        'BagsList.put_in_front_of',
        sts.struct({
            lighter: v70.AccountId32,
        })
    ),
}
