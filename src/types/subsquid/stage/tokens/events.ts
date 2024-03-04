import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v52 from '../v52'

export const transferred =  {
    name: 'Tokens.Transferred',
    /**
     *  Token transfer success. \[currency_id, from, to, amount\]
     */
    v33: new EventType(
        'Tokens.Transferred',
        sts.tuple([v33.CurrencyId, v33.AccountId, v33.AccountId, v33.Balance])
    ),
}

export const dustLost =  {
    name: 'Tokens.DustLost',
    /**
     *  An account was removed whose balance was non-zero but below
     *  ExistentialDeposit, resulting in an outright loss. \[account,
     *  currency_id, amount\]
     */
    v33: new EventType(
        'Tokens.DustLost',
        sts.tuple([v33.AccountId, v33.CurrencyId, v33.Balance])
    ),
    /**
     * An account was removed whose balance was non-zero but below
     * ExistentialDeposit, resulting in an outright loss.
     */
    v42: new EventType(
        'Tokens.DustLost',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const endowed =  {
    name: 'Tokens.Endowed',
    /**
     * An account was created with some free balance.
     */
    v42: new EventType(
        'Tokens.Endowed',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Tokens.Transfer',
    /**
     * Transfer succeeded.
     */
    v42: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v42.AssetId32,
            from: v42.AccountId32,
            to: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Tokens.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    v42: new EventType(
        'Tokens.Reserved',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Tokens.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    v42: new EventType(
        'Tokens.Unreserved',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Tokens.ReserveRepatriated',
    /**
     * Some reserved balance was repatriated (moved from reserved to
     * another account).
     */
    v42: new EventType(
        'Tokens.ReserveRepatriated',
        sts.struct({
            currencyId: v42.AssetId32,
            from: v42.AccountId32,
            to: v42.AccountId32,
            amount: sts.bigint(),
            status: v42.BalanceStatus,
        })
    ),
}

export const balanceSet =  {
    name: 'Tokens.BalanceSet',
    /**
     * A balance was set by root.
     */
    v42: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
}

export const totalIssuanceSet =  {
    name: 'Tokens.TotalIssuanceSet',
    /**
     * The total issuance of an currency has been set
     */
    v42: new EventType(
        'Tokens.TotalIssuanceSet',
        sts.struct({
            currencyId: v42.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Tokens.Withdrawn',
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v42: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Tokens.Slashed',
    /**
     * Some balances were slashed (e.g. due to mis-behavior)
     */
    v42: new EventType(
        'Tokens.Slashed',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            freeAmount: sts.bigint(),
            reservedAmount: sts.bigint(),
        })
    ),
}

export const deposited =  {
    name: 'Tokens.Deposited',
    /**
     * Deposited some balance into an account
     */
    v42: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const lockSet =  {
    name: 'Tokens.LockSet',
    /**
     * Some funds are locked
     */
    v42: new EventType(
        'Tokens.LockSet',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const lockRemoved =  {
    name: 'Tokens.LockRemoved',
    /**
     * Some locked funds were unlocked
     */
    v42: new EventType(
        'Tokens.LockRemoved',
        sts.struct({
            lockId: sts.bytes(),
            currencyId: v42.AssetId32,
            who: v42.AccountId32,
        })
    ),
}

export const locked =  {
    name: 'Tokens.Locked',
    /**
     * Some free balance was locked.
     */
    v52: new EventType(
        'Tokens.Locked',
        sts.struct({
            currencyId: v52.AssetId32,
            who: v52.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'Tokens.Unlocked',
    /**
     * Some locked balance was freed.
     */
    v52: new EventType(
        'Tokens.Unlocked',
        sts.struct({
            currencyId: v52.AssetId32,
            who: v52.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
