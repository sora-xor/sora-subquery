import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const claim =  {
    name: 'Rewards.claim',
    /**
     * Claim the reward with signature.
     */
    v70: new CallType(
        'Rewards.claim',
        sts.struct({
            signature: sts.bytes(),
        })
    ),
}

export const addUmiNftReceivers =  {
    name: 'Rewards.add_umi_nft_receivers',
    /**
     * Finalize the update of unclaimed VAL data in storage
     * Add addresses, who will receive UMI NFT rewards.
     */
    v70: new CallType(
        'Rewards.add_umi_nft_receivers',
        sts.struct({
            receivers: sts.array(() => v70.H160),
        })
    ),
}
