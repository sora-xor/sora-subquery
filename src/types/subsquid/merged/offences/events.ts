import * as productionEvents from '../../production/offences/events'
import * as stageEvents from '../../stage/offences/events'
import * as testEvents from '../../test/offences/events'
import * as devEvents from '../../dev/offences/events'


export const offence = {
	name: 'Offences.Offence',
	v1: productionEvents.offence['v1'],
	v42: productionEvents.offence['v42'],
	v33Stage: stageEvents.offence['v33'],
	v42Stage: stageEvents.offence['v42'],
	v33Test: testEvents.offence['v33'],
	v42Test: testEvents.offence['v42'],
	v70Dev: devEvents.offence['v70'],
}
