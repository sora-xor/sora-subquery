import { SubstrateExtrinsic } from '@subql/types';
import { formatU128ToBalance, assignCommonHistoryElemInfo, getAssetId } from "./utils";

export async function handlerIrohaMigration(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught iroha migration extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    let details = new Object();

    if (record.execution.success) {

        let assetTransferEvent = extrinsic.events.find(e => e.event.method === 'Deposited' && e.event.section === 'currencies')
        if (assetTransferEvent) {
            const { event: { data: [asset, , amount] } } = assetTransferEvent;
            let assetId = getAssetId(asset);
            details = {
                assetId: assetId,
                amount: formatU128ToBalance(amount.toString(), assetId)
            }

        } else {
            assetTransferEvent = extrinsic.events.find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')
            if (assetTransferEvent) {
                const { event: { data: [asset, , , amount] } } = assetTransferEvent;
                let assetId = getAssetId(asset);
                details = {
                    assetId: assetId,
                    amount: formatU128ToBalance(amount.toString(), assetId)
                }

            }
        }

        record.data = details

        await record.save();

        logger.debug(`===== Saved iroha migration with ${extrinsic.extrinsic.hash.toString()} txid =====`);

    }

}
