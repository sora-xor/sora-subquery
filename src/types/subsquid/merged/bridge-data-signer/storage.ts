import * as productionStorage from '../../production/bridge-data-signer/storage'
import * as stageStorage from '../../stage/bridge-data-signer/storage'
import * as testStorage from '../../test/bridge-data-signer/storage'
import * as devStorage from '../../dev/bridge-data-signer/storage'


export const peers = {
	name: 'BridgeDataSigner.Peers',
	v64: productionStorage.peers['v64'],
	v70: productionStorage.peers['v70'],
	v54Stage: stageStorage.peers['v54'],
	v70Stage: stageStorage.peers['v70'],
	v54Test: testStorage.peers['v54'],
	v70Test: testStorage.peers['v70'],
	v70Dev: devStorage.peers['v70'],
}

export const pendingPeerUpdate = {
	name: 'BridgeDataSigner.PendingPeerUpdate',
	v64: productionStorage.pendingPeerUpdate['v64'],
	v70: productionStorage.pendingPeerUpdate['v70'],
	v54Stage: stageStorage.pendingPeerUpdate['v54'],
	v70Stage: stageStorage.pendingPeerUpdate['v70'],
	v54Test: testStorage.pendingPeerUpdate['v54'],
	v70Test: testStorage.pendingPeerUpdate['v70'],
	v70Dev: devStorage.pendingPeerUpdate['v70'],
}

export const approvals = {
	name: 'BridgeDataSigner.Approvals',
	v64: productionStorage.approvals['v64'],
	v70: productionStorage.approvals['v70'],
	v54Stage: stageStorage.approvals['v54'],
	v70Stage: stageStorage.approvals['v70'],
	v54Test: testStorage.approvals['v54'],
	v70Test: testStorage.approvals['v70'],
	v70Dev: devStorage.approvals['v70'],
}
