import { SubstrateExtrinsic } from '@subql/types';

import BigNumber from "bignumber.js";

import { PoolXYK } from '../types';
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId, formatU128ToBalance } from '../utils/assets';
import { getOrCreatePoolXYKEntity } from '../utils/pools';
import { isAssetTransferEvent } from '../utils/events';

export async function handleLiquidityDeposit(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught liquidity adding extrinsic")

    const record = assignCommonHistoryElemInfo(extrinsic);

    const { extrinsic: { args: [, assetAId, assetBId, assetADesired, assetBDesired] } } = extrinsic;

    const baseAssetId = getAssetId(assetAId);
    const targetAssetId = getAssetId(assetBId);

    const details = {
        type: "Deposit",
        baseAssetId,
        targetAssetId,
        baseAssetAmount: formatU128ToBalance(assetADesired.toString(), baseAssetId),
        targetAssetAmount: formatU128ToBalance(assetBDesired.toString(), targetAssetId)
    };

    const transfers = extrinsic.events.filter(e => isAssetTransferEvent(e));

    if (transfers.length === 2) {
        const [baseAssetTransfer, targetAssetTransfer] = transfers;

        const [amountA] = baseAssetTransfer.event.data.slice().reverse();
        const [amountB] = targetAssetTransfer.event.data.slice().reverse();

        details.baseAssetAmount = formatU128ToBalance(amountA.toString(), baseAssetId);
        details.targetAssetAmount = formatU128ToBalance(amountB.toString(), targetAssetId);

        // update pool reserves
        const pool = await getOrCreatePoolXYKEntity(baseAssetId, targetAssetId);

        pool.baseAssetReserves = pool.baseAssetReserves + BigInt(amountA.toString());
        pool.targetAssetReserves = pool.targetAssetReserves + BigInt(amountB.toString());

        await pool.save();
    }

    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved liquidity deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}
