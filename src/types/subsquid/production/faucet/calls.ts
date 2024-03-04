import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v22 from '../v22'

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
    v22: new CallType(
        'Faucet.transfer',
        sts.struct({
            assetId: v22.AssetId,
            target: v22.AccountIdOf,
            amount: v22.Balance,
        })
    ),
}

export const resetRewards =  {
    name: 'Faucet.reset_rewards',
    v22: new CallType(
        'Faucet.reset_rewards',
        sts.unit()
    ),
}
