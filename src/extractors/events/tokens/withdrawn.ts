import { getAssetId } from '../../../utils/assets'
import { AssetAmount, AssetId, BlockContext, Event } from '../../../types'
import { getEventData } from '../../../utils/subsquid/entities'
import { events } from '../../../types/subsquid/merged'
import { indexer } from '../../../config'

type EventName = 'Tokens.Withdrawn'
type Data = {
	assetId: AssetId,
	amount: AssetAmount
}

function getSubsquidData(ctx: BlockContext, event: Event<EventName>): Data {
	const data = getEventData(ctx, events.tokens.withdrawn, event)

	const assetId = getAssetId(data.currencyId)
	const amount = data.amount as AssetAmount

	return { assetId, amount }
}

function getSubqueryData(ctx: BlockContext, event: any): Data {
    const { event: { data: [ currencyId, who, balance ] } } = event

	const assetId = getAssetId(currencyId)
	const amount = BigInt(balance.toString()) as AssetAmount

	return { assetId, amount }
}

export function getTokensWithdrawnEventData(ctx: BlockContext, event: Event<EventName>): Data {
	return indexer === 'subsquid'
		? getSubsquidData(ctx, event)
		: getSubqueryData(ctx, event)
}