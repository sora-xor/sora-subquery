import { SubstrateEvent, SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";


export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught rewards claim extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {

        let details = new Object();
        const rewards = extrinsic.events.reduce((buffer, e) => {
            if (e.event.method === 'Transferred' && e.event.section === 'currencies') {
                const { event: { data: [assetId, , , amount] } } = e;
                buffer.push({ assetId: assetId.toString(), amount: amount.toString() });
            }
            return buffer;
        }, []);

        details = rewards
        record.data = details

    }

    await record.save();

    logger.debug(`===== Saved reward claim extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}