import * as productionCalls from '../../production/ceres-token-locker/calls'
import * as stageCalls from '../../stage/ceres-token-locker/calls'
import * as testCalls from '../../test/ceres-token-locker/calls'
import * as devCalls from '../../dev/ceres-token-locker/calls'


export const lockTokens = {
	name: 'CeresTokenLocker.lock_tokens',
	v26: productionCalls.lockTokens['v26'],
	v37: productionCalls.lockTokens['v37'],
	v42: productionCalls.lockTokens['v42'],
	v33Stage: stageCalls.lockTokens['v33'],
	v37Stage: stageCalls.lockTokens['v37'],
	v42Stage: stageCalls.lockTokens['v42'],
	v33Test: testCalls.lockTokens['v33'],
	v37Test: testCalls.lockTokens['v37'],
	v42Test: testCalls.lockTokens['v42'],
	v70Dev: devCalls.lockTokens['v70'],
}

export const withdrawTokens = {
	name: 'CeresTokenLocker.withdraw_tokens',
	v26: productionCalls.withdrawTokens['v26'],
	v37: productionCalls.withdrawTokens['v37'],
	v42: productionCalls.withdrawTokens['v42'],
	v33Stage: stageCalls.withdrawTokens['v33'],
	v37Stage: stageCalls.withdrawTokens['v37'],
	v42Stage: stageCalls.withdrawTokens['v42'],
	v33Test: testCalls.withdrawTokens['v33'],
	v37Test: testCalls.withdrawTokens['v37'],
	v42Test: testCalls.withdrawTokens['v42'],
	v70Dev: devCalls.withdrawTokens['v70'],
}

export const changeFee = {
	name: 'CeresTokenLocker.change_fee',
	v26: productionCalls.changeFee['v26'],
	v33Stage: stageCalls.changeFee['v33'],
	v33Test: testCalls.changeFee['v33'],
	v70Dev: devCalls.changeFee['v70'],
}
