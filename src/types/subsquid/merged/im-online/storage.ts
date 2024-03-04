import * as productionStorage from '../../production/im-online/storage'
import * as stageStorage from '../../stage/im-online/storage'
import * as testStorage from '../../test/im-online/storage'
import * as devStorage from '../../dev/im-online/storage'


export const heartbeatAfter = {
	name: 'ImOnline.HeartbeatAfter',
	v1: productionStorage.heartbeatAfter['v1'],
	v33Stage: stageStorage.heartbeatAfter['v33'],
	v33Test: testStorage.heartbeatAfter['v33'],
	v70Dev: devStorage.heartbeatAfter['v70'],
}

export const keys = {
	name: 'ImOnline.Keys',
	v1: productionStorage.keys['v1'],
	v33Stage: stageStorage.keys['v33'],
	v33Test: testStorage.keys['v33'],
	v70Dev: devStorage.keys['v70'],
}

export const receivedHeartbeats = {
	name: 'ImOnline.ReceivedHeartbeats',
	v1: productionStorage.receivedHeartbeats['v1'],
	v42: productionStorage.receivedHeartbeats['v42'],
	v33Stage: stageStorage.receivedHeartbeats['v33'],
	v42Stage: stageStorage.receivedHeartbeats['v42'],
	v33Test: testStorage.receivedHeartbeats['v33'],
	v42Test: testStorage.receivedHeartbeats['v42'],
	v70Dev: devStorage.receivedHeartbeats['v70'],
}

export const authoredBlocks = {
	name: 'ImOnline.AuthoredBlocks',
	v1: productionStorage.authoredBlocks['v1'],
	v33Stage: stageStorage.authoredBlocks['v33'],
	v33Test: testStorage.authoredBlocks['v33'],
	v70Dev: devStorage.authoredBlocks['v70'],
}
