import * as productionCalls from '../../production/substrate-bridge-inbound-channel/calls'
import * as stageCalls from '../../stage/substrate-bridge-inbound-channel/calls'
import * as testCalls from '../../test/substrate-bridge-inbound-channel/calls'
import * as devCalls from '../../dev/substrate-bridge-inbound-channel/calls'


export const submit = {
	name: 'SubstrateBridgeInboundChannel.submit',
	v64: productionCalls.submit['v64'],
	v70: productionCalls.submit['v70'],
	v52Stage: stageCalls.submit['v52'],
	v54Stage: stageCalls.submit['v54'],
	v57Stage: stageCalls.submit['v57'],
	v64Stage: stageCalls.submit['v64'],
	v70Stage: stageCalls.submit['v70'],
	v52Test: testCalls.submit['v52'],
	v54Test: testCalls.submit['v54'],
	v57Test: testCalls.submit['v57'],
	v64Test: testCalls.submit['v64'],
	v70Test: testCalls.submit['v70'],
	v70Dev: devCalls.submit['v70'],
}

export const setRewardFraction = {
	name: 'SubstrateBridgeInboundChannel.set_reward_fraction',
	v52Stage: stageCalls.setRewardFraction['v52'],
	v52Test: testCalls.setRewardFraction['v52'],
}
