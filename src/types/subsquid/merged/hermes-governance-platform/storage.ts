import * as productionStorage from '../../production/hermes-governance-platform/storage'
import * as stageStorage from '../../stage/hermes-governance-platform/storage'
import * as testStorage from '../../test/hermes-governance-platform/storage'
import * as devStorage from '../../dev/hermes-governance-platform/storage'


export const hermesVotings = {
	name: 'HermesGovernancePlatform.HermesVotings',
	v47: productionStorage.hermesVotings['v47'],
	v57: productionStorage.hermesVotings['v57'],
	v47Stage: stageStorage.hermesVotings['v47'],
	v55Stage: stageStorage.hermesVotings['v55'],
	v47Test: testStorage.hermesVotings['v47'],
	v55Test: testStorage.hermesVotings['v55'],
	v70Dev: devStorage.hermesVotings['v70'],
}

export const hermesPollData = {
	name: 'HermesGovernancePlatform.HermesPollData',
	v47: productionStorage.hermesPollData['v47'],
	v57: productionStorage.hermesPollData['v57'],
	v47Stage: stageStorage.hermesPollData['v47'],
	v55Stage: stageStorage.hermesPollData['v55'],
	v47Test: testStorage.hermesPollData['v47'],
	v55Test: testStorage.hermesPollData['v55'],
	v70Dev: devStorage.hermesPollData['v70'],
}

export const minimumHermesVotingAmount = {
	name: 'HermesGovernancePlatform.MinimumHermesVotingAmount',
	v47: productionStorage.minimumHermesVotingAmount['v47'],
	v47Stage: stageStorage.minimumHermesVotingAmount['v47'],
	v47Test: testStorage.minimumHermesVotingAmount['v47'],
	v70Dev: devStorage.minimumHermesVotingAmount['v70'],
}

export const minimumHermesAmountForCreatingPoll = {
	name: 'HermesGovernancePlatform.MinimumHermesAmountForCreatingPoll',
	v47: productionStorage.minimumHermesAmountForCreatingPoll['v47'],
	v47Stage: stageStorage.minimumHermesAmountForCreatingPoll['v47'],
	v47Test: testStorage.minimumHermesAmountForCreatingPoll['v47'],
	v70Dev: devStorage.minimumHermesAmountForCreatingPoll['v70'],
}

export const authorityAccount = {
	name: 'HermesGovernancePlatform.AuthorityAccount',
	v47: productionStorage.authorityAccount['v47'],
	v47Stage: stageStorage.authorityAccount['v47'],
	v47Test: testStorage.authorityAccount['v47'],
	v70Dev: devStorage.authorityAccount['v70'],
}

export const palletStorageVersion = {
	name: 'HermesGovernancePlatform.PalletStorageVersion',
	v57: productionStorage.palletStorageVersion['v57'],
	v55Stage: stageStorage.palletStorageVersion['v55'],
	v55Test: testStorage.palletStorageVersion['v55'],
	v70Dev: devStorage.palletStorageVersion['v70'],
}
