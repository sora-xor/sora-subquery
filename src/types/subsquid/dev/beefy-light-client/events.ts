import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const verificationSuccessful =  {
    name: 'BeefyLightClient.VerificationSuccessful',
    v70: new EventType(
        'BeefyLightClient.VerificationSuccessful',
        sts.tuple([v70.SubNetworkId, v70.AccountId32, sts.number()])
    ),
}

export const newMmrRoot =  {
    name: 'BeefyLightClient.NewMMRRoot',
    v70: new EventType(
        'BeefyLightClient.NewMMRRoot',
        sts.tuple([v70.SubNetworkId, v70.H256, sts.bigint()])
    ),
}

export const validatorRegistryUpdated =  {
    name: 'BeefyLightClient.ValidatorRegistryUpdated',
    v70: new EventType(
        'BeefyLightClient.ValidatorRegistryUpdated',
        sts.tuple([v70.SubNetworkId, v70.H256, sts.number(), sts.bigint()])
    ),
}
