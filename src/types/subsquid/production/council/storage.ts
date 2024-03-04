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
import * as v57 from '../v57'
import * as v59 from '../v59'
import * as v60 from '../v60'
import * as v63 from '../v63'
import * as v64 from '../v64'
import * as v66 from '../v66'
import * as v70 from '../v70'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v1: new StorageType('Instance1Collective.Proposals', 'Default', [], sts.array(() => v1.Hash)) as ProposalsV1,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Hash[]
    get(block: Block): Promise<(v1.Hash[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v1.Hash], v1.Proposal) as ProposalOfV1,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v3: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v3.Hash], v3.Proposal) as ProposalOfV3,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v7: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v7.Hash], v7.Proposal) as ProposalOfV7,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v19: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v19.Hash], v19.Proposal) as ProposalOfV19,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v22: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v22.Hash], v22.Proposal) as ProposalOfV22,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v23: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v23.Hash], v23.Proposal) as ProposalOfV23,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v26: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v26.Hash], v26.Proposal) as ProposalOfV26,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v32: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v32.Hash], v32.Proposal) as ProposalOfV32,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v33: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v33.Hash], v33.Proposal) as ProposalOfV33,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v35: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v35.Hash], v35.Proposal) as ProposalOfV35,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v37: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v37.Hash], v37.Proposal) as ProposalOfV37,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v38: new StorageType('Instance1Collective.ProposalOf', 'Optional', [v38.Hash], v38.Proposal) as ProposalOfV38,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v42: new StorageType('Council.ProposalOf', 'Optional', [v42.H256], v42.Call) as ProposalOfV42,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v43: new StorageType('Council.ProposalOf', 'Optional', [v43.H256], v43.Call) as ProposalOfV43,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v45: new StorageType('Council.ProposalOf', 'Optional', [v45.H256], v45.Call) as ProposalOfV45,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v46: new StorageType('Council.ProposalOf', 'Optional', [v46.H256], v46.Call) as ProposalOfV46,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v47: new StorageType('Council.ProposalOf', 'Optional', [v47.H256], v47.Call) as ProposalOfV47,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v50: new StorageType('Council.ProposalOf', 'Optional', [v50.H256], v50.Call) as ProposalOfV50,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v53: new StorageType('Council.ProposalOf', 'Optional', [v53.H256], v53.Call) as ProposalOfV53,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v57: new StorageType('Council.ProposalOf', 'Optional', [v57.H256], v57.Call) as ProposalOfV57,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v59: new StorageType('Council.ProposalOf', 'Optional', [v59.H256], v59.Call) as ProposalOfV59,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v60: new StorageType('Council.ProposalOf', 'Optional', [v60.H256], v60.Call) as ProposalOfV60,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v63: new StorageType('Council.ProposalOf', 'Optional', [v63.H256], v63.Call) as ProposalOfV63,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v64: new StorageType('Council.ProposalOf', 'Optional', [v64.H256], v64.Call) as ProposalOfV64,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v66: new StorageType('Council.ProposalOf', 'Optional', [v66.H256], v66.Call) as ProposalOfV66,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v70: new StorageType('Council.ProposalOf', 'Optional', [v70.H256], v70.Call) as ProposalOfV70,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.Hash): Promise<(v1.Proposal | undefined)>
    getMany(block: Block, keys: v1.Hash[]): Promise<(v1.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v1.Hash[]>
    getKeys(block: Block, key: v1.Hash): Promise<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<v1.Hash[]>
    getPairs(block: Block): Promise<[k: v1.Hash, v: (v1.Proposal | undefined)][]>
    getPairs(block: Block, key: v1.Hash): Promise<[k: v1.Hash, v: (v1.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Hash, v: (v1.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<[k: v1.Hash, v: (v1.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV3  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v3.Hash): Promise<(v3.Proposal | undefined)>
    getMany(block: Block, keys: v3.Hash[]): Promise<(v3.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v3.Hash[]>
    getKeys(block: Block, key: v3.Hash): Promise<v3.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v3.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v3.Hash): AsyncIterable<v3.Hash[]>
    getPairs(block: Block): Promise<[k: v3.Hash, v: (v3.Proposal | undefined)][]>
    getPairs(block: Block, key: v3.Hash): Promise<[k: v3.Hash, v: (v3.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v3.Hash, v: (v3.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v3.Hash): AsyncIterable<[k: v3.Hash, v: (v3.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.Hash): Promise<(v7.Proposal | undefined)>
    getMany(block: Block, keys: v7.Hash[]): Promise<(v7.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v7.Hash[]>
    getKeys(block: Block, key: v7.Hash): Promise<v7.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.Hash): AsyncIterable<v7.Hash[]>
    getPairs(block: Block): Promise<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
    getPairs(block: Block, key: v7.Hash): Promise<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.Hash): AsyncIterable<[k: v7.Hash, v: (v7.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV19  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v19.Hash): Promise<(v19.Proposal | undefined)>
    getMany(block: Block, keys: v19.Hash[]): Promise<(v19.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v19.Hash[]>
    getKeys(block: Block, key: v19.Hash): Promise<v19.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v19.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v19.Hash): AsyncIterable<v19.Hash[]>
    getPairs(block: Block): Promise<[k: v19.Hash, v: (v19.Proposal | undefined)][]>
    getPairs(block: Block, key: v19.Hash): Promise<[k: v19.Hash, v: (v19.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v19.Hash, v: (v19.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v19.Hash): AsyncIterable<[k: v19.Hash, v: (v19.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV22  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v22.Hash): Promise<(v22.Proposal | undefined)>
    getMany(block: Block, keys: v22.Hash[]): Promise<(v22.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v22.Hash[]>
    getKeys(block: Block, key: v22.Hash): Promise<v22.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v22.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v22.Hash): AsyncIterable<v22.Hash[]>
    getPairs(block: Block): Promise<[k: v22.Hash, v: (v22.Proposal | undefined)][]>
    getPairs(block: Block, key: v22.Hash): Promise<[k: v22.Hash, v: (v22.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v22.Hash, v: (v22.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v22.Hash): AsyncIterable<[k: v22.Hash, v: (v22.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV23  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v23.Hash): Promise<(v23.Proposal | undefined)>
    getMany(block: Block, keys: v23.Hash[]): Promise<(v23.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v23.Hash[]>
    getKeys(block: Block, key: v23.Hash): Promise<v23.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v23.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v23.Hash): AsyncIterable<v23.Hash[]>
    getPairs(block: Block): Promise<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
    getPairs(block: Block, key: v23.Hash): Promise<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v23.Hash): AsyncIterable<[k: v23.Hash, v: (v23.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV26  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v26.Hash): Promise<(v26.Proposal | undefined)>
    getMany(block: Block, keys: v26.Hash[]): Promise<(v26.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v26.Hash[]>
    getKeys(block: Block, key: v26.Hash): Promise<v26.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v26.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v26.Hash): AsyncIterable<v26.Hash[]>
    getPairs(block: Block): Promise<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
    getPairs(block: Block, key: v26.Hash): Promise<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v26.Hash): AsyncIterable<[k: v26.Hash, v: (v26.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV32  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v32.Hash): Promise<(v32.Proposal | undefined)>
    getMany(block: Block, keys: v32.Hash[]): Promise<(v32.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v32.Hash[]>
    getKeys(block: Block, key: v32.Hash): Promise<v32.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v32.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v32.Hash): AsyncIterable<v32.Hash[]>
    getPairs(block: Block): Promise<[k: v32.Hash, v: (v32.Proposal | undefined)][]>
    getPairs(block: Block, key: v32.Hash): Promise<[k: v32.Hash, v: (v32.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v32.Hash, v: (v32.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v32.Hash): AsyncIterable<[k: v32.Hash, v: (v32.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.Hash): Promise<(v33.Proposal | undefined)>
    getMany(block: Block, keys: v33.Hash[]): Promise<(v33.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v33.Hash[]>
    getKeys(block: Block, key: v33.Hash): Promise<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<v33.Hash[]>
    getPairs(block: Block): Promise<[k: v33.Hash, v: (v33.Proposal | undefined)][]>
    getPairs(block: Block, key: v33.Hash): Promise<[k: v33.Hash, v: (v33.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.Hash, v: (v33.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<[k: v33.Hash, v: (v33.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV35  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v35.Hash): Promise<(v35.Proposal | undefined)>
    getMany(block: Block, keys: v35.Hash[]): Promise<(v35.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v35.Hash[]>
    getKeys(block: Block, key: v35.Hash): Promise<v35.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v35.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v35.Hash): AsyncIterable<v35.Hash[]>
    getPairs(block: Block): Promise<[k: v35.Hash, v: (v35.Proposal | undefined)][]>
    getPairs(block: Block, key: v35.Hash): Promise<[k: v35.Hash, v: (v35.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v35.Hash, v: (v35.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v35.Hash): AsyncIterable<[k: v35.Hash, v: (v35.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV37  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v37.Hash): Promise<(v37.Proposal | undefined)>
    getMany(block: Block, keys: v37.Hash[]): Promise<(v37.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v37.Hash[]>
    getKeys(block: Block, key: v37.Hash): Promise<v37.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v37.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v37.Hash): AsyncIterable<v37.Hash[]>
    getPairs(block: Block): Promise<[k: v37.Hash, v: (v37.Proposal | undefined)][]>
    getPairs(block: Block, key: v37.Hash): Promise<[k: v37.Hash, v: (v37.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v37.Hash, v: (v37.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v37.Hash): AsyncIterable<[k: v37.Hash, v: (v37.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV38  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v38.Hash): Promise<(v38.Proposal | undefined)>
    getMany(block: Block, keys: v38.Hash[]): Promise<(v38.Proposal | undefined)[]>
    getKeys(block: Block): Promise<v38.Hash[]>
    getKeys(block: Block, key: v38.Hash): Promise<v38.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v38.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v38.Hash): AsyncIterable<v38.Hash[]>
    getPairs(block: Block): Promise<[k: v38.Hash, v: (v38.Proposal | undefined)][]>
    getPairs(block: Block, key: v38.Hash): Promise<[k: v38.Hash, v: (v38.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v38.Hash, v: (v38.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v38.Hash): AsyncIterable<[k: v38.Hash, v: (v38.Proposal | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV42  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v42.H256): Promise<(v42.Call | undefined)>
    getMany(block: Block, keys: v42.H256[]): Promise<(v42.Call | undefined)[]>
    getKeys(block: Block): Promise<v42.H256[]>
    getKeys(block: Block, key: v42.H256): Promise<v42.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v42.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v42.H256): AsyncIterable<v42.H256[]>
    getPairs(block: Block): Promise<[k: v42.H256, v: (v42.Call | undefined)][]>
    getPairs(block: Block, key: v42.H256): Promise<[k: v42.H256, v: (v42.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v42.H256, v: (v42.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v42.H256): AsyncIterable<[k: v42.H256, v: (v42.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV43  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v43.H256): Promise<(v43.Call | undefined)>
    getMany(block: Block, keys: v43.H256[]): Promise<(v43.Call | undefined)[]>
    getKeys(block: Block): Promise<v43.H256[]>
    getKeys(block: Block, key: v43.H256): Promise<v43.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v43.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v43.H256): AsyncIterable<v43.H256[]>
    getPairs(block: Block): Promise<[k: v43.H256, v: (v43.Call | undefined)][]>
    getPairs(block: Block, key: v43.H256): Promise<[k: v43.H256, v: (v43.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v43.H256, v: (v43.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v43.H256): AsyncIterable<[k: v43.H256, v: (v43.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV45  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v45.H256): Promise<(v45.Call | undefined)>
    getMany(block: Block, keys: v45.H256[]): Promise<(v45.Call | undefined)[]>
    getKeys(block: Block): Promise<v45.H256[]>
    getKeys(block: Block, key: v45.H256): Promise<v45.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v45.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v45.H256): AsyncIterable<v45.H256[]>
    getPairs(block: Block): Promise<[k: v45.H256, v: (v45.Call | undefined)][]>
    getPairs(block: Block, key: v45.H256): Promise<[k: v45.H256, v: (v45.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v45.H256, v: (v45.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v45.H256): AsyncIterable<[k: v45.H256, v: (v45.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV46  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v46.H256): Promise<(v46.Call | undefined)>
    getMany(block: Block, keys: v46.H256[]): Promise<(v46.Call | undefined)[]>
    getKeys(block: Block): Promise<v46.H256[]>
    getKeys(block: Block, key: v46.H256): Promise<v46.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v46.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v46.H256): AsyncIterable<v46.H256[]>
    getPairs(block: Block): Promise<[k: v46.H256, v: (v46.Call | undefined)][]>
    getPairs(block: Block, key: v46.H256): Promise<[k: v46.H256, v: (v46.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v46.H256, v: (v46.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v46.H256): AsyncIterable<[k: v46.H256, v: (v46.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV47  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v47.H256): Promise<(v47.Call | undefined)>
    getMany(block: Block, keys: v47.H256[]): Promise<(v47.Call | undefined)[]>
    getKeys(block: Block): Promise<v47.H256[]>
    getKeys(block: Block, key: v47.H256): Promise<v47.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v47.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v47.H256): AsyncIterable<v47.H256[]>
    getPairs(block: Block): Promise<[k: v47.H256, v: (v47.Call | undefined)][]>
    getPairs(block: Block, key: v47.H256): Promise<[k: v47.H256, v: (v47.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v47.H256, v: (v47.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v47.H256): AsyncIterable<[k: v47.H256, v: (v47.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV50  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v50.H256): Promise<(v50.Call | undefined)>
    getMany(block: Block, keys: v50.H256[]): Promise<(v50.Call | undefined)[]>
    getKeys(block: Block): Promise<v50.H256[]>
    getKeys(block: Block, key: v50.H256): Promise<v50.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v50.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v50.H256): AsyncIterable<v50.H256[]>
    getPairs(block: Block): Promise<[k: v50.H256, v: (v50.Call | undefined)][]>
    getPairs(block: Block, key: v50.H256): Promise<[k: v50.H256, v: (v50.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v50.H256, v: (v50.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v50.H256): AsyncIterable<[k: v50.H256, v: (v50.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV53  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v53.H256): Promise<(v53.Call | undefined)>
    getMany(block: Block, keys: v53.H256[]): Promise<(v53.Call | undefined)[]>
    getKeys(block: Block): Promise<v53.H256[]>
    getKeys(block: Block, key: v53.H256): Promise<v53.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v53.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v53.H256): AsyncIterable<v53.H256[]>
    getPairs(block: Block): Promise<[k: v53.H256, v: (v53.Call | undefined)][]>
    getPairs(block: Block, key: v53.H256): Promise<[k: v53.H256, v: (v53.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v53.H256, v: (v53.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v53.H256): AsyncIterable<[k: v53.H256, v: (v53.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV57  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v57.H256): Promise<(v57.Call | undefined)>
    getMany(block: Block, keys: v57.H256[]): Promise<(v57.Call | undefined)[]>
    getKeys(block: Block): Promise<v57.H256[]>
    getKeys(block: Block, key: v57.H256): Promise<v57.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v57.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v57.H256): AsyncIterable<v57.H256[]>
    getPairs(block: Block): Promise<[k: v57.H256, v: (v57.Call | undefined)][]>
    getPairs(block: Block, key: v57.H256): Promise<[k: v57.H256, v: (v57.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v57.H256, v: (v57.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v57.H256): AsyncIterable<[k: v57.H256, v: (v57.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV59  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v59.H256): Promise<(v59.Call | undefined)>
    getMany(block: Block, keys: v59.H256[]): Promise<(v59.Call | undefined)[]>
    getKeys(block: Block): Promise<v59.H256[]>
    getKeys(block: Block, key: v59.H256): Promise<v59.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v59.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v59.H256): AsyncIterable<v59.H256[]>
    getPairs(block: Block): Promise<[k: v59.H256, v: (v59.Call | undefined)][]>
    getPairs(block: Block, key: v59.H256): Promise<[k: v59.H256, v: (v59.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v59.H256, v: (v59.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v59.H256): AsyncIterable<[k: v59.H256, v: (v59.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV60  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v60.H256): Promise<(v60.Call | undefined)>
    getMany(block: Block, keys: v60.H256[]): Promise<(v60.Call | undefined)[]>
    getKeys(block: Block): Promise<v60.H256[]>
    getKeys(block: Block, key: v60.H256): Promise<v60.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v60.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v60.H256): AsyncIterable<v60.H256[]>
    getPairs(block: Block): Promise<[k: v60.H256, v: (v60.Call | undefined)][]>
    getPairs(block: Block, key: v60.H256): Promise<[k: v60.H256, v: (v60.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v60.H256, v: (v60.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v60.H256): AsyncIterable<[k: v60.H256, v: (v60.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV63  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v63.H256): Promise<(v63.Call | undefined)>
    getMany(block: Block, keys: v63.H256[]): Promise<(v63.Call | undefined)[]>
    getKeys(block: Block): Promise<v63.H256[]>
    getKeys(block: Block, key: v63.H256): Promise<v63.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v63.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v63.H256): AsyncIterable<v63.H256[]>
    getPairs(block: Block): Promise<[k: v63.H256, v: (v63.Call | undefined)][]>
    getPairs(block: Block, key: v63.H256): Promise<[k: v63.H256, v: (v63.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v63.H256, v: (v63.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v63.H256): AsyncIterable<[k: v63.H256, v: (v63.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV64  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v64.H256): Promise<(v64.Call | undefined)>
    getMany(block: Block, keys: v64.H256[]): Promise<(v64.Call | undefined)[]>
    getKeys(block: Block): Promise<v64.H256[]>
    getKeys(block: Block, key: v64.H256): Promise<v64.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v64.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v64.H256): AsyncIterable<v64.H256[]>
    getPairs(block: Block): Promise<[k: v64.H256, v: (v64.Call | undefined)][]>
    getPairs(block: Block, key: v64.H256): Promise<[k: v64.H256, v: (v64.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v64.H256, v: (v64.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v64.H256): AsyncIterable<[k: v64.H256, v: (v64.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV66  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v66.H256): Promise<(v66.Call | undefined)>
    getMany(block: Block, keys: v66.H256[]): Promise<(v66.Call | undefined)[]>
    getKeys(block: Block): Promise<v66.H256[]>
    getKeys(block: Block, key: v66.H256): Promise<v66.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v66.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v66.H256): AsyncIterable<v66.H256[]>
    getPairs(block: Block): Promise<[k: v66.H256, v: (v66.Call | undefined)][]>
    getPairs(block: Block, key: v66.H256): Promise<[k: v66.H256, v: (v66.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v66.H256, v: (v66.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v66.H256): AsyncIterable<[k: v66.H256, v: (v66.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV70  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v70.H256): Promise<(v70.Call | undefined)>
    getMany(block: Block, keys: v70.H256[]): Promise<(v70.Call | undefined)[]>
    getKeys(block: Block): Promise<v70.H256[]>
    getKeys(block: Block, key: v70.H256): Promise<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v70.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<v70.H256[]>
    getPairs(block: Block): Promise<[k: v70.H256, v: (v70.Call | undefined)][]>
    getPairs(block: Block, key: v70.H256): Promise<[k: v70.H256, v: (v70.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v70.H256, v: (v70.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v70.H256): AsyncIterable<[k: v70.H256, v: (v70.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v1: new StorageType('Instance1Collective.Voting', 'Optional', [v1.Hash], v1.Votes) as VotingV1,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.Hash): Promise<(v1.Votes | undefined)>
    getMany(block: Block, keys: v1.Hash[]): Promise<(v1.Votes | undefined)[]>
    getKeys(block: Block): Promise<v1.Hash[]>
    getKeys(block: Block, key: v1.Hash): Promise<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<v1.Hash[]>
    getPairs(block: Block): Promise<[k: v1.Hash, v: (v1.Votes | undefined)][]>
    getPairs(block: Block, key: v1.Hash): Promise<[k: v1.Hash, v: (v1.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.Hash, v: (v1.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.Hash): AsyncIterable<[k: v1.Hash, v: (v1.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v1: new StorageType('Instance1Collective.ProposalCount', 'Default', [], sts.number()) as ProposalCountV1,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v1: new StorageType('Instance1Collective.Members', 'Default', [], sts.array(() => v1.AccountId)) as MembersV1,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId[]
    get(block: Block): Promise<(v1.AccountId[] | undefined)>
}

export const prime =  {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    v1: new StorageType('Instance1Collective.Prime', 'Optional', [], v1.AccountId) as PrimeV1,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AccountId | undefined)>
}
