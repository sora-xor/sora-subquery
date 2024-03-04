import { indexer } from '../../../config'
import { AssetAmount, BlockContext, Event } from '../../../types'
import { events } from '../../../types/subsquid/merged'
import { getEventData } from '../../../utils/subsquid/entities'

type EventName = 'XorFee.FeeWithdrawn'
type Data = {
	fee: AssetAmount
}

function getSubsquidData(ctx: BlockContext, event: Event<EventName>): Data {
	const data = getEventData(ctx, events.xorFee.feeWithdrawn, event)

	const fee = data[1] as AssetAmount

	return { fee }
}

function getSubqueryData(ctx: BlockContext, event: any): Data {
	const { event: { data } } = event

	const fee = BigInt(data[1].toString()) as AssetAmount

	return { fee }
}

export function getXorFeeFeeWithdrawnEventData(ctx: BlockContext, event: Event<EventName>): Data {
	return indexer === 'subsquid'
		? getSubsquidData(ctx, event)
		: getSubqueryData(ctx, event)
}