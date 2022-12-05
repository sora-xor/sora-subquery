import { SubstrateEvent } from "@subql/types";
import { getAssetId, assetSnapshotsStorage } from '../utils/assets';
import { formatDateTimestamp } from '../utils';

export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    const { event: { data: [ currencyId, , balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateBurned(assetId, amount, blockTimestamp);
}

export async function handleRemintedAssetsAmount(event: SubstrateEvent): Promise<void> {
    const { event: { data: [ currencyId, , balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateMinted(assetId, amount, blockTimestamp);
}
