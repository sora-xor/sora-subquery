import * as productionStorage from '../../production/authorship/storage'
import * as stageStorage from '../../stage/authorship/storage'
import * as testStorage from '../../test/authorship/storage'
import * as devStorage from '../../dev/authorship/storage'


export const uncles = {
	name: 'Authorship.Uncles',
	v1: productionStorage.uncles['v1'],
	v42: productionStorage.uncles['v42'],
	v33Stage: stageStorage.uncles['v33'],
	v42Stage: stageStorage.uncles['v42'],
	v33Test: testStorage.uncles['v33'],
	v42Test: testStorage.uncles['v42'],
}

export const author = {
	name: 'Authorship.Author',
	v1: productionStorage.author['v1'],
	v33Stage: stageStorage.author['v33'],
	v33Test: testStorage.author['v33'],
	v70Dev: devStorage.author['v70'],
}

export const didSetUncles = {
	name: 'Authorship.DidSetUncles',
	v1: productionStorage.didSetUncles['v1'],
	v33Stage: stageStorage.didSetUncles['v33'],
	v33Test: testStorage.didSetUncles['v33'],
}
