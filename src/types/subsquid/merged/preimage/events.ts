import * as productionEvents from '../../production/preimage/events'
import * as stageEvents from '../../stage/preimage/events'
import * as testEvents from '../../test/preimage/events'
import * as devEvents from '../../dev/preimage/events'


export const noted = {
	name: 'Preimage.Noted',
	v53: productionEvents.noted['v53'],
	v52Stage: stageEvents.noted['v52'],
	v52Test: testEvents.noted['v52'],
	v70Dev: devEvents.noted['v70'],
}

export const requested = {
	name: 'Preimage.Requested',
	v53: productionEvents.requested['v53'],
	v52Stage: stageEvents.requested['v52'],
	v52Test: testEvents.requested['v52'],
	v70Dev: devEvents.requested['v70'],
}

export const cleared = {
	name: 'Preimage.Cleared',
	v53: productionEvents.cleared['v53'],
	v52Stage: stageEvents.cleared['v52'],
	v52Test: testEvents.cleared['v52'],
	v70Dev: devEvents.cleared['v70'],
}
