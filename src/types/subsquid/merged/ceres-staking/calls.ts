import * as productionCalls from '../../production/ceres-staking/calls'
import * as stageCalls from '../../stage/ceres-staking/calls'
import * as testCalls from '../../test/ceres-staking/calls'
import * as devCalls from '../../dev/ceres-staking/calls'


export const deposit = {
	name: 'CeresStaking.deposit',
	v19: productionCalls.deposit['v19'],
	v33Stage: stageCalls.deposit['v33'],
	v33Test: testCalls.deposit['v33'],
	v70Dev: devCalls.deposit['v70'],
}

export const withdraw = {
	name: 'CeresStaking.withdraw',
	v19: productionCalls.withdraw['v19'],
	v33Stage: stageCalls.withdraw['v33'],
	v33Test: testCalls.withdraw['v33'],
	v70Dev: devCalls.withdraw['v70'],
}

export const changeRewardsRemaining = {
	name: 'CeresStaking.change_rewards_remaining',
	v26: productionCalls.changeRewardsRemaining['v26'],
	v33Stage: stageCalls.changeRewardsRemaining['v33'],
	v33Test: testCalls.changeRewardsRemaining['v33'],
	v70Dev: devCalls.changeRewardsRemaining['v70'],
}
