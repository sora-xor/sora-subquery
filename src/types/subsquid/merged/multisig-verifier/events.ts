import * as productionEvents from '../../production/multisig-verifier/events'
import * as stageEvents from '../../stage/multisig-verifier/events'
import * as testEvents from '../../test/multisig-verifier/events'
import * as devEvents from '../../dev/multisig-verifier/events'


export const networkInitialized = {
	name: 'MultisigVerifier.NetworkInitialized',
	v64: productionEvents.networkInitialized['v64'],
	v70: productionEvents.networkInitialized['v70'],
	v54Stage: stageEvents.networkInitialized['v54'],
	v70Stage: stageEvents.networkInitialized['v70'],
	v54Test: testEvents.networkInitialized['v54'],
	v70Test: testEvents.networkInitialized['v70'],
	v70Dev: devEvents.networkInitialized['v70'],
}

export const verificationSuccessful = {
	name: 'MultisigVerifier.VerificationSuccessful',
	v64: productionEvents.verificationSuccessful['v64'],
	v70: productionEvents.verificationSuccessful['v70'],
	v54Stage: stageEvents.verificationSuccessful['v54'],
	v70Stage: stageEvents.verificationSuccessful['v70'],
	v54Test: testEvents.verificationSuccessful['v54'],
	v70Test: testEvents.verificationSuccessful['v70'],
	v70Dev: devEvents.verificationSuccessful['v70'],
}

export const peerAdded = {
	name: 'MultisigVerifier.PeerAdded',
	v64: productionEvents.peerAdded['v64'],
	v54Stage: stageEvents.peerAdded['v54'],
	v54Test: testEvents.peerAdded['v54'],
	v70Dev: devEvents.peerAdded['v70'],
}

export const peerRemoved = {
	name: 'MultisigVerifier.PeerRemoved',
	v64: productionEvents.peerRemoved['v64'],
	v54Stage: stageEvents.peerRemoved['v54'],
	v54Test: testEvents.peerRemoved['v54'],
	v70Dev: devEvents.peerRemoved['v70'],
}
