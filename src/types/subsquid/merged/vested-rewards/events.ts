import * as productionEvents from '../../production/vested-rewards/events'
import * as stageEvents from '../../stage/vested-rewards/events'
import * as testEvents from '../../test/vested-rewards/events'
import * as devEvents from '../../dev/vested-rewards/events'


export const rewardsVested = {
	name: 'VestedRewards.RewardsVested',
	v1: productionEvents.rewardsVested['v1'],
	v33Stage: stageEvents.rewardsVested['v33'],
	v33Test: testEvents.rewardsVested['v33'],
	v70Dev: devEvents.rewardsVested['v70'],
}

export const actualDoesntMatchAvailable = {
	name: 'VestedRewards.ActualDoesntMatchAvailable',
	v7: productionEvents.actualDoesntMatchAvailable['v7'],
	v42: productionEvents.actualDoesntMatchAvailable['v42'],
	v45: productionEvents.actualDoesntMatchAvailable['v45'],
	v33Stage: stageEvents.actualDoesntMatchAvailable['v33'],
	v42Stage: stageEvents.actualDoesntMatchAvailable['v42'],
	v44Stage: stageEvents.actualDoesntMatchAvailable['v44'],
	v33Test: testEvents.actualDoesntMatchAvailable['v33'],
	v42Test: testEvents.actualDoesntMatchAvailable['v42'],
	v44Test: testEvents.actualDoesntMatchAvailable['v44'],
	v70Dev: devEvents.actualDoesntMatchAvailable['v70'],
}

export const failedToSaveCalculatedReward = {
	name: 'VestedRewards.FailedToSaveCalculatedReward',
	v7: productionEvents.failedToSaveCalculatedReward['v7'],
	v33Stage: stageEvents.failedToSaveCalculatedReward['v33'],
	v33Test: testEvents.failedToSaveCalculatedReward['v33'],
	v70Dev: devEvents.failedToSaveCalculatedReward['v70'],
}

export const addingZeroMarketMakerReward = {
	name: 'VestedRewards.AddingZeroMarketMakerReward',
	v7: productionEvents.addingZeroMarketMakerReward['v7'],
	v33Stage: stageEvents.addingZeroMarketMakerReward['v33'],
	v33Test: testEvents.addingZeroMarketMakerReward['v33'],
}

export const noEligibleMarketMakers = {
	name: 'VestedRewards.NoEligibleMarketMakers',
	v7: productionEvents.noEligibleMarketMakers['v7'],
	v33Stage: stageEvents.noEligibleMarketMakers['v33'],
	v33Test: testEvents.noEligibleMarketMakers['v33'],
}

export const crowdloanClaimed = {
	name: 'VestedRewards.CrowdloanClaimed',
	v53: productionEvents.crowdloanClaimed['v53'],
	v52Stage: stageEvents.crowdloanClaimed['v52'],
	v52Test: testEvents.crowdloanClaimed['v52'],
	v70Dev: devEvents.crowdloanClaimed['v70'],
}
