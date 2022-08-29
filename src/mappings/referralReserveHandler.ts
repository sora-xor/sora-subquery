import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";
import { XOR } from "..";

export async function referralReserveHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logger.debug("Caught referral reserve extrinsic");

    const record = assignCommonHistoryElemInfo(extrinsic);

    let details = new Object();

    if (record.execution.success) {

        let referralReserveEvent = extrinsic.events.find(e => e.event.method === 'Transfer' && e.event.section === 'balances');

        if (referralReserveEvent == undefined) {
            logger.debug("No currencies.Transferred event is found")
            return
        }

        const { event: { data: [from, to, amount] } } = referralReserveEvent;

        details = {
            from: from.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString(), XOR)
        }
    } else {
        const { extrinsic: { args: [amount] } } = extrinsic;

        details = {
            amount: formatU128ToBalance(amount.toString(), XOR)
        }
    }

    record.data = details

    await record.save();

    logger.debug(`===== Saved referral reserve with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}
