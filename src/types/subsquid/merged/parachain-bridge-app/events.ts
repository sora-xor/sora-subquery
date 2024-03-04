import * as productionEvents from '../../production/parachain-bridge-app/events'
import * as stageEvents from '../../stage/parachain-bridge-app/events'
import * as testEvents from '../../test/parachain-bridge-app/events'
import * as devEvents from '../../dev/parachain-bridge-app/events'


export const burned = {
	name: 'ParachainBridgeApp.Burned',
	v64: productionEvents.burned['v64'],
	v70: productionEvents.burned['v70'],
	v64Stage: stageEvents.burned['v64'],
	v70Stage: stageEvents.burned['v70'],
	v64Test: testEvents.burned['v64'],
	v70Test: testEvents.burned['v70'],
	v70Dev: devEvents.burned['v70'],
}

export const minted = {
	name: 'ParachainBridgeApp.Minted',
	v64: productionEvents.minted['v64'],
	v70: productionEvents.minted['v70'],
	v64Stage: stageEvents.minted['v64'],
	v70Stage: stageEvents.minted['v70'],
	v64Test: testEvents.minted['v64'],
	v70Test: testEvents.minted['v70'],
	v70Dev: devEvents.minted['v70'],
}
