import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const swapPair =  {
    name: 'PoolXYK.swap_pair',
    v1: new CallType(
        'PoolXYK.swap_pair',
        sts.struct({
            receiver: v1.AccountIdOf,
            dexId: v1.DEXIdOf,
            inputAssetId: v1.AssetIdOf,
            outputAssetId: v1.AssetIdOf,
            swapAmount: v1.SwapAmount,
        })
    ),
}

export const depositLiquidity =  {
    name: 'PoolXYK.deposit_liquidity',
    v1: new CallType(
        'PoolXYK.deposit_liquidity',
        sts.struct({
            dexId: v1.DEXIdOf,
            inputAssetA: v1.AssetIdOf,
            inputAssetB: v1.AssetIdOf,
            inputADesired: v1.Balance,
            inputBDesired: v1.Balance,
            inputAMin: v1.Balance,
            inputBMin: v1.Balance,
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
    v1: new CallType(
        'PoolXYK.withdraw_liquidity',
        sts.struct({
            dexId: v1.DEXIdOf,
            outputAssetA: v1.AssetIdOf,
            outputAssetB: v1.AssetIdOf,
            markerAssetDesired: v1.Balance,
            outputAMin: v1.Balance,
            outputBMin: v1.Balance,
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
    v1: new CallType(
        'PoolXYK.initialize_pool',
        sts.struct({
            dexId: v1.DEXIdOf,
            assetA: v1.AssetIdOf,
            assetB: v1.AssetIdOf,
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
