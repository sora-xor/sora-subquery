import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const migrateErc20 =  {
    name: 'MigrationApp.migrate_erc20',
    v70: new CallType(
        'MigrationApp.migrate_erc20',
        sts.struct({
            networkId: sts.bigint(),
            erc20Assets: sts.array(() => sts.tuple(() => [v70.AssetId32, v70.H160, sts.number()])),
        })
    ),
}

export const migrateSidechain =  {
    name: 'MigrationApp.migrate_sidechain',
    v70: new CallType(
        'MigrationApp.migrate_sidechain',
        sts.struct({
            networkId: sts.bigint(),
            sidechainAssets: sts.array(() => sts.tuple(() => [v70.AssetId32, v70.H160, sts.number()])),
        })
    ),
}

export const migrateEth =  {
    name: 'MigrationApp.migrate_eth',
    v70: new CallType(
        'MigrationApp.migrate_eth',
        sts.struct({
            networkId: sts.bigint(),
        })
    ),
}

export const registerNetwork =  {
    name: 'MigrationApp.register_network',
    v70: new CallType(
        'MigrationApp.register_network',
        sts.struct({
            networkId: sts.bigint(),
            contract: v70.H160,
        })
    ),
}
