import * as productionStorage from '../../production/ceres-token-locker/storage'
import * as stageStorage from '../../stage/ceres-token-locker/storage'
import * as testStorage from '../../test/ceres-token-locker/storage'
import * as devStorage from '../../dev/ceres-token-locker/storage'


export const feesAccount = {
	name: 'CeresTokenLocker.FeesAccount',
	v26: productionStorage.feesAccount['v26'],
	v33Stage: stageStorage.feesAccount['v33'],
	v33Test: testStorage.feesAccount['v33'],
	v70Dev: devStorage.feesAccount['v70'],
}

export const authorityAccount = {
	name: 'CeresTokenLocker.AuthorityAccount',
	v26: productionStorage.authorityAccount['v26'],
	v33Stage: stageStorage.authorityAccount['v33'],
	v33Test: testStorage.authorityAccount['v33'],
	v70Dev: devStorage.authorityAccount['v70'],
}

export const feeAmount = {
	name: 'CeresTokenLocker.FeeAmount',
	v26: productionStorage.feeAmount['v26'],
	v33Stage: stageStorage.feeAmount['v33'],
	v33Test: testStorage.feeAmount['v33'],
	v70Dev: devStorage.feeAmount['v70'],
}

export const tokenLockerData = {
	name: 'CeresTokenLocker.TokenLockerData',
	v26: productionStorage.tokenLockerData['v26'],
	v37: productionStorage.tokenLockerData['v37'],
	v42: productionStorage.tokenLockerData['v42'],
	v33Stage: stageStorage.tokenLockerData['v33'],
	v37Stage: stageStorage.tokenLockerData['v37'],
	v42Stage: stageStorage.tokenLockerData['v42'],
	v33Test: testStorage.tokenLockerData['v33'],
	v37Test: testStorage.tokenLockerData['v37'],
	v42Test: testStorage.tokenLockerData['v42'],
	v70Dev: devStorage.tokenLockerData['v70'],
}

export const palletStorageVersion = {
	name: 'CeresTokenLocker.PalletStorageVersion',
	v37: productionStorage.palletStorageVersion['v37'],
	v42: productionStorage.palletStorageVersion['v42'],
	v37Stage: stageStorage.palletStorageVersion['v37'],
	v42Stage: stageStorage.palletStorageVersion['v42'],
	v37Test: testStorage.palletStorageVersion['v37'],
	v42Test: testStorage.palletStorageVersion['v42'],
	v70Dev: devStorage.palletStorageVersion['v70'],
}
