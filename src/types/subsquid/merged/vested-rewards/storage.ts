import * as productionStorage from '../../production/vested-rewards/storage'
import * as stageStorage from '../../stage/vested-rewards/storage'
import * as testStorage from '../../test/vested-rewards/storage'
import * as devStorage from '../../dev/vested-rewards/storage'


export const rewards = {
	name: 'VestedRewards.Rewards',
	v1: productionStorage.rewards['v1'],
	v42: productionStorage.rewards['v42'],
	v45: productionStorage.rewards['v45'],
	v33Stage: stageStorage.rewards['v33'],
	v42Stage: stageStorage.rewards['v42'],
	v44Stage: stageStorage.rewards['v44'],
	v33Test: testStorage.rewards['v33'],
	v42Test: testStorage.rewards['v42'],
	v44Test: testStorage.rewards['v44'],
	v70Dev: devStorage.rewards['v70'],
}

export const totalRewards = {
	name: 'VestedRewards.TotalRewards',
	v1: productionStorage.totalRewards['v1'],
	v33Stage: stageStorage.totalRewards['v33'],
	v33Test: testStorage.totalRewards['v33'],
	v70Dev: devStorage.totalRewards['v70'],
}

export const marketMakersRegistry = {
	name: 'VestedRewards.MarketMakersRegistry',
	v1: productionStorage.marketMakersRegistry['v1'],
	v33Stage: stageStorage.marketMakersRegistry['v33'],
	v33Test: testStorage.marketMakersRegistry['v33'],
}

export const marketMakingPairs = {
	name: 'VestedRewards.MarketMakingPairs',
	v22: productionStorage.marketMakingPairs['v22'],
	v42: productionStorage.marketMakingPairs['v42'],
	v33Stage: stageStorage.marketMakingPairs['v33'],
	v42Stage: stageStorage.marketMakingPairs['v42'],
	v33Test: testStorage.marketMakingPairs['v33'],
	v42Test: testStorage.marketMakingPairs['v42'],
}

export const crowdloanRewards = {
	name: 'VestedRewards.CrowdloanRewards',
	v33: productionStorage.crowdloanRewards['v33'],
	v42: productionStorage.crowdloanRewards['v42'],
	v33Stage: stageStorage.crowdloanRewards['v33'],
	v42Stage: stageStorage.crowdloanRewards['v42'],
	v33Test: testStorage.crowdloanRewards['v33'],
	v42Test: testStorage.crowdloanRewards['v42'],
}

export const crowdloanClaimHistory = {
	name: 'VestedRewards.CrowdloanClaimHistory',
	v33: productionStorage.crowdloanClaimHistory['v33'],
	v42: productionStorage.crowdloanClaimHistory['v42'],
	v33Stage: stageStorage.crowdloanClaimHistory['v33'],
	v42Stage: stageStorage.crowdloanClaimHistory['v42'],
	v33Test: testStorage.crowdloanClaimHistory['v33'],
	v42Test: testStorage.crowdloanClaimHistory['v42'],
}

export const crowdloanInfos = {
	name: 'VestedRewards.CrowdloanInfos',
	v53: productionStorage.crowdloanInfos['v53'],
	v52Stage: stageStorage.crowdloanInfos['v52'],
	v52Test: testStorage.crowdloanInfos['v52'],
	v70Dev: devStorage.crowdloanInfos['v70'],
}

export const crowdloanUserInfos = {
	name: 'VestedRewards.CrowdloanUserInfos',
	v53: productionStorage.crowdloanUserInfos['v53'],
	v52Stage: stageStorage.crowdloanUserInfos['v52'],
	v52Test: testStorage.crowdloanUserInfos['v52'],
	v70Dev: devStorage.crowdloanUserInfos['v70'],
}
