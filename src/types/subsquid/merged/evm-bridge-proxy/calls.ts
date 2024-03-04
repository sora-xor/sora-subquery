import * as stageCalls from '../../stage/evm-bridge-proxy/calls'
import * as testCalls from '../../test/evm-bridge-proxy/calls'


export const burn = {
	name: 'EvmBridgeProxy.burn',
	v52Stage: stageCalls.burn['v52'],
	v52Test: testCalls.burn['v52'],
}
