import * as productionEvents from '../../production/demeter-farming-platform/events'
import * as stageEvents from '../../stage/demeter-farming-platform/events'
import * as testEvents from '../../test/demeter-farming-platform/events'
import * as devEvents from '../../dev/demeter-farming-platform/events'


export const tokenRegistered = {
	name: 'DemeterFarmingPlatform.TokenRegistered',
	v33: productionEvents.tokenRegistered['v33'],
	v42: productionEvents.tokenRegistered['v42'],
	v33Stage: stageEvents.tokenRegistered['v33'],
	v42Stage: stageEvents.tokenRegistered['v42'],
	v33Test: testEvents.tokenRegistered['v33'],
	v42Test: testEvents.tokenRegistered['v42'],
	v70Dev: devEvents.tokenRegistered['v70'],
}

export const poolAdded = {
	name: 'DemeterFarmingPlatform.PoolAdded',
	v33: productionEvents.poolAdded['v33'],
	v42: productionEvents.poolAdded['v42'],
	v43: productionEvents.poolAdded['v43'],
	v33Stage: stageEvents.poolAdded['v33'],
	v42Stage: stageEvents.poolAdded['v42'],
	v43Stage: stageEvents.poolAdded['v43'],
	v33Test: testEvents.poolAdded['v33'],
	v42Test: testEvents.poolAdded['v42'],
	v43Test: testEvents.poolAdded['v43'],
	v70Dev: devEvents.poolAdded['v70'],
}

export const rewardWithdrawn = {
	name: 'DemeterFarmingPlatform.RewardWithdrawn',
	v33: productionEvents.rewardWithdrawn['v33'],
	v42: productionEvents.rewardWithdrawn['v42'],
	v43: productionEvents.rewardWithdrawn['v43'],
	v33Stage: stageEvents.rewardWithdrawn['v33'],
	v42Stage: stageEvents.rewardWithdrawn['v42'],
	v43Stage: stageEvents.rewardWithdrawn['v43'],
	v33Test: testEvents.rewardWithdrawn['v33'],
	v42Test: testEvents.rewardWithdrawn['v42'],
	v43Test: testEvents.rewardWithdrawn['v43'],
	v70Dev: devEvents.rewardWithdrawn['v70'],
}

export const withdrawn = {
	name: 'DemeterFarmingPlatform.Withdrawn',
	v33: productionEvents.withdrawn['v33'],
	v42: productionEvents.withdrawn['v42'],
	v43: productionEvents.withdrawn['v43'],
	v33Stage: stageEvents.withdrawn['v33'],
	v42Stage: stageEvents.withdrawn['v42'],
	v43Stage: stageEvents.withdrawn['v43'],
	v33Test: testEvents.withdrawn['v33'],
	v42Test: testEvents.withdrawn['v42'],
	v43Test: testEvents.withdrawn['v43'],
	v70Dev: devEvents.withdrawn['v70'],
}

export const poolRemoved = {
	name: 'DemeterFarmingPlatform.PoolRemoved',
	v33: productionEvents.poolRemoved['v33'],
	v42: productionEvents.poolRemoved['v42'],
	v43: productionEvents.poolRemoved['v43'],
	v33Stage: stageEvents.poolRemoved['v33'],
	v42Stage: stageEvents.poolRemoved['v42'],
	v43Stage: stageEvents.poolRemoved['v43'],
	v33Test: testEvents.poolRemoved['v33'],
	v42Test: testEvents.poolRemoved['v42'],
	v43Test: testEvents.poolRemoved['v43'],
	v70Dev: devEvents.poolRemoved['v70'],
}

export const deposited = {
	name: 'DemeterFarmingPlatform.Deposited',
	v33: productionEvents.deposited['v33'],
	v42: productionEvents.deposited['v42'],
	v43: productionEvents.deposited['v43'],
	v33Stage: stageEvents.deposited['v33'],
	v42Stage: stageEvents.deposited['v42'],
	v43Stage: stageEvents.deposited['v43'],
	v33Test: testEvents.deposited['v33'],
	v42Test: testEvents.deposited['v42'],
	v43Test: testEvents.deposited['v43'],
	v70Dev: devEvents.deposited['v70'],
}

export const multiplierChanged = {
	name: 'DemeterFarmingPlatform.MultiplierChanged',
	v33: productionEvents.multiplierChanged['v33'],
	v42: productionEvents.multiplierChanged['v42'],
	v43: productionEvents.multiplierChanged['v43'],
	v33Stage: stageEvents.multiplierChanged['v33'],
	v42Stage: stageEvents.multiplierChanged['v42'],
	v43Stage: stageEvents.multiplierChanged['v43'],
	v33Test: testEvents.multiplierChanged['v33'],
	v42Test: testEvents.multiplierChanged['v42'],
	v43Test: testEvents.multiplierChanged['v43'],
	v70Dev: devEvents.multiplierChanged['v70'],
}

export const depositFeeChanged = {
	name: 'DemeterFarmingPlatform.DepositFeeChanged',
	v33: productionEvents.depositFeeChanged['v33'],
	v42: productionEvents.depositFeeChanged['v42'],
	v43: productionEvents.depositFeeChanged['v43'],
	v33Stage: stageEvents.depositFeeChanged['v33'],
	v42Stage: stageEvents.depositFeeChanged['v42'],
	v43Stage: stageEvents.depositFeeChanged['v43'],
	v33Test: testEvents.depositFeeChanged['v33'],
	v42Test: testEvents.depositFeeChanged['v42'],
	v43Test: testEvents.depositFeeChanged['v43'],
	v70Dev: devEvents.depositFeeChanged['v70'],
}

export const tokenInfoChanged = {
	name: 'DemeterFarmingPlatform.TokenInfoChanged',
	v33: productionEvents.tokenInfoChanged['v33'],
	v42: productionEvents.tokenInfoChanged['v42'],
	v33Stage: stageEvents.tokenInfoChanged['v33'],
	v42Stage: stageEvents.tokenInfoChanged['v42'],
	v33Test: testEvents.tokenInfoChanged['v33'],
	v42Test: testEvents.tokenInfoChanged['v42'],
	v70Dev: devEvents.tokenInfoChanged['v70'],
}

export const totalTokensChanged = {
	name: 'DemeterFarmingPlatform.TotalTokensChanged',
	v35: productionEvents.totalTokensChanged['v35'],
	v42: productionEvents.totalTokensChanged['v42'],
	v43: productionEvents.totalTokensChanged['v43'],
	v35Stage: stageEvents.totalTokensChanged['v35'],
	v42Stage: stageEvents.totalTokensChanged['v42'],
	v43Stage: stageEvents.totalTokensChanged['v43'],
	v35Test: testEvents.totalTokensChanged['v35'],
	v42Test: testEvents.totalTokensChanged['v42'],
	v43Test: testEvents.totalTokensChanged['v43'],
	v70Dev: devEvents.totalTokensChanged['v70'],
}

export const infoChanged = {
	name: 'DemeterFarmingPlatform.InfoChanged',
	v35: productionEvents.infoChanged['v35'],
	v42: productionEvents.infoChanged['v42'],
	v43: productionEvents.infoChanged['v43'],
	v35Stage: stageEvents.infoChanged['v35'],
	v42Stage: stageEvents.infoChanged['v42'],
	v43Stage: stageEvents.infoChanged['v43'],
	v35Test: testEvents.infoChanged['v35'],
	v42Test: testEvents.infoChanged['v42'],
	v43Test: testEvents.infoChanged['v43'],
	v70Dev: devEvents.infoChanged['v70'],
}
