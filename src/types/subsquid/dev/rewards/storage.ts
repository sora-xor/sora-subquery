import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const reservesAcc =  {
    v70: new StorageType('Rewards.ReservesAcc', 'Default', [], v70.TechAccountId) as ReservesAccV70,
}

export interface ReservesAccV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.TechAccountId
    get(block: Block): Promise<(v70.TechAccountId | undefined)>
}

export const valOwners =  {
    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    v70: new StorageType('Rewards.ValOwners', 'Default', [v70.H160], v70.RewardInfo) as ValOwnersV70,
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface ValOwnersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.RewardInfo
    get(block: Block, key: v70.H160): Promise<(v70.RewardInfo | undefined)>
    getMany(block: Block, keys: v70.H160[]): Promise<(v70.RewardInfo | undefined)[]>
    getKeys(block: Block): Promise<v70.H160[]>
    getKeys(block: Block, key: v70.H160): Promise<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<v70.H160[]>
    getPairs(block: Block): Promise<[k: v70.H160, v: (v70.RewardInfo | undefined)][]>
    getPairs(block: Block, key: v70.H160): Promise<[k: v70.H160, v: (v70.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H160, v: (v70.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<[k: v70.H160, v: (v70.RewardInfo | undefined)][]>
}

export const pswapFarmOwners =  {
    v70: new StorageType('Rewards.PswapFarmOwners', 'Default', [v70.H160], sts.bigint()) as PswapFarmOwnersV70,
}

export interface PswapFarmOwnersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v70.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v70.H160[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v70.H160[]>
    getKeys(block: Block, key: v70.H160): Promise<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<v70.H160[]>
    getPairs(block: Block): Promise<[k: v70.H160, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v70.H160): Promise<[k: v70.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<[k: v70.H160, v: (bigint | undefined)][]>
}

export const pswapWaifuOwners =  {
    v70: new StorageType('Rewards.PswapWaifuOwners', 'Default', [v70.H160], sts.bigint()) as PswapWaifuOwnersV70,
}

export interface PswapWaifuOwnersV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v70.H160): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v70.H160[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v70.H160[]>
    getKeys(block: Block, key: v70.H160): Promise<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<v70.H160[]>
    getPairs(block: Block): Promise<[k: v70.H160, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v70.H160): Promise<[k: v70.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H160, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<[k: v70.H160, v: (bigint | undefined)][]>
}

export const umiNftReceivers =  {
    /**
     *  UMI NFT receivers storage
     */
    v70: new StorageType('Rewards.UmiNftReceivers', 'Default', [v70.H160], sts.array(() => sts.bigint())) as UmiNftReceiversV70,
}

/**
 *  UMI NFT receivers storage
 */
export interface UmiNftReceiversV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint[]
    get(block: Block, key: v70.H160): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: v70.H160[]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<v70.H160[]>
    getKeys(block: Block, key: v70.H160): Promise<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<v70.H160[]>
    getPairs(block: Block): Promise<[k: v70.H160, v: (bigint[] | undefined)][]>
    getPairs(block: Block, key: v70.H160): Promise<[k: v70.H160, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H160, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<[k: v70.H160, v: (bigint[] | undefined)][]>
}

export const valBurnedSinceLastVesting =  {
    /**
     *  Amount of VAL burned since last vesting
     */
    v70: new StorageType('Rewards.ValBurnedSinceLastVesting', 'Default', [], sts.bigint()) as ValBurnedSinceLastVestingV70,
}

/**
 *  Amount of VAL burned since last vesting
 */
export interface ValBurnedSinceLastVestingV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const currentClaimableVal =  {
    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    v70: new StorageType('Rewards.CurrentClaimableVal', 'Default', [], sts.bigint()) as CurrentClaimableValV70,
}

/**
 *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
 */
export interface CurrentClaimableValV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const ethAddresses =  {
    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    v70: new StorageType('Rewards.EthAddresses', 'Default', [sts.number()], sts.array(() => v70.H160)) as EthAddressesV70,
}

/**
 *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
 */
export interface EthAddressesV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H160[]
    get(block: Block, key: number): Promise<(v70.H160[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v70.H160[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v70.H160[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v70.H160[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v70.H160[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v70.H160[] | undefined)][]>
}

export const totalValRewards =  {
    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    v70: new StorageType('Rewards.TotalValRewards', 'Default', [], sts.bigint()) as TotalValRewardsV70,
}

/**
 *  Total amount of VAL rewards either claimable now or some time in the future
 */
export interface TotalValRewardsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const totalClaimableVal =  {
    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    v70: new StorageType('Rewards.TotalClaimableVal', 'Default', [], sts.bigint()) as TotalClaimableValV70,
}

/**
 *  Total amount of VAL that can be claimed by users at current point in time
 */
export interface TotalClaimableValV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const migrationPending =  {
    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    v70: new StorageType('Rewards.MigrationPending', 'Default', [], sts.boolean()) as MigrationPendingV70,
}

/**
 *  A flag indicating whether VAL rewards data migration has been finalized
 */
export interface MigrationPendingV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const umiNfts =  {
    /**
     *  The storage of available UMI NFTs.
     */
    v70: new StorageType('Rewards.UmiNfts', 'Default', [], sts.array(() => v70.AssetId32)) as UmiNftsV70,
}

/**
 *  The storage of available UMI NFTs.
 */
export interface UmiNftsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.AssetId32[]
    get(block: Block): Promise<(v70.AssetId32[] | undefined)>
}

export const umiNftClaimed =  {
    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    v70: new StorageType('Rewards.UmiNftClaimed', 'Default', [v70.H160], sts.boolean()) as UmiNftClaimedV70,
}

/**
 *  Stores whether address already claimed UMI NFT rewards.
 */
export interface UmiNftClaimedV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v70.H160): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v70.H160[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v70.H160[]>
    getKeys(block: Block, key: v70.H160): Promise<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<v70.H160[]>
    getPairs(block: Block): Promise<[k: v70.H160, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v70.H160): Promise<[k: v70.H160, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H160, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H160): AsyncIterable<[k: v70.H160, v: (boolean | undefined)][]>
}
