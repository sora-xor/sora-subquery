import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v52 from '../v52'

export const erc20Migrated =  {
    name: 'MigrationApp.Erc20Migrated',
    v52: new EventType(
        'MigrationApp.Erc20Migrated',
        sts.tuple([sts.bigint(), v52.H160])
    ),
}

export const sidechainMigrated =  {
    name: 'MigrationApp.SidechainMigrated',
    v52: new EventType(
        'MigrationApp.SidechainMigrated',
        sts.tuple([sts.bigint(), v52.H160])
    ),
}

export const ethMigrated =  {
    name: 'MigrationApp.EthMigrated',
    v52: new EventType(
        'MigrationApp.EthMigrated',
        sts.tuple([sts.bigint(), v52.H160])
    ),
}
