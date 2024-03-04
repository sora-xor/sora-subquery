import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const transferred =  {
    name: 'Currencies.Transferred',
    /**
     *  Currency transfer success. [currency_id, from, to, amount]
     */
    v33: new EventType(
        'Currencies.Transferred',
        sts.tuple([v33.CurrencyIdOf, v33.AccountId, v33.AccountId, v33.BalanceOf])
    ),
}

export const balanceUpdated =  {
    name: 'Currencies.BalanceUpdated',
    /**
     *  Update balance success. [currency_id, who, amount]
     */
    v33: new EventType(
        'Currencies.BalanceUpdated',
        sts.tuple([v33.CurrencyIdOf, v33.AccountId, v33.AmountOf])
    ),
}

export const deposited =  {
    name: 'Currencies.Deposited',
    /**
     *  Deposit success. [currency_id, who, amount]
     */
    v33: new EventType(
        'Currencies.Deposited',
        sts.tuple([v33.CurrencyIdOf, v33.AccountId, v33.BalanceOf])
    ),
}

export const withdrawn =  {
    name: 'Currencies.Withdrawn',
    /**
     *  Withdraw success. [currency_id, who, amount]
     */
    v33: new EventType(
        'Currencies.Withdrawn',
        sts.tuple([v33.CurrencyIdOf, v33.AccountId, v33.BalanceOf])
    ),
}
