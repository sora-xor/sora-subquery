import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v70: new StorageType('Identity.IdentityOf', 'Optional', [v70.AccountId32], v70.Registration) as IdentityOfV70,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<(v70.Registration | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<(v70.Registration | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: (v70.Registration | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: (v70.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: (v70.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: (v70.Registration | undefined)][]>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    v70: new StorageType('Identity.SuperOf', 'Optional', [v70.AccountId32], sts.tuple(() => [v70.AccountId32, v70.Data])) as SuperOfV70,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.AccountId32): Promise<([v70.AccountId32, v70.Data] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<([v70.AccountId32, v70.Data] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: ([v70.AccountId32, v70.Data] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: ([v70.AccountId32, v70.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: ([v70.AccountId32, v70.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: ([v70.AccountId32, v70.Data] | undefined)][]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v70: new StorageType('Identity.SubsOf', 'Default', [v70.AccountId32], sts.tuple(() => [sts.bigint(), sts.array(() => v70.AccountId32)])) as SubsOfV70,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, v70.AccountId32[]]
    get(block: Block, key: v70.AccountId32): Promise<([bigint, v70.AccountId32[]] | undefined)>
    getMany(block: Block, keys: v70.AccountId32[]): Promise<([bigint, v70.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<v70.AccountId32[]>
    getKeys(block: Block, key: v70.AccountId32): Promise<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<v70.AccountId32[]>
    getPairs(block: Block): Promise<[k: v70.AccountId32, v: ([bigint, v70.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: v70.AccountId32): Promise<[k: v70.AccountId32, v: ([bigint, v70.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.AccountId32, v: ([bigint, v70.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.AccountId32): AsyncIterable<[k: v70.AccountId32, v: ([bigint, v70.AccountId32[]] | undefined)][]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    v70: new StorageType('Identity.Registrars', 'Default', [], sts.array(() => sts.option(() => v70.RegistrarInfo))) as RegistrarsV70,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v70.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((v70.RegistrarInfo | undefined)[] | undefined)>
}
