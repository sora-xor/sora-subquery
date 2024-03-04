import * as productionCalls from '../../production/eth-bridge/calls'
import * as stageCalls from '../../stage/eth-bridge/calls'
import * as testCalls from '../../test/eth-bridge/calls'
import * as devCalls from '../../dev/eth-bridge/calls'


export const registerBridge = {
	name: 'EthBridge.register_bridge',
	v1: productionCalls.registerBridge['v1'],
	v38: productionCalls.registerBridge['v38'],
	v33Stage: stageCalls.registerBridge['v33'],
	v38Stage: stageCalls.registerBridge['v38'],
	v33Test: testCalls.registerBridge['v33'],
	v38Test: testCalls.registerBridge['v38'],
	v70Dev: devCalls.registerBridge['v70'],
}

export const addAsset = {
	name: 'EthBridge.add_asset',
	v1: productionCalls.addAsset['v1'],
	v42: productionCalls.addAsset['v42'],
	v33Stage: stageCalls.addAsset['v33'],
	v42Stage: stageCalls.addAsset['v42'],
	v33Test: testCalls.addAsset['v33'],
	v42Test: testCalls.addAsset['v42'],
	v70Dev: devCalls.addAsset['v70'],
}

export const addSidechainToken = {
	name: 'EthBridge.add_sidechain_token',
	v1: productionCalls.addSidechainToken['v1'],
	v42: productionCalls.addSidechainToken['v42'],
	v33Stage: stageCalls.addSidechainToken['v33'],
	v42Stage: stageCalls.addSidechainToken['v42'],
	v33Test: testCalls.addSidechainToken['v33'],
	v42Test: testCalls.addSidechainToken['v42'],
	v70Dev: devCalls.addSidechainToken['v70'],
}

export const transferToSidechain = {
	name: 'EthBridge.transfer_to_sidechain',
	v1: productionCalls.transferToSidechain['v1'],
	v42: productionCalls.transferToSidechain['v42'],
	v33Stage: stageCalls.transferToSidechain['v33'],
	v42Stage: stageCalls.transferToSidechain['v42'],
	v33Test: testCalls.transferToSidechain['v33'],
	v42Test: testCalls.transferToSidechain['v42'],
	v70Dev: devCalls.transferToSidechain['v70'],
}

export const requestFromSidechain = {
	name: 'EthBridge.request_from_sidechain',
	v1: productionCalls.requestFromSidechain['v1'],
	v33Stage: stageCalls.requestFromSidechain['v33'],
	v33Test: testCalls.requestFromSidechain['v33'],
	v70Dev: devCalls.requestFromSidechain['v70'],
}

export const finalizeIncomingRequest = {
	name: 'EthBridge.finalize_incoming_request',
	v1: productionCalls.finalizeIncomingRequest['v1'],
	v33Stage: stageCalls.finalizeIncomingRequest['v33'],
	v33Test: testCalls.finalizeIncomingRequest['v33'],
	v70Dev: devCalls.finalizeIncomingRequest['v70'],
}

export const addPeer = {
	name: 'EthBridge.add_peer',
	v1: productionCalls.addPeer['v1'],
	v33Stage: stageCalls.addPeer['v33'],
	v33Test: testCalls.addPeer['v33'],
	v70Dev: devCalls.addPeer['v70'],
}

export const removePeer = {
	name: 'EthBridge.remove_peer',
	v1: productionCalls.removePeer['v1'],
	v33: productionCalls.removePeer['v33'],
	v33Stage: stageCalls.removePeer['v33'],
	v33Test: testCalls.removePeer['v33'],
	v70Dev: devCalls.removePeer['v70'],
}

export const prepareForMigration = {
	name: 'EthBridge.prepare_for_migration',
	v1: productionCalls.prepareForMigration['v1'],
	v33Stage: stageCalls.prepareForMigration['v33'],
	v33Test: testCalls.prepareForMigration['v33'],
	v70Dev: devCalls.prepareForMigration['v70'],
}

export const migrate = {
	name: 'EthBridge.migrate',
	v1: productionCalls.migrate['v1'],
	v38: productionCalls.migrate['v38'],
	v33Stage: stageCalls.migrate['v33'],
	v38Stage: stageCalls.migrate['v38'],
	v33Test: testCalls.migrate['v33'],
	v38Test: testCalls.migrate['v38'],
	v70Dev: devCalls.migrate['v70'],
}

export const registerIncomingRequest = {
	name: 'EthBridge.register_incoming_request',
	v1: productionCalls.registerIncomingRequest['v1'],
	v42: productionCalls.registerIncomingRequest['v42'],
	v33Stage: stageCalls.registerIncomingRequest['v33'],
	v42Stage: stageCalls.registerIncomingRequest['v42'],
	v33Test: testCalls.registerIncomingRequest['v33'],
	v42Test: testCalls.registerIncomingRequest['v42'],
	v70Dev: devCalls.registerIncomingRequest['v70'],
}

export const importIncomingRequest = {
	name: 'EthBridge.import_incoming_request',
	v1: productionCalls.importIncomingRequest['v1'],
	v42: productionCalls.importIncomingRequest['v42'],
	v53: productionCalls.importIncomingRequest['v53'],
	v33Stage: stageCalls.importIncomingRequest['v33'],
	v42Stage: stageCalls.importIncomingRequest['v42'],
	v52Stage: stageCalls.importIncomingRequest['v52'],
	v33Test: testCalls.importIncomingRequest['v33'],
	v42Test: testCalls.importIncomingRequest['v42'],
	v52Test: testCalls.importIncomingRequest['v52'],
	v70Dev: devCalls.importIncomingRequest['v70'],
}

export const approveRequest = {
	name: 'EthBridge.approve_request',
	v1: productionCalls.approveRequest['v1'],
	v33Stage: stageCalls.approveRequest['v33'],
	v33Test: testCalls.approveRequest['v33'],
	v70Dev: devCalls.approveRequest['v70'],
}

export const abortRequest = {
	name: 'EthBridge.abort_request',
	v1: productionCalls.abortRequest['v1'],
	v42: productionCalls.abortRequest['v42'],
	v53: productionCalls.abortRequest['v53'],
	v33Stage: stageCalls.abortRequest['v33'],
	v42Stage: stageCalls.abortRequest['v42'],
	v52Stage: stageCalls.abortRequest['v52'],
	v33Test: testCalls.abortRequest['v33'],
	v42Test: testCalls.abortRequest['v42'],
	v52Test: testCalls.abortRequest['v52'],
	v70Dev: devCalls.abortRequest['v70'],
}

export const forceAddPeer = {
	name: 'EthBridge.force_add_peer',
	v1: productionCalls.forceAddPeer['v1'],
	v33Stage: stageCalls.forceAddPeer['v33'],
	v33Test: testCalls.forceAddPeer['v33'],
	v70Dev: devCalls.forceAddPeer['v70'],
}

export const migrateTo020 = {
	name: 'EthBridge.migrate_to_0_2_0',
	v19: productionCalls.migrateTo020['v19'],
	v33Stage: stageCalls.migrateTo020['v33'],
	v33Test: testCalls.migrateTo020['v33'],
}

export const removeSidechainAsset = {
	name: 'EthBridge.remove_sidechain_asset',
	v32: productionCalls.removeSidechainAsset['v32'],
	v42: productionCalls.removeSidechainAsset['v42'],
	v33Stage: stageCalls.removeSidechainAsset['v33'],
	v42Stage: stageCalls.removeSidechainAsset['v42'],
	v33Test: testCalls.removeSidechainAsset['v33'],
	v42Test: testCalls.removeSidechainAsset['v42'],
	v70Dev: devCalls.removeSidechainAsset['v70'],
}

export const registerExistingSidechainAsset = {
	name: 'EthBridge.register_existing_sidechain_asset',
	v32: productionCalls.registerExistingSidechainAsset['v32'],
	v42: productionCalls.registerExistingSidechainAsset['v42'],
	v33Stage: stageCalls.registerExistingSidechainAsset['v33'],
	v42Stage: stageCalls.registerExistingSidechainAsset['v42'],
	v33Test: testCalls.registerExistingSidechainAsset['v33'],
	v42Test: testCalls.registerExistingSidechainAsset['v42'],
	v70Dev: devCalls.registerExistingSidechainAsset['v70'],
}
