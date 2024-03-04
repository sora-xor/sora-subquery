import * as productionEvents from '../../production/pswap-distribution/events'
import * as stageEvents from '../../stage/pswap-distribution/events'
import * as testEvents from '../../test/pswap-distribution/events'
import * as devEvents from '../../dev/pswap-distribution/events'


export const feesExchanged = {
	name: 'PswapDistribution.FeesExchanged',
	v1: productionEvents.feesExchanged['v1'],
	v42: productionEvents.feesExchanged['v42'],
	v33Stage: stageEvents.feesExchanged['v33'],
	v42Stage: stageEvents.feesExchanged['v42'],
	v33Test: testEvents.feesExchanged['v33'],
	v42Test: testEvents.feesExchanged['v42'],
	v70Dev: devEvents.feesExchanged['v70'],
}

export const feesExchangeFailed = {
	name: 'PswapDistribution.FeesExchangeFailed',
	v1: productionEvents.feesExchangeFailed['v1'],
	v42: productionEvents.feesExchangeFailed['v42'],
	v46: productionEvents.feesExchangeFailed['v46'],
	v53: productionEvents.feesExchangeFailed['v53'],
	v33Stage: stageEvents.feesExchangeFailed['v33'],
	v42Stage: stageEvents.feesExchangeFailed['v42'],
	v46Stage: stageEvents.feesExchangeFailed['v46'],
	v52Stage: stageEvents.feesExchangeFailed['v52'],
	v33Test: testEvents.feesExchangeFailed['v33'],
	v42Test: testEvents.feesExchangeFailed['v42'],
	v46Test: testEvents.feesExchangeFailed['v46'],
	v52Test: testEvents.feesExchangeFailed['v52'],
	v70Dev: devEvents.feesExchangeFailed['v70'],
}

export const incentiveDistributed = {
	name: 'PswapDistribution.IncentiveDistributed',
	v1: productionEvents.incentiveDistributed['v1'],
	v42: productionEvents.incentiveDistributed['v42'],
	v33Stage: stageEvents.incentiveDistributed['v33'],
	v42Stage: stageEvents.incentiveDistributed['v42'],
	v33Test: testEvents.incentiveDistributed['v33'],
	v42Test: testEvents.incentiveDistributed['v42'],
	v70Dev: devEvents.incentiveDistributed['v70'],
}

export const incentiveDistributionFailed = {
	name: 'PswapDistribution.IncentiveDistributionFailed',
	v1: productionEvents.incentiveDistributionFailed['v1'],
	v8: productionEvents.incentiveDistributionFailed['v8'],
	v33Stage: stageEvents.incentiveDistributionFailed['v33'],
	v33Test: testEvents.incentiveDistributionFailed['v33'],
	v70Dev: devEvents.incentiveDistributionFailed['v70'],
}

export const burnRateChanged = {
	name: 'PswapDistribution.BurnRateChanged',
	v1: productionEvents.burnRateChanged['v1'],
	v42: productionEvents.burnRateChanged['v42'],
	v33Stage: stageEvents.burnRateChanged['v33'],
	v42Stage: stageEvents.burnRateChanged['v42'],
	v33Test: testEvents.burnRateChanged['v33'],
	v42Test: testEvents.burnRateChanged['v42'],
	v70Dev: devEvents.burnRateChanged['v70'],
}

export const nothingToExchange = {
	name: 'PswapDistribution.NothingToExchange',
	v1: productionEvents.nothingToExchange['v1'],
	v33Stage: stageEvents.nothingToExchange['v33'],
	v33Test: testEvents.nothingToExchange['v33'],
	v70Dev: devEvents.nothingToExchange['v70'],
}

export const nothingToDistribute = {
	name: 'PswapDistribution.NothingToDistribute',
	v1: productionEvents.nothingToDistribute['v1'],
	v33Stage: stageEvents.nothingToDistribute['v33'],
	v33Test: testEvents.nothingToDistribute['v33'],
	v70Dev: devEvents.nothingToDistribute['v70'],
}

export const incentivesBurnedAfterExchange = {
	name: 'PswapDistribution.IncentivesBurnedAfterExchange',
	v1: productionEvents.incentivesBurnedAfterExchange['v1'],
	v42: productionEvents.incentivesBurnedAfterExchange['v42'],
	v33Stage: stageEvents.incentivesBurnedAfterExchange['v33'],
	v42Stage: stageEvents.incentivesBurnedAfterExchange['v42'],
	v33Test: testEvents.incentivesBurnedAfterExchange['v33'],
	v42Test: testEvents.incentivesBurnedAfterExchange['v42'],
	v70Dev: devEvents.incentivesBurnedAfterExchange['v70'],
}
