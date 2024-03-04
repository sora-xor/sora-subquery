import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v57 from '../v57'

export const minted =  {
    name: 'Technical.Minted',
    /**
     *  Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     *  This is not only for pure TechAccountId.
     *  TechAccountId can be just wrapped AccountId.
     */
    v1: new EventType(
        'Technical.Minted',
        sts.tuple([v1.TechAssetId, v1.TechAccountId, v1.Balance, v1.Balance])
    ),
    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    v42: new EventType(
        'Technical.Minted',
        sts.tuple([v42.TechAssetId, v42.TechAccountId, sts.bigint(), sts.bigint()])
    ),
    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    v46: new EventType(
        'Technical.Minted',
        sts.tuple([v46.TechAssetId, v46.TechAccountId, sts.bigint(), sts.bigint()])
    ),
    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    v57: new EventType(
        'Technical.Minted',
        sts.tuple([v57.TechAssetId, v57.TechAccountId, sts.bigint(), sts.bigint()])
    ),
}

export const burned =  {
    name: 'Technical.Burned',
    /**
     *  Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     *  For full kind of accounts like in Minted.
     */
    v1: new EventType(
        'Technical.Burned',
        sts.tuple([v1.TechAssetId, v1.TechAccountId, v1.Balance, v1.Balance])
    ),
    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    v42: new EventType(
        'Technical.Burned',
        sts.tuple([v42.TechAssetId, v42.TechAccountId, sts.bigint(), sts.bigint()])
    ),
    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    v46: new EventType(
        'Technical.Burned',
        sts.tuple([v46.TechAssetId, v46.TechAccountId, sts.bigint(), sts.bigint()])
    ),
    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    v57: new EventType(
        'Technical.Burned',
        sts.tuple([v57.TechAssetId, v57.TechAccountId, sts.bigint(), sts.bigint()])
    ),
}

export const outputTransferred =  {
    name: 'Technical.OutputTransferred',
    /**
     *  Some assets were transferred out. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    v1: new EventType(
        'Technical.OutputTransferred',
        sts.tuple([v1.TechAssetId, v1.TechAccountId, v1.AccountId, v1.Balance])
    ),
    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v42: new EventType(
        'Technical.OutputTransferred',
        sts.tuple([v42.TechAssetId, v42.TechAccountId, v42.AccountId32, sts.bigint()])
    ),
    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v46: new EventType(
        'Technical.OutputTransferred',
        sts.tuple([v46.TechAssetId, v46.TechAccountId, v46.AccountId32, sts.bigint()])
    ),
    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v57: new EventType(
        'Technical.OutputTransferred',
        sts.tuple([v57.TechAssetId, v57.TechAccountId, v57.AccountId32, sts.bigint()])
    ),
}

export const inputTransferred =  {
    name: 'Technical.InputTransferred',
    /**
     *  Some assets were transferred in. [asset, from, to, amount].
     *  TechAccountId is only pure TechAccountId.
     */
    v1: new EventType(
        'Technical.InputTransferred',
        sts.tuple([v1.TechAssetId, v1.AccountId, v1.TechAccountId, v1.Balance])
    ),
    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v42: new EventType(
        'Technical.InputTransferred',
        sts.tuple([v42.TechAssetId, v42.AccountId32, v42.TechAccountId, sts.bigint()])
    ),
    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v46: new EventType(
        'Technical.InputTransferred',
        sts.tuple([v46.TechAssetId, v46.AccountId32, v46.TechAccountId, sts.bigint()])
    ),
    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v57: new EventType(
        'Technical.InputTransferred',
        sts.tuple([v57.TechAssetId, v57.AccountId32, v57.TechAccountId, sts.bigint()])
    ),
}

export const swapSuccess =  {
    name: 'Technical.SwapSuccess',
    /**
     *  Swap operaction is finalised [initiator, finaliser].
     *  TechAccountId is only pure TechAccountId.
     */
    v1: new EventType(
        'Technical.SwapSuccess',
        v1.AccountId
    ),
}
