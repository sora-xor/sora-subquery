import * as productionCalls from '../../production/ceres-governance-platform/calls'
import * as stageCalls from '../../stage/ceres-governance-platform/calls'
import * as testCalls from '../../test/ceres-governance-platform/calls'
import * as devCalls from '../../dev/ceres-governance-platform/calls'


export const vote = {
	name: 'CeresGovernancePlatform.vote',
	v26: productionCalls.vote['v26'],
	v33Stage: stageCalls.vote['v33'],
	v33Test: testCalls.vote['v33'],
	v70Dev: devCalls.vote['v70'],
}

export const createPoll = {
	name: 'CeresGovernancePlatform.create_poll',
	v26: productionCalls.createPoll['v26'],
	v37: productionCalls.createPoll['v37'],
	v70: productionCalls.createPoll['v70'],
	v33Stage: stageCalls.createPoll['v33'],
	v37Stage: stageCalls.createPoll['v37'],
	v69Stage: stageCalls.createPoll['v69'],
	v33Test: testCalls.createPoll['v33'],
	v37Test: testCalls.createPoll['v37'],
	v69Test: testCalls.createPoll['v69'],
	v70Dev: devCalls.createPoll['v70'],
}

export const withdraw = {
	name: 'CeresGovernancePlatform.withdraw',
	v26: productionCalls.withdraw['v26'],
	v33Stage: stageCalls.withdraw['v33'],
	v33Test: testCalls.withdraw['v33'],
	v70Dev: devCalls.withdraw['v70'],
}
