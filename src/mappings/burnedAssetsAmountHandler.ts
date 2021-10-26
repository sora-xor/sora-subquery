import { SubstrateEvent } from "@subql/types";
import { BurnedAssetsAmount } from "../types";

export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.debug(`event burned ${event.event.data}`);
    const { event: { data: [ currencyId, , balance ] } } = event;

    let burnedAssetsAmount: BurnedAssetsAmount = new BurnedAssetsAmount(event.event.hash.toString());
    burnedAssetsAmount.blockHeight = event.block.block.header.number.toBigInt();
    burnedAssetsAmount.blockHash = event.block.block.header.hash.toString();
    burnedAssetsAmount.currencyId = currencyId.toString();
    burnedAssetsAmount.balance = BigInt(balance.toString());

    await burnedAssetsAmount.save();
}
