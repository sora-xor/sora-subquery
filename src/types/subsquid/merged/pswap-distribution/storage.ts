import * as productionStorage from '../../production/pswap-distribution/storage'
import * as stageStorage from '../../stage/pswap-distribution/storage'
import * as testStorage from '../../test/pswap-distribution/storage'
import * as devStorage from '../../dev/pswap-distribution/storage'


export const subscribedAccounts = {
	name: 'PswapDistribution.SubscribedAccounts',
	v1: productionStorage.subscribedAccounts['v1'],
	v33Stage: stageStorage.subscribedAccounts['v33'],
	v33Test: testStorage.subscribedAccounts['v33'],
	v70Dev: devStorage.subscribedAccounts['v70'],
}

export const burnRate = {
	name: 'PswapDistribution.BurnRate',
	v1: productionStorage.burnRate['v1'],
	v42: productionStorage.burnRate['v42'],
	v33Stage: stageStorage.burnRate['v33'],
	v42Stage: stageStorage.burnRate['v42'],
	v33Test: testStorage.burnRate['v33'],
	v42Test: testStorage.burnRate['v42'],
	v70Dev: devStorage.burnRate['v70'],
}

export const burnUpdateInfo = {
	name: 'PswapDistribution.BurnUpdateInfo',
	v1: productionStorage.burnUpdateInfo['v1'],
	v42: productionStorage.burnUpdateInfo['v42'],
	v33Stage: stageStorage.burnUpdateInfo['v33'],
	v42Stage: stageStorage.burnUpdateInfo['v42'],
	v33Test: testStorage.burnUpdateInfo['v33'],
	v42Test: testStorage.burnUpdateInfo['v42'],
	v70Dev: devStorage.burnUpdateInfo['v70'],
}

export const shareholderAccounts = {
	name: 'PswapDistribution.ShareholderAccounts',
	v1: productionStorage.shareholderAccounts['v1'],
	v42: productionStorage.shareholderAccounts['v42'],
	v33Stage: stageStorage.shareholderAccounts['v33'],
	v42Stage: stageStorage.shareholderAccounts['v42'],
	v33Test: testStorage.shareholderAccounts['v33'],
	v42Test: testStorage.shareholderAccounts['v42'],
	v70Dev: devStorage.shareholderAccounts['v70'],
}

export const claimableShares = {
	name: 'PswapDistribution.ClaimableShares',
	v1: productionStorage.claimableShares['v1'],
	v42: productionStorage.claimableShares['v42'],
	v33Stage: stageStorage.claimableShares['v33'],
	v42Stage: stageStorage.claimableShares['v42'],
	v33Test: testStorage.claimableShares['v33'],
	v42Test: testStorage.claimableShares['v42'],
	v70Dev: devStorage.claimableShares['v70'],
}

export const parliamentPswapFraction = {
	name: 'PswapDistribution.ParliamentPswapFraction',
	v1: productionStorage.parliamentPswapFraction['v1'],
	v42: productionStorage.parliamentPswapFraction['v42'],
	v33Stage: stageStorage.parliamentPswapFraction['v33'],
	v42Stage: stageStorage.parliamentPswapFraction['v42'],
	v33Test: testStorage.parliamentPswapFraction['v33'],
	v42Test: testStorage.parliamentPswapFraction['v42'],
}

export const buyBackXstFraction = {
	name: 'PswapDistribution.BuyBackXstFraction',
	v53: productionStorage.buyBackXstFraction['v53'],
	v52Stage: stageStorage.buyBackXstFraction['v52'],
	v52Test: testStorage.buyBackXstFraction['v52'],
}

export const buyBackTbcdFraction = {
	name: 'PswapDistribution.BuyBackTbcdFraction',
	v68: productionStorage.buyBackTbcdFraction['v68'],
	v67Stage: stageStorage.buyBackTbcdFraction['v67'],
	v67Test: testStorage.buyBackTbcdFraction['v67'],
	v70Dev: devStorage.buyBackTbcdFraction['v70'],
}
