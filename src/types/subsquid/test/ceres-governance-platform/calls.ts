import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v69 from '../v69'

export const vote =  {
    name: 'CeresGovernancePlatform.vote',
    /**
     *  Voting for option
     */
    v33: new CallType(
        'CeresGovernancePlatform.vote',
        sts.struct({
            pollId: sts.bytes(),
            votingOption: sts.number(),
            numberOfVotes: v33.Balance,
        })
    ),
}

export const createPoll =  {
    name: 'CeresGovernancePlatform.create_poll',
    /**
     *  Create poll
     */
    v33: new CallType(
        'CeresGovernancePlatform.create_poll',
        sts.struct({
            pollId: sts.bytes(),
            numberOfOptions: sts.number(),
            pollStartBlock: v33.BlockNumber,
            pollEndBlock: v33.BlockNumber,
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
    v69: new CallType(
        'CeresGovernancePlatform.create_poll',
        sts.struct({
            pollAsset: v69.AssetId32,
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
            title: v69.BoundedString,
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
    v33: new CallType(
        'CeresGovernancePlatform.withdraw',
        sts.struct({
            pollId: sts.bytes(),
        })
    ),
}
