import * as productionStorage from '../../production/referrals/storage'
import * as stageStorage from '../../stage/referrals/storage'
import * as testStorage from '../../test/referrals/storage'
import * as devStorage from '../../dev/referrals/storage'


export const referrers = {
	name: 'Referrals.Referrers',
	v22: productionStorage.referrers['v22'],
	v33Stage: stageStorage.referrers['v33'],
	v33Test: testStorage.referrers['v33'],
	v70Dev: devStorage.referrers['v70'],
}

export const referrerBalances = {
	name: 'Referrals.ReferrerBalances',
	v22: productionStorage.referrerBalances['v22'],
	v33Stage: stageStorage.referrerBalances['v33'],
	v33Test: testStorage.referrerBalances['v33'],
	v70Dev: devStorage.referrerBalances['v70'],
}

export const referrals = {
	name: 'Referrals.Referrals',
	v22: productionStorage.referrals['v22'],
	v33Stage: stageStorage.referrals['v33'],
	v33Test: testStorage.referrals['v33'],
	v70Dev: devStorage.referrals['v70'],
}
