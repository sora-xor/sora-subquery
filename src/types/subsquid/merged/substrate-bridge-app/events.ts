import * as stageEvents from '../../stage/substrate-bridge-app/events'
import * as testEvents from '../../test/substrate-bridge-app/events'


export const burned = {
	name: 'SubstrateBridgeApp.Burned',
	v52Stage: stageEvents.burned['v52'],
	v52Test: testEvents.burned['v52'],
}

export const minted = {
	name: 'SubstrateBridgeApp.Minted',
	v52Stage: stageEvents.minted['v52'],
	v52Test: testEvents.minted['v52'],
}
