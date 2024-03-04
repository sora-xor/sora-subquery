import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v22 from '../v22'
import * as v42 from '../v42'

export const poolInitialized =  {
    name: 'MulticollateralBondingCurvePool.PoolInitialized',
    /**
     *  Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    v1: new EventType(
        'MulticollateralBondingCurvePool.PoolInitialized',
        sts.tuple([v1.DEXId, v1.AssetId])
    ),
    /**
     * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    v42: new EventType(
        'MulticollateralBondingCurvePool.PoolInitialized',
        sts.tuple([sts.number(), v42.AssetId32])
    ),
}

export const referenceAssetChanged =  {
    name: 'MulticollateralBondingCurvePool.ReferenceAssetChanged',
    /**
     *  Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    v1: new EventType(
        'MulticollateralBondingCurvePool.ReferenceAssetChanged',
        v1.AssetId
    ),
    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    v42: new EventType(
        'MulticollateralBondingCurvePool.ReferenceAssetChanged',
        v42.AssetId32
    ),
}

export const optionalRewardMultiplierUpdated =  {
    name: 'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
    /**
     *  Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    v1: new EventType(
        'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
        sts.tuple([v1.AssetId, sts.option(() => v1.Fixed)])
    ),
    /**
     * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    v42: new EventType(
        'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
        sts.tuple([v42.AssetId32, sts.option(() => v42.FixedPoint)])
    ),
}

export const priceBiasChanged =  {
    name: 'MulticollateralBondingCurvePool.PriceBiasChanged',
    /**
     *  Price bias was changed. [New Price Bias]
     */
    v22: new EventType(
        'MulticollateralBondingCurvePool.PriceBiasChanged',
        v22.Balance
    ),
}

export const priceChangeConfigChanged =  {
    name: 'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
    /**
     *  Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    v22: new EventType(
        'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
        sts.tuple([v22.Balance, v22.Balance])
    ),
}
