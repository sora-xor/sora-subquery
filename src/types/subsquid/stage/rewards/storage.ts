import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v54 from '../v54'

export const reservesAcc =  {
    v33: new StorageType('Rewards.ReservesAcc', 'Default', [], v33.TechAccountId) as ReservesAccV33,
    v42: new StorageType('Rewards.ReservesAcc', 'Default', [], v42.TechAccountId) as ReservesAccV42,
    v46: new StorageType('Rewards.ReservesAcc', 'Default', [], v46.TechAccountId) as ReservesAccV46,
    v54: new StorageType('Rewards.ReservesAcc', 'Default', [], v54.TechAccountId) as ReservesAccV54,
}

export interface ReservesAccV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.TechAccountId
    get(block: Block): Promise<(v33.TechAccountId | undefined)>
}

export interface ReservesAccV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.TechAccountId
    get(block: Block): Promise<(v42.TechAccountId | undefined)>
}

export interface ReservesAccV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v46.TechAccountId
    get(block: Block): Promise<(v46.TechAccountId | undefined)>
}

export interface ReservesAccV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54.TechAccountId
    get(block: Block): Promise<(v54.TechAccountId | undefined)>
}

export const valOwners =  {
    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    v33: new StorageType('Rewards.ValOwners', 'Default', [v33.EthAddress], v33.RewardInfo) as ValOwnersV33,
    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    v42: new StorageType('Rewards.ValOwners', 'Default', [v42.H160], v42.RewardInfo) as ValOwnersV42,
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface ValOwnersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.RewardInfo
    get(block: Block, key: v33.EthAddress): Promise<(v33.RewardInfo | undefined)>
    getMany(block: Block, keys: v33.EthAddress[]): Promise<(v33.RewardInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.EthAddress[]>
    getKeys(block: Block, key: v33.EthAddress): Promise<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<v33.EthAddress[]>
    getPairs(block: Block): Promise<[k: v33.EthAddress, v: (v33.RewardInfo | undefined)][]>
    getPairs(block: Block, key: v33.EthAddress): Promise<[k: v33.EthAddress, v: (v33.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EthAddress, v: (v33.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<[k: v33.EthAddress, v: (v33.RewardInfo | undefined)][]>
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface ValOwnersV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.RewardInfo
    get(block: Block, key: v42.H160): Promise<(v42.RewardInfo | undefined)>
    getMany(block: Block, keys: v42.H160[]): Promise<(v42.RewardInfo | undefined)[]>
    getKeys(block: Block): Promise<v42.H160[]>
    getKeys(block: Block, key: v42.H160): Promise<v42.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.H160): AsyncIterable<v42.H160[]>
    getPairs(block: Block): Promise<[k: v42.H160, v: (v42.RewardInfo | undefined)][]>
    getPairs(block: Block, key: v42.H160): Promise<[k: v42.H160, v: (v42.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.H160, v: (v42.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.H160): AsyncIterable<[k: v42.H160, v: (v42.RewardInfo | undefined)][]>
}

export const pswapFarmOwners =  {
    v33: new StorageType('Rewards.PswapFarmOwners', 'Default', [v33.EthAddress], v33.Balance) as PswapFarmOwnersV33,
}

export interface PswapFarmOwnersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block, key: v33.EthAddress): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: v33.EthAddress[]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<v33.EthAddress[]>
    getKeys(block: Block, key: v33.EthAddress): Promise<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<v33.EthAddress[]>
    getPairs(block: Block): Promise<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key: v33.EthAddress): Promise<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
}

export const pswapWaifuOwners =  {
    v33: new StorageType('Rewards.PswapWaifuOwners', 'Default', [v33.EthAddress], v33.Balance) as PswapWaifuOwnersV33,
}

export interface PswapWaifuOwnersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block, key: v33.EthAddress): Promise<(v33.Balance | undefined)>
    getMany(block: Block, keys: v33.EthAddress[]): Promise<(v33.Balance | undefined)[]>
    getKeys(block: Block): Promise<v33.EthAddress[]>
    getKeys(block: Block, key: v33.EthAddress): Promise<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<v33.EthAddress[]>
    getPairs(block: Block): Promise<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
    getPairs(block: Block, key: v33.EthAddress): Promise<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<[k: v33.EthAddress, v: (v33.Balance | undefined)][]>
}

export const umiNftReceivers =  {
    /**
     *  UMI NFT receivers storage
     */
    v33: new StorageType('Rewards.UmiNftReceivers', 'Default', [v33.EthAddress], sts.array(() => v33.Balance)) as UmiNftReceiversV33,
}

/**
 *  UMI NFT receivers storage
 */
export interface UmiNftReceiversV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance[]
    get(block: Block, key: v33.EthAddress): Promise<(v33.Balance[] | undefined)>
    getMany(block: Block, keys: v33.EthAddress[]): Promise<(v33.Balance[] | undefined)[]>
    getKeys(block: Block): Promise<v33.EthAddress[]>
    getKeys(block: Block, key: v33.EthAddress): Promise<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<v33.EthAddress[]>
    getPairs(block: Block): Promise<[k: v33.EthAddress, v: (v33.Balance[] | undefined)][]>
    getPairs(block: Block, key: v33.EthAddress): Promise<[k: v33.EthAddress, v: (v33.Balance[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EthAddress, v: (v33.Balance[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<[k: v33.EthAddress, v: (v33.Balance[] | undefined)][]>
}

export const valBurnedSinceLastVesting =  {
    /**
     *  Amount of VAL burned since last vesting
     */
    v33: new StorageType('Rewards.ValBurnedSinceLastVesting', 'Default', [], v33.Balance) as ValBurnedSinceLastVestingV33,
}

/**
 *  Amount of VAL burned since last vesting
 */
export interface ValBurnedSinceLastVestingV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const currentClaimableVal =  {
    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    v33: new StorageType('Rewards.CurrentClaimableVal', 'Default', [], v33.Balance) as CurrentClaimableValV33,
}

/**
 *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
 */
export interface CurrentClaimableValV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const ethAddresses =  {
    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    v33: new StorageType('Rewards.EthAddresses', 'Default', [sts.number()], sts.array(() => v33.EthAddress)) as EthAddressesV33,
}

/**
 *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
 */
export interface EthAddressesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EthAddress[]
    get(block: Block, key: number): Promise<(v33.EthAddress[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v33.EthAddress[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v33.EthAddress[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v33.EthAddress[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v33.EthAddress[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v33.EthAddress[] | undefined)][]>
}

export const totalValRewards =  {
    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    v33: new StorageType('Rewards.TotalValRewards', 'Default', [], v33.Balance) as TotalValRewardsV33,
}

/**
 *  Total amount of VAL rewards either claimable now or some time in the future
 */
export interface TotalValRewardsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const totalClaimableVal =  {
    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    v33: new StorageType('Rewards.TotalClaimableVal', 'Default', [], v33.Balance) as TotalClaimableValV33,
}

/**
 *  Total amount of VAL that can be claimed by users at current point in time
 */
export interface TotalClaimableValV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Balance
    get(block: Block): Promise<(v33.Balance | undefined)>
}

export const migrationPending =  {
    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    v33: new StorageType('Rewards.MigrationPending', 'Default', [], sts.boolean()) as MigrationPendingV33,
}

/**
 *  A flag indicating whether VAL rewards data migration has been finalized
 */
export interface MigrationPendingV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const umiNfts =  {
    /**
     *  The storage of available UMI NFTs.
     */
    v33: new StorageType('Rewards.UmiNfts', 'Default', [], sts.array(() => v33.AssetId)) as UmiNftsV33,
    /**
     *  The storage of available UMI NFTs.
     */
    v42: new StorageType('Rewards.UmiNfts', 'Default', [], sts.array(() => v42.AssetId32)) as UmiNftsV42,
}

/**
 *  The storage of available UMI NFTs.
 */
export interface UmiNftsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AssetId[]
    get(block: Block): Promise<(v33.AssetId[] | undefined)>
}

/**
 *  The storage of available UMI NFTs.
 */
export interface UmiNftsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AssetId32[]
    get(block: Block): Promise<(v42.AssetId32[] | undefined)>
}

export const umiNftClaimed =  {
    /**
     *  Stores whether address already claimed UMI NFT rewards.
     */
    v33: new StorageType('Rewards.UmiNftClaimed', 'Default', [v33.EthAddress], sts.boolean()) as UmiNftClaimedV33,
}

/**
 *  Stores whether address already claimed UMI NFT rewards.
 */
export interface UmiNftClaimedV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: v33.EthAddress): Promise<(boolean | undefined)>
    getMany(block: Block, keys: v33.EthAddress[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<v33.EthAddress[]>
    getKeys(block: Block, key: v33.EthAddress): Promise<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.EthAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<v33.EthAddress[]>
    getPairs(block: Block): Promise<[k: v33.EthAddress, v: (boolean | undefined)][]>
    getPairs(block: Block, key: v33.EthAddress): Promise<[k: v33.EthAddress, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.EthAddress, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.EthAddress): AsyncIterable<[k: v33.EthAddress, v: (boolean | undefined)][]>
}
