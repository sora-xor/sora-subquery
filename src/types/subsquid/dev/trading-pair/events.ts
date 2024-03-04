import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const tradingPairStored =  {
    name: 'TradingPair.TradingPairStored',
    /**
     * Trading pair has been redistered on a DEX. [DEX Id, Trading Pair]
     */
    v70: new EventType(
        'TradingPair.TradingPairStored',
        sts.tuple([sts.number(), v70.TradingPair])
    ),
}
