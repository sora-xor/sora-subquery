import * as stageEvents from '../../stage/erc20-app/events'
import * as testEvents from '../../test/erc20-app/events'
import * as devEvents from '../../dev/erc20-app/events'


export const burned = {
	name: 'ERC20App.Burned',
	v52Stage: stageEvents.burned['v52'],
	v52Test: testEvents.burned['v52'],
	v70Dev: devEvents.burned['v70'],
}

export const minted = {
	name: 'ERC20App.Minted',
	v52Stage: stageEvents.minted['v52'],
	v52Test: testEvents.minted['v52'],
	v70Dev: devEvents.minted['v70'],
}

export const refunded = {
	name: 'ERC20App.Refunded',
	v52Stage: stageEvents.refunded['v52'],
	v52Test: testEvents.refunded['v52'],
	v70Dev: devEvents.refunded['v70'],
}
