import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v22 from '../v22'

export const reserve =  {
    name: 'Referrals.reserve',
    /**
     *  Reserves the balance from the account for a special balance that can be used to pay referrals' fees
     */
    v22: new CallType(
        'Referrals.reserve',
        sts.struct({
            balance: v22.Balance,
        })
    ),
}

export const unreserve =  {
    name: 'Referrals.unreserve',
    /**
     *  Unreserves the balance and transfers it back to the account
     */
    v22: new CallType(
        'Referrals.unreserve',
        sts.struct({
            balance: v22.Balance,
        })
    ),
}

export const setReferrer =  {
    name: 'Referrals.set_referrer',
    /**
     *  Sets the referrer for the account
     */
    v22: new CallType(
        'Referrals.set_referrer',
        sts.struct({
            referrer: v22.AccountId,
        })
    ),
}
