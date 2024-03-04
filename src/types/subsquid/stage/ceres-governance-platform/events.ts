import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v69 from '../v69'

export const voted =  {
    name: 'CeresGovernancePlatform.Voted',
    /**
     *  Voting [who, poll, option, balance]
     */
    v33: new EventType(
        'CeresGovernancePlatform.Voted',
        sts.tuple([v33.AccountId, sts.bytes(), sts.number(), v33.Balance])
    ),
    /**
     * Voting [who, poll, option, asset, balance]
     */
    v69: new EventType(
        'CeresGovernancePlatform.Voted',
        sts.tuple([v69.AccountId32, v69.H256, sts.number(), v69.AssetId32, sts.bigint()])
    ),
}

export const created =  {
    name: 'CeresGovernancePlatform.Created',
    /**
     *  Create poll [who, option, start_block, end_block]
     */
    v33: new EventType(
        'CeresGovernancePlatform.Created',
        sts.tuple([v33.AccountId, sts.number(), v33.BlockNumber, v33.BlockNumber])
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
    v69: new EventType(
        'CeresGovernancePlatform.Created',
        sts.tuple([v69.AccountId32, v69.BoundedString, v69.AssetId32, sts.bigint(), sts.bigint()])
    ),
}

export const withdrawn =  {
    name: 'CeresGovernancePlatform.Withdrawn',
    /**
     *  Withdrawn [who, balance]
     */
    v33: new EventType(
        'CeresGovernancePlatform.Withdrawn',
        sts.tuple([v33.AccountId, v33.Balance])
    ),
    /**
     * Withdrawn [who, poll, asset, balance]
     */
    v69: new EventType(
        'CeresGovernancePlatform.Withdrawn',
        sts.tuple([v69.AccountId32, v69.H256, v69.AssetId32, sts.bigint()])
    ),
}
