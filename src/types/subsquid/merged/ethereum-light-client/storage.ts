import * as stageStorage from '../../stage/ethereum-light-client/storage'
import * as testStorage from '../../test/ethereum-light-client/storage'
import * as devStorage from '../../dev/ethereum-light-client/storage'


export const bestBlock = {
	name: 'EthereumLightClient.BestBlock',
	v52Stage: stageStorage.bestBlock['v52'],
	v52Test: testStorage.bestBlock['v52'],
	v70Dev: devStorage.bestBlock['v70'],
}

export const blocksToPrune = {
	name: 'EthereumLightClient.BlocksToPrune',
	v52Stage: stageStorage.blocksToPrune['v52'],
	v52Test: testStorage.blocksToPrune['v52'],
	v70Dev: devStorage.blocksToPrune['v70'],
}

export const finalizedBlock = {
	name: 'EthereumLightClient.FinalizedBlock',
	v52Stage: stageStorage.finalizedBlock['v52'],
	v52Test: testStorage.finalizedBlock['v52'],
	v70Dev: devStorage.finalizedBlock['v70'],
}

export const networkConfig = {
	name: 'EthereumLightClient.NetworkConfig',
	v52Stage: stageStorage.networkConfig['v52'],
	v52Test: testStorage.networkConfig['v52'],
	v70Dev: devStorage.networkConfig['v70'],
}

export const headers = {
	name: 'EthereumLightClient.Headers',
	v52Stage: stageStorage.headers['v52'],
	v52Test: testStorage.headers['v52'],
	v70Dev: devStorage.headers['v70'],
}

export const headersByNumber = {
	name: 'EthereumLightClient.HeadersByNumber',
	v52Stage: stageStorage.headersByNumber['v52'],
	v52Test: testStorage.headersByNumber['v52'],
	v70Dev: devStorage.headersByNumber['v70'],
}
