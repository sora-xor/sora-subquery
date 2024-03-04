import * as productionEvents from '../../production/ceres-staking/events'
import * as stageEvents from '../../stage/ceres-staking/events'
import * as testEvents from '../../test/ceres-staking/events'
import * as devEvents from '../../dev/ceres-staking/events'


export const deposited = {
	name: 'CeresStaking.Deposited',
	v19: productionEvents.deposited['v19'],
	v33Stage: stageEvents.deposited['v33'],
	v33Test: testEvents.deposited['v33'],
	v70Dev: devEvents.deposited['v70'],
}

export const withdrawn = {
	name: 'CeresStaking.Withdrawn',
	v19: productionEvents.withdrawn['v19'],
	v33Stage: stageEvents.withdrawn['v33'],
	v33Test: testEvents.withdrawn['v33'],
	v70Dev: devEvents.withdrawn['v70'],
}

export const rewardsChanged = {
	name: 'CeresStaking.RewardsChanged',
	v26: productionEvents.rewardsChanged['v26'],
	v33Stage: stageEvents.rewardsChanged['v33'],
	v33Test: testEvents.rewardsChanged['v33'],
	v70Dev: devEvents.rewardsChanged['v70'],
}
