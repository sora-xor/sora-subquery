import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v53 from '../v53'

export const notePreimage =  {
    name: 'Preimage.note_preimage',
    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    v53: new CallType(
        'Preimage.note_preimage',
        sts.struct({
            bytes: sts.bytes(),
        })
    ),
}

export const unnotePreimage =  {
    name: 'Preimage.unnote_preimage',
    /**
     * Clear an unrequested preimage from the runtime storage.
     * 
     * If `len` is provided, then it will be a much cheaper operation.
     * 
     * - `hash`: The hash of the preimage to be removed from the store.
     * - `len`: The length of the preimage of `hash`.
     */
    v53: new CallType(
        'Preimage.unnote_preimage',
        sts.struct({
            hash: v53.H256,
        })
    ),
}

export const requestPreimage =  {
    name: 'Preimage.request_preimage',
    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    v53: new CallType(
        'Preimage.request_preimage',
        sts.struct({
            hash: v53.H256,
        })
    ),
}

export const unrequestPreimage =  {
    name: 'Preimage.unrequest_preimage',
    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    v53: new CallType(
        'Preimage.unrequest_preimage',
        sts.struct({
            hash: v53.H256,
        })
    ),
}
