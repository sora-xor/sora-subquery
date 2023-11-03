import { TextDecoder } from 'util';

import { SnapshotType } from "../types";

import { SnapshotSecondsMap } from './consts';
import { SubstrateEvent, SubstrateExtrinsic } from '@subql/types';

export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() / 1000).toFixed(0));

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
}

export const getEventId = (event: SubstrateEvent): string => {
	return `${event.block.block.header.number.toString()}-${event.event.index}`
}

export const getEntityId = (entity: SubstrateExtrinsic | SubstrateEvent): string => {
	return 'event' in entity ? getEventId(entity) : getCallId(entity)
}

