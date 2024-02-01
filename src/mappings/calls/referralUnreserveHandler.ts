import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { formatU128ToBalance } from "../../utils/assets";
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { logStartProcessingCall } from "../../utils/logs";

export async function referralUnreserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const { extrinsic: { args: [amount] } } = extrinsic;

    const details: any = {
        amount: formatU128ToBalance(amount.toString(), XOR)
    };

    const referralUnreserveEvent = extrinsic.events.find(e => isXorTransferEvent(e));

    if (referralUnreserveEvent) {
        const { from, to, amount } = getTransferEventData(referralUnreserveEvent);

        details.from = from;
        details.to = to;
        details.amount = formatU128ToBalance(amount, XOR);
    }

    await createHistoryElement(extrinsic, details);
}
