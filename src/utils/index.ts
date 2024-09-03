import type { SubstrateBlock } from "@subql/types";

import BigNumber from "bignumber.js";

import { TextDecoder } from 'util';

import { SnapshotType } from "../types";

import { SnapshotSecondsMap, SnapshotTimeDepthMap } from './consts';
import { SubstrateEvent, SubstrateExtrinsic } from '@subql/types';

export const toFloat = (value: BigNumber) => Number(value.toFixed(2));

export const last = <T>(snapshots: T[]) => {
  if (!snapshots.length) return null;
  return snapshots[snapshots.length - 1];
};

export const prevSnapshotsIndexesRow = (index: number, count: number): number[] => {
  return new Array(count).fill(index)
    .reduce((buffer, item, idx) => {
      const prevIndex = item - idx;

      if (prevIndex >= 0) buffer.push(prevIndex);

      return buffer;
    }, []);
};

export const calcPriceChange = (current: BigNumber, prev: BigNumber): number => {
  if (prev.isZero()) return current.isGreaterThan(new BigNumber(0)) ? 100 : 0;

  const change = current.minus(prev).div(prev).multipliedBy(new BigNumber(100));

  return toFloat(change);
};

export const getBlockNumber = (block: SubstrateBlock) => {
  return block.block.header.number.toNumber();
};

export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() / 1000).toFixed(0));

export const shouldUpdate = (block: SubstrateBlock, diff = 3_600) => {
  const blockTimestamp = formatDateTimestamp(block.timestamp);
  const currentTimestamp = formatDateTimestamp(new Date());

  return currentTimestamp - blockTimestamp < diff;
};

export const getSnapshotTypeTimeDepth = (type: SnapshotType): number => {
  return SnapshotTimeDepthMap[type] ?? 0;
};

export const getSnapshotTypes = (block: SubstrateBlock, types: SnapshotType[]) => {
  return types.filter((type) => {
    const diff = getSnapshotTypeTimeDepth(type);

    return !diff || shouldUpdate(block, diff);
  });
};

export const getSnapshotIndex = (blockTimestamp: number, type: SnapshotType): { index: number, timestamp: number } => {
  const seconds = SnapshotSecondsMap[type];
  const index = Math.floor(blockTimestamp / seconds); // rounded snapshot index (from 0)
  const timestamp = seconds * index; // rounded snapshot timestamp

  return { index, timestamp };
};

export const bytesToString = (ticker: any): string => {
  return new TextDecoder().decode(ticker);
};

export const getCallId = (call: SubstrateExtrinsic): string => {
	return call.extrinsic.hash.toString()
};

export const getEventId = (event: SubstrateEvent): string => {
  return `${getBlockNumber(event.block)}-${event.idx}`
};

export const getEntityId = (entity: SubstrateExtrinsic | SubstrateEvent): string => {
  return 'event' in entity ? getEventId(entity) : getCallId(entity)
};

export const getExtrinsicSigner = (extrinsic: SubstrateExtrinsic): string => {
  return extrinsic.extrinsic.signer.toString();
};
