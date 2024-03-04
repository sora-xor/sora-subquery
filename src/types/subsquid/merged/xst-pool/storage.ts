import * as productionStorage from '../../production/xst-pool/storage'
import * as stageStorage from '../../stage/xst-pool/storage'
import * as testStorage from '../../test/xst-pool/storage'
import * as devStorage from '../../dev/xst-pool/storage'


export const permissionedTechAccount = {
	name: 'XstPool.PermissionedTechAccount',
	v19: productionStorage.permissionedTechAccount['v19'],
	v42: productionStorage.permissionedTechAccount['v42'],
	v46: productionStorage.permissionedTechAccount['v46'],
	v33Stage: stageStorage.permissionedTechAccount['v33'],
	v42Stage: stageStorage.permissionedTechAccount['v42'],
	v46Stage: stageStorage.permissionedTechAccount['v46'],
	v33Test: testStorage.permissionedTechAccount['v33'],
	v42Test: testStorage.permissionedTechAccount['v42'],
	v46Test: testStorage.permissionedTechAccount['v46'],
}

export const baseFee = {
	name: 'XstPool.BaseFee',
	v19: productionStorage.baseFee['v19'],
	v42: productionStorage.baseFee['v42'],
	v33Stage: stageStorage.baseFee['v33'],
	v42Stage: stageStorage.baseFee['v42'],
	v33Test: testStorage.baseFee['v33'],
	v42Test: testStorage.baseFee['v42'],
}

export const enabledSynthetics = {
	name: 'XstPool.EnabledSynthetics',
	v19: productionStorage.enabledSynthetics['v19'],
	v42: productionStorage.enabledSynthetics['v42'],
	v57: productionStorage.enabledSynthetics['v57'],
	v33Stage: stageStorage.enabledSynthetics['v33'],
	v42Stage: stageStorage.enabledSynthetics['v42'],
	v54Stage: stageStorage.enabledSynthetics['v54'],
	v33Test: testStorage.enabledSynthetics['v33'],
	v42Test: testStorage.enabledSynthetics['v42'],
	v54Test: testStorage.enabledSynthetics['v54'],
	v70Dev: devStorage.enabledSynthetics['v70'],
}

export const referenceAssetId = {
	name: 'XstPool.ReferenceAssetId',
	v19: productionStorage.referenceAssetId['v19'],
	v42: productionStorage.referenceAssetId['v42'],
	v33Stage: stageStorage.referenceAssetId['v33'],
	v42Stage: stageStorage.referenceAssetId['v42'],
	v33Test: testStorage.referenceAssetId['v33'],
	v42Test: testStorage.referenceAssetId['v42'],
	v70Dev: devStorage.referenceAssetId['v70'],
}

export const collateralReserves = {
	name: 'XstPool.CollateralReserves',
	v19: productionStorage.collateralReserves['v19'],
	v42: productionStorage.collateralReserves['v42'],
	v33Stage: stageStorage.collateralReserves['v33'],
	v42Stage: stageStorage.collateralReserves['v42'],
	v33Test: testStorage.collateralReserves['v33'],
	v42Test: testStorage.collateralReserves['v42'],
	v70Dev: devStorage.collateralReserves['v70'],
}

export const syntheticBaseAssetFloorPrice = {
	name: 'XstPool.SyntheticBaseAssetFloorPrice',
	v45: productionStorage.syntheticBaseAssetFloorPrice['v45'],
	v44Stage: stageStorage.syntheticBaseAssetFloorPrice['v44'],
	v44Test: testStorage.syntheticBaseAssetFloorPrice['v44'],
	v70Dev: devStorage.syntheticBaseAssetFloorPrice['v70'],
}

export const enabledSymbols = {
	name: 'XstPool.EnabledSymbols',
	v57: productionStorage.enabledSymbols['v57'],
	v54Stage: stageStorage.enabledSymbols['v54'],
	v54Test: testStorage.enabledSymbols['v54'],
	v70Dev: devStorage.enabledSymbols['v70'],
}
