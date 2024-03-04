import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const endowed =  {
    name: 'Balances.Endowed',
    /**
     * An account was created with some free balance.
     */
    v70: new EventType(
        'Balances.Endowed',
        sts.struct({
            account: v70.AccountId32,
            freeBalance: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Balances.DustLost',
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    v70: new EventType(
        'Balances.DustLost',
        sts.struct({
            account: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     * Transfer succeeded.
     */
    v70: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: v70.AccountId32,
            to: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'Balances.BalanceSet',
    /**
     * A balance was set by root.
     */
    v70: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v70.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Balances.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v70: new EventType(
        'Balances.Reserved',
        sts.struct({
            who: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Balances.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v70: new EventType(
        'Balances.Unreserved',
        sts.struct({
            who: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Balances.ReserveRepatriated',
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    v70: new EventType(
        'Balances.ReserveRepatriated',
        sts.struct({
            from: v70.AccountId32,
            to: v70.AccountId32,
            amount: sts.bigint(),
            destinationStatus: v70.BalanceStatus,
        })
    ),
}

export const deposit =  {
    name: 'Balances.Deposit',
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    v70: new EventType(
        'Balances.Deposit',
        sts.struct({
            who: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdraw =  {
    name: 'Balances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    v70: new EventType(
        'Balances.Withdraw',
        sts.struct({
            who: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Balances.Slashed',
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    v70: new EventType(
        'Balances.Slashed',
        sts.struct({
            who: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
