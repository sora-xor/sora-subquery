import * as productionEvents from '../../production/rewards/events'
import * as stageEvents from '../../stage/rewards/events'
import * as testEvents from '../../test/rewards/events'
import * as devEvents from '../../dev/rewards/events'


export const claimed = {
	name: 'Rewards.Claimed',
	v1: productionEvents.claimed['v1'],
	v33Stage: stageEvents.claimed['v33'],
	v33Test: testEvents.claimed['v33'],
	v70Dev: devEvents.claimed['v70'],
}

export const migrationCompleted = {
	name: 'Rewards.MigrationCompleted',
	v19: productionEvents.migrationCompleted['v19'],
	v33Stage: stageEvents.migrationCompleted['v33'],
	v33Test: testEvents.migrationCompleted['v33'],
	v70Dev: devEvents.migrationCompleted['v70'],
}
