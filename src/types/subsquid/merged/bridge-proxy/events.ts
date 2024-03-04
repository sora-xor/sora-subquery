import * as productionEvents from '../../production/bridge-proxy/events'
import * as stageEvents from '../../stage/bridge-proxy/events'
import * as testEvents from '../../test/bridge-proxy/events'
import * as devEvents from '../../dev/bridge-proxy/events'


export const requestStatusUpdate = {
	name: 'BridgeProxy.RequestStatusUpdate',
	v64: productionEvents.requestStatusUpdate['v64'],
	v54Stage: stageEvents.requestStatusUpdate['v54'],
	v54Test: testEvents.requestStatusUpdate['v54'],
	v70Dev: devEvents.requestStatusUpdate['v70'],
}

export const refundFailed = {
	name: 'BridgeProxy.RefundFailed',
	v64: productionEvents.refundFailed['v64'],
	v54Stage: stageEvents.refundFailed['v54'],
	v54Test: testEvents.refundFailed['v54'],
	v70Dev: devEvents.refundFailed['v70'],
}
