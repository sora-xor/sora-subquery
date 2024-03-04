import * as productionEvents from '../../production/grandpa/events'
import * as stageEvents from '../../stage/grandpa/events'
import * as testEvents from '../../test/grandpa/events'
import * as devEvents from '../../dev/grandpa/events'


export const newAuthorities = {
	name: 'Grandpa.NewAuthorities',
	v1: productionEvents.newAuthorities['v1'],
	v42: productionEvents.newAuthorities['v42'],
	v33Stage: stageEvents.newAuthorities['v33'],
	v42Stage: stageEvents.newAuthorities['v42'],
	v33Test: testEvents.newAuthorities['v33'],
	v42Test: testEvents.newAuthorities['v42'],
	v70Dev: devEvents.newAuthorities['v70'],
}

export const paused = {
	name: 'Grandpa.Paused',
	v1: productionEvents.paused['v1'],
	v33Stage: stageEvents.paused['v33'],
	v33Test: testEvents.paused['v33'],
	v70Dev: devEvents.paused['v70'],
}

export const resumed = {
	name: 'Grandpa.Resumed',
	v1: productionEvents.resumed['v1'],
	v33Stage: stageEvents.resumed['v33'],
	v33Test: testEvents.resumed['v33'],
	v70Dev: devEvents.resumed['v70'],
}
