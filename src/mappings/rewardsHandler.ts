import { SubstrateEvent, SubstrateExtrinsic } from "@subql/types";
import { Amount, CurrencyIdOf } from "sora/api-interfaces";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";


export async function rewardsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught rewards claim extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    if (record.execution.success) {

        let details = new Object();
        let rewards = new Array();
        let moneyTransferEvent1 = extrinsic.events.find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const { event: { data: [assetId,,,amount] } } = moneyTransferEvent1;
        rewards.push({assetId: assetId.toString(), amount: amount.toString()})

        let moneyTransferEvent2 = extrinsic.events.slice((moneyTransferEvent1 as SubstrateEvent).idx).find(e => e.event.method === 'Transferred' && e.event.section === 'currencies')
        if (moneyTransferEvent2) {
            const { event: { data: [assetId,,,amount] } } = moneyTransferEvent2;
            rewards.push({assetId: assetId.toString(), amount: amount.toString()})
        }

        details = rewards
        record.data = details

    }

    await record.save();

    logger.debug(`===== Saved reward claim extrinsic with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}