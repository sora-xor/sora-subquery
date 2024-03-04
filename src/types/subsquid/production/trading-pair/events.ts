import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const tradingPairStored =  {
    name: 'TradingPair.TradingPairStored',
    /**
     *  Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    v1: new EventType(
        'TradingPair.TradingPairStored',
        sts.tuple([v1.DEXId, v1.TradingPair])
    ),
    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    v42: new EventType(
        'TradingPair.TradingPairStored',
        sts.tuple([sts.number(), v42.TradingPair])
    ),
}
