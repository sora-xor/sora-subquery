import * as productionCalls from '../../production/pswap-distribution/calls'
import * as stageCalls from '../../stage/pswap-distribution/calls'
import * as testCalls from '../../test/pswap-distribution/calls'
import * as devCalls from '../../dev/pswap-distribution/calls'


export const claimIncentive = {
	name: 'PswapDistribution.claim_incentive',
	v1: productionCalls.claimIncentive['v1'],
	v33Stage: stageCalls.claimIncentive['v33'],
	v33Test: testCalls.claimIncentive['v33'],
	v70Dev: devCalls.claimIncentive['v70'],
}
