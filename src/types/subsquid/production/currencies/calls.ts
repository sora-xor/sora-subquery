import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const transfer =  {
    name: 'Currencies.transfer',
    /**
     *  Transfer some balance to another account under `currency_id`.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    v1: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v1.LookupSource,
            currencyId: v1.CurrencyIdOf,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer some balance to another account under `currency_id`.
     * 
     * The dispatch origin for this call must be `Signed` by the
     * transactor.
     */
    v42: new CallType(
        'Currencies.transfer',
        sts.struct({
            dest: v42.AccountId32,
            currencyId: v42.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const transferNativeCurrency =  {
    name: 'Currencies.transfer_native_currency',
    /**
     *  Transfer some native currency to another account.
     * 
     *  The dispatch origin for this call must be `Signed` by the
     *  transactor.
     */
    v1: new CallType(
        'Currencies.transfer_native_currency',
        sts.struct({
            dest: v1.LookupSource,
            amount: sts.bigint(),
        })
    ),
}

export const updateBalance =  {
    name: 'Currencies.update_balance',
    /**
     *  update amount of account `who` under `currency_id`.
     * 
     *  The dispatch origin of this call must be _Root_.
     */
    v1: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v1.LookupSource,
            currencyId: v1.CurrencyIdOf,
            amount: v1.AmountOf,
        })
    ),
    /**
     * update amount of account `who` under `currency_id`.
     * 
     * The dispatch origin of this call must be _Root_.
     */
    v42: new CallType(
        'Currencies.update_balance',
        sts.struct({
            who: v42.AccountId32,
            currencyId: v42.AssetId32,
            amount: sts.bigint(),
        })
    ),
}
