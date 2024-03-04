import * as productionEvents from '../../production/democracy/events'
import * as stageEvents from '../../stage/democracy/events'
import * as testEvents from '../../test/democracy/events'
import * as devEvents from '../../dev/democracy/events'


export const proposed = {
	name: 'Democracy.Proposed',
	v1: productionEvents.proposed['v1'],
	v42: productionEvents.proposed['v42'],
	v33Stage: stageEvents.proposed['v33'],
	v42Stage: stageEvents.proposed['v42'],
	v33Test: testEvents.proposed['v33'],
	v42Test: testEvents.proposed['v42'],
	v70Dev: devEvents.proposed['v70'],
}

export const tabled = {
	name: 'Democracy.Tabled',
	v1: productionEvents.tabled['v1'],
	v42: productionEvents.tabled['v42'],
	v53: productionEvents.tabled['v53'],
	v33Stage: stageEvents.tabled['v33'],
	v42Stage: stageEvents.tabled['v42'],
	v52Stage: stageEvents.tabled['v52'],
	v33Test: testEvents.tabled['v33'],
	v42Test: testEvents.tabled['v42'],
	v52Test: testEvents.tabled['v52'],
	v70Dev: devEvents.tabled['v70'],
}

export const externalTabled = {
	name: 'Democracy.ExternalTabled',
	v1: productionEvents.externalTabled['v1'],
	v33Stage: stageEvents.externalTabled['v33'],
	v33Test: testEvents.externalTabled['v33'],
	v70Dev: devEvents.externalTabled['v70'],
}

export const started = {
	name: 'Democracy.Started',
	v1: productionEvents.started['v1'],
	v42: productionEvents.started['v42'],
	v33Stage: stageEvents.started['v33'],
	v42Stage: stageEvents.started['v42'],
	v33Test: testEvents.started['v33'],
	v42Test: testEvents.started['v42'],
	v70Dev: devEvents.started['v70'],
}

export const passed = {
	name: 'Democracy.Passed',
	v1: productionEvents.passed['v1'],
	v42: productionEvents.passed['v42'],
	v33Stage: stageEvents.passed['v33'],
	v42Stage: stageEvents.passed['v42'],
	v33Test: testEvents.passed['v33'],
	v42Test: testEvents.passed['v42'],
	v70Dev: devEvents.passed['v70'],
}

export const notPassed = {
	name: 'Democracy.NotPassed',
	v1: productionEvents.notPassed['v1'],
	v42: productionEvents.notPassed['v42'],
	v33Stage: stageEvents.notPassed['v33'],
	v42Stage: stageEvents.notPassed['v42'],
	v33Test: testEvents.notPassed['v33'],
	v42Test: testEvents.notPassed['v42'],
	v70Dev: devEvents.notPassed['v70'],
}

export const cancelled = {
	name: 'Democracy.Cancelled',
	v1: productionEvents.cancelled['v1'],
	v42: productionEvents.cancelled['v42'],
	v33Stage: stageEvents.cancelled['v33'],
	v42Stage: stageEvents.cancelled['v42'],
	v33Test: testEvents.cancelled['v33'],
	v42Test: testEvents.cancelled['v42'],
	v70Dev: devEvents.cancelled['v70'],
}

export const executed = {
	name: 'Democracy.Executed',
	v1: productionEvents.executed['v1'],
	v42: productionEvents.executed['v42'],
	v33Stage: stageEvents.executed['v33'],
	v42Stage: stageEvents.executed['v42'],
	v33Test: testEvents.executed['v33'],
	v42Test: testEvents.executed['v42'],
}

export const delegated = {
	name: 'Democracy.Delegated',
	v1: productionEvents.delegated['v1'],
	v42: productionEvents.delegated['v42'],
	v33Stage: stageEvents.delegated['v33'],
	v42Stage: stageEvents.delegated['v42'],
	v33Test: testEvents.delegated['v33'],
	v42Test: testEvents.delegated['v42'],
	v70Dev: devEvents.delegated['v70'],
}

export const undelegated = {
	name: 'Democracy.Undelegated',
	v1: productionEvents.undelegated['v1'],
	v42: productionEvents.undelegated['v42'],
	v33Stage: stageEvents.undelegated['v33'],
	v42Stage: stageEvents.undelegated['v42'],
	v33Test: testEvents.undelegated['v33'],
	v42Test: testEvents.undelegated['v42'],
	v70Dev: devEvents.undelegated['v70'],
}

export const vetoed = {
	name: 'Democracy.Vetoed',
	v1: productionEvents.vetoed['v1'],
	v42: productionEvents.vetoed['v42'],
	v33Stage: stageEvents.vetoed['v33'],
	v42Stage: stageEvents.vetoed['v42'],
	v33Test: testEvents.vetoed['v33'],
	v42Test: testEvents.vetoed['v42'],
	v70Dev: devEvents.vetoed['v70'],
}

export const preimageNoted = {
	name: 'Democracy.PreimageNoted',
	v1: productionEvents.preimageNoted['v1'],
	v42: productionEvents.preimageNoted['v42'],
	v33Stage: stageEvents.preimageNoted['v33'],
	v42Stage: stageEvents.preimageNoted['v42'],
	v33Test: testEvents.preimageNoted['v33'],
	v42Test: testEvents.preimageNoted['v42'],
}

export const preimageUsed = {
	name: 'Democracy.PreimageUsed',
	v1: productionEvents.preimageUsed['v1'],
	v42: productionEvents.preimageUsed['v42'],
	v33Stage: stageEvents.preimageUsed['v33'],
	v42Stage: stageEvents.preimageUsed['v42'],
	v33Test: testEvents.preimageUsed['v33'],
	v42Test: testEvents.preimageUsed['v42'],
}

export const preimageInvalid = {
	name: 'Democracy.PreimageInvalid',
	v1: productionEvents.preimageInvalid['v1'],
	v42: productionEvents.preimageInvalid['v42'],
	v33Stage: stageEvents.preimageInvalid['v33'],
	v42Stage: stageEvents.preimageInvalid['v42'],
	v33Test: testEvents.preimageInvalid['v33'],
	v42Test: testEvents.preimageInvalid['v42'],
}

export const preimageMissing = {
	name: 'Democracy.PreimageMissing',
	v1: productionEvents.preimageMissing['v1'],
	v42: productionEvents.preimageMissing['v42'],
	v33Stage: stageEvents.preimageMissing['v33'],
	v42Stage: stageEvents.preimageMissing['v42'],
	v33Test: testEvents.preimageMissing['v33'],
	v42Test: testEvents.preimageMissing['v42'],
}

export const preimageReaped = {
	name: 'Democracy.PreimageReaped',
	v1: productionEvents.preimageReaped['v1'],
	v42: productionEvents.preimageReaped['v42'],
	v33Stage: stageEvents.preimageReaped['v33'],
	v42Stage: stageEvents.preimageReaped['v42'],
	v33Test: testEvents.preimageReaped['v33'],
	v42Test: testEvents.preimageReaped['v42'],
}

export const unlocked = {
	name: 'Democracy.Unlocked',
	v1: productionEvents.unlocked['v1'],
	v33Stage: stageEvents.unlocked['v33'],
	v33Test: testEvents.unlocked['v33'],
}

export const blacklisted = {
	name: 'Democracy.Blacklisted',
	v1: productionEvents.blacklisted['v1'],
	v42: productionEvents.blacklisted['v42'],
	v33Stage: stageEvents.blacklisted['v33'],
	v42Stage: stageEvents.blacklisted['v42'],
	v33Test: testEvents.blacklisted['v33'],
	v42Test: testEvents.blacklisted['v42'],
	v70Dev: devEvents.blacklisted['v70'],
}

export const voted = {
	name: 'Democracy.Voted',
	v42: productionEvents.voted['v42'],
	v42Stage: stageEvents.voted['v42'],
	v42Test: testEvents.voted['v42'],
	v70Dev: devEvents.voted['v70'],
}

export const seconded = {
	name: 'Democracy.Seconded',
	v42: productionEvents.seconded['v42'],
	v42Stage: stageEvents.seconded['v42'],
	v42Test: testEvents.seconded['v42'],
	v70Dev: devEvents.seconded['v70'],
}

export const proposalCanceled = {
	name: 'Democracy.ProposalCanceled',
	v42: productionEvents.proposalCanceled['v42'],
	v42Stage: stageEvents.proposalCanceled['v42'],
	v42Test: testEvents.proposalCanceled['v42'],
	v70Dev: devEvents.proposalCanceled['v70'],
}
