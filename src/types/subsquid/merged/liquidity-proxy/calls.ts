import * as productionCalls from '../../production/liquidity-proxy/calls'
import * as stageCalls from '../../stage/liquidity-proxy/calls'
import * as testCalls from '../../test/liquidity-proxy/calls'
import * as devCalls from '../../dev/liquidity-proxy/calls'


export const swap = {
	name: 'LiquidityProxy.swap',
	v1: productionCalls.swap['v1'],
	v42: productionCalls.swap['v42'],
	v33Stage: stageCalls.swap['v33'],
	v42Stage: stageCalls.swap['v42'],
	v69Stage: stageCalls.swap['v69'],
	v33Test: testCalls.swap['v33'],
	v42Test: testCalls.swap['v42'],
	v69Test: testCalls.swap['v69'],
	v70Dev: devCalls.swap['v70'],
}

export const swapTransfer = {
	name: 'LiquidityProxy.swap_transfer',
	v33: productionCalls.swapTransfer['v33'],
	v42: productionCalls.swapTransfer['v42'],
	v33Stage: stageCalls.swapTransfer['v33'],
	v42Stage: stageCalls.swapTransfer['v42'],
	v69Stage: stageCalls.swapTransfer['v69'],
	v33Test: testCalls.swapTransfer['v33'],
	v42Test: testCalls.swapTransfer['v42'],
	v69Test: testCalls.swapTransfer['v69'],
	v70Dev: devCalls.swapTransfer['v70'],
}

export const enableLiquiditySource = {
	name: 'LiquidityProxy.enable_liquidity_source',
	v38: productionCalls.enableLiquiditySource['v38'],
	v38Stage: stageCalls.enableLiquiditySource['v38'],
	v69Stage: stageCalls.enableLiquiditySource['v69'],
	v38Test: testCalls.enableLiquiditySource['v38'],
	v69Test: testCalls.enableLiquiditySource['v69'],
	v70Dev: devCalls.enableLiquiditySource['v70'],
}

export const disableLiquiditySource = {
	name: 'LiquidityProxy.disable_liquidity_source',
	v38: productionCalls.disableLiquiditySource['v38'],
	v38Stage: stageCalls.disableLiquiditySource['v38'],
	v69Stage: stageCalls.disableLiquiditySource['v69'],
	v38Test: testCalls.disableLiquiditySource['v38'],
	v69Test: testCalls.disableLiquiditySource['v69'],
	v70Dev: devCalls.disableLiquiditySource['v70'],
}

export const swapTransferBatch = {
	name: 'LiquidityProxy.swap_transfer_batch',
	v45: productionCalls.swapTransferBatch['v45'],
	v50: productionCalls.swapTransferBatch['v50'],
	v63: productionCalls.swapTransferBatch['v63'],
	v44Stage: stageCalls.swapTransferBatch['v44'],
	v48Stage: stageCalls.swapTransferBatch['v48'],
	v62Stage: stageCalls.swapTransferBatch['v62'],
	v69Stage: stageCalls.swapTransferBatch['v69'],
	v44Test: testCalls.swapTransferBatch['v44'],
	v48Test: testCalls.swapTransferBatch['v48'],
	v62Test: testCalls.swapTransferBatch['v62'],
	v69Test: testCalls.swapTransferBatch['v69'],
	v70Dev: devCalls.swapTransferBatch['v70'],
}

export const setAdarCommissionRatio = {
	name: 'LiquidityProxy.set_adar_commission_ratio',
	v57: productionCalls.setAdarCommissionRatio['v57'],
	v55Stage: stageCalls.setAdarCommissionRatio['v55'],
	v55Test: testCalls.setAdarCommissionRatio['v55'],
	v70Dev: devCalls.setAdarCommissionRatio['v70'],
}

export const xorlessTransfer = {
	name: 'LiquidityProxy.xorless_transfer',
	v66: productionCalls.xorlessTransfer['v66'],
	v66Stage: stageCalls.xorlessTransfer['v66'],
	v69Stage: stageCalls.xorlessTransfer['v69'],
	v66Test: testCalls.xorlessTransfer['v66'],
	v69Test: testCalls.xorlessTransfer['v69'],
	v70Dev: devCalls.xorlessTransfer['v70'],
}
