import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const transferred =  {
    name: 'Currencies.Transferred',
    /**
     *  Currency transfer success. [currency_id, from, to, amount]
     */
    v1: new EventType(
        'Currencies.Transferred',
        sts.tuple([v1.CurrencyIdOf, v1.AccountId, v1.AccountId, v1.BalanceOf])
    ),
}

export const balanceUpdated =  {
    name: 'Currencies.BalanceUpdated',
    /**
     *  Update balance success. [currency_id, who, amount]
     */
    v1: new EventType(
        'Currencies.BalanceUpdated',
        sts.tuple([v1.CurrencyIdOf, v1.AccountId, v1.AmountOf])
    ),
}

export const deposited =  {
    name: 'Currencies.Deposited',
    /**
     *  Deposit success. [currency_id, who, amount]
     */
    v1: new EventType(
        'Currencies.Deposited',
        sts.tuple([v1.CurrencyIdOf, v1.AccountId, v1.BalanceOf])
    ),
}

export const withdrawn =  {
    name: 'Currencies.Withdrawn',
    /**
     *  Withdraw success. [currency_id, who, amount]
     */
    v1: new EventType(
        'Currencies.Withdrawn',
        sts.tuple([v1.CurrencyIdOf, v1.AccountId, v1.BalanceOf])
    ),
}
