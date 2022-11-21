
import type { SubstrateEvent } from "@subql/types";
import type { EventRecord } from "@polkadot/types/interfaces";
import type { Codec } from "@polkadot/types/types/codec";

import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId, formatU128ToBalance } from '../utils/assets';
import { updateBridgeIncomingTransactionsStats } from '../utils/network';
import { XOR } from '../utils/consts';

// Obtaining tokens for further transfer may be done by unlocking
// Below Substrate 4: "Transferred" event or by minting "Deposited".
// Substrate 4: "Transfer" event
// Either way is a part of ETH->SORA transfer.

const distinguishCurrenciesEvent = (currenciesEvent: EventRecord): { assetId: Codec; amount: Codec; to: Codec; } => {
    switch (currenciesEvent.event.method) {
        case "Deposited": {
            const {event: {data: [assetId,to,amount]}} = currenciesEvent
            return { assetId, amount, to }
        }
        case "Transfer":
        case "Transferred": {
            const [amount, to, from, assetId] = currenciesEvent.event.data.slice().reverse();

            // assetId is undefined on balances.Transfer (XOR transfer)
            return { assetId, amount, to };
        }
    }
}

export async function ethSoraTransferHandler(incomingRequestFinalizationEvent: SubstrateEvent): Promise<void> {

    logger.debug("Caught ETH->SORA transfer extrinsic")

    const extrinsic = incomingRequestFinalizationEvent.extrinsic
    const registeredRequestEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered' && e.event.section === 'ethBridge')
    const currenciesEvent = extrinsic.events.find(e => 
        e.event.section === 'currencies' && e.event.method === 'Transferred' ||
        e.event.section === 'tokens' && e.event.method === 'Transfer' ||
        e.event.section === 'balances' && e.event.method === 'Transfer'
    );

    if (!registeredRequestEvent || !currenciesEvent) return;

    const {event: {data: [requestHash]}} = registeredRequestEvent

    const data = distinguishCurrenciesEvent(currenciesEvent as EventRecord)

    const asset = data.assetId ? getAssetId(data.assetId) : XOR;

    const record = assignCommonHistoryElemInfo(extrinsic)

    let entity = new Object();

    entity = {
        requestHash: requestHash.toString(),
        assetId: asset,
        amount: formatU128ToBalance(data.amount.toString(), asset),
        to: data.to.toString()
    }

    record.data = entity

    await record.save();
    await updateHistoryElementStats(record);
    await updateBridgeIncomingTransactionsStats(record.timestamp, Number(record.blockHeight.toString()));

    logger.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}