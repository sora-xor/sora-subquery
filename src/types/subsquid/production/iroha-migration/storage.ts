import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v42 from '../v42'

export const balances =  {
    v1: new StorageType('IrohaMigration.Balances', 'Optional', [v1.String], v1.Balance) as BalancesV1,
    v42: new StorageType('IrohaMigration.Balances', 'Optional', [sts.string()], sts.bigint()) as BalancesV42,
}

export interface BalancesV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.String): Promise<(v1.Balance | undefined)>
    getMany(block: Block, keys: v1.String[]): Promise<(v1.Balance | undefined)[]>
    getKeys(block: Block): Promise<v1.String[]>
    getKeys(block: Block, key: v1.String): Promise<v1.String[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.String[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<v1.String[]>
    getPairs(block: Block): Promise<[k: v1.String, v: (v1.Balance | undefined)][]>
    getPairs(block: Block, key: v1.String): Promise<[k: v1.String, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.String, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<[k: v1.String, v: (v1.Balance | undefined)][]>
}

export interface BalancesV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: string): Promise<(bigint | undefined)>
    getMany(block: Block, keys: string[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (bigint | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (bigint | undefined)][]>
}

export const referrers =  {
    v1: new StorageType('IrohaMigration.Referrers', 'Optional', [v1.String], v1.String) as ReferrersV1,
    v42: new StorageType('IrohaMigration.Referrers', 'Optional', [sts.string()], sts.string()) as ReferrersV42,
}

export interface ReferrersV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.String): Promise<(v1.String | undefined)>
    getMany(block: Block, keys: v1.String[]): Promise<(v1.String | undefined)[]>
    getKeys(block: Block): Promise<v1.String[]>
    getKeys(block: Block, key: v1.String): Promise<v1.String[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.String[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<v1.String[]>
    getPairs(block: Block): Promise<[k: v1.String, v: (v1.String | undefined)][]>
    getPairs(block: Block, key: v1.String): Promise<[k: v1.String, v: (v1.String | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.String, v: (v1.String | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<[k: v1.String, v: (v1.String | undefined)][]>
}

export interface ReferrersV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: string): Promise<(string | undefined)>
    getMany(block: Block, keys: string[]): Promise<(string | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (string | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (string | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (string | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (string | undefined)][]>
}

export const publicKeys =  {
    v1: new StorageType('IrohaMigration.PublicKeys', 'Default', [v1.String], sts.array(() => sts.tuple(() => [sts.boolean(), v1.String]))) as PublicKeysV1,
    v42: new StorageType('IrohaMigration.PublicKeys', 'Default', [sts.string()], sts.array(() => sts.tuple(() => [sts.boolean(), sts.string()]))) as PublicKeysV42,
}

export interface PublicKeysV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [boolean, v1.String][]
    get(block: Block, key: v1.String): Promise<([boolean, v1.String][] | undefined)>
    getMany(block: Block, keys: v1.String[]): Promise<([boolean, v1.String][] | undefined)[]>
    getKeys(block: Block): Promise<v1.String[]>
    getKeys(block: Block, key: v1.String): Promise<v1.String[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.String[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<v1.String[]>
    getPairs(block: Block): Promise<[k: v1.String, v: ([boolean, v1.String][] | undefined)][]>
    getPairs(block: Block, key: v1.String): Promise<[k: v1.String, v: ([boolean, v1.String][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.String, v: ([boolean, v1.String][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<[k: v1.String, v: ([boolean, v1.String][] | undefined)][]>
}

export interface PublicKeysV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [boolean, string][]
    get(block: Block, key: string): Promise<([boolean, string][] | undefined)>
    getMany(block: Block, keys: string[]): Promise<([boolean, string][] | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: ([boolean, string][] | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: ([boolean, string][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: ([boolean, string][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: ([boolean, string][] | undefined)][]>
}

export const quorums =  {
    v1: new StorageType('IrohaMigration.Quorums', 'Default', [v1.String], sts.number()) as QuorumsV1,
    v42: new StorageType('IrohaMigration.Quorums', 'Default', [sts.string()], sts.number()) as QuorumsV42,
}

export interface QuorumsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v1.String): Promise<(number | undefined)>
    getMany(block: Block, keys: v1.String[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v1.String[]>
    getKeys(block: Block, key: v1.String): Promise<v1.String[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.String[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<v1.String[]>
    getPairs(block: Block): Promise<[k: v1.String, v: (number | undefined)][]>
    getPairs(block: Block, key: v1.String): Promise<[k: v1.String, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.String, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<[k: v1.String, v: (number | undefined)][]>
}

export interface QuorumsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: string): Promise<(number | undefined)>
    getMany(block: Block, keys: string[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (number | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (number | undefined)][]>
}

export const account =  {
    v1: new StorageType('IrohaMigration.Account', 'Default', [], v1.AccountId) as AccountV1,
    v42: new StorageType('IrohaMigration.Account', 'Optional', [], v42.AccountId32) as AccountV42,
}

export interface AccountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId
    get(block: Block): Promise<(v1.AccountId | undefined)>
}

export interface AccountV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.AccountId32 | undefined)>
}

export const migratedAccounts =  {
    v1: new StorageType('IrohaMigration.MigratedAccounts', 'Optional', [v1.String], v1.AccountId) as MigratedAccountsV1,
    v42: new StorageType('IrohaMigration.MigratedAccounts', 'Optional', [sts.string()], v42.AccountId32) as MigratedAccountsV42,
}

export interface MigratedAccountsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.String): Promise<(v1.AccountId | undefined)>
    getMany(block: Block, keys: v1.String[]): Promise<(v1.AccountId | undefined)[]>
    getKeys(block: Block): Promise<v1.String[]>
    getKeys(block: Block, key: v1.String): Promise<v1.String[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.String[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<v1.String[]>
    getPairs(block: Block): Promise<[k: v1.String, v: (v1.AccountId | undefined)][]>
    getPairs(block: Block, key: v1.String): Promise<[k: v1.String, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.String, v: (v1.AccountId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<[k: v1.String, v: (v1.AccountId | undefined)][]>
}

export interface MigratedAccountsV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: string): Promise<(v42.AccountId32 | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v42.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v42.AccountId32 | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v42.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v42.AccountId32 | undefined)][]>
}

export const pendingMultiSigAccounts =  {
    v1: new StorageType('IrohaMigration.PendingMultiSigAccounts', 'Default', [v1.String], v1.PendingMultisigAccount) as PendingMultiSigAccountsV1,
    v42: new StorageType('IrohaMigration.PendingMultiSigAccounts', 'Default', [sts.string()], v42.PendingMultisigAccount) as PendingMultiSigAccountsV42,
}

export interface PendingMultiSigAccountsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.PendingMultisigAccount
    get(block: Block, key: v1.String): Promise<(v1.PendingMultisigAccount | undefined)>
    getMany(block: Block, keys: v1.String[]): Promise<(v1.PendingMultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<v1.String[]>
    getKeys(block: Block, key: v1.String): Promise<v1.String[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.String[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<v1.String[]>
    getPairs(block: Block): Promise<[k: v1.String, v: (v1.PendingMultisigAccount | undefined)][]>
    getPairs(block: Block, key: v1.String): Promise<[k: v1.String, v: (v1.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.String, v: (v1.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<[k: v1.String, v: (v1.PendingMultisigAccount | undefined)][]>
}

export interface PendingMultiSigAccountsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.PendingMultisigAccount
    get(block: Block, key: string): Promise<(v42.PendingMultisigAccount | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v42.PendingMultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v42.PendingMultisigAccount | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v42.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v42.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v42.PendingMultisigAccount | undefined)][]>
}

export const pendingReferrals =  {
    v1: new StorageType('IrohaMigration.PendingReferrals', 'Default', [v1.String], sts.array(() => v1.AccountId)) as PendingReferralsV1,
    v42: new StorageType('IrohaMigration.PendingReferrals', 'Default', [sts.string()], sts.array(() => v42.AccountId32)) as PendingReferralsV42,
}

export interface PendingReferralsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId[]
    get(block: Block, key: v1.String): Promise<(v1.AccountId[] | undefined)>
    getMany(block: Block, keys: v1.String[]): Promise<(v1.AccountId[] | undefined)[]>
    getKeys(block: Block): Promise<v1.String[]>
    getKeys(block: Block, key: v1.String): Promise<v1.String[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.String[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<v1.String[]>
    getPairs(block: Block): Promise<[k: v1.String, v: (v1.AccountId[] | undefined)][]>
    getPairs(block: Block, key: v1.String): Promise<[k: v1.String, v: (v1.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.String, v: (v1.AccountId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.String): AsyncIterable<[k: v1.String, v: (v1.AccountId[] | undefined)][]>
}

export interface PendingReferralsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AccountId32[]
    get(block: Block, key: string): Promise<(v42.AccountId32[] | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v42.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v42.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v42.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v42.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v42.AccountId32[] | undefined)][]>
}
