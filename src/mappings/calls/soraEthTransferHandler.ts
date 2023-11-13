import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function soraEthTransferHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const historyElement = await createHistoryElement(extrinsic)

    const { extrinsic: { args: [assetId, sidechainAddress, amount, ] } } = extrinsic;

    let entity = new Object();

    if (historyElement.execution.success) {

        let soraEthTransferEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered');
        const { event: { data: [requestHash] } } = soraEthTransferEvent;

        entity = {
            requestHash: requestHash.toString(),
            assetId: getAssetId(assetId),
            sidechainAddress: sidechainAddress.toString(),
            amount: formatU128ToBalance(amount.toString(), getAssetId(assetId))
        }

    }

    else {

        entity = {
            assetId: getAssetId(assetId),
            sidechainAddress: sidechainAddress.toString(),
            amount: formatU128ToBalance(amount.toString(), getAssetId(assetId))
        }

    }

    await addDataToHistoryElement(extrinsic, historyElement, entity);
    await updateHistoryElementStats(extrinsic, historyElement);
    await networkSnapshotsStorage.updateBridgeOutgoingTransactionsStats(extrinsic.block);

}