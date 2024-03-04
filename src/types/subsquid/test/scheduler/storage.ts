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
import * as v48 from '../v48'
import * as v52 from '../v52'
import * as v54 from '../v54'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v33: new StorageType('Scheduler.Agenda', 'Default', [v33.BlockNumber], sts.array(() => sts.option(() => v33.Scheduled))) as AgendaV33,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v35: new StorageType('Scheduler.Agenda', 'Default', [v35.BlockNumber], sts.array(() => sts.option(() => v35.Scheduled))) as AgendaV35,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v37: new StorageType('Scheduler.Agenda', 'Default', [v37.BlockNumber], sts.array(() => sts.option(() => v37.Scheduled))) as AgendaV37,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v38: new StorageType('Scheduler.Agenda', 'Default', [v38.BlockNumber], sts.array(() => sts.option(() => v38.Scheduled))) as AgendaV38,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v42: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v42.ScheduledV3))) as AgendaV42,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v43: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v43.ScheduledV3))) as AgendaV43,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v44: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v44.ScheduledV3))) as AgendaV44,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v45: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v45.ScheduledV3))) as AgendaV45,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v46: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v46.ScheduledV3))) as AgendaV46,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v47: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v47.ScheduledV3))) as AgendaV47,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v48: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v48.ScheduledV3))) as AgendaV48,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v52: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v52.Scheduled))) as AgendaV52,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v54: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v54.Scheduled))) as AgendaV54,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v64: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v64.Scheduled))) as AgendaV64,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v70: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v70.Scheduled))) as AgendaV70,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v33.Scheduled | undefined)[]
    get(block: Block, key: v33.BlockNumber): Promise<((v33.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v33.BlockNumber[]): Promise<((v33.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v33.BlockNumber[]>
    getKeys(block: Block, key: v33.BlockNumber): Promise<v33.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.BlockNumber): AsyncIterable<v33.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v33.BlockNumber, v: ((v33.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v33.BlockNumber): Promise<[k: v33.BlockNumber, v: ((v33.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.BlockNumber, v: ((v33.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.BlockNumber): AsyncIterable<[k: v33.BlockNumber, v: ((v33.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV35  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v35.Scheduled | undefined)[]
    get(block: Block, key: v35.BlockNumber): Promise<((v35.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v35.BlockNumber[]): Promise<((v35.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v35.BlockNumber[]>
    getKeys(block: Block, key: v35.BlockNumber): Promise<v35.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v35.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v35.BlockNumber): AsyncIterable<v35.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v35.BlockNumber, v: ((v35.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v35.BlockNumber): Promise<[k: v35.BlockNumber, v: ((v35.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v35.BlockNumber, v: ((v35.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v35.BlockNumber): AsyncIterable<[k: v35.BlockNumber, v: ((v35.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV37  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v37.Scheduled | undefined)[]
    get(block: Block, key: v37.BlockNumber): Promise<((v37.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v37.BlockNumber[]): Promise<((v37.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v37.BlockNumber[]>
    getKeys(block: Block, key: v37.BlockNumber): Promise<v37.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v37.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v37.BlockNumber): AsyncIterable<v37.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v37.BlockNumber, v: ((v37.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v37.BlockNumber): Promise<[k: v37.BlockNumber, v: ((v37.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v37.BlockNumber, v: ((v37.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v37.BlockNumber): AsyncIterable<[k: v37.BlockNumber, v: ((v37.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV38  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v38.Scheduled | undefined)[]
    get(block: Block, key: v38.BlockNumber): Promise<((v38.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v38.BlockNumber[]): Promise<((v38.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v38.BlockNumber[]>
    getKeys(block: Block, key: v38.BlockNumber): Promise<v38.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v38.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v38.BlockNumber): AsyncIterable<v38.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v38.BlockNumber, v: ((v38.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v38.BlockNumber): Promise<[k: v38.BlockNumber, v: ((v38.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v38.BlockNumber, v: ((v38.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v38.BlockNumber): AsyncIterable<[k: v38.BlockNumber, v: ((v38.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV42  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v42.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v42.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v42.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v42.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV43  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v43.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v43.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v43.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v43.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v43.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v43.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v43.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV44  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v44.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v44.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v44.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v44.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v44.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v44.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v44.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV45  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v45.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v45.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v45.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v45.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v45.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v45.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v45.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV46  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v46.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v46.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v46.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v46.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v46.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v46.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v46.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV47  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v47.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v47.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v47.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v47.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v47.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v47.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v47.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV48  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v48.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v48.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v48.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v48.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v48.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v48.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v48.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV52  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v52.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v52.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v52.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v52.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v52.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v52.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v52.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV54  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v54.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v54.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v54.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v54.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v54.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v54.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v54.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV64  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v64.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v64.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v64.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v64.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v64.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v64.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v64.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v70.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v70.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v70.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v70.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v70.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v70.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v70.Scheduled | undefined)[] | undefined)][]>
}

export const lookup =  {
    /**
     *  Lookup from identity to the block number and index of the task.
     */
    v33: new StorageType('Scheduler.Lookup', 'Optional', [sts.bytes()], v33.TaskAddress) as LookupV33,
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface LookupV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(v33.TaskAddress | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v33.TaskAddress | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v33.TaskAddress | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v33.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v33.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v33.TaskAddress | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v33: new StorageType('Scheduler.StorageVersion', 'Default', [], v33.Releases) as StorageVersionV33,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Releases
    get(block: Block): Promise<(v33.Releases | undefined)>
}

export const incompleteSince =  {
    v52: new StorageType('Scheduler.IncompleteSince', 'Optional', [], sts.number()) as IncompleteSinceV52,
}

export interface IncompleteSinceV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
