import * as productionStorage from '../../production/ceres-staking/storage'
import * as stageStorage from '../../stage/ceres-staking/storage'
import * as testStorage from '../../test/ceres-staking/storage'
import * as devStorage from '../../dev/ceres-staking/storage'


export const stakers = {
	name: 'CeresStaking.Stakers',
	v19: productionStorage.stakers['v19'],
	v33Stage: stageStorage.stakers['v33'],
	v33Test: testStorage.stakers['v33'],
	v70Dev: devStorage.stakers['v70'],
}

export const totalDeposited = {
	name: 'CeresStaking.TotalDeposited',
	v19: productionStorage.totalDeposited['v19'],
	v33Stage: stageStorage.totalDeposited['v33'],
	v33Test: testStorage.totalDeposited['v33'],
	v70Dev: devStorage.totalDeposited['v70'],
}

export const rewardsRemaining = {
	name: 'CeresStaking.RewardsRemaining',
	v19: productionStorage.rewardsRemaining['v19'],
	v33Stage: stageStorage.rewardsRemaining['v33'],
	v33Test: testStorage.rewardsRemaining['v33'],
	v70Dev: devStorage.rewardsRemaining['v70'],
}

export const authorityAccount = {
	name: 'CeresStaking.AuthorityAccount',
	v26: productionStorage.authorityAccount['v26'],
	v33Stage: stageStorage.authorityAccount['v33'],
	v33Test: testStorage.authorityAccount['v33'],
	v70Dev: devStorage.authorityAccount['v70'],
}
