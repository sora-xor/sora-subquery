import * as stageCalls from '../../stage/order-book/calls'
import * as testCalls from '../../test/order-book/calls'
import * as devCalls from '../../dev/order-book/calls'


export const createOrderbook = {
	name: 'OrderBook.create_orderbook',
	v69Stage: stageCalls.createOrderbook['v69'],
	v70Stage: stageCalls.createOrderbook['v70'],
	v69Test: testCalls.createOrderbook['v69'],
	v70Test: testCalls.createOrderbook['v70'],
	v70Dev: devCalls.createOrderbook['v70'],
}

export const deleteOrderbook = {
	name: 'OrderBook.delete_orderbook',
	v69Stage: stageCalls.deleteOrderbook['v69'],
	v69Test: testCalls.deleteOrderbook['v69'],
	v70Dev: devCalls.deleteOrderbook['v70'],
}

export const updateOrderbook = {
	name: 'OrderBook.update_orderbook',
	v69Stage: stageCalls.updateOrderbook['v69'],
	v69Test: testCalls.updateOrderbook['v69'],
	v70Dev: devCalls.updateOrderbook['v70'],
}

export const changeOrderbookStatus = {
	name: 'OrderBook.change_orderbook_status',
	v69Stage: stageCalls.changeOrderbookStatus['v69'],
	v69Test: testCalls.changeOrderbookStatus['v69'],
	v70Dev: devCalls.changeOrderbookStatus['v70'],
}

export const placeLimitOrder = {
	name: 'OrderBook.place_limit_order',
	v69Stage: stageCalls.placeLimitOrder['v69'],
	v69Test: testCalls.placeLimitOrder['v69'],
	v70Dev: devCalls.placeLimitOrder['v70'],
}

export const cancelLimitOrder = {
	name: 'OrderBook.cancel_limit_order',
	v69Stage: stageCalls.cancelLimitOrder['v69'],
	v69Test: testCalls.cancelLimitOrder['v69'],
	v70Dev: devCalls.cancelLimitOrder['v70'],
}

export const cancelLimitOrdersBatch = {
	name: 'OrderBook.cancel_limit_orders_batch',
	v69Stage: stageCalls.cancelLimitOrdersBatch['v69'],
	v69Test: testCalls.cancelLimitOrdersBatch['v69'],
	v70Dev: devCalls.cancelLimitOrdersBatch['v70'],
}

export const executeMarketOrder = {
	name: 'OrderBook.execute_market_order',
	v69Stage: stageCalls.executeMarketOrder['v69'],
	v69Test: testCalls.executeMarketOrder['v69'],
	v70Dev: devCalls.executeMarketOrder['v70'],
}
