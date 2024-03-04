import * as productionStorage from '../../production/ceres-governance-platform/storage'
import * as stageStorage from '../../stage/ceres-governance-platform/storage'
import * as testStorage from '../../test/ceres-governance-platform/storage'
import * as devStorage from '../../dev/ceres-governance-platform/storage'


export const voting = {
	name: 'CeresGovernancePlatform.Voting',
	v26: productionStorage.voting['v26'],
	v70: productionStorage.voting['v70'],
	v33Stage: stageStorage.voting['v33'],
	v69Stage: stageStorage.voting['v69'],
	v33Test: testStorage.voting['v33'],
	v69Test: testStorage.voting['v69'],
	v70Dev: devStorage.voting['v70'],
}

export const pollData = {
	name: 'CeresGovernancePlatform.PollData',
	v26: productionStorage.pollData['v26'],
	v37: productionStorage.pollData['v37'],
	v70: productionStorage.pollData['v70'],
	v33Stage: stageStorage.pollData['v33'],
	v37Stage: stageStorage.pollData['v37'],
	v69Stage: stageStorage.pollData['v69'],
	v33Test: testStorage.pollData['v33'],
	v37Test: testStorage.pollData['v37'],
	v69Test: testStorage.pollData['v69'],
	v70Dev: devStorage.pollData['v70'],
}

export const palletStorageVersion = {
	name: 'CeresGovernancePlatform.PalletStorageVersion',
	v37: productionStorage.palletStorageVersion['v37'],
	v42: productionStorage.palletStorageVersion['v42'],
	v70: productionStorage.palletStorageVersion['v70'],
	v37Stage: stageStorage.palletStorageVersion['v37'],
	v42Stage: stageStorage.palletStorageVersion['v42'],
	v69Stage: stageStorage.palletStorageVersion['v69'],
	v37Test: testStorage.palletStorageVersion['v37'],
	v42Test: testStorage.palletStorageVersion['v42'],
	v69Test: testStorage.palletStorageVersion['v69'],
	v70Dev: devStorage.palletStorageVersion['v70'],
}

export const authorityAccount = {
	name: 'CeresGovernancePlatform.AuthorityAccount',
	v70: productionStorage.authorityAccount['v70'],
	v69Stage: stageStorage.authorityAccount['v69'],
	v69Test: testStorage.authorityAccount['v69'],
	v70Dev: devStorage.authorityAccount['v70'],
}
