import { SubstrateEvent } from "@subql/types";
import { RemintedAssetsAmount } from "../types";

export async function handleRemintedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.debug(`event reminted ${event.event.data}`);
    const { event: { data: [ currencyId, , balance ] } } = event;

    let remintedAssetsAmount: RemintedAssetsAmount = new RemintedAssetsAmount(event.event.hash.toString());
    remintedAssetsAmount.blockHeight = event.block.block.header.number.toBigInt();
    remintedAssetsAmount.blockHash = event.block.block.header.hash.toString();
    remintedAssetsAmount.currencyId = currencyId.toString();
    remintedAssetsAmount.balance = BigInt(balance.toString());

    await remintedAssetsAmount.save();
}
