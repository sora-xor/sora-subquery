import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const orderBookCreated =  {
    name: 'OrderBook.OrderBookCreated',
    /**
     * New order book is created by user
     */
    v70: new EventType(
        'OrderBook.OrderBookCreated',
        sts.struct({
            orderBookId: v70.OrderBookId,
            /**
             * `creator` contains an address if the order book is created for an indivisible asset by the asset holder, or `None` if it is created by root / tech committee
             */
            creator: sts.option(() => v70.AccountId32),
        })
    ),
}

export const orderBookDeleted =  {
    name: 'OrderBook.OrderBookDeleted',
    /**
     * Order book is deleted
     */
    v70: new EventType(
        'OrderBook.OrderBookDeleted',
        sts.struct({
            orderBookId: v70.OrderBookId,
        })
    ),
}

export const orderBookStatusChanged =  {
    name: 'OrderBook.OrderBookStatusChanged',
    /**
     * Order book status is changed
     */
    v70: new EventType(
        'OrderBook.OrderBookStatusChanged',
        sts.struct({
            orderBookId: v70.OrderBookId,
            newStatus: v70.OrderBookStatus,
        })
    ),
}

export const orderBookUpdated =  {
    name: 'OrderBook.OrderBookUpdated',
    /**
     * Order book attributes are updated
     */
    v70: new EventType(
        'OrderBook.OrderBookUpdated',
        sts.struct({
            orderBookId: v70.OrderBookId,
        })
    ),
}

export const limitOrderPlaced =  {
    name: 'OrderBook.LimitOrderPlaced',
    /**
     * User placed new limit order
     */
    v70: new EventType(
        'OrderBook.LimitOrderPlaced',
        sts.struct({
            orderBookId: v70.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v70.AccountId32,
            side: v70.PriceVariant,
            price: v70.BalanceUnit,
            amount: v70.BalanceUnit,
            lifetime: sts.bigint(),
        })
    ),
}

export const limitOrderConvertedToMarketOrder =  {
    name: 'OrderBook.LimitOrderConvertedToMarketOrder',
    /**
     * User tried to place the limit order out of the spread. The limit order is converted into a market order.
     */
    v70: new EventType(
        'OrderBook.LimitOrderConvertedToMarketOrder',
        sts.struct({
            orderBookId: v70.OrderBookId,
            ownerId: v70.AccountId32,
            direction: v70.PriceVariant,
            amount: v70.OrderAmount,
            averagePrice: v70.BalanceUnit,
        })
    ),
}

export const limitOrderIsSplitIntoMarketOrderAndLimitOrder =  {
    name: 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
    /**
     * User tried to place the limit order out of the spread.
     * One part of the liquidity of the limit order is converted into a market order, and the other part is placed as a limit order.
     */
    v70: new EventType(
        'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
        sts.struct({
            orderBookId: v70.OrderBookId,
            ownerId: v70.AccountId32,
            marketOrderDirection: v70.PriceVariant,
            marketOrderAmount: v70.OrderAmount,
            marketOrderAveragePrice: v70.BalanceUnit,
            limitOrderId: sts.bigint(),
        })
    ),
}

export const limitOrderCanceled =  {
    name: 'OrderBook.LimitOrderCanceled',
    /**
     * User canceled their limit order or the limit order has reached the end of its lifespan
     */
    v70: new EventType(
        'OrderBook.LimitOrderCanceled',
        sts.struct({
            orderBookId: v70.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v70.AccountId32,
            reason: v70.CancelReason,
        })
    ),
}

export const limitOrderExecuted =  {
    name: 'OrderBook.LimitOrderExecuted',
    /**
     * Some amount of the limit order is executed
     */
    v70: new EventType(
        'OrderBook.LimitOrderExecuted',
        sts.struct({
            orderBookId: v70.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v70.AccountId32,
            side: v70.PriceVariant,
            price: v70.BalanceUnit,
            amount: v70.OrderAmount,
        })
    ),
}

export const limitOrderFilled =  {
    name: 'OrderBook.LimitOrderFilled',
    /**
     * All amount of the limit order is executed
     */
    v70: new EventType(
        'OrderBook.LimitOrderFilled',
        sts.struct({
            orderBookId: v70.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v70.AccountId32,
        })
    ),
}

export const limitOrderUpdated =  {
    name: 'OrderBook.LimitOrderUpdated',
    /**
     * The limit order is updated
     */
    v70: new EventType(
        'OrderBook.LimitOrderUpdated',
        sts.struct({
            orderBookId: v70.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v70.AccountId32,
            newAmount: v70.BalanceUnit,
        })
    ),
}

export const marketOrderExecuted =  {
    name: 'OrderBook.MarketOrderExecuted',
    /**
     * User executes a deal by the market order
     */
    v70: new EventType(
        'OrderBook.MarketOrderExecuted',
        sts.struct({
            orderBookId: v70.OrderBookId,
            ownerId: v70.AccountId32,
            direction: v70.PriceVariant,
            amount: v70.OrderAmount,
            averagePrice: v70.BalanceUnit,
            to: sts.option(() => v70.AccountId32),
        })
    ),
}

export const expirationFailure =  {
    name: 'OrderBook.ExpirationFailure',
    /**
     * Failed to cancel expired order
     */
    v70: new EventType(
        'OrderBook.ExpirationFailure',
        sts.struct({
            orderBookId: v70.OrderBookId,
            orderId: sts.bigint(),
            error: v70.DispatchError,
        })
    ),
}

export const alignmentFailure =  {
    name: 'OrderBook.AlignmentFailure',
    /**
     * Failed to cancel expired order
     */
    v70: new EventType(
        'OrderBook.AlignmentFailure',
        sts.struct({
            orderBookId: v70.OrderBookId,
            error: v70.DispatchError,
        })
    ),
}
