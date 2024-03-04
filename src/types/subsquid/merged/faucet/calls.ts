import * as productionCalls from '../../production/faucet/calls'
import * as stageCalls from '../../stage/faucet/calls'
import * as testCalls from '../../test/faucet/calls'
import * as devCalls from '../../dev/faucet/calls'


export const transfer = {
	name: 'Faucet.transfer',
	v22: productionCalls.transfer['v22'],
	v33Stage: stageCalls.transfer['v33'],
	v42Stage: stageCalls.transfer['v42'],
	v33Test: testCalls.transfer['v33'],
	v42Test: testCalls.transfer['v42'],
	v70Dev: devCalls.transfer['v70'],
}

export const resetRewards = {
	name: 'Faucet.reset_rewards',
	v22: productionCalls.resetRewards['v22'],
	v33Stage: stageCalls.resetRewards['v33'],
	v33Test: testCalls.resetRewards['v33'],
	v70Dev: devCalls.resetRewards['v70'],
}

export const updateLimit = {
	name: 'Faucet.update_limit',
	v37Stage: stageCalls.updateLimit['v37'],
	v37Test: testCalls.updateLimit['v37'],
	v70Dev: devCalls.updateLimit['v70'],
}
