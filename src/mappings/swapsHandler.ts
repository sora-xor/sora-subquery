import {SubstrateExtrinsic} from '@subql/types';
import type {Vec} from "@polkadot/types";
import {formatU128ToBalance, receiveSwapAmounts, assignCommonHistoryElemInfo} from "./utils";
import {LiquiditySourceType} from "sora/api-interfaces";

export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.debug("Caught swap extrinsic")
    
    const record = assignCommonHistoryElemInfo(extrinsic)
    
    if (record.success) {
        let swapEvent = extrinsic.events.find(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');
        const {event: {data: [, , baseAssetId, targetAssetId, baseAssetAmount, targetAssetAmount, liquidityProviderFee]}} = swapEvent;
        
        record.swap = {
            baseAssetId: baseAssetId.toString(),
            targetAssetId: targetAssetId.toString(),
            baseAssetAmount: formatU128ToBalance(baseAssetAmount.toString()),
            targetAssetAmount: formatU128ToBalance(targetAssetAmount.toString()),
            liquidityProviderFee: formatU128ToBalance(liquidityProviderFee.toString()),
            selectedMarket: (extrinsic.extrinsic.args[4] as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString()
        }
    } 
    
    else {
        const {extrinsic: {args: [, baseAssetId, targetAssetId,]}} = extrinsic;

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

