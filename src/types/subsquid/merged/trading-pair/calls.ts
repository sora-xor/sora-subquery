import * as productionCalls from '../../production/trading-pair/calls'
import * as stageCalls from '../../stage/trading-pair/calls'
import * as testCalls from '../../test/trading-pair/calls'
import * as devCalls from '../../dev/trading-pair/calls'


export const register = {
	name: 'TradingPair.register',
	v1: productionCalls.register['v1'],
	v42: productionCalls.register['v42'],
	v33Stage: stageCalls.register['v33'],
	v42Stage: stageCalls.register['v42'],
	v33Test: testCalls.register['v33'],
	v42Test: testCalls.register['v42'],
	v70Dev: devCalls.register['v70'],
}
