import * as productionEvents from '../../production/technical-committee/events'
import * as stageEvents from '../../stage/technical-committee/events'
import * as testEvents from '../../test/technical-committee/events'
import * as devEvents from '../../dev/technical-committee/events'


export const proposed = {
	name: 'TechnicalCommittee.Proposed',
	v1: productionEvents.proposed['v1'],
	v42: productionEvents.proposed['v42'],
	v33Stage: stageEvents.proposed['v33'],
	v42Stage: stageEvents.proposed['v42'],
	v33Test: testEvents.proposed['v33'],
	v42Test: testEvents.proposed['v42'],
	v70Dev: devEvents.proposed['v70'],
}

export const voted = {
	name: 'TechnicalCommittee.Voted',
	v1: productionEvents.voted['v1'],
	v42: productionEvents.voted['v42'],
	v33Stage: stageEvents.voted['v33'],
	v42Stage: stageEvents.voted['v42'],
	v33Test: testEvents.voted['v33'],
	v42Test: testEvents.voted['v42'],
	v70Dev: devEvents.voted['v70'],
}

export const approved = {
	name: 'TechnicalCommittee.Approved',
	v1: productionEvents.approved['v1'],
	v42: productionEvents.approved['v42'],
	v33Stage: stageEvents.approved['v33'],
	v42Stage: stageEvents.approved['v42'],
	v33Test: testEvents.approved['v33'],
	v42Test: testEvents.approved['v42'],
	v70Dev: devEvents.approved['v70'],
}

export const disapproved = {
	name: 'TechnicalCommittee.Disapproved',
	v1: productionEvents.disapproved['v1'],
	v42: productionEvents.disapproved['v42'],
	v33Stage: stageEvents.disapproved['v33'],
	v42Stage: stageEvents.disapproved['v42'],
	v33Test: testEvents.disapproved['v33'],
	v42Test: testEvents.disapproved['v42'],
	v70Dev: devEvents.disapproved['v70'],
}

export const executed = {
	name: 'TechnicalCommittee.Executed',
	v1: productionEvents.executed['v1'],
	v42: productionEvents.executed['v42'],
	v53: productionEvents.executed['v53'],
	v33Stage: stageEvents.executed['v33'],
	v42Stage: stageEvents.executed['v42'],
	v52Stage: stageEvents.executed['v52'],
	v33Test: testEvents.executed['v33'],
	v42Test: testEvents.executed['v42'],
	v52Test: testEvents.executed['v52'],
	v70Dev: devEvents.executed['v70'],
}

export const memberExecuted = {
	name: 'TechnicalCommittee.MemberExecuted',
	v1: productionEvents.memberExecuted['v1'],
	v42: productionEvents.memberExecuted['v42'],
	v53: productionEvents.memberExecuted['v53'],
	v33Stage: stageEvents.memberExecuted['v33'],
	v42Stage: stageEvents.memberExecuted['v42'],
	v52Stage: stageEvents.memberExecuted['v52'],
	v33Test: testEvents.memberExecuted['v33'],
	v42Test: testEvents.memberExecuted['v42'],
	v52Test: testEvents.memberExecuted['v52'],
	v70Dev: devEvents.memberExecuted['v70'],
}

export const closed = {
	name: 'TechnicalCommittee.Closed',
	v1: productionEvents.closed['v1'],
	v42: productionEvents.closed['v42'],
	v33Stage: stageEvents.closed['v33'],
	v42Stage: stageEvents.closed['v42'],
	v33Test: testEvents.closed['v33'],
	v42Test: testEvents.closed['v42'],
	v70Dev: devEvents.closed['v70'],
}
