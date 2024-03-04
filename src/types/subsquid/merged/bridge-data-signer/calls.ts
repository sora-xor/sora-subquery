import * as productionCalls from '../../production/bridge-data-signer/calls'
import * as stageCalls from '../../stage/bridge-data-signer/calls'
import * as testCalls from '../../test/bridge-data-signer/calls'
import * as devCalls from '../../dev/bridge-data-signer/calls'


export const registerNetwork = {
	name: 'BridgeDataSigner.register_network',
	v64: productionCalls.registerNetwork['v64'],
	v70: productionCalls.registerNetwork['v70'],
	v54Stage: stageCalls.registerNetwork['v54'],
	v70Stage: stageCalls.registerNetwork['v70'],
	v54Test: testCalls.registerNetwork['v54'],
	v70Test: testCalls.registerNetwork['v70'],
	v70Dev: devCalls.registerNetwork['v70'],
}

export const approve = {
	name: 'BridgeDataSigner.approve',
	v64: productionCalls.approve['v64'],
	v70: productionCalls.approve['v70'],
	v54Stage: stageCalls.approve['v54'],
	v70Stage: stageCalls.approve['v70'],
	v54Test: testCalls.approve['v54'],
	v70Test: testCalls.approve['v70'],
	v70Dev: devCalls.approve['v70'],
}

export const addPeer = {
	name: 'BridgeDataSigner.add_peer',
	v64: productionCalls.addPeer['v64'],
	v70: productionCalls.addPeer['v70'],
	v54Stage: stageCalls.addPeer['v54'],
	v70Stage: stageCalls.addPeer['v70'],
	v54Test: testCalls.addPeer['v54'],
	v70Test: testCalls.addPeer['v70'],
	v70Dev: devCalls.addPeer['v70'],
}

export const removePeer = {
	name: 'BridgeDataSigner.remove_peer',
	v64: productionCalls.removePeer['v64'],
	v70: productionCalls.removePeer['v70'],
	v54Stage: stageCalls.removePeer['v54'],
	v70Stage: stageCalls.removePeer['v70'],
	v54Test: testCalls.removePeer['v54'],
	v70Test: testCalls.removePeer['v70'],
	v70Dev: devCalls.removePeer['v70'],
}

export const finishRemovePeer = {
	name: 'BridgeDataSigner.finish_remove_peer',
	v64: productionCalls.finishRemovePeer['v64'],
	v54Stage: stageCalls.finishRemovePeer['v54'],
	v54Test: testCalls.finishRemovePeer['v54'],
	v70Dev: devCalls.finishRemovePeer['v70'],
}

export const finishAddPeer = {
	name: 'BridgeDataSigner.finish_add_peer',
	v64: productionCalls.finishAddPeer['v64'],
	v54Stage: stageCalls.finishAddPeer['v54'],
	v54Test: testCalls.finishAddPeer['v54'],
	v70Dev: devCalls.finishAddPeer['v70'],
}
