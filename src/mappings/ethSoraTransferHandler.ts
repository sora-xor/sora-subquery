import {SubstrateEvent} from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

// Obtaining tokens for further transfer may be done by unlocking ("Transferred" event) or by minting ("Deposited"). Either way is a part of ETH->SORA transfer.

const distinguishCurrenciesEvent = (currenciesEvent): string[] => {
    switch (currenciesEvent.event.method) {
        case "Deposited": {
            const {event: {data: [assetId,,amount]}} = currenciesEvent
            return [assetId, amount]
        }
        case "Transferred": {
            const {event: {data: [assetId,,,amount]}} = currenciesEvent
            return [assetId, amount]
        }
    }
}

export async function ethSoraTransferHandler(incomingRequestFinalizationEvent: SubstrateEvent): Promise<void> {

    logger.debug("Caught ETH->SORA transfer extrinsic")

    const extrinsic = incomingRequestFinalizationEvent.extrinsic
    let registeredRequestEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered' && e.event.section === 'ethBridge')
    let currenciesEvent = extrinsic.events.find(e => e.event.section === 'currencies')

    if (registeredRequestEvent == null || currenciesEvent == null ) {
        return
    }

    const {event: {data: [requestHash]}} = registeredRequestEvent

    let distinguishedCurrenciesEventValues = distinguishCurrenciesEvent(currenciesEvent)

    const record = assignCommonHistoryElemInfo(extrinsic)

    let entity = new Object();

    let assetId = distinguishedCurrenciesEventValues[0].toString();

    entity = {
        requestHash: requestHash.toString(),
        assetId: assetId,
        amount: formatU128ToBalance(distinguishedCurrenciesEventValues[1].toString(), assetId)
    }

    record.data = entity

    await record.save();

    logger.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}