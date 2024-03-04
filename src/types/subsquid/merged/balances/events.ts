import * as productionEvents from '../../production/balances/events'
import * as stageEvents from '../../stage/balances/events'
import * as testEvents from '../../test/balances/events'
import * as devEvents from '../../dev/balances/events'


export const endowed = {
	name: 'Balances.Endowed',
	v1: productionEvents.endowed['v1'],
	v42: productionEvents.endowed['v42'],
	v33Stage: stageEvents.endowed['v33'],
	v42Stage: stageEvents.endowed['v42'],
	v33Test: testEvents.endowed['v33'],
	v42Test: testEvents.endowed['v42'],
	v70Dev: devEvents.endowed['v70'],
}

export const dustLost = {
	name: 'Balances.DustLost',
	v1: productionEvents.dustLost['v1'],
	v42: productionEvents.dustLost['v42'],
	v33Stage: stageEvents.dustLost['v33'],
	v42Stage: stageEvents.dustLost['v42'],
	v33Test: testEvents.dustLost['v33'],
	v42Test: testEvents.dustLost['v42'],
	v70Dev: devEvents.dustLost['v70'],
}

export const transfer = {
	name: 'Balances.Transfer',
	v1: productionEvents.transfer['v1'],
	v42: productionEvents.transfer['v42'],
	v33Stage: stageEvents.transfer['v33'],
	v42Stage: stageEvents.transfer['v42'],
	v33Test: testEvents.transfer['v33'],
	v42Test: testEvents.transfer['v42'],
	v70Dev: devEvents.transfer['v70'],
}

export const balanceSet = {
	name: 'Balances.BalanceSet',
	v1: productionEvents.balanceSet['v1'],
	v42: productionEvents.balanceSet['v42'],
	v33Stage: stageEvents.balanceSet['v33'],
	v42Stage: stageEvents.balanceSet['v42'],
	v33Test: testEvents.balanceSet['v33'],
	v42Test: testEvents.balanceSet['v42'],
	v70Dev: devEvents.balanceSet['v70'],
}

export const deposit = {
	name: 'Balances.Deposit',
	v1: productionEvents.deposit['v1'],
	v42: productionEvents.deposit['v42'],
	v33Stage: stageEvents.deposit['v33'],
	v42Stage: stageEvents.deposit['v42'],
	v33Test: testEvents.deposit['v33'],
	v42Test: testEvents.deposit['v42'],
	v70Dev: devEvents.deposit['v70'],
}

export const reserved = {
	name: 'Balances.Reserved',
	v1: productionEvents.reserved['v1'],
	v42: productionEvents.reserved['v42'],
	v33Stage: stageEvents.reserved['v33'],
	v42Stage: stageEvents.reserved['v42'],
	v33Test: testEvents.reserved['v33'],
	v42Test: testEvents.reserved['v42'],
	v70Dev: devEvents.reserved['v70'],
}

export const unreserved = {
	name: 'Balances.Unreserved',
	v1: productionEvents.unreserved['v1'],
	v42: productionEvents.unreserved['v42'],
	v33Stage: stageEvents.unreserved['v33'],
	v42Stage: stageEvents.unreserved['v42'],
	v33Test: testEvents.unreserved['v33'],
	v42Test: testEvents.unreserved['v42'],
	v70Dev: devEvents.unreserved['v70'],
}

export const reserveRepatriated = {
	name: 'Balances.ReserveRepatriated',
	v1: productionEvents.reserveRepatriated['v1'],
	v42: productionEvents.reserveRepatriated['v42'],
	v33Stage: stageEvents.reserveRepatriated['v33'],
	v42Stage: stageEvents.reserveRepatriated['v42'],
	v33Test: testEvents.reserveRepatriated['v33'],
	v42Test: testEvents.reserveRepatriated['v42'],
	v70Dev: devEvents.reserveRepatriated['v70'],
}

export const withdraw = {
	name: 'Balances.Withdraw',
	v42: productionEvents.withdraw['v42'],
	v42Stage: stageEvents.withdraw['v42'],
	v42Test: testEvents.withdraw['v42'],
	v70Dev: devEvents.withdraw['v70'],
}

export const slashed = {
	name: 'Balances.Slashed',
	v42: productionEvents.slashed['v42'],
	v42Stage: stageEvents.slashed['v42'],
	v42Test: testEvents.slashed['v42'],
	v70Dev: devEvents.slashed['v70'],
}
