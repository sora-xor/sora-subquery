import * as productionCalls from '../../production/pool-xyk/calls'
import * as stageCalls from '../../stage/pool-xyk/calls'
import * as testCalls from '../../test/pool-xyk/calls'
import * as devCalls from '../../dev/pool-xyk/calls'


export const swapPair = {
	name: 'PoolXYK.swap_pair',
	v1: productionCalls.swapPair['v1'],
}

export const depositLiquidity = {
	name: 'PoolXYK.deposit_liquidity',
	v1: productionCalls.depositLiquidity['v1'],
	v42: productionCalls.depositLiquidity['v42'],
	v33Stage: stageCalls.depositLiquidity['v33'],
	v42Stage: stageCalls.depositLiquidity['v42'],
	v33Test: testCalls.depositLiquidity['v33'],
	v42Test: testCalls.depositLiquidity['v42'],
	v70Dev: devCalls.depositLiquidity['v70'],
}

export const withdrawLiquidity = {
	name: 'PoolXYK.withdraw_liquidity',
	v1: productionCalls.withdrawLiquidity['v1'],
	v42: productionCalls.withdrawLiquidity['v42'],
	v33Stage: stageCalls.withdrawLiquidity['v33'],
	v42Stage: stageCalls.withdrawLiquidity['v42'],
	v33Test: testCalls.withdrawLiquidity['v33'],
	v42Test: testCalls.withdrawLiquidity['v42'],
	v70Dev: devCalls.withdrawLiquidity['v70'],
}

export const initializePool = {
	name: 'PoolXYK.initialize_pool',
	v1: productionCalls.initializePool['v1'],
	v42: productionCalls.initializePool['v42'],
	v33Stage: stageCalls.initializePool['v33'],
	v42Stage: stageCalls.initializePool['v42'],
	v33Test: testCalls.initializePool['v33'],
	v42Test: testCalls.initializePool['v42'],
	v70Dev: devCalls.initializePool['v70'],
}
