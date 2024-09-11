import { SubstrateEvent } from "@subql/types";
import { getBlockNumber } from '../../utils';
import { getAssetId, assetSnapshotsStorage } from '../../utils/assets';
import { XOR } from '../../utils/consts';
import { getEventData } from '../../utils/events';
import { getEventHandlerLog, logStartProcessingEvent } from "../../utils/logs";
import { initializedAtBlock } from '../models/initializePools'

export async function handleTokenBurn(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    if (initializedAtBlock === getBlockNumber(event.block)) {
        return;
    }

    const [ currencyId, who, balance ] = getEventData(event);

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());

    await assetSnapshotsStorage.updateBurned(event.block, assetId, amount);
}

export async function handleXorBurn(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    if (initializedAtBlock === getBlockNumber(event.block)) {
        return;
    }

    const [ who, balance ] = getEventData(event);

    const assetId = XOR;
    const amount = BigInt(balance.toString());

    await assetSnapshotsStorage.updateBurned(event.block, assetId, amount);
}

export async function handleTokenMint(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    if (initializedAtBlock === getBlockNumber(event.block)) {
        return;
    }

    const [ currencyId, who, balance ] = getEventData(event);

    const assetId = getAssetId(currencyId);
    const amount = BigInt(balance.toString());

	getEventHandlerLog(event).debug(`1 Minting ${amount} of ${assetId}`)
    await assetSnapshotsStorage.updateMinted(event.block, assetId, amount);
}

export async function handleXorMint(event: SubstrateEvent): Promise<void> {
    logStartProcessingEvent(event)

    if (initializedAtBlock === getBlockNumber(event.block)) {
        return;
    }

    const [ who, balance ] = getEventData(event);

    const assetId = XOR;
    const amount = BigInt(balance.toString());

	getEventHandlerLog(event).debug(`2 Minting ${amount} of ${assetId}`)
    await assetSnapshotsStorage.updateMinted(event.block, assetId, amount);
}
