import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const initializePool =  {
    name: 'MulticollateralBondingCurvePool.initialize_pool',
    /**
     * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    v70: new CallType(
        'MulticollateralBondingCurvePool.initialize_pool',
        sts.struct({
            collateralAssetId: v70.AssetId32,
        })
    ),
}

export const setReferenceAsset =  {
    name: 'MulticollateralBondingCurvePool.set_reference_asset',
    /**
     * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    v70: new CallType(
        'MulticollateralBondingCurvePool.set_reference_asset',
        sts.struct({
            referenceAssetId: v70.AssetId32,
        })
    ),
}

export const setOptionalRewardMultiplier =  {
    name: 'MulticollateralBondingCurvePool.set_optional_reward_multiplier',
    /**
     * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     * `None` value indicates reward without change, same as Some(1.0).
     */
    v70: new CallType(
        'MulticollateralBondingCurvePool.set_optional_reward_multiplier',
        sts.struct({
            collateralAssetId: v70.AssetId32,
            multiplier: sts.option(() => v70.FixedPoint),
        })
    ),
}

export const setPriceBias =  {
    name: 'MulticollateralBondingCurvePool.set_price_bias',
    /**
     * Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
     */
    v70: new CallType(
        'MulticollateralBondingCurvePool.set_price_bias',
        sts.struct({
            priceBias: sts.bigint(),
        })
    ),
}

export const setPriceChangeConfig =  {
    name: 'MulticollateralBondingCurvePool.set_price_change_config',
    /**
     * Changes price change rate and step
     */
    v70: new CallType(
        'MulticollateralBondingCurvePool.set_price_change_config',
        sts.struct({
            priceChangeRate: sts.bigint(),
            priceChangeStep: sts.bigint(),
        })
    ),
}
