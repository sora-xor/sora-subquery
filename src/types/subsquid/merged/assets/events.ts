import * as productionEvents from '../../production/assets/events'
import * as stageEvents from '../../stage/assets/events'
import * as testEvents from '../../test/assets/events'
import * as devEvents from '../../dev/assets/events'


export const assetRegistered = {
	name: 'Assets.AssetRegistered',
	v1: productionEvents.assetRegistered['v1'],
	v42: productionEvents.assetRegistered['v42'],
	v33Stage: stageEvents.assetRegistered['v33'],
	v42Stage: stageEvents.assetRegistered['v42'],
	v33Test: testEvents.assetRegistered['v33'],
	v42Test: testEvents.assetRegistered['v42'],
	v70Dev: devEvents.assetRegistered['v70'],
}

export const transfer = {
	name: 'Assets.Transfer',
	v1: productionEvents.transfer['v1'],
	v42: productionEvents.transfer['v42'],
	v33Stage: stageEvents.transfer['v33'],
	v42Stage: stageEvents.transfer['v42'],
	v33Test: testEvents.transfer['v33'],
	v42Test: testEvents.transfer['v42'],
	v70Dev: devEvents.transfer['v70'],
}

export const mint = {
	name: 'Assets.Mint',
	v1: productionEvents.mint['v1'],
	v42: productionEvents.mint['v42'],
	v33Stage: stageEvents.mint['v33'],
	v42Stage: stageEvents.mint['v42'],
	v33Test: testEvents.mint['v33'],
	v42Test: testEvents.mint['v42'],
	v70Dev: devEvents.mint['v70'],
}

export const burn = {
	name: 'Assets.Burn',
	v1: productionEvents.burn['v1'],
	v42: productionEvents.burn['v42'],
	v33Stage: stageEvents.burn['v33'],
	v42Stage: stageEvents.burn['v42'],
	v33Test: testEvents.burn['v33'],
	v42Test: testEvents.burn['v42'],
	v70Dev: devEvents.burn['v70'],
}

export const assetSetNonMintable = {
	name: 'Assets.AssetSetNonMintable',
	v1: productionEvents.assetSetNonMintable['v1'],
	v42: productionEvents.assetSetNonMintable['v42'],
	v33Stage: stageEvents.assetSetNonMintable['v33'],
	v42Stage: stageEvents.assetSetNonMintable['v42'],
	v33Test: testEvents.assetSetNonMintable['v33'],
	v42Test: testEvents.assetSetNonMintable['v42'],
	v70Dev: devEvents.assetSetNonMintable['v70'],
}

export const assetUpdated = {
	name: 'Assets.AssetUpdated',
	v53: productionEvents.assetUpdated['v53'],
	v52Stage: stageEvents.assetUpdated['v52'],
	v52Test: testEvents.assetUpdated['v52'],
	v70Dev: devEvents.assetUpdated['v70'],
}
