import * as productionStorage from '../../production/bridge-multisig/storage'
import * as stageStorage from '../../stage/bridge-multisig/storage'
import * as testStorage from '../../test/bridge-multisig/storage'
import * as devStorage from '../../dev/bridge-multisig/storage'


export const accounts = {
	name: 'BridgeMultisig.Accounts',
	v1: productionStorage.accounts['v1'],
	v33Stage: stageStorage.accounts['v33'],
	v33Test: testStorage.accounts['v33'],
	v70Dev: devStorage.accounts['v70'],
}

export const multisigs = {
	name: 'BridgeMultisig.Multisigs',
	v1: productionStorage.multisigs['v1'],
	v42: productionStorage.multisigs['v42'],
	v33Stage: stageStorage.multisigs['v33'],
	v42Stage: stageStorage.multisigs['v42'],
	v33Test: testStorage.multisigs['v33'],
	v42Test: testStorage.multisigs['v42'],
	v70Dev: devStorage.multisigs['v70'],
}

export const calls = {
	name: 'BridgeMultisig.Calls',
	v1: productionStorage.calls['v1'],
	v33Stage: stageStorage.calls['v33'],
	v33Test: testStorage.calls['v33'],
	v70Dev: devStorage.calls['v70'],
}

export const dispatchedCalls = {
	name: 'BridgeMultisig.DispatchedCalls',
	v1: productionStorage.dispatchedCalls['v1'],
	v33Stage: stageStorage.dispatchedCalls['v33'],
	v33Test: testStorage.dispatchedCalls['v33'],
	v70Dev: devStorage.dispatchedCalls['v70'],
}
