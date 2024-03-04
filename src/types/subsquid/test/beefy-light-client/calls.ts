import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const initialize =  {
    name: 'BeefyLightClient.initialize',
    v52: new CallType(
        'BeefyLightClient.initialize',
        sts.struct({
            networkId: v52.SubNetworkId,
            latestBeefyBlock: sts.bigint(),
            validatorSet: v52.BeefyAuthoritySet,
            nextValidatorSet: v52.BeefyAuthoritySet,
        })
    ),
}

export const submitSignatureCommitment =  {
    name: 'BeefyLightClient.submit_signature_commitment',
    v52: new CallType(
        'BeefyLightClient.submit_signature_commitment',
        sts.struct({
            networkId: v52.SubNetworkId,
            commitment: v52.Commitment,
            validatorProof: v52.ValidatorProof,
            latestMmrLeaf: v52.MmrLeaf,
            proof: v52.Type_559,
        })
    ),
}
