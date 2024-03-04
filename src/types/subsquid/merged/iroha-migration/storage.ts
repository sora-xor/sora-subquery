import * as productionStorage from '../../production/iroha-migration/storage'
import * as stageStorage from '../../stage/iroha-migration/storage'
import * as testStorage from '../../test/iroha-migration/storage'
import * as devStorage from '../../dev/iroha-migration/storage'


export const balances = {
	name: 'IrohaMigration.Balances',
	v1: productionStorage.balances['v1'],
	v42: productionStorage.balances['v42'],
	v33Stage: stageStorage.balances['v33'],
	v42Stage: stageStorage.balances['v42'],
	v33Test: testStorage.balances['v33'],
	v42Test: testStorage.balances['v42'],
	v70Dev: devStorage.balances['v70'],
}

export const referrers = {
	name: 'IrohaMigration.Referrers',
	v1: productionStorage.referrers['v1'],
	v42: productionStorage.referrers['v42'],
	v33Stage: stageStorage.referrers['v33'],
	v42Stage: stageStorage.referrers['v42'],
	v33Test: testStorage.referrers['v33'],
	v42Test: testStorage.referrers['v42'],
	v70Dev: devStorage.referrers['v70'],
}

export const publicKeys = {
	name: 'IrohaMigration.PublicKeys',
	v1: productionStorage.publicKeys['v1'],
	v42: productionStorage.publicKeys['v42'],
	v33Stage: stageStorage.publicKeys['v33'],
	v42Stage: stageStorage.publicKeys['v42'],
	v33Test: testStorage.publicKeys['v33'],
	v42Test: testStorage.publicKeys['v42'],
	v70Dev: devStorage.publicKeys['v70'],
}

export const quorums = {
	name: 'IrohaMigration.Quorums',
	v1: productionStorage.quorums['v1'],
	v42: productionStorage.quorums['v42'],
	v33Stage: stageStorage.quorums['v33'],
	v42Stage: stageStorage.quorums['v42'],
	v33Test: testStorage.quorums['v33'],
	v42Test: testStorage.quorums['v42'],
	v70Dev: devStorage.quorums['v70'],
}

export const account = {
	name: 'IrohaMigration.Account',
	v1: productionStorage.account['v1'],
	v42: productionStorage.account['v42'],
	v33Stage: stageStorage.account['v33'],
	v42Stage: stageStorage.account['v42'],
	v33Test: testStorage.account['v33'],
	v42Test: testStorage.account['v42'],
	v70Dev: devStorage.account['v70'],
}

export const migratedAccounts = {
	name: 'IrohaMigration.MigratedAccounts',
	v1: productionStorage.migratedAccounts['v1'],
	v42: productionStorage.migratedAccounts['v42'],
	v33Stage: stageStorage.migratedAccounts['v33'],
	v42Stage: stageStorage.migratedAccounts['v42'],
	v33Test: testStorage.migratedAccounts['v33'],
	v42Test: testStorage.migratedAccounts['v42'],
	v70Dev: devStorage.migratedAccounts['v70'],
}

export const pendingMultiSigAccounts = {
	name: 'IrohaMigration.PendingMultiSigAccounts',
	v1: productionStorage.pendingMultiSigAccounts['v1'],
	v42: productionStorage.pendingMultiSigAccounts['v42'],
	v33Stage: stageStorage.pendingMultiSigAccounts['v33'],
	v42Stage: stageStorage.pendingMultiSigAccounts['v42'],
	v33Test: testStorage.pendingMultiSigAccounts['v33'],
	v42Test: testStorage.pendingMultiSigAccounts['v42'],
	v70Dev: devStorage.pendingMultiSigAccounts['v70'],
}

export const pendingReferrals = {
	name: 'IrohaMigration.PendingReferrals',
	v1: productionStorage.pendingReferrals['v1'],
	v42: productionStorage.pendingReferrals['v42'],
	v33Stage: stageStorage.pendingReferrals['v33'],
	v42Stage: stageStorage.pendingReferrals['v42'],
	v33Test: testStorage.pendingReferrals['v33'],
	v42Test: testStorage.pendingReferrals['v42'],
	v70Dev: devStorage.pendingReferrals['v70'],
}
