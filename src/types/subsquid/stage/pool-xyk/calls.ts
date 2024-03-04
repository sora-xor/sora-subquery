import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const depositLiquidity =  {
    name: 'PoolXYK.deposit_liquidity',
    v33: new CallType(
        'PoolXYK.deposit_liquidity',
        sts.struct({
            dexId: v33.DEXIdOf,
            inputAssetA: v33.AssetIdOf,
            inputAssetB: v33.AssetIdOf,
            inputADesired: v33.Balance,
            inputBDesired: v33.Balance,
            inputAMin: v33.Balance,
            inputBMin: v33.Balance,
        })
    ),
    v42: new CallType(
        'PoolXYK.deposit_liquidity',
        sts.struct({
            dexId: sts.number(),
            inputAssetA: v42.AssetId32,
            inputAssetB: v42.AssetId32,
            inputADesired: sts.bigint(),
            inputBDesired: sts.bigint(),
            inputAMin: sts.bigint(),
            inputBMin: sts.bigint(),
        })
    ),
}

export const withdrawLiquidity =  {
    name: 'PoolXYK.withdraw_liquidity',
    v33: new CallType(
        'PoolXYK.withdraw_liquidity',
        sts.struct({
            dexId: v33.DEXIdOf,
            outputAssetA: v33.AssetIdOf,
            outputAssetB: v33.AssetIdOf,
            markerAssetDesired: v33.Balance,
            outputAMin: v33.Balance,
            outputBMin: v33.Balance,
        })
    ),
    v42: new CallType(
        'PoolXYK.withdraw_liquidity',
        sts.struct({
            dexId: sts.number(),
            outputAssetA: v42.AssetId32,
            outputAssetB: v42.AssetId32,
            markerAssetDesired: sts.bigint(),
            outputAMin: sts.bigint(),
            outputBMin: sts.bigint(),
        })
    ),
}

export const initializePool =  {
    name: 'PoolXYK.initialize_pool',
    v33: new CallType(
        'PoolXYK.initialize_pool',
        sts.struct({
            dexId: v33.DEXIdOf,
            assetA: v33.AssetIdOf,
            assetB: v33.AssetIdOf,
        })
    ),
    v42: new CallType(
        'PoolXYK.initialize_pool',
        sts.struct({
            dexId: sts.number(),
            assetA: v42.AssetId32,
            assetB: v42.AssetId32,
        })
    ),
}
