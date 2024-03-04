import * as productionCalls from '../../production/ceres-liquidity-locker/calls'
import * as stageCalls from '../../stage/ceres-liquidity-locker/calls'
import * as testCalls from '../../test/ceres-liquidity-locker/calls'
import * as devCalls from '../../dev/ceres-liquidity-locker/calls'


export const lockLiquidity = {
	name: 'CeresLiquidityLocker.lock_liquidity',
	v22: productionCalls.lockLiquidity['v22'],
	v37: productionCalls.lockLiquidity['v37'],
	v42: productionCalls.lockLiquidity['v42'],
	v33Stage: stageCalls.lockLiquidity['v33'],
	v37Stage: stageCalls.lockLiquidity['v37'],
	v42Stage: stageCalls.lockLiquidity['v42'],
	v33Test: testCalls.lockLiquidity['v33'],
	v37Test: testCalls.lockLiquidity['v37'],
	v42Test: testCalls.lockLiquidity['v42'],
	v70Dev: devCalls.lockLiquidity['v70'],
}

export const changeCeresFee = {
	name: 'CeresLiquidityLocker.change_ceres_fee',
	v22: productionCalls.changeCeresFee['v22'],
	v33Stage: stageCalls.changeCeresFee['v33'],
	v33Test: testCalls.changeCeresFee['v33'],
	v70Dev: devCalls.changeCeresFee['v70'],
}
