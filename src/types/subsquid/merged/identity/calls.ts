import * as productionCalls from '../../production/identity/calls'
import * as stageCalls from '../../stage/identity/calls'
import * as testCalls from '../../test/identity/calls'
import * as devCalls from '../../dev/identity/calls'


export const addRegistrar = {
	name: 'Identity.add_registrar',
	v3: productionCalls.addRegistrar['v3'],
	v33Stage: stageCalls.addRegistrar['v33'],
	v33Test: testCalls.addRegistrar['v33'],
	v70Dev: devCalls.addRegistrar['v70'],
}

export const setIdentity = {
	name: 'Identity.set_identity',
	v3: productionCalls.setIdentity['v3'],
	v33Stage: stageCalls.setIdentity['v33'],
	v33Test: testCalls.setIdentity['v33'],
	v70Dev: devCalls.setIdentity['v70'],
}

export const setSubs = {
	name: 'Identity.set_subs',
	v3: productionCalls.setSubs['v3'],
	v33Stage: stageCalls.setSubs['v33'],
	v33Test: testCalls.setSubs['v33'],
	v70Dev: devCalls.setSubs['v70'],
}

export const clearIdentity = {
	name: 'Identity.clear_identity',
	v3: productionCalls.clearIdentity['v3'],
	v33Stage: stageCalls.clearIdentity['v33'],
	v33Test: testCalls.clearIdentity['v33'],
	v70Dev: devCalls.clearIdentity['v70'],
}

export const requestJudgement = {
	name: 'Identity.request_judgement',
	v3: productionCalls.requestJudgement['v3'],
	v33Stage: stageCalls.requestJudgement['v33'],
	v33Test: testCalls.requestJudgement['v33'],
	v70Dev: devCalls.requestJudgement['v70'],
}

export const cancelRequest = {
	name: 'Identity.cancel_request',
	v3: productionCalls.cancelRequest['v3'],
	v33Stage: stageCalls.cancelRequest['v33'],
	v33Test: testCalls.cancelRequest['v33'],
	v70Dev: devCalls.cancelRequest['v70'],
}

export const setFee = {
	name: 'Identity.set_fee',
	v3: productionCalls.setFee['v3'],
	v33Stage: stageCalls.setFee['v33'],
	v33Test: testCalls.setFee['v33'],
	v70Dev: devCalls.setFee['v70'],
}

export const setAccountId = {
	name: 'Identity.set_account_id',
	v3: productionCalls.setAccountId['v3'],
	v33Stage: stageCalls.setAccountId['v33'],
	v33Test: testCalls.setAccountId['v33'],
	v70Dev: devCalls.setAccountId['v70'],
}

export const setFields = {
	name: 'Identity.set_fields',
	v3: productionCalls.setFields['v3'],
	v33Stage: stageCalls.setFields['v33'],
	v33Test: testCalls.setFields['v33'],
	v70Dev: devCalls.setFields['v70'],
}

export const provideJudgement = {
	name: 'Identity.provide_judgement',
	v3: productionCalls.provideJudgement['v3'],
	v53: productionCalls.provideJudgement['v53'],
	v33Stage: stageCalls.provideJudgement['v33'],
	v52Stage: stageCalls.provideJudgement['v52'],
	v33Test: testCalls.provideJudgement['v33'],
	v52Test: testCalls.provideJudgement['v52'],
	v70Dev: devCalls.provideJudgement['v70'],
}

export const killIdentity = {
	name: 'Identity.kill_identity',
	v3: productionCalls.killIdentity['v3'],
	v33Stage: stageCalls.killIdentity['v33'],
	v33Test: testCalls.killIdentity['v33'],
	v70Dev: devCalls.killIdentity['v70'],
}

export const addSub = {
	name: 'Identity.add_sub',
	v3: productionCalls.addSub['v3'],
	v33Stage: stageCalls.addSub['v33'],
	v33Test: testCalls.addSub['v33'],
	v70Dev: devCalls.addSub['v70'],
}

export const renameSub = {
	name: 'Identity.rename_sub',
	v3: productionCalls.renameSub['v3'],
	v33Stage: stageCalls.renameSub['v33'],
	v33Test: testCalls.renameSub['v33'],
	v70Dev: devCalls.renameSub['v70'],
}

export const removeSub = {
	name: 'Identity.remove_sub',
	v3: productionCalls.removeSub['v3'],
	v33Stage: stageCalls.removeSub['v33'],
	v33Test: testCalls.removeSub['v33'],
	v70Dev: devCalls.removeSub['v70'],
}

export const quitSub = {
	name: 'Identity.quit_sub',
	v3: productionCalls.quitSub['v3'],
	v33Stage: stageCalls.quitSub['v33'],
	v33Test: testCalls.quitSub['v33'],
	v70Dev: devCalls.quitSub['v70'],
}
