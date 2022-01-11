import { SubstrateExtrinsic } from '@subql/types';
import type { Vec } from "@polkadot/types";
// import { SwapAmount } from "sora/api-interfaces";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";
// import { LiquiditySourceType } from "sora/api-interfaces";

const receiveExtrinsicSwapAmounts = (swapAmount): string[] => {
    switch (swapAmount.isWithDesiredOutput) {
        case true: {
            return [formatU128ToBalance(swapAmount.asWithDesiredOutput.max_amount_in.toString()),
            formatU128ToBalance(swapAmount.asWithDesiredOutput.desired_amount_out.toString())]
        }
        case false: {
            return [formatU128ToBalance(swapAmount.asWithDesiredInput.desired_amount_in.toString()),
            formatU128ToBalance(swapAmount.asWithDesiredInput.min_amount_out.toString())]
        }
    }
}

export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught swap extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {
        let swapEvent = extrinsic.events.find(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');
        const { event: { data: [, , baseAssetId, targetAssetId, baseAssetAmount, targetAssetAmount, liquidityProviderFee] } } = swapEvent;

        details = {
            baseAssetId: baseAssetId.toString(),
            targetAssetId: targetAssetId.toString(),
            baseAssetAmount: formatU128ToBalance(baseAssetAmount.toString()),
            targetAssetAmount: formatU128ToBalance(targetAssetAmount.toString()),
            liquidityProviderFee: formatU128ToBalance(liquidityProviderFee.toString()),
            // selectedMarket: (extrinsic.extrinsic.args[4] as Vec<Codec>).map(lst => lst.toString()).toString()
        }
    }

    else {
        const { extrinsic: { args: [, baseAssetId, targetAssetId, swapInfo] } } = extrinsic;

        let swapAmount = swapInfo;

        details = {
            baseAssetId: baseAssetId.toString(),
            targetAssetId: targetAssetId.toString(),
            baseAssetAmount: receiveExtrinsicSwapAmounts(swapAmount)[0],
            targetAssetAmount: receiveExtrinsicSwapAmounts(swapAmount)[1],
            liquidityProviderFee: "0",
            // selectedMarket: (extrinsic.extrinsic.args[4] as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString()
        }
    }

    record.data = details

    await record.save();

    logger.debug(`===== Saved swap with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
