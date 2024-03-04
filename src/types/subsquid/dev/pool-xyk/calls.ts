import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const depositLiquidity =  {
    name: 'PoolXYK.deposit_liquidity',
    v70: new CallType(
        'PoolXYK.deposit_liquidity',
        sts.struct({
            dexId: sts.number(),
            inputAssetA: v70.AssetId32,
            inputAssetB: v70.AssetId32,
            inputADesired: sts.bigint(),
            inputBDesired: sts.bigint(),
            inputAMin: sts.bigint(),
            inputBMin: sts.bigint(),
        })
    ),
}

export const withdrawLiquidity =  {
    name: 'PoolXYK.withdraw_liquidity',
    v70: new CallType(
        'PoolXYK.withdraw_liquidity',
        sts.struct({
            dexId: sts.number(),
            outputAssetA: v70.AssetId32,
            outputAssetB: v70.AssetId32,
            markerAssetDesired: sts.bigint(),
            outputAMin: sts.bigint(),
            outputBMin: sts.bigint(),
        })
    ),
}

export const initializePool =  {
    name: 'PoolXYK.initialize_pool',
    v70: new CallType(
        'PoolXYK.initialize_pool',
        sts.struct({
            dexId: sts.number(),
            assetA: v70.AssetId32,
            assetB: v70.AssetId32,
        })
    ),
}
