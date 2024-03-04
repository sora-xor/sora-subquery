import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const createOrderbook =  {
    name: 'OrderBook.create_orderbook',
    v70: new CallType(
        'OrderBook.create_orderbook',
        sts.struct({
            orderBookId: v70.OrderBookId,
            tickSize: sts.bigint(),
            stepLotSize: sts.bigint(),
            minLotSize: sts.bigint(),
            maxLotSize: sts.bigint(),
        })
    ),
}

export const deleteOrderbook =  {
    name: 'OrderBook.delete_orderbook',
    v70: new CallType(
        'OrderBook.delete_orderbook',
        sts.struct({
            orderBookId: v70.OrderBookId,
        })
    ),
}

export const updateOrderbook =  {
    name: 'OrderBook.update_orderbook',
    v70: new CallType(
        'OrderBook.update_orderbook',
        sts.struct({
            orderBookId: v70.OrderBookId,
            tickSize: sts.bigint(),
            stepLotSize: sts.bigint(),
            minLotSize: sts.bigint(),
            maxLotSize: sts.bigint(),
        })
    ),
}

export const changeOrderbookStatus =  {
    name: 'OrderBook.change_orderbook_status',
    v70: new CallType(
        'OrderBook.change_orderbook_status',
        sts.struct({
            orderBookId: v70.OrderBookId,
            status: v70.OrderBookStatus,
        })
    ),
}

export const placeLimitOrder =  {
    name: 'OrderBook.place_limit_order',
    v70: new CallType(
        'OrderBook.place_limit_order',
        sts.struct({
            orderBookId: v70.OrderBookId,
            price: sts.bigint(),
            amount: sts.bigint(),
            side: v70.PriceVariant,
            lifespan: sts.option(() => sts.bigint()),
        })
    ),
}

export const cancelLimitOrder =  {
    name: 'OrderBook.cancel_limit_order',
    v70: new CallType(
        'OrderBook.cancel_limit_order',
        sts.struct({
            orderBookId: v70.OrderBookId,
            orderId: sts.bigint(),
        })
    ),
}

export const cancelLimitOrdersBatch =  {
    name: 'OrderBook.cancel_limit_orders_batch',
    v70: new CallType(
        'OrderBook.cancel_limit_orders_batch',
        sts.struct({
            limitOrdersToCancel: sts.array(() => sts.tuple(() => [v70.OrderBookId, sts.array(() => sts.bigint())])),
        })
    ),
}

export const executeMarketOrder =  {
    name: 'OrderBook.execute_market_order',
    v70: new CallType(
        'OrderBook.execute_market_order',
        sts.struct({
            orderBookId: v70.OrderBookId,
            direction: v70.PriceVariant,
            amount: sts.bigint(),
        })
    ),
}
