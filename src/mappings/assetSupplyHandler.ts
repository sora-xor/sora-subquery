import { SubstrateEvent } from "@subql/types";
import { getAssetId, updateAssetMintedAmount, updateAssetBurnedAmount, formatU128ToBalance } from '../utils/assets';
import { formatDateTimestamp } from '../utils';

export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.debug(`event burned ${event.event.data}`);
    const { event: { data: [ currencyId, , balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = formatU128ToBalance(balance.toString(), assetId);
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);
    const blockNumber = event.block.block.header.number.toNumber();

    await updateAssetBurnedAmount(assetId, amount, blockTimestamp, blockNumber);
}

export async function handleRemintedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.debug(`event reminted ${event.event.data}`);
    const { event: { data: [ currencyId, , balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = formatU128ToBalance(balance.toString(), assetId);
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);
    const blockNumber = event.block.block.header.number.toNumber();

    await updateAssetMintedAmount(assetId, amount, blockTimestamp, blockNumber);
}
