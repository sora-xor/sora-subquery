import * as productionEvents from '../../production/pool-xyk/events'
import * as stageEvents from '../../stage/pool-xyk/events'
import * as testEvents from '../../test/pool-xyk/events'
import * as devEvents from '../../dev/pool-xyk/events'


export const poolIsInitialized = {
	name: 'PoolXYK.PoolIsInitialized',
	v1: productionEvents.poolIsInitialized['v1'],
	v33Stage: stageEvents.poolIsInitialized['v33'],
	v33Test: testEvents.poolIsInitialized['v33'],
	v70Dev: devEvents.poolIsInitialized['v70'],
}
