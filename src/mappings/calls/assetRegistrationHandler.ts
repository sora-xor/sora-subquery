import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { getAssetId } from '../../utils/assets';
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function assetRegistrationHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const historyElement = await createHistoryElement(extrinsic)

    let details = new Object();

    if (historyElement.execution.success) {

        const assetRegistrationEvent = extrinsic.events.find(e => e.event.method === 'AssetRegistered');
        const { event: { data: [asset] } } = assetRegistrationEvent;

        const assetId: string = getAssetId(asset);

        details = {
            assetId: assetId
        }
    }

    else {
        const { extrinsic: { args: [symbol, ,] } } = extrinsic;

        details = {
            assetId: symbol.toHuman()
        }
    }

    await addDataToHistoryElement(extrinsic, historyElement, details)
    await updateHistoryElementStats(extrinsic, historyElement);
}