import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v53 from '../v53'

export const assetRegistered =  {
    name: 'Assets.AssetRegistered',
    /**
     *  New asset has been registered. [Asset Id, Asset Owner Account]
     */
    v1: new EventType(
        'Assets.AssetRegistered',
        sts.tuple([v1.AssetId, v1.AccountId])
    ),
    /**
     * New asset has been registered. [Asset Id, Asset Owner Account]
     */
    v42: new EventType(
        'Assets.AssetRegistered',
        sts.tuple([v42.AssetId32, v42.AccountId32])
    ),
}

export const transfer =  {
    name: 'Assets.Transfer',
    /**
     *  Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    v1: new EventType(
        'Assets.Transfer',
        sts.tuple([v1.AccountId, v1.AccountId, v1.AssetId, v1.TAssetBalance])
    ),
    /**
     * Asset amount has been transfered. [From Account, To Account, Tranferred Asset Id, Amount Transferred]
     */
    v42: new EventType(
        'Assets.Transfer',
        sts.tuple([v42.AccountId32, v42.AccountId32, v42.AssetId32, sts.bigint()])
    ),
}

export const mint =  {
    name: 'Assets.Mint',
    /**
     *  Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    v1: new EventType(
        'Assets.Mint',
        sts.tuple([v1.AccountId, v1.AccountId, v1.AssetId, v1.TAssetBalance])
    ),
    /**
     * Asset amount has been minted. [Issuer Account, Target Account, Minted Asset Id, Amount Minted]
     */
    v42: new EventType(
        'Assets.Mint',
        sts.tuple([v42.AccountId32, v42.AccountId32, v42.AssetId32, sts.bigint()])
    ),
}

export const burn =  {
    name: 'Assets.Burn',
    /**
     *  Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    v1: new EventType(
        'Assets.Burn',
        sts.tuple([v1.AccountId, v1.AssetId, v1.TAssetBalance])
    ),
    /**
     * Asset amount has been burned. [Issuer Account, Burned Asset Id, Amount Burned]
     */
    v42: new EventType(
        'Assets.Burn',
        sts.tuple([v42.AccountId32, v42.AssetId32, sts.bigint()])
    ),
}

export const assetSetNonMintable =  {
    name: 'Assets.AssetSetNonMintable',
    /**
     *  Asset is set as non-mintable. [Target Asset Id]
     */
    v1: new EventType(
        'Assets.AssetSetNonMintable',
        v1.AssetId
    ),
    /**
     * Asset is set as non-mintable. [Target Asset Id]
     */
    v42: new EventType(
        'Assets.AssetSetNonMintable',
        v42.AssetId32
    ),
}

export const assetUpdated =  {
    name: 'Assets.AssetUpdated',
    /**
     * Asset info has been updated
     */
    v53: new EventType(
        'Assets.AssetUpdated',
        sts.tuple([v53.AssetId32, sts.option(() => v53.AssetSymbol), sts.option(() => v53.AssetName)])
    ),
}
