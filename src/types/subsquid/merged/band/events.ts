import * as productionEvents from '../../production/band/events'
import * as stageEvents from '../../stage/band/events'
import * as testEvents from '../../test/band/events'
import * as devEvents from '../../dev/band/events'


export const symbolsRelayed = {
	name: 'Band.SymbolsRelayed',
	v45: productionEvents.symbolsRelayed['v45'],
	v57: productionEvents.symbolsRelayed['v57'],
	v44Stage: stageEvents.symbolsRelayed['v44'],
	v45Stage: stageEvents.symbolsRelayed['v45'],
	v54Stage: stageEvents.symbolsRelayed['v54'],
	v44Test: testEvents.symbolsRelayed['v44'],
	v45Test: testEvents.symbolsRelayed['v45'],
	v54Test: testEvents.symbolsRelayed['v54'],
	v70Dev: devEvents.symbolsRelayed['v70'],
}

export const relayersAdded = {
	name: 'Band.RelayersAdded',
	v45: productionEvents.relayersAdded['v45'],
	v44Stage: stageEvents.relayersAdded['v44'],
	v44Test: testEvents.relayersAdded['v44'],
	v70Dev: devEvents.relayersAdded['v70'],
}

export const relayersRemoved = {
	name: 'Band.RelayersRemoved',
	v45: productionEvents.relayersRemoved['v45'],
	v44Stage: stageEvents.relayersRemoved['v44'],
	v44Test: testEvents.relayersRemoved['v44'],
	v70Dev: devEvents.relayersRemoved['v70'],
}
