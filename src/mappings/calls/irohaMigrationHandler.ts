import { SubstrateExtrinsic } from '@subql/types';

import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { logStartProcessingCall } from '../../utils/logs';

export async function handlerIrohaMigration(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const details: any = {};

    let assetTransferEvent = extrinsic.events.find(e => e.event.method === 'Deposited' && e.event.section === 'currencies')

    if (assetTransferEvent) {
        const { event: { data: [asset, , amount] } } = assetTransferEvent;
        const assetId = getAssetId(asset);

        details.assetId = assetId;
        details.amount = formatU128ToBalance(amount.toString(), assetId);

    } else {
        assetTransferEvent = extrinsic.events.find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')

        if (assetTransferEvent) {
            const { event: { data: [asset, , , amount] } } = assetTransferEvent;
            const assetId = getAssetId(asset);

            details.assetId = assetId;
            details.amount = formatU128ToBalance(amount.toString(), assetId);
        }
    }

    await createHistoryElement(extrinsic, details)
}
