import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { formatU128ToBalance } from '../../utils/assets';
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function referralReserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const historyElement = await createHistoryElement(extrinsic);

    let details = new Object();

    if (historyElement.execution.success) {

        let referralReserveEvent = extrinsic.events.find(e => isXorTransferEvent(e));

        if (referralReserveEvent == undefined) {
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

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);

    getCallHandlerLog(extrinsic).debug('Saved referral reserve')
}
