import * as productionStorage from '../../production/offences/storage'
import * as stageStorage from '../../stage/offences/storage'
import * as testStorage from '../../test/offences/storage'
import * as devStorage from '../../dev/offences/storage'


export const reports = {
	name: 'Offences.Reports',
	v1: productionStorage.reports['v1'],
	v33Stage: stageStorage.reports['v33'],
	v33Test: testStorage.reports['v33'],
	v70Dev: devStorage.reports['v70'],
}

export const deferredOffences = {
	name: 'Offences.DeferredOffences',
	v1: productionStorage.deferredOffences['v1'],
	v33Stage: stageStorage.deferredOffences['v33'],
	v33Test: testStorage.deferredOffences['v33'],
}

export const concurrentReportsIndex = {
	name: 'Offences.ConcurrentReportsIndex',
	v1: productionStorage.concurrentReportsIndex['v1'],
	v33Stage: stageStorage.concurrentReportsIndex['v33'],
	v33Test: testStorage.concurrentReportsIndex['v33'],
	v70Dev: devStorage.concurrentReportsIndex['v70'],
}

export const reportsByKindIndex = {
	name: 'Offences.ReportsByKindIndex',
	v1: productionStorage.reportsByKindIndex['v1'],
	v33Stage: stageStorage.reportsByKindIndex['v33'],
	v33Test: testStorage.reportsByKindIndex['v33'],
	v70Dev: devStorage.reportsByKindIndex['v70'],
}
