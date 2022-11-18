import { SubstrateEvent } from "@subql/types";
import { BurnedAssetsAmount } from "../types";
import { getAssetId } from "./utils";

export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.debug(`event burned ${event.event.data}`);
    const { event: { data: [ currencyId, , balance ] } } = event;

    let record: BurnedAssetsAmount = new BurnedAssetsAmount(event.event.hash.toString());
    record.blockHeight = event.block.block.header.number.toBigInt();
    record.blockHash = event.block.block.header.hash.toString();
    record.timestamp = parseInt(((event.block.timestamp).getTime() / 1000).toFixed(0));
    record.currencyId = getAssetId(currencyId);
    record.balance = BigInt(balance.toString());

    await record.save();
}
