import { SubstrateEvent } from "@subql/types";
import { getAssetId, updateAssetMintedAmount, updateAssetBurnedAmount } from '../utils/assets';
import { formatDateTimestamp } from '../utils';

export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    const { event: { data: [ currencyId, , balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await updateAssetBurnedAmount(assetId, amount, blockTimestamp);
}

export async function handleRemintedAssetsAmount(event: SubstrateEvent): Promise<void> {
    const { event: { data: [ currencyId, , balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await updateAssetMintedAmount(assetId, amount, blockTimestamp);
}
