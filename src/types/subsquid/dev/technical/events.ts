import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const minted =  {
    name: 'Technical.Minted',
    /**
     * Some pure technical assets were minted. [asset, owner, minted_amount, total_exist].
     * This is not only for pure TechAccountId.
     * TechAccountId can be just wrapped AccountId.
     */
    v70: new EventType(
        'Technical.Minted',
        sts.tuple([v70.TechAssetId, v70.TechAccountId, sts.bigint(), sts.bigint()])
    ),
}

export const burned =  {
    name: 'Technical.Burned',
    /**
     * Some pure technical assets were burned. [asset, owner, burned_amount, total_exist].
     * For full kind of accounts like in Minted.
     */
    v70: new EventType(
        'Technical.Burned',
        sts.tuple([v70.TechAssetId, v70.TechAccountId, sts.bigint(), sts.bigint()])
    ),
}

export const outputTransferred =  {
    name: 'Technical.OutputTransferred',
    /**
     * Some assets were transferred out. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v70: new EventType(
        'Technical.OutputTransferred',
        sts.tuple([v70.TechAssetId, v70.TechAccountId, v70.AccountId32, sts.bigint()])
    ),
}

export const inputTransferred =  {
    name: 'Technical.InputTransferred',
    /**
     * Some assets were transferred in. [asset, from, to, amount].
     * TechAccountId is only pure TechAccountId.
     */
    v70: new EventType(
        'Technical.InputTransferred',
        sts.tuple([v70.TechAssetId, v70.AccountId32, v70.TechAccountId, sts.bigint()])
    ),
}

export const swapSuccess =  {
    name: 'Technical.SwapSuccess',
    /**
     * Swap operaction is finalised [initiator, finaliser].
     * TechAccountId is only pure TechAccountId.
     */
    v70: new EventType(
        'Technical.SwapSuccess',
        v70.AccountId32
    ),
}
