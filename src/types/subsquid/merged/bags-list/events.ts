import * as productionEvents from '../../production/bags-list/events'
import * as stageEvents from '../../stage/bags-list/events'
import * as testEvents from '../../test/bags-list/events'
import * as devEvents from '../../dev/bags-list/events'


export const rebagged = {
	name: 'BagsList.Rebagged',
	v42: productionEvents.rebagged['v42'],
	v42Stage: stageEvents.rebagged['v42'],
	v42Test: testEvents.rebagged['v42'],
	v70Dev: devEvents.rebagged['v70'],
}

export const scoreUpdated = {
	name: 'BagsList.ScoreUpdated',
	v42: productionEvents.scoreUpdated['v42'],
	v42Stage: stageEvents.scoreUpdated['v42'],
	v42Test: testEvents.scoreUpdated['v42'],
	v70Dev: devEvents.scoreUpdated['v70'],
}
