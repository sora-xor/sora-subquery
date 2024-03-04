import * as stageEvents from '../../stage/eth-app/events'
import * as testEvents from '../../test/eth-app/events'
import * as devEvents from '../../dev/eth-app/events'


export const burned = {
	name: 'EthApp.Burned',
	v52Stage: stageEvents.burned['v52'],
	v52Test: testEvents.burned['v52'],
	v70Dev: devEvents.burned['v70'],
}

export const minted = {
	name: 'EthApp.Minted',
	v52Stage: stageEvents.minted['v52'],
	v52Test: testEvents.minted['v52'],
	v70Dev: devEvents.minted['v70'],
}

export const refunded = {
	name: 'EthApp.Refunded',
	v52Stage: stageEvents.refunded['v52'],
	v52Test: testEvents.refunded['v52'],
	v70Dev: devEvents.refunded['v70'],
}
