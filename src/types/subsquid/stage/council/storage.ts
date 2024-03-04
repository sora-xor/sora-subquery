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
import * as v55 from '../v55'
import * as v57 from '../v57'
import * as v59 from '../v59'
import * as v60 from '../v60'
import * as v62 from '../v62'
import * as v64 from '../v64'
import * as v66 from '../v66'
import * as v69 from '../v69'
import * as v70 from '../v70'
import * as v71 from '../v71'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    v33: new StorageType('Instance1Collective.Proposals', 'Default', [], sts.array(() => v33.Hash)) as ProposalsV33,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.Hash[]
    get(block: Block): Promise<(v33.Hash[] | undefined)>
}

export const proposalOf =  {
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
    v44: new StorageType('Council.ProposalOf', 'Optional', [v44.H256], v44.Call) as ProposalOfV44,
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
    v48: new StorageType('Council.ProposalOf', 'Optional', [v48.H256], v48.Call) as ProposalOfV48,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v52: new StorageType('Council.ProposalOf', 'Optional', [v52.H256], v52.Call) as ProposalOfV52,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v54: new StorageType('Council.ProposalOf', 'Optional', [v54.H256], v54.Call) as ProposalOfV54,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v55: new StorageType('Council.ProposalOf', 'Optional', [v55.H256], v55.Call) as ProposalOfV55,
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
    v62: new StorageType('Council.ProposalOf', 'Optional', [v62.H256], v62.Call) as ProposalOfV62,
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
    v69: new StorageType('Council.ProposalOf', 'Optional', [v69.H256], v69.Call) as ProposalOfV69,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v70: new StorageType('Council.ProposalOf', 'Optional', [v70.H256], v70.Call) as ProposalOfV70,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v71: new StorageType('Council.ProposalOf', 'Optional', [v71.H256], v71.Call) as ProposalOfV71,
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
export interface ProposalOfV44  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v44.H256): Promise<(v44.Call | undefined)>
    getMany(block: Block, keys: v44.H256[]): Promise<(v44.Call | undefined)[]>
    getKeys(block: Block): Promise<v44.H256[]>
    getKeys(block: Block, key: v44.H256): Promise<v44.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v44.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v44.H256): AsyncIterable<v44.H256[]>
    getPairs(block: Block): Promise<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairs(block: Block, key: v44.H256): Promise<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v44.H256, v: (v44.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v44.H256): AsyncIterable<[k: v44.H256, v: (v44.Call | undefined)][]>
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
export interface ProposalOfV48  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v48.H256): Promise<(v48.Call | undefined)>
    getMany(block: Block, keys: v48.H256[]): Promise<(v48.Call | undefined)[]>
    getKeys(block: Block): Promise<v48.H256[]>
    getKeys(block: Block, key: v48.H256): Promise<v48.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v48.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v48.H256): AsyncIterable<v48.H256[]>
    getPairs(block: Block): Promise<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairs(block: Block, key: v48.H256): Promise<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v48.H256, v: (v48.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v48.H256): AsyncIterable<[k: v48.H256, v: (v48.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV52  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v52.H256): Promise<(v52.Call | undefined)>
    getMany(block: Block, keys: v52.H256[]): Promise<(v52.Call | undefined)[]>
    getKeys(block: Block): Promise<v52.H256[]>
    getKeys(block: Block, key: v52.H256): Promise<v52.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v52.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v52.H256): AsyncIterable<v52.H256[]>
    getPairs(block: Block): Promise<[k: v52.H256, v: (v52.Call | undefined)][]>
    getPairs(block: Block, key: v52.H256): Promise<[k: v52.H256, v: (v52.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v52.H256, v: (v52.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v52.H256): AsyncIterable<[k: v52.H256, v: (v52.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV54  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v54.H256): Promise<(v54.Call | undefined)>
    getMany(block: Block, keys: v54.H256[]): Promise<(v54.Call | undefined)[]>
    getKeys(block: Block): Promise<v54.H256[]>
    getKeys(block: Block, key: v54.H256): Promise<v54.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v54.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v54.H256): AsyncIterable<v54.H256[]>
    getPairs(block: Block): Promise<[k: v54.H256, v: (v54.Call | undefined)][]>
    getPairs(block: Block, key: v54.H256): Promise<[k: v54.H256, v: (v54.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v54.H256, v: (v54.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v54.H256): AsyncIterable<[k: v54.H256, v: (v54.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV55  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v55.H256): Promise<(v55.Call | undefined)>
    getMany(block: Block, keys: v55.H256[]): Promise<(v55.Call | undefined)[]>
    getKeys(block: Block): Promise<v55.H256[]>
    getKeys(block: Block, key: v55.H256): Promise<v55.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v55.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v55.H256): AsyncIterable<v55.H256[]>
    getPairs(block: Block): Promise<[k: v55.H256, v: (v55.Call | undefined)][]>
    getPairs(block: Block, key: v55.H256): Promise<[k: v55.H256, v: (v55.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v55.H256, v: (v55.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v55.H256): AsyncIterable<[k: v55.H256, v: (v55.Call | undefined)][]>
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
export interface ProposalOfV62  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v62.H256): Promise<(v62.Call | undefined)>
    getMany(block: Block, keys: v62.H256[]): Promise<(v62.Call | undefined)[]>
    getKeys(block: Block): Promise<v62.H256[]>
    getKeys(block: Block, key: v62.H256): Promise<v62.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v62.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v62.H256): AsyncIterable<v62.H256[]>
    getPairs(block: Block): Promise<[k: v62.H256, v: (v62.Call | undefined)][]>
    getPairs(block: Block, key: v62.H256): Promise<[k: v62.H256, v: (v62.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v62.H256, v: (v62.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v62.H256): AsyncIterable<[k: v62.H256, v: (v62.Call | undefined)][]>
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
export interface ProposalOfV69  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v69.H256): Promise<(v69.Call | undefined)>
    getMany(block: Block, keys: v69.H256[]): Promise<(v69.Call | undefined)[]>
    getKeys(block: Block): Promise<v69.H256[]>
    getKeys(block: Block, key: v69.H256): Promise<v69.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v69.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v69.H256): AsyncIterable<v69.H256[]>
    getPairs(block: Block): Promise<[k: v69.H256, v: (v69.Call | undefined)][]>
    getPairs(block: Block, key: v69.H256): Promise<[k: v69.H256, v: (v69.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v69.H256, v: (v69.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v69.H256): AsyncIterable<[k: v69.H256, v: (v69.Call | undefined)][]>
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

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV71  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v71.H256): Promise<(v71.Call | undefined)>
    getMany(block: Block, keys: v71.H256[]): Promise<(v71.Call | undefined)[]>
    getKeys(block: Block): Promise<v71.H256[]>
    getKeys(block: Block, key: v71.H256): Promise<v71.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v71.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v71.H256): AsyncIterable<v71.H256[]>
    getPairs(block: Block): Promise<[k: v71.H256, v: (v71.Call | undefined)][]>
    getPairs(block: Block, key: v71.H256): Promise<[k: v71.H256, v: (v71.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v71.H256, v: (v71.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v71.H256): AsyncIterable<[k: v71.H256, v: (v71.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    v33: new StorageType('Instance1Collective.Voting', 'Optional', [v33.Hash], v33.Votes) as VotingV33,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v33.Hash): Promise<(v33.Votes | undefined)>
    getMany(block: Block, keys: v33.Hash[]): Promise<(v33.Votes | undefined)[]>
    getKeys(block: Block): Promise<v33.Hash[]>
    getKeys(block: Block, key: v33.Hash): Promise<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v33.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<v33.Hash[]>
    getPairs(block: Block): Promise<[k: v33.Hash, v: (v33.Votes | undefined)][]>
    getPairs(block: Block, key: v33.Hash): Promise<[k: v33.Hash, v: (v33.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v33.Hash, v: (v33.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v33.Hash): AsyncIterable<[k: v33.Hash, v: (v33.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    v33: new StorageType('Instance1Collective.ProposalCount', 'Default', [], sts.number()) as ProposalCountV33,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    v33: new StorageType('Instance1Collective.Members', 'Default', [], sts.array(() => v33.AccountId)) as MembersV33,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersV33  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v33.AccountId[]
    get(block: Block): Promise<(v33.AccountId[] | undefined)>
}

export const prime =  {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    v33: new StorageType('Instance1Collective.Prime', 'Optional', [], v33.AccountId) as PrimeV33,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeV33  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v33.AccountId | undefined)>
}
