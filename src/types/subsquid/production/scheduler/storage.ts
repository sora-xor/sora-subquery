import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v3 from '../v3'
import * as v7 from '../v7'
import * as v19 from '../v19'
import * as v22 from '../v22'
import * as v23 from '../v23'
import * as v26 from '../v26'
import * as v32 from '../v32'
import * as v33 from '../v33'
import * as v35 from '../v35'
import * as v37 from '../v37'
import * as v38 from '../v38'
import * as v42 from '../v42'
import * as v43 from '../v43'
import * as v45 from '../v45'
import * as v46 from '../v46'
import * as v47 from '../v47'
import * as v50 from '../v50'
import * as v53 from '../v53'
import * as v64 from '../v64'
import * as v70 from '../v70'

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1: new StorageType('Scheduler.Agenda', 'Default', [v1.BlockNumber], sts.array(() => sts.option(() => v1.Scheduled))) as AgendaV1,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v3: new StorageType('Scheduler.Agenda', 'Default', [v3.BlockNumber], sts.array(() => sts.option(() => v3.Scheduled))) as AgendaV3,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v7: new StorageType('Scheduler.Agenda', 'Default', [v7.BlockNumber], sts.array(() => sts.option(() => v7.Scheduled))) as AgendaV7,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v19: new StorageType('Scheduler.Agenda', 'Default', [v19.BlockNumber], sts.array(() => sts.option(() => v19.Scheduled))) as AgendaV19,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v22: new StorageType('Scheduler.Agenda', 'Default', [v22.BlockNumber], sts.array(() => sts.option(() => v22.Scheduled))) as AgendaV22,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v23: new StorageType('Scheduler.Agenda', 'Default', [v23.BlockNumber], sts.array(() => sts.option(() => v23.Scheduled))) as AgendaV23,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v26: new StorageType('Scheduler.Agenda', 'Default', [v26.BlockNumber], sts.array(() => sts.option(() => v26.Scheduled))) as AgendaV26,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v32: new StorageType('Scheduler.Agenda', 'Default', [v32.BlockNumber], sts.array(() => sts.option(() => v32.Scheduled))) as AgendaV32,
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
    v50: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v50.ScheduledV3))) as AgendaV50,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v53: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v53.Scheduled))) as AgendaV53,
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
export interface AgendaV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1.Scheduled | undefined)[]
    get(block: Block, key: v1.BlockNumber): Promise<((v1.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v1.BlockNumber[]): Promise<((v1.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v1.BlockNumber[]>
    getKeys(block: Block, key: v1.BlockNumber): Promise<v1.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.BlockNumber): AsyncIterable<v1.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v1.BlockNumber, v: ((v1.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v1.BlockNumber): Promise<[k: v1.BlockNumber, v: ((v1.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.BlockNumber, v: ((v1.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.BlockNumber): AsyncIterable<[k: v1.BlockNumber, v: ((v1.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV3  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v3.Scheduled | undefined)[]
    get(block: Block, key: v3.BlockNumber): Promise<((v3.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v3.BlockNumber[]): Promise<((v3.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v3.BlockNumber[]>
    getKeys(block: Block, key: v3.BlockNumber): Promise<v3.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v3.BlockNumber): AsyncIterable<v3.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v3.BlockNumber, v: ((v3.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v3.BlockNumber): Promise<[k: v3.BlockNumber, v: ((v3.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3.BlockNumber, v: ((v3.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3.BlockNumber): AsyncIterable<[k: v3.BlockNumber, v: ((v3.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v7.Scheduled | undefined)[]
    get(block: Block, key: v7.BlockNumber): Promise<((v7.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v7.BlockNumber[]): Promise<((v7.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v7.BlockNumber[]>
    getKeys(block: Block, key: v7.BlockNumber): Promise<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<v7.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v7.BlockNumber): Promise<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.BlockNumber): AsyncIterable<[k: v7.BlockNumber, v: ((v7.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV19  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v19.Scheduled | undefined)[]
    get(block: Block, key: v19.BlockNumber): Promise<((v19.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v19.BlockNumber[]): Promise<((v19.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v19.BlockNumber[]>
    getKeys(block: Block, key: v19.BlockNumber): Promise<v19.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v19.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v19.BlockNumber): AsyncIterable<v19.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v19.BlockNumber, v: ((v19.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v19.BlockNumber): Promise<[k: v19.BlockNumber, v: ((v19.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v19.BlockNumber, v: ((v19.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v19.BlockNumber): AsyncIterable<[k: v19.BlockNumber, v: ((v19.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV22  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v22.Scheduled | undefined)[]
    get(block: Block, key: v22.BlockNumber): Promise<((v22.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v22.BlockNumber[]): Promise<((v22.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v22.BlockNumber[]>
    getKeys(block: Block, key: v22.BlockNumber): Promise<v22.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.BlockNumber): AsyncIterable<v22.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v22.BlockNumber, v: ((v22.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v22.BlockNumber): Promise<[k: v22.BlockNumber, v: ((v22.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.BlockNumber, v: ((v22.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.BlockNumber): AsyncIterable<[k: v22.BlockNumber, v: ((v22.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV23  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v23.Scheduled | undefined)[]
    get(block: Block, key: v23.BlockNumber): Promise<((v23.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v23.BlockNumber[]): Promise<((v23.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v23.BlockNumber[]>
    getKeys(block: Block, key: v23.BlockNumber): Promise<v23.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v23.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v23.BlockNumber): AsyncIterable<v23.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v23.BlockNumber): Promise<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v23.BlockNumber): AsyncIterable<[k: v23.BlockNumber, v: ((v23.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV26  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v26.Scheduled | undefined)[]
    get(block: Block, key: v26.BlockNumber): Promise<((v26.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v26.BlockNumber[]): Promise<((v26.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v26.BlockNumber[]>
    getKeys(block: Block, key: v26.BlockNumber): Promise<v26.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.BlockNumber): AsyncIterable<v26.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v26.BlockNumber): Promise<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.BlockNumber): AsyncIterable<[k: v26.BlockNumber, v: ((v26.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV32  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v32.Scheduled | undefined)[]
    get(block: Block, key: v32.BlockNumber): Promise<((v32.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: v32.BlockNumber[]): Promise<((v32.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<v32.BlockNumber[]>
    getKeys(block: Block, key: v32.BlockNumber): Promise<v32.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v32.BlockNumber[]>
    getKeysPaged(pageSize: number, block: Block, key: v32.BlockNumber): AsyncIterable<v32.BlockNumber[]>
    getPairs(block: Block): Promise<[k: v32.BlockNumber, v: ((v32.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: v32.BlockNumber): Promise<[k: v32.BlockNumber, v: ((v32.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v32.BlockNumber, v: ((v32.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v32.BlockNumber): AsyncIterable<[k: v32.BlockNumber, v: ((v32.Scheduled | undefined)[] | undefined)][]>
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
export interface AgendaV50  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v50.ScheduledV3 | undefined)[]
    get(block: Block, key: number): Promise<((v50.ScheduledV3 | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v50.ScheduledV3 | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v50.ScheduledV3 | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v50.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v50.ScheduledV3 | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v50.ScheduledV3 | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV53  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v53.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v53.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v53.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v53.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v53.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v53.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v53.Scheduled | undefined)[] | undefined)][]>
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
    v1: new StorageType('Scheduler.Lookup', 'Optional', [sts.bytes()], v1.TaskAddress) as LookupV1,
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface LookupV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(v1.TaskAddress | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v1.TaskAddress | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v1.TaskAddress | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v1.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v1.TaskAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v1.TaskAddress | undefined)][]>
}

export const storageVersion =  {
    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    v1: new StorageType('Scheduler.StorageVersion', 'Default', [], v1.Releases) as StorageVersionV1,
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface StorageVersionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Releases
    get(block: Block): Promise<(v1.Releases | undefined)>
}

export const incompleteSince =  {
    v53: new StorageType('Scheduler.IncompleteSince', 'Optional', [], sts.number()) as IncompleteSinceV53,
}

export interface IncompleteSinceV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}
