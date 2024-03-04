import * as productionEvents from '../../production/liquidity-proxy/events'
import * as stageEvents from '../../stage/liquidity-proxy/events'
import * as testEvents from '../../test/liquidity-proxy/events'
import * as devEvents from '../../dev/liquidity-proxy/events'


export const exchange = {
	name: 'LiquidityProxy.Exchange',
	v1: productionEvents.exchange['v1'],
	v42: productionEvents.exchange['v42'],
	v33Stage: stageEvents.exchange['v33'],
	v42Stage: stageEvents.exchange['v42'],
	v69Stage: stageEvents.exchange['v69'],
	v33Test: testEvents.exchange['v33'],
	v42Test: testEvents.exchange['v42'],
	v69Test: testEvents.exchange['v69'],
	v70Dev: devEvents.exchange['v70'],
}

export const liquiditySourceEnabled = {
	name: 'LiquidityProxy.LiquiditySourceEnabled',
	v38: productionEvents.liquiditySourceEnabled['v38'],
	v38Stage: stageEvents.liquiditySourceEnabled['v38'],
	v69Stage: stageEvents.liquiditySourceEnabled['v69'],
	v38Test: testEvents.liquiditySourceEnabled['v38'],
	v69Test: testEvents.liquiditySourceEnabled['v69'],
	v70Dev: devEvents.liquiditySourceEnabled['v70'],
}

export const liquiditySourceDisabled = {
	name: 'LiquidityProxy.LiquiditySourceDisabled',
	v38: productionEvents.liquiditySourceDisabled['v38'],
	v38Stage: stageEvents.liquiditySourceDisabled['v38'],
	v69Stage: stageEvents.liquiditySourceDisabled['v69'],
	v38Test: testEvents.liquiditySourceDisabled['v38'],
	v69Test: testEvents.liquiditySourceDisabled['v69'],
	v70Dev: devEvents.liquiditySourceDisabled['v70'],
}

export const batchSwapExecuted = {
	name: 'LiquidityProxy.BatchSwapExecuted',
	v57: productionEvents.batchSwapExecuted['v57'],
	v55Stage: stageEvents.batchSwapExecuted['v55'],
	v55Test: testEvents.batchSwapExecuted['v55'],
	v70Dev: devEvents.batchSwapExecuted['v70'],
}

export const xorlessTransfer = {
	name: 'LiquidityProxy.XorlessTransfer',
	v66: productionEvents.xorlessTransfer['v66'],
	v66Stage: stageEvents.xorlessTransfer['v66'],
	v66Test: testEvents.xorlessTransfer['v66'],
	v70Dev: devEvents.xorlessTransfer['v70'],
}

export const adarFeeWithdrawn = {
	name: 'LiquidityProxy.ADARFeeWithdrawn',
	v68: productionEvents.adarFeeWithdrawn['v68'],
	v67Stage: stageEvents.adarFeeWithdrawn['v67'],
	v67Test: testEvents.adarFeeWithdrawn['v67'],
	v70Dev: devEvents.adarFeeWithdrawn['v70'],
}
