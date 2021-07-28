import {SubstrateExtrinsic} from "@subql/types";
import {Swap} from "../types";
import {formatU128ToBalance, checkIfExtrinsicExecuteSuccess, getExtrinsicNetworkFee, getExtrinsicId} from "./utils";
import {LiquiditySourceType, SwapAmount} from "sora/api-interfaces";
import type {Vec} from "@polkadot/types";


export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {
    let record = new Swap(getExtrinsicId(extrinsic));
    record.extrinsicHash = extrinsic.extrinsic.hash.toString();
    record.blockHash = extrinsic.block.block.hash.toString();
    record.address = extrinsic?.extrinsic.signer.toString();
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic));
    record.selectedMarket = (extrinsic.extrinsic.args[4] as Vec<LiquiditySourceType>).map(lst => lst.toString());
    record.datetime = extrinsic.block.timestamp;
    let success = checkIfExtrinsicExecuteSuccess(extrinsic);
    if (success) {
        let swapEvent = extrinsic.events.find(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');
        const {event: {data: [, , sourceAsset, destAsset, sourceAmount, destAmount, liquidityProviderFee]}} = swapEvent;
        record.baseAssetAmount = formatU128ToBalance(sourceAmount.toString());
        record.baseAssetId = sourceAsset.toString();
        record.targetAssetAmount = formatU128ToBalance(destAmount.toString());
        record.targetAssetId = destAsset.toString();
        record.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee.toString());
        record.success = true;
    } else {
        const {extrinsic: {args: [, sourceAsset, destAsset, swapInfo]}} = extrinsic;
        let swapAmount = (swapInfo as SwapAmount);
        if (swapAmount.isWithDesiredOutput) {
            record.baseAssetAmount = formatU128ToBalance(swapAmount.asWithDesiredOutput.max_amount_in.toString());
            record.targetAssetAmount = formatU128ToBalance(swapAmount.asWithDesiredOutput.desired_amount_out.toString());
        } else {
            //withDesirdedInpput option
            record.baseAssetAmount = formatU128ToBalance(swapAmount.asWithDesiredInput.desired_amount_in.toString());
            record.targetAssetAmount = formatU128ToBalance(swapAmount.asWithDesiredInput.min_amount_out.toString());
        }
        record.baseAssetId = sourceAsset.toString();
        record.targetAssetId = destAsset.toString();
        record.liquidityProviderFee = "0";
        record.success = false;
    }
    await record.save();
}
