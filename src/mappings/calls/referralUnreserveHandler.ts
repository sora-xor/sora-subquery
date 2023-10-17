import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../../utils/history";
import { formatU128ToBalance } from "../../utils/assets";
import { isXorTransferEvent, getTransferEventData } from '../../utils/events';
import { XOR } from "../../utils/consts";
import { logCallHandler } from "../../utils/log";

export async function referralUnreserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logCallHandler(extrinsic);

    const record = assignCommonHistoryElemInfo(extrinsic);

    let details = new Object();

    if (record.execution.success) {
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

    record.data = details

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved referral unreserve with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}
