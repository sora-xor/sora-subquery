import {SubstrateEvent} from "@subql/types";
import { HistoryElement } from "sora/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

export async function ethSoraTransferHandler(incomingRequestFinalizationEvent: SubstrateEvent): Promise<void> {

    logger.debug("Caught ETH->SORA transfer extrinsic")

    const extrinsic = incomingRequestFinalizationEvent.extrinsic
    let registeredRequestEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered' && e.event.section === 'ethBridge')
    const {event: {data: [requestHash]}} = registeredRequestEvent
    let currencyDepositEvent = extrinsic.events.find(e => e.event.method === 'Deposited' && e.event.section === 'currencies')
    const {event: {data: [assetId,,amount]}} = currencyDepositEvent

    const record = assignCommonHistoryElemInfo(extrinsic)
    let entity = new Object();

    entity = {
        requestHash: requestHash.toString(),
        assetId: assetId.toString(),
        amount: formatU128ToBalance(amount.toString())
    }

    record.data = entity

    await record.save();

    logger.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}