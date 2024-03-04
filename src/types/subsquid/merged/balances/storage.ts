import * as productionStorage from '../../production/balances/storage'
import * as stageStorage from '../../stage/balances/storage'
import * as testStorage from '../../test/balances/storage'
import * as devStorage from '../../dev/balances/storage'


export const totalIssuance = {
	name: 'Balances.TotalIssuance',
	v1: productionStorage.totalIssuance['v1'],
	v33Stage: stageStorage.totalIssuance['v33'],
	v33Test: testStorage.totalIssuance['v33'],
	v70Dev: devStorage.totalIssuance['v70'],
}

export const account = {
	name: 'Balances.Account',
	v1: productionStorage.account['v1'],
	v33Stage: stageStorage.account['v33'],
	v33Test: testStorage.account['v33'],
	v70Dev: devStorage.account['v70'],
}

export const locks = {
	name: 'Balances.Locks',
	v1: productionStorage.locks['v1'],
	v33Stage: stageStorage.locks['v33'],
	v33Test: testStorage.locks['v33'],
	v70Dev: devStorage.locks['v70'],
}

export const storageVersion = {
	name: 'Balances.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v33Stage: stageStorage.storageVersion['v33'],
	v42Stage: stageStorage.storageVersion['v42'],
	v33Test: testStorage.storageVersion['v33'],
	v42Test: testStorage.storageVersion['v42'],
}

export const reserves = {
	name: 'Balances.Reserves',
	v42: productionStorage.reserves['v42'],
	v42Stage: stageStorage.reserves['v42'],
	v42Test: testStorage.reserves['v42'],
	v70Dev: devStorage.reserves['v70'],
}

export const inactiveIssuance = {
	name: 'Balances.InactiveIssuance',
	v53: productionStorage.inactiveIssuance['v53'],
	v52Stage: stageStorage.inactiveIssuance['v52'],
	v52Test: testStorage.inactiveIssuance['v52'],
	v70Dev: devStorage.inactiveIssuance['v70'],
}
