import { SubstrateExtrinsic } from "@subql/types";
import { getAssetId, assignCommonHistoryElemInfo, updateHistoryElementAccounts } from "./utils";

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught rewards claim extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {

        let details = new Object();
        const rewards = extrinsic.events.reduce((buffer, e) => {
            if (e.event.method === 'Transfer' && e.event.section === 'tokens') {
                const { event: { data: [asset, , , amount] } } = e;
                buffer.push({ assetId: getAssetId(asset), amount: amount.toString() });
            }
            return buffer;
        }, []);

        details = rewards
        record.data = details

    }

    await record.save();
    await updateHistoryElementAccounts(record);

    logger.debug(`===== Saved reward claim extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}