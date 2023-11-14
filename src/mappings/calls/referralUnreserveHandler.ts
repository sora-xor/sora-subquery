import { SubstrateExtrinsic } from "@subql/types";
import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { formatU128ToBalance } from "../../utils/assets";
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { getCallHandlerLog, logStartProcessingCall } from "../../utils/logs";

export async function referralUnreserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const historyElement = await createHistoryElement(extrinsic);

    let details = new Object();

    if (historyElement.execution.success) {
        let referralUnreserveEvent = extrinsic.events.find(e => isXorTransferEvent(e));
        const { from, to, amount } = getTransferEventData(referralUnreserveEvent);

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

    getCallHandlerLog(extrinsic).debug('Saved referral unreserve')
}
