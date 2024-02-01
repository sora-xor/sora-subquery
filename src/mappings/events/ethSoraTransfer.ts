
import type { SubstrateEvent } from "@subql/types";

import { createHistoryElement } from "../../utils/history";
import { formatU128ToBalance } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { getDepositedEventData, getTransferEventData, isAssetDepositedEvent, isAssetTransferEvent } from '../../utils/events';
import { logStartProcessingEvent } from '../../utils/logs';

export async function ethSoraTransferEventHandler(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    const extrinsic = event.extrinsic
    const registeredRequestEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered' && e.event.section === 'ethBridge')
    const currenciesEvent = extrinsic.events.find(e => isAssetDepositedEvent(e) || isAssetTransferEvent(e));

    if (!registeredRequestEvent || !currenciesEvent) return;

    const {event: {data: [requestHash]}} = registeredRequestEvent

    const { assetId, amount, to } = isAssetDepositedEvent(currenciesEvent)
        ? getDepositedEventData(currenciesEvent)
        : getTransferEventData(currenciesEvent);

    const details: any = {
        requestHash: requestHash.toString(),
        assetId,
        amount: formatU128ToBalance(amount, assetId),
        to,
    };

    await networkSnapshotsStorage.updateBridgeIncomingTransactionsStats(event.block);

    await createHistoryElement(extrinsic, details);
}