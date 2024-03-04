import * as productionCalls from '../../production/oracle-proxy/calls'
import * as stageCalls from '../../stage/oracle-proxy/calls'
import * as testCalls from '../../test/oracle-proxy/calls'
import * as devCalls from '../../dev/oracle-proxy/calls'


export const enableOracle = {
	name: 'OracleProxy.enable_oracle',
	v45: productionCalls.enableOracle['v45'],
	v45Stage: stageCalls.enableOracle['v45'],
	v45Test: testCalls.enableOracle['v45'],
	v70Dev: devCalls.enableOracle['v70'],
}

export const disableOracle = {
	name: 'OracleProxy.disable_oracle',
	v45: productionCalls.disableOracle['v45'],
	v45Stage: stageCalls.disableOracle['v45'],
	v45Test: testCalls.disableOracle['v45'],
	v70Dev: devCalls.disableOracle['v70'],
}
