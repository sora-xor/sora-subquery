import * as productionCalls from '../../production/referrals/calls'
import * as stageCalls from '../../stage/referrals/calls'
import * as testCalls from '../../test/referrals/calls'
import * as devCalls from '../../dev/referrals/calls'


export const reserve = {
	name: 'Referrals.reserve',
	v22: productionCalls.reserve['v22'],
	v33Stage: stageCalls.reserve['v33'],
	v33Test: testCalls.reserve['v33'],
	v70Dev: devCalls.reserve['v70'],
}

export const unreserve = {
	name: 'Referrals.unreserve',
	v22: productionCalls.unreserve['v22'],
	v33Stage: stageCalls.unreserve['v33'],
	v33Test: testCalls.unreserve['v33'],
	v70Dev: devCalls.unreserve['v70'],
}

export const setReferrer = {
	name: 'Referrals.set_referrer',
	v22: productionCalls.setReferrer['v22'],
	v33Stage: stageCalls.setReferrer['v33'],
	v33Test: testCalls.setReferrer['v33'],
	v70Dev: devCalls.setReferrer['v70'],
}
