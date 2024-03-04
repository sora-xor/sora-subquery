import * as productionCalls from '../../production/rewards/calls'
import * as stageCalls from '../../stage/rewards/calls'
import * as testCalls from '../../test/rewards/calls'
import * as devCalls from '../../dev/rewards/calls'


export const claim = {
	name: 'Rewards.claim',
	v1: productionCalls.claim['v1'],
	v33Stage: stageCalls.claim['v33'],
	v33Test: testCalls.claim['v33'],
	v70Dev: devCalls.claim['v70'],
}

export const finalizeStorageMigration = {
	name: 'Rewards.finalize_storage_migration',
	v19: productionCalls.finalizeStorageMigration['v19'],
	v33Stage: stageCalls.finalizeStorageMigration['v33'],
	v33Test: testCalls.finalizeStorageMigration['v33'],
}

export const addUmiNftReceivers = {
	name: 'Rewards.add_umi_nft_receivers',
	v33: productionCalls.addUmiNftReceivers['v33'],
	v33Stage: stageCalls.addUmiNftReceivers['v33'],
	v33Test: testCalls.addUmiNftReceivers['v33'],
	v70Dev: devCalls.addUmiNftReceivers['v70'],
}
