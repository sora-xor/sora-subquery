import * as productionCalls from '../../production/ceres-launchpad/calls'
import * as stageCalls from '../../stage/ceres-launchpad/calls'
import * as testCalls from '../../test/ceres-launchpad/calls'
import * as devCalls from '../../dev/ceres-launchpad/calls'


export const createIlo = {
	name: 'CeresLaunchpad.create_ilo',
	v26: productionCalls.createIlo['v26'],
	v33: productionCalls.createIlo['v33'],
	v37: productionCalls.createIlo['v37'],
	v42: productionCalls.createIlo['v42'],
	v47: productionCalls.createIlo['v47'],
	v33Stage: stageCalls.createIlo['v33'],
	v37Stage: stageCalls.createIlo['v37'],
	v42Stage: stageCalls.createIlo['v42'],
	v47Stage: stageCalls.createIlo['v47'],
	v33Test: testCalls.createIlo['v33'],
	v37Test: testCalls.createIlo['v37'],
	v42Test: testCalls.createIlo['v42'],
	v47Test: testCalls.createIlo['v47'],
	v70Dev: devCalls.createIlo['v70'],
}

export const contribute = {
	name: 'CeresLaunchpad.contribute',
	v26: productionCalls.contribute['v26'],
	v42: productionCalls.contribute['v42'],
	v33Stage: stageCalls.contribute['v33'],
	v42Stage: stageCalls.contribute['v42'],
	v33Test: testCalls.contribute['v33'],
	v42Test: testCalls.contribute['v42'],
	v70Dev: devCalls.contribute['v70'],
}

export const emergencyWithdraw = {
	name: 'CeresLaunchpad.emergency_withdraw',
	v26: productionCalls.emergencyWithdraw['v26'],
	v42: productionCalls.emergencyWithdraw['v42'],
	v33Stage: stageCalls.emergencyWithdraw['v33'],
	v42Stage: stageCalls.emergencyWithdraw['v42'],
	v33Test: testCalls.emergencyWithdraw['v33'],
	v42Test: testCalls.emergencyWithdraw['v42'],
	v70Dev: devCalls.emergencyWithdraw['v70'],
}

export const finishIlo = {
	name: 'CeresLaunchpad.finish_ilo',
	v26: productionCalls.finishIlo['v26'],
	v42: productionCalls.finishIlo['v42'],
	v33Stage: stageCalls.finishIlo['v33'],
	v42Stage: stageCalls.finishIlo['v42'],
	v33Test: testCalls.finishIlo['v33'],
	v42Test: testCalls.finishIlo['v42'],
	v70Dev: devCalls.finishIlo['v70'],
}

export const claimLpTokens = {
	name: 'CeresLaunchpad.claim_lp_tokens',
	v26: productionCalls.claimLpTokens['v26'],
	v42: productionCalls.claimLpTokens['v42'],
	v33Stage: stageCalls.claimLpTokens['v33'],
	v42Stage: stageCalls.claimLpTokens['v42'],
	v33Test: testCalls.claimLpTokens['v33'],
	v42Test: testCalls.claimLpTokens['v42'],
	v70Dev: devCalls.claimLpTokens['v70'],
}

export const claim = {
	name: 'CeresLaunchpad.claim',
	v26: productionCalls.claim['v26'],
	v42: productionCalls.claim['v42'],
	v33Stage: stageCalls.claim['v33'],
	v42Stage: stageCalls.claim['v42'],
	v33Test: testCalls.claim['v33'],
	v42Test: testCalls.claim['v42'],
	v70Dev: devCalls.claim['v70'],
}

export const changeCeresBurnFee = {
	name: 'CeresLaunchpad.change_ceres_burn_fee',
	v26: productionCalls.changeCeresBurnFee['v26'],
	v33Stage: stageCalls.changeCeresBurnFee['v33'],
	v33Test: testCalls.changeCeresBurnFee['v33'],
	v70Dev: devCalls.changeCeresBurnFee['v70'],
}

export const changeCeresContributionFee = {
	name: 'CeresLaunchpad.change_ceres_contribution_fee',
	v26: productionCalls.changeCeresContributionFee['v26'],
	v33Stage: stageCalls.changeCeresContributionFee['v33'],
	v33Test: testCalls.changeCeresContributionFee['v33'],
	v70Dev: devCalls.changeCeresContributionFee['v70'],
}

export const claimPswapRewards = {
	name: 'CeresLaunchpad.claim_pswap_rewards',
	v26: productionCalls.claimPswapRewards['v26'],
	v33Stage: stageCalls.claimPswapRewards['v33'],
	v33Test: testCalls.claimPswapRewards['v33'],
	v70Dev: devCalls.claimPswapRewards['v70'],
}

export const addWhitelistedContributor = {
	name: 'CeresLaunchpad.add_whitelisted_contributor',
	v33: productionCalls.addWhitelistedContributor['v33'],
	v33Stage: stageCalls.addWhitelistedContributor['v33'],
	v33Test: testCalls.addWhitelistedContributor['v33'],
	v70Dev: devCalls.addWhitelistedContributor['v70'],
}

export const removeWhitelistedContributor = {
	name: 'CeresLaunchpad.remove_whitelisted_contributor',
	v33: productionCalls.removeWhitelistedContributor['v33'],
	v33Stage: stageCalls.removeWhitelistedContributor['v33'],
	v33Test: testCalls.removeWhitelistedContributor['v33'],
	v70Dev: devCalls.removeWhitelistedContributor['v70'],
}

export const addWhitelistedIloOrganizer = {
	name: 'CeresLaunchpad.add_whitelisted_ilo_organizer',
	v33: productionCalls.addWhitelistedIloOrganizer['v33'],
	v33Stage: stageCalls.addWhitelistedIloOrganizer['v33'],
	v33Test: testCalls.addWhitelistedIloOrganizer['v33'],
	v70Dev: devCalls.addWhitelistedIloOrganizer['v70'],
}

export const removeWhitelistedIloOrganizer = {
	name: 'CeresLaunchpad.remove_whitelisted_ilo_organizer',
	v33: productionCalls.removeWhitelistedIloOrganizer['v33'],
	v33Stage: stageCalls.removeWhitelistedIloOrganizer['v33'],
	v33Test: testCalls.removeWhitelistedIloOrganizer['v33'],
	v70Dev: devCalls.removeWhitelistedIloOrganizer['v70'],
}

export const changeFeePercentForRaisedFunds = {
	name: 'CeresLaunchpad.change_fee_percent_for_raised_funds',
	v47: productionCalls.changeFeePercentForRaisedFunds['v47'],
	v47Stage: stageCalls.changeFeePercentForRaisedFunds['v47'],
	v47Test: testCalls.changeFeePercentForRaisedFunds['v47'],
	v70Dev: devCalls.changeFeePercentForRaisedFunds['v70'],
}
