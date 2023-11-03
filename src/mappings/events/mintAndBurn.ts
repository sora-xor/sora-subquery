import { SubstrateEvent } from "@subql/types";
import { getAssetId, assetSnapshotsStorage } from '../../utils/assets';
import { formatDateTimestamp } from '../../utils';
import { XOR } from '../../utils/consts';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";

export async function handleTokenBurn(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    const { event: { data: [ currencyId, who, balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateBurned(event.block, assetId, amount, blockTimestamp);
}

export async function handleXorBurn(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)
    
    const { event: { data: [ who, balance ] } } = event;

    const assetId = XOR;
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

    await assetSnapshotsStorage.updateBurned(event.block, assetId, amount, blockTimestamp);
}

export async function handleTokenMint(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    const { event: { data: [ currencyId, who, balance ] } } = event;

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

	getEventHandlerLog(event).debug(`1 Minting ${amount} of ${assetId}`)
    await assetSnapshotsStorage.updateMinted(event.block, assetId, amount, blockTimestamp);
}

export async function handleXorMint(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    const { event: { data: [ who, balance ] } } = event;

    const assetId = XOR;
    const amount = BigInt(balance.toString());
    const blockTimestamp = formatDateTimestamp(event.block.timestamp);

	getEventHandlerLog(event).debug(`2 Minting ${amount} of ${assetId}`)
    await assetSnapshotsStorage.updateMinted(event.block, assetId, amount, blockTimestamp);
}
