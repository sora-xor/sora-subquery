import * as productionEvents from '../../production/bridge-data-signer/events'
import * as stageEvents from '../../stage/bridge-data-signer/events'
import * as testEvents from '../../test/bridge-data-signer/events'
import * as devEvents from '../../dev/bridge-data-signer/events'


export const initialized = {
	name: 'BridgeDataSigner.Initialized',
	v64: productionEvents.initialized['v64'],
	v70: productionEvents.initialized['v70'],
	v54Stage: stageEvents.initialized['v54'],
	v70Stage: stageEvents.initialized['v70'],
	v54Test: testEvents.initialized['v54'],
	v70Test: testEvents.initialized['v70'],
	v70Dev: devEvents.initialized['v70'],
}

export const addedPeer = {
	name: 'BridgeDataSigner.AddedPeer',
	v64: productionEvents.addedPeer['v64'],
	v70: productionEvents.addedPeer['v70'],
	v54Stage: stageEvents.addedPeer['v54'],
	v70Stage: stageEvents.addedPeer['v70'],
	v54Test: testEvents.addedPeer['v54'],
	v70Test: testEvents.addedPeer['v70'],
	v70Dev: devEvents.addedPeer['v70'],
}

export const removedPeer = {
	name: 'BridgeDataSigner.RemovedPeer',
	v64: productionEvents.removedPeer['v64'],
	v70: productionEvents.removedPeer['v70'],
	v54Stage: stageEvents.removedPeer['v54'],
	v70Stage: stageEvents.removedPeer['v70'],
	v54Test: testEvents.removedPeer['v54'],
	v70Test: testEvents.removedPeer['v70'],
	v70Dev: devEvents.removedPeer['v70'],
}

export const approvalAccepted = {
	name: 'BridgeDataSigner.ApprovalAccepted',
	v64: productionEvents.approvalAccepted['v64'],
	v70: productionEvents.approvalAccepted['v70'],
	v54Stage: stageEvents.approvalAccepted['v54'],
	v70Stage: stageEvents.approvalAccepted['v70'],
	v54Test: testEvents.approvalAccepted['v54'],
	v70Test: testEvents.approvalAccepted['v70'],
	v70Dev: devEvents.approvalAccepted['v70'],
}

export const approved = {
	name: 'BridgeDataSigner.Approved',
	v64: productionEvents.approved['v64'],
	v70: productionEvents.approved['v70'],
	v54Stage: stageEvents.approved['v54'],
	v70Stage: stageEvents.approved['v70'],
	v54Test: testEvents.approved['v54'],
	v70Test: testEvents.approved['v70'],
	v70Dev: devEvents.approved['v70'],
}
