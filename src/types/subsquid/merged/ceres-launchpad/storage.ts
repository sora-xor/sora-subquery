import * as productionStorage from '../../production/ceres-launchpad/storage'
import * as stageStorage from '../../stage/ceres-launchpad/storage'
import * as testStorage from '../../test/ceres-launchpad/storage'
import * as devStorage from '../../dev/ceres-launchpad/storage'


export const penaltiesAccount = {
	name: 'CeresLaunchpad.PenaltiesAccount',
	v26: productionStorage.penaltiesAccount['v26'],
	v33Stage: stageStorage.penaltiesAccount['v33'],
	v33Test: testStorage.penaltiesAccount['v33'],
	v70Dev: devStorage.penaltiesAccount['v70'],
}

export const ceresBurnFeeAmount = {
	name: 'CeresLaunchpad.CeresBurnFeeAmount',
	v26: productionStorage.ceresBurnFeeAmount['v26'],
	v33Stage: stageStorage.ceresBurnFeeAmount['v33'],
	v33Test: testStorage.ceresBurnFeeAmount['v33'],
	v70Dev: devStorage.ceresBurnFeeAmount['v70'],
}

export const ceresForContributionInIlo = {
	name: 'CeresLaunchpad.CeresForContributionInIlo',
	v26: productionStorage.ceresForContributionInIlo['v26'],
	v33Stage: stageStorage.ceresForContributionInIlo['v33'],
	v33Test: testStorage.ceresForContributionInIlo['v33'],
	v70Dev: devStorage.ceresForContributionInIlo['v70'],
}

export const authorityAccount = {
	name: 'CeresLaunchpad.AuthorityAccount',
	v26: productionStorage.authorityAccount['v26'],
	v33Stage: stageStorage.authorityAccount['v33'],
	v33Test: testStorage.authorityAccount['v33'],
	v70Dev: devStorage.authorityAccount['v70'],
}

export const ilOs = {
	name: 'CeresLaunchpad.IlOs',
	v26: productionStorage.ilOs['v26'],
	v33: productionStorage.ilOs['v33'],
	v37: productionStorage.ilOs['v37'],
	v42: productionStorage.ilOs['v42'],
	v47: productionStorage.ilOs['v47'],
	v33Stage: stageStorage.ilOs['v33'],
	v37Stage: stageStorage.ilOs['v37'],
	v42Stage: stageStorage.ilOs['v42'],
	v47Stage: stageStorage.ilOs['v47'],
	v33Test: testStorage.ilOs['v33'],
	v37Test: testStorage.ilOs['v37'],
	v42Test: testStorage.ilOs['v42'],
	v47Test: testStorage.ilOs['v47'],
	v70Dev: devStorage.ilOs['v70'],
}

export const contributions = {
	name: 'CeresLaunchpad.Contributions',
	v26: productionStorage.contributions['v26'],
	v42: productionStorage.contributions['v42'],
	v33Stage: stageStorage.contributions['v33'],
	v42Stage: stageStorage.contributions['v42'],
	v33Test: testStorage.contributions['v33'],
	v42Test: testStorage.contributions['v42'],
	v70Dev: devStorage.contributions['v70'],
}

export const whitelistedContributors = {
	name: 'CeresLaunchpad.WhitelistedContributors',
	v33: productionStorage.whitelistedContributors['v33'],
	v33Stage: stageStorage.whitelistedContributors['v33'],
	v33Test: testStorage.whitelistedContributors['v33'],
	v70Dev: devStorage.whitelistedContributors['v70'],
}

export const whitelistedIloOrganizers = {
	name: 'CeresLaunchpad.WhitelistedIloOrganizers',
	v33: productionStorage.whitelistedIloOrganizers['v33'],
	v33Stage: stageStorage.whitelistedIloOrganizers['v33'],
	v33Test: testStorage.whitelistedIloOrganizers['v33'],
	v70Dev: devStorage.whitelistedIloOrganizers['v70'],
}

export const feePercentOnRaisedFunds = {
	name: 'CeresLaunchpad.FeePercentOnRaisedFunds',
	v47: productionStorage.feePercentOnRaisedFunds['v47'],
	v47Stage: stageStorage.feePercentOnRaisedFunds['v47'],
	v47Test: testStorage.feePercentOnRaisedFunds['v47'],
	v70Dev: devStorage.feePercentOnRaisedFunds['v70'],
}
