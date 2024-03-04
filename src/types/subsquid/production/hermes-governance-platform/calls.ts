import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v47 from '../v47'
import * as v57 from '../v57'

export const vote =  {
    name: 'HermesGovernancePlatform.vote',
    /**
     * Vote for some option
     */
    v47: new CallType(
        'HermesGovernancePlatform.vote',
        sts.struct({
            pollId: v47.H256,
            votingOption: v47.VotingOption,
        })
    ),
    /**
     * Vote for some option
     */
    v57: new CallType(
        'HermesGovernancePlatform.vote',
        sts.struct({
            pollId: v57.H256,
            votingOption: v57.BoundedString,
        })
    ),
}

export const createPoll =  {
    name: 'HermesGovernancePlatform.create_poll',
    /**
     * Create poll
     */
    v47: new CallType(
        'HermesGovernancePlatform.create_poll',
        sts.struct({
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
            title: sts.string(),
            description: sts.string(),
        })
    ),
    /**
     * Create poll
     */
    v57: new CallType(
        'HermesGovernancePlatform.create_poll',
        sts.struct({
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
            title: v57.BoundedString,
            description: v57.BoundedString,
            options: sts.array(() => v57.BoundedString),
        })
    ),
}

export const withdrawFundsVoter =  {
    name: 'HermesGovernancePlatform.withdraw_funds_voter',
    /**
     * Withdraw funds voter
     */
    v47: new CallType(
        'HermesGovernancePlatform.withdraw_funds_voter',
        sts.struct({
            pollId: v47.H256,
        })
    ),
}

export const withdrawFundsCreator =  {
    name: 'HermesGovernancePlatform.withdraw_funds_creator',
    /**
     * Withdraw funds creator
     */
    v47: new CallType(
        'HermesGovernancePlatform.withdraw_funds_creator',
        sts.struct({
            pollId: v47.H256,
        })
    ),
}

export const changeMinHermesForVoting =  {
    name: 'HermesGovernancePlatform.change_min_hermes_for_voting',
    /**
     * Change minimum Hermes for voting
     */
    v47: new CallType(
        'HermesGovernancePlatform.change_min_hermes_for_voting',
        sts.struct({
            hermesAmount: sts.bigint(),
        })
    ),
}

export const changeMinHermesForCreatingPoll =  {
    name: 'HermesGovernancePlatform.change_min_hermes_for_creating_poll',
    /**
     * Change minimum Hermes for creating a poll
     */
    v47: new CallType(
        'HermesGovernancePlatform.change_min_hermes_for_creating_poll',
        sts.struct({
            hermesAmount: sts.bigint(),
        })
    ),
}
