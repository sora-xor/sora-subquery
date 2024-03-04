import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v19 from '../v19'
import * as v33 from '../v33'
import * as v42 from '../v42'
import * as v46 from '../v46'
import * as v57 from '../v57'

export const reservesAcc =  {
    v1: new StorageType('Rewards.ReservesAcc', 'Default', [], v1.TechAccountId) as ReservesAccV1,
    v42: new StorageType('Rewards.ReservesAcc', 'Default', [], v42.TechAccountId) as ReservesAccV42,
    v46: new StorageType('Rewards.ReservesAcc', 'Default', [], v46.TechAccountId) as ReservesAccV46,
    v57: new StorageType('Rewards.ReservesAcc', 'Default', [], v57.TechAccountId) as ReservesAccV57,
}

export interface ReservesAccV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.TechAccountId
    get(block: Block): Promise<(v1.TechAccountId | undefined)>
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

export interface ReservesAccV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v57.TechAccountId
    get(block: Block): Promise<(v57.TechAccountId | undefined)>
}

export const valOwners =  {
    v1: new StorageType('Rewards.ValOwners', 'Default', [v1.EthereumAddress], v1.Balance) as ValOwnersV1,
    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    v19: new StorageType('Rewards.ValOwners', 'Default', [v19.EthereumAddress], v19.RewardInfo) as ValOwnersV19,
    /**
     *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
     */
    v42: new StorageType('Rewards.ValOwners', 'Default', [v42.H160], v42.RewardInfo) as ValOwnersV42,
}

export interface ValOwnersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block, key: v1.EthereumAddress): Promise<(v1.Balance | undefined)>
    getMany(block: Block, keys: v1.EthereumAddress[]): Promise<(v1.Balance | undefined)[]>
    getKeys(block: Block): Promise<v1.EthereumAddress[]>
    getKeys(block: Block, key: v1.EthereumAddress): Promise<v1.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EthereumAddress): AsyncIterable<v1.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairs(block: Block, key: v1.EthereumAddress): Promise<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EthereumAddress): AsyncIterable<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
}

/**
 *  A map EthAddresses -> RewardInfo, that is claimable and remaining vested amounts per address
 */
export interface ValOwnersV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.RewardInfo
    get(block: Block, key: v19.EthereumAddress): Promise<(v19.RewardInfo | undefined)>
    getMany(block: Block, keys: v19.EthereumAddress[]): Promise<(v19.RewardInfo | undefined)[]>
    getKeys(block: Block): Promise<v19.EthereumAddress[]>
    getKeys(block: Block, key: v19.EthereumAddress): Promise<v19.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v19.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v19.EthereumAddress): AsyncIterable<v19.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v19.EthereumAddress, v: (v19.RewardInfo | undefined)][]>
    getPairs(block: Block, key: v19.EthereumAddress): Promise<[k: v19.EthereumAddress, v: (v19.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v19.EthereumAddress, v: (v19.RewardInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v19.EthereumAddress): AsyncIterable<[k: v19.EthereumAddress, v: (v19.RewardInfo | undefined)][]>
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
    v1: new StorageType('Rewards.PswapFarmOwners', 'Default', [v1.EthereumAddress], v1.Balance) as PswapFarmOwnersV1,
}

export interface PswapFarmOwnersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block, key: v1.EthereumAddress): Promise<(v1.Balance | undefined)>
    getMany(block: Block, keys: v1.EthereumAddress[]): Promise<(v1.Balance | undefined)[]>
    getKeys(block: Block): Promise<v1.EthereumAddress[]>
    getKeys(block: Block, key: v1.EthereumAddress): Promise<v1.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EthereumAddress): AsyncIterable<v1.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairs(block: Block, key: v1.EthereumAddress): Promise<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EthereumAddress): AsyncIterable<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
}

export const pswapWaifuOwners =  {
    v1: new StorageType('Rewards.PswapWaifuOwners', 'Default', [v1.EthereumAddress], v1.Balance) as PswapWaifuOwnersV1,
}

export interface PswapWaifuOwnersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Balance
    get(block: Block, key: v1.EthereumAddress): Promise<(v1.Balance | undefined)>
    getMany(block: Block, keys: v1.EthereumAddress[]): Promise<(v1.Balance | undefined)[]>
    getKeys(block: Block): Promise<v1.EthereumAddress[]>
    getKeys(block: Block, key: v1.EthereumAddress): Promise<v1.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.EthereumAddress): AsyncIterable<v1.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairs(block: Block, key: v1.EthereumAddress): Promise<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.EthereumAddress): AsyncIterable<[k: v1.EthereumAddress, v: (v1.Balance | undefined)][]>
}

export const valBurnedSinceLastVesting =  {
    /**
     *  Amount of VAL burned since last vesting
     */
    v19: new StorageType('Rewards.ValBurnedSinceLastVesting', 'Default', [], v19.Balance) as ValBurnedSinceLastVestingV19,
}

/**
 *  Amount of VAL burned since last vesting
 */
export interface ValBurnedSinceLastVestingV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Balance
    get(block: Block): Promise<(v19.Balance | undefined)>
}

export const currentClaimableVal =  {
    /**
     *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
     */
    v19: new StorageType('Rewards.CurrentClaimableVal', 'Default', [], v19.Balance) as CurrentClaimableValV19,
}

/**
 *  Amount of VAL currently being vested (aggregated over the previous period of 14,400 blocks)
 */
export interface CurrentClaimableValV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Balance
    get(block: Block): Promise<(v19.Balance | undefined)>
}

export const ethAddresses =  {
    /**
     *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
     */
    v19: new StorageType('Rewards.EthAddresses', 'Default', [sts.number()], sts.array(() => v19.EthereumAddress)) as EthAddressesV19,
}

/**
 *  All addresses are split in batches, `AddressBatches` maps batch number to a set of addresses
 */
export interface EthAddressesV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.EthereumAddress[]
    get(block: Block, key: number): Promise<(v19.EthereumAddress[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v19.EthereumAddress[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v19.EthereumAddress[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v19.EthereumAddress[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v19.EthereumAddress[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v19.EthereumAddress[] | undefined)][]>
}

export const totalValRewards =  {
    /**
     *  Total amount of VAL rewards either claimable now or some time in the future
     */
    v19: new StorageType('Rewards.TotalValRewards', 'Default', [], v19.Balance) as TotalValRewardsV19,
}

/**
 *  Total amount of VAL rewards either claimable now or some time in the future
 */
export interface TotalValRewardsV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Balance
    get(block: Block): Promise<(v19.Balance | undefined)>
}

export const totalClaimableVal =  {
    /**
     *  Total amount of VAL that can be claimed by users at current point in time
     */
    v19: new StorageType('Rewards.TotalClaimableVal', 'Default', [], v19.Balance) as TotalClaimableValV19,
}

/**
 *  Total amount of VAL that can be claimed by users at current point in time
 */
export interface TotalClaimableValV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.Balance
    get(block: Block): Promise<(v19.Balance | undefined)>
}

export const migrationPending =  {
    /**
     *  A flag indicating whether VAL rewards data migration has been finalized
     */
    v19: new StorageType('Rewards.MigrationPending', 'Default', [], sts.boolean()) as MigrationPendingV19,
}

/**
 *  A flag indicating whether VAL rewards data migration has been finalized
 */
export interface MigrationPendingV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
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
