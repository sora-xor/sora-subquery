import * as productionCalls from '../../production/balances/calls'
import * as stageCalls from '../../stage/balances/calls'
import * as testCalls from '../../test/balances/calls'


export const transfer = {
	name: 'Balances.transfer',
	v1: productionCalls.transfer['v1'],
	v33Stage: stageCalls.transfer['v33'],
	v33Test: testCalls.transfer['v33'],
}

export const setBalance = {
	name: 'Balances.set_balance',
	v1: productionCalls.setBalance['v1'],
	v33Stage: stageCalls.setBalance['v33'],
	v33Test: testCalls.setBalance['v33'],
}

export const forceTransfer = {
	name: 'Balances.force_transfer',
	v1: productionCalls.forceTransfer['v1'],
	v33Stage: stageCalls.forceTransfer['v33'],
	v33Test: testCalls.forceTransfer['v33'],
}

export const transferKeepAlive = {
	name: 'Balances.transfer_keep_alive',
	v1: productionCalls.transferKeepAlive['v1'],
	v33Stage: stageCalls.transferKeepAlive['v33'],
	v33Test: testCalls.transferKeepAlive['v33'],
}

export const transferAll = {
	name: 'Balances.transfer_all',
	v42: productionCalls.transferAll['v42'],
	v42Stage: stageCalls.transferAll['v42'],
	v42Test: testCalls.transferAll['v42'],
}

export const forceUnreserve = {
	name: 'Balances.force_unreserve',
	v42: productionCalls.forceUnreserve['v42'],
	v42Stage: stageCalls.forceUnreserve['v42'],
	v42Test: testCalls.forceUnreserve['v42'],
}
