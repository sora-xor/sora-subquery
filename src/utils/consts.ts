import { AssetId, SnapshotType } from '../types'

export const XOR = '0x0200000000000000000000000000000000000000000000000000000000000000' as AssetId
export const VAL = '0x0200040000000000000000000000000000000000000000000000000000000000' as AssetId
export const PSWAP = '0x0200050000000000000000000000000000000000000000000000000000000000' as AssetId
export const DAI = '0x0200060000000000000000000000000000000000000000000000000000000000' as AssetId
export const ETH = '0x0200070000000000000000000000000000000000000000000000000000000000' as AssetId
export const XSTUSD = '0x0200080000000000000000000000000000000000000000000000000000000000' as AssetId
export const XST = '0x0200090000000000000000000000000000000000000000000000000000000000' as AssetId
export const TBCD = '0x02000a0000000000000000000000000000000000000000000000000000000000' as AssetId
export const DOT = '0x0003b1dbee890acfb1b3bc12d1bb3b4295f52755423f84d1751b2545cebf000b' as AssetId
export const KSM = '0x00117b0fa73c4672e03a7d9d774e3b3f91beb893e93d9a8d0430295f44225db8' as AssetId
export const USDT = '0x0083a6b3fbc6edae06f115c8953ddd7cbfba0b74579d6ea190f96853073b76f4' as AssetId

export const predefinedAssets = {
  'XOR': XOR,
  'DOT': DOT,
  'KSM': KSM,
  'USDT': USDT,
  'VAL': VAL,
  'PSWAP': PSWAP,
  'DAI': DAI,
  'ETH': ETH,
  'XSTUSD': XSTUSD,
  'XST': XST,
  'TBCD': TBCD,
};

export const BASE_ASSETS = [XOR, XSTUSD];

export const DOUBLE_PRICE_POOL = [VAL, PSWAP, DAI, ETH, XST, TBCD, DOT];

export const SECONDS_IN_BLOCK = 6;

// Intervals for snapshots (in seconds)
export const SnapshotSecondsMap = {
  [SnapshotType.DEFAULT]: 300, // 5 min
  [SnapshotType.HOUR]: 3_600, // hour
  [SnapshotType.DAY]: 86_400, // day
  [SnapshotType.MONTH]: 2_592_000, // month (30 days)
};

export const SnapshotTimeDepthMap = {
  [SnapshotType.DEFAULT]: 60 * 60 * 24 * 7, // week
  [SnapshotType.HOUR]: 60 * 60 * 24 * 30, // month
};
