import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const enableOracle =  {
    name: 'OracleProxy.enable_oracle',
    /**
     * Enables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be enabled
     */
    v70: new CallType(
        'OracleProxy.enable_oracle',
        sts.struct({
            oracle: v70.Oracle,
        })
    ),
}

export const disableOracle =  {
    name: 'OracleProxy.disable_oracle',
    /**
     * Disables a specified oracle
     * 
     * Checks if the caller is root
     * 
     * - `origin`: the sudo account
     * - `oracle`: oracle variant which should be disabled
     */
    v70: new CallType(
        'OracleProxy.disable_oracle',
        sts.struct({
            oracle: v70.Oracle,
        })
    ),
}
