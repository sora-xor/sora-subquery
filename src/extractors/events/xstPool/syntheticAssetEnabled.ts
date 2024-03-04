import { indexer } from '../../../config'
import { AssetId, BlockContext, Event, ReferenceSymbol } from '../../../types'
import { events } from '../../../types/subsquid/merged'
import { bytesToString, toReferenceSymbol } from '../../../utils'
import { getAssetId } from '../../../utils/assets'
import { getEventData } from '../../../utils/subsquid/entities'

type EventName = 'XSTPool.SyntheticAssetEnabled'
type Data = {
	assetId: AssetId
	referenceSymbol?: ReferenceSymbol
}

function getSubsquidData(ctx: BlockContext, event: Event<EventName>): Data {
	const data = getEventData(ctx, events.xstPool.syntheticAssetEnabled, event)

	if (!Array.isArray(data)) return {
		assetId: getAssetId(data),
	}

	const [asset, ticker] = data

	const assetId = getAssetId(asset)
	const referenceSymbol = toReferenceSymbol(ticker)

	return {
		assetId,
		referenceSymbol
	}
}

function getSubqueryData(ctx: BlockContext, event: any): Data {
    const { event: { data: [asset, ticker] } } = event;

	const assetId = getAssetId(asset);
	const referenceSymbol = bytesToString(ticker) as ReferenceSymbol;

	return { assetId, referenceSymbol }
}

export function getXSTPoolSyntheticAssetEnabledEventData(ctx: BlockContext, event: Event<EventName>): Data {
	return indexer === 'subsquid'
		? getSubsquidData(ctx, event)
		: getSubqueryData(ctx, event)
}