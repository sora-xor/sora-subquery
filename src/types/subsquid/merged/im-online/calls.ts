import * as productionCalls from '../../production/im-online/calls'
import * as stageCalls from '../../stage/im-online/calls'
import * as testCalls from '../../test/im-online/calls'
import * as devCalls from '../../dev/im-online/calls'


export const heartbeat = {
	name: 'ImOnline.heartbeat',
	v1: productionCalls.heartbeat['v1'],
	v33Stage: stageCalls.heartbeat['v33'],
	v33Test: testCalls.heartbeat['v33'],
	v70Dev: devCalls.heartbeat['v70'],
}
