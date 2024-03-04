import * as productionStorage from '../../production/substrate-bridge-outbound-channel/storage'
import * as stageStorage from '../../stage/substrate-bridge-outbound-channel/storage'
import * as testStorage from '../../test/substrate-bridge-outbound-channel/storage'
import * as devStorage from '../../dev/substrate-bridge-outbound-channel/storage'


export const interval = {
	name: 'SubstrateBridgeOutboundChannel.Interval',
	v64: productionStorage.interval['v64'],
	v52Stage: stageStorage.interval['v52'],
	v52Test: testStorage.interval['v52'],
	v70Dev: devStorage.interval['v70'],
}

export const messageQueues = {
	name: 'SubstrateBridgeOutboundChannel.MessageQueues',
	v64: productionStorage.messageQueues['v64'],
	v70: productionStorage.messageQueues['v70'],
	v52Stage: stageStorage.messageQueues['v52'],
	v54Stage: stageStorage.messageQueues['v54'],
	v57Stage: stageStorage.messageQueues['v57'],
	v70Stage: stageStorage.messageQueues['v70'],
	v52Test: testStorage.messageQueues['v52'],
	v54Test: testStorage.messageQueues['v54'],
	v57Test: testStorage.messageQueues['v57'],
	v70Test: testStorage.messageQueues['v70'],
	v70Dev: devStorage.messageQueues['v70'],
}

export const channelNonces = {
	name: 'SubstrateBridgeOutboundChannel.ChannelNonces',
	v64: productionStorage.channelNonces['v64'],
	v70: productionStorage.channelNonces['v70'],
	v52Stage: stageStorage.channelNonces['v52'],
	v70Stage: stageStorage.channelNonces['v70'],
	v52Test: testStorage.channelNonces['v52'],
	v70Test: testStorage.channelNonces['v70'],
	v70Dev: devStorage.channelNonces['v70'],
}

export const latestCommitment = {
	name: 'SubstrateBridgeOutboundChannel.LatestCommitment',
	v65: productionStorage.latestCommitment['v65'],
	v70: productionStorage.latestCommitment['v70'],
	v65Stage: stageStorage.latestCommitment['v65'],
	v70Stage: stageStorage.latestCommitment['v70'],
	v65Test: testStorage.latestCommitment['v65'],
	v70Test: testStorage.latestCommitment['v70'],
	v70Dev: devStorage.latestCommitment['v70'],
}

export const fee = {
	name: 'SubstrateBridgeOutboundChannel.Fee',
	v52Stage: stageStorage.fee['v52'],
	v52Test: testStorage.fee['v52'],
}
