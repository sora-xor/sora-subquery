import * as productionStorage from '../../production/rewards/storage'
import * as stageStorage from '../../stage/rewards/storage'
import * as testStorage from '../../test/rewards/storage'
import * as devStorage from '../../dev/rewards/storage'


export const reservesAcc = {
	name: 'Rewards.ReservesAcc',
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

export const valOwners = {
	name: 'Rewards.ValOwners',
	v1: productionStorage.valOwners['v1'],
	v19: productionStorage.valOwners['v19'],
	v42: productionStorage.valOwners['v42'],
	v33Stage: stageStorage.valOwners['v33'],
	v42Stage: stageStorage.valOwners['v42'],
	v33Test: testStorage.valOwners['v33'],
	v42Test: testStorage.valOwners['v42'],
	v70Dev: devStorage.valOwners['v70'],
}

export const pswapFarmOwners = {
	name: 'Rewards.PswapFarmOwners',
	v1: productionStorage.pswapFarmOwners['v1'],
	v33Stage: stageStorage.pswapFarmOwners['v33'],
	v33Test: testStorage.pswapFarmOwners['v33'],
	v70Dev: devStorage.pswapFarmOwners['v70'],
}

export const pswapWaifuOwners = {
	name: 'Rewards.PswapWaifuOwners',
	v1: productionStorage.pswapWaifuOwners['v1'],
	v33Stage: stageStorage.pswapWaifuOwners['v33'],
	v33Test: testStorage.pswapWaifuOwners['v33'],
	v70Dev: devStorage.pswapWaifuOwners['v70'],
}

export const valBurnedSinceLastVesting = {
	name: 'Rewards.ValBurnedSinceLastVesting',
	v19: productionStorage.valBurnedSinceLastVesting['v19'],
	v33Stage: stageStorage.valBurnedSinceLastVesting['v33'],
	v33Test: testStorage.valBurnedSinceLastVesting['v33'],
	v70Dev: devStorage.valBurnedSinceLastVesting['v70'],
}

export const currentClaimableVal = {
	name: 'Rewards.CurrentClaimableVal',
	v19: productionStorage.currentClaimableVal['v19'],
	v33Stage: stageStorage.currentClaimableVal['v33'],
	v33Test: testStorage.currentClaimableVal['v33'],
	v70Dev: devStorage.currentClaimableVal['v70'],
}

export const ethAddresses = {
	name: 'Rewards.EthAddresses',
	v19: productionStorage.ethAddresses['v19'],
	v33Stage: stageStorage.ethAddresses['v33'],
	v33Test: testStorage.ethAddresses['v33'],
	v70Dev: devStorage.ethAddresses['v70'],
}

export const totalValRewards = {
	name: 'Rewards.TotalValRewards',
	v19: productionStorage.totalValRewards['v19'],
	v33Stage: stageStorage.totalValRewards['v33'],
	v33Test: testStorage.totalValRewards['v33'],
	v70Dev: devStorage.totalValRewards['v70'],
}

export const totalClaimableVal = {
	name: 'Rewards.TotalClaimableVal',
	v19: productionStorage.totalClaimableVal['v19'],
	v33Stage: stageStorage.totalClaimableVal['v33'],
	v33Test: testStorage.totalClaimableVal['v33'],
	v70Dev: devStorage.totalClaimableVal['v70'],
}

export const migrationPending = {
	name: 'Rewards.MigrationPending',
	v19: productionStorage.migrationPending['v19'],
	v33Stage: stageStorage.migrationPending['v33'],
	v33Test: testStorage.migrationPending['v33'],
	v70Dev: devStorage.migrationPending['v70'],
}

export const umiNftReceivers = {
	name: 'Rewards.UmiNftReceivers',
	v33: productionStorage.umiNftReceivers['v33'],
	v33Stage: stageStorage.umiNftReceivers['v33'],
	v33Test: testStorage.umiNftReceivers['v33'],
	v70Dev: devStorage.umiNftReceivers['v70'],
}

export const umiNfts = {
	name: 'Rewards.UmiNfts',
	v33: productionStorage.umiNfts['v33'],
	v42: productionStorage.umiNfts['v42'],
	v33Stage: stageStorage.umiNfts['v33'],
	v42Stage: stageStorage.umiNfts['v42'],
	v33Test: testStorage.umiNfts['v33'],
	v42Test: testStorage.umiNfts['v42'],
	v70Dev: devStorage.umiNfts['v70'],
}

export const umiNftClaimed = {
	name: 'Rewards.UmiNftClaimed',
	v33: productionStorage.umiNftClaimed['v33'],
	v33Stage: stageStorage.umiNftClaimed['v33'],
	v33Test: testStorage.umiNftClaimed['v33'],
	v70Dev: devStorage.umiNftClaimed['v70'],
}
