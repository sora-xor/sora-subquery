import { SubstrateExtrinsic } from '@subql/types';
import type { Vec } from "@polkadot/types";
import { SwapAmount } from "sora/api-interfaces";
import { formatU128ToBalance, assignCommonHistoryElemInfo, PoolsPrices, updateAssetVolume } from "./utils";
import { LiquiditySourceType } from "sora/api-interfaces";
import { XOR } from '..';

const receiveExtrinsicSwapAmounts = (swapAmount: SwapAmount, assetId: string): string[] => {
    switch (swapAmount.isWithDesiredOutput) {
        case true: {
            return [formatU128ToBalance(swapAmount.asWithDesiredOutput.maxAmountIn.toString(), assetId),
            formatU128ToBalance(swapAmount.asWithDesiredOutput.desiredAmountOut.toString(), assetId)]
        }
        case false: {
            return [formatU128ToBalance(swapAmount.asWithDesiredInput.desiredAmountIn.toString(), assetId),
            formatU128ToBalance(swapAmount.asWithDesiredInput.minAmountOut.toString(), assetId)]
        }
    }
}

const handleAndSaveExtrinsic = async (extrinsic: SubstrateExtrinsic): Promise<void> => {
    const blockTimestamp: number = parseInt(((extrinsic.block.timestamp).getTime() / 1000).toFixed(0));
    const record = assignCommonHistoryElemInfo(extrinsic)

    const [filterMode, liquiditySources, swapAmount, targetAssetId, baseAssetId, dexId, to] = extrinsic.extrinsic.args.slice().reverse();

    const details: any = {};

    details.baseAssetId = baseAssetId.toString()
    details.targetAssetId = targetAssetId.toString()
    details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString()

    if (to) {
        details.to = to.toString()
    }

    if (record.execution.success) {
        const swapEvent = extrinsic.events.find(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');
        const { event: { data: [, , baseAssetId, targetAssetId, baseAssetAmount, targetAssetAmount, liquidityProviderFee] } } = swapEvent;

        details.baseAssetAmount = formatU128ToBalance(baseAssetAmount.toString(), baseAssetId.toString())
        details.targetAssetAmount = formatU128ToBalance(targetAssetAmount.toString(), targetAssetId.toString())
        details.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee.toString(), XOR)
    } else {
        details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, baseAssetId.toString())[0]
        details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, targetAssetId.toString())[1]
        details.liquidityProviderFee = "0"
    }

    record.data = details

    await record.save();

    // update assets volume
    if (record.execution.success) {
        await updateAssetVolume(details.baseAssetId, details.baseAssetAmount, blockTimestamp);
        await updateAssetVolume(details.targetAssetId, details.targetAssetAmount, blockTimestamp);
        PoolsPrices.set(true);
    }
}

export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {
    logger.debug("Caught swap extrinsic")

    await handleAndSaveExtrinsic(extrinsic);

    logger.debug(`===== Saved swap with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function handleSwapTransfers(extrinsic: SubstrateExtrinsic): Promise<void> {
    logger.debug("Caught swap transfer extrinsic")

    await handleAndSaveExtrinsic(extrinsic);

    logger.debug(`===== Saved swap and transfer with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}
