import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId } from '../utils/assets';

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught rewards claim extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {

        let details = new Object();
        const rewards = extrinsic.events.reduce((buffer, e) => {
            if (e.event.method === 'Transferred' && e.event.section === 'currencies') {
                const { event: { data: [assetId, , , amount] } } = e;
                buffer.push({ assetId: getAssetId(assetId), amount: amount.toString() });
            }
            return buffer;
        }, []);

        details = rewards
        record.data = details

    }

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved reward claim extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}