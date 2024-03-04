import * as productionCalls from '../../production/session/calls'
import * as stageCalls from '../../stage/session/calls'
import * as testCalls from '../../test/session/calls'
import * as devCalls from '../../dev/session/calls'


export const setKeys = {
	name: 'Session.set_keys',
	v1: productionCalls.setKeys['v1'],
	v42: productionCalls.setKeys['v42'],
	v33Stage: stageCalls.setKeys['v33'],
	v42Stage: stageCalls.setKeys['v42'],
	v33Test: testCalls.setKeys['v33'],
	v42Test: testCalls.setKeys['v42'],
	v70Dev: devCalls.setKeys['v70'],
}

export const purgeKeys = {
	name: 'Session.purge_keys',
	v1: productionCalls.purgeKeys['v1'],
	v33Stage: stageCalls.purgeKeys['v33'],
	v33Test: testCalls.purgeKeys['v33'],
	v70Dev: devCalls.purgeKeys['v70'],
}
