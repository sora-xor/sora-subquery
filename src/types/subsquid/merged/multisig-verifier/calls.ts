import * as productionCalls from '../../production/multisig-verifier/calls'
import * as stageCalls from '../../stage/multisig-verifier/calls'
import * as testCalls from '../../test/multisig-verifier/calls'
import * as devCalls from '../../dev/multisig-verifier/calls'


export const initialize = {
	name: 'MultisigVerifier.initialize',
	v64: productionCalls.initialize['v64'],
	v70: productionCalls.initialize['v70'],
	v54Stage: stageCalls.initialize['v54'],
	v70Stage: stageCalls.initialize['v70'],
	v54Test: testCalls.initialize['v54'],
	v70Test: testCalls.initialize['v70'],
	v70Dev: devCalls.initialize['v70'],
}

export const addPeer = {
	name: 'MultisigVerifier.add_peer',
	v64: productionCalls.addPeer['v64'],
	v54Stage: stageCalls.addPeer['v54'],
	v54Test: testCalls.addPeer['v54'],
	v70Dev: devCalls.addPeer['v70'],
}

export const removePeer = {
	name: 'MultisigVerifier.remove_peer',
	v64: productionCalls.removePeer['v64'],
	v54Stage: stageCalls.removePeer['v54'],
	v54Test: testCalls.removePeer['v54'],
	v70Dev: devCalls.removePeer['v70'],
}
