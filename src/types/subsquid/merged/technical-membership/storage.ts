import * as productionStorage from '../../production/technical-membership/storage'
import * as stageStorage from '../../stage/technical-membership/storage'
import * as testStorage from '../../test/technical-membership/storage'
import * as devStorage from '../../dev/technical-membership/storage'


export const members = {
	name: 'TechnicalMembership.Members',
	v1: productionStorage.members['v1'],
	v33Stage: stageStorage.members['v33'],
	v33Test: testStorage.members['v33'],
	v70Dev: devStorage.members['v70'],
}

export const prime = {
	name: 'TechnicalMembership.Prime',
	v1: productionStorage.prime['v1'],
	v33Stage: stageStorage.prime['v33'],
	v33Test: testStorage.prime['v33'],
	v70Dev: devStorage.prime['v70'],
}
