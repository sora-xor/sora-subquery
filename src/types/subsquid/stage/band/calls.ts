import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v44 from '../v44'
import * as v45 from '../v45'
import * as v59 from '../v59'

export const relay =  {
    name: 'Band.relay',
    /**
     * Relay a list of symbols and their associated rates along with the resolve time and request id on `BandChain`.
     * 
     * Checks if:
     * - The caller is a relayer;
     * - The `resolve_time` for a particular symbol is not lower than previous saved value, ignores this rate if so;
     * 
     * If `rates` contains duplicated symbols, then the last rate will be stored.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    v44: new CallType(
        'Band.relay',
        sts.struct({
            rates: sts.array(() => sts.tuple(() => [sts.string(), sts.bigint()])),
            resolveTime: sts.bigint(),
            requestId: sts.bigint(),
        })
    ),
    /**
     * Relay a list of symbols and their associated rates along with the resolve time and request id on `BandChain`.
     * 
     * Checks if:
     * - The caller is a relayer;
     * - The `resolve_time` for a particular symbol is not lower than previous saved value, ignores this rate if so;
     * 
     * If `rates` contains duplicated symbols, then the last rate will be stored.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    v45: new CallType(
        'Band.relay',
        sts.struct({
            rates: sts.array(() => sts.tuple(() => [v45.SymbolName, sts.bigint()])),
            resolveTime: sts.bigint(),
            requestId: sts.bigint(),
        })
    ),
}

export const forceRelay =  {
    name: 'Band.force_relay',
    /**
     * Similar to [`relay()`] but without the resolve time guard.
     * 
     * Should be used in emergency situations i.e. then previous value was
     * relayed by a faulty/malicious actor.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    v44: new CallType(
        'Band.force_relay',
        sts.struct({
            rates: sts.array(() => sts.tuple(() => [sts.string(), sts.bigint()])),
            resolveTime: sts.bigint(),
            requestId: sts.bigint(),
        })
    ),
    /**
     * Similar to [`relay()`] but without the resolve time guard.
     * 
     * Should be used in emergency situations i.e. then previous value was
     * relayed by a faulty/malicious actor.
     * 
     * - `origin`: the relayer account on whose behalf the transaction is being executed,
     * - `rates`: symbols with rates in USD represented as fixed point with precision = 9,
     * - `resolve_time`: symbols which rates are provided,
     * - `request_id`: id of the request sent to the *BandChain* to retrieve this data.
     */
    v45: new CallType(
        'Band.force_relay',
        sts.struct({
            rates: sts.array(() => sts.tuple(() => [v45.SymbolName, sts.bigint()])),
            resolveTime: sts.bigint(),
            requestId: sts.bigint(),
        })
    ),
}

export const addRelayers =  {
    name: 'Band.add_relayers',
    /**
     * Add `account_ids` to the list of trusted relayers.
     * 
     * Ignores repeated accounts in `account_ids`.
     * If one of account is already a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
     * be returned.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `account_ids`: list of new trusted relayers to add.
     */
    v44: new CallType(
        'Band.add_relayers',
        sts.struct({
            accountIds: sts.array(() => v44.AccountId32),
        })
    ),
}

export const removeRelayers =  {
    name: 'Band.remove_relayers',
    /**
     * Remove `account_ids` from the list of trusted relayers.
     * 
     * Ignores repeated accounts in `account_ids`.
     * If one of account is not a trusted relayer an [`Error::AlreadyATrustedRelayer`] will
     * be returned.
     * 
     * - `origin`: the sudo account on whose behalf the transaction is being executed,
     * - `account_ids`: list of relayers to remove.
     */
    v44: new CallType(
        'Band.remove_relayers',
        sts.struct({
            accountIds: sts.array(() => v44.AccountId32),
        })
    ),
}

export const setDynamicFeeParameters =  {
    name: 'Band.set_dynamic_fee_parameters',
    v59: new CallType(
        'Band.set_dynamic_fee_parameters',
        sts.struct({
            feeParameters: v59.FeeCalculationParameters,
        })
    ),
}
