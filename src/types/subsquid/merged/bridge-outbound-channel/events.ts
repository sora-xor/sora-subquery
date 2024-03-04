import * as stageEvents from '../../stage/bridge-outbound-channel/events'
import * as testEvents from '../../test/bridge-outbound-channel/events'
import * as devEvents from '../../dev/bridge-outbound-channel/events'


export const messageAccepted = {
	name: 'BridgeOutboundChannel.MessageAccepted',
	v52Stage: stageEvents.messageAccepted['v52'],
	v55Stage: stageEvents.messageAccepted['v55'],
	v52Test: testEvents.messageAccepted['v52'],
	v55Test: testEvents.messageAccepted['v55'],
	v70Dev: devEvents.messageAccepted['v70'],
}
