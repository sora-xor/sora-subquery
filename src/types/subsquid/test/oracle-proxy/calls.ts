import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v45 from '../v45'

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
    v45: new CallType(
        'OracleProxy.enable_oracle',
        sts.struct({
            oracle: v45.Oracle,
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
    v45: new CallType(
        'OracleProxy.disable_oracle',
        sts.struct({
            oracle: v45.Oracle,
        })
    ),
}
