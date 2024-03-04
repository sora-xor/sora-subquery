import * as productionStorage from '../../production/substrate-bridge-inbound-channel/storage'
import * as stageStorage from '../../stage/substrate-bridge-inbound-channel/storage'
import * as testStorage from '../../test/substrate-bridge-inbound-channel/storage'
import * as devStorage from '../../dev/substrate-bridge-inbound-channel/storage'


export const channelNonces = {
	name: 'SubstrateBridgeInboundChannel.ChannelNonces',
	v64: productionStorage.channelNonces['v64'],
	v70: productionStorage.channelNonces['v70'],
	v52Stage: stageStorage.channelNonces['v52'],
	v70Stage: stageStorage.channelNonces['v70'],
	v52Test: testStorage.channelNonces['v52'],
	v70Test: testStorage.channelNonces['v70'],
	v70Dev: devStorage.channelNonces['v70'],
}

export const rewardFraction = {
	name: 'SubstrateBridgeInboundChannel.RewardFraction',
	v52Stage: stageStorage.rewardFraction['v52'],
	v52Test: testStorage.rewardFraction['v52'],
}
