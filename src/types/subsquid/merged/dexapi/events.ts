import * as productionEvents from '../../production/dexapi/events'
import * as stageEvents from '../../stage/dexapi/events'
import * as testEvents from '../../test/dexapi/events'
import * as devEvents from '../../dev/dexapi/events'


export const directExchange = {
	name: 'DEXAPI.DirectExchange',
	v1: productionEvents.directExchange['v1'],
}

export const liquiditySourceEnabled = {
	name: 'DEXAPI.LiquiditySourceEnabled',
	v70: productionEvents.liquiditySourceEnabled['v70'],
	v69Stage: stageEvents.liquiditySourceEnabled['v69'],
	v69Test: testEvents.liquiditySourceEnabled['v69'],
	v70Dev: devEvents.liquiditySourceEnabled['v70'],
}

export const liquiditySourceDisabled = {
	name: 'DEXAPI.LiquiditySourceDisabled',
	v70: productionEvents.liquiditySourceDisabled['v70'],
	v69Stage: stageEvents.liquiditySourceDisabled['v69'],
	v69Test: testEvents.liquiditySourceDisabled['v69'],
	v70Dev: devEvents.liquiditySourceDisabled['v70'],
}
