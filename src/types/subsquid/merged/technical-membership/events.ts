import * as productionEvents from '../../production/technical-membership/events'
import * as stageEvents from '../../stage/technical-membership/events'
import * as testEvents from '../../test/technical-membership/events'
import * as devEvents from '../../dev/technical-membership/events'


export const memberAdded = {
	name: 'TechnicalMembership.MemberAdded',
	v1: productionEvents.memberAdded['v1'],
	v33Stage: stageEvents.memberAdded['v33'],
	v33Test: testEvents.memberAdded['v33'],
	v70Dev: devEvents.memberAdded['v70'],
}

export const memberRemoved = {
	name: 'TechnicalMembership.MemberRemoved',
	v1: productionEvents.memberRemoved['v1'],
	v33Stage: stageEvents.memberRemoved['v33'],
	v33Test: testEvents.memberRemoved['v33'],
	v70Dev: devEvents.memberRemoved['v70'],
}

export const membersSwapped = {
	name: 'TechnicalMembership.MembersSwapped',
	v1: productionEvents.membersSwapped['v1'],
	v33Stage: stageEvents.membersSwapped['v33'],
	v33Test: testEvents.membersSwapped['v33'],
	v70Dev: devEvents.membersSwapped['v70'],
}

export const membersReset = {
	name: 'TechnicalMembership.MembersReset',
	v1: productionEvents.membersReset['v1'],
	v33Stage: stageEvents.membersReset['v33'],
	v33Test: testEvents.membersReset['v33'],
	v70Dev: devEvents.membersReset['v70'],
}

export const keyChanged = {
	name: 'TechnicalMembership.KeyChanged',
	v1: productionEvents.keyChanged['v1'],
	v33Stage: stageEvents.keyChanged['v33'],
	v33Test: testEvents.keyChanged['v33'],
	v70Dev: devEvents.keyChanged['v70'],
}

export const dummy = {
	name: 'TechnicalMembership.Dummy',
	v1: productionEvents.dummy['v1'],
	v33Stage: stageEvents.dummy['v33'],
	v33Test: testEvents.dummy['v33'],
	v70Dev: devEvents.dummy['v70'],
}
