import * as productionStorage from '../../production/eth-bridge/storage'
import * as stageStorage from '../../stage/eth-bridge/storage'
import * as testStorage from '../../test/eth-bridge/storage'
import * as devStorage from '../../dev/eth-bridge/storage'


export const requestsQueue = {
	name: 'EthBridge.RequestsQueue',
	v1: productionStorage.requestsQueue['v1'],
	v33Stage: stageStorage.requestsQueue['v33'],
	v33Test: testStorage.requestsQueue['v33'],
	v70Dev: devStorage.requestsQueue['v70'],
}

export const requests = {
	name: 'EthBridge.Requests',
	v1: productionStorage.requests['v1'],
	v42: productionStorage.requests['v42'],
	v33Stage: stageStorage.requests['v33'],
	v42Stage: stageStorage.requests['v42'],
	v33Test: testStorage.requests['v33'],
	v42Test: testStorage.requests['v42'],
	v70Dev: devStorage.requests['v70'],
}

export const loadToIncomingRequestHash = {
	name: 'EthBridge.LoadToIncomingRequestHash',
	v1: productionStorage.loadToIncomingRequestHash['v1'],
	v33Stage: stageStorage.loadToIncomingRequestHash['v33'],
	v33Test: testStorage.loadToIncomingRequestHash['v33'],
	v70Dev: devStorage.loadToIncomingRequestHash['v70'],
}

export const requestStatuses = {
	name: 'EthBridge.RequestStatuses',
	v1: productionStorage.requestStatuses['v1'],
	v42: productionStorage.requestStatuses['v42'],
	v53: productionStorage.requestStatuses['v53'],
	v33Stage: stageStorage.requestStatuses['v33'],
	v42Stage: stageStorage.requestStatuses['v42'],
	v52Stage: stageStorage.requestStatuses['v52'],
	v33Test: testStorage.requestStatuses['v33'],
	v42Test: testStorage.requestStatuses['v42'],
	v52Test: testStorage.requestStatuses['v52'],
	v70Dev: devStorage.requestStatuses['v70'],
}

export const requestSubmissionHeight = {
	name: 'EthBridge.RequestSubmissionHeight',
	v1: productionStorage.requestSubmissionHeight['v1'],
	v33Stage: stageStorage.requestSubmissionHeight['v33'],
	v33Test: testStorage.requestSubmissionHeight['v33'],
	v70Dev: devStorage.requestSubmissionHeight['v70'],
}

export const requestApprovals = {
	name: 'EthBridge.RequestApprovals',
	v1: productionStorage.requestApprovals['v1'],
	v33Stage: stageStorage.requestApprovals['v33'],
	v33Test: testStorage.requestApprovals['v33'],
	v70Dev: devStorage.requestApprovals['v70'],
}

export const accountRequests = {
	name: 'EthBridge.AccountRequests',
	v1: productionStorage.accountRequests['v1'],
	v33Stage: stageStorage.accountRequests['v33'],
	v33Test: testStorage.accountRequests['v33'],
	v70Dev: devStorage.accountRequests['v70'],
}

export const registeredAsset = {
	name: 'EthBridge.RegisteredAsset',
	v1: productionStorage.registeredAsset['v1'],
	v42: productionStorage.registeredAsset['v42'],
	v33Stage: stageStorage.registeredAsset['v33'],
	v42Stage: stageStorage.registeredAsset['v42'],
	v33Test: testStorage.registeredAsset['v33'],
	v42Test: testStorage.registeredAsset['v42'],
	v70Dev: devStorage.registeredAsset['v70'],
}

export const sidechainAssetPrecision = {
	name: 'EthBridge.SidechainAssetPrecision',
	v1: productionStorage.sidechainAssetPrecision['v1'],
	v42: productionStorage.sidechainAssetPrecision['v42'],
	v33Stage: stageStorage.sidechainAssetPrecision['v33'],
	v42Stage: stageStorage.sidechainAssetPrecision['v42'],
	v33Test: testStorage.sidechainAssetPrecision['v33'],
	v42Test: testStorage.sidechainAssetPrecision['v42'],
	v70Dev: devStorage.sidechainAssetPrecision['v70'],
}

export const registeredSidechainAsset = {
	name: 'EthBridge.RegisteredSidechainAsset',
	v1: productionStorage.registeredSidechainAsset['v1'],
	v42: productionStorage.registeredSidechainAsset['v42'],
	v33Stage: stageStorage.registeredSidechainAsset['v33'],
	v42Stage: stageStorage.registeredSidechainAsset['v42'],
	v33Test: testStorage.registeredSidechainAsset['v33'],
	v42Test: testStorage.registeredSidechainAsset['v42'],
	v70Dev: devStorage.registeredSidechainAsset['v70'],
}

export const registeredSidechainToken = {
	name: 'EthBridge.RegisteredSidechainToken',
	v1: productionStorage.registeredSidechainToken['v1'],
	v42: productionStorage.registeredSidechainToken['v42'],
	v33Stage: stageStorage.registeredSidechainToken['v33'],
	v42Stage: stageStorage.registeredSidechainToken['v42'],
	v33Test: testStorage.registeredSidechainToken['v33'],
	v42Test: testStorage.registeredSidechainToken['v42'],
	v70Dev: devStorage.registeredSidechainToken['v70'],
}

export const peers = {
	name: 'EthBridge.Peers',
	v1: productionStorage.peers['v1'],
	v33Stage: stageStorage.peers['v33'],
	v33Test: testStorage.peers['v33'],
	v70Dev: devStorage.peers['v70'],
}

export const pendingPeer = {
	name: 'EthBridge.PendingPeer',
	v1: productionStorage.pendingPeer['v1'],
	v33Stage: stageStorage.pendingPeer['v33'],
	v33Test: testStorage.pendingPeer['v33'],
	v70Dev: devStorage.pendingPeer['v70'],
}

export const pendingEthPeersSync = {
	name: 'EthBridge.PendingEthPeersSync',
	v1: productionStorage.pendingEthPeersSync['v1'],
	v33Stage: stageStorage.pendingEthPeersSync['v33'],
	v33Test: testStorage.pendingEthPeersSync['v33'],
	v70Dev: devStorage.pendingEthPeersSync['v70'],
}

export const peerAccountId = {
	name: 'EthBridge.PeerAccountId',
	v1: productionStorage.peerAccountId['v1'],
	v42: productionStorage.peerAccountId['v42'],
	v33Stage: stageStorage.peerAccountId['v33'],
	v42Stage: stageStorage.peerAccountId['v42'],
	v33Test: testStorage.peerAccountId['v33'],
	v42Test: testStorage.peerAccountId['v42'],
	v70Dev: devStorage.peerAccountId['v70'],
}

export const peerAddress = {
	name: 'EthBridge.PeerAddress',
	v1: productionStorage.peerAddress['v1'],
	v33Stage: stageStorage.peerAddress['v33'],
	v33Test: testStorage.peerAddress['v33'],
	v70Dev: devStorage.peerAddress['v70'],
}

export const bridgeAccount = {
	name: 'EthBridge.BridgeAccount',
	v1: productionStorage.bridgeAccount['v1'],
	v33Stage: stageStorage.bridgeAccount['v33'],
	v33Test: testStorage.bridgeAccount['v33'],
	v70Dev: devStorage.bridgeAccount['v70'],
}

export const authorityAccount = {
	name: 'EthBridge.AuthorityAccount',
	v1: productionStorage.authorityAccount['v1'],
	v42: productionStorage.authorityAccount['v42'],
	v33Stage: stageStorage.authorityAccount['v33'],
	v42Stage: stageStorage.authorityAccount['v42'],
	v33Test: testStorage.authorityAccount['v33'],
	v42Test: testStorage.authorityAccount['v42'],
	v70Dev: devStorage.authorityAccount['v70'],
}

export const bridgeStatuses = {
	name: 'EthBridge.BridgeStatuses',
	v1: productionStorage.bridgeStatuses['v1'],
	v33Stage: stageStorage.bridgeStatuses['v33'],
	v33Test: testStorage.bridgeStatuses['v33'],
	v70Dev: devStorage.bridgeStatuses['v70'],
}

export const bridgeContractAddress = {
	name: 'EthBridge.BridgeContractAddress',
	v1: productionStorage.bridgeContractAddress['v1'],
	v33Stage: stageStorage.bridgeContractAddress['v33'],
	v33Test: testStorage.bridgeContractAddress['v33'],
	v70Dev: devStorage.bridgeContractAddress['v70'],
}

export const xorMasterContractAddress = {
	name: 'EthBridge.XorMasterContractAddress',
	v1: productionStorage.xorMasterContractAddress['v1'],
	v33Stage: stageStorage.xorMasterContractAddress['v33'],
	v33Test: testStorage.xorMasterContractAddress['v33'],
	v70Dev: devStorage.xorMasterContractAddress['v70'],
}

export const valMasterContractAddress = {
	name: 'EthBridge.ValMasterContractAddress',
	v1: productionStorage.valMasterContractAddress['v1'],
	v33Stage: stageStorage.valMasterContractAddress['v33'],
	v33Test: testStorage.valMasterContractAddress['v33'],
	v70Dev: devStorage.valMasterContractAddress['v70'],
}

export const nextNetworkId = {
	name: 'EthBridge.NextNetworkId',
	v1: productionStorage.nextNetworkId['v1'],
	v33Stage: stageStorage.nextNetworkId['v33'],
	v33Test: testStorage.nextNetworkId['v33'],
	v70Dev: devStorage.nextNetworkId['v70'],
}

export const palletStorageVersion = {
	name: 'EthBridge.PalletStorageVersion',
	v3: productionStorage.palletStorageVersion['v3'],
}

export const migratingRequests = {
	name: 'EthBridge.MigratingRequests',
	v19: productionStorage.migratingRequests['v19'],
	v33Stage: stageStorage.migratingRequests['v33'],
	v33Test: testStorage.migratingRequests['v33'],
	v70Dev: devStorage.migratingRequests['v70'],
}

export const bridgeSignatureVersions = {
	name: 'EthBridge.BridgeSignatureVersions',
	v38: productionStorage.bridgeSignatureVersions['v38'],
	v38Stage: stageStorage.bridgeSignatureVersions['v38'],
	v38Test: testStorage.bridgeSignatureVersions['v38'],
	v70Dev: devStorage.bridgeSignatureVersions['v70'],
}

export const pendingBridgeSignatureVersions = {
	name: 'EthBridge.PendingBridgeSignatureVersions',
	v38: productionStorage.pendingBridgeSignatureVersions['v38'],
	v38Stage: stageStorage.pendingBridgeSignatureVersions['v38'],
	v38Test: testStorage.pendingBridgeSignatureVersions['v38'],
	v70Dev: devStorage.pendingBridgeSignatureVersions['v70'],
}
