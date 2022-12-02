
import type { SubstrateEvent } from "@subql/types";
import type { EventRecord } from "@polkadot/types/interfaces";

import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { formatU128ToBalance } from '../utils/assets';
import { updateBridgeIncomingTransactionsStats } from '../utils/network';
import { getTransferEventData, isAssetTransferEvent } from '../utils/events';

export async function ethSoraTransferHandler(incomingRequestFinalizationEvent: SubstrateEvent): Promise<void> {

    logger.debug("Caught ETH->SORA transfer extrinsic")

    const extrinsic = incomingRequestFinalizationEvent.extrinsic
    const registeredRequestEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered' && e.event.section === 'ethBridge')
    const currenciesEvent = extrinsic.events.find(e => isAssetTransferEvent(e));

    if (!registeredRequestEvent || !currenciesEvent) return;

    const {event: {data: [requestHash]}} = registeredRequestEvent

    const { assetId, amount, to } = getTransferEventData(currenciesEvent as EventRecord)

    const record = assignCommonHistoryElemInfo(extrinsic)

    let entity = new Object();

    entity = {
        requestHash: requestHash.toString(),
        assetId,
        amount: formatU128ToBalance(amount, assetId),
        to,
    }

    record.data = entity

    await record.save();
    await updateHistoryElementStats(record);
    await updateBridgeIncomingTransactionsStats(record.timestamp);

    logger.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}