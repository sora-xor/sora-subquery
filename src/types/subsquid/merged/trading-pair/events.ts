import * as productionEvents from '../../production/trading-pair/events'
import * as stageEvents from '../../stage/trading-pair/events'
import * as testEvents from '../../test/trading-pair/events'
import * as devEvents from '../../dev/trading-pair/events'


export const tradingPairStored = {
	name: 'TradingPair.TradingPairStored',
	v1: productionEvents.tradingPairStored['v1'],
	v42: productionEvents.tradingPairStored['v42'],
	v33Stage: stageEvents.tradingPairStored['v33'],
	v42Stage: stageEvents.tradingPairStored['v42'],
	v33Test: testEvents.tradingPairStored['v33'],
	v42Test: testEvents.tradingPairStored['v42'],
	v70Dev: devEvents.tradingPairStored['v70'],
}
