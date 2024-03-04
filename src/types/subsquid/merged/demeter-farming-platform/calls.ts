import * as productionCalls from '../../production/demeter-farming-platform/calls'
import * as stageCalls from '../../stage/demeter-farming-platform/calls'
import * as testCalls from '../../test/demeter-farming-platform/calls'
import * as devCalls from '../../dev/demeter-farming-platform/calls'


export const registerToken = {
	name: 'DemeterFarmingPlatform.register_token',
	v33: productionCalls.registerToken['v33'],
	v42: productionCalls.registerToken['v42'],
	v33Stage: stageCalls.registerToken['v33'],
	v42Stage: stageCalls.registerToken['v42'],
	v33Test: testCalls.registerToken['v33'],
	v42Test: testCalls.registerToken['v42'],
	v70Dev: devCalls.registerToken['v70'],
}

export const addPool = {
	name: 'DemeterFarmingPlatform.add_pool',
	v33: productionCalls.addPool['v33'],
	v42: productionCalls.addPool['v42'],
	v43: productionCalls.addPool['v43'],
	v33Stage: stageCalls.addPool['v33'],
	v42Stage: stageCalls.addPool['v42'],
	v43Stage: stageCalls.addPool['v43'],
	v33Test: testCalls.addPool['v33'],
	v42Test: testCalls.addPool['v42'],
	v43Test: testCalls.addPool['v43'],
	v70Dev: devCalls.addPool['v70'],
}

export const deposit = {
	name: 'DemeterFarmingPlatform.deposit',
	v33: productionCalls.deposit['v33'],
	v42: productionCalls.deposit['v42'],
	v43: productionCalls.deposit['v43'],
	v33Stage: stageCalls.deposit['v33'],
	v42Stage: stageCalls.deposit['v42'],
	v43Stage: stageCalls.deposit['v43'],
	v33Test: testCalls.deposit['v33'],
	v42Test: testCalls.deposit['v42'],
	v43Test: testCalls.deposit['v43'],
	v70Dev: devCalls.deposit['v70'],
}

export const getRewards = {
	name: 'DemeterFarmingPlatform.get_rewards',
	v33: productionCalls.getRewards['v33'],
	v42: productionCalls.getRewards['v42'],
	v43: productionCalls.getRewards['v43'],
	v33Stage: stageCalls.getRewards['v33'],
	v42Stage: stageCalls.getRewards['v42'],
	v43Stage: stageCalls.getRewards['v43'],
	v33Test: testCalls.getRewards['v33'],
	v42Test: testCalls.getRewards['v42'],
	v43Test: testCalls.getRewards['v43'],
	v70Dev: devCalls.getRewards['v70'],
}

export const withdraw = {
	name: 'DemeterFarmingPlatform.withdraw',
	v33: productionCalls.withdraw['v33'],
	v42: productionCalls.withdraw['v42'],
	v43: productionCalls.withdraw['v43'],
	v33Stage: stageCalls.withdraw['v33'],
	v42Stage: stageCalls.withdraw['v42'],
	v43Stage: stageCalls.withdraw['v43'],
	v33Test: testCalls.withdraw['v33'],
	v42Test: testCalls.withdraw['v42'],
	v43Test: testCalls.withdraw['v43'],
	v70Dev: devCalls.withdraw['v70'],
}

export const removePool = {
	name: 'DemeterFarmingPlatform.remove_pool',
	v33: productionCalls.removePool['v33'],
	v42: productionCalls.removePool['v42'],
	v43: productionCalls.removePool['v43'],
	v33Stage: stageCalls.removePool['v33'],
	v42Stage: stageCalls.removePool['v42'],
	v43Stage: stageCalls.removePool['v43'],
	v33Test: testCalls.removePool['v33'],
	v42Test: testCalls.removePool['v42'],
	v43Test: testCalls.removePool['v43'],
	v70Dev: devCalls.removePool['v70'],
}

export const changePoolMultiplier = {
	name: 'DemeterFarmingPlatform.change_pool_multiplier',
	v33: productionCalls.changePoolMultiplier['v33'],
	v42: productionCalls.changePoolMultiplier['v42'],
	v43: productionCalls.changePoolMultiplier['v43'],
	v33Stage: stageCalls.changePoolMultiplier['v33'],
	v42Stage: stageCalls.changePoolMultiplier['v42'],
	v43Stage: stageCalls.changePoolMultiplier['v43'],
	v33Test: testCalls.changePoolMultiplier['v33'],
	v42Test: testCalls.changePoolMultiplier['v42'],
	v43Test: testCalls.changePoolMultiplier['v43'],
	v70Dev: devCalls.changePoolMultiplier['v70'],
}

export const changePoolDepositFee = {
	name: 'DemeterFarmingPlatform.change_pool_deposit_fee',
	v33: productionCalls.changePoolDepositFee['v33'],
	v42: productionCalls.changePoolDepositFee['v42'],
	v43: productionCalls.changePoolDepositFee['v43'],
	v33Stage: stageCalls.changePoolDepositFee['v33'],
	v42Stage: stageCalls.changePoolDepositFee['v42'],
	v43Stage: stageCalls.changePoolDepositFee['v43'],
	v33Test: testCalls.changePoolDepositFee['v33'],
	v42Test: testCalls.changePoolDepositFee['v42'],
	v43Test: testCalls.changePoolDepositFee['v43'],
	v70Dev: devCalls.changePoolDepositFee['v70'],
}

export const changeTokenInfo = {
	name: 'DemeterFarmingPlatform.change_token_info',
	v33: productionCalls.changeTokenInfo['v33'],
	v42: productionCalls.changeTokenInfo['v42'],
	v33Stage: stageCalls.changeTokenInfo['v33'],
	v42Stage: stageCalls.changeTokenInfo['v42'],
	v33Test: testCalls.changeTokenInfo['v33'],
	v42Test: testCalls.changeTokenInfo['v42'],
	v70Dev: devCalls.changeTokenInfo['v70'],
}

export const changeTotalTokens = {
	name: 'DemeterFarmingPlatform.change_total_tokens',
	v35: productionCalls.changeTotalTokens['v35'],
	v42: productionCalls.changeTotalTokens['v42'],
	v43: productionCalls.changeTotalTokens['v43'],
	v35Stage: stageCalls.changeTotalTokens['v35'],
	v42Stage: stageCalls.changeTotalTokens['v42'],
	v43Stage: stageCalls.changeTotalTokens['v43'],
	v35Test: testCalls.changeTotalTokens['v35'],
	v42Test: testCalls.changeTotalTokens['v42'],
	v43Test: testCalls.changeTotalTokens['v43'],
	v70Dev: devCalls.changeTotalTokens['v70'],
}

export const changeInfo = {
	name: 'DemeterFarmingPlatform.change_info',
	v35: productionCalls.changeInfo['v35'],
	v42: productionCalls.changeInfo['v42'],
	v43: productionCalls.changeInfo['v43'],
	v35Stage: stageCalls.changeInfo['v35'],
	v42Stage: stageCalls.changeInfo['v42'],
	v43Stage: stageCalls.changeInfo['v43'],
	v35Test: testCalls.changeInfo['v35'],
	v42Test: testCalls.changeInfo['v42'],
	v43Test: testCalls.changeInfo['v43'],
	v70Dev: devCalls.changeInfo['v70'],
}
