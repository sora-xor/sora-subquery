import { SubstrateExtrinsic } from "@subql/types";
import { assignCommonHistoryElemInfo, getExtrinsicTransferredCurrencies } from "./utils";

export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logger.debug("Caught rewards claim extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {
        record.data = getExtrinsicTransferredCurrencies(extrinsic) as Object
    }

    await record.save();

    logger.debug(`===== Saved reward claim extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}