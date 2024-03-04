import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const lockLiquidity =  {
    name: 'CeresLiquidityLocker.lock_liquidity',
    /**
     * Lock liquidity
     */
    v70: new CallType(
        'CeresLiquidityLocker.lock_liquidity',
        sts.struct({
            assetA: v70.AssetId32,
            assetB: v70.AssetId32,
            unlockingTimestamp: sts.bigint(),
            percentageOfPoolTokens: sts.bigint(),
            option: sts.boolean(),
        })
    ),
}

export const changeCeresFee =  {
    name: 'CeresLiquidityLocker.change_ceres_fee',
    /**
     * Change CERES fee
     */
    v70: new CallType(
        'CeresLiquidityLocker.change_ceres_fee',
        sts.struct({
            ceresFee: sts.bigint(),
        })
    ),
}
