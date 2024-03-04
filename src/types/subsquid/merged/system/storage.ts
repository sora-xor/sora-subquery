import * as productionStorage from '../../production/system/storage'
import * as stageStorage from '../../stage/system/storage'
import * as testStorage from '../../test/system/storage'
import * as devStorage from '../../dev/system/storage'


export const account = {
	name: 'System.Account',
	v1: productionStorage.account['v1'],
	v42: productionStorage.account['v42'],
	v33Stage: stageStorage.account['v33'],
	v42Stage: stageStorage.account['v42'],
	v33Test: testStorage.account['v33'],
	v42Test: testStorage.account['v42'],
	v70Dev: devStorage.account['v70'],
}

export const extrinsicCount = {
	name: 'System.ExtrinsicCount',
	v1: productionStorage.extrinsicCount['v1'],
	v33Stage: stageStorage.extrinsicCount['v33'],
	v33Test: testStorage.extrinsicCount['v33'],
	v70Dev: devStorage.extrinsicCount['v70'],
}

export const blockWeight = {
	name: 'System.BlockWeight',
	v1: productionStorage.blockWeight['v1'],
	v53: productionStorage.blockWeight['v53'],
	v33Stage: stageStorage.blockWeight['v33'],
	v52Stage: stageStorage.blockWeight['v52'],
	v33Test: testStorage.blockWeight['v33'],
	v52Test: testStorage.blockWeight['v52'],
	v70Dev: devStorage.blockWeight['v70'],
}

export const allExtrinsicsLen = {
	name: 'System.AllExtrinsicsLen',
	v1: productionStorage.allExtrinsicsLen['v1'],
	v33Stage: stageStorage.allExtrinsicsLen['v33'],
	v33Test: testStorage.allExtrinsicsLen['v33'],
	v70Dev: devStorage.allExtrinsicsLen['v70'],
}

export const blockHash = {
	name: 'System.BlockHash',
	v1: productionStorage.blockHash['v1'],
	v33Stage: stageStorage.blockHash['v33'],
	v33Test: testStorage.blockHash['v33'],
	v70Dev: devStorage.blockHash['v70'],
}

export const extrinsicData = {
	name: 'System.ExtrinsicData',
	v1: productionStorage.extrinsicData['v1'],
	v33Stage: stageStorage.extrinsicData['v33'],
	v33Test: testStorage.extrinsicData['v33'],
	v70Dev: devStorage.extrinsicData['v70'],
}

export const number = {
	name: 'System.Number',
	v1: productionStorage.number['v1'],
	v33Stage: stageStorage.number['v33'],
	v33Test: testStorage.number['v33'],
	v70Dev: devStorage.number['v70'],
}

export const parentHash = {
	name: 'System.ParentHash',
	v1: productionStorage.parentHash['v1'],
	v33Stage: stageStorage.parentHash['v33'],
	v33Test: testStorage.parentHash['v33'],
	v70Dev: devStorage.parentHash['v70'],
}

export const digest = {
	name: 'System.Digest',
	v1: productionStorage.digest['v1'],
	v42: productionStorage.digest['v42'],
	v33Stage: stageStorage.digest['v33'],
	v42Stage: stageStorage.digest['v42'],
	v33Test: testStorage.digest['v33'],
	v42Test: testStorage.digest['v42'],
	v70Dev: devStorage.digest['v70'],
}

export const events = {
	name: 'System.Events',
	v1: productionStorage.events['v1'],
	v3: productionStorage.events['v3'],
	v7: productionStorage.events['v7'],
	v8: productionStorage.events['v8'],
	v19: productionStorage.events['v19'],
	v22: productionStorage.events['v22'],
	v23: productionStorage.events['v23'],
	v26: productionStorage.events['v26'],
	v33: productionStorage.events['v33'],
	v35: productionStorage.events['v35'],
	v37: productionStorage.events['v37'],
	v38: productionStorage.events['v38'],
	v42: productionStorage.events['v42'],
	v43: productionStorage.events['v43'],
	v45: productionStorage.events['v45'],
	v46: productionStorage.events['v46'],
	v47: productionStorage.events['v47'],
	v53: productionStorage.events['v53'],
	v57: productionStorage.events['v57'],
	v60: productionStorage.events['v60'],
	v64: productionStorage.events['v64'],
	v66: productionStorage.events['v66'],
	v68: productionStorage.events['v68'],
	v70: productionStorage.events['v70'],
	v33Stage: stageStorage.events['v33'],
	v35Stage: stageStorage.events['v35'],
	v37Stage: stageStorage.events['v37'],
	v38Stage: stageStorage.events['v38'],
	v42Stage: stageStorage.events['v42'],
	v43Stage: stageStorage.events['v43'],
	v44Stage: stageStorage.events['v44'],
	v45Stage: stageStorage.events['v45'],
	v46Stage: stageStorage.events['v46'],
	v47Stage: stageStorage.events['v47'],
	v52Stage: stageStorage.events['v52'],
	v54Stage: stageStorage.events['v54'],
	v55Stage: stageStorage.events['v55'],
	v57Stage: stageStorage.events['v57'],
	v59Stage: stageStorage.events['v59'],
	v60Stage: stageStorage.events['v60'],
	v64Stage: stageStorage.events['v64'],
	v66Stage: stageStorage.events['v66'],
	v67Stage: stageStorage.events['v67'],
	v69Stage: stageStorage.events['v69'],
	v70Stage: stageStorage.events['v70'],
	v33Test: testStorage.events['v33'],
	v35Test: testStorage.events['v35'],
	v37Test: testStorage.events['v37'],
	v38Test: testStorage.events['v38'],
	v42Test: testStorage.events['v42'],
	v43Test: testStorage.events['v43'],
	v44Test: testStorage.events['v44'],
	v45Test: testStorage.events['v45'],
	v46Test: testStorage.events['v46'],
	v47Test: testStorage.events['v47'],
	v52Test: testStorage.events['v52'],
	v54Test: testStorage.events['v54'],
	v55Test: testStorage.events['v55'],
	v57Test: testStorage.events['v57'],
	v59Test: testStorage.events['v59'],
	v60Test: testStorage.events['v60'],
	v64Test: testStorage.events['v64'],
	v66Test: testStorage.events['v66'],
	v67Test: testStorage.events['v67'],
	v69Test: testStorage.events['v69'],
	v70Test: testStorage.events['v70'],
	v70Dev: devStorage.events['v70'],
}

export const eventCount = {
	name: 'System.EventCount',
	v1: productionStorage.eventCount['v1'],
	v33Stage: stageStorage.eventCount['v33'],
	v33Test: testStorage.eventCount['v33'],
	v70Dev: devStorage.eventCount['v70'],
}

export const eventTopics = {
	name: 'System.EventTopics',
	v1: productionStorage.eventTopics['v1'],
	v33Stage: stageStorage.eventTopics['v33'],
	v33Test: testStorage.eventTopics['v33'],
	v70Dev: devStorage.eventTopics['v70'],
}

export const lastRuntimeUpgrade = {
	name: 'System.LastRuntimeUpgrade',
	v1: productionStorage.lastRuntimeUpgrade['v1'],
	v42: productionStorage.lastRuntimeUpgrade['v42'],
	v33Stage: stageStorage.lastRuntimeUpgrade['v33'],
	v42Stage: stageStorage.lastRuntimeUpgrade['v42'],
	v33Test: testStorage.lastRuntimeUpgrade['v33'],
	v42Test: testStorage.lastRuntimeUpgrade['v42'],
	v70Dev: devStorage.lastRuntimeUpgrade['v70'],
}

export const upgradedToU32RefCount = {
	name: 'System.UpgradedToU32RefCount',
	v1: productionStorage.upgradedToU32RefCount['v1'],
	v33Stage: stageStorage.upgradedToU32RefCount['v33'],
	v33Test: testStorage.upgradedToU32RefCount['v33'],
	v70Dev: devStorage.upgradedToU32RefCount['v70'],
}

export const upgradedToDualRefCount = {
	name: 'System.UpgradedToDualRefCount',
	v1: productionStorage.upgradedToDualRefCount['v1'],
	v33Stage: stageStorage.upgradedToDualRefCount['v33'],
	v33Test: testStorage.upgradedToDualRefCount['v33'],
}

export const executionPhase = {
	name: 'System.ExecutionPhase',
	v1: productionStorage.executionPhase['v1'],
	v33Stage: stageStorage.executionPhase['v33'],
	v33Test: testStorage.executionPhase['v33'],
	v70Dev: devStorage.executionPhase['v70'],
}

export const upgradedToTripleRefCount = {
	name: 'System.UpgradedToTripleRefCount',
	v42: productionStorage.upgradedToTripleRefCount['v42'],
	v42Stage: stageStorage.upgradedToTripleRefCount['v42'],
	v42Test: testStorage.upgradedToTripleRefCount['v42'],
	v70Dev: devStorage.upgradedToTripleRefCount['v70'],
}
