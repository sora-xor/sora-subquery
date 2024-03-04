import { SubstrateExtrinsic } from "@subql/types";
import { createHistoryElement } from "../../utils/history";
import { formatU128ToBalance } from '../../utils/assets';
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { logStartProcessingCall } from "../../utils/logs";

export async function referralReserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    const { extrinsic: { args: [amount] } } = extrinsic;

    const details: any = {
        amount: formatU128ToBalance(amount.toString(), XOR),
    };

    const referralReserveEvent = extrinsic.events.find(e => isXorTransferEvent(e));

    if (referralReserveEvent) {
        const { from, to, amount } = getTransferEventData(referralReserveEvent);

        details.from = from;
        details.to = to;
        details.amount = formatU128ToBalance(amount, XOR);
    }

    await createHistoryElement(extrinsic, details);
}
