import { SnapshotType } from "../types";

import { SnapshotSecondsMap } from './consts';

export const formatDateTimestamp = (date: Date): number => parseInt((date.getTime() / 1000).toFixed(0));

export const getSnapshotIndex = (blockTimestamp: number, type: SnapshotType): { index: number, timestamp: number } => {
  const seconds = SnapshotSecondsMap[type];
  const index = Math.floor(blockTimestamp / seconds); // rounded snapshot index (from 0)
  const timestamp = seconds * index; // rounded snapshot timestamp

  return { index, timestamp };
};

