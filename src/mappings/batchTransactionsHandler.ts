import { SubstrateExtrinsic } from '@subql/types';
import { Vec } from '@polkadot/types';
import { AnyTuple, CallBase } from '@polkadot/types/types';

import { PoolXYK } from '../types';
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId, formatU128ToBalance } from '../utils/assets';
import { getPoolAccountId } from '../utils/pools';
import { XOR, DOUBLE_PRICE_POOL } from '../utils/consts';

function formatSpecificCalls(
    call: CallBase<AnyTuple>
): Object {
    const { args } = call;
    switch (call.method) {
        case "depositLiquidity": {
            const [dex_id, input_asset_a, input_asset_b, input_a_desired, input_b_desired, input_a_min, input_b_min] = args;
            // TODO move args to common function here and in other cases
            return { args: {
                dex_id: dex_id.toHuman(),
                input_asset_a: getAssetId(input_asset_a),
                input_asset_b: getAssetId(input_asset_b),
                input_a_min: formatU128ToBalance(input_a_min.toString(), getAssetId(input_asset_a)),
                input_b_min: formatU128ToBalance(input_b_min.toString(), getAssetId(input_asset_b)),
                input_a_desired: formatU128ToBalance(input_a_desired.toString(), getAssetId(input_asset_a)),
                input_b_desired: formatU128ToBalance(input_b_desired.toString(), getAssetId(input_asset_b))
                }
            }
        }
        case "initializePool": {
            const [dex_id, asset_a, asset_b] = args;
            return { args: {
                dex_id: dex_id.toHuman(),
                asset_a: getAssetId(asset_a),
                asset_b: getAssetId(asset_b),
                }
            }
        }
        case "register": {
            const [dex_id, base_asset_id, target_asset_id] = args;
            return  { args: {
                dex_id: dex_id.toHuman(),
                base_asset_id: getAssetId(base_asset_id),
                target_asset_id: getAssetId(target_asset_id),
                }
            }
        }
        default: {
            return call.toJSON()
        }
    }
};

function extractCalls(
    call: CallBase<AnyTuple>,
    id: number,
    parentCallId: string,
    entities: Object[]
): Object[] {

    let entity = new Object();

    entity = {
        callId: `${parentCallId}-${id}`,
        method: call.method,
        module: call.section,
        hash: call.hash,
        data: formatSpecificCalls(call)
    }

    entities.push(entity);

    return entities;

}

export async function batchTransactionsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught batch transaction extrinsic")

    const calls = extrinsic.extrinsic.method.args[0] as Vec<CallBase<AnyTuple>>;
    const entities = [] as Object[];

    const record = assignCommonHistoryElemInfo(extrinsic);

    entities.concat(
        calls.map((call, idx) => extractCalls(call, idx, record.blockHeight.toString(), entities))
    );


    record.data = entities as Object

    await record.save()
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved batch extrinsic with ${record.id.toString()} txid =====`)

    // If deposit liqudiity call exists, create new Pool
    const depositLiquidity: any = entities.find((entity: any) => entity.method === 'depositLiquidity');

    if (depositLiquidity) {
        const baseAsset = depositLiquidity.data.input_asset_a;
        const targetAsset = depositLiquidity.data.input_asset_b;
        const poolId = await getPoolAccountId(baseAsset, targetAsset);

        if (!poolId) return;

        const pool = (await PoolXYK.get(poolId)) || new PoolXYK(poolId);

        pool.baseAsset = baseAsset;
        pool.targetAsset = targetAsset;
        pool.baseAssetReserves = depositLiquidity.data.input_a_desired;
        pool.targetAssetReserves = depositLiquidity.data.input_b_desired;
        pool.multiplier = baseAsset === XOR && DOUBLE_PRICE_POOL.includes(targetAsset) ? 2 : 1;
        pool.priceUSD = '0';
        pool.strategicBonusApy = '0';

        await pool.save();
    }
}