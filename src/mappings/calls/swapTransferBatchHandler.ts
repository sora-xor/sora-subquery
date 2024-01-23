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

    const [filterMode, liquiditySources, maxInputAmount, inputAsset, receivers] = extrinsic.extrinsic.args.slice().reverse();
    const details: any = {};
    const inputAssetId = getAssetId(inputAsset);
    details.inputAssetId = inputAssetId;
    details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString();
    details.receivers = receivers;
    details.maxInputAmount = maxInputAmount;
    details.blockNumber = blockNumber;
    details.from = extrinsic.extrinsic.signer.toString();
    details.exchanges = [];
    details.transfers = [];

    if (historyElement.execution.success) {
        const batchSwapExecutedEvent = getEventData(extrinsic, 'BatchSwapExecuted', 'liquidityProxy');
        if (batchSwapExecutedEvent) {
            const [adarFee, inputAmount] = batchSwapExecutedEvent;
            details.adarFee = formatU128ToBalance(adarFee.toString(), inputAssetId);
            details.inputAmount = formatU128ToBalance(inputAmount.toString(), inputAssetId);
        }

        const feeWithdrawnEvent = getEventData(extrinsic, 'FeeWithdrawn', 'xorFee');
        if (feeWithdrawnEvent) {
            const [, networkFee] = feeWithdrawnEvent;
            details.networkFee = formatU128ToBalance(networkFee.toString(), XOR);
        }

        const transactionFeePaidEvent = getEventData(extrinsic, 'TransactionFeePaid', 'transactionPayment');
        if (transactionFeePaidEvent) {
            const [, actualFee] = transactionFeePaidEvent;
            details.actualFee = formatU128ToBalance(actualFee.toString(), XOR);
        }

        const assetTransferEvents = extrinsic.events.filter(e => e.event.method === 'Transfer' && e.event.section === 'assets');

        for (const assetTransferEvent of assetTransferEvents) {
            const { event: { data: [from, to, asset, amount] } } = assetTransferEvent;
            const assetId =  getAssetId(asset);
            const transfer = {
                assetId,
                amount: formatU128ToBalance(amount.toString(), assetId),
                from: from.toString(),
                to: to.toString(),
            };
            // add to sender details
            details.transfers.push(transfer);
            // create history element for receiver
            await createHistoryElement(assetTransferEvent as any, transfer);
        }

        const exchangesEvents = extrinsic.events.filter(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');

        for (const exchangeEvent of exchangesEvents) {
            const { event: { data: [senderAddress, dexId, inputAsset, outputAsset, inputAmount, outputAmount, feeAmount] } } = exchangeEvent;
            const exchange = {
                senderAddress: senderAddress.toString(),
                dexId: dexId.toString(),
                inputAssetId: getAssetId(inputAsset),
                outputAssetId: getAssetId(outputAsset),
                inputAmount: formatU128ToBalance(inputAmount.toString(), getAssetId(inputAsset)),
                outputAmount: formatU128ToBalance(outputAmount.toString(), getAssetId(outputAsset)),
                feeAmount: formatU128ToBalance(feeAmount.toString(), getAssetId(inputAsset)),
            };
            // add to sender exchanges
            details.exchanges.push(exchange);
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