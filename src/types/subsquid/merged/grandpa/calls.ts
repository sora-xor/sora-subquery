import * as productionCalls from '../../production/grandpa/calls'
import * as stageCalls from '../../stage/grandpa/calls'
import * as testCalls from '../../test/grandpa/calls'
import * as devCalls from '../../dev/grandpa/calls'


export const reportEquivocation = {
	name: 'Grandpa.report_equivocation',
	v1: productionCalls.reportEquivocation['v1'],
	v33Stage: stageCalls.reportEquivocation['v33'],
	v33Test: testCalls.reportEquivocation['v33'],
	v70Dev: devCalls.reportEquivocation['v70'],
}

export const reportEquivocationUnsigned = {
	name: 'Grandpa.report_equivocation_unsigned',
	v1: productionCalls.reportEquivocationUnsigned['v1'],
	v33Stage: stageCalls.reportEquivocationUnsigned['v33'],
	v33Test: testCalls.reportEquivocationUnsigned['v33'],
	v70Dev: devCalls.reportEquivocationUnsigned['v70'],
}

export const noteStalled = {
	name: 'Grandpa.note_stalled',
	v1: productionCalls.noteStalled['v1'],
	v33Stage: stageCalls.noteStalled['v33'],
	v33Test: testCalls.noteStalled['v33'],
	v70Dev: devCalls.noteStalled['v70'],
}
