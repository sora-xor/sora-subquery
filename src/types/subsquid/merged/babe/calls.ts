import * as productionCalls from '../../production/babe/calls'
import * as stageCalls from '../../stage/babe/calls'
import * as testCalls from '../../test/babe/calls'
import * as devCalls from '../../dev/babe/calls'


export const reportEquivocation = {
	name: 'Babe.report_equivocation',
	v1: productionCalls.reportEquivocation['v1'],
	v42: productionCalls.reportEquivocation['v42'],
	v33Stage: stageCalls.reportEquivocation['v33'],
	v42Stage: stageCalls.reportEquivocation['v42'],
	v33Test: testCalls.reportEquivocation['v33'],
	v42Test: testCalls.reportEquivocation['v42'],
	v70Dev: devCalls.reportEquivocation['v70'],
}

export const reportEquivocationUnsigned = {
	name: 'Babe.report_equivocation_unsigned',
	v1: productionCalls.reportEquivocationUnsigned['v1'],
	v42: productionCalls.reportEquivocationUnsigned['v42'],
	v33Stage: stageCalls.reportEquivocationUnsigned['v33'],
	v42Stage: stageCalls.reportEquivocationUnsigned['v42'],
	v33Test: testCalls.reportEquivocationUnsigned['v33'],
	v42Test: testCalls.reportEquivocationUnsigned['v42'],
	v70Dev: devCalls.reportEquivocationUnsigned['v70'],
}

export const planConfigChange = {
	name: 'Babe.plan_config_change',
	v42: productionCalls.planConfigChange['v42'],
	v42Stage: stageCalls.planConfigChange['v42'],
	v42Test: testCalls.planConfigChange['v42'],
	v70Dev: devCalls.planConfigChange['v70'],
}
