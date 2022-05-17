
import { SubstrateEvent } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";
import type { EventRecord } from "@polkadot/types/interfaces";
import type { Codec } from "@polkadot/types/types/codec";

// Obtaining tokens for further transfer may be done by unlocking ("Transferred" event) or by minting ("Deposited"). Either way is a part of ETH->SORA transfer.

const distinguishCurrenciesEvent = (currenciesEvent: EventRecord): { assetId: Codec; amount: Codec; to: Codec; } => {
    switch (currenciesEvent.event.method) {
        case "Deposited": {
            const {event: {data: [assetId,to,amount]}} = currenciesEvent
            return { assetId, amount, to }
        }
        case "Transferred": {
            const {event: {data: [assetId,from,to,amount]}} = currenciesEvent
            return { assetId, amount, to }
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

    const { assetId, amount, to } = distinguishCurrenciesEvent(currenciesEvent)

    const record = assignCommonHistoryElemInfo(extrinsic)

    let entity = new Object();

    entity = {
        requestHash: requestHash.toString(),
        assetId: assetId.toString(),
        amount: formatU128ToBalance(amount.toString(), assetId.toString()),
        to: to.toString()
    }

    record.data = entity

    await record.save();

    logger.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}