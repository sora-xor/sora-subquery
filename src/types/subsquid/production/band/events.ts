import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v45 from '../v45'
import * as v57 from '../v57'

export const symbolsRelayed =  {
    name: 'Band.SymbolsRelayed',
    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    v45: new EventType(
        'Band.SymbolsRelayed',
        sts.array(() => v45.SymbolName)
    ),
    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    v57: new EventType(
        'Band.SymbolsRelayed',
        sts.array(() => sts.tuple(() => [v57.SymbolName, sts.bigint()]))
    ),
}

export const relayersAdded =  {
    name: 'Band.RelayersAdded',
    /**
     * Added new trusted relayer accounts. [relayers]
     */
    v45: new EventType(
        'Band.RelayersAdded',
        sts.array(() => v45.AccountId32)
    ),
}

export const relayersRemoved =  {
    name: 'Band.RelayersRemoved',
    /**
     * Relayer accounts were removed from trusted list. [relayers]
     */
    v45: new EventType(
        'Band.RelayersRemoved',
        sts.array(() => v45.AccountId32)
    ),
}
