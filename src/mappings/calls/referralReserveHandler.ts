import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { formatU128ToBalance } from '../../utils/assets';
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function referralReserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const record = assignCommonHistoryElemInfo(extrinsic);

    let details = new Object();

    if (record.execution.success) {

        let referralReserveEvent = extrinsic.events.find(e => isXorTransferEvent(e));

        if (referralReserveEvent == undefined) {
            getCallHandlerLog(extrinsic).debug("No 'Balances.Transfer' event is found")
            return
        }

        const { from, to, amount } = getTransferEventData(referralReserveEvent);

        details = {
            from,
            to,
            amount: formatU128ToBalance(amount, XOR)
        }
    } else {
        const { extrinsic: { args: [amount] } } = extrinsic;

        details = {
            amount: formatU128ToBalance(amount.toString(), XOR)
        }
    }

    record.data = details

    await record.save();
    await updateHistoryElementStats(record);

    getCallHandlerLog(extrinsic).debug('Saved referral reserve')
}
