import * as productionStorage from '../../production/sudo/storage'
import * as stageStorage from '../../stage/sudo/storage'
import * as testStorage from '../../test/sudo/storage'
import * as devStorage from '../../dev/sudo/storage'


export const key = {
	name: 'Sudo.Key',
	v22: productionStorage.key['v22'],
	v33Stage: stageStorage.key['v33'],
	v42Stage: stageStorage.key['v42'],
	v33Test: testStorage.key['v33'],
	v42Test: testStorage.key['v42'],
	v70Dev: devStorage.key['v70'],
}
