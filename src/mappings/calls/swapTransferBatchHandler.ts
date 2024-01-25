import { SubstrateExtrinsic } from '@subql/types';

import { addDataToHistoryElement, createHistoryElement, updateHistoryElementStats } from "../../utils/history";
import { getAssetId, formatU128ToBalance } from '../../utils/assets';
import { XOR } from '../../utils/consts';

import type { Vec } from "@polkadot/types";
import { LiquiditySourceType } from './swapsHandler';
import { getCallHandlerLog, logStartProcessingCall } from '../../utils/logs';


const getEventData = (extrinsic: SubstrateExtrinsic, method: string, section: string) => {
    const event = extrinsic.events.find(e => e.event.method === method && e.event.section === section);
    return event?.event?.data;
}

const handleAndSaveExtrinsic = async (extrinsic: SubstrateExtrinsic): Promise <void> => {
    const blockNumber = extrinsic.block.block.header.number.toNumber();
    const historyElement = await createHistoryElement(extrinsic);

    const [filterMode, liquiditySources, maxInputAmount, inputAsset, swapBatches] = extrinsic.extrinsic.args.slice().reverse();

    const inputAssetId = getAssetId(inputAsset);
    const extrinsicSigner = extrinsic.extrinsic.signer.toString();

    const details: any = {};

    details.assetId = inputAssetId;
    details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString();
    details.maxInputAmount = formatU128ToBalance(maxInputAmount.toString(), inputAssetId);
    details.blockNumber = blockNumber;
    details.from = extrinsicSigner;
    details.receivers = [];

    // fill receivers with assetId and amount
    for (const swapBatchInfo of (swapBatches as any)) {
        const assetId = getAssetId(swapBatchInfo.outcomeAssetId);

        for (const receiverInfo of swapBatchInfo.receivers) {
            details.receivers.push({
                assetId,
                accountId: receiverInfo.accountId.toString(),
                amount: formatU128ToBalance(receiverInfo.targetAmount.toString(), assetId)
            });
        }
    }

    if (historyElement.execution.success) {
        const batchSwapExecutedEvent = getEventData(extrinsic, 'BatchSwapExecuted', 'liquidityProxy');
        if (batchSwapExecutedEvent) {
            const [adarFee, inputAmount] = batchSwapExecutedEvent;
            details.adarFee = formatU128ToBalance(adarFee.toString(), inputAssetId);
            details.inputAmount = formatU128ToBalance(inputAmount.toString(), inputAssetId);
        }

        const transactionFeePaidEvent = getEventData(extrinsic, 'TransactionFeePaid', 'transactionPayment');
        if (transactionFeePaidEvent) {
            const [, actualFee] = transactionFeePaidEvent;
            details.actualFee = formatU128ToBalance(actualFee.toString(), XOR);
        }

        const assetTransferEvents = extrinsic.events.filter(e => e.event.method === 'Transfer' && e.event.section === 'assets');
        const receiverIds = details.receivers.map((receiver) => receiver.accountId);

        for (const assetTransferEvent of assetTransferEvents) {
            const { event: { data: [from, to, asset, amount] } } = assetTransferEvent;
            const sender = from.toString();
            const receiver = to.toString();
            // if technical transfer, skip
            if (!(sender === extrinsicSigner && receiverIds.includes(receiver))) continue;

            const assetId =  getAssetId(asset);
            const transfer = {
                assetId,
                amount: formatU128ToBalance(amount.toString(), assetId),
                from: sender,
                to: receiver,
            };

            // create history element for receiver
            const receiverHistory = await createHistoryElement(assetTransferEvent as any, transfer);
            // change address of history element to receiver
            receiverHistory.address = receiver;
            await receiverHistory.save();
        }
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function handleSwapTransferBatch(extrinsic: SubstrateExtrinsic): Promise <void> {
    logStartProcessingCall(extrinsic);

    await handleAndSaveExtrinsic(extrinsic);

    getCallHandlerLog(extrinsic).debug('Saved swap transfer batch');
}