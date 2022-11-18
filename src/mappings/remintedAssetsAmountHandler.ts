import { SubstrateEvent } from "@subql/types";
import { RemintedAssetsAmount } from "../types";
import { getAssetId } from "./utils";

export async function handleRemintedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.debug(`event reminted ${event.event.data}`);
    const { event: { data: [ currencyId, , balance ] } } = event;

    let record: RemintedAssetsAmount = new RemintedAssetsAmount(event.event.hash.toString());
    record.blockHeight = event.block.block.header.number.toBigInt();
    record.blockHash = event.block.block.header.hash.toString();
    record.timestamp = parseInt(((event.block.timestamp).getTime() / 1000).toFixed(0));
    record.currencyId = getAssetId(currencyId);
    record.balance = BigInt(balance.toString());

    await record.save();
}
