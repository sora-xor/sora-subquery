import * as productionCalls from '../../production/bridge-proxy/calls'
import * as stageCalls from '../../stage/bridge-proxy/calls'
import * as testCalls from '../../test/bridge-proxy/calls'
import * as devCalls from '../../dev/bridge-proxy/calls'


export const burn = {
	name: 'BridgeProxy.burn',
	v64: productionCalls.burn['v64'],
	v70: productionCalls.burn['v70'],
	v54Stage: stageCalls.burn['v54'],
	v70Stage: stageCalls.burn['v70'],
	v54Test: testCalls.burn['v54'],
	v70Test: testCalls.burn['v70'],
	v70Dev: devCalls.burn['v70'],
}

export const addLimitedAsset = {
	name: 'BridgeProxy.add_limited_asset',
	v64: productionCalls.addLimitedAsset['v64'],
	v62Stage: stageCalls.addLimitedAsset['v62'],
	v62Test: testCalls.addLimitedAsset['v62'],
	v70Dev: devCalls.addLimitedAsset['v70'],
}

export const removeLimitedAsset = {
	name: 'BridgeProxy.remove_limited_asset',
	v64: productionCalls.removeLimitedAsset['v64'],
	v62Stage: stageCalls.removeLimitedAsset['v62'],
	v62Test: testCalls.removeLimitedAsset['v62'],
	v70Dev: devCalls.removeLimitedAsset['v70'],
}

export const updateTransferLimit = {
	name: 'BridgeProxy.update_transfer_limit',
	v64: productionCalls.updateTransferLimit['v64'],
	v62Stage: stageCalls.updateTransferLimit['v62'],
	v62Test: testCalls.updateTransferLimit['v62'],
	v70Dev: devCalls.updateTransferLimit['v70'],
}
