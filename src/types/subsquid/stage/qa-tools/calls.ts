import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v69 from '../v69'
import * as v70 from '../v70'
import * as v71 from '../v71'

export const addToWhitelist =  {
    name: 'QATools.add_to_whitelist',
    /**
     * Add the account to the list of allowed callers.
     */
    v69: new CallType(
        'QATools.add_to_whitelist',
        sts.struct({
            account: v69.AccountId32,
        })
    ),
}

export const removeFromWhitelist =  {
    name: 'QATools.remove_from_whitelist',
    /**
     * Remove the account from the list of allowed callers.
     */
    v69: new CallType(
        'QATools.remove_from_whitelist',
        sts.struct({
            account: v69.AccountId32,
        })
    ),
}

export const orderBookCreateEmptyBatch =  {
    name: 'QATools.order_book_create_empty_batch',
    /**
     * Create multiple order books with default parameters (if do not exist yet).
     * 
     * Parameters:
     * - `origin`: caller, should be account because error messages for unsigned txs are unclear,
     * - `order_book_ids`: ids of the created order books; trading pairs are created
     * if necessary,
     */
    v69: new CallType(
        'QATools.order_book_create_empty_batch',
        sts.struct({
            orderBookIds: sts.array(() => v69.OrderBookId),
        })
    ),
}

export const orderBookCreateAndFillBatch =  {
    name: 'QATools.order_book_create_and_fill_batch',
    /**
     * Create multiple many order books with default parameters if do not exist and
     * fill them according to given parameters.
     * 
     * Balance for placing the orders is minted automatically, trading pairs are
     * created if needed.
     * 
     * Parameters:
     * - `origin`: caller, should be account because unsigned error messages are unclear,
     * - `dex_id`: DEXId for all created order books,
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `fill_settings`: Parameters for placing the orders in each order book.
     * `best_bid_price` should be at least 3 price steps from the lowest accepted price,
     * and `best_ask_price` - at least 3 steps below maximum price,
     */
    v69: new CallType(
        'QATools.order_book_create_and_fill_batch',
        sts.struct({
            bidsOwner: v69.AccountId32,
            asksOwner: v69.AccountId32,
            fillSettings: sts.array(() => sts.tuple(() => [v69.OrderBookId, v69.OrderBookFillSettings])),
        })
    ),
    /**
     * Create multiple many order books with default parameters if do not exist and
     * fill them according to given parameters.
     * 
     * Balance for placing the orders is minted automatically, trading pairs are
     * created if needed.
     * 
     * Parameters:
     * - `origin`: caller, should be account because unsigned error messages are unclear,
     * - `dex_id`: DEXId for all created order books,
     * - `bids_owner`: Creator of the buy orders placed on the order books,
     * - `asks_owner`: Creator of the sell orders placed on the order books,
     * - `settings`: Parameters for placing the orders in each order book.
     * `best_bid_price` should be at least 3 price steps from the lowest accepted price,
     * and `best_ask_price` - at least 3 steps below maximum price,
     */
    v70: new CallType(
        'QATools.order_book_create_and_fill_batch',
        sts.struct({
            bidsOwner: v70.AccountId32,
            asksOwner: v70.AccountId32,
            settings: sts.array(() => sts.tuple(() => [v70.OrderBookId, v70.OrderBookAttributes, v70.OrderBookFillSettings])),
        })
    ),
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
    v71: new CallType(
        'QATools.order_book_create_and_fill_batch',
        sts.struct({
            bidsOwner: v71.AccountId32,
            asksOwner: v71.AccountId32,
            settings: sts.array(() => sts.tuple(() => [v71.OrderBookId, v71.OrderBookAttributes, v71.OrderBookFill])),
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
    v71: new CallType(
        'QATools.order_book_fill_batch',
        sts.struct({
            bidsOwner: v71.AccountId32,
            asksOwner: v71.AccountId32,
            settings: sts.array(() => sts.tuple(() => [v71.OrderBookId, v71.OrderBookFill])),
        })
    ),
}
