import * as productionStorage from '../../production/assets/storage'
import * as stageStorage from '../../stage/assets/storage'
import * as testStorage from '../../test/assets/storage'
import * as devStorage from '../../dev/assets/storage'


export const assetOwners = {
	name: 'Assets.AssetOwners',
	v1: productionStorage.assetOwners['v1'],
	v7: productionStorage.assetOwners['v7'],
	v42: productionStorage.assetOwners['v42'],
	v33Stage: stageStorage.assetOwners['v33'],
	v42Stage: stageStorage.assetOwners['v42'],
	v33Test: testStorage.assetOwners['v33'],
	v42Test: testStorage.assetOwners['v42'],
	v70Dev: devStorage.assetOwners['v70'],
}

export const assetInfos = {
	name: 'Assets.AssetInfos',
	v1: productionStorage.assetInfos['v1'],
	v26: productionStorage.assetInfos['v26'],
	v42: productionStorage.assetInfos['v42'],
	v33Stage: stageStorage.assetInfos['v33'],
	v42Stage: stageStorage.assetInfos['v42'],
	v33Test: testStorage.assetInfos['v33'],
	v42Test: testStorage.assetInfos['v42'],
	v70Dev: devStorage.assetInfos['v70'],
}

export const assetRecordAssetId = {
	name: 'Assets.AssetRecordAssetId',
	v1: productionStorage.assetRecordAssetId['v1'],
	v42: productionStorage.assetRecordAssetId['v42'],
	v33Stage: stageStorage.assetRecordAssetId['v33'],
	v42Stage: stageStorage.assetRecordAssetId['v42'],
	v69Stage: stageStorage.assetRecordAssetId['v69'],
	v33Test: testStorage.assetRecordAssetId['v33'],
	v42Test: testStorage.assetRecordAssetId['v42'],
	v69Test: testStorage.assetRecordAssetId['v69'],
	v70Dev: devStorage.assetRecordAssetId['v70'],
}

export const assetContentSource = {
	name: 'Assets.AssetContentSource',
	v22: productionStorage.assetContentSource['v22'],
}

export const assetDescription = {
	name: 'Assets.AssetDescription',
	v22: productionStorage.assetDescription['v22'],
}
