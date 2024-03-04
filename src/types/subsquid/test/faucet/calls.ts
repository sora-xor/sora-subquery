import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v37 from '../v37'
import * as v42 from '../v42'

export const transfer =  {
    name: 'Faucet.transfer',
    /**
     *  Transfers the specified amount of asset to the specified account.
     *  The supported assets are: XOR, VAL, PSWAP.
     * 
     *  # Errors
     * 
     *  AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     *  AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     *  NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    v33: new CallType(
        'Faucet.transfer',
        sts.struct({
            assetId: v33.AssetId,
            target: v33.AccountIdOf,
            amount: v33.Balance,
        })
    ),
    /**
     * Transfers the specified amount of asset to the specified account.
     * The supported assets are: XOR, VAL, PSWAP.
     * 
     * # Errors
     * 
     * AssetNotSupported is returned if `asset_id` is something the function doesn't support.
     * AmountAboveLimit is returned if `target` has already received their daily limit of `asset_id`.
     * NotEnoughReserves is returned if `amount` is greater than the reserves
     */
    v42: new CallType(
        'Faucet.transfer',
        sts.struct({
            assetId: v42.AssetId32,
            target: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const resetRewards =  {
    name: 'Faucet.reset_rewards',
    v33: new CallType(
        'Faucet.reset_rewards',
        sts.unit()
    ),
}

export const updateLimit =  {
    name: 'Faucet.update_limit',
    v37: new CallType(
        'Faucet.update_limit',
        sts.struct({
            newLimit: v37.Balance,
        })
    ),
}
