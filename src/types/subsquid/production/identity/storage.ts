import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v3 from '../v3'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v3: new StorageType('Identity.IdentityOf', 'Optional', [v3.AccountId], v3.Registration) as IdentityOfV3,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v3.AccountId): Promise<(v3.Registration | undefined)>
    getMany(block: Block, keys: v3.AccountId[]): Promise<(v3.Registration | undefined)[]>
    getKeys(block: Block): Promise<v3.AccountId[]>
    getKeys(block: Block, key: v3.AccountId): Promise<v3.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v3.AccountId): AsyncIterable<v3.AccountId[]>
    getPairs(block: Block): Promise<[k: v3.AccountId, v: (v3.Registration | undefined)][]>
    getPairs(block: Block, key: v3.AccountId): Promise<[k: v3.AccountId, v: (v3.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3.AccountId, v: (v3.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3.AccountId): AsyncIterable<[k: v3.AccountId, v: (v3.Registration | undefined)][]>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    v3: new StorageType('Identity.SuperOf', 'Optional', [v3.AccountId], sts.tuple(() => [v3.AccountId, v3.Data])) as SuperOfV3,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v3.AccountId): Promise<([v3.AccountId, v3.Data] | undefined)>
    getMany(block: Block, keys: v3.AccountId[]): Promise<([v3.AccountId, v3.Data] | undefined)[]>
    getKeys(block: Block): Promise<v3.AccountId[]>
    getKeys(block: Block, key: v3.AccountId): Promise<v3.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v3.AccountId): AsyncIterable<v3.AccountId[]>
    getPairs(block: Block): Promise<[k: v3.AccountId, v: ([v3.AccountId, v3.Data] | undefined)][]>
    getPairs(block: Block, key: v3.AccountId): Promise<[k: v3.AccountId, v: ([v3.AccountId, v3.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3.AccountId, v: ([v3.AccountId, v3.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3.AccountId): AsyncIterable<[k: v3.AccountId, v: ([v3.AccountId, v3.Data] | undefined)][]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v3: new StorageType('Identity.SubsOf', 'Default', [v3.AccountId], sts.tuple(() => [v3.BalanceOf, sts.array(() => v3.AccountId)])) as SubsOfV3,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfV3  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v3.BalanceOf, v3.AccountId[]]
    get(block: Block, key: v3.AccountId): Promise<([v3.BalanceOf, v3.AccountId[]] | undefined)>
    getMany(block: Block, keys: v3.AccountId[]): Promise<([v3.BalanceOf, v3.AccountId[]] | undefined)[]>
    getKeys(block: Block): Promise<v3.AccountId[]>
    getKeys(block: Block, key: v3.AccountId): Promise<v3.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v3.AccountId): AsyncIterable<v3.AccountId[]>
    getPairs(block: Block): Promise<[k: v3.AccountId, v: ([v3.BalanceOf, v3.AccountId[]] | undefined)][]>
    getPairs(block: Block, key: v3.AccountId): Promise<[k: v3.AccountId, v: ([v3.BalanceOf, v3.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3.AccountId, v: ([v3.BalanceOf, v3.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3.AccountId): AsyncIterable<[k: v3.AccountId, v: ([v3.BalanceOf, v3.AccountId[]] | undefined)][]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    v3: new StorageType('Identity.Registrars', 'Default', [], sts.array(() => sts.option(() => v3.RegistrarInfo))) as RegistrarsV3,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsV3  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v3.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((v3.RegistrarInfo | undefined)[] | undefined)>
}
