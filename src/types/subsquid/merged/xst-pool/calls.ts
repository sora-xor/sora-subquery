import * as productionCalls from '../../production/xst-pool/calls'
import * as stageCalls from '../../stage/xst-pool/calls'
import * as testCalls from '../../test/xst-pool/calls'
import * as devCalls from '../../dev/xst-pool/calls'


export const initializePool = {
	name: 'XSTPool.initialize_pool',
	v19: productionCalls.initializePool['v19'],
	v42: productionCalls.initializePool['v42'],
	v33Stage: stageCalls.initializePool['v33'],
	v42Stage: stageCalls.initializePool['v42'],
	v33Test: testCalls.initializePool['v33'],
	v42Test: testCalls.initializePool['v42'],
}

export const setReferenceAsset = {
	name: 'XSTPool.set_reference_asset',
	v19: productionCalls.setReferenceAsset['v19'],
	v42: productionCalls.setReferenceAsset['v42'],
	v33Stage: stageCalls.setReferenceAsset['v33'],
	v42Stage: stageCalls.setReferenceAsset['v42'],
	v33Test: testCalls.setReferenceAsset['v33'],
	v42Test: testCalls.setReferenceAsset['v42'],
	v70Dev: devCalls.setReferenceAsset['v70'],
}

export const enableSyntheticAsset = {
	name: 'XSTPool.enable_synthetic_asset',
	v19: productionCalls.enableSyntheticAsset['v19'],
	v42: productionCalls.enableSyntheticAsset['v42'],
	v57: productionCalls.enableSyntheticAsset['v57'],
	v33Stage: stageCalls.enableSyntheticAsset['v33'],
	v42Stage: stageCalls.enableSyntheticAsset['v42'],
	v54Stage: stageCalls.enableSyntheticAsset['v54'],
	v33Test: testCalls.enableSyntheticAsset['v33'],
	v42Test: testCalls.enableSyntheticAsset['v42'],
	v54Test: testCalls.enableSyntheticAsset['v54'],
	v70Dev: devCalls.enableSyntheticAsset['v70'],
}

export const setSyntheticBaseAssetFloorPrice = {
	name: 'XSTPool.set_synthetic_base_asset_floor_price',
	v45: productionCalls.setSyntheticBaseAssetFloorPrice['v45'],
	v44Stage: stageCalls.setSyntheticBaseAssetFloorPrice['v44'],
	v44Test: testCalls.setSyntheticBaseAssetFloorPrice['v44'],
	v70Dev: devCalls.setSyntheticBaseAssetFloorPrice['v70'],
}

export const registerSyntheticAsset = {
	name: 'XSTPool.register_synthetic_asset',
	v57: productionCalls.registerSyntheticAsset['v57'],
	v54Stage: stageCalls.registerSyntheticAsset['v54'],
	v54Test: testCalls.registerSyntheticAsset['v54'],
	v70Dev: devCalls.registerSyntheticAsset['v70'],
}

export const disableSyntheticAsset = {
	name: 'XSTPool.disable_synthetic_asset',
	v57: productionCalls.disableSyntheticAsset['v57'],
	v54Stage: stageCalls.disableSyntheticAsset['v54'],
	v54Test: testCalls.disableSyntheticAsset['v54'],
	v70Dev: devCalls.disableSyntheticAsset['v70'],
}

export const setSyntheticAssetFee = {
	name: 'XSTPool.set_synthetic_asset_fee',
	v57: productionCalls.setSyntheticAssetFee['v57'],
	v54Stage: stageCalls.setSyntheticAssetFee['v54'],
	v54Test: testCalls.setSyntheticAssetFee['v54'],
	v70Dev: devCalls.setSyntheticAssetFee['v70'],
}

export const removeSyntheticAsset = {
	name: 'XSTPool.remove_synthetic_asset',
	v60: productionCalls.removeSyntheticAsset['v60'],
	v60Stage: stageCalls.removeSyntheticAsset['v60'],
	v60Test: testCalls.removeSyntheticAsset['v60'],
	v70Dev: devCalls.removeSyntheticAsset['v70'],
}
