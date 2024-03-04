import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const register =  {
    name: 'TradingPair.register',
    /**
     * Register trading pair on the given DEX.
     * Can be only called by the DEX owner.
     * 
     * - `dex_id`: ID of the exchange.
     * - `base_asset_id`: base asset ID.
     * - `target_asset_id`: target asset ID.
     */
    v70: new CallType(
        'TradingPair.register',
        sts.struct({
            dexId: sts.number(),
            baseAssetId: v70.AssetId32,
            targetAssetId: v70.AssetId32,
        })
    ),
}
