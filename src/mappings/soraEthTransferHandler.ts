import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

export async function soraEthTransferHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught SORA->ETH transfer extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    const { extrinsic: { args: [assetId, to, amount, ] } } = extrinsic;

    let entity = new Object();

    if (record.execution.success) {

        let soraEthTransferEvent = extrinsic.events.find(e => e.event.method === 'RequestRegistered');
        const { event: { data: [requestHash] } } = soraEthTransferEvent;

        entity = {
            requestHash: requestHash.toString(),
            assetId: assetId.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString())
        }

    }

    else {

        entity = {
            assetId: assetId.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString())
        }

    }

    record.data = entity

    await record.save();

    logger.debug(`===== Saved SORA->ETH transfer extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}