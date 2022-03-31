import { SubstrateExtrinsic } from '@subql/types';
import { Vec } from '@polkadot/types';
import { AnyTuple, CallBase } from '@polkadot/types/types';
import { assignCommonHistoryElemInfo, formatU128ToBalance, getExtrinsicTransferredCurrencies } from "./utils";

function formatSpecificCalls(
    call: CallBase<AnyTuple>,
    extrinsic: SubstrateExtrinsic,
): Object {
    const { args } = call;
    switch (call.method) {
        case "depositLiquidity": {
            const [dex_id, input_asset_a, input_asset_b, input_a_desired, input_b_desired, input_a_min, input_b_min] = args;
            // TODO move args to common function here and in other cases
            return { args: {
                dex_id: dex_id.toHuman(),
                input_asset_a: input_asset_a.toHuman(),
                input_asset_b: input_asset_b.toHuman(),
                input_a_min: formatU128ToBalance(input_a_min.toString(), input_asset_a.toString()),
                input_b_min: formatU128ToBalance(input_b_min.toString(), input_asset_b.toString()),
                input_a_desired: formatU128ToBalance(input_a_desired.toString(), input_asset_a.toString()),
                input_b_desired: formatU128ToBalance(input_b_desired.toString(), input_asset_b.toString())
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
            return { args: {
                dex_id: dex_id.toHuman(),
                base_asset_id: base_asset_id.toHuman(),
                target_asset_id: target_asset_id.toHuman(),
                }
            }
        }
        case "claim":
        case "claimIncentive":
        case "claimRewards":
        case "claimCrowdloanRewards": {
            const rewards = getExtrinsicTransferredCurrencies(extrinsic);
            const restData = call.toJSON();

            return {
                ...restData,
                rewards
            }
        }
        default: {
            return call.toJSON()
        }
    }
};

function extractCall(
    call: CallBase<AnyTuple>,
    id: number,
    parentCallId: string,
    extrinsic: SubstrateExtrinsic,
): { callId: string, method: string, module: string, hash: string, data: any } {
    return {
        callId: `${parentCallId}-${id}`,
        method: call.method,
        module: call.section,
        hash: call.hash.toString(),
        data: formatSpecificCalls(call, extrinsic)
    }
}

export async function batchTransactionsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
    logger.debug("Caught batch transaction extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic);

    const calls = extrinsic.extrinsic.method.args[0] as Vec<CallBase<AnyTuple>>;
    const entities = calls.map((call, idx) => extractCall(call, idx, record.blockHeight.toString(), extrinsic))

    record.data = entities as Object

    await record.save()

    logger.debug(`===== Saved batch extrinsic with ${record.id.toString()} txid =====`)
}