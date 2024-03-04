import * as productionStorage from '../../production/grandpa/storage'
import * as stageStorage from '../../stage/grandpa/storage'
import * as testStorage from '../../test/grandpa/storage'
import * as devStorage from '../../dev/grandpa/storage'


export const state = {
	name: 'Grandpa.State',
	v1: productionStorage.state['v1'],
	v42: productionStorage.state['v42'],
	v33Stage: stageStorage.state['v33'],
	v42Stage: stageStorage.state['v42'],
	v33Test: testStorage.state['v33'],
	v42Test: testStorage.state['v42'],
	v70Dev: devStorage.state['v70'],
}

export const pendingChange = {
	name: 'Grandpa.PendingChange',
	v1: productionStorage.pendingChange['v1'],
	v42: productionStorage.pendingChange['v42'],
	v33Stage: stageStorage.pendingChange['v33'],
	v42Stage: stageStorage.pendingChange['v42'],
	v33Test: testStorage.pendingChange['v33'],
	v42Test: testStorage.pendingChange['v42'],
	v70Dev: devStorage.pendingChange['v70'],
}

export const nextForced = {
	name: 'Grandpa.NextForced',
	v1: productionStorage.nextForced['v1'],
	v33Stage: stageStorage.nextForced['v33'],
	v33Test: testStorage.nextForced['v33'],
	v70Dev: devStorage.nextForced['v70'],
}

export const stalled = {
	name: 'Grandpa.Stalled',
	v1: productionStorage.stalled['v1'],
	v33Stage: stageStorage.stalled['v33'],
	v33Test: testStorage.stalled['v33'],
	v70Dev: devStorage.stalled['v70'],
}

export const currentSetId = {
	name: 'Grandpa.CurrentSetId',
	v1: productionStorage.currentSetId['v1'],
	v33Stage: stageStorage.currentSetId['v33'],
	v33Test: testStorage.currentSetId['v33'],
	v70Dev: devStorage.currentSetId['v70'],
}

export const setIdSession = {
	name: 'Grandpa.SetIdSession',
	v1: productionStorage.setIdSession['v1'],
	v33Stage: stageStorage.setIdSession['v33'],
	v33Test: testStorage.setIdSession['v33'],
	v70Dev: devStorage.setIdSession['v70'],
}
