import * as productionCalls from '../../production/preimage/calls'
import * as stageCalls from '../../stage/preimage/calls'
import * as testCalls from '../../test/preimage/calls'
import * as devCalls from '../../dev/preimage/calls'


export const notePreimage = {
	name: 'Preimage.note_preimage',
	v53: productionCalls.notePreimage['v53'],
	v52Stage: stageCalls.notePreimage['v52'],
	v52Test: testCalls.notePreimage['v52'],
	v70Dev: devCalls.notePreimage['v70'],
}

export const unnotePreimage = {
	name: 'Preimage.unnote_preimage',
	v53: productionCalls.unnotePreimage['v53'],
	v52Stage: stageCalls.unnotePreimage['v52'],
	v52Test: testCalls.unnotePreimage['v52'],
	v70Dev: devCalls.unnotePreimage['v70'],
}

export const requestPreimage = {
	name: 'Preimage.request_preimage',
	v53: productionCalls.requestPreimage['v53'],
	v52Stage: stageCalls.requestPreimage['v52'],
	v52Test: testCalls.requestPreimage['v52'],
	v70Dev: devCalls.requestPreimage['v70'],
}

export const unrequestPreimage = {
	name: 'Preimage.unrequest_preimage',
	v53: productionCalls.unrequestPreimage['v53'],
	v52Stage: stageCalls.unrequestPreimage['v52'],
	v52Test: testCalls.unrequestPreimage['v52'],
	v70Dev: devCalls.unrequestPreimage['v70'],
}
