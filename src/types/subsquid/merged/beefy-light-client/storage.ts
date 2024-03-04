import * as stageStorage from '../../stage/beefy-light-client/storage'
import * as testStorage from '../../test/beefy-light-client/storage'
import * as devStorage from '../../dev/beefy-light-client/storage'


export const latestMmrRoots = {
	name: 'BeefyLightClient.LatestMmrRoots',
	v52Stage: stageStorage.latestMmrRoots['v52'],
	v52Test: testStorage.latestMmrRoots['v52'],
	v70Dev: devStorage.latestMmrRoots['v70'],
}

export const latestBeefyBlock = {
	name: 'BeefyLightClient.LatestBeefyBlock',
	v52Stage: stageStorage.latestBeefyBlock['v52'],
	v52Test: testStorage.latestBeefyBlock['v52'],
	v70Dev: devStorage.latestBeefyBlock['v70'],
}

export const latestRandomSeed = {
	name: 'BeefyLightClient.LatestRandomSeed',
	v52Stage: stageStorage.latestRandomSeed['v52'],
	v52Test: testStorage.latestRandomSeed['v52'],
	v70Dev: devStorage.latestRandomSeed['v70'],
}

export const currentValidatorSet = {
	name: 'BeefyLightClient.CurrentValidatorSet',
	v52Stage: stageStorage.currentValidatorSet['v52'],
	v52Test: testStorage.currentValidatorSet['v52'],
	v70Dev: devStorage.currentValidatorSet['v70'],
}

export const nextValidatorSet = {
	name: 'BeefyLightClient.NextValidatorSet',
	v52Stage: stageStorage.nextValidatorSet['v52'],
	v52Test: testStorage.nextValidatorSet['v52'],
	v70Dev: devStorage.nextValidatorSet['v70'],
}

export const thisNetworkId = {
	name: 'BeefyLightClient.ThisNetworkId',
	v52Stage: stageStorage.thisNetworkId['v52'],
	v52Test: testStorage.thisNetworkId['v52'],
	v70Dev: devStorage.thisNetworkId['v70'],
}
