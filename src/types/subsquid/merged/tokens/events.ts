import * as productionEvents from '../../production/tokens/events'
import * as stageEvents from '../../stage/tokens/events'
import * as testEvents from '../../test/tokens/events'
import * as devEvents from '../../dev/tokens/events'


export const transferred = {
	name: 'Tokens.Transferred',
	v1: productionEvents.transferred['v1'],
	v33Stage: stageEvents.transferred['v33'],
	v33Test: testEvents.transferred['v33'],
}

export const dustLost = {
	name: 'Tokens.DustLost',
	v1: productionEvents.dustLost['v1'],
	v42: productionEvents.dustLost['v42'],
	v33Stage: stageEvents.dustLost['v33'],
	v42Stage: stageEvents.dustLost['v42'],
	v33Test: testEvents.dustLost['v33'],
	v42Test: testEvents.dustLost['v42'],
	v70Dev: devEvents.dustLost['v70'],
}

export const endowed = {
	name: 'Tokens.Endowed',
	v42: productionEvents.endowed['v42'],
	v42Stage: stageEvents.endowed['v42'],
	v42Test: testEvents.endowed['v42'],
	v70Dev: devEvents.endowed['v70'],
}

export const transfer = {
	name: 'Tokens.Transfer',
	v42: productionEvents.transfer['v42'],
	v42Stage: stageEvents.transfer['v42'],
	v42Test: testEvents.transfer['v42'],
	v70Dev: devEvents.transfer['v70'],
}

export const reserved = {
	name: 'Tokens.Reserved',
	v42: productionEvents.reserved['v42'],
	v42Stage: stageEvents.reserved['v42'],
	v42Test: testEvents.reserved['v42'],
	v70Dev: devEvents.reserved['v70'],
}

export const unreserved = {
	name: 'Tokens.Unreserved',
	v42: productionEvents.unreserved['v42'],
	v42Stage: stageEvents.unreserved['v42'],
	v42Test: testEvents.unreserved['v42'],
	v70Dev: devEvents.unreserved['v70'],
}

export const reserveRepatriated = {
	name: 'Tokens.ReserveRepatriated',
	v42: productionEvents.reserveRepatriated['v42'],
	v42Stage: stageEvents.reserveRepatriated['v42'],
	v42Test: testEvents.reserveRepatriated['v42'],
	v70Dev: devEvents.reserveRepatriated['v70'],
}

export const balanceSet = {
	name: 'Tokens.BalanceSet',
	v42: productionEvents.balanceSet['v42'],
	v42Stage: stageEvents.balanceSet['v42'],
	v42Test: testEvents.balanceSet['v42'],
	v70Dev: devEvents.balanceSet['v70'],
}

export const totalIssuanceSet = {
	name: 'Tokens.TotalIssuanceSet',
	v42: productionEvents.totalIssuanceSet['v42'],
	v42Stage: stageEvents.totalIssuanceSet['v42'],
	v42Test: testEvents.totalIssuanceSet['v42'],
	v70Dev: devEvents.totalIssuanceSet['v70'],
}

export const withdrawn = {
	name: 'Tokens.Withdrawn',
	v42: productionEvents.withdrawn['v42'],
	v42Stage: stageEvents.withdrawn['v42'],
	v42Test: testEvents.withdrawn['v42'],
	v70Dev: devEvents.withdrawn['v70'],
}

export const slashed = {
	name: 'Tokens.Slashed',
	v42: productionEvents.slashed['v42'],
	v42Stage: stageEvents.slashed['v42'],
	v42Test: testEvents.slashed['v42'],
	v70Dev: devEvents.slashed['v70'],
}

export const deposited = {
	name: 'Tokens.Deposited',
	v42: productionEvents.deposited['v42'],
	v42Stage: stageEvents.deposited['v42'],
	v42Test: testEvents.deposited['v42'],
	v70Dev: devEvents.deposited['v70'],
}

export const lockSet = {
	name: 'Tokens.LockSet',
	v42: productionEvents.lockSet['v42'],
	v42Stage: stageEvents.lockSet['v42'],
	v42Test: testEvents.lockSet['v42'],
	v70Dev: devEvents.lockSet['v70'],
}

export const lockRemoved = {
	name: 'Tokens.LockRemoved',
	v42: productionEvents.lockRemoved['v42'],
	v42Stage: stageEvents.lockRemoved['v42'],
	v42Test: testEvents.lockRemoved['v42'],
	v70Dev: devEvents.lockRemoved['v70'],
}

export const locked = {
	name: 'Tokens.Locked',
	v53: productionEvents.locked['v53'],
	v52Stage: stageEvents.locked['v52'],
	v52Test: testEvents.locked['v52'],
	v70Dev: devEvents.locked['v70'],
}

export const unlocked = {
	name: 'Tokens.Unlocked',
	v53: productionEvents.unlocked['v53'],
	v52Stage: stageEvents.unlocked['v52'],
	v52Test: testEvents.unlocked['v52'],
	v70Dev: devEvents.unlocked['v70'],
}
