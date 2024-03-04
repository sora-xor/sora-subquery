import * as productionStorage from '../../production/timestamp/storage'
import * as stageStorage from '../../stage/timestamp/storage'
import * as testStorage from '../../test/timestamp/storage'
import * as devStorage from '../../dev/timestamp/storage'


export const now = {
	name: 'Timestamp.Now',
	v1: productionStorage.now['v1'],
	v33Stage: stageStorage.now['v33'],
	v33Test: testStorage.now['v33'],
	v70Dev: devStorage.now['v70'],
}

export const didUpdate = {
	name: 'Timestamp.DidUpdate',
	v1: productionStorage.didUpdate['v1'],
	v33Stage: stageStorage.didUpdate['v33'],
	v33Test: testStorage.didUpdate['v33'],
	v70Dev: devStorage.didUpdate['v70'],
}
