import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v54 from '../v54'
import * as v60 from '../v60'

export const initializePool =  {
    name: 'XSTPool.initialize_pool',
    /**
     *  Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
     */
    v33: new CallType(
        'XSTPool.initialize_pool',
        sts.struct({
            syntheticAssetId: v33.AssetId,
        })
    ),
    /**
     * Enable exchange path on the pool for pair BaseAsset-SyntheticAsset.
     */
    v42: new CallType(
        'XSTPool.initialize_pool',
        sts.struct({
            syntheticAssetId: v42.AssetId32,
        })
    ),
}

export const setReferenceAsset =  {
    name: 'XSTPool.set_reference_asset',
    /**
     *  Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
     */
    v33: new CallType(
        'XSTPool.set_reference_asset',
        sts.struct({
            referenceAssetId: v33.AssetId,
        })
    ),
    /**
     * Change reference asset which is used to determine collateral assets value. Intended to be e.g., stablecoin DAI.
     */
    v42: new CallType(
        'XSTPool.set_reference_asset',
        sts.struct({
            referenceAssetId: v42.AssetId32,
        })
    ),
}

export const enableSyntheticAsset =  {
    name: 'XSTPool.enable_synthetic_asset',
    v33: new CallType(
        'XSTPool.enable_synthetic_asset',
        sts.struct({
            syntheticAsset: v33.AssetId,
        })
    ),
    v42: new CallType(
        'XSTPool.enable_synthetic_asset',
        sts.struct({
            syntheticAsset: v42.AssetId32,
        })
    ),
    v54: new CallType(
        'XSTPool.enable_synthetic_asset',
        sts.struct({
            assetId: v54.AssetId32,
            referenceSymbol: v54.SymbolName,
            feeRatio: v54.FixedPoint,
        })
    ),
}

export const setSyntheticBaseAssetFloorPrice =  {
    name: 'XSTPool.set_synthetic_base_asset_floor_price',
    /**
     * Set floor price for the synthetic base asset
     * 
     * - `origin`: root account
     * - `floor_price`: floor price for the synthetic base asset
     */
    v44: new CallType(
        'XSTPool.set_synthetic_base_asset_floor_price',
        sts.struct({
            floorPrice: sts.bigint(),
        })
    ),
}

export const registerSyntheticAsset =  {
    name: 'XSTPool.register_synthetic_asset',
    /**
     * Register and enable new synthetic asset with `reference_symbol` price binding
     */
    v54: new CallType(
        'XSTPool.register_synthetic_asset',
        sts.struct({
            assetSymbol: v54.AssetSymbol,
            assetName: v54.AssetName,
            referenceSymbol: v54.SymbolName,
            feeRatio: v54.FixedPoint,
        })
    ),
}

export const disableSyntheticAsset =  {
    name: 'XSTPool.disable_synthetic_asset',
    /**
     * Disable synthetic asset.
     * 
     * Just remove synthetic from exchanging.
     * Will not unregister trading pair because `trading_pair` pallet does not provide this
     * ability. And will not unregister trading synthetic asset because of that.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to disable.
     */
    v54: new CallType(
        'XSTPool.disable_synthetic_asset',
        sts.struct({
            syntheticAsset: v54.AssetId32,
        })
    ),
}

export const setSyntheticAssetFee =  {
    name: 'XSTPool.set_synthetic_asset_fee',
    /**
     * Set synthetic asset fee.
     * 
     * This fee will be used to determine the amount of synthetic base asset (e.g. XST) to be
     * burned when user buys synthetic asset.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `synthetic_asset`: synthetic asset id to set fee for,
     * - `fee_ratio`: fee ratio with precision = 18, so 1000000000000000000 = 1 = 100% fee.
     */
    v54: new CallType(
        'XSTPool.set_synthetic_asset_fee',
        sts.struct({
            syntheticAsset: v54.AssetId32,
            feeRatio: v54.FixedPoint,
        })
    ),
}

export const removeSyntheticAsset =  {
    name: 'XSTPool.remove_synthetic_asset',
    /**
     * Entirely remove synthetic asset (including linked symbol info)
     */
    v60: new CallType(
        'XSTPool.remove_synthetic_asset',
        sts.struct({
            syntheticAsset: v60.AssetId32,
        })
    ),
}
