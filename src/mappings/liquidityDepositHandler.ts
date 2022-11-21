import { SubstrateExtrinsic } from '@subql/types';
import { assignCommonHistoryElemInfo, updateHistoryElementStats } from "../utils/history";
import { getAssetId, formatU128ToBalance } from '../utils/assets';

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

    // base asset
    const balancesTransferEvent = extrinsic.events.find(e => e.event.method === 'Transfer' && e.event.section === 'balances');
    // target asset
    const tokensTransferEvent = extrinsic.events.find(e => e.event.method === 'Transfer' && e.event.section === 'tokens');

    if (balancesTransferEvent && tokensTransferEvent) {
        // from, to, amount
        const { event: { data: [, , inputAmount] } } = balancesTransferEvent;
        // currencyId, from, to, amount
        const { event: { data: [, , , outputAmount] } } = tokensTransferEvent;

        details.baseAssetAmount = formatU128ToBalance(inputAmount.toString(), baseAssetId);
        details.targetAssetAmount = formatU128ToBalance(outputAmount.toString(), targetAssetId);
    }

    record.data = details as any;

    await record.save();
    await updateHistoryElementStats(record);

    logger.debug(`===== Saved liquidity deposit with ${extrinsic.extrinsic.hash.toString()} txid =====`);

}
