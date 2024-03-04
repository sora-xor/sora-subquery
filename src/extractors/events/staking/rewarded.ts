import { indexer } from '../../../config'
import { Address, AssetAmount, BlockContext, Event } from '../../../types'
import { events } from '../../../types/subsquid/merged'
import { toAddress } from '../../../utils'
import { getEventData } from '../../../utils/subsquid/entities'

type EventName = 'Staking.Rewarded'
type Data = {
	stash: Address
	amount: AssetAmount
}

function getSubsquidData(ctx: BlockContext, event: Event<EventName>): Data {
	const data = getEventData(ctx, events.staking.rewarded, event)

	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return {
		stash: toAddress(stash),
		amount: amount as AssetAmount
	}
}

function getSubqueryData(ctx: BlockContext, event: any): Data {
	const data = event.event.data as any

	const stash = Array.isArray(data) ? data[0] : data.stash
	const amount = Array.isArray(data) ? data[1] : data.amount

	return {
		stash: stash.toString(),
		amount: amount as AssetAmount
	}
}

export function getStakingRewardedEventData(ctx: BlockContext, event: Event<EventName>): Data {
	return indexer === 'subsquid'
		? getSubsquidData(ctx, event)
		: getSubqueryData(ctx, event)
}