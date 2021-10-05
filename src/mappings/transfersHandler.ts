import { SubstrateExtrinsic } from "@subql/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

export async function handlerTransfers(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught transfer extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {

        let transferEvent = extrinsic.events.find(e => e.event.method === 'Transfer' && e.event.section === 'assets');
        const { event: { data: [, to, assetId, amount] } } = transferEvent;

        record.transfer = {
            from: extrinsic.extrinsic.signer.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString()),
            assetId: assetId.toString()
        }
    }

    else {

        const { extrinsic: { args: [assetId, to, amount] } } = extrinsic;

        record.transfer = {
            from: extrinsic.extrinsic.signer.toString(),
            to: to.toString(),
            amount: formatU128ToBalance(amount.toString()),
            assetId: assetId.toString()
        }
    }

    await record.save();

    logger.debug(`===== Saved transfer with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}