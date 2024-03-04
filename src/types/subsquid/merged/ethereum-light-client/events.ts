import * as stageEvents from '../../stage/ethereum-light-client/events'
import * as testEvents from '../../test/ethereum-light-client/events'
import * as devEvents from '../../dev/ethereum-light-client/events'


export const finalized = {
	name: 'EthereumLightClient.Finalized',
	v52Stage: stageEvents.finalized['v52'],
	v52Test: testEvents.finalized['v52'],
	v70Dev: devEvents.finalized['v70'],
}
