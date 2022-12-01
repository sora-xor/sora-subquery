import { SubstrateExtrinsic } from '@subql/types';

import BigNumber from "bignumber.js";

import { PoolXYK } from '../types';
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId, formatU128ToBalance } from '../utils/assets';
import { isAssetTransferEvent } from '../utils/events';
import { getPoolAccountId } from '../utils/pools';

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
        }
    }

    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);

    if (record.execution.success) {
        const poolId = await getPoolAccountId(details.baseAssetId, targetAssetId);

        if (!poolId) return;

        const pool = await PoolXYK.get(poolId);

        if (!pool) {
            logger.error(`Cannot get pool with id: ${poolId}`);
            return;
        }

        pool.baseAssetReserves = new BigNumber(pool.baseAssetReserves).minus(new BigNumber(details.baseAssetAmount)).toString();
        pool.targetAssetReserves = new BigNumber(pool.targetAssetReserves).minus(new BigNumber(details.targetAssetAmount)).toString();

        await pool.save();
    }
}
