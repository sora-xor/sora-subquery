import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v22 from '../v22'
import * as v37 from '../v37'

export const feeWithdrawn =  {
    name: 'XorFee.FeeWithdrawn',
    /**
     *  Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    v1: new EventType(
        'XorFee.FeeWithdrawn',
        sts.tuple([v1.AccountId, v1.Balance])
    ),
}

export const referrerRewarded =  {
    name: 'XorFee.ReferrerRewarded',
    /**
     *  The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    v22: new EventType(
        'XorFee.ReferrerRewarded',
        sts.tuple([v22.AccountId, v22.AccountId, v22.Balance])
    ),
}

export const weightToFeeMultiplierUpdated =  {
    name: 'XorFee.WeightToFeeMultiplierUpdated',
    /**
     *  New multiplier for weight to fee conversion is set
     *  (*1_000_000_000_000_000_000). [New value]
     */
    v37: new EventType(
        'XorFee.WeightToFeeMultiplierUpdated',
        v37.FixedU128
    ),
}
