import { SubstrateExtrinsic } from '@subql/types';
import { Vec } from '@polkadot/types';
import { AnyTuple, CallBase, Codec } from '@polkadot/types/types';
import { assignCommonHistoryElemInfo, formatU128ToBalance, assetPrecisions } from "./utils";

function formatSpecificCalls(
    call: CallBase<AnyTuple>
): Object {
    const { args } = call;
    switch (call.method) {
        case "depositLiquidity": {
            function parseFloatFromCodec(amount: Codec, asset: Codec): string {
                return parseFloat(amount.toHuman().toString()).toFixed(assetPrecisions.get(asset.toHuman().toString()));
            }
            const [dex_id, input_asset_a, input_asset_b, input_a_min, input_b_min, input_a_desired, input_b_desired] = args;
            // TODO move args to common function here and in other cases
            return { args: {
                dex_id: dex_id.toHuman(),
                input_asset_a: input_asset_a.toHuman(),
                input_asset_b: input_asset_b.toHuman(),
                input_a_min: parseFloatFromCodec(input_a_min, input_asset_a),
                input_b_min: parseFloatFromCodec(input_b_min, input_asset_b),
                input_a_desired: parseFloatFromCodec(input_a_desired, input_asset_a),
                input_b_desired: parseFloatFromCodec(input_b_desired, input_asset_b)
                }
            }
        }
        case "initializePool": {
            const [dex_id, asset_a, asset_b] = args;
            return { args: {
                dex_id: dex_id.toHuman(),
                asset_a: asset_a.toHuman(),
                asset_b: asset_b.toHuman(),
                }
            }
        }
        case "register": {
            const [dex_id, base_asset_id, target_asset_id] = args;
            return  { args: {
                dex_id: dex_id.toHuman(),
                base_asset_id: base_asset_id.toHuman(),
                target_asset_id: target_asset_id.toHuman(),
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

    logger.debug(`===== Saved batch extrinsic with ${record.id.toString()} txid =====`)

}