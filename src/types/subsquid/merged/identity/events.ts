import * as productionEvents from '../../production/identity/events'
import * as stageEvents from '../../stage/identity/events'
import * as testEvents from '../../test/identity/events'
import * as devEvents from '../../dev/identity/events'


export const identitySet = {
	name: 'Identity.IdentitySet',
	v3: productionEvents.identitySet['v3'],
	v42: productionEvents.identitySet['v42'],
	v33Stage: stageEvents.identitySet['v33'],
	v42Stage: stageEvents.identitySet['v42'],
	v33Test: testEvents.identitySet['v33'],
	v42Test: testEvents.identitySet['v42'],
	v70Dev: devEvents.identitySet['v70'],
}

export const identityCleared = {
	name: 'Identity.IdentityCleared',
	v3: productionEvents.identityCleared['v3'],
	v42: productionEvents.identityCleared['v42'],
	v33Stage: stageEvents.identityCleared['v33'],
	v42Stage: stageEvents.identityCleared['v42'],
	v33Test: testEvents.identityCleared['v33'],
	v42Test: testEvents.identityCleared['v42'],
	v70Dev: devEvents.identityCleared['v70'],
}

export const identityKilled = {
	name: 'Identity.IdentityKilled',
	v3: productionEvents.identityKilled['v3'],
	v42: productionEvents.identityKilled['v42'],
	v33Stage: stageEvents.identityKilled['v33'],
	v42Stage: stageEvents.identityKilled['v42'],
	v33Test: testEvents.identityKilled['v33'],
	v42Test: testEvents.identityKilled['v42'],
	v70Dev: devEvents.identityKilled['v70'],
}

export const judgementRequested = {
	name: 'Identity.JudgementRequested',
	v3: productionEvents.judgementRequested['v3'],
	v42: productionEvents.judgementRequested['v42'],
	v33Stage: stageEvents.judgementRequested['v33'],
	v42Stage: stageEvents.judgementRequested['v42'],
	v33Test: testEvents.judgementRequested['v33'],
	v42Test: testEvents.judgementRequested['v42'],
	v70Dev: devEvents.judgementRequested['v70'],
}

export const judgementUnrequested = {
	name: 'Identity.JudgementUnrequested',
	v3: productionEvents.judgementUnrequested['v3'],
	v42: productionEvents.judgementUnrequested['v42'],
	v33Stage: stageEvents.judgementUnrequested['v33'],
	v42Stage: stageEvents.judgementUnrequested['v42'],
	v33Test: testEvents.judgementUnrequested['v33'],
	v42Test: testEvents.judgementUnrequested['v42'],
	v70Dev: devEvents.judgementUnrequested['v70'],
}

export const judgementGiven = {
	name: 'Identity.JudgementGiven',
	v3: productionEvents.judgementGiven['v3'],
	v42: productionEvents.judgementGiven['v42'],
	v33Stage: stageEvents.judgementGiven['v33'],
	v42Stage: stageEvents.judgementGiven['v42'],
	v33Test: testEvents.judgementGiven['v33'],
	v42Test: testEvents.judgementGiven['v42'],
	v70Dev: devEvents.judgementGiven['v70'],
}

export const registrarAdded = {
	name: 'Identity.RegistrarAdded',
	v3: productionEvents.registrarAdded['v3'],
	v42: productionEvents.registrarAdded['v42'],
	v33Stage: stageEvents.registrarAdded['v33'],
	v42Stage: stageEvents.registrarAdded['v42'],
	v33Test: testEvents.registrarAdded['v33'],
	v42Test: testEvents.registrarAdded['v42'],
	v70Dev: devEvents.registrarAdded['v70'],
}

export const subIdentityAdded = {
	name: 'Identity.SubIdentityAdded',
	v3: productionEvents.subIdentityAdded['v3'],
	v42: productionEvents.subIdentityAdded['v42'],
	v33Stage: stageEvents.subIdentityAdded['v33'],
	v42Stage: stageEvents.subIdentityAdded['v42'],
	v33Test: testEvents.subIdentityAdded['v33'],
	v42Test: testEvents.subIdentityAdded['v42'],
	v70Dev: devEvents.subIdentityAdded['v70'],
}

export const subIdentityRemoved = {
	name: 'Identity.SubIdentityRemoved',
	v3: productionEvents.subIdentityRemoved['v3'],
	v42: productionEvents.subIdentityRemoved['v42'],
	v33Stage: stageEvents.subIdentityRemoved['v33'],
	v42Stage: stageEvents.subIdentityRemoved['v42'],
	v33Test: testEvents.subIdentityRemoved['v33'],
	v42Test: testEvents.subIdentityRemoved['v42'],
	v70Dev: devEvents.subIdentityRemoved['v70'],
}

export const subIdentityRevoked = {
	name: 'Identity.SubIdentityRevoked',
	v3: productionEvents.subIdentityRevoked['v3'],
	v42: productionEvents.subIdentityRevoked['v42'],
	v33Stage: stageEvents.subIdentityRevoked['v33'],
	v42Stage: stageEvents.subIdentityRevoked['v42'],
	v33Test: testEvents.subIdentityRevoked['v33'],
	v42Test: testEvents.subIdentityRevoked['v42'],
	v70Dev: devEvents.subIdentityRevoked['v70'],
}
