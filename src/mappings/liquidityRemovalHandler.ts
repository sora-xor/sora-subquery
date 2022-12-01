import { SubstrateExtrinsic } from '@subql/types';

import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId, formatU128ToBalance } from '../utils/assets';
import { isAssetTransferEvent } from '../utils/events';
import { getOrCreatePoolXYKEntity } from '../utils/pools';

export async function handleLiquidityRemoval(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught liquidity removal extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic)

    const { extrinsic: { args: [dexId, assetAId, assetBId, poolTokensDesired, outputAMin, outputBMin] } } = extrinsic;

    const baseAssetId = getAssetId(assetAId);
    const targetAssetId = getAssetId(assetBId);

    const details = {
        type: "Removal",
        baseAssetId,
        targetAssetId,
        baseAssetAmount: formatU128ToBalance(outputAMin.toString(), baseAssetId),
        targetAssetAmount: formatU128ToBalance(outputBMin.toString(), targetAssetId)
    };

    if (record.execution.success) {

        const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));

        if (transfers.length === 2) {
            const [baseAssetTransfer, targetAssetTransfer] = transfers;

            const [amountA] = baseAssetTransfer.event.data.slice().reverse();
            const [amountB] = targetAssetTransfer.event.data.slice().reverse();

            details.baseAssetAmount = formatU128ToBalance(amountA.toString(), baseAssetId);
            details.targetAssetAmount = formatU128ToBalance(amountB.toString(), targetAssetId);

            // update pool reserves
            const pool = await getOrCreatePoolXYKEntity(baseAssetId, targetAssetId);

            pool.baseAssetReserves = pool.baseAssetReserves - BigInt(amountA.toString());
            pool.targetAssetReserves = pool.targetAssetReserves - BigInt(amountB.toString());

            await pool.save();
        }
    }

    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}
