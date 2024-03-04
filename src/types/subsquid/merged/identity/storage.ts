import * as productionStorage from '../../production/identity/storage'
import * as stageStorage from '../../stage/identity/storage'
import * as testStorage from '../../test/identity/storage'
import * as devStorage from '../../dev/identity/storage'


export const identityOf = {
	name: 'Identity.IdentityOf',
	v3: productionStorage.identityOf['v3'],
	v33Stage: stageStorage.identityOf['v33'],
	v33Test: testStorage.identityOf['v33'],
	v70Dev: devStorage.identityOf['v70'],
}

export const superOf = {
	name: 'Identity.SuperOf',
	v3: productionStorage.superOf['v3'],
	v33Stage: stageStorage.superOf['v33'],
	v33Test: testStorage.superOf['v33'],
	v70Dev: devStorage.superOf['v70'],
}

export const subsOf = {
	name: 'Identity.SubsOf',
	v3: productionStorage.subsOf['v3'],
	v33Stage: stageStorage.subsOf['v33'],
	v33Test: testStorage.subsOf['v33'],
	v70Dev: devStorage.subsOf['v70'],
}

export const registrars = {
	name: 'Identity.Registrars',
	v3: productionStorage.registrars['v3'],
	v33Stage: stageStorage.registrars['v33'],
	v33Test: testStorage.registrars['v33'],
	v70Dev: devStorage.registrars['v70'],
}
