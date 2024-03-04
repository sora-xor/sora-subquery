import * as stageCalls from '../../stage/erc20-app/calls'
import * as testCalls from '../../test/erc20-app/calls'
import * as devCalls from '../../dev/erc20-app/calls'


export const mint = {
	name: 'ERC20App.mint',
	v52Stage: stageCalls.mint['v52'],
	v52Test: testCalls.mint['v52'],
	v70Dev: devCalls.mint['v70'],
}

export const registerAssetInternal = {
	name: 'ERC20App.register_asset_internal',
	v52Stage: stageCalls.registerAssetInternal['v52'],
	v52Test: testCalls.registerAssetInternal['v52'],
	v70Dev: devCalls.registerAssetInternal['v70'],
}

export const burn = {
	name: 'ERC20App.burn',
	v52Stage: stageCalls.burn['v52'],
	v52Test: testCalls.burn['v52'],
	v70Dev: devCalls.burn['v70'],
}

export const registerErc20Asset = {
	name: 'ERC20App.register_erc20_asset',
	v52Stage: stageCalls.registerErc20Asset['v52'],
	v52Test: testCalls.registerErc20Asset['v52'],
	v70Dev: devCalls.registerErc20Asset['v70'],
}

export const registerExistingErc20Asset = {
	name: 'ERC20App.register_existing_erc20_asset',
	v52Stage: stageCalls.registerExistingErc20Asset['v52'],
	v54Stage: stageCalls.registerExistingErc20Asset['v54'],
	v52Test: testCalls.registerExistingErc20Asset['v52'],
	v54Test: testCalls.registerExistingErc20Asset['v54'],
	v70Dev: devCalls.registerExistingErc20Asset['v70'],
}

export const registerNativeAsset = {
	name: 'ERC20App.register_native_asset',
	v52Stage: stageCalls.registerNativeAsset['v52'],
	v52Test: testCalls.registerNativeAsset['v52'],
	v70Dev: devCalls.registerNativeAsset['v70'],
}

export const registerNativeApp = {
	name: 'ERC20App.register_native_app',
	v52Stage: stageCalls.registerNativeApp['v52'],
	v52Test: testCalls.registerNativeApp['v52'],
	v70Dev: devCalls.registerNativeApp['v70'],
}

export const registerErc20App = {
	name: 'ERC20App.register_erc20_app',
	v52Stage: stageCalls.registerErc20App['v52'],
	v52Test: testCalls.registerErc20App['v52'],
	v70Dev: devCalls.registerErc20App['v70'],
}
