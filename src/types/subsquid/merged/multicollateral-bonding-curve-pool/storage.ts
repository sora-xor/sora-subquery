import * as productionStorage from '../../production/multicollateral-bonding-curve-pool/storage'
import * as stageStorage from '../../stage/multicollateral-bonding-curve-pool/storage'
import * as testStorage from '../../test/multicollateral-bonding-curve-pool/storage'
import * as devStorage from '../../dev/multicollateral-bonding-curve-pool/storage'


export const reservesAcc = {
	name: 'MulticollateralBondingCurvePool.ReservesAcc',
	v1: productionStorage.reservesAcc['v1'],
	v42: productionStorage.reservesAcc['v42'],
	v46: productionStorage.reservesAcc['v46'],
	v57: productionStorage.reservesAcc['v57'],
	v33Stage: stageStorage.reservesAcc['v33'],
	v42Stage: stageStorage.reservesAcc['v42'],
	v46Stage: stageStorage.reservesAcc['v46'],
	v54Stage: stageStorage.reservesAcc['v54'],
	v33Test: testStorage.reservesAcc['v33'],
	v42Test: testStorage.reservesAcc['v42'],
	v46Test: testStorage.reservesAcc['v46'],
	v54Test: testStorage.reservesAcc['v54'],
	v70Dev: devStorage.reservesAcc['v70'],
}

export const freeReservesAccountId = {
	name: 'MulticollateralBondingCurvePool.FreeReservesAccountId',
	v1: productionStorage.freeReservesAccountId['v1'],
	v42: productionStorage.freeReservesAccountId['v42'],
	v33Stage: stageStorage.freeReservesAccountId['v33'],
	v42Stage: stageStorage.freeReservesAccountId['v42'],
	v33Test: testStorage.freeReservesAccountId['v33'],
	v42Test: testStorage.freeReservesAccountId['v42'],
	v70Dev: devStorage.freeReservesAccountId['v70'],
}

export const pendingFreeReserves = {
	name: 'MulticollateralBondingCurvePool.PendingFreeReserves',
	v1: productionStorage.pendingFreeReserves['v1'],
	v42: productionStorage.pendingFreeReserves['v42'],
	v33Stage: stageStorage.pendingFreeReserves['v33'],
	v42Stage: stageStorage.pendingFreeReserves['v42'],
	v33Test: testStorage.pendingFreeReserves['v33'],
	v42Test: testStorage.pendingFreeReserves['v42'],
	v70Dev: devStorage.pendingFreeReserves['v70'],
}

export const initialPrice = {
	name: 'MulticollateralBondingCurvePool.InitialPrice',
	v1: productionStorage.initialPrice['v1'],
	v42: productionStorage.initialPrice['v42'],
	v33Stage: stageStorage.initialPrice['v33'],
	v42Stage: stageStorage.initialPrice['v42'],
	v33Test: testStorage.initialPrice['v33'],
	v42Test: testStorage.initialPrice['v42'],
	v70Dev: devStorage.initialPrice['v70'],
}

export const priceChangeStep = {
	name: 'MulticollateralBondingCurvePool.PriceChangeStep',
	v1: productionStorage.priceChangeStep['v1'],
	v42: productionStorage.priceChangeStep['v42'],
	v33Stage: stageStorage.priceChangeStep['v33'],
	v42Stage: stageStorage.priceChangeStep['v42'],
	v33Test: testStorage.priceChangeStep['v33'],
	v42Test: testStorage.priceChangeStep['v42'],
	v70Dev: devStorage.priceChangeStep['v70'],
}

export const priceChangeRate = {
	name: 'MulticollateralBondingCurvePool.PriceChangeRate',
	v1: productionStorage.priceChangeRate['v1'],
	v42: productionStorage.priceChangeRate['v42'],
	v33Stage: stageStorage.priceChangeRate['v33'],
	v42Stage: stageStorage.priceChangeRate['v42'],
	v33Test: testStorage.priceChangeRate['v33'],
	v42Test: testStorage.priceChangeRate['v42'],
	v70Dev: devStorage.priceChangeRate['v70'],
}

export const sellPriceCoefficient = {
	name: 'MulticollateralBondingCurvePool.SellPriceCoefficient',
	v1: productionStorage.sellPriceCoefficient['v1'],
	v42: productionStorage.sellPriceCoefficient['v42'],
	v33Stage: stageStorage.sellPriceCoefficient['v33'],
	v42Stage: stageStorage.sellPriceCoefficient['v42'],
	v33Test: testStorage.sellPriceCoefficient['v33'],
	v42Test: testStorage.sellPriceCoefficient['v42'],
	v70Dev: devStorage.sellPriceCoefficient['v70'],
}

export const alwaysDistributeCoefficient = {
	name: 'MulticollateralBondingCurvePool.AlwaysDistributeCoefficient',
	v1: productionStorage.alwaysDistributeCoefficient['v1'],
	v42: productionStorage.alwaysDistributeCoefficient['v42'],
	v33Stage: stageStorage.alwaysDistributeCoefficient['v33'],
	v42Stage: stageStorage.alwaysDistributeCoefficient['v42'],
	v33Test: testStorage.alwaysDistributeCoefficient['v33'],
	v42Test: testStorage.alwaysDistributeCoefficient['v42'],
	v70Dev: devStorage.alwaysDistributeCoefficient['v70'],
}

export const baseFee = {
	name: 'MulticollateralBondingCurvePool.BaseFee',
	v1: productionStorage.baseFee['v1'],
	v42: productionStorage.baseFee['v42'],
	v33Stage: stageStorage.baseFee['v33'],
	v42Stage: stageStorage.baseFee['v42'],
	v33Test: testStorage.baseFee['v33'],
	v42Test: testStorage.baseFee['v42'],
	v70Dev: devStorage.baseFee['v70'],
}

export const distributionAccountsEntry = {
	name: 'MulticollateralBondingCurvePool.DistributionAccountsEntry',
	v1: productionStorage.distributionAccountsEntry['v1'],
	v42: productionStorage.distributionAccountsEntry['v42'],
	v46: productionStorage.distributionAccountsEntry['v46'],
	v53: productionStorage.distributionAccountsEntry['v53'],
	v57: productionStorage.distributionAccountsEntry['v57'],
	v33Stage: stageStorage.distributionAccountsEntry['v33'],
	v42Stage: stageStorage.distributionAccountsEntry['v42'],
	v46Stage: stageStorage.distributionAccountsEntry['v46'],
	v52Stage: stageStorage.distributionAccountsEntry['v52'],
	v54Stage: stageStorage.distributionAccountsEntry['v54'],
	v33Test: testStorage.distributionAccountsEntry['v33'],
	v42Test: testStorage.distributionAccountsEntry['v42'],
	v46Test: testStorage.distributionAccountsEntry['v46'],
	v52Test: testStorage.distributionAccountsEntry['v52'],
	v54Test: testStorage.distributionAccountsEntry['v54'],
	v70Dev: devStorage.distributionAccountsEntry['v70'],
}

export const enabledTargets = {
	name: 'MulticollateralBondingCurvePool.EnabledTargets',
	v1: productionStorage.enabledTargets['v1'],
	v42: productionStorage.enabledTargets['v42'],
	v33Stage: stageStorage.enabledTargets['v33'],
	v42Stage: stageStorage.enabledTargets['v42'],
	v33Test: testStorage.enabledTargets['v33'],
	v42Test: testStorage.enabledTargets['v42'],
	v70Dev: devStorage.enabledTargets['v70'],
}

export const referenceAssetId = {
	name: 'MulticollateralBondingCurvePool.ReferenceAssetId',
	v1: productionStorage.referenceAssetId['v1'],
	v42: productionStorage.referenceAssetId['v42'],
	v33Stage: stageStorage.referenceAssetId['v33'],
	v42Stage: stageStorage.referenceAssetId['v42'],
	v33Test: testStorage.referenceAssetId['v33'],
	v42Test: testStorage.referenceAssetId['v42'],
	v70Dev: devStorage.referenceAssetId['v70'],
}

export const rewards = {
	name: 'MulticollateralBondingCurvePool.Rewards',
	v1: productionStorage.rewards['v1'],
	v33Stage: stageStorage.rewards['v33'],
	v33Test: testStorage.rewards['v33'],
	v70Dev: devStorage.rewards['v70'],
}

export const totalRewards = {
	name: 'MulticollateralBondingCurvePool.TotalRewards',
	v1: productionStorage.totalRewards['v1'],
	v33Stage: stageStorage.totalRewards['v33'],
	v33Test: testStorage.totalRewards['v33'],
	v70Dev: devStorage.totalRewards['v70'],
}

export const incentivisedCurrenciesNum = {
	name: 'MulticollateralBondingCurvePool.IncentivisedCurrenciesNum',
	v1: productionStorage.incentivisedCurrenciesNum['v1'],
	v33Stage: stageStorage.incentivisedCurrenciesNum['v33'],
	v33Test: testStorage.incentivisedCurrenciesNum['v33'],
	v70Dev: devStorage.incentivisedCurrenciesNum['v70'],
}

export const incentivesAccountId = {
	name: 'MulticollateralBondingCurvePool.IncentivesAccountId',
	v1: productionStorage.incentivesAccountId['v1'],
	v42: productionStorage.incentivesAccountId['v42'],
	v33Stage: stageStorage.incentivesAccountId['v33'],
	v42Stage: stageStorage.incentivesAccountId['v42'],
	v33Test: testStorage.incentivesAccountId['v33'],
	v42Test: testStorage.incentivesAccountId['v42'],
	v70Dev: devStorage.incentivesAccountId['v70'],
}

export const assetsWithOptionalRewardMultiplier = {
	name: 'MulticollateralBondingCurvePool.AssetsWithOptionalRewardMultiplier',
	v1: productionStorage.assetsWithOptionalRewardMultiplier['v1'],
	v42: productionStorage.assetsWithOptionalRewardMultiplier['v42'],
	v33Stage: stageStorage.assetsWithOptionalRewardMultiplier['v33'],
	v42Stage: stageStorage.assetsWithOptionalRewardMultiplier['v42'],
	v33Test: testStorage.assetsWithOptionalRewardMultiplier['v33'],
	v42Test: testStorage.assetsWithOptionalRewardMultiplier['v42'],
	v70Dev: devStorage.assetsWithOptionalRewardMultiplier['v70'],
}

export const initialPswapRewardsSupply = {
	name: 'MulticollateralBondingCurvePool.InitialPswapRewardsSupply',
	v1: productionStorage.initialPswapRewardsSupply['v1'],
	v33Stage: stageStorage.initialPswapRewardsSupply['v33'],
	v33Test: testStorage.initialPswapRewardsSupply['v33'],
	v70Dev: devStorage.initialPswapRewardsSupply['v70'],
}

export const collateralReserves = {
	name: 'MulticollateralBondingCurvePool.CollateralReserves',
	v1: productionStorage.collateralReserves['v1'],
	v42: productionStorage.collateralReserves['v42'],
	v33Stage: stageStorage.collateralReserves['v33'],
	v42Stage: stageStorage.collateralReserves['v42'],
	v33Test: testStorage.collateralReserves['v33'],
	v42Test: testStorage.collateralReserves['v42'],
	v70Dev: devStorage.collateralReserves['v70'],
}
