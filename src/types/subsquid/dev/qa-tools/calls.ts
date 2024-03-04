import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const orderBookCreateAndFillBatch =  {
    name: 'QATools.order_book_create_and_fill_batch',
    /**
     * Create multiple many order books with parameters and fill them according to given parameters.
     * 
     * Balance for placing the orders is minted automatically, trading pairs are
     * created if needed.
     * 
     * In order to create empty order books, one can leave settings empty.
     * 
     * Parameters:
     * - `origin`: root
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `settings`: Parameters for creation of the order book and placing the orders in each order book.
     */
    v70: new CallType(
        'QATools.order_book_create_and_fill_batch',
        sts.struct({
            bidsOwner: v70.AccountId32,
            asksOwner: v70.AccountId32,
            settings: sts.array(() => sts.tuple(() => [v70.OrderBookId, v70.OrderBookAttributes, v70.OrderBookFill])),
        })
    ),
}

export const orderBookFillBatch =  {
    name: 'QATools.order_book_fill_batch',
    /**
     * Fill the order books according to given parameters.
     * 
     * Balance for placing the orders is minted automatically.
     * 
     * Parameters:
     * - `origin`: root
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `settings`: Parameters for placing the orders in each order book.
     */
    v70: new CallType(
        'QATools.order_book_fill_batch',
        sts.struct({
            bidsOwner: v70.AccountId32,
            asksOwner: v70.AccountId32,
            settings: sts.array(() => sts.tuple(() => [v70.OrderBookId, v70.OrderBookFill])),
        })
    ),
}
