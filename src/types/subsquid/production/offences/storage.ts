import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const reports =  {
    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    v1: new StorageType('Offences.Reports', 'Optional', [v1.ReportIdOf], v1.OffenceDetails) as ReportsV1,
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface ReportsV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.ReportIdOf): Promise<(v1.OffenceDetails | undefined)>
    getMany(block: Block, keys: v1.ReportIdOf[]): Promise<(v1.OffenceDetails | undefined)[]>
    getKeys(block: Block): Promise<v1.ReportIdOf[]>
    getKeys(block: Block, key: v1.ReportIdOf): Promise<v1.ReportIdOf[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.ReportIdOf[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.ReportIdOf): AsyncIterable<v1.ReportIdOf[]>
    getPairs(block: Block): Promise<[k: v1.ReportIdOf, v: (v1.OffenceDetails | undefined)][]>
    getPairs(block: Block, key: v1.ReportIdOf): Promise<[k: v1.ReportIdOf, v: (v1.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.ReportIdOf, v: (v1.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.ReportIdOf): AsyncIterable<[k: v1.ReportIdOf, v: (v1.OffenceDetails | undefined)][]>
}

export const deferredOffences =  {
    /**
     *  Deferred reports that have been rejected by the offence handler and need to be submitted
     *  at a later time.
     */
    v1: new StorageType('Offences.DeferredOffences', 'Default', [], sts.array(() => v1.DeferredOffenceOf)) as DeferredOffencesV1,
}

/**
 *  Deferred reports that have been rejected by the offence handler and need to be submitted
 *  at a later time.
 */
export interface DeferredOffencesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.DeferredOffenceOf[]
    get(block: Block): Promise<(v1.DeferredOffenceOf[] | undefined)>
}

export const concurrentReportsIndex =  {
    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    v1: new StorageType('Offences.ConcurrentReportsIndex', 'Default', [v1.Kind, v1.OpaqueTimeSlot], sts.array(() => v1.ReportIdOf)) as ConcurrentReportsIndexV1,
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface ConcurrentReportsIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.ReportIdOf[]
    get(block: Block, key1: v1.Kind, key2: v1.OpaqueTimeSlot): Promise<(v1.ReportIdOf[] | undefined)>
    getMany(block: Block, keys: [v1.Kind, v1.OpaqueTimeSlot][]): Promise<(v1.ReportIdOf[] | undefined)[]>
    getKeys(block: Block): Promise<[v1.Kind, v1.OpaqueTimeSlot][]>
    getKeys(block: Block, key1: v1.Kind): Promise<[v1.Kind, v1.OpaqueTimeSlot][]>
    getKeys(block: Block, key1: v1.Kind, key2: v1.OpaqueTimeSlot): Promise<[v1.Kind, v1.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1.Kind, v1.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.Kind): AsyncIterable<[v1.Kind, v1.OpaqueTimeSlot][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1.Kind, key2: v1.OpaqueTimeSlot): AsyncIterable<[v1.Kind, v1.OpaqueTimeSlot][]>
    getPairs(block: Block): Promise<[k: [v1.Kind, v1.OpaqueTimeSlot], v: (v1.ReportIdOf[] | undefined)][]>
    getPairs(block: Block, key1: v1.Kind): Promise<[k: [v1.Kind, v1.OpaqueTimeSlot], v: (v1.ReportIdOf[] | undefined)][]>
    getPairs(block: Block, key1: v1.Kind, key2: v1.OpaqueTimeSlot): Promise<[k: [v1.Kind, v1.OpaqueTimeSlot], v: (v1.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1.Kind, v1.OpaqueTimeSlot], v: (v1.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.Kind): AsyncIterable<[k: [v1.Kind, v1.OpaqueTimeSlot], v: (v1.ReportIdOf[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1.Kind, key2: v1.OpaqueTimeSlot): AsyncIterable<[k: [v1.Kind, v1.OpaqueTimeSlot], v: (v1.ReportIdOf[] | undefined)][]>
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
    v1: new StorageType('Offences.ReportsByKindIndex', 'Default', [v1.Kind], sts.bytes()) as ReportsByKindIndexV1,
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface ReportsByKindIndexV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: v1.Kind): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: v1.Kind[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<v1.Kind[]>
    getKeys(block: Block, key: v1.Kind): Promise<v1.Kind[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Kind[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Kind): AsyncIterable<v1.Kind[]>
    getPairs(block: Block): Promise<[k: v1.Kind, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: v1.Kind): Promise<[k: v1.Kind, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Kind, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Kind): AsyncIterable<[k: v1.Kind, v: (Bytes | undefined)][]>
}
