import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v45 from '../v45'

export const oracleEnabled =  {
    name: 'OracleProxy.OracleEnabled',
    /**
     * Oracle was successfully enabled. [oracle]
     */
    v45: new EventType(
        'OracleProxy.OracleEnabled',
        v45.Oracle
    ),
}

export const oracleDisabled =  {
    name: 'OracleProxy.OracleDisabled',
    /**
     * Oracle was successfully disabled. [oracle]
     */
    v45: new EventType(
        'OracleProxy.OracleDisabled',
        v45.Oracle
    ),
}
