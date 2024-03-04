import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const reserve =  {
    name: 'Referrals.reserve',
    /**
     *  Reserves the balance from the account for a special balance that can be used to pay referrals' fees
     */
    v33: new CallType(
        'Referrals.reserve',
        sts.struct({
            balance: v33.Balance,
        })
    ),
}

export const unreserve =  {
    name: 'Referrals.unreserve',
    /**
     *  Unreserves the balance and transfers it back to the account
     */
    v33: new CallType(
        'Referrals.unreserve',
        sts.struct({
            balance: v33.Balance,
        })
    ),
}

export const setReferrer =  {
    name: 'Referrals.set_referrer',
    /**
     *  Sets the referrer for the account
     */
    v33: new CallType(
        'Referrals.set_referrer',
        sts.struct({
            referrer: v33.AccountId,
        })
    ),
}
