import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'
import * as v35 from '../v35'
import * as v37 from '../v37'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v43 from '../v43'
import * as v44 from '../v44'
import * as v45 from '../v45'
import * as v46 from '../v46'
import * as v47 from '../v47'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v55 from '../v55'
import * as v57 from '../v57'
import * as v59 from '../v59'
import * as v60 from '../v60'
import * as v64 from '../v64'
import * as v66 from '../v66'
import * as v67 from '../v67'
import * as v69 from '../v69'
import * as v70 from '../v70'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v33: new StorageType('System.Account', 'Default', [v33.AccountId], v33.AccountInfo) as AccountV33,
    /**
     *  The full account information for a particular account ID.
     */
    v42: new StorageType('System.Account', 'Default', [v42.AccountId32], v42.AccountInfo) as AccountV42,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountInfo
    get(block: Block, key: v33.AccountId): Promise<(v33.AccountInfo | undefined)>
    getMany(block: Block, keys: v33.AccountId[]): Promise<(v33.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v33.AccountId[]>
    getKeys(block: Block, key: v33.AccountId): Promise<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<v33.AccountId[]>
    getPairs(block: Block): Promise<[k: v33.AccountId, v: (v33.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v33.AccountId): Promise<[k: v33.AccountId, v: (v33.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.AccountId, v: (v33.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.AccountId): AsyncIterable<[k: v33.AccountId, v: (v33.AccountInfo | undefined)][]>
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
    v33: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV33,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v33: new StorageType('System.BlockWeight', 'Default', [], v33.ConsumedWeight) as BlockWeightV33,
    /**
     *  The current weight for the block.
     */
    v52: new StorageType('System.BlockWeight', 'Default', [], v52.PerDispatchClass) as BlockWeightV52,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ConsumedWeight
    get(block: Block): Promise<(v33.ConsumedWeight | undefined)>
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.PerDispatchClass
    get(block: Block): Promise<(v52.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v33: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenV33,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v33: new StorageType('System.BlockHash', 'Default', [v33.BlockNumber], v33.Hash) as BlockHashV33,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Hash
    get(block: Block, key: v33.BlockNumber): Promise<(v33.Hash | undefined)>
    getMany(block: Block, keys: v33.BlockNumber[]): Promise<(v33.Hash | undefined)[]>
    getKeys(block: Block): Promise<v33.BlockNumber[]>
    getKeys(block: Block, key: v33.BlockNumber): Promise<v33.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BlockNumber): AsyncIterable<v33.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v33.BlockNumber, v: (v33.Hash | undefined)][]>
    getPairs(block: Block, key: v33.BlockNumber): Promise<[k: v33.BlockNumber, v: (v33.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BlockNumber, v: (v33.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BlockNumber): AsyncIterable<[k: v33.BlockNumber, v: (v33.Hash | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v33: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV33,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV33  {
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
    v33: new StorageType('System.Number', 'Default', [], v33.BlockNumber) as NumberV33,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.BlockNumber
    get(block: Block): Promise<(v33.BlockNumber | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v33: new StorageType('System.ParentHash', 'Default', [], v33.Hash) as ParentHashV33,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Hash
    get(block: Block): Promise<(v33.Hash | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v33: new StorageType('System.Digest', 'Default', [], v33.DigestOf) as DigestV33,
    /**
     *  Digest of the current block, also part of the block header.
     */
    v42: new StorageType('System.Digest', 'Default', [], v42.Digest) as DigestV42,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.DigestOf
    get(block: Block): Promise<(v33.DigestOf | undefined)>
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
    v44: new StorageType('System.Events', 'Default', [], sts.array(() => v44.EventRecord)) as EventsV44,
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
    v52: new StorageType('System.Events', 'Default', [], sts.array(() => v52.EventRecord)) as EventsV52,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v54: new StorageType('System.Events', 'Default', [], sts.array(() => v54.EventRecord)) as EventsV54,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v55: new StorageType('System.Events', 'Default', [], sts.array(() => v55.EventRecord)) as EventsV55,
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
    v59: new StorageType('System.Events', 'Default', [], sts.array(() => v59.EventRecord)) as EventsV59,
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
    v67: new StorageType('System.Events', 'Default', [], sts.array(() => v67.EventRecord)) as EventsV67,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v69: new StorageType('System.Events', 'Default', [], sts.array(() => v69.EventRecord)) as EventsV69,
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
export interface EventsV44  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v44.EventRecord[]
    get(block: Block): Promise<(v44.EventRecord[] | undefined)>
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
export interface EventsV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v52.EventRecord[]
    get(block: Block): Promise<(v52.EventRecord[] | undefined)>
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
export interface EventsV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v54.EventRecord[]
    get(block: Block): Promise<(v54.EventRecord[] | undefined)>
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
export interface EventsV55  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v55.EventRecord[]
    get(block: Block): Promise<(v55.EventRecord[] | undefined)>
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
export interface EventsV59  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v59.EventRecord[]
    get(block: Block): Promise<(v59.EventRecord[] | undefined)>
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
export interface EventsV67  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v67.EventRecord[]
    get(block: Block): Promise<(v67.EventRecord[] | undefined)>
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
export interface EventsV69  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v69.EventRecord[]
    get(block: Block): Promise<(v69.EventRecord[] | undefined)>
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
    v33: new StorageType('System.EventCount', 'Default', [], v33.EventIndex) as EventCountV33,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.EventIndex
    get(block: Block): Promise<(v33.EventIndex | undefined)>
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
    v33: new StorageType('System.EventTopics', 'Default', [v33.Hash], sts.array(() => sts.tuple(() => [v33.BlockNumber, v33.EventIndex]))) as EventTopicsV33,
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
export interface EventTopicsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v33.BlockNumber, v33.EventIndex][]
    get(block: Block, key: v33.Hash): Promise<([v33.BlockNumber, v33.EventIndex][] | undefined)>
    getMany(block: Block, keys: v33.Hash[]): Promise<([v33.BlockNumber, v33.EventIndex][] | undefined)[]>
    getKeys(block: Block): Promise<v33.Hash[]>
    getKeys(block: Block, key: v33.Hash): Promise<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<v33.Hash[]>
    getPairs(block: Block): Promise<[k: v33.Hash, v: ([v33.BlockNumber, v33.EventIndex][] | undefined)][]>
    getPairs(block: Block, key: v33.Hash): Promise<[k: v33.Hash, v: ([v33.BlockNumber, v33.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.Hash, v: ([v33.BlockNumber, v33.EventIndex][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<[k: v33.Hash, v: ([v33.BlockNumber, v33.EventIndex][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v33: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v33.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV33,
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v42: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v42.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV42,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.LastRuntimeUpgradeInfo | undefined)>
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
    v33: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV33,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToDualRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
     *  (default) if not.
     */
    v33: new StorageType('System.UpgradedToDualRefCount', 'Default', [], sts.boolean()) as UpgradedToDualRefCountV33,
}

/**
 *  True if we have upgraded so that AccountInfo contains two types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToDualRefCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v33: new StorageType('System.ExecutionPhase', 'Optional', [], v33.Phase) as ExecutionPhaseV33,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.Phase | undefined)>
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
