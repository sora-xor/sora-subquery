import * as productionEvents from '../../production/faucet/events'
import * as stageEvents from '../../stage/faucet/events'
import * as testEvents from '../../test/faucet/events'
import * as devEvents from '../../dev/faucet/events'


export const transferred = {
	name: 'Faucet.Transferred',
	v22: productionEvents.transferred['v22'],
	v33Stage: stageEvents.transferred['v33'],
	v33Test: testEvents.transferred['v33'],
	v70Dev: devEvents.transferred['v70'],
}

export const limitUpdated = {
	name: 'Faucet.LimitUpdated',
	v37Stage: stageEvents.limitUpdated['v37'],
	v37Test: testEvents.limitUpdated['v37'],
	v70Dev: devEvents.limitUpdated['v70'],
}
