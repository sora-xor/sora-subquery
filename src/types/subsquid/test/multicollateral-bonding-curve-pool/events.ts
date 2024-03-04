import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const poolInitialized =  {
    name: 'MulticollateralBondingCurvePool.PoolInitialized',
    /**
     *  Pool is initialized for pair. [DEX Id, Collateral Asset Id]
     */
    v33: new EventType(
        'MulticollateralBondingCurvePool.PoolInitialized',
        sts.tuple([v33.DEXId, v33.AssetId])
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
    v33: new EventType(
        'MulticollateralBondingCurvePool.ReferenceAssetChanged',
        v33.AssetId
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
    v33: new EventType(
        'MulticollateralBondingCurvePool.OptionalRewardMultiplierUpdated',
        sts.tuple([v33.AssetId, sts.option(() => v33.Fixed)])
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
    v33: new EventType(
        'MulticollateralBondingCurvePool.PriceBiasChanged',
        v33.Balance
    ),
}

export const priceChangeConfigChanged =  {
    name: 'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
    /**
     *  Price change config was changed. [New Price Change Rate, New Price Change Step]
     */
    v33: new EventType(
        'MulticollateralBondingCurvePool.PriceChangeConfigChanged',
        sts.tuple([v33.Balance, v33.Balance])
    ),
}
