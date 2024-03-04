import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v47 from '../v47'
import * as v55 from '../v55'

export const voted =  {
    name: 'HermesGovernancePlatform.Voted',
    /**
     * Voting [who, poll, option]
     */
    v47: new EventType(
        'HermesGovernancePlatform.Voted',
        sts.tuple([v47.AccountId32, v47.H256, v47.VotingOption])
    ),
    /**
     * Voting [who, poll, option]
     */
    v55: new EventType(
        'HermesGovernancePlatform.Voted',
        sts.tuple([v55.AccountId32, v55.H256, v55.BoundedString])
    ),
}

export const created =  {
    name: 'HermesGovernancePlatform.Created',
    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    v47: new EventType(
        'HermesGovernancePlatform.Created',
        sts.tuple([v47.AccountId32, sts.string(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Create poll [who, title, start_timestamp, end_timestamp]
     */
    v55: new EventType(
        'HermesGovernancePlatform.Created',
        sts.tuple([v55.AccountId32, v55.BoundedString, sts.bigint(), sts.bigint()])
    ),
}

export const voterFundsWithdrawn =  {
    name: 'HermesGovernancePlatform.VoterFundsWithdrawn',
    /**
     * Voter Funds Withdrawn [who, balance]
     */
    v47: new EventType(
        'HermesGovernancePlatform.VoterFundsWithdrawn',
        sts.tuple([v47.AccountId32, sts.bigint()])
    ),
}

export const creatorFundsWithdrawn =  {
    name: 'HermesGovernancePlatform.CreatorFundsWithdrawn',
    /**
     * Creator Funds Withdrawn [who, balance]
     */
    v47: new EventType(
        'HermesGovernancePlatform.CreatorFundsWithdrawn',
        sts.tuple([v47.AccountId32, sts.bigint()])
    ),
}

export const minimumHermesForVotingChanged =  {
    name: 'HermesGovernancePlatform.MinimumHermesForVotingChanged',
    /**
     * Change minimum Hermes for voting [balance]
     */
    v47: new EventType(
        'HermesGovernancePlatform.MinimumHermesForVotingChanged',
        sts.bigint()
    ),
}

export const minimumHermesForCreatingPollChanged =  {
    name: 'HermesGovernancePlatform.MinimumHermesForCreatingPollChanged',
    /**
     * Change minimum Hermes for creating poll [balance]
     */
    v47: new EventType(
        'HermesGovernancePlatform.MinimumHermesForCreatingPollChanged',
        sts.bigint()
    ),
}
