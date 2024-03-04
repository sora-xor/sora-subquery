import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const register =  {
    name: 'TradingPair.register',
    /**
     *  Register trading pair on the given DEX.
     *  Can be only called by the DEX owner.
     * 
     *  - `dex_id`: ID of the exchange.
     *  - `base_asset_id`: base asset ID.
     *  - `target_asset_id`: target asset ID.
     */
    v1: new CallType(
        'TradingPair.register',
        sts.struct({
            dexId: v1.DEXId,
            baseAssetId: v1.AssetId,
            targetAssetId: v1.AssetId,
        })
    ),
    /**
     * Register trading pair on the given DEX.
     * Can be only called by the DEX owner.
     * 
     * - `dex_id`: ID of the exchange.
     * - `base_asset_id`: base asset ID.
     * - `target_asset_id`: target asset ID.
     */
    v42: new CallType(
        'TradingPair.register',
        sts.struct({
            dexId: sts.number(),
            baseAssetId: v42.AssetId32,
            targetAssetId: v42.AssetId32,
        })
    ),
}
