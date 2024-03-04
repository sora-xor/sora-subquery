import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const finalized =  {
    name: 'EthereumLightClient.Finalized',
    v52: new EventType(
        'EthereumLightClient.Finalized',
        sts.tuple([sts.bigint(), v52.HeaderId])
    ),
}
