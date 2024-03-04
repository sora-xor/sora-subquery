import * as productionStorage from '../../production/beefy/storage'
import * as stageStorage from '../../stage/beefy/storage'
import * as testStorage from '../../test/beefy/storage'
import * as devStorage from '../../dev/beefy/storage'


export const authorities = {
	name: 'Beefy.Authorities',
	v42: productionStorage.authorities['v42'],
	v42Stage: stageStorage.authorities['v42'],
	v42Test: testStorage.authorities['v42'],
	v70Dev: devStorage.authorities['v70'],
}

export const validatorSetId = {
	name: 'Beefy.ValidatorSetId',
	v42: productionStorage.validatorSetId['v42'],
	v42Stage: stageStorage.validatorSetId['v42'],
	v42Test: testStorage.validatorSetId['v42'],
	v70Dev: devStorage.validatorSetId['v70'],
}

export const nextAuthorities = {
	name: 'Beefy.NextAuthorities',
	v42: productionStorage.nextAuthorities['v42'],
	v42Stage: stageStorage.nextAuthorities['v42'],
	v42Test: testStorage.nextAuthorities['v42'],
	v70Dev: devStorage.nextAuthorities['v70'],
}
