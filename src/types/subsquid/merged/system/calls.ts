import * as productionCalls from '../../production/system/calls'
import * as stageCalls from '../../stage/system/calls'
import * as testCalls from '../../test/system/calls'
import * as devCalls from '../../dev/system/calls'


export const fillBlock = {
	name: 'System.fill_block',
	v1: productionCalls.fillBlock['v1'],
	v33Stage: stageCalls.fillBlock['v33'],
	v33Test: testCalls.fillBlock['v33'],
}

export const remark = {
	name: 'System.remark',
	v1: productionCalls.remark['v1'],
	v33Stage: stageCalls.remark['v33'],
	v33Test: testCalls.remark['v33'],
	v70Dev: devCalls.remark['v70'],
}

export const setHeapPages = {
	name: 'System.set_heap_pages',
	v1: productionCalls.setHeapPages['v1'],
	v33Stage: stageCalls.setHeapPages['v33'],
	v33Test: testCalls.setHeapPages['v33'],
	v70Dev: devCalls.setHeapPages['v70'],
}

export const setCode = {
	name: 'System.set_code',
	v1: productionCalls.setCode['v1'],
	v33Stage: stageCalls.setCode['v33'],
	v33Test: testCalls.setCode['v33'],
	v70Dev: devCalls.setCode['v70'],
}

export const setCodeWithoutChecks = {
	name: 'System.set_code_without_checks',
	v1: productionCalls.setCodeWithoutChecks['v1'],
	v33Stage: stageCalls.setCodeWithoutChecks['v33'],
	v33Test: testCalls.setCodeWithoutChecks['v33'],
	v70Dev: devCalls.setCodeWithoutChecks['v70'],
}

export const setChangesTrieConfig = {
	name: 'System.set_changes_trie_config',
	v1: productionCalls.setChangesTrieConfig['v1'],
	v33Stage: stageCalls.setChangesTrieConfig['v33'],
	v33Test: testCalls.setChangesTrieConfig['v33'],
}

export const setStorage = {
	name: 'System.set_storage',
	v1: productionCalls.setStorage['v1'],
	v33Stage: stageCalls.setStorage['v33'],
	v33Test: testCalls.setStorage['v33'],
	v70Dev: devCalls.setStorage['v70'],
}

export const killStorage = {
	name: 'System.kill_storage',
	v1: productionCalls.killStorage['v1'],
	v33Stage: stageCalls.killStorage['v33'],
	v33Test: testCalls.killStorage['v33'],
	v70Dev: devCalls.killStorage['v70'],
}

export const killPrefix = {
	name: 'System.kill_prefix',
	v1: productionCalls.killPrefix['v1'],
	v33Stage: stageCalls.killPrefix['v33'],
	v33Test: testCalls.killPrefix['v33'],
	v70Dev: devCalls.killPrefix['v70'],
}

export const remarkWithEvent = {
	name: 'System.remark_with_event',
	v42: productionCalls.remarkWithEvent['v42'],
	v42Stage: stageCalls.remarkWithEvent['v42'],
	v42Test: testCalls.remarkWithEvent['v42'],
	v70Dev: devCalls.remarkWithEvent['v70'],
}
