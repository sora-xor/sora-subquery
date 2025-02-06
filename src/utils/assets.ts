import { NATIVE } from "./consts";

export let assetPrecisions = new Map<string, number>();

assetPrecisions.set(NATIVE, 12);

export const formatU128ToBalance = (u128: string, assetId: string): string => {
  let decimals = assetPrecisions.get(assetId) ?? 12;
  let padded = u128.padStart(decimals + 1, '0');
  if (decimals === 0) {
    return padded;
  }
  return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
};

export const getAssetId = (asset: any): string => {
  // only native balance token
  return NATIVE;
};
