import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const initialize =  {
    name: 'BeefyLightClient.initialize',
    v70: new CallType(
        'BeefyLightClient.initialize',
        sts.struct({
            networkId: v70.SubNetworkId,
            latestBeefyBlock: sts.bigint(),
            validatorSet: v70.BeefyAuthoritySet,
            nextValidatorSet: v70.BeefyAuthoritySet,
        })
    ),
}

export const submitSignatureCommitment =  {
    name: 'BeefyLightClient.submit_signature_commitment',
    v70: new CallType(
        'BeefyLightClient.submit_signature_commitment',
        sts.struct({
            networkId: v70.SubNetworkId,
            commitment: v70.Commitment,
            validatorProof: v70.ValidatorProof,
            latestMmrLeaf: v70.MmrLeaf,
            proof: v70.Type_590,
        })
    ),
}
