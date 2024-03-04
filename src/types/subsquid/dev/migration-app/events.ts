import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const erc20Migrated =  {
    name: 'MigrationApp.Erc20Migrated',
    v70: new EventType(
        'MigrationApp.Erc20Migrated',
        sts.tuple([sts.bigint(), v70.H160])
    ),
}

export const sidechainMigrated =  {
    name: 'MigrationApp.SidechainMigrated',
    v70: new EventType(
        'MigrationApp.SidechainMigrated',
        sts.tuple([sts.bigint(), v70.H160])
    ),
}

export const ethMigrated =  {
    name: 'MigrationApp.EthMigrated',
    v70: new EventType(
        'MigrationApp.EthMigrated',
        sts.tuple([sts.bigint(), v70.H160])
    ),
}
