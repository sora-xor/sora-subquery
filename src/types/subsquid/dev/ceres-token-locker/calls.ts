import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const lockTokens =  {
    name: 'CeresTokenLocker.lock_tokens',
    /**
     * Lock tokens
     */
    v70: new CallType(
        'CeresTokenLocker.lock_tokens',
        sts.struct({
            assetId: v70.AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        })
    ),
}

export const withdrawTokens =  {
    name: 'CeresTokenLocker.withdraw_tokens',
    /**
     * Withdraw tokens
     */
    v70: new CallType(
        'CeresTokenLocker.withdraw_tokens',
        sts.struct({
            assetId: v70.AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        })
    ),
}

export const changeFee =  {
    name: 'CeresTokenLocker.change_fee',
    /**
     * Change fee
     */
    v70: new CallType(
        'CeresTokenLocker.change_fee',
        sts.struct({
            newFee: sts.bigint(),
        })
    ),
}
