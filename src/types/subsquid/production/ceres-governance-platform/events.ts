import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v26 from '../v26'
import * as v37 from '../v37'
import * as v70 from '../v70'

export const voted =  {
    name: 'CeresGovernancePlatform.Voted',
    /**
     *  Voting [who, poll, option, balance]
     */
    v26: new EventType(
        'CeresGovernancePlatform.Voted',
        sts.tuple([v26.AccountId, sts.bytes(), sts.number(), v26.Balance])
    ),
    /**
     * Voting [who, poll, option, asset, balance]
     */
    v70: new EventType(
        'CeresGovernancePlatform.Voted',
        sts.tuple([v70.AccountId32, v70.H256, sts.number(), v70.AssetId32, sts.bigint()])
    ),
}

export const created =  {
    name: 'CeresGovernancePlatform.Created',
    /**
     *  Create poll [who, option, start_block, end_block]
     */
    v26: new EventType(
        'CeresGovernancePlatform.Created',
        sts.tuple([v26.AccountId, sts.number(), v26.BlockNumber, v26.BlockNumber])
    ),
    /**
     *  Create poll [who, option, start_timestamp, end_timestamp]
     */
    v37: new EventType(
        'CeresGovernancePlatform.Created',
        sts.tuple([v37.AccountId, sts.number(), v37.Moment, v37.Moment])
    ),
    /**
     * Create poll [who, title, poll_asset, start_timestamp, end_timestamp]
     */
    v70: new EventType(
        'CeresGovernancePlatform.Created',
        sts.tuple([v70.AccountId32, v70.BoundedString, v70.AssetId32, sts.bigint(), sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'CeresGovernancePlatform.Withdrawn',
    /**
     *  Withdrawn [who, balance]
     */
    v26: new EventType(
        'CeresGovernancePlatform.Withdrawn',
        sts.tuple([v26.AccountId, v26.Balance])
    ),
    /**
     * Withdrawn [who, poll, asset, balance]
     */
    v70: new EventType(
        'CeresGovernancePlatform.Withdrawn',
        sts.tuple([v70.AccountId32, v70.H256, v70.AssetId32, sts.bigint()])
    ),
}
