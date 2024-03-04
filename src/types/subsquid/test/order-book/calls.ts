import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v69 from '../v69'
import * as v70 from '../v70'

export const createOrderbook =  {
    name: 'OrderBook.create_orderbook',
    v69: new CallType(
        'OrderBook.create_orderbook',
        sts.struct({
            orderBookId: v69.OrderBookId,
        })
    ),
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
    v69: new CallType(
        'OrderBook.delete_orderbook',
        sts.struct({
            orderBookId: v69.OrderBookId,
        })
    ),
}

export const updateOrderbook =  {
    name: 'OrderBook.update_orderbook',
    v69: new CallType(
        'OrderBook.update_orderbook',
        sts.struct({
            orderBookId: v69.OrderBookId,
            tickSize: sts.bigint(),
            stepLotSize: sts.bigint(),
            minLotSize: sts.bigint(),
            maxLotSize: sts.bigint(),
        })
    ),
}

export const changeOrderbookStatus =  {
    name: 'OrderBook.change_orderbook_status',
    v69: new CallType(
        'OrderBook.change_orderbook_status',
        sts.struct({
            orderBookId: v69.OrderBookId,
            status: v69.OrderBookStatus,
        })
    ),
}

export const placeLimitOrder =  {
    name: 'OrderBook.place_limit_order',
    v69: new CallType(
        'OrderBook.place_limit_order',
        sts.struct({
            orderBookId: v69.OrderBookId,
            price: sts.bigint(),
            amount: sts.bigint(),
            side: v69.PriceVariant,
            lifespan: sts.option(() => sts.bigint()),
        })
    ),
}

export const cancelLimitOrder =  {
    name: 'OrderBook.cancel_limit_order',
    v69: new CallType(
        'OrderBook.cancel_limit_order',
        sts.struct({
            orderBookId: v69.OrderBookId,
            orderId: sts.bigint(),
        })
    ),
}

export const cancelLimitOrdersBatch =  {
    name: 'OrderBook.cancel_limit_orders_batch',
    v69: new CallType(
        'OrderBook.cancel_limit_orders_batch',
        sts.struct({
            limitOrdersToCancel: sts.array(() => sts.tuple(() => [v69.OrderBookId, sts.array(() => sts.bigint())])),
        })
    ),
}

export const executeMarketOrder =  {
    name: 'OrderBook.execute_market_order',
    v69: new CallType(
        'OrderBook.execute_market_order',
        sts.struct({
            orderBookId: v69.OrderBookId,
            direction: v69.PriceVariant,
            amount: sts.bigint(),
        })
    ),
}
