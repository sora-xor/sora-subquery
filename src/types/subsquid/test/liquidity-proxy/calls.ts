import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v44 from '../v44'
import * as v48 from '../v48'
import * as v62 from '../v62'
import * as v66 from '../v66'
import * as v69 from '../v69'

export const swap =  {
    name: 'LiquidityProxy.swap',
    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v33: new CallType(
        'LiquidityProxy.swap',
        sts.struct({
            dexId: v33.DEXId,
            inputAssetId: v33.AssetId,
            outputAssetId: v33.AssetId,
            swapAmount: v33.SwapAmount,
            selectedSourceTypes: sts.array(() => v33.LiquiditySourceType),
            filterMode: v33.FilterMode,
        })
    ),
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
    v42: new CallType(
        'LiquidityProxy.swap',
        sts.struct({
            dexId: sts.number(),
            inputAssetId: v42.AssetId32,
            outputAssetId: v42.AssetId32,
            swapAmount: v42.SwapAmount,
            selectedSourceTypes: sts.array(() => v42.LiquiditySourceType),
            filterMode: v42.FilterMode,
        })
    ),
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
    v69: new CallType(
        'LiquidityProxy.swap',
        sts.struct({
            dexId: sts.number(),
            inputAssetId: v69.AssetId32,
            outputAssetId: v69.AssetId32,
            swapAmount: v69.SwapAmount,
            selectedSourceTypes: sts.array(() => v69.LiquiditySourceType),
            filterMode: v69.FilterMode,
        })
    ),
}

export const swapTransfer =  {
    name: 'LiquidityProxy.swap_transfer',
    /**
     *  Perform swap of tokens (input/output defined via SwapAmount direction).
     * 
     *  - `origin`: the account on whose behalf the transaction is being executed,
     *  - `receiver`: the account that receives the output,
     *  - `dex_id`: DEX ID for which liquidity sources aggregation is being done,
     *  - `input_asset_id`: ID of the asset being sold,
     *  - `output_asset_id`: ID of the asset being bought,
     *  - `swap_amount`: the exact amount to be sold (either in input_asset_id or output_asset_id units with corresponding slippage tolerance absolute bound),
     *  - `selected_source_types`: list of selected LiquiditySource types, selection effect is determined by filter_mode,
     *  - `filter_mode`: indicate either to allow or forbid selected types only, or disable filtering.
     */
    v33: new CallType(
        'LiquidityProxy.swap_transfer',
        sts.struct({
            receiver: v33.AccountId,
            dexId: v33.DEXId,
            inputAssetId: v33.AssetId,
            outputAssetId: v33.AssetId,
            swapAmount: v33.SwapAmount,
            selectedSourceTypes: sts.array(() => v33.LiquiditySourceType),
            filterMode: v33.FilterMode,
        })
    ),
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
    v42: new CallType(
        'LiquidityProxy.swap_transfer',
        sts.struct({
            receiver: v42.AccountId32,
            dexId: sts.number(),
            inputAssetId: v42.AssetId32,
            outputAssetId: v42.AssetId32,
            swapAmount: v42.SwapAmount,
            selectedSourceTypes: sts.array(() => v42.LiquiditySourceType),
            filterMode: v42.FilterMode,
        })
    ),
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
    v69: new CallType(
        'LiquidityProxy.swap_transfer',
        sts.struct({
            receiver: v69.AccountId32,
            dexId: sts.number(),
            inputAssetId: v69.AssetId32,
            outputAssetId: v69.AssetId32,
            swapAmount: v69.SwapAmount,
            selectedSourceTypes: sts.array(() => v69.LiquiditySourceType),
            filterMode: v69.FilterMode,
        })
    ),
}

export const enableLiquiditySource =  {
    name: 'LiquidityProxy.enable_liquidity_source',
    /**
     *  Enables XST or TBC liquidity source.
     * 
     *  - `liquidity_source`: the liquidity source to be enabled.
     */
    v38: new CallType(
        'LiquidityProxy.enable_liquidity_source',
        sts.struct({
            liquiditySource: v38.LiquiditySourceType,
        })
    ),
    /**
     * Enables XST or TBC liquidity source.
     * 
     * - `liquidity_source`: the liquidity source to be enabled.
     */
    v69: new CallType(
        'LiquidityProxy.enable_liquidity_source',
        sts.struct({
            liquiditySource: v69.LiquiditySourceType,
        })
    ),
}

export const disableLiquiditySource =  {
    name: 'LiquidityProxy.disable_liquidity_source',
    /**
     *  Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     *  - `liquidity_source`: the liquidity source to be disabled.
     */
    v38: new CallType(
        'LiquidityProxy.disable_liquidity_source',
        sts.struct({
            liquiditySource: v38.LiquiditySourceType,
        })
    ),
    /**
     * Disables XST or TBC liquidity source. The liquidity source becomes unavailable for swap.
     * 
     * - `liquidity_source`: the liquidity source to be disabled.
     */
    v69: new CallType(
        'LiquidityProxy.disable_liquidity_source',
        sts.struct({
            liquiditySource: v69.LiquiditySourceType,
        })
    ),
}

export const swapTransferBatch =  {
    name: 'LiquidityProxy.swap_transfer_batch',
    v44: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            receivers: sts.array(() => v44.BatchReceiverInfo),
            dexId: sts.number(),
            inputAssetId: v44.AssetId32,
            outputAssetId: v44.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v44.LiquiditySourceType),
            filterMode: v44.FilterMode,
        })
    ),
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
    v48: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v48.SwapBatchInfo),
            inputAssetId: v48.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v48.LiquiditySourceType),
            filterMode: v48.FilterMode,
        })
    ),
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
    v62: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v62.SwapBatchInfo),
            inputAssetId: v62.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v62.LiquiditySourceType),
            filterMode: v62.FilterMode,
        })
    ),
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
    v69: new CallType(
        'LiquidityProxy.swap_transfer_batch',
        sts.struct({
            swapBatches: sts.array(() => v69.SwapBatchInfo),
            inputAssetId: v69.AssetId32,
            maxInputAmount: sts.bigint(),
            selectedSourceTypes: sts.array(() => v69.LiquiditySourceType),
            filterMode: v69.FilterMode,
        })
    ),
}

export const setAdarCommissionRatio =  {
    name: 'LiquidityProxy.set_adar_commission_ratio',
    v55: new CallType(
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
    v66: new CallType(
        'LiquidityProxy.xorless_transfer',
        sts.struct({
            dexId: sts.number(),
            assetId: v66.AssetId32,
            receiver: v66.AccountId32,
            amount: sts.bigint(),
            desiredXorAmount: sts.bigint(),
            maxAmountIn: sts.bigint(),
            selectedSourceTypes: sts.array(() => v66.LiquiditySourceType),
            filterMode: v66.FilterMode,
            additionalData: sts.option(() => v66.BoundedVec),
        })
    ),
    /**
     * Extrinsic which is enable XORless transfers.
     * Internally it's swaps `asset_id` to `desired_xor_amount` of `XOR` and transfers remaining amount of `asset_id` to `receiver`.
     * Client apps should specify the XOR amount which should be paid as a fee in `desired_xor_amount` parameter.
     * If sender will not have enough XOR to pay fees after execution, transaction will be rejected.
     * This extrinsic is done as temporary solution for XORless transfers, in future it would be removed
     * and logic for XORless extrinsics should be moved to xor-fee pallet.
     */
    v69: new CallType(
        'LiquidityProxy.xorless_transfer',
        sts.struct({
            dexId: sts.number(),
            assetId: v69.AssetId32,
            receiver: v69.AccountId32,
            amount: sts.bigint(),
            desiredXorAmount: sts.bigint(),
            maxAmountIn: sts.bigint(),
            selectedSourceTypes: sts.array(() => v69.LiquiditySourceType),
            filterMode: v69.FilterMode,
            additionalData: sts.option(() => v69.BoundedVec),
        })
    ),
}
