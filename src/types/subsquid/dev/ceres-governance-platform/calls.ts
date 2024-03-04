import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const vote =  {
    name: 'CeresGovernancePlatform.vote',
    /**
     * Voting for option
     */
    v70: new CallType(
        'CeresGovernancePlatform.vote',
        sts.struct({
            pollId: v70.H256,
            votingOption: sts.number(),
            numberOfVotes: sts.bigint(),
        })
    ),
}

export const createPoll =  {
    name: 'CeresGovernancePlatform.create_poll',
    /**
     * Create poll
     */
    v70: new CallType(
        'CeresGovernancePlatform.create_poll',
        sts.struct({
            pollAsset: v70.AssetId32,
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
            title: v70.BoundedString,
            description: sts.bytes(),
            options: sts.array(() => sts.bytes()),
        })
    ),
}

export const withdraw =  {
    name: 'CeresGovernancePlatform.withdraw',
    /**
     * Withdraw voting funds
     */
    v70: new CallType(
        'CeresGovernancePlatform.withdraw',
        sts.struct({
            pollId: v70.H256,
        })
    ),
}
