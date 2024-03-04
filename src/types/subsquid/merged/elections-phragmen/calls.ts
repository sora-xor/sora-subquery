import * as productionCalls from '../../production/elections-phragmen/calls'
import * as stageCalls from '../../stage/elections-phragmen/calls'
import * as testCalls from '../../test/elections-phragmen/calls'
import * as devCalls from '../../dev/elections-phragmen/calls'


export const vote = {
	name: 'ElectionsPhragmen.vote',
	v1: productionCalls.vote['v1'],
	v33Stage: stageCalls.vote['v33'],
	v33Test: testCalls.vote['v33'],
	v70Dev: devCalls.vote['v70'],
}

export const removeVoter = {
	name: 'ElectionsPhragmen.remove_voter',
	v1: productionCalls.removeVoter['v1'],
	v33Stage: stageCalls.removeVoter['v33'],
	v33Test: testCalls.removeVoter['v33'],
	v70Dev: devCalls.removeVoter['v70'],
}

export const submitCandidacy = {
	name: 'ElectionsPhragmen.submit_candidacy',
	v1: productionCalls.submitCandidacy['v1'],
	v33Stage: stageCalls.submitCandidacy['v33'],
	v33Test: testCalls.submitCandidacy['v33'],
	v70Dev: devCalls.submitCandidacy['v70'],
}

export const renounceCandidacy = {
	name: 'ElectionsPhragmen.renounce_candidacy',
	v1: productionCalls.renounceCandidacy['v1'],
	v33Stage: stageCalls.renounceCandidacy['v33'],
	v33Test: testCalls.renounceCandidacy['v33'],
	v70Dev: devCalls.renounceCandidacy['v70'],
}

export const removeMember = {
	name: 'ElectionsPhragmen.remove_member',
	v1: productionCalls.removeMember['v1'],
	v53: productionCalls.removeMember['v53'],
	v33Stage: stageCalls.removeMember['v33'],
	v52Stage: stageCalls.removeMember['v52'],
	v33Test: testCalls.removeMember['v33'],
	v52Test: testCalls.removeMember['v52'],
	v70Dev: devCalls.removeMember['v70'],
}

export const cleanDefunctVoters = {
	name: 'ElectionsPhragmen.clean_defunct_voters',
	v1: productionCalls.cleanDefunctVoters['v1'],
	v33Stage: stageCalls.cleanDefunctVoters['v33'],
	v33Test: testCalls.cleanDefunctVoters['v33'],
	v70Dev: devCalls.cleanDefunctVoters['v70'],
}
