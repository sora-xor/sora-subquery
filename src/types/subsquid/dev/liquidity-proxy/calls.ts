import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const swap =  {
    name: 'LiquidityProxy.swap',
    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v70: new CallType(
        'LiquidityProxy.swap',
        sts.struct({
            dexId: sts.number(),
            inputAssetId: v70.AssetId32,
            outputAssetId: v70.AssetId32,
            swapAmount: v70.SwapAmount,
            selectedSourceTypes: sts.array(() => v70.LiquiditySourceType),
            filterMode: v70.FilterMode,
        })
    ),
}

export const swapTransfer =  {
    name: 'LiquidityProxy.swap_transfer',
    /**
     * Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `receiver`: the account that receives the output,
     * - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     * - `input_asset_id`: ID of the asset being sold,
     * - `output_asset_id`: ID of the asset being bought,
     * - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v70: new CallType(
        'LiquidityProxy.swap_transfer',
        sts.struct({
            receiver: v70.AccountId32,
            dexId: sts.number(),
            inputAssetId: v70.AssetId32,
            outputAssetId: v70.AssetId32,
            swapAmount: v70.SwapAmount,
            selectedSourceTypes: sts.array(() => v70.LiquiditySourceType),
            filterMode: v70.FilterMode,
        })
    ),
}

export const swapTransferBatch =  {
    name: 'LiquidityProxy.swap_transfer_batch',
    /**
     * Dispatches multiple swap & transfer operations. `swap_batches` contains vector of
     * SwapBatchInfo structs, where each batch specifies which asset ID and DEX ID should
     * be used for swapping, receiver accounts and their desired outcome amount in asset,
     * specified for the current batch.
     * 
     * - `origin`: the account on whose behalf the transaction is being executed,
     * - `swap_batches`: the vector containing the SwapBatchInfo structs,
     * - `input_asset_id`: ID of the asset being sold,
     * - `max_input_amount`: the maximum amount to be sold in input_asset_id,
     * - `selected_source_types`: list of selected LiquiditySource types, selection effect is
     *                            determined by filter_mode,
     * - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v70: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v70.SwapBatchInfo),
            inputAssetId: v70.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v70.LiquiditySourceType),
            filterMode: v70.FilterMode,
        })
    ),
}

export const enableLiquiditySource =  {
    name: 'LiquidityProxy.enable_liquidity_source',
    /**
     * Enables XST or TBC liquidity source.
     * 
     * - `liquidity_source`: the liquidity source to be enabled.
     */
    v70: new CallType(
        'LiquidityProxy.enable_liquidity_source',
        sts.struct({
            liquiditySource: v70.LiquiditySourceType,
        })
    ),
}

export const disableLiquiditySource =  {
    name: 'LiquidityProxy.disable_liquidity_source',
    /**
     * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     * - `liquidity_source`: the liquidity source to be disabled.
     */
    v70: new CallType(
        'LiquidityProxy.disable_liquidity_source',
        sts.struct({
            liquiditySource: v70.LiquiditySourceType,
        })
    ),
}

export const setAdarCommissionRatio =  {
    name: 'LiquidityProxy.set_adar_commission_ratio',
    v70: new CallType(
        'LiquidityProxy.set_adar_commission_ratio',
        sts.struct({
            commissionRatio: sts.bigint(),
        })
    ),
}

export const xorlessTransfer =  {
    name: 'LiquidityProxy.xorless_transfer',
    /**
     * Extrinsic which is enable XORless transfers.
     * Internally it's swaps `asset_id` to `desired_xor_amount` of `XOR` and transfers remaining amount of `asset_id` to `receiver`.
     * Client apps should specify the XOR amount which should be paid as a fee in `desired_xor_amount` parameter.
     * If sender will not have enough XOR to pay fees after execution, transaction will be rejected.
     * This extrinsic is done as temporary solution for XORless transfers, in future it would be removed
     * and logic for XORless extrinsics should be moved to xor-fee pallet.
     */
    v70: new CallType(
        'LiquidityProxy.xorless_transfer',
        sts.struct({
            dexId: sts.number(),
            assetId: v70.AssetId32,
            receiver: v70.AccountId32,
            amount: sts.bigint(),
            desiredXorAmount: sts.bigint(),
            maxAmountIn: sts.bigint(),
            selectedSourceTypes: sts.array(() => v70.LiquiditySourceType),
            filterMode: v70.FilterMode,
            additionalData: sts.option(() => v70.BoundedVec),
        })
    ),
}
