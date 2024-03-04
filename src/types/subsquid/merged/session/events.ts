import * as productionEvents from '../../production/session/events'
import * as stageEvents from '../../stage/session/events'
import * as testEvents from '../../test/session/events'
import * as devEvents from '../../dev/session/events'


export const newSession = {
	name: 'Session.NewSession',
	v1: productionEvents.newSession['v1'],
	v42: productionEvents.newSession['v42'],
	v33Stage: stageEvents.newSession['v33'],
	v42Stage: stageEvents.newSession['v42'],
	v33Test: testEvents.newSession['v33'],
	v42Test: testEvents.newSession['v42'],
	v70Dev: devEvents.newSession['v70'],
}
