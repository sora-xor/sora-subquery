import * as stageEvents from '../../stage/beefy-light-client/events'
import * as testEvents from '../../test/beefy-light-client/events'
import * as devEvents from '../../dev/beefy-light-client/events'


export const verificationSuccessful = {
	name: 'BeefyLightClient.VerificationSuccessful',
	v52Stage: stageEvents.verificationSuccessful['v52'],
	v52Test: testEvents.verificationSuccessful['v52'],
	v70Dev: devEvents.verificationSuccessful['v70'],
}

export const newMmrRoot = {
	name: 'BeefyLightClient.NewMMRRoot',
	v52Stage: stageEvents.newMmrRoot['v52'],
	v52Test: testEvents.newMmrRoot['v52'],
	v70Dev: devEvents.newMmrRoot['v70'],
}

export const validatorRegistryUpdated = {
	name: 'BeefyLightClient.ValidatorRegistryUpdated',
	v52Stage: stageEvents.validatorRegistryUpdated['v52'],
	v52Test: testEvents.validatorRegistryUpdated['v52'],
	v70Dev: devEvents.validatorRegistryUpdated['v70'],
}
