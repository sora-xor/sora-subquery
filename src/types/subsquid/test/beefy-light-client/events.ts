import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const verificationSuccessful =  {
    name: 'BeefyLightClient.VerificationSuccessful',
    v52: new EventType(
        'BeefyLightClient.VerificationSuccessful',
        sts.tuple([v52.SubNetworkId, v52.AccountId32, sts.number()])
    ),
}

export const newMmrRoot =  {
    name: 'BeefyLightClient.NewMMRRoot',
    v52: new EventType(
        'BeefyLightClient.NewMMRRoot',
        sts.tuple([v52.SubNetworkId, v52.H256, sts.bigint()])
    ),
}

export const validatorRegistryUpdated =  {
    name: 'BeefyLightClient.ValidatorRegistryUpdated',
    v52: new EventType(
        'BeefyLightClient.ValidatorRegistryUpdated',
        sts.tuple([v52.SubNetworkId, v52.H256, sts.number(), sts.bigint()])
    ),
}
