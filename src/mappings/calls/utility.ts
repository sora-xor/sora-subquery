import { SubstrateExtrinsic } from '@subql/types';
import { Vec } from '@polkadot/types';
import { AnyTuple, CallBase } from '@polkadot/types/types';

import { createHistoryElement } from '../../utils/history';
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { updatePoolLiquidity } from '../../utils/pools';
import { logStartProcessingCall } from '../../utils/logs';
import { getEntityId, getBlockNumber, getExtrinsicSigner } from '../../utils';
import { HistoryElementCall } from '../../types';

function formatSpecificCalls(call: CallBase<AnyTuple>): Object {
  const { args } = call;
  switch (call.method) {
    case 'depositLiquidity': {
      const [dex_id, input_asset_a, input_asset_b, input_a_desired, input_b_desired, input_a_min, input_b_min] = args;
      // TODO move args to common function here and in other cases
      return {
        dexId: dex_id.toHuman(),
        baseAssetId: getAssetId(input_asset_a),
        targetAssetId: getAssetId(input_asset_b),
        baseAssetMin: formatU128ToBalance(input_a_min.toString(), getAssetId(input_asset_a)),
        targetAssetMin: formatU128ToBalance(input_b_min.toString(), getAssetId(input_asset_b)),
        baseAssetDesired: formatU128ToBalance(input_a_desired.toString(), getAssetId(input_asset_a)),
        targetAssetDesired: formatU128ToBalance(input_b_desired.toString(), getAssetId(input_asset_b)),
      };
    }
    case 'initializePool': {
      const [dex_id, asset_a, asset_b] = args;
      return {
        dexId: dex_id.toHuman(),
        baseAssetId: getAssetId(asset_a),
        targetAssetId: getAssetId(asset_b),
      };
    }
    case 'register': {
      const [dex_id, base_asset_id, target_asset_id] = args;
      return {
        dexId: dex_id.toHuman(),
        baseAssetId: getAssetId(base_asset_id),
        targetAssetId: getAssetId(target_asset_id),
      };
    }
    default: {
      return call.toJSON();
    }
  }
}

function extractCalls(call: CallBase<AnyTuple>, id: number, parentCallId: string, entities: Object[]): Object[] {
  let entity = new Object();

  entity = {
    callId: `${parentCallId}-${id}`,
    method: call.method,
    module: call.section,
    hash: call.hash.toString(),
    data: formatSpecificCalls(call),
  };

  entities.push(entity);

  return entities;
}

export async function batchTransactionsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {
  logStartProcessingCall(extrinsic);

  const extrinsicId = extrinsic.extrinsic.hash.toString();
  const calls = extrinsic.extrinsic.method.args[0] as Vec<CallBase<AnyTuple>>;
  const entities = [] as Object[];

  entities.concat(calls.map((call, idx) => extractCalls(call, idx, extrinsicId, entities)));

  // If initialize pool call exists, create new Pool
  const initializePool: any = entities.find((entity: any) => entity.method === 'initializePool');

  if (initializePool) {
    const { baseAssetId, targetAssetId } = initializePool.data;

    await updatePoolLiquidity(extrinsic.block, baseAssetId, targetAssetId, getExtrinsicSigner(extrinsic));
  }

  const historyElementId = getEntityId(extrinsic);

  const historyElementCalls = entities.map((call: any) => {
    const historyElementCall = new HistoryElementCall(
      call.callId,
      historyElementId,
      call.module,
      call.method,
      call.hash,
      getBlockNumber(extrinsic.block)
    );

    historyElementCall.data = call.data;

    return historyElementCall;
  });

  await createHistoryElement(extrinsic, undefined, { calls: historyElementCalls });
}
