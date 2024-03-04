import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v3 from '../v3'
import * as v7 from '../v7'
import * as v8 from '../v8'
import * as v19 from '../v19'
import * as v22 from '../v22'
import * as v23 from '../v23'
import * as v26 from '../v26'
import * as v33 from '../v33'
import * as v35 from '../v35'
import * as v37 from '../v37'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v43 from '../v43'
import * as v45 from '../v45'
import * as v46 from '../v46'
import * as v47 from '../v47'
import * as v53 from '../v53'
import * as v57 from '../v57'
import * as v60 from '../v60'
import * as v64 from '../v64'
import * as v66 from '../v66'
import * as v68 from '../v68'
import * as v70 from '../v70'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v1: new StorageType('System.Account', 'Default', [v1.AccountId], v1.AccountInfo) as AccountV1,
    /**
     *  The full account information for a particular account ID.
     */
    v42: new StorageType('System.Account', 'Default', [v42.AccountId32], v42.AccountInfo) as AccountV42,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountInfo
    get(block: Block, key: v1.AccountId): Promise<(v1.AccountInfo | undefined)>
    getMany(block: Block, keys: v1.AccountId[]): Promise<(v1.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v1.AccountId[]>
    getKeys(block: Block, key: v1.AccountId): Promise<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<v1.AccountId[]>
    getPairs(block: Block): Promise<[k: v1.AccountId, v: (v1.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v1.AccountId): Promise<[k: v1.AccountId, v: (v1.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.AccountId, v: (v1.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.AccountId): AsyncIterable<[k: v1.AccountId, v: (v1.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.AccountInfo
    get(block: Block, key: v42.AccountId32): Promise<(v42.AccountInfo | undefined)>
    getMany(block: Block, keys: v42.AccountId32[]): Promise<(v42.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v42.AccountId32[]>
    getKeys(block: Block, key: v42.AccountId32): Promise<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<v42.AccountId32[]>
    getPairs(block: Block): Promise<[k: v42.AccountId32, v: (v42.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v42.AccountId32): Promise<[k: v42.AccountId32, v: (v42.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.AccountId32, v: (v42.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.AccountId32): AsyncIterable<[k: v42.AccountId32, v: (v42.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v1: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV1,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v1: new StorageType('System.BlockWeight', 'Default', [], v1.ConsumedWeight) as BlockWeightV1,
    /**
     *  The current weight for the block.
     */
    v53: new StorageType('System.BlockWeight', 'Default', [], v53.PerDispatchClass) as BlockWeightV53,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ConsumedWeight
    get(block: Block): Promise<(v1.ConsumedWeight | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v53.PerDispatchClass
    get(block: Block): Promise<(v53.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v1: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenV1,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v1: new StorageType('System.BlockHash', 'Default', [v1.BlockNumber], v1.Hash) as BlockHashV1,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Hash
    get(block: Block, key: v1.BlockNumber): Promise<(v1.Hash | undefined)>
    getMany(block: Block, keys: v1.BlockNumber[]): Promise<(v1.Hash | undefined)[]>
    getKeys(block: Block): Promise<v1.BlockNumber[]>
    getKeys(block: Block, key: v1.BlockNumber): Promise<v1.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.BlockNumber): AsyncIterable<v1.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v1.BlockNumber, v: (v1.Hash | undefined)][]>
    getPairs(block: Block, key: v1.BlockNumber): Promise<[k: v1.BlockNumber, v: (v1.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.BlockNumber, v: (v1.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.BlockNumber): AsyncIterable<[k: v1.BlockNumber, v: (v1.Hash | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v1: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV1,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    v1: new StorageType('System.Number', 'Default', [], v1.BlockNumber) as NumberV1,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BlockNumber
    get(block: Block): Promise<(v1.BlockNumber | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v1: new StorageType('System.ParentHash', 'Default', [], v1.Hash) as ParentHashV1,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Hash
    get(block: Block): Promise<(v1.Hash | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v1: new StorageType('System.Digest', 'Default', [], v1.DigestOf) as DigestV1,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v42: new StorageType('System.Digest', 'Default', [], v42.Digest) as DigestV42,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.DigestOf
    get(block: Block): Promise<(v1.DigestOf | undefined)>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.Digest
    get(block: Block): Promise<(v42.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     */
    v1: new StorageType('System.Events', 'Default', [], sts.array(() => v1.EventRecord)) as EventsV1,
    /**
     *  Events deposited for the current block.
     */
    v3: new StorageType('System.Events', 'Default', [], sts.array(() => v3.EventRecord)) as EventsV3,
    /**
     *  Events deposited for the current block.
     */
    v7: new StorageType('System.Events', 'Default', [], sts.array(() => v7.EventRecord)) as EventsV7,
    /**
     *  Events deposited for the current block.
     */
    v8: new StorageType('System.Events', 'Default', [], sts.array(() => v8.EventRecord)) as EventsV8,
    /**
     *  Events deposited for the current block.
     */
    v19: new StorageType('System.Events', 'Default', [], sts.array(() => v19.EventRecord)) as EventsV19,
    /**
     *  Events deposited for the current block.
     */
    v22: new StorageType('System.Events', 'Default', [], sts.array(() => v22.EventRecord)) as EventsV22,
    /**
     *  Events deposited for the current block.
     */
    v23: new StorageType('System.Events', 'Default', [], sts.array(() => v23.EventRecord)) as EventsV23,
    /**
     *  Events deposited for the current block.
     */
    v26: new StorageType('System.Events', 'Default', [], sts.array(() => v26.EventRecord)) as EventsV26,
    /**
     *  Events deposited for the current block.
     */
    v33: new StorageType('System.Events', 'Default', [], sts.array(() => v33.EventRecord)) as EventsV33,
    /**
     *  Events deposited for the current block.
     */
    v35: new StorageType('System.Events', 'Default', [], sts.array(() => v35.EventRecord)) as EventsV35,
    /**
     *  Events deposited for the current block.
     */
    v37: new StorageType('System.Events', 'Default', [], sts.array(() => v37.EventRecord)) as EventsV37,
    /**
     *  Events deposited for the current block.
     */
    v38: new StorageType('System.Events', 'Default', [], sts.array(() => v38.EventRecord)) as EventsV38,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v42: new StorageType('System.Events', 'Default', [], sts.array(() => v42.EventRecord)) as EventsV42,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v43: new StorageType('System.Events', 'Default', [], sts.array(() => v43.EventRecord)) as EventsV43,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v45: new StorageType('System.Events', 'Default', [], sts.array(() => v45.EventRecord)) as EventsV45,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v46: new StorageType('System.Events', 'Default', [], sts.array(() => v46.EventRecord)) as EventsV46,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v47: new StorageType('System.Events', 'Default', [], sts.array(() => v47.EventRecord)) as EventsV47,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v53: new StorageType('System.Events', 'Default', [], sts.array(() => v53.EventRecord)) as EventsV53,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v57: new StorageType('System.Events', 'Default', [], sts.array(() => v57.EventRecord)) as EventsV57,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v60: new StorageType('System.Events', 'Default', [], sts.array(() => v60.EventRecord)) as EventsV60,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v64: new StorageType('System.Events', 'Default', [], sts.array(() => v64.EventRecord)) as EventsV64,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v66: new StorageType('System.Events', 'Default', [], sts.array(() => v66.EventRecord)) as EventsV66,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v68: new StorageType('System.Events', 'Default', [], sts.array(() => v68.EventRecord)) as EventsV68,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v70: new StorageType('System.Events', 'Default', [], sts.array(() => v70.EventRecord)) as EventsV70,
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.EventRecord[]
    get(block: Block): Promise<(v1.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV3  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v3.EventRecord[]
    get(block: Block): Promise<(v3.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v7.EventRecord[]
    get(block: Block): Promise<(v7.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV8  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v8.EventRecord[]
    get(block: Block): Promise<(v8.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v19.EventRecord[]
    get(block: Block): Promise<(v19.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v22.EventRecord[]
    get(block: Block): Promise<(v22.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV23  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v23.EventRecord[]
    get(block: Block): Promise<(v23.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v26.EventRecord[]
    get(block: Block): Promise<(v26.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EventRecord[]
    get(block: Block): Promise<(v33.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV35  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v35.EventRecord[]
    get(block: Block): Promise<(v35.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v37.EventRecord[]
    get(block: Block): Promise<(v37.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 */
export interface EventsV38  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v38.EventRecord[]
    get(block: Block): Promise<(v38.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v42.EventRecord[]
    get(block: Block): Promise<(v42.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV43  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v43.EventRecord[]
    get(block: Block): Promise<(v43.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV45  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v45.EventRecord[]
    get(block: Block): Promise<(v45.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v46.EventRecord[]
    get(block: Block): Promise<(v46.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV47  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v47.EventRecord[]
    get(block: Block): Promise<(v47.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v53.EventRecord[]
    get(block: Block): Promise<(v53.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV57  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v57.EventRecord[]
    get(block: Block): Promise<(v57.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV60  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v60.EventRecord[]
    get(block: Block): Promise<(v60.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v64.EventRecord[]
    get(block: Block): Promise<(v64.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV66  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v66.EventRecord[]
    get(block: Block): Promise<(v66.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV68  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v68.EventRecord[]
    get(block: Block): Promise<(v68.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.EventRecord[]
    get(block: Block): Promise<(v70.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v1: new StorageType('System.EventCount', 'Default', [], v1.EventIndex) as EventCountV1,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.EventIndex
    get(block: Block): Promise<(v1.EventIndex | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    v1: new StorageType('System.EventTopics', 'Default', [v1.Hash], sts.array(() => sts.tuple(() => [v1.BlockNumber, v1.EventIndex]))) as EventTopicsV1,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1.BlockNumber, v1.EventIndex][]
    get(block: Block, key: v1.Hash): Promise<([v1.BlockNumber, v1.EventIndex][] | undefined)>
    getMany(block: Block, keys: v1.Hash[]): Promise<([v1.BlockNumber, v1.EventIndex][] | undefined)[]>
    getKeys(block: Block): Promise<v1.Hash[]>
    getKeys(block: Block, key: v1.Hash): Promise<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<v1.Hash[]>
    getPairs(block: Block): Promise<[k: v1.Hash, v: ([v1.BlockNumber, v1.EventIndex][] | undefined)][]>
    getPairs(block: Block, key: v1.Hash): Promise<[k: v1.Hash, v: ([v1.BlockNumber, v1.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Hash, v: ([v1.BlockNumber, v1.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<[k: v1.Hash, v: ([v1.BlockNumber, v1.EventIndex][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v1: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v1.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV1,
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v42: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v42.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV42,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.LastRuntimeUpgradeInfo | undefined)>
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v42.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v1: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV1,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToDualRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    v1: new StorageType('System.UpgradedToDualRefCount', 'Default', [], sts.boolean()) as UpgradedToDualRefCountV1,
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToDualRefCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v1: new StorageType('System.ExecutionPhase', 'Optional', [], v1.Phase) as ExecutionPhaseV1,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.Phase | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v42: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV42,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
