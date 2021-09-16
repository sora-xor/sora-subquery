import { SubstrateExtrinsic } from '@subql/types';
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";

export async function handlerIrohaMigration(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught iroha migration extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.sucess) {

        let assetTransferEvent = extrinsic.events.find(e => e.event.method === 'Deposited' && e.event.section === 'currencies')

        if (assetTransferEvent) {

            const { event: { data: [asset, , amount] } } = assetTransferEvent;

            record.irohaMigration = {
                assetId: asset.toString(),
                amount: formatU128ToBalance(amount.toString())
            }

            await record.save();

        }

    }

    logger.debug(`===== Saved iroha migration with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}

