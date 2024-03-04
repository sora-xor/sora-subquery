import * as stageStorage from '../../stage/order-book/storage'
import * as testStorage from '../../test/order-book/storage'
import * as devStorage from '../../dev/order-book/storage'


export const orderBooks = {
	name: 'OrderBook.OrderBooks',
	v69Stage: stageStorage.orderBooks['v69'],
	v69Test: testStorage.orderBooks['v69'],
	v70Dev: devStorage.orderBooks['v70'],
}

export const limitOrders = {
	name: 'OrderBook.LimitOrders',
	v69Stage: stageStorage.limitOrders['v69'],
	v69Test: testStorage.limitOrders['v69'],
	v70Dev: devStorage.limitOrders['v70'],
}

export const bids = {
	name: 'OrderBook.Bids',
	v69Stage: stageStorage.bids['v69'],
	v69Test: testStorage.bids['v69'],
	v70Dev: devStorage.bids['v70'],
}

export const asks = {
	name: 'OrderBook.Asks',
	v69Stage: stageStorage.asks['v69'],
	v69Test: testStorage.asks['v69'],
	v70Dev: devStorage.asks['v70'],
}

export const aggregatedBids = {
	name: 'OrderBook.AggregatedBids',
	v69Stage: stageStorage.aggregatedBids['v69'],
	v69Test: testStorage.aggregatedBids['v69'],
	v70Dev: devStorage.aggregatedBids['v70'],
}

export const aggregatedAsks = {
	name: 'OrderBook.AggregatedAsks',
	v69Stage: stageStorage.aggregatedAsks['v69'],
	v69Test: testStorage.aggregatedAsks['v69'],
	v70Dev: devStorage.aggregatedAsks['v70'],
}

export const userLimitOrders = {
	name: 'OrderBook.UserLimitOrders',
	v69Stage: stageStorage.userLimitOrders['v69'],
	v69Test: testStorage.userLimitOrders['v69'],
	v70Dev: devStorage.userLimitOrders['v70'],
}

export const expirationsAgenda = {
	name: 'OrderBook.ExpirationsAgenda',
	v69Stage: stageStorage.expirationsAgenda['v69'],
	v69Test: testStorage.expirationsAgenda['v69'],
	v70Dev: devStorage.expirationsAgenda['v70'],
}

export const alignmentCursor = {
	name: 'OrderBook.AlignmentCursor',
	v69Stage: stageStorage.alignmentCursor['v69'],
	v69Test: testStorage.alignmentCursor['v69'],
	v70Dev: devStorage.alignmentCursor['v70'],
}

export const incompleteExpirationsSince = {
	name: 'OrderBook.IncompleteExpirationsSince',
	v69Stage: stageStorage.incompleteExpirationsSince['v69'],
	v69Test: testStorage.incompleteExpirationsSince['v69'],
	v70Dev: devStorage.incompleteExpirationsSince['v70'],
}
