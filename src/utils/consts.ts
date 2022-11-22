import { SnapshotType } from "../types";

export const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
export const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
export const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';
export const DAI: string = '0x0200060000000000000000000000000000000000000000000000000000000000';
export const ETH: string = '0x0200070000000000000000000000000000000000000000000000000000000000';
export const XSTUSD: string = '0x0200080000000000000000000000000000000000000000000000000000000000';
export const XST: string = '0x0200090000000000000000000000000000000000000000000000000000000000';

export const BASE_ASSETS = [XOR, XSTUSD];

export const DOUBLE_PRICE_POOL = [VAL, PSWAP, DAI, ETH, XST];

export const SECONDS_IN_BLOCK = 6;

// Intervals for snapshots (in seconds)
export const SnapshotSecondsMap = {
  [SnapshotType.DEFAULT]: 300, // 5 min
  [SnapshotType.HOUR]: 3_600, // hour
  [SnapshotType.DAY]: 86_400, // day
};