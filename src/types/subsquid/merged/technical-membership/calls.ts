import * as productionCalls from '../../production/technical-membership/calls'
import * as stageCalls from '../../stage/technical-membership/calls'
import * as testCalls from '../../test/technical-membership/calls'
import * as devCalls from '../../dev/technical-membership/calls'


export const addMember = {
	name: 'TechnicalMembership.add_member',
	v1: productionCalls.addMember['v1'],
	v33Stage: stageCalls.addMember['v33'],
	v33Test: testCalls.addMember['v33'],
	v70Dev: devCalls.addMember['v70'],
}

export const removeMember = {
	name: 'TechnicalMembership.remove_member',
	v1: productionCalls.removeMember['v1'],
	v33Stage: stageCalls.removeMember['v33'],
	v33Test: testCalls.removeMember['v33'],
	v70Dev: devCalls.removeMember['v70'],
}

export const swapMember = {
	name: 'TechnicalMembership.swap_member',
	v1: productionCalls.swapMember['v1'],
	v33Stage: stageCalls.swapMember['v33'],
	v33Test: testCalls.swapMember['v33'],
	v70Dev: devCalls.swapMember['v70'],
}

export const resetMembers = {
	name: 'TechnicalMembership.reset_members',
	v1: productionCalls.resetMembers['v1'],
	v33Stage: stageCalls.resetMembers['v33'],
	v33Test: testCalls.resetMembers['v33'],
	v70Dev: devCalls.resetMembers['v70'],
}

export const changeKey = {
	name: 'TechnicalMembership.change_key',
	v1: productionCalls.changeKey['v1'],
	v33Stage: stageCalls.changeKey['v33'],
	v33Test: testCalls.changeKey['v33'],
	v70Dev: devCalls.changeKey['v70'],
}

export const setPrime = {
	name: 'TechnicalMembership.set_prime',
	v1: productionCalls.setPrime['v1'],
	v33Stage: stageCalls.setPrime['v33'],
	v33Test: testCalls.setPrime['v33'],
	v70Dev: devCalls.setPrime['v70'],
}

export const clearPrime = {
	name: 'TechnicalMembership.clear_prime',
	v1: productionCalls.clearPrime['v1'],
	v33Stage: stageCalls.clearPrime['v33'],
	v33Test: testCalls.clearPrime['v33'],
	v70Dev: devCalls.clearPrime['v70'],
}
