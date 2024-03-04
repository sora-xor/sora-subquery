import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'

export const feeWithdrawn =  {
    name: 'XorFee.FeeWithdrawn',
    /**
     *  Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    v33: new EventType(
        'XorFee.FeeWithdrawn',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
}

export const referrerRewarded =  {
    name: 'XorFee.ReferrerRewarded',
    /**
     *  The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    v33: new EventType(
        'XorFee.ReferrerRewarded',
        sts.tuple([v33.AccountId, v33.AccountId, v33.Balance])
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
