import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v33: new StorageType('Identity.IdentityOf', 'Optional', [v33.AccountId], v33.Registration) as IdentityOfV33,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<(v33.Registration | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.Registration | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.Registration | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.Registration | undefined)][]>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    v33: new StorageType('Identity.SuperOf', 'Optional', [v33.AccountId], sts.tuple(() => [v33.AccountId, v33.Data])) as SuperOfV33,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.AccountId): Promise<([v33.AccountId, v33.Data] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<([v33.AccountId, v33.Data] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: ([v33.AccountId, v33.Data] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: ([v33.AccountId, v33.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: ([v33.AccountId, v33.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: ([v33.AccountId, v33.Data] | undefined)][]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v33: new StorageType('Identity.SubsOf', 'Default', [v33.AccountId], sts.tuple(() => [v33.BalanceOf, sts.array(() => v33.AccountId)])) as SubsOfV33,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.BalanceOf, v33.AccountId[]]
    get(block: Block, key: v33.AccountId): Promise<([v33.BalanceOf, v33.AccountId[]] | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<([v33.BalanceOf, v33.AccountId[]] | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: ([v33.BalanceOf, v33.AccountId[]] | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: ([v33.BalanceOf, v33.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: ([v33.BalanceOf, v33.AccountId[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: ([v33.BalanceOf, v33.AccountId[]] | undefined)][]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    v33: new StorageType('Identity.Registrars', 'Default', [], sts.array(() => sts.option(() => v33.RegistrarInfo))) as RegistrarsV33,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v33.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((v33.RegistrarInfo | undefined)[] | undefined)>
}
