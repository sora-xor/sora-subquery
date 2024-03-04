import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v44 from '../v44'
import * as v45 from '../v45'
import * as v54 from '../v54'

export const symbolsRelayed =  {
    name: 'Band.SymbolsRelayed',
    /**
     * New symbol rates were successfully relayed. [symbols]
     */
    v44: new EventType(
        'Band.SymbolsRelayed',
        sts.array(() => sts.string())
    ),
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
    v54: new EventType(
        'Band.SymbolsRelayed',
        sts.array(() => sts.tuple(() => [v54.SymbolName, sts.bigint()]))
    ),
}

export const relayersAdded =  {
    name: 'Band.RelayersAdded',
    /**
     * Added new trusted relayer accounts. [relayers]
     */
    v44: new EventType(
        'Band.RelayersAdded',
        sts.array(() => v44.AccountId32)
    ),
}

export const relayersRemoved =  {
    name: 'Band.RelayersRemoved',
    /**
     * Relayer accounts were removed from trusted list. [relayers]
     */
    v44: new EventType(
        'Band.RelayersRemoved',
        sts.array(() => v44.AccountId32)
    ),
}
