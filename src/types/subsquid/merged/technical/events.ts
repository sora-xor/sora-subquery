import * as productionEvents from '../../production/technical/events'
import * as stageEvents from '../../stage/technical/events'
import * as testEvents from '../../test/technical/events'
import * as devEvents from '../../dev/technical/events'


export const minted = {
	name: 'Technical.Minted',
	v1: productionEvents.minted['v1'],
	v42: productionEvents.minted['v42'],
	v46: productionEvents.minted['v46'],
	v57: productionEvents.minted['v57'],
	v33Stage: stageEvents.minted['v33'],
	v42Stage: stageEvents.minted['v42'],
	v46Stage: stageEvents.minted['v46'],
	v54Stage: stageEvents.minted['v54'],
	v33Test: testEvents.minted['v33'],
	v42Test: testEvents.minted['v42'],
	v46Test: testEvents.minted['v46'],
	v54Test: testEvents.minted['v54'],
	v70Dev: devEvents.minted['v70'],
}

export const burned = {
	name: 'Technical.Burned',
	v1: productionEvents.burned['v1'],
	v42: productionEvents.burned['v42'],
	v46: productionEvents.burned['v46'],
	v57: productionEvents.burned['v57'],
	v33Stage: stageEvents.burned['v33'],
	v42Stage: stageEvents.burned['v42'],
	v46Stage: stageEvents.burned['v46'],
	v54Stage: stageEvents.burned['v54'],
	v33Test: testEvents.burned['v33'],
	v42Test: testEvents.burned['v42'],
	v46Test: testEvents.burned['v46'],
	v54Test: testEvents.burned['v54'],
	v70Dev: devEvents.burned['v70'],
}

export const outputTransferred = {
	name: 'Technical.OutputTransferred',
	v1: productionEvents.outputTransferred['v1'],
	v42: productionEvents.outputTransferred['v42'],
	v46: productionEvents.outputTransferred['v46'],
	v57: productionEvents.outputTransferred['v57'],
	v33Stage: stageEvents.outputTransferred['v33'],
	v42Stage: stageEvents.outputTransferred['v42'],
	v46Stage: stageEvents.outputTransferred['v46'],
	v54Stage: stageEvents.outputTransferred['v54'],
	v33Test: testEvents.outputTransferred['v33'],
	v42Test: testEvents.outputTransferred['v42'],
	v46Test: testEvents.outputTransferred['v46'],
	v54Test: testEvents.outputTransferred['v54'],
	v70Dev: devEvents.outputTransferred['v70'],
}

export const inputTransferred = {
	name: 'Technical.InputTransferred',
	v1: productionEvents.inputTransferred['v1'],
	v42: productionEvents.inputTransferred['v42'],
	v46: productionEvents.inputTransferred['v46'],
	v57: productionEvents.inputTransferred['v57'],
	v33Stage: stageEvents.inputTransferred['v33'],
	v42Stage: stageEvents.inputTransferred['v42'],
	v46Stage: stageEvents.inputTransferred['v46'],
	v54Stage: stageEvents.inputTransferred['v54'],
	v33Test: testEvents.inputTransferred['v33'],
	v42Test: testEvents.inputTransferred['v42'],
	v46Test: testEvents.inputTransferred['v46'],
	v54Test: testEvents.inputTransferred['v54'],
	v70Dev: devEvents.inputTransferred['v70'],
}

export const swapSuccess = {
	name: 'Technical.SwapSuccess',
	v1: productionEvents.swapSuccess['v1'],
	v33Stage: stageEvents.swapSuccess['v33'],
	v33Test: testEvents.swapSuccess['v33'],
	v70Dev: devEvents.swapSuccess['v70'],
}
