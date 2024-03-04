import * as productionCalls from '../../production/parachain-bridge-app/calls'
import * as stageCalls from '../../stage/parachain-bridge-app/calls'
import * as testCalls from '../../test/parachain-bridge-app/calls'
import * as devCalls from '../../dev/parachain-bridge-app/calls'


export const mint = {
	name: 'ParachainBridgeApp.mint',
	v64: productionCalls.mint['v64'],
	v64Stage: stageCalls.mint['v64'],
	v64Test: testCalls.mint['v64'],
	v70Dev: devCalls.mint['v70'],
}

export const finalizeAssetRegistration = {
	name: 'ParachainBridgeApp.finalize_asset_registration',
	v64: productionCalls.finalizeAssetRegistration['v64'],
	v64Stage: stageCalls.finalizeAssetRegistration['v64'],
	v64Test: testCalls.finalizeAssetRegistration['v64'],
	v70Dev: devCalls.finalizeAssetRegistration['v70'],
}

export const burn = {
	name: 'ParachainBridgeApp.burn',
	v64: productionCalls.burn['v64'],
	v70: productionCalls.burn['v70'],
	v64Stage: stageCalls.burn['v64'],
	v70Stage: stageCalls.burn['v70'],
	v64Test: testCalls.burn['v64'],
	v70Test: testCalls.burn['v70'],
	v70Dev: devCalls.burn['v70'],
}

export const registerThischainAsset = {
	name: 'ParachainBridgeApp.register_thischain_asset',
	v64: productionCalls.registerThischainAsset['v64'],
	v70: productionCalls.registerThischainAsset['v70'],
	v64Stage: stageCalls.registerThischainAsset['v64'],
	v70Stage: stageCalls.registerThischainAsset['v70'],
	v64Test: testCalls.registerThischainAsset['v64'],
	v70Test: testCalls.registerThischainAsset['v70'],
	v70Dev: devCalls.registerThischainAsset['v70'],
}

export const registerSidechainAsset = {
	name: 'ParachainBridgeApp.register_sidechain_asset',
	v64: productionCalls.registerSidechainAsset['v64'],
	v70: productionCalls.registerSidechainAsset['v70'],
	v64Stage: stageCalls.registerSidechainAsset['v64'],
	v70Stage: stageCalls.registerSidechainAsset['v70'],
	v64Test: testCalls.registerSidechainAsset['v64'],
	v70Test: testCalls.registerSidechainAsset['v70'],
	v70Dev: devCalls.registerSidechainAsset['v70'],
}

export const addAssetidParaid = {
	name: 'ParachainBridgeApp.add_assetid_paraid',
	v64: productionCalls.addAssetidParaid['v64'],
	v70: productionCalls.addAssetidParaid['v70'],
	v64Stage: stageCalls.addAssetidParaid['v64'],
	v70Stage: stageCalls.addAssetidParaid['v70'],
	v64Test: testCalls.addAssetidParaid['v64'],
	v70Test: testCalls.addAssetidParaid['v70'],
	v70Dev: devCalls.addAssetidParaid['v70'],
}

export const removeAssetidParaid = {
	name: 'ParachainBridgeApp.remove_assetid_paraid',
	v64: productionCalls.removeAssetidParaid['v64'],
	v70: productionCalls.removeAssetidParaid['v70'],
	v64Stage: stageCalls.removeAssetidParaid['v64'],
	v70Stage: stageCalls.removeAssetidParaid['v70'],
	v64Test: testCalls.removeAssetidParaid['v64'],
	v70Test: testCalls.removeAssetidParaid['v70'],
	v70Dev: devCalls.removeAssetidParaid['v70'],
}

export const updateTransactionStatus = {
	name: 'ParachainBridgeApp.update_transaction_status',
	v64: productionCalls.updateTransactionStatus['v64'],
	v64Stage: stageCalls.updateTransactionStatus['v64'],
	v64Test: testCalls.updateTransactionStatus['v64'],
	v70Dev: devCalls.updateTransactionStatus['v70'],
}

export const setMinimumXcmIncomingAssetCount = {
	name: 'ParachainBridgeApp.set_minimum_xcm_incoming_asset_count',
	v64: productionCalls.setMinimumXcmIncomingAssetCount['v64'],
	v70: productionCalls.setMinimumXcmIncomingAssetCount['v70'],
	v64Stage: stageCalls.setMinimumXcmIncomingAssetCount['v64'],
	v70Stage: stageCalls.setMinimumXcmIncomingAssetCount['v70'],
	v64Test: testCalls.setMinimumXcmIncomingAssetCount['v64'],
	v70Test: testCalls.setMinimumXcmIncomingAssetCount['v70'],
	v70Dev: devCalls.setMinimumXcmIncomingAssetCount['v70'],
}
