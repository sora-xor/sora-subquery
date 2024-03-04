import * as productionEvents from '../../production/multisig/events'
import * as stageEvents from '../../stage/multisig/events'
import * as testEvents from '../../test/multisig/events'
import * as devEvents from '../../dev/multisig/events'


export const newMultisig = {
	name: 'Multisig.NewMultisig',
	v1: productionEvents.newMultisig['v1'],
	v42: productionEvents.newMultisig['v42'],
	v33Stage: stageEvents.newMultisig['v33'],
	v42Stage: stageEvents.newMultisig['v42'],
	v33Test: testEvents.newMultisig['v33'],
	v42Test: testEvents.newMultisig['v42'],
	v70Dev: devEvents.newMultisig['v70'],
}

export const multisigApproval = {
	name: 'Multisig.MultisigApproval',
	v1: productionEvents.multisigApproval['v1'],
	v42: productionEvents.multisigApproval['v42'],
	v33Stage: stageEvents.multisigApproval['v33'],
	v42Stage: stageEvents.multisigApproval['v42'],
	v33Test: testEvents.multisigApproval['v33'],
	v42Test: testEvents.multisigApproval['v42'],
	v70Dev: devEvents.multisigApproval['v70'],
}

export const multisigExecuted = {
	name: 'Multisig.MultisigExecuted',
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
	name: 'Multisig.MultisigCancelled',
	v1: productionEvents.multisigCancelled['v1'],
	v42: productionEvents.multisigCancelled['v42'],
	v33Stage: stageEvents.multisigCancelled['v33'],
	v42Stage: stageEvents.multisigCancelled['v42'],
	v33Test: testEvents.multisigCancelled['v33'],
	v42Test: testEvents.multisigCancelled['v42'],
	v70Dev: devEvents.multisigCancelled['v70'],
}
