import type { SubstrateEvent, SubstrateExtrinsic } from "@subql/types";

import { HistoryElement, HistoryElementCall, HistoryElementType } from "../types";
import { getOrCreateAccountEntity } from './account';
import { networkSnapshotsStorage } from './network';
import { formatDateTimestamp, getEntityId } from './index';
import { getUtilsLog } from "./logs";

const INCOMING_TRANSFER_METHODS = ['transfer', 'swapTransfer'];

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

function filterDataProperties(obj: Record<string, any>) {
	const filteredObj: Record<string, any> = {}
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			const type = typeof obj[key]
			if (type === 'number' || type === 'string' || type === 'bigint' || type === 'boolean') {
				filteredObj[key] = obj[key]
			}
		}
	}
	return filteredObj
}

export const createHistoryElement = async (
	ctx: SubstrateExtrinsic | SubstrateEvent,
	data?: {},
): Promise<HistoryElement> => {
    const type = 'event' in ctx ? HistoryElementType.EVENT : HistoryElementType.CALL;
	const extrinsic = 'event' in ctx ? ctx.extrinsic : ctx

	const historyElement = new HistoryElement(getEntityId(ctx))
	historyElement.type = type
	historyElement.blockHeight = extrinsic.block.block.header.number.toNumber()
	historyElement.blockHash = extrinsic.block.block.header.hash.toString()
	historyElement.module = extrinsic.extrinsic.method.section
	historyElement.method = extrinsic.extrinsic.method.method
	historyElement.address = extrinsic.extrinsic.signer.toString()
	historyElement.networkFee = getExtrinsicNetworkFee(extrinsic)
	historyElement.timestamp = formatDateTimestamp(extrinsic.block.timestamp)
	historyElement.updatedAtBlock =historyElement.blockHeight
	historyElement.callNames = []

    let failedEvent = extrinsic.events.find(e => e.event.method === 'ExtrinsicFailed');

    if (failedEvent) {
        historyElement.execution = {
            success: false
        }
        const { event: { data: [error] } } = failedEvent
        if ((error as any).isModule) {
            historyElement.execution.error = {
                // tricky way to get int
                moduleErrorId: (error as any).asModule.error.toU8a()[0],
                moduleErrorIndex: (error as any).asModule.index.toU8a()[0],
            }
        } else {
            // Other, CannotLookup, BadOrigin, no extra info
            historyElement.execution.error = {
                nonModuleErrorMessage: error.toString()
            }
        }
    } else {
        historyElement.execution = {
            success: true
        }
    }

	await historyElement.save()
	const { callNames, execution, ...logArguments } = historyElement
	getUtilsLog(ctx).debug({ ...logArguments, execution: execution.success }, 'Created history element')

	if (data) {
		await addDataToHistoryElement(ctx, historyElement, data)
		await updateHistoryElementStats(extrinsic, historyElement)
	}

	return historyElement
}

export const addDataToHistoryElement = async (ctx: SubstrateExtrinsic | SubstrateEvent, historyElement: HistoryElement, data: {}) => {
	const extrinsic = 'event' in ctx ? ctx.extrinsic : ctx
    
	historyElement.data = data
	if ('to' in data && typeof data.to === 'string') {
		historyElement.dataTo = data.to
	}
	if ('from' in data && typeof data.from === 'string') {
		historyElement.dataFrom = data.from
	}
	historyElement.updatedAtBlock = extrinsic.block.block.header.number.toNumber()

	await historyElement.save()
	getUtilsLog(ctx).debug({ historyElementId: historyElement.id, ...filterDataProperties(data) }, 'Updated history element with data')
}

export const addCallsToHistoryElement = async (extrinsic: SubstrateExtrinsic, historyElement: HistoryElement, calls: HistoryElementCall[]) => {
	historyElement.callNames = calls.map((call) => call.module + '.' + call.method)
	historyElement.updatedAtBlock = extrinsic.block.block.header.number.toNumber()

	await historyElement.save()
    await Promise.all(calls.map(call => call.save()))
}

export const updateHistoryElementStats = async (extrinsic: SubstrateExtrinsic, history: HistoryElement) => {
  const addresses = [history.address.toString()];
  const timestamp = history.timestamp;

  if (
      INCOMING_TRANSFER_METHODS.includes(history.method.toString()) &&
      history.data &&
      history.data['to']
  ) {
      addresses.push((history.data['to'] as string).toString());
  }

  // update accounts data
  for (const address of addresses) {
      const account = await getOrCreateAccountEntity(extrinsic, address, timestamp);
      account.latestHistoryElementId = history.id.toString();
      await account.save();
  }

  await networkSnapshotsStorage.updateTransactionsStats(extrinsic.block, timestamp);
}