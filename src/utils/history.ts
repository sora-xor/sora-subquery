import type { SubstrateExtrinsic } from "@subql/types";

import { HistoryElement } from "../types";
import { formatU128ToBalance } from './assets';
import { getOrCreateAccountEntity } from './account';
import { networkSnapshotsStorage } from './network';
import { XOR } from './consts';
import { formatDateTimestamp } from './index';

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

export const assignCommonHistoryElemInfo = (extrinsic: SubstrateExtrinsic): HistoryElement => {
  const id = extrinsic.extrinsic.hash.toString();
  const blockHeight = extrinsic.block.block.header.number.toBigInt()
  const blockHash = extrinsic.block.block.header.hash.toString()
  const module = extrinsic.extrinsic.method.section
  const method = extrinsic.extrinsic.method.method
  const address = extrinsic.extrinsic.signer.toString()
  const networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic), XOR)
  const execution = {
    success: true
  };
  const timestamp = formatDateTimestamp(extrinsic.block.timestamp)

  const record = new HistoryElement(id, blockHeight, blockHash, module, method, address, networkFee, execution, timestamp);

  let failedEvent = extrinsic.events.find(e => e.event.method === 'ExtrinsicFailed');

  if (failedEvent) {
      record.execution = {
          success: false
      }

      const { event: { data: [error] } } = failedEvent

      if ((error as any).isModule) {
          record.execution.error = {
              // tricky way to get int
              moduleErrorId: (error as any).asModule.error.toU8a()[0],
              moduleErrorIndex: (error as any).asModule.index.toU8a()[0],
          }
      } else {

          // Other, CannotLookup, BadOrigin, no extra info
          record.execution.error = {
              nonModuleErrorMessage: error.toString()
          }

      }
  }

  return record
}

export const updateHistoryElementStats = async (history: HistoryElement) => {
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
      const account = await getOrCreateAccountEntity(address, timestamp);
      account.latestHistoryElementId = history.id.toString();
      await account.save();
  }

  await networkSnapshotsStorage.updateTransactionsStats(timestamp);
}