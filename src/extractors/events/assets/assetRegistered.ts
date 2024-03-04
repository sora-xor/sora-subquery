import { getEventData } from '../../../utils/subsquid/entities'
import { indexer } from '../../../config'
import { AssetId, BlockContext, Event } from '../../../types'
import { events } from '../../../types/subsquid/merged'
import { getAssetId } from '../../../utils/assets'

type EventName = 'Assets.AssetRegistered'
type Data = {
	assetId: AssetId
}

function getSubsquidData(ctx: BlockContext, event: Event<EventName>): Data {
	const [asset] = getEventData(ctx, events.assets.assetRegistered, event)

	const assetId = getAssetId(asset)

	return { assetId }
}

function getSubqueryData(ctx: BlockContext, event: any): Data {
	const { event: { data: [asset] } } = event;

	const assetId = getAssetId(asset);

	return { assetId }
}

export function getAssetsAssetRegisteredEventData(ctx: BlockContext, event: Event<EventName>): Data {
	return indexer === 'subsquid'
		? getSubsquidData(ctx, event)
		: getSubqueryData(ctx, event)
}