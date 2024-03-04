import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'

export const tradingPairStored =  {
    name: 'TradingPair.TradingPairStored',
    /**
     *  Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    v33: new EventType(
        'TradingPair.TradingPairStored',
        sts.tuple([v33.DEXId, v33.TradingPair])
    ),
    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    v42: new EventType(
        'TradingPair.TradingPairStored',
        sts.tuple([sts.number(), v42.TradingPair])
    ),
}
