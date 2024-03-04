import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v19 from '../v19'
import * as v70 from '../v70'

export const swap =  {
    name: 'DEXAPI.swap',
    /**
     *  Perform swap with specified parameters. Gateway for invoking liquidity source exchanges.
     * 
     *  - `dex_id`: ID of the exchange.
     *  - `liquidity_source_type`: Type of liquidity source to perform swap on.
     *  - `input_asset_id`: ID of Asset to be deposited from sender account into pool reserves.
     *  - `output_asset_id`: ID of Asset t0 be withdrawn from pool reserves into receiver account.
     *  - `amount`: Either amount of desired input or output tokens, determined by `swap_variant` parameter.
     *  - `limit`: Either maximum input amount or minimum output amount tolerated for successful swap,
     *             determined by `swap_variant` parameter.
     *  - `swap_variant`: Either 'WithDesiredInput' or 'WithDesiredOutput', indicates amounts purpose.
     *  - `receiver`: Optional value, indicates AccountId for swap receiver. If not set, default is `sender`.
     */
    v19: new CallType(
        'DEXAPI.swap',
        sts.struct({
            dexId: v19.DEXId,
            liquiditySourceType: v19.LiquiditySourceType,
            inputAssetId: v19.AssetId,
            outputAssetId: v19.AssetId,
            amount: v19.Balance,
            limit: v19.Balance,
            swapVariant: v19.SwapVariant,
            receiver: sts.option(() => v19.AccountId),
        })
    ),
}

export const enableLiquiditySource =  {
    name: 'DEXAPI.enable_liquidity_source',
    v70: new CallType(
        'DEXAPI.enable_liquidity_source',
        sts.struct({
            source: v70.LiquiditySourceType,
        })
    ),
}

export const disableLiquiditySource =  {
    name: 'DEXAPI.disable_liquidity_source',
    v70: new CallType(
        'DEXAPI.disable_liquidity_source',
        sts.struct({
            source: v70.LiquiditySourceType,
        })
    ),
}
