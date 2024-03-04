import * as stageCalls from '../../stage/bridge-inbound-channel/calls'
import * as testCalls from '../../test/bridge-inbound-channel/calls'
import * as devCalls from '../../dev/bridge-inbound-channel/calls'


export const submit = {
	name: 'BridgeInboundChannel.submit',
	v52Stage: stageCalls.submit['v52'],
	v54Stage: stageCalls.submit['v54'],
	v52Test: testCalls.submit['v52'],
	v54Test: testCalls.submit['v54'],
	v70Dev: devCalls.submit['v70'],
}

export const messageDispatched = {
	name: 'BridgeInboundChannel.message_dispatched',
	v52Stage: stageCalls.messageDispatched['v52'],
	v54Stage: stageCalls.messageDispatched['v54'],
	v52Test: testCalls.messageDispatched['v52'],
	v54Test: testCalls.messageDispatched['v54'],
}

export const registerChannel = {
	name: 'BridgeInboundChannel.register_channel',
	v52Stage: stageCalls.registerChannel['v52'],
	v52Test: testCalls.registerChannel['v52'],
	v70Dev: devCalls.registerChannel['v70'],
}

export const setRewardFraction = {
	name: 'BridgeInboundChannel.set_reward_fraction',
	v52Stage: stageCalls.setRewardFraction['v52'],
	v52Test: testCalls.setRewardFraction['v52'],
	v70Dev: devCalls.setRewardFraction['v70'],
}

export const batchDispatched = {
	name: 'BridgeInboundChannel.batch_dispatched',
	v55Stage: stageCalls.batchDispatched['v55'],
	v55Test: testCalls.batchDispatched['v55'],
	v70Dev: devCalls.batchDispatched['v70'],
}
