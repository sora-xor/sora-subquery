import * as productionCalls from '../../production/election-provider-multi-phase/calls'
import * as stageCalls from '../../stage/election-provider-multi-phase/calls'
import * as testCalls from '../../test/election-provider-multi-phase/calls'
import * as devCalls from '../../dev/election-provider-multi-phase/calls'


export const submitUnsigned = {
	name: 'ElectionProviderMultiPhase.submit_unsigned',
	v42: productionCalls.submitUnsigned['v42'],
	v42Stage: stageCalls.submitUnsigned['v42'],
	v42Test: testCalls.submitUnsigned['v42'],
	v70Dev: devCalls.submitUnsigned['v70'],
}

export const setMinimumUntrustedScore = {
	name: 'ElectionProviderMultiPhase.set_minimum_untrusted_score',
	v42: productionCalls.setMinimumUntrustedScore['v42'],
	v42Stage: stageCalls.setMinimumUntrustedScore['v42'],
	v42Test: testCalls.setMinimumUntrustedScore['v42'],
	v70Dev: devCalls.setMinimumUntrustedScore['v70'],
}

export const setEmergencyElectionResult = {
	name: 'ElectionProviderMultiPhase.set_emergency_election_result',
	v42: productionCalls.setEmergencyElectionResult['v42'],
	v42Stage: stageCalls.setEmergencyElectionResult['v42'],
	v42Test: testCalls.setEmergencyElectionResult['v42'],
	v70Dev: devCalls.setEmergencyElectionResult['v70'],
}

export const submit = {
	name: 'ElectionProviderMultiPhase.submit',
	v42: productionCalls.submit['v42'],
	v42Stage: stageCalls.submit['v42'],
	v42Test: testCalls.submit['v42'],
	v70Dev: devCalls.submit['v70'],
}

export const governanceFallback = {
	name: 'ElectionProviderMultiPhase.governance_fallback',
	v42: productionCalls.governanceFallback['v42'],
	v42Stage: stageCalls.governanceFallback['v42'],
	v42Test: testCalls.governanceFallback['v42'],
	v70Dev: devCalls.governanceFallback['v70'],
}
