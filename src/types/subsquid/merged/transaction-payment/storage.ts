import * as productionStorage from '../../production/transaction-payment/storage'
import * as stageStorage from '../../stage/transaction-payment/storage'
import * as testStorage from '../../test/transaction-payment/storage'
import * as devStorage from '../../dev/transaction-payment/storage'


export const nextFeeMultiplier = {
	name: 'TransactionPayment.NextFeeMultiplier',
	v1: productionStorage.nextFeeMultiplier['v1'],
	v33Stage: stageStorage.nextFeeMultiplier['v33'],
	v33Test: testStorage.nextFeeMultiplier['v33'],
	v70Dev: devStorage.nextFeeMultiplier['v70'],
}

export const storageVersion = {
	name: 'TransactionPayment.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v42: productionStorage.storageVersion['v42'],
	v33Stage: stageStorage.storageVersion['v33'],
	v42Stage: stageStorage.storageVersion['v42'],
	v33Test: testStorage.storageVersion['v33'],
	v42Test: testStorage.storageVersion['v42'],
	v70Dev: devStorage.storageVersion['v70'],
}
