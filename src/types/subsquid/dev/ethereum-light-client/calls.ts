import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const registerNetwork =  {
    name: 'EthereumLightClient.register_network',
    v70: new CallType(
        'EthereumLightClient.register_network',
        sts.struct({
            networkConfig: v70.NetworkConfig,
            header: v70.Type_556,
            initialDifficulty: sts.bigint(),
        })
    ),
}

export const updateDifficultyConfig =  {
    name: 'EthereumLightClient.update_difficulty_config',
    v70: new CallType(
        'EthereumLightClient.update_difficulty_config',
        sts.struct({
            networkConfig: v70.NetworkConfig,
        })
    ),
}

export const importHeader =  {
    name: 'EthereumLightClient.import_header',
    /**
     * Import a single Ethereum PoW header.
     * 
     * Note that this extrinsic has a very high weight. The weight is affected by the
     * value of `DescendantsUntilFinalized`. Regenerate weights if it changes.
     * 
     * The largest contributors to the worst case weight, in decreasing order, are:
     * - Pruning: max 2 writes per pruned header + 2 writes to finalize pruning state.
     *   Up to `HEADERS_TO_PRUNE_IN_SINGLE_IMPORT` can be pruned in one call.
     * - Ethash validation: this cost is pure CPU. EthashProver checks a merkle proof
     *   for each DAG node selected in the "hashimoto"-loop.
     * - Iterating over ancestors: min `DescendantsUntilFinalized` reads to find the
     *   newly finalized ancestor of a header.
     */
    v70: new CallType(
        'EthereumLightClient.import_header',
        sts.struct({
            networkId: sts.bigint(),
            header: v70.Type_556,
            proof: sts.array(() => v70.DoubleNodeWithMerkleProof),
            mixNonce: v70.MixNonce,
            submitter: v70.AccountId32,
            signature: v70.MultiSignature,
        })
    ),
}
