import { indexer } from '../../../config'
import { AssetAmount, BlockContext, Event } from '../../../types'
import { events } from '../../../types/subsquid/merged'
import { getEventData } from '../../../utils/subsquid/entities'

type EventName = 'Balances.Deposit'
type Data = {
	amount: AssetAmount
}

function getSubsquidData(ctx: BlockContext, event: Event<EventName>): Data {
	const data = getEventData(ctx, events.balances.deposit, event)

	const amount = ('amount' in data ? data.amount : data[1]) as AssetAmount

	return { amount }
}

function getSubqueryData(ctx: BlockContext, event: any): Data {
    const { event: { data: [ who, balance ] } } = event

    const amount = BigInt(balance.toString()) as AssetAmount

	return { amount }
}

export function getBalancesDepositEventData(ctx: BlockContext, event: Event<EventName>): Data {
	return indexer === 'subsquid'
		? getSubsquidData(ctx, event)
		: getSubqueryData(ctx, event)
}