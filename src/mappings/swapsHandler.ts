import {SubstrateExtrinsic} from '@subql/types';
import {HistoryElement} from "../types";
import type {Vec} from "@polkadot/types";
import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicNetworkFee, receiveSwapAmounts} from "./utils";
import {LiquiditySourceType, SwapAmount} from "sora/api-interfaces";

export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.debug("Caught swap extrinsic")
    
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
    record.module = "liquidityProxy"
    record.method = "swap"
    record.address = extrinsic.extrinsic.signer.toString()
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic))
    record.success = checkIfExtrinsicExecuteSuccess(extrinsic)
    record.timestamp = extrinsic.block.timestamp.toString()

    if (record.success) {
        let swapEvent = extrinsic.events.find(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');
        const {event: {data: [, , baseAssetId, targetAssetId, baseAssetAmount, targetAssetAmount, liquidityProviderFee]}} = swapEvent;
        
        record.swap = {
            baseAssetId: baseAssetId.toString(),
            targetAssetId: targetAssetId.toString(),
            baseAssetAmount: baseAssetAmount.toString(),
            targetAssetAmount: targetAssetAmount.toString(),
            liquidityProviderFee: formatU128ToBalance(liquidityProviderFee.toString()),
            selectedMarket: (extrinsic.extrinsic.args[4] as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString()
        }
    } 
    
    else {
        const {extrinsic: {args: [, baseAssetId, targetAssetId, swapInfo]}} = extrinsic;
        let swapAmount = (swapInfo as SwapAmount);

        record.swap = {
            baseAssetId: baseAssetId.toString(),
            targetAssetId: targetAssetId.toString(),
            baseAssetAmount: receiveSwapAmounts[0],
            targetAssetAmount: receiveSwapAmounts[1],
            liquidityProviderFee: "0",
            selectedMarket: (extrinsic.extrinsic.args[4] as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString()
        }
    }
    
    await record.save();

    logger.debug(`===== Saved swap with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

