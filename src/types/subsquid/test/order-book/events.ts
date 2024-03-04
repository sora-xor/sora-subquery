import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v69 from '../v69'
import * as v70 from '../v70'

export const orderBookCreated =  {
    name: 'OrderBook.OrderBookCreated',
    /**
     * New order book is created by user
     */
    v69: new EventType(
        'OrderBook.OrderBookCreated',
        sts.struct({
            orderBookId: v69.OrderBookId,
            creator: v69.AccountId32,
        })
    ),
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
    v69: new EventType(
        'OrderBook.OrderBookDeleted',
        sts.struct({
            orderBookId: v69.OrderBookId,
        })
    ),
}

export const orderBookStatusChanged =  {
    name: 'OrderBook.OrderBookStatusChanged',
    /**
     * Order book status is changed
     */
    v69: new EventType(
        'OrderBook.OrderBookStatusChanged',
        sts.struct({
            orderBookId: v69.OrderBookId,
            newStatus: v69.OrderBookStatus,
        })
    ),
}

export const orderBookUpdated =  {
    name: 'OrderBook.OrderBookUpdated',
    /**
     * Order book attributes are updated
     */
    v69: new EventType(
        'OrderBook.OrderBookUpdated',
        sts.struct({
            orderBookId: v69.OrderBookId,
        })
    ),
}

export const limitOrderPlaced =  {
    name: 'OrderBook.LimitOrderPlaced',
    /**
     * User placed new limit order
     */
    v69: new EventType(
        'OrderBook.LimitOrderPlaced',
        sts.struct({
            orderBookId: v69.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v69.AccountId32,
            side: v69.PriceVariant,
            price: v69.BalanceUnit,
            amount: v69.BalanceUnit,
            lifetime: sts.bigint(),
        })
    ),
}

export const limitOrderConvertedToMarketOrder =  {
    name: 'OrderBook.LimitOrderConvertedToMarketOrder',
    /**
     * User tried to place the limit order out of the spread. The limit order is converted into a market order.
     */
    v69: new EventType(
        'OrderBook.LimitOrderConvertedToMarketOrder',
        sts.struct({
            orderBookId: v69.OrderBookId,
            ownerId: v69.AccountId32,
            direction: v69.PriceVariant,
            amount: v69.OrderAmount,
            averagePrice: v69.BalanceUnit,
        })
    ),
}

export const limitOrderIsSplitIntoMarketOrderAndLimitOrder =  {
    name: 'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
    /**
     * User tried to place the limit order out of the spread.
     * One part of the liquidity of the limit order is converted into a market order, and the other part is placed as a limit order.
     */
    v69: new EventType(
        'OrderBook.LimitOrderIsSplitIntoMarketOrderAndLimitOrder',
        sts.struct({
            orderBookId: v69.OrderBookId,
            ownerId: v69.AccountId32,
            marketOrderDirection: v69.PriceVariant,
            marketOrderAmount: v69.OrderAmount,
            marketOrderAveragePrice: v69.BalanceUnit,
            limitOrderId: sts.bigint(),
        })
    ),
}

export const limitOrderCanceled =  {
    name: 'OrderBook.LimitOrderCanceled',
    /**
     * User canceled their limit order or the limit order has reached the end of its lifespan
     */
    v69: new EventType(
        'OrderBook.LimitOrderCanceled',
        sts.struct({
            orderBookId: v69.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v69.AccountId32,
            reason: v69.CancelReason,
        })
    ),
}

export const limitOrderExecuted =  {
    name: 'OrderBook.LimitOrderExecuted',
    /**
     * Some amount of the limit order is executed
     */
    v69: new EventType(
        'OrderBook.LimitOrderExecuted',
        sts.struct({
            orderBookId: v69.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v69.AccountId32,
            side: v69.PriceVariant,
            price: v69.BalanceUnit,
            amount: v69.OrderAmount,
        })
    ),
}

export const limitOrderFilled =  {
    name: 'OrderBook.LimitOrderFilled',
    /**
     * All amount of the limit order is executed
     */
    v69: new EventType(
        'OrderBook.LimitOrderFilled',
        sts.struct({
            orderBookId: v69.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v69.AccountId32,
        })
    ),
}

export const limitOrderUpdated =  {
    name: 'OrderBook.LimitOrderUpdated',
    /**
     * The limit order is updated
     */
    v69: new EventType(
        'OrderBook.LimitOrderUpdated',
        sts.struct({
            orderBookId: v69.OrderBookId,
            orderId: sts.bigint(),
            ownerId: v69.AccountId32,
            newAmount: v69.BalanceUnit,
        })
    ),
}

export const marketOrderExecuted =  {
    name: 'OrderBook.MarketOrderExecuted',
    /**
     * User executes a deal by the market order
     */
    v69: new EventType(
        'OrderBook.MarketOrderExecuted',
        sts.struct({
            orderBookId: v69.OrderBookId,
            ownerId: v69.AccountId32,
            direction: v69.PriceVariant,
            amount: v69.OrderAmount,
            averagePrice: v69.BalanceUnit,
            to: sts.option(() => v69.AccountId32),
        })
    ),
}

export const expirationFailure =  {
    name: 'OrderBook.ExpirationFailure',
    /**
     * Failed to cancel expired order
     */
    v69: new EventType(
        'OrderBook.ExpirationFailure',
        sts.struct({
            orderBookId: v69.OrderBookId,
            orderId: sts.bigint(),
            error: v69.DispatchError,
        })
    ),
}

export const alignmentFailure =  {
    name: 'OrderBook.AlignmentFailure',
    /**
     * Failed to cancel expired order
     */
    v69: new EventType(
        'OrderBook.AlignmentFailure',
        sts.struct({
            orderBookId: v69.OrderBookId,
            error: v69.DispatchError,
        })
    ),
}
