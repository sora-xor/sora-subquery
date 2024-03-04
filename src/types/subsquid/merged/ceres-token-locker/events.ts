import * as productionEvents from '../../production/ceres-token-locker/events'
import * as stageEvents from '../../stage/ceres-token-locker/events'
import * as testEvents from '../../test/ceres-token-locker/events'
import * as devEvents from '../../dev/ceres-token-locker/events'


export const locked = {
	name: 'CeresTokenLocker.Locked',
	v26: productionEvents.locked['v26'],
	v42: productionEvents.locked['v42'],
	v33Stage: stageEvents.locked['v33'],
	v42Stage: stageEvents.locked['v42'],
	v33Test: testEvents.locked['v33'],
	v42Test: testEvents.locked['v42'],
	v70Dev: devEvents.locked['v70'],
}

export const withdrawn = {
	name: 'CeresTokenLocker.Withdrawn',
	v26: productionEvents.withdrawn['v26'],
	v42: productionEvents.withdrawn['v42'],
	v33Stage: stageEvents.withdrawn['v33'],
	v42Stage: stageEvents.withdrawn['v42'],
	v33Test: testEvents.withdrawn['v33'],
	v42Test: testEvents.withdrawn['v42'],
	v70Dev: devEvents.withdrawn['v70'],
}

export const feeChanged = {
	name: 'CeresTokenLocker.FeeChanged',
	v26: productionEvents.feeChanged['v26'],
	v33Stage: stageEvents.feeChanged['v33'],
	v33Test: testEvents.feeChanged['v33'],
	v70Dev: devEvents.feeChanged['v70'],
}
