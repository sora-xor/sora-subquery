import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const register =  {
    name: 'Assets.register',
    /**
     * Performs an asset registration.
     * 
     * Registers new `AssetId` for the given `origin`.
     * AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     * AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    v70: new CallType(
        'Assets.register',
        sts.struct({
            symbol: v70.AssetSymbol,
            name: v70.AssetName,
            initialSupply: sts.bigint(),
            isMintable: sts.boolean(),
            isIndivisible: sts.boolean(),
            optContentSrc: sts.option(() => v70.ContentSource),
            optDesc: sts.option(() => v70.Description),
        })
    ),
}

export const transfer =  {
    name: 'Assets.transfer',
    /**
     * Performs a checked Asset transfer.
     * 
     * - `origin`: caller Account, from which Asset amount is withdrawn,
     * - `asset_id`: Id of transferred Asset,
     * - `to`: Id of Account, to which Asset amount is deposited,
     * - `amount`: transferred Asset amount.
     */
    v70: new CallType(
        'Assets.transfer',
        sts.struct({
            assetId: v70.AssetId32,
            to: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const mint =  {
    name: 'Assets.mint',
    /**
     * Performs a checked Asset mint, can only be done
     * by corresponding asset owner account.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    v70: new CallType(
        'Assets.mint',
        sts.struct({
            assetId: v70.AssetId32,
            to: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const forceMint =  {
    name: 'Assets.force_mint',
    /**
     * Performs an unchecked Asset mint, can only be done
     * by root account.
     * 
     * Should be used as extrinsic call only.
     * `Currencies::updated_balance()` should be deprecated. Using `force_mint` allows us to
     * perform extra actions for minting, such as buy-back, extra-minting and etc.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    v70: new CallType(
        'Assets.force_mint',
        sts.struct({
            assetId: v70.AssetId32,
            to: v70.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const burn =  {
    name: 'Assets.burn',
    /**
     * Performs a checked Asset burn, can only be done
     * by corresponding asset owner with own account.
     * 
     * - `origin`: caller Account, from which Asset amount is burned,
     * - `asset_id`: Id of burned Asset,
     * - `amount`: burned Asset amount.
     */
    v70: new CallType(
        'Assets.burn',
        sts.struct({
            assetId: v70.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const updateBalance =  {
    name: 'Assets.update_balance',
    /**
     * Add or remove abs(`by_amount`) from the balance of `who` under
     * `currency_id`. If positive `by_amount`, do add, else do remove.
     * 
     * Basically a wrapper of `MultiCurrencyExtended::update_balance`
     * for testing purposes.
     * 
     * TODO: move into tests extrinsic collection pallet
     */
    v70: new CallType(
        'Assets.update_balance',
        sts.struct({
            who: v70.AccountId32,
            currencyId: v70.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const setNonMintable =  {
    name: 'Assets.set_non_mintable',
    /**
     * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     * Operation can not be undone.
     * 
     * - `origin`: caller Account, should correspond to Asset owner
     * - `asset_id`: Id of burned Asset,
     */
    v70: new CallType(
        'Assets.set_non_mintable',
        sts.struct({
            assetId: v70.AssetId32,
        })
    ),
}

export const updateInfo =  {
    name: 'Assets.update_info',
    /**
     * Change information about asset. Can only be done by root
     * 
     * - `origin`: caller Account, should be root
     * - `asset_id`: Id of asset to change,
     * - `new_symbol`: New asset symbol. If None asset symbol will not change
     * - `new_name`: New asset name. If None asset name will not change
     */
    v70: new CallType(
        'Assets.update_info',
        sts.struct({
            assetId: v70.AssetId32,
            newSymbol: sts.option(() => v70.AssetSymbol),
            newName: sts.option(() => v70.AssetName),
        })
    ),
}
