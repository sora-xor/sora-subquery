import * as productionEvents from '../../production/eth-bridge/events'
import * as stageEvents from '../../stage/eth-bridge/events'
import * as testEvents from '../../test/eth-bridge/events'
import * as devEvents from '../../dev/eth-bridge/events'


export const requestRegistered = {
	name: 'EthBridge.RequestRegistered',
	v1: productionEvents.requestRegistered['v1'],
	v33Stage: stageEvents.requestRegistered['v33'],
	v33Test: testEvents.requestRegistered['v33'],
	v70Dev: devEvents.requestRegistered['v70'],
}

export const approvalsCollected = {
	name: 'EthBridge.ApprovalsCollected',
	v1: productionEvents.approvalsCollected['v1'],
	v33Stage: stageEvents.approvalsCollected['v33'],
	v33Test: testEvents.approvalsCollected['v33'],
	v70Dev: devEvents.approvalsCollected['v70'],
}

export const requestFinalizationFailed = {
	name: 'EthBridge.RequestFinalizationFailed',
	v1: productionEvents.requestFinalizationFailed['v1'],
	v33Stage: stageEvents.requestFinalizationFailed['v33'],
	v33Test: testEvents.requestFinalizationFailed['v33'],
	v70Dev: devEvents.requestFinalizationFailed['v70'],
}

export const incomingRequestFinalizationFailed = {
	name: 'EthBridge.IncomingRequestFinalizationFailed',
	v1: productionEvents.incomingRequestFinalizationFailed['v1'],
	v33Stage: stageEvents.incomingRequestFinalizationFailed['v33'],
	v33Test: testEvents.incomingRequestFinalizationFailed['v33'],
	v70Dev: devEvents.incomingRequestFinalizationFailed['v70'],
}

export const incomingRequestFinalized = {
	name: 'EthBridge.IncomingRequestFinalized',
	v1: productionEvents.incomingRequestFinalized['v1'],
	v33Stage: stageEvents.incomingRequestFinalized['v33'],
	v33Test: testEvents.incomingRequestFinalized['v33'],
	v70Dev: devEvents.incomingRequestFinalized['v70'],
}

export const requestAborted = {
	name: 'EthBridge.RequestAborted',
	v1: productionEvents.requestAborted['v1'],
	v33Stage: stageEvents.requestAborted['v33'],
	v33Test: testEvents.requestAborted['v33'],
	v70Dev: devEvents.requestAborted['v70'],
}

export const cancellationFailed = {
	name: 'EthBridge.CancellationFailed',
	v3: productionEvents.cancellationFailed['v3'],
	v33Stage: stageEvents.cancellationFailed['v33'],
	v33Test: testEvents.cancellationFailed['v33'],
	v70Dev: devEvents.cancellationFailed['v70'],
}

export const registerRequestFailed = {
	name: 'EthBridge.RegisterRequestFailed',
	v53: productionEvents.registerRequestFailed['v53'],
	v52Stage: stageEvents.registerRequestFailed['v52'],
	v52Test: testEvents.registerRequestFailed['v52'],
	v70Dev: devEvents.registerRequestFailed['v70'],
}
