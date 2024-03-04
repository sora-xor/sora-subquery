import * as stageCalls from '../../stage/beefy-light-client/calls'
import * as testCalls from '../../test/beefy-light-client/calls'
import * as devCalls from '../../dev/beefy-light-client/calls'


export const initialize = {
	name: 'BeefyLightClient.initialize',
	v52Stage: stageCalls.initialize['v52'],
	v52Test: testCalls.initialize['v52'],
	v70Dev: devCalls.initialize['v70'],
}

export const submitSignatureCommitment = {
	name: 'BeefyLightClient.submit_signature_commitment',
	v52Stage: stageCalls.submitSignatureCommitment['v52'],
	v52Test: testCalls.submitSignatureCommitment['v52'],
	v70Dev: devCalls.submitSignatureCommitment['v70'],
}
