import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v33 from '../v33'

export const reports =  {
    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    v33: new StorageType('Offences.Reports', 'Optional', [v33.ReportIdOf], v33.OffenceDetails) as ReportsV33,
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface ReportsV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.ReportIdOf): Promise<(v33.OffenceDetails | undefined)>
    getMany(block: Block, keys: v33.ReportIdOf[]): Promise<(v33.OffenceDetails | undefined)[]>
    getKeys(block: Block): Promise<v33.ReportIdOf[]>
    getKeys(block: Block, key: v33.ReportIdOf): Promise<v33.ReportIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.ReportIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.ReportIdOf): AsyncIterable<v33.ReportIdOf[]>
    getPairs(block: Block): Promise<[k: v33.ReportIdOf, v: (v33.OffenceDetails | undefined)][]>
    getPairs(block: Block, key: v33.ReportIdOf): Promise<[k: v33.ReportIdOf, v: (v33.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.ReportIdOf, v: (v33.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.ReportIdOf): AsyncIterable<[k: v33.ReportIdOf, v: (v33.OffenceDetails | undefined)][]>
}

export const deferredOffences =  {
    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    v33: new StorageType('Offences.DeferredOffences', 'Default', [], sts.array(() => v33.DeferredOffenceOf)) as DeferredOffencesV33,
}

/**
 *  Deferred reports that have been rejected by the offence handler and need to be submitted
 *  at a later time.
 */
export interface DeferredOffencesV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.DeferredOffenceOf[]
    get(block: Block): Promise<(v33.DeferredOffenceOf[] | undefined)>
}

export const concurrentReportsIndex =  {
    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    v33: new StorageType('Offences.ConcurrentReportsIndex', 'Default', [v33.Kind, v33.OpaqueTimeSlot], sts.array(() => v33.ReportIdOf)) as ConcurrentReportsIndexV33,
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface ConcurrentReportsIndexV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.ReportIdOf[]
    get(block: Block, key1: v33.Kind, key2: v33.OpaqueTimeSlot): Promise<(v33.ReportIdOf[] | undefined)>
    getMany(block: Block, keys: [v33.Kind, v33.OpaqueTimeSlot][]): Promise<(v33.ReportIdOf[] | undefined)[]>
    getKeys(block: Block): Promise<[v33.Kind, v33.OpaqueTimeSlot][]>
    getKeys(block: Block, key1: v33.Kind): Promise<[v33.Kind, v33.OpaqueTimeSlot][]>
    getKeys(block: Block, key1: v33.Kind, key2: v33.OpaqueTimeSlot): Promise<[v33.Kind, v33.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v33.Kind, v33.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.Kind): AsyncIterable<[v33.Kind, v33.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block, key1: v33.Kind, key2: v33.OpaqueTimeSlot): AsyncIterable<[v33.Kind, v33.OpaqueTimeSlot][]>
    getPairs(block: Block): Promise<[k: [v33.Kind, v33.OpaqueTimeSlot], v: (v33.ReportIdOf[] | undefined)][]>
    getPairs(block: Block, key1: v33.Kind): Promise<[k: [v33.Kind, v33.OpaqueTimeSlot], v: (v33.ReportIdOf[] | undefined)][]>
    getPairs(block: Block, key1: v33.Kind, key2: v33.OpaqueTimeSlot): Promise<[k: [v33.Kind, v33.OpaqueTimeSlot], v: (v33.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v33.Kind, v33.OpaqueTimeSlot], v: (v33.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.Kind): AsyncIterable<[k: [v33.Kind, v33.OpaqueTimeSlot], v: (v33.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v33.Kind, key2: v33.OpaqueTimeSlot): AsyncIterable<[k: [v33.Kind, v33.OpaqueTimeSlot], v: (v33.ReportIdOf[] | undefined)][]>
}

export const reportsByKindIndex =  {
    /**
     *  Enumerates all reports of a kind along with the time they happened.
     * 
     *  All reports are sorted by the time of offence.
     * 
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    v33: new StorageType('Offences.ReportsByKindIndex', 'Default', [v33.Kind], sts.bytes()) as ReportsByKindIndexV33,
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface ReportsByKindIndexV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: v33.Kind): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v33.Kind[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v33.Kind[]>
    getKeys(block: Block, key: v33.Kind): Promise<v33.Kind[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.Kind[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.Kind): AsyncIterable<v33.Kind[]>
    getPairs(block: Block): Promise<[k: v33.Kind, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v33.Kind): Promise<[k: v33.Kind, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.Kind, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.Kind): AsyncIterable<[k: v33.Kind, v: (Bytes | undefined)][]>
}
