import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const vote =  {
    name: 'HermesGovernancePlatform.vote',
    /**
     * Vote for some option
     */
    v70: new CallType(
        'HermesGovernancePlatform.vote',
        sts.struct({
            pollId: v70.H256,
            votingOption: sts.bytes(),
        })
    ),
}

export const createPoll =  {
    name: 'HermesGovernancePlatform.create_poll',
    /**
     * Create poll
     */
    v70: new CallType(
        'HermesGovernancePlatform.create_poll',
        sts.struct({
            pollStartTimestamp: sts.bigint(),
            pollEndTimestamp: sts.bigint(),
            title: v70.BoundedString,
            description: sts.bytes(),
            options: sts.array(() => sts.bytes()),
        })
    ),
}

export const withdrawFundsVoter =  {
    name: 'HermesGovernancePlatform.withdraw_funds_voter',
    /**
     * Withdraw funds voter
     */
    v70: new CallType(
        'HermesGovernancePlatform.withdraw_funds_voter',
        sts.struct({
            pollId: v70.H256,
        })
    ),
}

export const withdrawFundsCreator =  {
    name: 'HermesGovernancePlatform.withdraw_funds_creator',
    /**
     * Withdraw funds creator
     */
    v70: new CallType(
        'HermesGovernancePlatform.withdraw_funds_creator',
        sts.struct({
            pollId: v70.H256,
        })
    ),
}

export const changeMinHermesForVoting =  {
    name: 'HermesGovernancePlatform.change_min_hermes_for_voting',
    /**
     * Change minimum Hermes for voting
     */
    v70: new CallType(
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
    v70: new CallType(
        'HermesGovernancePlatform.change_min_hermes_for_creating_poll',
        sts.struct({
            hermesAmount: sts.bigint(),
        })
    ),
}
