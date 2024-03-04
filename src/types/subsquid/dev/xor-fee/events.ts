import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const feeWithdrawn =  {
    name: 'XorFee.FeeWithdrawn',
    /**
     * Fee has been withdrawn from user. [Account Id to withdraw from, Fee Amount]
     */
    v70: new EventType(
        'XorFee.FeeWithdrawn',
        sts.tuple([v70.AccountId32, sts.bigint()])
    ),
}

export const referrerRewarded =  {
    name: 'XorFee.ReferrerRewarded',
    /**
     * The portion of fee is sent to the referrer. [Referral, Referrer, Amount]
     */
    v70: new EventType(
        'XorFee.ReferrerRewarded',
        sts.tuple([v70.AccountId32, v70.AccountId32, sts.bigint()])
    ),
}

export const weightToFeeMultiplierUpdated =  {
    name: 'XorFee.WeightToFeeMultiplierUpdated',
    /**
     * New multiplier for weight to fee conversion is set
     * (*1_000_000_000_000_000_000). [New value]
     */
    v70: new EventType(
        'XorFee.WeightToFeeMultiplierUpdated',
        v70.FixedU128
    ),
}
