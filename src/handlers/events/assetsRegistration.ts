import { Event, BlockContext } from '../../types'
import { assetPrecisions, assetStorage, tickerSyntheticAssetId } from '../../utils/assets'
import { getEventHandlerLog, logStartProcessingEvent } from '../../utils/logs'
import { assetRegistrationStream } from '../../utils/stream'
import { getAssetsAssetRegisteredEventData, getXSTPoolSyntheticAssetEnabledEventData } from '../../extractors/events'
import { getAssetsAssetInfosStorageData } from '../../extractors/storage'

export async function assetRegistrationEventHandler(ctx: BlockContext, event: Event<'Assets.AssetRegistered'>): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const { assetId } = await getAssetsAssetRegisteredEventData(ctx, event)
	const { symbol, name, decimals, content, description } = await getAssetsAssetInfosStorageData(ctx, assetId)

	if (!assetPrecisions.has(assetId)) {
		assetPrecisions.set(assetId, decimals)
	}

	const assetData = { address: assetId, symbol, name, decimals, content, description }

  	assetRegistrationStream.update(assetId, JSON.stringify(assetData))

	await assetStorage.getAsset(ctx, assetId)
}

export async function syntheticAssetEnabledEventHandler(
	ctx: BlockContext,
	event: Event<'XSTPool.SyntheticAssetEnabled'>,
): Promise<void> {
	logStartProcessingEvent(ctx, event)

	const data = await getXSTPoolSyntheticAssetEnabledEventData(ctx, event)

	const { assetId, referenceSymbol } = data

	if (!referenceSymbol) return

	tickerSyntheticAssetId.set(referenceSymbol, assetId)
	// synthetic assets always have 18 decimals
	assetPrecisions.set(assetId, 18)

	getEventHandlerLog(ctx, event).debug({ assetId, referenceSymbol }, 'Synthetic asset enabled')

	await assetStorage.getAsset(ctx, assetId)
}
