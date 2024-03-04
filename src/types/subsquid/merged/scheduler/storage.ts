import * as productionStorage from '../../production/scheduler/storage'
import * as stageStorage from '../../stage/scheduler/storage'
import * as testStorage from '../../test/scheduler/storage'
import * as devStorage from '../../dev/scheduler/storage'


export const agenda = {
	name: 'Scheduler.Agenda',
	v1: productionStorage.agenda['v1'],
	v3: productionStorage.agenda['v3'],
	v7: productionStorage.agenda['v7'],
	v19: productionStorage.agenda['v19'],
	v22: productionStorage.agenda['v22'],
	v23: productionStorage.agenda['v23'],
	v26: productionStorage.agenda['v26'],
	v32: productionStorage.agenda['v32'],
	v33: productionStorage.agenda['v33'],
	v35: productionStorage.agenda['v35'],
	v37: productionStorage.agenda['v37'],
	v38: productionStorage.agenda['v38'],
	v42: productionStorage.agenda['v42'],
	v43: productionStorage.agenda['v43'],
	v45: productionStorage.agenda['v45'],
	v46: productionStorage.agenda['v46'],
	v47: productionStorage.agenda['v47'],
	v50: productionStorage.agenda['v50'],
	v53: productionStorage.agenda['v53'],
	v64: productionStorage.agenda['v64'],
	v70: productionStorage.agenda['v70'],
	v33Stage: stageStorage.agenda['v33'],
	v35Stage: stageStorage.agenda['v35'],
	v37Stage: stageStorage.agenda['v37'],
	v38Stage: stageStorage.agenda['v38'],
	v42Stage: stageStorage.agenda['v42'],
	v43Stage: stageStorage.agenda['v43'],
	v44Stage: stageStorage.agenda['v44'],
	v45Stage: stageStorage.agenda['v45'],
	v46Stage: stageStorage.agenda['v46'],
	v47Stage: stageStorage.agenda['v47'],
	v48Stage: stageStorage.agenda['v48'],
	v52Stage: stageStorage.agenda['v52'],
	v54Stage: stageStorage.agenda['v54'],
	v64Stage: stageStorage.agenda['v64'],
	v70Stage: stageStorage.agenda['v70'],
	v33Test: testStorage.agenda['v33'],
	v35Test: testStorage.agenda['v35'],
	v37Test: testStorage.agenda['v37'],
	v38Test: testStorage.agenda['v38'],
	v42Test: testStorage.agenda['v42'],
	v43Test: testStorage.agenda['v43'],
	v44Test: testStorage.agenda['v44'],
	v45Test: testStorage.agenda['v45'],
	v46Test: testStorage.agenda['v46'],
	v47Test: testStorage.agenda['v47'],
	v48Test: testStorage.agenda['v48'],
	v52Test: testStorage.agenda['v52'],
	v54Test: testStorage.agenda['v54'],
	v64Test: testStorage.agenda['v64'],
	v70Test: testStorage.agenda['v70'],
	v70Dev: devStorage.agenda['v70'],
}

export const lookup = {
	name: 'Scheduler.Lookup',
	v1: productionStorage.lookup['v1'],
	v33Stage: stageStorage.lookup['v33'],
	v33Test: testStorage.lookup['v33'],
	v70Dev: devStorage.lookup['v70'],
}

export const storageVersion = {
	name: 'Scheduler.StorageVersion',
	v1: productionStorage.storageVersion['v1'],
	v33Stage: stageStorage.storageVersion['v33'],
	v33Test: testStorage.storageVersion['v33'],
}

export const incompleteSince = {
	name: 'Scheduler.IncompleteSince',
	v53: productionStorage.incompleteSince['v53'],
	v52Stage: stageStorage.incompleteSince['v52'],
	v52Test: testStorage.incompleteSince['v52'],
	v70Dev: devStorage.incompleteSince['v70'],
}
