import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const endowed =  {
    name: 'Balances.Endowed',
    /**
     *  An account was created with some free balance. \[account, free_balance\]
     */
    v1: new EventType(
        'Balances.Endowed',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * An account was created with some free balance.
     */
    v42: new EventType(
        'Balances.Endowed',
        sts.struct({
            account: v42.AccountId32,
            freeBalance: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Balances.DustLost',
    /**
     *  An account was removed whose balance was non-zero but below ExistentialDeposit,
     *  resulting in an outright loss. \[account, balance\]
     */
    v1: new EventType(
        'Balances.DustLost',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    v42: new EventType(
        'Balances.DustLost',
        sts.struct({
            account: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     *  Transfer succeeded. \[from, to, value\]
     */
    v1: new EventType(
        'Balances.Transfer',
        sts.tuple([v1.AccountId, v1.AccountId, v1.Balance])
    ),
    /**
     * Transfer succeeded.
     */
    v42: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: v42.AccountId32,
            to: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'Balances.BalanceSet',
    /**
     *  A balance was set by root. \[who, free, reserved\]
     */
    v1: new EventType(
        'Balances.BalanceSet',
        sts.tuple([v1.AccountId, v1.Balance, v1.Balance])
    ),
    /**
     * A balance was set by root.
     */
    v42: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v42.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Balances.Deposit',
    /**
     *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
     */
    v1: new EventType(
        'Balances.Deposit',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    v42: new EventType(
        'Balances.Deposit',
        sts.struct({
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Balances.Reserved',
    /**
     *  Some balance was reserved (moved from free to reserved). \[who, value\]
     */
    v1: new EventType(
        'Balances.Reserved',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v42: new EventType(
        'Balances.Reserved',
        sts.struct({
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Balances.Unreserved',
    /**
     *  Some balance was unreserved (moved from reserved to free). \[who, value\]
     */
    v1: new EventType(
        'Balances.Unreserved',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v42: new EventType(
        'Balances.Unreserved',
        sts.struct({
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Balances.ReserveRepatriated',
    /**
     *  Some balance was moved from the reserve of the first account to the second account.
     *  Final argument indicates the destination balance type.
     *  \[from, to, balance, destination_status\]
     */
    v1: new EventType(
        'Balances.ReserveRepatriated',
        sts.tuple([v1.AccountId, v1.AccountId, v1.Balance, v1.BalanceStatus])
    ),
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    v42: new EventType(
        'Balances.ReserveRepatriated',
        sts.struct({
            from: v42.AccountId32,
            to: v42.AccountId32,
            amount: sts.bigint(),
            destinationStatus: v42.BalanceStatus,
        })
    ),
}

export const withdraw =  {
    name: 'Balances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    v42: new EventType(
        'Balances.Withdraw',
        sts.struct({
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Balances.Slashed',
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    v42: new EventType(
        'Balances.Slashed',
        sts.struct({
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
