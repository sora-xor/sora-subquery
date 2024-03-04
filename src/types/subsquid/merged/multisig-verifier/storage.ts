import * as productionStorage from '../../production/multisig-verifier/storage'
import * as stageStorage from '../../stage/multisig-verifier/storage'
import * as testStorage from '../../test/multisig-verifier/storage'
import * as devStorage from '../../dev/multisig-verifier/storage'


export const peerKeys = {
	name: 'MultisigVerifier.PeerKeys',
	v64: productionStorage.peerKeys['v64'],
	v70: productionStorage.peerKeys['v70'],
	v54Stage: stageStorage.peerKeys['v54'],
	v70Stage: stageStorage.peerKeys['v70'],
	v54Test: testStorage.peerKeys['v54'],
	v70Test: testStorage.peerKeys['v70'],
	v70Dev: devStorage.peerKeys['v70'],
}

export const thisNetworkId = {
	name: 'MultisigVerifier.ThisNetworkId',
	v64: productionStorage.thisNetworkId['v64'],
	v54Stage: stageStorage.thisNetworkId['v54'],
	v54Test: testStorage.thisNetworkId['v54'],
}
