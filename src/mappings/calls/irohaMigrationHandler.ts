import { SubstrateExtrinsic } from '@subql/types';

import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs';

export async function handlerIrohaMigration(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {

        let assetTransferEvent = extrinsic.events.find(e => e.event.method === 'Deposited' && e.event.section === 'currencies')
        if (assetTransferEvent) {
            const { event: { data: [asset, , amount] } } = assetTransferEvent;
            let assetId = getAssetId(asset);
            details = {
                assetId: assetId,
                amount: formatU128ToBalance(amount.toString(), assetId)
            }

        } else {
            assetTransferEvent = extrinsic.events.find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')
            if (assetTransferEvent) {
                const { event: { data: [asset, , , amount] } } = assetTransferEvent;
                let assetId = getAssetId(asset);
                details = {
                    assetId: assetId,
                    amount: formatU128ToBalance(amount.toString(), assetId)
                }

            }
        }

        record.data = details

        await record.save();
        await updateHistoryElementStats(record);

        getCallHandlerLog(extrinsic).debug(`Saved iroha migration`)

    }

}
