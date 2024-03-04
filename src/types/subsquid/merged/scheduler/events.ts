import * as productionEvents from '../../production/scheduler/events'
import * as stageEvents from '../../stage/scheduler/events'
import * as testEvents from '../../test/scheduler/events'
import * as devEvents from '../../dev/scheduler/events'


export const scheduled = {
	name: 'Scheduler.Scheduled',
	v1: productionEvents.scheduled['v1'],
	v42: productionEvents.scheduled['v42'],
	v33Stage: stageEvents.scheduled['v33'],
	v42Stage: stageEvents.scheduled['v42'],
	v33Test: testEvents.scheduled['v33'],
	v42Test: testEvents.scheduled['v42'],
	v70Dev: devEvents.scheduled['v70'],
}

export const canceled = {
	name: 'Scheduler.Canceled',
	v1: productionEvents.canceled['v1'],
	v42: productionEvents.canceled['v42'],
	v33Stage: stageEvents.canceled['v33'],
	v42Stage: stageEvents.canceled['v42'],
	v33Test: testEvents.canceled['v33'],
	v42Test: testEvents.canceled['v42'],
	v70Dev: devEvents.canceled['v70'],
}

export const dispatched = {
	name: 'Scheduler.Dispatched',
	v1: productionEvents.dispatched['v1'],
	v42: productionEvents.dispatched['v42'],
	v53: productionEvents.dispatched['v53'],
	v33Stage: stageEvents.dispatched['v33'],
	v42Stage: stageEvents.dispatched['v42'],
	v52Stage: stageEvents.dispatched['v52'],
	v33Test: testEvents.dispatched['v33'],
	v42Test: testEvents.dispatched['v42'],
	v52Test: testEvents.dispatched['v52'],
	v70Dev: devEvents.dispatched['v70'],
}

export const callLookupFailed = {
	name: 'Scheduler.CallLookupFailed',
	v42: productionEvents.callLookupFailed['v42'],
	v42Stage: stageEvents.callLookupFailed['v42'],
	v42Test: testEvents.callLookupFailed['v42'],
}

export const callUnavailable = {
	name: 'Scheduler.CallUnavailable',
	v53: productionEvents.callUnavailable['v53'],
	v52Stage: stageEvents.callUnavailable['v52'],
	v52Test: testEvents.callUnavailable['v52'],
	v70Dev: devEvents.callUnavailable['v70'],
}

export const periodicFailed = {
	name: 'Scheduler.PeriodicFailed',
	v53: productionEvents.periodicFailed['v53'],
	v52Stage: stageEvents.periodicFailed['v52'],
	v52Test: testEvents.periodicFailed['v52'],
	v70Dev: devEvents.periodicFailed['v70'],
}

export const permanentlyOverweight = {
	name: 'Scheduler.PermanentlyOverweight',
	v53: productionEvents.permanentlyOverweight['v53'],
	v52Stage: stageEvents.permanentlyOverweight['v52'],
	v52Test: testEvents.permanentlyOverweight['v52'],
	v70Dev: devEvents.permanentlyOverweight['v70'],
}
