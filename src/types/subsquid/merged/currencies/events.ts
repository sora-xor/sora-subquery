import * as productionEvents from '../../production/currencies/events'
import * as stageEvents from '../../stage/currencies/events'
import * as testEvents from '../../test/currencies/events'


export const transferred = {
	name: 'Currencies.Transferred',
	v1: productionEvents.transferred['v1'],
	v33Stage: stageEvents.transferred['v33'],
	v33Test: testEvents.transferred['v33'],
}

export const balanceUpdated = {
	name: 'Currencies.BalanceUpdated',
	v1: productionEvents.balanceUpdated['v1'],
	v33Stage: stageEvents.balanceUpdated['v33'],
	v33Test: testEvents.balanceUpdated['v33'],
}

export const deposited = {
	name: 'Currencies.Deposited',
	v1: productionEvents.deposited['v1'],
	v33Stage: stageEvents.deposited['v33'],
	v33Test: testEvents.deposited['v33'],
}

export const withdrawn = {
	name: 'Currencies.Withdrawn',
	v1: productionEvents.withdrawn['v1'],
	v33Stage: stageEvents.withdrawn['v33'],
	v33Test: testEvents.withdrawn['v33'],
}
