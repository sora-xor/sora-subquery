import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const claimIncentive =  {
    name: 'PswapDistribution.claim_incentive',
    v33: new CallType(
        'PswapDistribution.claim_incentive',
        sts.unit()
    ),
}
