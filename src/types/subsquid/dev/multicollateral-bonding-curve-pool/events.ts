import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const poolInitialized =  {
    name: 'MulticollateralBondingCurvePool.PoolInitialized',
    /**
     * Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    v70: new EventType(
        'MulticollateralBondingCurvePool.PoolInitialized',
        sts.tuple([sts.number(), v70.AssetId32])
    ),
}

export const referenceAssetChanged =  {
    name: 'MulticollateralBondingCurvePool.ReferenceAssetChanged',
    /**
     * Reference Asset has been changed for pool. [New Reference Asset Id]
     */
    v70: new EventType(
        'MulticollateralBondingCurvePool.ReferenceAssetChanged',
        v70.AssetId32
    ),
}

export const optionalRewardMultiplierUpdated =  {
    name: 'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
    /**
     * Multiplier for reward has been updated on particular asset. [Asset Id, New Multiplier]
     */
    v70: new EventType(
        'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
        sts.tuple([v70.AssetId32, sts.option(() => v70.FixedPoint)])
    ),
}

export const priceBiasChanged =  {
    name: 'MulticollateralBondingCurvePool.PriceBiasChanged',
    /**
     * Price bias was changed. [New Price Bias]
     */
    v70: new EventType(
        'MulticollateralBondingCurvePool.PriceBiasChanged',
        sts.bigint()
    ),
}

export const priceChangeConfigChanged =  {
    name: 'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
    /**
     * Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    v70: new EventType(
        'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
        sts.tuple([sts.bigint(), sts.bigint()])
    ),
}
