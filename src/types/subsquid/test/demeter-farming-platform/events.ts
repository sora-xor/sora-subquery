import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v35 from '../v35'
import * as v42 from '../v42'
import * as v43 from '../v43'

export const tokenRegistered =  {
    name: 'DemeterFarmingPlatform.TokenRegistered',
    /**
     *  Token registered [who, what]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.TokenRegistered',
        sts.tuple([v33.AccountId, v33.AssetId])
    ),
    /**
     * Token registered [who, what]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.TokenRegistered',
        sts.tuple([v42.AccountId32, v42.AssetId32])
    ),
}

export const poolAdded =  {
    name: 'DemeterFarmingPlatform.PoolAdded',
    /**
     *  Pool added [who, pool_asset, reward_asset, is_farm]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.PoolAdded',
        sts.tuple([v33.AccountId, v33.AssetId, v33.AssetId, sts.boolean()])
    ),
    /**
     * Pool added [who, pool_asset, reward_asset, is_farm]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.PoolAdded',
        sts.tuple([v42.AccountId32, v42.AssetId32, v42.AssetId32, sts.boolean()])
    ),
    /**
     * Pool added [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.PoolAdded',
        sts.tuple([v43.AccountId32, v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean()])
    ),
}

export const rewardWithdrawn =  {
    name: 'DemeterFarmingPlatform.RewardWithdrawn',
    /**
     *  Reward Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.RewardWithdrawn',
        sts.tuple([v33.AccountId, v33.Balance, v33.AssetId, v33.AssetId, sts.boolean()])
    ),
    /**
     * Reward Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.RewardWithdrawn',
        sts.tuple([v42.AccountId32, sts.bigint(), v42.AssetId32, v42.AssetId32, sts.boolean()])
    ),
    /**
     * Reward Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.RewardWithdrawn',
        sts.tuple([v43.AccountId32, sts.bigint(), v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean()])
    ),
}

export const withdrawn =  {
    name: 'DemeterFarmingPlatform.Withdrawn',
    /**
     *  Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.Withdrawn',
        sts.tuple([v33.AccountId, v33.Balance, v33.AssetId, v33.AssetId, sts.boolean()])
    ),
    /**
     * Withdrawn [who, amount, pool_asset, reward_asset, is_farm]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.Withdrawn',
        sts.tuple([v42.AccountId32, sts.bigint(), v42.AssetId32, v42.AssetId32, sts.boolean()])
    ),
    /**
     * Withdrawn [who, amount, base_asset, pool_asset, reward_asset, is_farm]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.Withdrawn',
        sts.tuple([v43.AccountId32, sts.bigint(), v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean()])
    ),
}

export const poolRemoved =  {
    name: 'DemeterFarmingPlatform.PoolRemoved',
    /**
     *  Pool removed [who, pool_asset, reward_asset, is_farm]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.PoolRemoved',
        sts.tuple([v33.AccountId, v33.AssetId, v33.AssetId, sts.boolean()])
    ),
    /**
     * Pool removed [who, pool_asset, reward_asset, is_farm]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.PoolRemoved',
        sts.tuple([v42.AccountId32, v42.AssetId32, v42.AssetId32, sts.boolean()])
    ),
    /**
     * Pool removed [who, base_asset, pool_asset, reward_asset, is_farm]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.PoolRemoved',
        sts.tuple([v43.AccountId32, v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean()])
    ),
}

export const deposited =  {
    name: 'DemeterFarmingPlatform.Deposited',
    /**
     *  Deposited [who, pool_asset, reward_asset, is_farm, amount]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.Deposited',
        sts.tuple([v33.AccountId, v33.AssetId, v33.AssetId, sts.boolean(), v33.Balance])
    ),
    /**
     * Deposited [who, pool_asset, reward_asset, is_farm, amount]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.Deposited',
        sts.tuple([v42.AccountId32, v42.AssetId32, v42.AssetId32, sts.boolean(), sts.bigint()])
    ),
    /**
     * Deposited [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.Deposited',
        sts.tuple([v43.AccountId32, v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean(), sts.bigint()])
    ),
}

export const multiplierChanged =  {
    name: 'DemeterFarmingPlatform.MultiplierChanged',
    /**
     *  Multiplier Changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.MultiplierChanged',
        sts.tuple([v33.AccountId, v33.AssetId, v33.AssetId, sts.boolean(), sts.number()])
    ),
    /**
     * Multiplier Changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.MultiplierChanged',
        sts.tuple([v42.AccountId32, v42.AssetId32, v42.AssetId32, sts.boolean(), sts.number()])
    ),
    /**
     * Multiplier Changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.MultiplierChanged',
        sts.tuple([v43.AccountId32, v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean(), sts.number()])
    ),
}

export const depositFeeChanged =  {
    name: 'DemeterFarmingPlatform.DepositFeeChanged',
    /**
     *  DepositFeeChanged [who, pool_asset, reward_asset, is_farm, amount]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.DepositFeeChanged',
        sts.tuple([v33.AccountId, v33.AssetId, v33.AssetId, sts.boolean(), v33.Balance])
    ),
    /**
     * DepositFeeChanged [who, pool_asset, reward_asset, is_farm, amount]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.DepositFeeChanged',
        sts.tuple([v42.AccountId32, v42.AssetId32, v42.AssetId32, sts.boolean(), sts.bigint()])
    ),
    /**
     * DepositFeeChanged [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.DepositFeeChanged',
        sts.tuple([v43.AccountId32, v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean(), sts.bigint()])
    ),
}

export const tokenInfoChanged =  {
    name: 'DemeterFarmingPlatform.TokenInfoChanged',
    /**
     *  Token info changed [who, what]
     */
    v33: new EventType(
        'DemeterFarmingPlatform.TokenInfoChanged',
        sts.tuple([v33.AccountId, v33.AssetId])
    ),
    /**
     * Token info changed [who, what]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.TokenInfoChanged',
        sts.tuple([v42.AccountId32, v42.AssetId32])
    ),
}

export const totalTokensChanged =  {
    name: 'DemeterFarmingPlatform.TotalTokensChanged',
    /**
     *  Total tokens changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    v35: new EventType(
        'DemeterFarmingPlatform.TotalTokensChanged',
        sts.tuple([v35.AccountId, v35.AssetId, v35.AssetId, sts.boolean(), v35.Balance])
    ),
    /**
     * Total tokens changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.TotalTokensChanged',
        sts.tuple([v42.AccountId32, v42.AssetId32, v42.AssetId32, sts.boolean(), sts.bigint()])
    ),
    /**
     * Total tokens changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.TotalTokensChanged',
        sts.tuple([v43.AccountId32, v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean(), sts.bigint()])
    ),
}

export const infoChanged =  {
    name: 'DemeterFarmingPlatform.InfoChanged',
    /**
     *  Info changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    v35: new EventType(
        'DemeterFarmingPlatform.InfoChanged',
        sts.tuple([v35.AccountId, v35.AssetId, v35.AssetId, sts.boolean(), v35.Balance])
    ),
    /**
     * Info changed [who, pool_asset, reward_asset, is_farm, amount]
     */
    v42: new EventType(
        'DemeterFarmingPlatform.InfoChanged',
        sts.tuple([v42.AccountId32, v42.AssetId32, v42.AssetId32, sts.boolean(), sts.bigint()])
    ),
    /**
     * Info changed [who, base_asset, pool_asset, reward_asset, is_farm, amount]
     */
    v43: new EventType(
        'DemeterFarmingPlatform.InfoChanged',
        sts.tuple([v43.AccountId32, v43.AssetId32, v43.AssetId32, v43.AssetId32, sts.boolean(), sts.bigint()])
    ),
}
