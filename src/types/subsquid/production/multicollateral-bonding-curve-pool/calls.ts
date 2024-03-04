import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v22 from '../v22'
import * as v42 from '../v42'

export const initializePool =  {
    name: 'MulticollateralBondingCurvePool.initialize_pool',
    /**
     *  Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    v1: new CallType(
        'MulticollateralBondingCurvePool.initialize_pool',
        sts.struct({
            collateralAssetId: v1.AssetId,
        })
    ),
    /**
     * Enable exchange path on the pool for pair BaseAsset-CollateralAsset.
     */
    v42: new CallType(
        'MulticollateralBondingCurvePool.initialize_pool',
        sts.struct({
            collateralAssetId: v42.AssetId32,
        })
    ),
}

export const setReferenceAsset =  {
    name: 'MulticollateralBondingCurvePool.set_reference_asset',
    /**
     *  Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    v1: new CallType(
        'MulticollateralBondingCurvePool.set_reference_asset',
        sts.struct({
            referenceAssetId: v1.AssetId,
        })
    ),
    /**
     * Change reference asset which is used to determine collateral assets value. Inteded to be e.g. stablecoin DAI.
     */
    v42: new CallType(
        'MulticollateralBondingCurvePool.set_reference_asset',
        sts.struct({
            referenceAssetId: v42.AssetId32,
        })
    ),
}

export const setOptionalRewardMultiplier =  {
    name: 'MulticollateralBondingCurvePool.set_optional_reward_multiplier',
    /**
     *  Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     *  `None` value indicates reward without change, same as Some(1.0).
     */
    v1: new CallType(
        'MulticollateralBondingCurvePool.set_optional_reward_multiplier',
        sts.struct({
            collateralAssetId: v1.AssetId,
            multiplier: sts.option(() => v1.Fixed),
        })
    ),
    /**
     * Set multiplier which is applied to rewarded amount when depositing particular collateral assets.
     * `None` value indicates reward without change, same as Some(1.0).
     */
    v42: new CallType(
        'MulticollateralBondingCurvePool.set_optional_reward_multiplier',
        sts.struct({
            collateralAssetId: v42.AssetId32,
            multiplier: sts.option(() => v42.FixedPoint),
        })
    ),
}

export const claimIncentives =  {
    name: 'MulticollateralBondingCurvePool.claim_incentives',
    /**
     *  Claim all available PSWAP rewards by account signing this transaction.
     */
    v1: new CallType(
        'MulticollateralBondingCurvePool.claim_incentives',
        sts.unit()
    ),
}

export const setPriceBias =  {
    name: 'MulticollateralBondingCurvePool.set_price_bias',
    /**
     *  Changes `initial_price` used as bias in XOR-DAI(reference asset) price calculation
     */
    v22: new CallType(
        'MulticollateralBondingCurvePool.set_price_bias',
        sts.struct({
            priceBias: v22.Balance,
        })
    ),
}

export const setPriceChangeConfig =  {
    name: 'MulticollateralBondingCurvePool.set_price_change_config',
    /**
     *  Changes price change rate and step
     */
    v22: new CallType(
        'MulticollateralBondingCurvePool.set_price_change_config',
        sts.struct({
            priceChangeRate: v22.Balance,
            priceChangeStep: v22.Balance,
        })
    ),
}
