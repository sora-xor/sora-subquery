import * as productionStorage from '../../production/tokens/storage'
import * as stageStorage from '../../stage/tokens/storage'
import * as testStorage from '../../test/tokens/storage'
import * as devStorage from '../../dev/tokens/storage'


export const totalIssuance = {
	name: 'Tokens.TotalIssuance',
	v1: productionStorage.totalIssuance['v1'],
	v42: productionStorage.totalIssuance['v42'],
	v33Stage: stageStorage.totalIssuance['v33'],
	v42Stage: stageStorage.totalIssuance['v42'],
	v33Test: testStorage.totalIssuance['v33'],
	v42Test: testStorage.totalIssuance['v42'],
	v70Dev: devStorage.totalIssuance['v70'],
}

export const locks = {
	name: 'Tokens.Locks',
	v1: productionStorage.locks['v1'],
	v42: productionStorage.locks['v42'],
	v33Stage: stageStorage.locks['v33'],
	v42Stage: stageStorage.locks['v42'],
	v33Test: testStorage.locks['v33'],
	v42Test: testStorage.locks['v42'],
	v70Dev: devStorage.locks['v70'],
}

export const accounts = {
	name: 'Tokens.Accounts',
	v1: productionStorage.accounts['v1'],
	v42: productionStorage.accounts['v42'],
	v33Stage: stageStorage.accounts['v33'],
	v42Stage: stageStorage.accounts['v42'],
	v33Test: testStorage.accounts['v33'],
	v42Test: testStorage.accounts['v42'],
	v70Dev: devStorage.accounts['v70'],
}

export const reserves = {
	name: 'Tokens.Reserves',
	v42: productionStorage.reserves['v42'],
	v42Stage: stageStorage.reserves['v42'],
	v42Test: testStorage.reserves['v42'],
	v70Dev: devStorage.reserves['v70'],
}
