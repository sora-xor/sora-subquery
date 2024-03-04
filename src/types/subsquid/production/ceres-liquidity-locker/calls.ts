import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v22 from '../v22'
import * as v37 from '../v37'
import * as v42 from '../v42'

export const lockLiquidity =  {
    name: 'CeresLiquidityLocker.lock_liquidity',
    /**
     *  Lock liquidity
     */
    v22: new CallType(
        'CeresLiquidityLocker.lock_liquidity',
        sts.struct({
            assetA: v22.AssetIdOf,
            assetB: v22.AssetIdOf,
            unlockingBlock: v22.BlockNumber,
            percentageOfPoolTokens: v22.Balance,
            option: sts.boolean(),
        })
    ),
    /**
     *  Lock liquidity
     */
    v37: new CallType(
        'CeresLiquidityLocker.lock_liquidity',
        sts.struct({
            assetA: v37.AssetIdOf,
            assetB: v37.AssetIdOf,
            unlockingTimestamp: v37.Moment,
            percentageOfPoolTokens: v37.Balance,
            option: sts.boolean(),
        })
    ),
    /**
     * Lock liquidity
     */
    v42: new CallType(
        'CeresLiquidityLocker.lock_liquidity',
        sts.struct({
            assetA: v42.AssetId32,
            assetB: v42.AssetId32,
            unlockingTimestamp: sts.bigint(),
            percentageOfPoolTokens: sts.bigint(),
            option: sts.boolean(),
        })
    ),
}

export const changeCeresFee =  {
    name: 'CeresLiquidityLocker.change_ceres_fee',
    /**
     *  Change CERES fee
     */
    v22: new CallType(
        'CeresLiquidityLocker.change_ceres_fee',
        sts.struct({
            ceresFee: v22.Balance,
        })
    ),
}
