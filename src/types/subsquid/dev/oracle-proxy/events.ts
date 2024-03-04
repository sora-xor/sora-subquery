import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const oracleEnabled =  {
    name: 'OracleProxy.OracleEnabled',
    /**
     * Oracle was successfully enabled. [oracle]
     */
    v70: new EventType(
        'OracleProxy.OracleEnabled',
        v70.Oracle
    ),
}

export const oracleDisabled =  {
    name: 'OracleProxy.OracleDisabled',
    /**
     * Oracle was successfully disabled. [oracle]
     */
    v70: new EventType(
        'OracleProxy.OracleDisabled',
        v70.Oracle
    ),
}
