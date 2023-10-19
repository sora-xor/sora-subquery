import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function handlerTransfers(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {

        let transferEvent = extrinsic.events.find(e => e.event.method === 'Transfer' && e.event.section === 'assets');
        const { event: { data: [, to, assetId, amount] } } = transferEvent;

        details = {
            from: extrinsic.extrinsic.signer.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString(), getAssetId(assetId)),
            assetId: getAssetId(assetId)
        }
    }

    else {

        const { extrinsic: { args: [assetId, to, amount] } } = extrinsic;

        details = {
            from: extrinsic.extrinsic.signer.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString(), getAssetId(assetId)),
            assetId: getAssetId(assetId)
        }
    }

    record.data = details

    await record.save();
    await updateHistoryElementStats(record);

    getCallHandlerLog(extrinsic).debug(`Saved transfer`)

}