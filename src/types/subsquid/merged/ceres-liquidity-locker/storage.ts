import * as productionStorage from '../../production/ceres-liquidity-locker/storage'
import * as stageStorage from '../../stage/ceres-liquidity-locker/storage'
import * as testStorage from '../../test/ceres-liquidity-locker/storage'
import * as devStorage from '../../dev/ceres-liquidity-locker/storage'


export const feesOptionOneAccount = {
	name: 'CeresLiquidityLocker.FeesOptionOneAccount',
	v22: productionStorage.feesOptionOneAccount['v22'],
	v33Stage: stageStorage.feesOptionOneAccount['v33'],
	v33Test: testStorage.feesOptionOneAccount['v33'],
	v70Dev: devStorage.feesOptionOneAccount['v70'],
}

export const feesOptionTwoAccount = {
	name: 'CeresLiquidityLocker.FeesOptionTwoAccount',
	v22: productionStorage.feesOptionTwoAccount['v22'],
	v33Stage: stageStorage.feesOptionTwoAccount['v33'],
	v33Test: testStorage.feesOptionTwoAccount['v33'],
	v70Dev: devStorage.feesOptionTwoAccount['v70'],
}

export const feesOptionTwoCeresAmount = {
	name: 'CeresLiquidityLocker.FeesOptionTwoCeresAmount',
	v22: productionStorage.feesOptionTwoCeresAmount['v22'],
	v33Stage: stageStorage.feesOptionTwoCeresAmount['v33'],
	v33Test: testStorage.feesOptionTwoCeresAmount['v33'],
	v70Dev: devStorage.feesOptionTwoCeresAmount['v70'],
}

export const authorityAccount = {
	name: 'CeresLiquidityLocker.AuthorityAccount',
	v22: productionStorage.authorityAccount['v22'],
	v33Stage: stageStorage.authorityAccount['v33'],
	v33Test: testStorage.authorityAccount['v33'],
	v70Dev: devStorage.authorityAccount['v70'],
}

export const lockerData = {
	name: 'CeresLiquidityLocker.LockerData',
	v22: productionStorage.lockerData['v22'],
	v37: productionStorage.lockerData['v37'],
	v42: productionStorage.lockerData['v42'],
	v33Stage: stageStorage.lockerData['v33'],
	v37Stage: stageStorage.lockerData['v37'],
	v42Stage: stageStorage.lockerData['v42'],
	v33Test: testStorage.lockerData['v33'],
	v37Test: testStorage.lockerData['v37'],
	v42Test: testStorage.lockerData['v42'],
	v70Dev: devStorage.lockerData['v70'],
}

export const palletStorageVersion = {
	name: 'CeresLiquidityLocker.PalletStorageVersion',
	v37: productionStorage.palletStorageVersion['v37'],
	v42: productionStorage.palletStorageVersion['v42'],
	v37Stage: stageStorage.palletStorageVersion['v37'],
	v42Stage: stageStorage.palletStorageVersion['v42'],
	v37Test: testStorage.palletStorageVersion['v37'],
	v42Test: testStorage.palletStorageVersion['v42'],
	v70Dev: devStorage.palletStorageVersion['v70'],
}
