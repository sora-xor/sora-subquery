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
    
    if (historyElement.execution.success) {
        const getData = (method: string, section: string) => getEventData(extrinsic, method, section);

        const [adarFee, inputAmount] = getData('BatchSwapExecuted', 'liquidityProxy');
        details.adarFee = formatU128ToBalance(adarFee.toString(), inputAssetId);
        details.inputAmount = formatU128ToBalance(inputAmount.toString(), inputAssetId);

        const [, networkFee] = getData('FeeWithdrawn', 'xorFee');
        details.networkFee = formatU128ToBalance(networkFee.toString(), XOR);

        const [, actualFee] = getData('TransactionFeePaid', 'transactionPayment');
        details.actualFee = formatU128ToBalance(actualFee.toString(), XOR);

        const assetsTransfers = extrinsic.events.filter(e => e.event.method === 'Transfer' && e.event.section === 'assets').map(e => {
            const { event: { data: [from, to, asset, amount] } } = e;
            return {
                from: from.toString(),
                to: to.toString(),
                amount: formatU128ToBalance(amount.toString(), getAssetId(asset)),
                assetId: getAssetId(asset)
            }
        });
        details.transfers = assetsTransfers;

        const exchanges = extrinsic.events.filter(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy').map(e => {
            const { event: { data: [senderAddress, dexId, inputAsset, outputAsset, inputAmount, outputAmount, feeAmount] } } = e;
            return {
                senderAddress: senderAddress.toString(),
                dexId: dexId.toString(),
                inputAssetId: getAssetId(inputAsset),
                outputAssetId: getAssetId(outputAsset),
                inputAmount: formatU128ToBalance(inputAmount.toString(), getAssetId(inputAsset)),
                outputAmount: formatU128ToBalance(outputAmount.toString(), getAssetId(outputAsset)),
                feeAmount: formatU128ToBalance(feeAmount.toString(), getAssetId(inputAsset)),
            }
        })
        details.exchanges = exchanges;
    } else {
        details.exchanges = [];
        details.transfers = [];
    }

    await addDataToHistoryElement(extrinsic, historyElement, details);
    await updateHistoryElementStats(extrinsic, historyElement);
}

export async function handleSwapTransferBatch(extrinsic: SubstrateExtrinsic): Promise <void> {
    logStartProcessingCall(extrinsic);

    await handleAndSaveExtrinsic(extrinsic);

    getCallHandlerLog(extrinsic).debug('Saved swap transfer batch');
}