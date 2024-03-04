import * as productionStorage from '../../production/parachain-bridge-app/storage'
import * as stageStorage from '../../stage/parachain-bridge-app/storage'
import * as testStorage from '../../test/parachain-bridge-app/storage'
import * as devStorage from '../../dev/parachain-bridge-app/storage'


export const assetKinds = {
	name: 'ParachainBridgeApp.AssetKinds',
	v64: productionStorage.assetKinds['v64'],
	v70: productionStorage.assetKinds['v70'],
	v64Stage: stageStorage.assetKinds['v64'],
	v70Stage: stageStorage.assetKinds['v70'],
	v64Test: testStorage.assetKinds['v64'],
	v70Test: testStorage.assetKinds['v70'],
	v70Dev: devStorage.assetKinds['v70'],
}

export const sidechainPrecision = {
	name: 'ParachainBridgeApp.SidechainPrecision',
	v64: productionStorage.sidechainPrecision['v64'],
	v70: productionStorage.sidechainPrecision['v70'],
	v64Stage: stageStorage.sidechainPrecision['v64'],
	v70Stage: stageStorage.sidechainPrecision['v70'],
	v64Test: testStorage.sidechainPrecision['v64'],
	v70Test: testStorage.sidechainPrecision['v70'],
	v70Dev: devStorage.sidechainPrecision['v70'],
}

export const allowedParachainAssets = {
	name: 'ParachainBridgeApp.AllowedParachainAssets',
	v64: productionStorage.allowedParachainAssets['v64'],
	v70: productionStorage.allowedParachainAssets['v70'],
	v64Stage: stageStorage.allowedParachainAssets['v64'],
	v70Stage: stageStorage.allowedParachainAssets['v70'],
	v64Test: testStorage.allowedParachainAssets['v64'],
	v70Test: testStorage.allowedParachainAssets['v70'],
	v70Dev: devStorage.allowedParachainAssets['v70'],
}

export const relaychainAsset = {
	name: 'ParachainBridgeApp.RelaychainAsset',
	v64: productionStorage.relaychainAsset['v64'],
	v70: productionStorage.relaychainAsset['v70'],
	v64Stage: stageStorage.relaychainAsset['v64'],
	v70Stage: stageStorage.relaychainAsset['v70'],
	v64Test: testStorage.relaychainAsset['v64'],
	v70Test: testStorage.relaychainAsset['v70'],
	v70Dev: devStorage.relaychainAsset['v70'],
}
