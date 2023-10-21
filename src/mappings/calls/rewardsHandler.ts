import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { getAssetId } from '../../utils/assets';
import { isAssetTransferEvent, getTransferEventData } from '../../utils/events';
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {

        let details = new Object();
        const rewards = extrinsic.events.reduce((buffer, e) => {
            if (isAssetTransferEvent(e)) {
                const { assetId, amount } = getTransferEventData(e);
                buffer.push({ assetId, amount });
            }
            return buffer;
        }, []);

        details = rewards
        record.data = details

    }

    await record.save();
    await updateHistoryElementStats(record);

    getCallHandlerLog(extrinsic).debug(`Saved reward claim extrinsic`)

}