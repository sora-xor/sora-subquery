import * as productionEvents from '../../production/substrate-bridge-outbound-channel/events'
import * as stageEvents from '../../stage/substrate-bridge-outbound-channel/events'
import * as testEvents from '../../test/substrate-bridge-outbound-channel/events'
import * as devEvents from '../../dev/substrate-bridge-outbound-channel/events'


export const messageAccepted = {
	name: 'SubstrateBridgeOutboundChannel.MessageAccepted',
	v64: productionEvents.messageAccepted['v64'],
	v70: productionEvents.messageAccepted['v70'],
	v52Stage: stageEvents.messageAccepted['v52'],
	v57Stage: stageEvents.messageAccepted['v57'],
	v70Stage: stageEvents.messageAccepted['v70'],
	v52Test: testEvents.messageAccepted['v52'],
	v57Test: testEvents.messageAccepted['v57'],
	v70Test: testEvents.messageAccepted['v70'],
	v70Dev: devEvents.messageAccepted['v70'],
}
