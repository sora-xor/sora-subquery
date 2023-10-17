
import type { SubstrateEvent } from "@subql/types";

import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { formatU128ToBalance } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { getDepositedEventData, getTransferEventData, isAssetDepositedEvent, isAssetTransferEvent } from '../../utils/events';
import { logEventHandler } from '../../utils/log';

export async function ethSoraTransferEventHandler(event: SubstrateEvent): Promise<void> {
    logEventHandler(event)

    const extrinsic = event.extrinsic
    const registeredRequestEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered' && e.event.section === 'ethBridge')
    const currenciesEvent = extrinsic.events.find(e => isAssetDepositedEvent(e) || isAssetTransferEvent(e));

    if (!registeredRequestEvent || !currenciesEvent) return;

    const {event: {data: [requestHash]}} = registeredRequestEvent

    const { assetId, amount, to } = isAssetDepositedEvent(currenciesEvent)
        ? getDepositedEventData(currenciesEvent)
        : getTransferEventData(currenciesEvent);

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
    await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(record.timestamp);

    logger.debug(`===== Saved ETH->SORA transfer extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}