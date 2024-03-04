import * as stageCalls from '../../stage/eth-app/calls'
import * as testCalls from '../../test/eth-app/calls'
import * as devCalls from '../../dev/eth-app/calls'


export const burn = {
	name: 'EthApp.burn',
	v52Stage: stageCalls.burn['v52'],
	v52Test: testCalls.burn['v52'],
	v70Dev: devCalls.burn['v70'],
}

export const mint = {
	name: 'EthApp.mint',
	v52Stage: stageCalls.mint['v52'],
	v52Test: testCalls.mint['v52'],
	v70Dev: devCalls.mint['v70'],
}

export const registerNetwork = {
	name: 'EthApp.register_network',
	v52Stage: stageCalls.registerNetwork['v52'],
	v54Stage: stageCalls.registerNetwork['v54'],
	v52Test: testCalls.registerNetwork['v52'],
	v54Test: testCalls.registerNetwork['v54'],
	v70Dev: devCalls.registerNetwork['v70'],
}

export const registerNetworkWithExistingAsset = {
	name: 'EthApp.register_network_with_existing_asset',
	v52Stage: stageCalls.registerNetworkWithExistingAsset['v52'],
	v54Stage: stageCalls.registerNetworkWithExistingAsset['v54'],
	v52Test: testCalls.registerNetworkWithExistingAsset['v52'],
	v54Test: testCalls.registerNetworkWithExistingAsset['v54'],
	v70Dev: devCalls.registerNetworkWithExistingAsset['v70'],
}
