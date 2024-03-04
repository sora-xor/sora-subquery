import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const reports =  {
    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    v70: new StorageType('Offences.Reports', 'Optional', [v70.H256], v70.OffenceDetails) as ReportsV70,
}

/**
 *  The primary structure that holds all offence records keyed by report identifiers.
 */
export interface ReportsV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.H256): Promise<(v70.OffenceDetails | undefined)>
    getMany(block: Block, keys: v70.H256[]): Promise<(v70.OffenceDetails | undefined)[]>
    getKeys(block: Block): Promise<v70.H256[]>
    getKeys(block: Block, key: v70.H256): Promise<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<v70.H256[]>
    getPairs(block: Block): Promise<[k: v70.H256, v: (v70.OffenceDetails | undefined)][]>
    getPairs(block: Block, key: v70.H256): Promise<[k: v70.H256, v: (v70.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H256, v: (v70.OffenceDetails | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<[k: v70.H256, v: (v70.OffenceDetails | undefined)][]>
}

export const concurrentReportsIndex =  {
    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    v70: new StorageType('Offences.ConcurrentReportsIndex', 'Default', [sts.bytes(), sts.bytes()], sts.array(() => v70.H256)) as ConcurrentReportsIndexV70,
}

/**
 *  A vector of reports of the same kind that happened at the same time slot.
 */
export interface ConcurrentReportsIndexV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v70.H256[]
    get(block: Block, key1: Bytes, key2: Bytes): Promise<(v70.H256[] | undefined)>
    getMany(block: Block, keys: [Bytes, Bytes][]): Promise<(v70.H256[] | undefined)[]>
    getKeys(block: Block): Promise<[Bytes, Bytes][]>
    getKeys(block: Block, key1: Bytes): Promise<[Bytes, Bytes][]>
    getKeys(block: Block, key1: Bytes, key2: Bytes): Promise<[Bytes, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[Bytes, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[Bytes, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: Bytes, key2: Bytes): AsyncIterable<[Bytes, Bytes][]>
    getPairs(block: Block): Promise<[k: [Bytes, Bytes], v: (v70.H256[] | undefined)][]>
    getPairs(block: Block, key1: Bytes): Promise<[k: [Bytes, Bytes], v: (v70.H256[] | undefined)][]>
    getPairs(block: Block, key1: Bytes, key2: Bytes): Promise<[k: [Bytes, Bytes], v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [Bytes, Bytes], v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes): AsyncIterable<[k: [Bytes, Bytes], v: (v70.H256[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: Bytes, key2: Bytes): AsyncIterable<[k: [Bytes, Bytes], v: (v70.H256[] | undefined)][]>
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
    v70: new StorageType('Offences.ReportsByKindIndex', 'Default', [sts.bytes()], sts.bytes()) as ReportsByKindIndexV70,
}

/**
 *  Enumerates all reports of a kind along with the time they happened.
 * 
 *  All reports are sorted by the time of offence.
 * 
 *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
 *  different types are not supported at the moment so we are doing the manual serialization.
 */
export interface ReportsByKindIndexV70  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: Bytes): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (Bytes | undefined)][]>
}
