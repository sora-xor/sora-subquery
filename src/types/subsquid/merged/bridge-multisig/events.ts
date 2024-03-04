import * as productionEvents from '../../production/bridge-multisig/events'
import * as stageEvents from '../../stage/bridge-multisig/events'
import * as testEvents from '../../test/bridge-multisig/events'
import * as devEvents from '../../dev/bridge-multisig/events'


export const multisigAccountCreated = {
	name: 'BridgeMultisig.MultisigAccountCreated',
	v1: productionEvents.multisigAccountCreated['v1'],
	v33Stage: stageEvents.multisigAccountCreated['v33'],
	v33Test: testEvents.multisigAccountCreated['v33'],
	v70Dev: devEvents.multisigAccountCreated['v70'],
}

export const newMultisig = {
	name: 'BridgeMultisig.NewMultisig',
	v1: productionEvents.newMultisig['v1'],
	v33Stage: stageEvents.newMultisig['v33'],
	v33Test: testEvents.newMultisig['v33'],
	v70Dev: devEvents.newMultisig['v70'],
}

export const multisigApproval = {
	name: 'BridgeMultisig.MultisigApproval',
	v1: productionEvents.multisigApproval['v1'],
	v33Stage: stageEvents.multisigApproval['v33'],
	v33Test: testEvents.multisigApproval['v33'],
	v70Dev: devEvents.multisigApproval['v70'],
}

export const multisigExecuted = {
	name: 'BridgeMultisig.MultisigExecuted',
	v1: productionEvents.multisigExecuted['v1'],
	v42: productionEvents.multisigExecuted['v42'],
	v53: productionEvents.multisigExecuted['v53'],
	v33Stage: stageEvents.multisigExecuted['v33'],
	v42Stage: stageEvents.multisigExecuted['v42'],
	v52Stage: stageEvents.multisigExecuted['v52'],
	v33Test: testEvents.multisigExecuted['v33'],
	v42Test: testEvents.multisigExecuted['v42'],
	v52Test: testEvents.multisigExecuted['v52'],
	v70Dev: devEvents.multisigExecuted['v70'],
}

export const multisigCancelled = {
	name: 'BridgeMultisig.MultisigCancelled',
	v1: productionEvents.multisigCancelled['v1'],
	v33Stage: stageEvents.multisigCancelled['v33'],
	v33Test: testEvents.multisigCancelled['v33'],
	v70Dev: devEvents.multisigCancelled['v70'],
}
