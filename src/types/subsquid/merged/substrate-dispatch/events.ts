import * as productionEvents from '../../production/substrate-dispatch/events'
import * as stageEvents from '../../stage/substrate-dispatch/events'
import * as testEvents from '../../test/substrate-dispatch/events'
import * as devEvents from '../../dev/substrate-dispatch/events'


export const messageDispatched = {
	name: 'SubstrateDispatch.MessageDispatched',
	v64: productionEvents.messageDispatched['v64'],
	v70: productionEvents.messageDispatched['v70'],
	v52Stage: stageEvents.messageDispatched['v52'],
	v54Stage: stageEvents.messageDispatched['v54'],
	v59Stage: stageEvents.messageDispatched['v59'],
	v70Stage: stageEvents.messageDispatched['v70'],
	v52Test: testEvents.messageDispatched['v52'],
	v54Test: testEvents.messageDispatched['v54'],
	v59Test: testEvents.messageDispatched['v59'],
	v70Test: testEvents.messageDispatched['v70'],
	v70Dev: devEvents.messageDispatched['v70'],
}

export const messageRejected = {
	name: 'SubstrateDispatch.MessageRejected',
	v64: productionEvents.messageRejected['v64'],
	v70: productionEvents.messageRejected['v70'],
	v52Stage: stageEvents.messageRejected['v52'],
	v54Stage: stageEvents.messageRejected['v54'],
	v59Stage: stageEvents.messageRejected['v59'],
	v70Stage: stageEvents.messageRejected['v70'],
	v52Test: testEvents.messageRejected['v52'],
	v54Test: testEvents.messageRejected['v54'],
	v59Test: testEvents.messageRejected['v59'],
	v70Test: testEvents.messageRejected['v70'],
	v70Dev: devEvents.messageRejected['v70'],
}

export const messageDecodeFailed = {
	name: 'SubstrateDispatch.MessageDecodeFailed',
	v64: productionEvents.messageDecodeFailed['v64'],
	v70: productionEvents.messageDecodeFailed['v70'],
	v52Stage: stageEvents.messageDecodeFailed['v52'],
	v54Stage: stageEvents.messageDecodeFailed['v54'],
	v59Stage: stageEvents.messageDecodeFailed['v59'],
	v70Stage: stageEvents.messageDecodeFailed['v70'],
	v52Test: testEvents.messageDecodeFailed['v52'],
	v54Test: testEvents.messageDecodeFailed['v54'],
	v59Test: testEvents.messageDecodeFailed['v59'],
	v70Test: testEvents.messageDecodeFailed['v70'],
	v70Dev: devEvents.messageDecodeFailed['v70'],
}
