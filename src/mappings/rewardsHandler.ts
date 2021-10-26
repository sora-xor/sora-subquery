import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught rewards claim extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {

        let details = new Object();
        let moneyTransferEvent = extrinsic.events.find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const { event: { data: [assetId,,,amount] } } = moneyTransferEvent;

        details = {
            assetId: assetId.toString(),
            amount: formatU128ToBalance(amount.toString())
        }

        record.data = details

    }

    await record.save();

    logger.debug(`===== Saved reward claim extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}