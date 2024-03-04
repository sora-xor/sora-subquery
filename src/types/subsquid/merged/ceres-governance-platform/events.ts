import * as productionEvents from '../../production/ceres-governance-platform/events'
import * as stageEvents from '../../stage/ceres-governance-platform/events'
import * as testEvents from '../../test/ceres-governance-platform/events'
import * as devEvents from '../../dev/ceres-governance-platform/events'


export const voted = {
	name: 'CeresGovernancePlatform.Voted',
	v26: productionEvents.voted['v26'],
	v70: productionEvents.voted['v70'],
	v33Stage: stageEvents.voted['v33'],
	v69Stage: stageEvents.voted['v69'],
	v33Test: testEvents.voted['v33'],
	v69Test: testEvents.voted['v69'],
	v70Dev: devEvents.voted['v70'],
}

export const created = {
	name: 'CeresGovernancePlatform.Created',
	v26: productionEvents.created['v26'],
	v37: productionEvents.created['v37'],
	v70: productionEvents.created['v70'],
	v33Stage: stageEvents.created['v33'],
	v37Stage: stageEvents.created['v37'],
	v69Stage: stageEvents.created['v69'],
	v33Test: testEvents.created['v33'],
	v37Test: testEvents.created['v37'],
	v69Test: testEvents.created['v69'],
	v70Dev: devEvents.created['v70'],
}

export const withdrawn = {
	name: 'CeresGovernancePlatform.Withdrawn',
	v26: productionEvents.withdrawn['v26'],
	v70: productionEvents.withdrawn['v70'],
	v33Stage: stageEvents.withdrawn['v33'],
	v69Stage: stageEvents.withdrawn['v69'],
	v33Test: testEvents.withdrawn['v33'],
	v69Test: testEvents.withdrawn['v69'],
	v70Dev: devEvents.withdrawn['v70'],
}
