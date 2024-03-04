import * as productionEvents from '../../production/im-online/events'
import * as stageEvents from '../../stage/im-online/events'
import * as testEvents from '../../test/im-online/events'
import * as devEvents from '../../dev/im-online/events'


export const heartbeatReceived = {
	name: 'ImOnline.HeartbeatReceived',
	v1: productionEvents.heartbeatReceived['v1'],
	v42: productionEvents.heartbeatReceived['v42'],
	v33Stage: stageEvents.heartbeatReceived['v33'],
	v42Stage: stageEvents.heartbeatReceived['v42'],
	v33Test: testEvents.heartbeatReceived['v33'],
	v42Test: testEvents.heartbeatReceived['v42'],
	v70Dev: devEvents.heartbeatReceived['v70'],
}

export const allGood = {
	name: 'ImOnline.AllGood',
	v1: productionEvents.allGood['v1'],
	v33Stage: stageEvents.allGood['v33'],
	v33Test: testEvents.allGood['v33'],
	v70Dev: devEvents.allGood['v70'],
}

export const someOffline = {
	name: 'ImOnline.SomeOffline',
	v1: productionEvents.someOffline['v1'],
	v42: productionEvents.someOffline['v42'],
	v33Stage: stageEvents.someOffline['v33'],
	v42Stage: stageEvents.someOffline['v42'],
	v33Test: testEvents.someOffline['v33'],
	v42Test: testEvents.someOffline['v42'],
	v70Dev: devEvents.someOffline['v70'],
}
