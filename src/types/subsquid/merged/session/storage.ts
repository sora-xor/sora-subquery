import * as productionStorage from '../../production/session/storage'
import * as stageStorage from '../../stage/session/storage'
import * as testStorage from '../../test/session/storage'
import * as devStorage from '../../dev/session/storage'


export const validators = {
	name: 'Session.Validators',
	v1: productionStorage.validators['v1'],
	v33Stage: stageStorage.validators['v33'],
	v33Test: testStorage.validators['v33'],
	v70Dev: devStorage.validators['v70'],
}

export const currentIndex = {
	name: 'Session.CurrentIndex',
	v1: productionStorage.currentIndex['v1'],
	v33Stage: stageStorage.currentIndex['v33'],
	v33Test: testStorage.currentIndex['v33'],
	v70Dev: devStorage.currentIndex['v70'],
}

export const queuedChanged = {
	name: 'Session.QueuedChanged',
	v1: productionStorage.queuedChanged['v1'],
	v33Stage: stageStorage.queuedChanged['v33'],
	v33Test: testStorage.queuedChanged['v33'],
	v70Dev: devStorage.queuedChanged['v70'],
}

export const queuedKeys = {
	name: 'Session.QueuedKeys',
	v1: productionStorage.queuedKeys['v1'],
	v42: productionStorage.queuedKeys['v42'],
	v33Stage: stageStorage.queuedKeys['v33'],
	v42Stage: stageStorage.queuedKeys['v42'],
	v33Test: testStorage.queuedKeys['v33'],
	v42Test: testStorage.queuedKeys['v42'],
	v70Dev: devStorage.queuedKeys['v70'],
}

export const disabledValidators = {
	name: 'Session.DisabledValidators',
	v1: productionStorage.disabledValidators['v1'],
	v33Stage: stageStorage.disabledValidators['v33'],
	v33Test: testStorage.disabledValidators['v33'],
	v70Dev: devStorage.disabledValidators['v70'],
}

export const nextKeys = {
	name: 'Session.NextKeys',
	v1: productionStorage.nextKeys['v1'],
	v42: productionStorage.nextKeys['v42'],
	v33Stage: stageStorage.nextKeys['v33'],
	v42Stage: stageStorage.nextKeys['v42'],
	v33Test: testStorage.nextKeys['v33'],
	v42Test: testStorage.nextKeys['v42'],
	v70Dev: devStorage.nextKeys['v70'],
}

export const keyOwner = {
	name: 'Session.KeyOwner',
	v1: productionStorage.keyOwner['v1'],
	v42: productionStorage.keyOwner['v42'],
	v33Stage: stageStorage.keyOwner['v33'],
	v42Stage: stageStorage.keyOwner['v42'],
	v33Test: testStorage.keyOwner['v33'],
	v42Test: testStorage.keyOwner['v42'],
	v70Dev: devStorage.keyOwner['v70'],
}
