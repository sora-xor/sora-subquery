import * as productionCalls from '../../production/dexapi/calls'
import * as stageCalls from '../../stage/dexapi/calls'
import * as testCalls from '../../test/dexapi/calls'
import * as devCalls from '../../dev/dexapi/calls'


export const swap = {
	name: 'DEXAPI.swap',
	v19: productionCalls.swap['v19'],
}

export const enableLiquiditySource = {
	name: 'DEXAPI.enable_liquidity_source',
	v70: productionCalls.enableLiquiditySource['v70'],
	v69Stage: stageCalls.enableLiquiditySource['v69'],
	v69Test: testCalls.enableLiquiditySource['v69'],
	v70Dev: devCalls.enableLiquiditySource['v70'],
}

export const disableLiquiditySource = {
	name: 'DEXAPI.disable_liquidity_source',
	v70: productionCalls.disableLiquiditySource['v70'],
	v69Stage: stageCalls.disableLiquiditySource['v69'],
	v69Test: testCalls.disableLiquiditySource['v69'],
	v70Dev: devCalls.disableLiquiditySource['v70'],
}
