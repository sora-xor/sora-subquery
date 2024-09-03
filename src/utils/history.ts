import type { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from "@subql/types";

import { HistoryElement, HistoryElementCall, HistoryElementType } from "../types";
import { getAccountEntity } from './account';
import { networkSnapshotsStorage } from './network';
import { formatDateTimestamp, getEntityId, shouldUpdate, getBlockNumber, getExtrinsicSigner } from './index';
import { getUtilsLog } from "./logs";

const INCOMING_TRANSFER_METHODS = ['transfer', 'xorlessTransfer', 'swapTransfer', 'swapTransferBatch'];

class HistoryElementsStorage {
    public readonly maxSize = 1000;

    private elements!: HistoryElement[];
    private calls!: HistoryElementCall[];
    private accounts!: Map<string, string>;

    constructor() {
        this.clear();
    }

    get size(): number {
        return this.elements.length;
    }

    private clear(): void {
        this.elements = [];
        this.calls = [];
        this.accounts = new Map();
    }

    private async checkSync(block: SubstrateBlock): Promise<void> {
        if (this.maxSize <= this.size || shouldUpdate(block, 60)) {
            await this.sync(block);
        }
    }

    private async updateElements(block: SubstrateBlock) {
        if (this.elements.length) {
            await store.bulkUpdate('HistoryElement', this.elements);
            getUtilsLog(block).debug(`History Elements saved: ${this.elements.length}`);
        }
    }

    private async updateCalls(block: SubstrateBlock) {
        if (this.calls.length) {
            await store.bulkUpdate('HistoryElementCall', this.calls);
            getUtilsLog(block).debug(`History Elements Calls saved: ${this.calls.length}`);
        }
    }

    private async updateAccounts(block: SubstrateBlock) {
        const accounts = [];

        for (const [accountId, historyId] of this.accounts.entries()) {
            const account = await getAccountEntity(block, accountId);
            account.latestHistoryElementId = historyId;
            accounts.push(account);
        }

        if (accounts.length) {
            await store.bulkUpdate('Account', accounts);
            getUtilsLog(block).debug(`Accounts updated: ${accounts.length}`);
        }
    }

    public async sync(block: SubstrateBlock): Promise<void> {
        await this.updateElements(block);
        await this.updateCalls(block);
        await this.updateAccounts(block);

        this.clear();
    }

    public async add(
        block: SubstrateBlock,
        historyElement: HistoryElement,
        calls: HistoryElementCall[] = [],
        accountsAddresses: string[] = [],
    ): Promise<void> {
        this.elements.push(historyElement);
        this.calls.push(...calls);
        accountsAddresses.forEach((accountId) => this.accounts.set(accountId, historyElement.id));

        await this.checkSync(block);
    }
}

export const historyElementsStorage = new HistoryElementsStorage();

export const getExtrinsicNetworkFee = (extrinsic: SubstrateExtrinsic): string => {
  const feeEvent = extrinsic.events.find(item => {
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
    calls?: HistoryElementCall[],
    address?: string,
): Promise<HistoryElement> => {
    const isEvent = 'event' in ctx;
    const type = isEvent ? HistoryElementType.EVENT : HistoryElementType.CALL;
	const extrinsic = isEvent ? ctx.extrinsic : ctx

    const failedEvent = !isEvent
        ? extrinsic.events.find(e => e.event.method === 'ExtrinsicFailed')
        : null;

    let historyExecution: any = {
        success: true
    };

    if (failedEvent) {
        historyExecution.success = false;

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
    }

    const block = extrinsic.block;
    const blockNumber = getBlockNumber(block);
    const networkFee = isEvent ? '0' : getExtrinsicNetworkFee(extrinsic);
    const section = isEvent ? ctx.event.section : extrinsic.extrinsic.method.section;
    const method = isEvent ? ctx.event.method : extrinsic.extrinsic.method.method;
    const owner = address ?? getExtrinsicSigner(extrinsic);

	const historyElement = new HistoryElement(
        getEntityId(ctx),
        type,
        blockNumber,
        block.block.header.hash.toString(),
        section,
        method,
        owner,
        networkFee,
        historyExecution,
        formatDateTimestamp(block.timestamp),
        [],
        blockNumber,
    )

	if (data) {
		await addDataToHistoryElement(ctx, historyElement, data);
	}

    if (calls) {
        await addCallsToHistoryElement(extrinsic, historyElement, calls);
    }

    const accountsAddresses = getHistoryElementAccountAddresses(block, historyElement);

    await historyElementsStorage.add(
        block,
        historyElement,
        calls,
        accountsAddresses
    );

    await updateHistoryElementStats(block);

    const { callNames, execution, data: details, ...logArguments } = historyElement
	getUtilsLog(ctx).debug({ ...logArguments, executionSuccess: execution.success }, 'Created history element')

	return historyElement
}

const addDataToHistoryElement = async (ctx: SubstrateExtrinsic | SubstrateEvent, historyElement: HistoryElement, data: any) => {
	const extrinsic = 'event' in ctx ? ctx.extrinsic : ctx

	historyElement.data = data
	if ('to' in data && typeof data.to === 'string') {
		historyElement.dataTo = data.to
	}
	if ('from' in data && typeof data.from === 'string') {
		historyElement.dataFrom = data.from
	}

	historyElement.updatedAtBlock = getBlockNumber(extrinsic.block)

	getUtilsLog(ctx).debug({
        historyElementId: historyElement.id,
        data: JSON.stringify(data).replaceAll('"', '')
    }, 'Updated history element with data')
}

const addCallsToHistoryElement = async (extrinsic: SubstrateExtrinsic, historyElement: HistoryElement, calls: HistoryElementCall[]) => {
	historyElement.callNames = calls.map((call) => call.module + '.' + call.method)
	historyElement.updatedAtBlock = getBlockNumber(extrinsic.block)
}

const getHistoryElementAccountAddresses = (block: SubstrateBlock, history: HistoryElement) => {
    const addresses = [history.address];

    if (
        INCOMING_TRANSFER_METHODS.includes(history.method) &&
        history.dataTo
    ) {
        addresses.push(history.dataTo);
    }

    const acccountAddresses = [...new Set(addresses)];

    getUtilsLog(block).debug({ historyId: history.id, addresses: acccountAddresses.join(', ') }, 'addresses');

    return acccountAddresses;
}

const updateHistoryElementStats = async (block: SubstrateBlock) => {
  await networkSnapshotsStorage.updateTransactionsStats(block);

  getUtilsLog(block).debug('Updated history element stats');
}