import type { SubstrateEvent, SubstrateExtrinsic } from "@subql/types";

import { HistoryElement, HistoryElementCall, HistoryElementType } from "../types";
import { getAccountEntity } from './account';
import { networkSnapshotsStorage } from './network';
import { formatDateTimestamp, getEntityId } from './index';
import { getUtilsLog } from "./logs";

const INCOMING_TRANSFER_METHODS = ['transfer', 'xorlessTransfer', 'swapTransfer', 'swapTransferBatch'];

const getExtrinsicNetworkFee = (extrinsic: SubstrateExtrinsic): string => {
  let feeEvent = extrinsic.events.find(item => {
      const { event: { method, section } } = item;
      return method === 'FeeWithdrawn' && section === 'xorFee';
  });
  if (feeEvent) {
      const { event: { data: [, feeAmount] } } = feeEvent;
      return feeAmount.toString();
  } else {
      return "0";
  }
}

export const createHistoryElement = async (
	ctx: SubstrateExtrinsic | SubstrateEvent,
	data?: {},
): Promise<HistoryElement> => {
    const type = 'event' in ctx ? HistoryElementType.EVENT : HistoryElementType.CALL;
	const extrinsic = 'event' in ctx ? ctx.extrinsic : ctx

    let failedEvent = extrinsic.events.find(e => e.event.method === 'ExtrinsicFailed');
    let historyExecution!: any;

    if (failedEvent) {
        historyExecution = {
            success: false
        }
        const { event: { data: [error] } } = failedEvent
        if ((error as any).isModule) {
            historyExecution.error = {
                // tricky way to get int
                moduleErrorId: (error as any).asModule.error.toU8a()[0],
                moduleErrorIndex: (error as any).asModule.index.toU8a()[0],
            }
        } else {
            // Other, CannotLookup, BadOrigin, no extra info
            historyExecution.error = {
                nonModuleErrorMessage: error.toString()
            }
        }
    } else {
        historyExecution = {
            success: true
        }
    }

	const historyElement = new HistoryElement(
        getEntityId(ctx),
        type,
        extrinsic.block.block.header.number.toNumber(),
        extrinsic.block.block.header.hash.toString(),
        extrinsic.extrinsic.method.section,
        extrinsic.extrinsic.method.method,
        extrinsic.extrinsic.signer.toString(),
        getExtrinsicNetworkFee(extrinsic),
        historyExecution,
        formatDateTimestamp(extrinsic.block.timestamp),
        [],
        extrinsic.block.block.header.number.toNumber(),
    )

	await historyElement.save()
    const { callNames, execution, data: details, ...logArguments } = historyElement
    // [TODO] uncomment before full reindex with dataReceivers
	// const { callNames, execution, data: details, dataReceivers, ...logArguments } = historyElement
	getUtilsLog(ctx).debug({ ...logArguments, executionSuccess: execution.success }, 'Created history element')

	if (data) {
		await addDataToHistoryElement(ctx, historyElement, data)
		await updateHistoryElementStats(extrinsic, historyElement)
	}

	return historyElement
}

export const addDataToHistoryElement = async (ctx: SubstrateExtrinsic | SubstrateEvent, historyElement: HistoryElement, data: any) => {
	const extrinsic = 'event' in ctx ? ctx.extrinsic : ctx

	historyElement.data = data
	if ('to' in data && typeof data.to === 'string') {
		historyElement.dataTo = data.to
	}
	if ('from' in data && typeof data.from === 'string') {
		historyElement.dataFrom = data.from
	}
    // [TODO] uncomment before full reindex with dataReceivers
    // if ('receivers' in data && Array.isArray(data.receivers)) {
	// 	historyElement.dataReceivers = data.receivers.map(receiver => receiver.accountId)
	// }
	historyElement.updatedAtBlock = extrinsic.block.block.header.number.toNumber()

	await historyElement.save()
	getUtilsLog(ctx).debug({
        historyElementId: historyElement.id,
        data: JSON.stringify(data).replaceAll('"', '')
    }, 'Updated history element with data')
}

export const addCallsToHistoryElement = async (extrinsic: SubstrateExtrinsic, historyElement: HistoryElement, calls: HistoryElementCall[]) => {
	historyElement.callNames = calls.map((call) => call.module + '.' + call.method)
	historyElement.updatedAtBlock = extrinsic.block.block.header.number.toNumber()

	await historyElement.save()
    await Promise.all(calls.map(call => call.save()))
}

export const updateHistoryElementStats = async (extrinsic: SubstrateExtrinsic, history: HistoryElement) => {
  const addresses = [history.address.toString()];

  if (
      INCOMING_TRANSFER_METHODS.includes(history.method.toString()) &&
      history.data &&
      history.data['to']
  ) {
      addresses.push((history.data['to'] as string).toString());
  }

  getUtilsLog(extrinsic).debug({ addresses: addresses.join(', ') }, 'addresses');
  // update accounts data
  for (const address of addresses) {
      const account = await getAccountEntity(extrinsic.block, address);
      account.latestHistoryElementId = history.id.toString();
      await account.save();
  }

  await networkSnapshotsStorage.updateTransactionsStats(extrinsic.block);
  getUtilsLog(extrinsic).debug('Updated history element stats');
}