import * as productionEvents from '../../production/utility/events'
import * as stageEvents from '../../stage/utility/events'
import * as testEvents from '../../test/utility/events'
import * as devEvents from '../../dev/utility/events'


export const batchInterrupted = {
	name: 'Utility.BatchInterrupted',
	v1: productionEvents.batchInterrupted['v1'],
	v42: productionEvents.batchInterrupted['v42'],
	v53: productionEvents.batchInterrupted['v53'],
	v33Stage: stageEvents.batchInterrupted['v33'],
	v42Stage: stageEvents.batchInterrupted['v42'],
	v52Stage: stageEvents.batchInterrupted['v52'],
	v33Test: testEvents.batchInterrupted['v33'],
	v42Test: testEvents.batchInterrupted['v42'],
	v52Test: testEvents.batchInterrupted['v52'],
	v70Dev: devEvents.batchInterrupted['v70'],
}

export const batchCompleted = {
	name: 'Utility.BatchCompleted',
	v1: productionEvents.batchCompleted['v1'],
	v33Stage: stageEvents.batchCompleted['v33'],
	v33Test: testEvents.batchCompleted['v33'],
	v70Dev: devEvents.batchCompleted['v70'],
}

export const batchCompletedWithErrors = {
	name: 'Utility.BatchCompletedWithErrors',
	v42: productionEvents.batchCompletedWithErrors['v42'],
	v42Stage: stageEvents.batchCompletedWithErrors['v42'],
	v42Test: testEvents.batchCompletedWithErrors['v42'],
	v70Dev: devEvents.batchCompletedWithErrors['v70'],
}

export const itemCompleted = {
	name: 'Utility.ItemCompleted',
	v42: productionEvents.itemCompleted['v42'],
	v42Stage: stageEvents.itemCompleted['v42'],
	v42Test: testEvents.itemCompleted['v42'],
	v70Dev: devEvents.itemCompleted['v70'],
}

export const itemFailed = {
	name: 'Utility.ItemFailed',
	v42: productionEvents.itemFailed['v42'],
	v53: productionEvents.itemFailed['v53'],
	v42Stage: stageEvents.itemFailed['v42'],
	v52Stage: stageEvents.itemFailed['v52'],
	v42Test: testEvents.itemFailed['v42'],
	v52Test: testEvents.itemFailed['v52'],
	v70Dev: devEvents.itemFailed['v70'],
}

export const dispatchedAs = {
	name: 'Utility.DispatchedAs',
	v42: productionEvents.dispatchedAs['v42'],
	v53: productionEvents.dispatchedAs['v53'],
	v42Stage: stageEvents.dispatchedAs['v42'],
	v52Stage: stageEvents.dispatchedAs['v52'],
	v42Test: testEvents.dispatchedAs['v42'],
	v52Test: testEvents.dispatchedAs['v52'],
	v70Dev: devEvents.dispatchedAs['v70'],
}
