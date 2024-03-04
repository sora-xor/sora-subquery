import * as productionStorage from '../../production/multisig/storage'
import * as stageStorage from '../../stage/multisig/storage'
import * as testStorage from '../../test/multisig/storage'
import * as devStorage from '../../dev/multisig/storage'


export const multisigs = {
	name: 'Multisig.Multisigs',
	v1: productionStorage.multisigs['v1'],
	v33Stage: stageStorage.multisigs['v33'],
	v33Test: testStorage.multisigs['v33'],
	v70Dev: devStorage.multisigs['v70'],
}

export const calls = {
	name: 'Multisig.Calls',
	v1: productionStorage.calls['v1'],
	v33Stage: stageStorage.calls['v33'],
	v33Test: testStorage.calls['v33'],
}
