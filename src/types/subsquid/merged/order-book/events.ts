import * as stageEvents from '../../stage/order-book/events'
import * as testEvents from '../../test/order-book/events'
import * as devEvents from '../../dev/order-book/events'


export const orderBookCreated = {
	name: 'OrderBook.OrderBookCreated',
	v69Stage: stageEvents.orderBookCreated['v69'],
	v70Stage: stageEvents.orderBookCreated['v70'],
	v69Test: testEvents.orderBookCreated['v69'],
	v70Test: testEvents.orderBookCreated['v70'],
	v70Dev: devEvents.orderBookCreated['v70'],
}

export const orderBookDeleted = {
	name: 'OrderBook.OrderBookDeleted',
	v69Stage: stageEvents.orderBookDeleted['v69'],
	v69Test: testEvents.orderBookDeleted['v69'],
	v70Dev: devEvents.orderBookDeleted['v70'],
}

export const orderBookStatusChanged = {
	name: 'OrderBook.OrderBookStatusChanged',
	v69Stage: stageEvents.orderBookStatusChanged['v69'],
	v69Test: testEvents.orderBookStatusChanged['v69'],
	v70Dev: devEvents.orderBookStatusChanged['v70'],
}

export const orderBookUpdated = {
	name: 'OrderBook.OrderBookUpdated',
	v69Stage: stageEvents.orderBookUpdated['v69'],
	v69Test: testEvents.orderBookUpdated['v69'],
	v70Dev: devEvents.orderBookUpdated['v70'],
}

export const limitOrderPlaced = {
	name: 'OrderBook.LimitOrderPlaced',
	v69Stage: stageEvents.limitOrderPlaced['v69'],
	v69Test: testEvents.limitOrderPlaced['v69'],
	v70Dev: devEvents.limitOrderPlaced['v70'],
}

export const limitOrderConvertedToMarketOrder = {
	name: 'OrderBook.LimitOrderConvertedToMarketOrder',
	v69Stage: stageEvents.limitOrderConvertedToMarketOrder['v69'],
	v69Test: testEvents.limitOrderConvertedToMarketOrder['v69'],
	v70Dev: devEvents.limitOrderConvertedToMarketOrder['v70'],
}

export const limitOrderIsSplitIntoMarketOrderAndLimitOrder = {
	name: 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
	v69Stage: stageEvents.limitOrderIsSplitIntoMarketOrderAndLimitOrder['v69'],
	v69Test: testEvents.limitOrderIsSplitIntoMarketOrderAndLimitOrder['v69'],
	v70Dev: devEvents.limitOrderIsSplitIntoMarketOrderAndLimitOrder['v70'],
}

export const limitOrderCanceled = {
	name: 'OrderBook.LimitOrderCanceled',
	v69Stage: stageEvents.limitOrderCanceled['v69'],
	v69Test: testEvents.limitOrderCanceled['v69'],
	v70Dev: devEvents.limitOrderCanceled['v70'],
}

export const limitOrderExecuted = {
	name: 'OrderBook.LimitOrderExecuted',
	v69Stage: stageEvents.limitOrderExecuted['v69'],
	v69Test: testEvents.limitOrderExecuted['v69'],
	v70Dev: devEvents.limitOrderExecuted['v70'],
}

export const limitOrderFilled = {
	name: 'OrderBook.LimitOrderFilled',
	v69Stage: stageEvents.limitOrderFilled['v69'],
	v69Test: testEvents.limitOrderFilled['v69'],
	v70Dev: devEvents.limitOrderFilled['v70'],
}

export const limitOrderUpdated = {
	name: 'OrderBook.LimitOrderUpdated',
	v69Stage: stageEvents.limitOrderUpdated['v69'],
	v69Test: testEvents.limitOrderUpdated['v69'],
	v70Dev: devEvents.limitOrderUpdated['v70'],
}

export const marketOrderExecuted = {
	name: 'OrderBook.MarketOrderExecuted',
	v69Stage: stageEvents.marketOrderExecuted['v69'],
	v69Test: testEvents.marketOrderExecuted['v69'],
	v70Dev: devEvents.marketOrderExecuted['v70'],
}

export const expirationFailure = {
	name: 'OrderBook.ExpirationFailure',
	v69Stage: stageEvents.expirationFailure['v69'],
	v69Test: testEvents.expirationFailure['v69'],
	v70Dev: devEvents.expirationFailure['v70'],
}

export const alignmentFailure = {
	name: 'OrderBook.AlignmentFailure',
	v69Stage: stageEvents.alignmentFailure['v69'],
	v69Test: testEvents.alignmentFailure['v69'],
	v70Dev: devEvents.alignmentFailure['v70'],
}
