import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { isAssetTransferEvent, getTransferEventData } from '../../utils/events';
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const historyElement = await createHistoryElement(extrinsic)

    if (historyElement.execution.success) {

        let details = new Object();
        const rewards = extrinsic.events.reduce((buffer, e) => {
            if (isAssetTransferEvent(e)) {
                const { assetId, amount } = getTransferEventData(e);
                buffer.push({ assetId, amount });
            }
            return buffer;
        }, []);

        details = rewards
        await addDataToHistoryElement(extrinsic, historyElement, details);
    }

    await updateHistoryElementStats(extrinsic, historyElement);

    getCallHandlerLog(extrinsic).debug(`Saved reward claim extrinsic`)

}