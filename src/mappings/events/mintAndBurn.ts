import { SubstrateEvent } from "@subql/types";
import { getAssetId, assetSnapshotsStorage } from '../../utils/assets';
import { formatDateTimestamp } from '../../utils';
import { XOR } from '../../utils/consts';
import { logStartProcessingEvent } from "../../utils/logs";

export async function handleTokenBurn(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    const { event: { data: [ currencyId, who, balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateBurned(assetId, amount, blockTimestamp);
}

export async function handleXorBurn(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)
    
    const { event: { data: [ who, balance ] } } = event;

    const assetId = XOR;
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateBurned(assetId, amount, blockTimestamp);
}

export async function handleTokenMint(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    const { event: { data: [ currencyId, who, balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateMinted(assetId, amount, blockTimestamp);
}

export async function handleXorMint(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    const { event: { data: [ who, balance ] } } = event;

    const assetId = XOR;
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateMinted(assetId, amount, blockTimestamp);
}
