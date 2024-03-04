import * as stageCalls from '../../stage/ethereum-light-client/calls'
import * as testCalls from '../../test/ethereum-light-client/calls'
import * as devCalls from '../../dev/ethereum-light-client/calls'


export const registerNetwork = {
	name: 'EthereumLightClient.register_network',
	v52Stage: stageCalls.registerNetwork['v52'],
	v52Test: testCalls.registerNetwork['v52'],
	v70Dev: devCalls.registerNetwork['v70'],
}

export const updateDifficultyConfig = {
	name: 'EthereumLightClient.update_difficulty_config',
	v52Stage: stageCalls.updateDifficultyConfig['v52'],
	v52Test: testCalls.updateDifficultyConfig['v52'],
	v70Dev: devCalls.updateDifficultyConfig['v70'],
}

export const importHeader = {
	name: 'EthereumLightClient.import_header',
	v52Stage: stageCalls.importHeader['v52'],
	v52Test: testCalls.importHeader['v52'],
	v70Dev: devCalls.importHeader['v70'],
}
