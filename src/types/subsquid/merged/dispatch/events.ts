import * as stageEvents from '../../stage/dispatch/events'
import * as testEvents from '../../test/dispatch/events'
import * as devEvents from '../../dev/dispatch/events'


export const messageDispatched = {
	name: 'Dispatch.MessageDispatched',
	v52Stage: stageEvents.messageDispatched['v52'],
	v54Stage: stageEvents.messageDispatched['v54'],
	v59Stage: stageEvents.messageDispatched['v59'],
	v52Test: testEvents.messageDispatched['v52'],
	v54Test: testEvents.messageDispatched['v54'],
	v59Test: testEvents.messageDispatched['v59'],
	v70Dev: devEvents.messageDispatched['v70'],
}

export const messageRejected = {
	name: 'Dispatch.MessageRejected',
	v52Stage: stageEvents.messageRejected['v52'],
	v54Stage: stageEvents.messageRejected['v54'],
	v59Stage: stageEvents.messageRejected['v59'],
	v52Test: testEvents.messageRejected['v52'],
	v54Test: testEvents.messageRejected['v54'],
	v59Test: testEvents.messageRejected['v59'],
	v70Dev: devEvents.messageRejected['v70'],
}

export const messageDecodeFailed = {
	name: 'Dispatch.MessageDecodeFailed',
	v52Stage: stageEvents.messageDecodeFailed['v52'],
	v54Stage: stageEvents.messageDecodeFailed['v54'],
	v59Stage: stageEvents.messageDecodeFailed['v59'],
	v52Test: testEvents.messageDecodeFailed['v52'],
	v54Test: testEvents.messageDecodeFailed['v54'],
	v59Test: testEvents.messageDecodeFailed['v59'],
	v70Dev: devEvents.messageDecodeFailed['v70'],
}
