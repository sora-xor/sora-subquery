import * as productionCalls from '../../production/currencies/calls'
import * as stageCalls from '../../stage/currencies/calls'
import * as testCalls from '../../test/currencies/calls'


export const transfer = {
	name: 'Currencies.transfer',
	v1: productionCalls.transfer['v1'],
	v42: productionCalls.transfer['v42'],
	v33Stage: stageCalls.transfer['v33'],
	v42Stage: stageCalls.transfer['v42'],
	v33Test: testCalls.transfer['v33'],
	v42Test: testCalls.transfer['v42'],
}

export const transferNativeCurrency = {
	name: 'Currencies.transfer_native_currency',
	v1: productionCalls.transferNativeCurrency['v1'],
	v33Stage: stageCalls.transferNativeCurrency['v33'],
	v33Test: testCalls.transferNativeCurrency['v33'],
}

export const updateBalance = {
	name: 'Currencies.update_balance',
	v1: productionCalls.updateBalance['v1'],
	v42: productionCalls.updateBalance['v42'],
	v33Stage: stageCalls.updateBalance['v33'],
	v42Stage: stageCalls.updateBalance['v42'],
	v33Test: testCalls.updateBalance['v33'],
	v42Test: testCalls.updateBalance['v42'],
}
