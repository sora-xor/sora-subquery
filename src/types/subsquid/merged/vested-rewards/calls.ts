import * as productionCalls from '../../production/vested-rewards/calls'
import * as stageCalls from '../../stage/vested-rewards/calls'
import * as testCalls from '../../test/vested-rewards/calls'
import * as devCalls from '../../dev/vested-rewards/calls'


export const claimRewards = {
	name: 'VestedRewards.claim_rewards',
	v7: productionCalls.claimRewards['v7'],
	v33Stage: stageCalls.claimRewards['v33'],
	v33Test: testCalls.claimRewards['v33'],
	v70Dev: devCalls.claimRewards['v70'],
}

export const injectMarketMakers = {
	name: 'VestedRewards.inject_market_makers',
	v7: productionCalls.injectMarketMakers['v7'],
	v33Stage: stageCalls.injectMarketMakers['v33'],
	v33Test: testCalls.injectMarketMakers['v33'],
}

export const setAssetPair = {
	name: 'VestedRewards.set_asset_pair',
	v22: productionCalls.setAssetPair['v22'],
	v42: productionCalls.setAssetPair['v42'],
	v33Stage: stageCalls.setAssetPair['v33'],
	v42Stage: stageCalls.setAssetPair['v42'],
	v33Test: testCalls.setAssetPair['v33'],
	v42Test: testCalls.setAssetPair['v42'],
}

export const claimCrowdloanRewards = {
	name: 'VestedRewards.claim_crowdloan_rewards',
	v33: productionCalls.claimCrowdloanRewards['v33'],
	v42: productionCalls.claimCrowdloanRewards['v42'],
	v53: productionCalls.claimCrowdloanRewards['v53'],
	v33Stage: stageCalls.claimCrowdloanRewards['v33'],
	v42Stage: stageCalls.claimCrowdloanRewards['v42'],
	v52Stage: stageCalls.claimCrowdloanRewards['v52'],
	v33Test: testCalls.claimCrowdloanRewards['v33'],
	v42Test: testCalls.claimCrowdloanRewards['v42'],
	v52Test: testCalls.claimCrowdloanRewards['v52'],
	v70Dev: devCalls.claimCrowdloanRewards['v70'],
}

export const updateRewards = {
	name: 'VestedRewards.update_rewards',
	v46: productionCalls.updateRewards['v46'],
	v46Stage: stageCalls.updateRewards['v46'],
	v46Test: testCalls.updateRewards['v46'],
	v70Dev: devCalls.updateRewards['v70'],
}

export const registerCrowdloan = {
	name: 'VestedRewards.register_crowdloan',
	v53: productionCalls.registerCrowdloan['v53'],
	v52Stage: stageCalls.registerCrowdloan['v52'],
	v52Test: testCalls.registerCrowdloan['v52'],
	v70Dev: devCalls.registerCrowdloan['v70'],
}
