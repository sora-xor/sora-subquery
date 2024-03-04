import * as productionStorage from '../../production/randomness-collective-flip/storage'
import * as stageStorage from '../../stage/randomness-collective-flip/storage'
import * as testStorage from '../../test/randomness-collective-flip/storage'
import * as devStorage from '../../dev/randomness-collective-flip/storage'


export const randomMaterial = {
	name: 'RandomnessCollectiveFlip.RandomMaterial',
	v1: productionStorage.randomMaterial['v1'],
	v33Stage: stageStorage.randomMaterial['v33'],
	v33Test: testStorage.randomMaterial['v33'],
	v70Dev: devStorage.randomMaterial['v70'],
}
