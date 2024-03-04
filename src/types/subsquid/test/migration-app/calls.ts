import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v52 from '../v52'
import * as v54 from '../v54'

export const migrateErc20 =  {
    name: 'MigrationApp.migrate_erc20',
    v52: new CallType(
        'MigrationApp.migrate_erc20',
        sts.struct({
            networkId: sts.bigint(),
            erc20Assets: sts.array(() => sts.tuple(() => [v52.AssetId32, v52.H160])),
        })
    ),
    v54: new CallType(
        'MigrationApp.migrate_erc20',
        sts.struct({
            networkId: sts.bigint(),
            erc20Assets: sts.array(() => sts.tuple(() => [v54.AssetId32, v54.H160, sts.number()])),
        })
    ),
}

export const migrateSidechain =  {
    name: 'MigrationApp.migrate_sidechain',
    v52: new CallType(
        'MigrationApp.migrate_sidechain',
        sts.struct({
            networkId: sts.bigint(),
            sidechainAssets: sts.array(() => sts.tuple(() => [v52.AssetId32, v52.H160])),
        })
    ),
    v54: new CallType(
        'MigrationApp.migrate_sidechain',
        sts.struct({
            networkId: sts.bigint(),
            sidechainAssets: sts.array(() => sts.tuple(() => [v54.AssetId32, v54.H160, sts.number()])),
        })
    ),
}

export const migrateEth =  {
    name: 'MigrationApp.migrate_eth',
    v52: new CallType(
        'MigrationApp.migrate_eth',
        sts.struct({
            networkId: sts.bigint(),
        })
    ),
}

export const registerNetwork =  {
    name: 'MigrationApp.register_network',
    v52: new CallType(
        'MigrationApp.register_network',
        sts.struct({
            networkId: sts.bigint(),
            contract: v52.H160,
        })
    ),
}
