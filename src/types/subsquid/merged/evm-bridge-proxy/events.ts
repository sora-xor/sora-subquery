import * as stageEvents from '../../stage/evm-bridge-proxy/events'
import * as testEvents from '../../test/evm-bridge-proxy/events'


export const requestStatusUpdate = {
	name: 'EvmBridgeProxy.RequestStatusUpdate',
	v52Stage: stageEvents.requestStatusUpdate['v52'],
	v52Test: testEvents.requestStatusUpdate['v52'],
}

export const refundFailed = {
	name: 'EvmBridgeProxy.RefundFailed',
	v52Stage: stageEvents.refundFailed['v52'],
	v52Test: testEvents.refundFailed['v52'],
}
