import BigNumber from "bignumber.js";

import { PricesV2StartBlock } from '../config';

enum PriceVersion {
  V1 = 'V1',
  V2 = 'V2'
}

const XYK_FEE = new BigNumber(0.003);
const ONE = new BigNumber(1);
const TEN = new BigNumber(10);
const ZERO = new BigNumber(0);
const MIN = new BigNumber(1).dividedBy(Math.pow(10, 18));

const safeDivide = (nominator: BigNumber, denominator: BigNumber): BigNumber => {
  return !denominator.isZero()
    ? nominator.dividedBy(denominator)
    : new BigNumber(0);
};

/**
 * Input token is dex base asset (xor), user indicates desired input amount
 * @param x - base asset reserve
 * @param y - other token reserve
 * @param xIn x_in - desired input amount (base asset)
 * @returns QuoteResult
 */
const xykQuoteA = (
  x: BigNumber,
  y: BigNumber,
  xIn: BigNumber,
  deduceFee: boolean
): BigNumber => {
  const xInWithoutFee = deduceFee ? xIn.multipliedBy(ONE.minus(XYK_FEE)) : xIn;
  const nominator = xInWithoutFee.multipliedBy(y);
  const denominator = x.plus(xInWithoutFee);
  const yOut = safeDivide(nominator, denominator);

  return yOut
};

/**
 * Output token is dex base asset, user indicates desired input amount
 * @param x - other token reserve
 * @param y - base asset reserve
 * @param xIn - desired input amount (other token)
 */
const xykQuoteB = (
  x: BigNumber,
  y: BigNumber,
  xIn: BigNumber,
  deduceFee: boolean,
): BigNumber => {
  const nominator = xIn.multipliedBy(y);
  const denominator = x.plus(xIn);
  const yOutWithFee = safeDivide(nominator, denominator);
  const yOut = deduceFee ? yOutWithFee.multipliedBy(ONE.minus(XYK_FEE)) : yOutWithFee;

  return yOut;
};

/**
 * Input token is dex base asset, user indicates desired output amount
 * @param x - base asset reserve
 * @param y - other token reserve
 * @param yOut - desired output amount (other token)
 * @returns QuoteResult
 */
const xykQuoteC = (
  x: BigNumber,
  y: BigNumber,
  yOut: BigNumber,
  deduceFee: boolean
): BigNumber => {
  if (yOut.isGreaterThanOrEqualTo(y)) {
    return ZERO;
  }

  const fxwYout = yOut.plus(MIN); // by 1 correction to overestimate required input
  const nominator = x.multipliedBy(fxwYout);
  const denominator = y.minus(fxwYout);
  const xInWithoutFee = safeDivide(nominator, denominator);
  const xIn = deduceFee ? safeDivide(xInWithoutFee, ONE.minus(XYK_FEE)) : xInWithoutFee;

  return xIn;
};

/**
 * Output token is dex base asset, user indicates desired output amount
 * @param x - other token reserve
 * @param y - base asset reserve
 * @param yOut - desired output amount (base asset)
 * @returns QuoteResult
 */
const xykQuoteD = (
  x: BigNumber,
  y: BigNumber,
  yOut: BigNumber,
  deduceFee: boolean
): BigNumber => {
  const fxwYout = yOut.plus(MIN); // by 1 correction to overestimate required input
  const yOutWithFee = deduceFee ? safeDivide(fxwYout, ONE.minus(XYK_FEE)) : fxwYout;

  if (yOutWithFee.isGreaterThanOrEqualTo(y)) {
    return ZERO;
  }

  const nominator = x.multipliedBy(yOutWithFee);
  const denominator = y.minus(yOutWithFee);
  const xIn = safeDivide(nominator, denominator);

  return xIn;
};


// ideal price
const idealPrice = (baseReserves: BigNumber, targetReserves: BigNumber, isDai = false): BigNumber => {
  return isDai
    ? safeDivide(targetReserves, baseReserves)
    : safeDivide(baseReserves, targetReserves);
};

const swapPrice = (baseReserves: BigNumber, targetReserves: BigNumber, isDai = false, baseAssetPriceInDAI?: BigNumber): BigNumber => {
  if (baseAssetPriceInDAI && baseAssetPriceInDAI.isZero()) return ZERO;

  const baseAmount = TEN; // DAI

  const quote = isDai ? xykQuoteC : xykQuoteD;
  const [x, y] = isDai ? [baseReserves, targetReserves] : [targetReserves, baseReserves];
  const yOut = isDai ? baseAmount : baseAmount.dividedBy(baseAssetPriceInDAI);
  const xIn = quote(x, y, yOut, true);

  if (xIn.isGreaterThanOrEqualTo(x)) return ZERO;

  return safeDivide(yOut, xIn);
};

const getVersion = (blockNumber: number): PriceVersion => {
  if (blockNumber >= PricesV2StartBlock) {
    return PriceVersion.V2;
  }
  return PriceVersion.V1;
}

export const isPriceV2 = (blockNumber: number): boolean => {
  return getVersion(blockNumber) === PriceVersion.V2;
};

export const calcPriceInReference = (
  blockNumber: number,
  baseReserves: BigNumber,
  targetReserves: BigNumber,
  baseAssetPriceInDAI?: BigNumber,
): BigNumber => {
  const version = getVersion(blockNumber);
  const isDai = !baseAssetPriceInDAI;

  switch (version) {
    case PriceVersion.V2:
      return swapPrice(baseReserves, targetReserves, isDai, baseAssetPriceInDAI);
    default:
      return idealPrice(baseReserves, targetReserves, isDai);
  }
};