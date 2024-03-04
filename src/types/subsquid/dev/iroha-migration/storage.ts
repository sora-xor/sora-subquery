import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const balances =  {
    v70: new StorageType('IrohaMigration.Balances', 'Optional', [sts.string()], sts.bigint()) as BalancesV70,
}

export interface BalancesV70  {
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
    v70: new StorageType('IrohaMigration.Referrers', 'Optional', [sts.string()], sts.string()) as ReferrersV70,
}

export interface ReferrersV70  {
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
    v70: new StorageType('IrohaMigration.PublicKeys', 'Default', [sts.string()], sts.array(() => sts.tuple(() => [sts.boolean(), sts.string()]))) as PublicKeysV70,
}

export interface PublicKeysV70  {
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
    v70: new StorageType('IrohaMigration.Quorums', 'Default', [sts.string()], sts.number()) as QuorumsV70,
}

export interface QuorumsV70  {
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
    v70: new StorageType('IrohaMigration.Account', 'Optional', [], v70.AccountId32) as AccountV70,
}

export interface AccountV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v70.AccountId32 | undefined)>
}

export const migratedAccounts =  {
    v70: new StorageType('IrohaMigration.MigratedAccounts', 'Optional', [sts.string()], v70.AccountId32) as MigratedAccountsV70,
}

export interface MigratedAccountsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: string): Promise<(v70.AccountId32 | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v70.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v70.AccountId32 | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v70.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v70.AccountId32 | undefined)][]>
}

export const pendingMultiSigAccounts =  {
    v70: new StorageType('IrohaMigration.PendingMultiSigAccounts', 'Default', [sts.string()], v70.PendingMultisigAccount) as PendingMultiSigAccountsV70,
}

export interface PendingMultiSigAccountsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.PendingMultisigAccount
    get(block: Block, key: string): Promise<(v70.PendingMultisigAccount | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v70.PendingMultisigAccount | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v70.PendingMultisigAccount | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v70.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v70.PendingMultisigAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v70.PendingMultisigAccount | undefined)][]>
}

export const pendingReferrals =  {
    v70: new StorageType('IrohaMigration.PendingReferrals', 'Default', [sts.string()], sts.array(() => v70.AccountId32)) as PendingReferralsV70,
}

export interface PendingReferralsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AccountId32[]
    get(block: Block, key: string): Promise<(v70.AccountId32[] | undefined)>
    getMany(block: Block, keys: string[]): Promise<(v70.AccountId32[] | undefined)[]>
    getKeys(block: Block): Promise<string[]>
    getKeys(block: Block, key: string): Promise<string[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<string[]>
    getKeysPaged(pageSize: number, block: Block, key: string): AsyncIterable<string[]>
    getPairs(block: Block): Promise<[k: string, v: (v70.AccountId32[] | undefined)][]>
    getPairs(block: Block, key: string): Promise<[k: string, v: (v70.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: string, v: (v70.AccountId32[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: string): AsyncIterable<[k: string, v: (v70.AccountId32[] | undefined)][]>
}
