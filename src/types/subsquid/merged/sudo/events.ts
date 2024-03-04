import * as productionEvents from '../../production/sudo/events'
import * as stageEvents from '../../stage/sudo/events'
import * as testEvents from '../../test/sudo/events'
import * as devEvents from '../../dev/sudo/events'


export const sudid = {
	name: 'Sudo.Sudid',
	v22: productionEvents.sudid['v22'],
	v33Stage: stageEvents.sudid['v33'],
	v42Stage: stageEvents.sudid['v42'],
	v52Stage: stageEvents.sudid['v52'],
	v33Test: testEvents.sudid['v33'],
	v42Test: testEvents.sudid['v42'],
	v52Test: testEvents.sudid['v52'],
	v70Dev: devEvents.sudid['v70'],
}

export const keyChanged = {
	name: 'Sudo.KeyChanged',
	v22: productionEvents.keyChanged['v22'],
	v33Stage: stageEvents.keyChanged['v33'],
	v42Stage: stageEvents.keyChanged['v42'],
	v33Test: testEvents.keyChanged['v33'],
	v42Test: testEvents.keyChanged['v42'],
	v70Dev: devEvents.keyChanged['v70'],
}

export const sudoAsDone = {
	name: 'Sudo.SudoAsDone',
	v22: productionEvents.sudoAsDone['v22'],
	v33Stage: stageEvents.sudoAsDone['v33'],
	v42Stage: stageEvents.sudoAsDone['v42'],
	v52Stage: stageEvents.sudoAsDone['v52'],
	v33Test: testEvents.sudoAsDone['v33'],
	v42Test: testEvents.sudoAsDone['v42'],
	v52Test: testEvents.sudoAsDone['v52'],
	v70Dev: devEvents.sudoAsDone['v70'],
}
