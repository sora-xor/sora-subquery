import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v22 from '../v22'
import * as v26 from '../v26'
import * as v42 from '../v42'
import * as v45 from '../v45'
import * as v50 from '../v50'
import * as v53 from '../v53'

export const register =  {
    name: 'Assets.register',
    /**
     *  Performs an asset registration.
     * 
     *  Registers new `AssetId` for the given `origin`.
     *  AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     *  AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    v1: new CallType(
        'Assets.register',
        sts.struct({
            symbol: v1.AssetSymbol,
            name: v1.AssetName,
            initialSupply: v1.TAssetBalance,
            isMintable: sts.boolean(),
        })
    ),
    /**
     *  Performs an asset registration.
     * 
     *  Registers new `AssetId` for the given `origin`.
     *  AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     *  AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    v22: new CallType(
        'Assets.register',
        sts.struct({
            symbol: v22.AssetSymbol,
            name: v22.AssetName,
            initialSupply: v22.TAssetBalance,
            isMintable: sts.boolean(),
            isNft: sts.boolean(),
            optContentSrc: sts.option(() => v22.ContentSource),
            optDesc: sts.option(() => v22.Description),
        })
    ),
    /**
     *  Performs an asset registration.
     * 
     *  Registers new `AssetId` for the given `origin`.
     *  AssetSymbol should represent string with only uppercase latin chars with max length of 7.
     *  AssetName should represent string with only uppercase or lowercase latin chars or numbers or spaces, with max length of 33.
     */
    v26: new CallType(
        'Assets.register',
        sts.struct({
            symbol: v26.AssetSymbol,
            name: v26.AssetName,
            initialSupply: v26.TAssetBalance,
            isMintable: sts.boolean(),
            isIndivisible: sts.boolean(),
            optContentSrc: sts.option(() => v26.ContentSource),
            optDesc: sts.option(() => v26.Description),
        })
    ),
}

export const transfer =  {
    name: 'Assets.transfer',
    /**
     *  Performs a checked Asset transfer.
     * 
     *  - `origin`: caller Account, from which Asset amount is withdrawn,
     *  - `asset_id`: Id of transferred Asset,
     *  - `to`: Id of Account, to which Asset amount is deposited,
     *  - `amount`: transferred Asset amount.
     */
    v1: new CallType(
        'Assets.transfer',
        sts.struct({
            assetId: v1.AssetId,
            to: v1.AccountId,
            amount: v1.TAssetBalance,
        })
    ),
    /**
     * Performs a checked Asset transfer.
     * 
     * - `origin`: caller Account, from which Asset amount is withdrawn,
     * - `asset_id`: Id of transferred Asset,
     * - `to`: Id of Account, to which Asset amount is deposited,
     * - `amount`: transferred Asset amount.
     */
    v42: new CallType(
        'Assets.transfer',
        sts.struct({
            assetId: v42.AssetId32,
            to: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const mint =  {
    name: 'Assets.mint',
    /**
     *  Performs a checked Asset mint, can only be done
     *  by corresponding asset owner account.
     * 
     *  - `origin`: caller Account, which issues Asset minting,
     *  - `asset_id`: Id of minted Asset,
     *  - `to`: Id of Account, to which Asset amount is minted,
     *  - `amount`: minted Asset amount.
     */
    v1: new CallType(
        'Assets.mint',
        sts.struct({
            assetId: v1.AssetId,
            to: v1.AccountId,
            amount: v1.TAssetBalance,
        })
    ),
    /**
     * Performs a checked Asset mint, can only be done
     * by corresponding asset owner account.
     * 
     * - `origin`: caller Account, which issues Asset minting,
     * - `asset_id`: Id of minted Asset,
     * - `to`: Id of Account, to which Asset amount is minted,
     * - `amount`: minted Asset amount.
     */
    v42: new CallType(
        'Assets.mint',
        sts.struct({
            assetId: v42.AssetId32,
            to: v42.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const burn =  {
    name: 'Assets.burn',
    /**
     *  Performs a checked Asset burn, can only be done
     *  by corresponding asset owner with own account.
     * 
     *  - `origin`: caller Account, from which Asset amount is burned,
     *  - `asset_id`: Id of burned Asset,
     *  - `amount`: burned Asset amount.
     */
    v1: new CallType(
        'Assets.burn',
        sts.struct({
            assetId: v1.AssetId,
            amount: v1.TAssetBalance,
        })
    ),
    /**
     * Performs a checked Asset burn, can only be done
     * by corresponding asset owner with own account.
     * 
     * - `origin`: caller Account, from which Asset amount is burned,
     * - `asset_id`: Id of burned Asset,
     * - `amount`: burned Asset amount.
     */
    v42: new CallType(
        'Assets.burn',
        sts.struct({
            assetId: v42.AssetId32,
            amount: sts.bigint(),
        })
    ),
}

export const setNonMintable =  {
    name: 'Assets.set_non_mintable',
    /**
     *  Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     *  Operation can not be undone.
     * 
     *  - `origin`: caller Account, should correspond to Asset owner
     *  - `asset_id`: Id of burned Asset,
     */
    v1: new CallType(
        'Assets.set_non_mintable',
        sts.struct({
            assetId: v1.AssetId,
        })
    ),
    /**
     * Set given asset to be non-mintable, i.e. it can no longer be minted, only burned.
     * Operation can not be undone.
     * 
     * - `origin`: caller Account, should correspond to Asset owner
     * - `asset_id`: Id of burned Asset,
     */
    v42: new CallType(
        'Assets.set_non_mintable',
        sts.struct({
            assetId: v42.AssetId32,
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
    v45: new CallType(
        'Assets.force_mint',
        sts.struct({
            assetId: v45.AssetId32,
            to: v45.AccountId32,
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
    v50: new CallType(
        'Assets.update_balance',
        sts.struct({
            who: v50.AccountId32,
            currencyId: v50.AssetId32,
            amount: sts.bigint(),
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
    v53: new CallType(
        'Assets.update_info',
        sts.struct({
            assetId: v53.AssetId32,
            newSymbol: sts.option(() => v53.AssetSymbol),
            newName: sts.option(() => v53.AssetName),
        })
    ),
}
