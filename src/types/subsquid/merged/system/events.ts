import * as productionEvents from '../../production/system/events'
import * as stageEvents from '../../stage/system/events'
import * as testEvents from '../../test/system/events'
import * as devEvents from '../../dev/system/events'


export const extrinsicSuccess = {
	name: 'System.ExtrinsicSuccess',
	v1: productionEvents.extrinsicSuccess['v1'],
	v42: productionEvents.extrinsicSuccess['v42'],
	v53: productionEvents.extrinsicSuccess['v53'],
	v33Stage: stageEvents.extrinsicSuccess['v33'],
	v42Stage: stageEvents.extrinsicSuccess['v42'],
	v52Stage: stageEvents.extrinsicSuccess['v52'],
	v33Test: testEvents.extrinsicSuccess['v33'],
	v42Test: testEvents.extrinsicSuccess['v42'],
	v52Test: testEvents.extrinsicSuccess['v52'],
	v70Dev: devEvents.extrinsicSuccess['v70'],
}

export const extrinsicFailed = {
	name: 'System.ExtrinsicFailed',
	v1: productionEvents.extrinsicFailed['v1'],
	v42: productionEvents.extrinsicFailed['v42'],
	v53: productionEvents.extrinsicFailed['v53'],
	v33Stage: stageEvents.extrinsicFailed['v33'],
	v42Stage: stageEvents.extrinsicFailed['v42'],
	v52Stage: stageEvents.extrinsicFailed['v52'],
	v33Test: testEvents.extrinsicFailed['v33'],
	v42Test: testEvents.extrinsicFailed['v42'],
	v52Test: testEvents.extrinsicFailed['v52'],
	v70Dev: devEvents.extrinsicFailed['v70'],
}

export const codeUpdated = {
	name: 'System.CodeUpdated',
	v1: productionEvents.codeUpdated['v1'],
	v33Stage: stageEvents.codeUpdated['v33'],
	v33Test: testEvents.codeUpdated['v33'],
	v70Dev: devEvents.codeUpdated['v70'],
}

export const newAccount = {
	name: 'System.NewAccount',
	v1: productionEvents.newAccount['v1'],
	v42: productionEvents.newAccount['v42'],
	v33Stage: stageEvents.newAccount['v33'],
	v42Stage: stageEvents.newAccount['v42'],
	v33Test: testEvents.newAccount['v33'],
	v42Test: testEvents.newAccount['v42'],
	v70Dev: devEvents.newAccount['v70'],
}

export const killedAccount = {
	name: 'System.KilledAccount',
	v1: productionEvents.killedAccount['v1'],
	v42: productionEvents.killedAccount['v42'],
	v33Stage: stageEvents.killedAccount['v33'],
	v42Stage: stageEvents.killedAccount['v42'],
	v33Test: testEvents.killedAccount['v33'],
	v42Test: testEvents.killedAccount['v42'],
	v70Dev: devEvents.killedAccount['v70'],
}

export const remarked = {
	name: 'System.Remarked',
	v42: productionEvents.remarked['v42'],
	v42Stage: stageEvents.remarked['v42'],
	v42Test: testEvents.remarked['v42'],
	v70Dev: devEvents.remarked['v70'],
}
