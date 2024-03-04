import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v42 from '../v42'

export const lockTokens =  {
    name: 'CeresTokenLocker.lock_tokens',
    /**
     *  Lock tokens
     */
    v33: new CallType(
        'CeresTokenLocker.lock_tokens',
        sts.struct({
            assetId: v33.AssetIdOf,
            unlockingBlock: v33.BlockNumber,
            numberOfTokens: v33.Balance,
        })
    ),
    /**
     *  Lock tokens
     */
    v37: new CallType(
        'CeresTokenLocker.lock_tokens',
        sts.struct({
            assetId: v37.AssetIdOf,
            unlockingTimestamp: v37.Moment,
            numberOfTokens: v37.Balance,
        })
    ),
    /**
     * Lock tokens
     */
    v42: new CallType(
        'CeresTokenLocker.lock_tokens',
        sts.struct({
            assetId: v42.AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        })
    ),
}

export const withdrawTokens =  {
    name: 'CeresTokenLocker.withdraw_tokens',
    /**
     *  Withdraw tokens
     */
    v33: new CallType(
        'CeresTokenLocker.withdraw_tokens',
        sts.struct({
            assetId: v33.AssetIdOf,
            unlockingBlock: v33.BlockNumber,
            numberOfTokens: v33.Balance,
        })
    ),
    /**
     *  Withdraw tokens
     */
    v37: new CallType(
        'CeresTokenLocker.withdraw_tokens',
        sts.struct({
            assetId: v37.AssetIdOf,
            unlockingTimestamp: v37.Moment,
            numberOfTokens: v37.Balance,
        })
    ),
    /**
     * Withdraw tokens
     */
    v42: new CallType(
        'CeresTokenLocker.withdraw_tokens',
        sts.struct({
            assetId: v42.AssetId32,
            unlockingTimestamp: sts.bigint(),
            numberOfTokens: sts.bigint(),
        })
    ),
}

export const changeFee =  {
    name: 'CeresTokenLocker.change_fee',
    /**
     *  Change fee
     */
    v33: new CallType(
        'CeresTokenLocker.change_fee',
        sts.struct({
            newFee: v33.Balance,
        })
    ),
}
