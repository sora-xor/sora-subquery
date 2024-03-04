import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const finalized =  {
    name: 'EthereumLightClient.Finalized',
    v70: new EventType(
        'EthereumLightClient.Finalized',
        sts.tuple([sts.bigint(), v70.HeaderId])
    ),
}
