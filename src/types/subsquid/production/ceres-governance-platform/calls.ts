import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v37 from '../v37'
import * as v70 from '../v70'

export const vote =  {
    name: 'CeresGovernancePlatform.vote',
    /**
     *  Voting for option
     */
    v26: new CallType(
        'CeresGovernancePlatform.vote',
        sts.struct({
            pollId: sts.bytes(),
            votingOption: sts.number(),
            numberOfVotes: v26.Balance,
        })
    ),
}

export const createPoll =  {
    name: 'CeresGovernancePlatform.create_poll',
    /**
     *  Create poll
     */
    v26: new CallType(
        'CeresGovernancePlatform.create_poll',
        sts.struct({
            pollId: sts.bytes(),
            numberOfOptions: sts.number(),
            pollStartBlock: v26.BlockNumber,
            pollEndBlock: v26.BlockNumber,
        })
    ),
    /**
     *  Create poll
     */
    v37: new CallType(
        'CeresGovernancePlatform.create_poll',
        sts.struct({
            pollId: sts.bytes(),
            numberOfOptions: sts.number(),
            pollStartTimestamp: v37.Moment,
            pollEndTimestamp: v37.Moment,
        })
    ),
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
     *  Withdraw voting funds
     */
    v26: new CallType(
        'CeresGovernancePlatform.withdraw',
        sts.struct({
            pollId: sts.bytes(),
        })
    ),
}
