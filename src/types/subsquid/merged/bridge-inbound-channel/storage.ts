import * as stageStorage from '../../stage/bridge-inbound-channel/storage'
import * as testStorage from '../../test/bridge-inbound-channel/storage'
import * as devStorage from '../../dev/bridge-inbound-channel/storage'


export const inboundChannelAddresses = {
	name: 'BridgeInboundChannel.InboundChannelAddresses',
	v52Stage: stageStorage.inboundChannelAddresses['v52'],
	v52Test: testStorage.inboundChannelAddresses['v52'],
	v70Dev: devStorage.inboundChannelAddresses['v70'],
}

export const inboundChannelNonces = {
	name: 'BridgeInboundChannel.InboundChannelNonces',
	v52Stage: stageStorage.inboundChannelNonces['v52'],
	v52Test: testStorage.inboundChannelNonces['v52'],
	v70Dev: devStorage.inboundChannelNonces['v70'],
}

export const channelAddresses = {
	name: 'BridgeInboundChannel.ChannelAddresses',
	v52Stage: stageStorage.channelAddresses['v52'],
	v52Test: testStorage.channelAddresses['v52'],
	v70Dev: devStorage.channelAddresses['v70'],
}

export const channelNonces = {
	name: 'BridgeInboundChannel.ChannelNonces',
	v52Stage: stageStorage.channelNonces['v52'],
	v52Test: testStorage.channelNonces['v52'],
	v70Dev: devStorage.channelNonces['v70'],
}

export const rewardFraction = {
	name: 'BridgeInboundChannel.RewardFraction',
	v52Stage: stageStorage.rewardFraction['v52'],
	v52Test: testStorage.rewardFraction['v52'],
	v70Dev: devStorage.rewardFraction['v70'],
}
