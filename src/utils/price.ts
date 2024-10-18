import BigNumber from "bignumber.js";

import { PricesV2StartBlock } from '../config';

enum PriceVersion {
  V1 = 'V1',
  V2 = 'V2'
}

const ITERATION_STEP = new BigNumber(0.005); // 0.5%
const ITERATIONS = 10;

const XYK_FEE = new BigNumber(0.003);
const ONE = new BigNumber(1);

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

// ideal price
const priceV1 = (baseReserves: BigNumber, targetReserves: BigNumber): BigNumber => {
  return safeDivide(baseReserves, targetReserves);
};

// close to market price with price impact
const priceV2 = (baseReserves: BigNumber, targetReserves: BigNumber, isReversed = false): BigNumber => {
  const quote = isReversed ? xykQuoteA : xykQuoteB;

  let total = new BigNumber(0);

  for (let i = 1; i <= ITERATIONS; i++) {
    const coef = new BigNumber(i).multipliedBy(ITERATION_STEP);
    const sellAmount = targetReserves.multipliedBy(coef);
    const swapResultAmount = quote(targetReserves, baseReserves, sellAmount, true);
    const result = safeDivide(swapResultAmount, sellAmount);

    total = total.plus(result);
  }

  return total.dividedBy(ITERATIONS);
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
  nominator: BigNumber,
  denominator: BigNumber,
  isReversed = false
): BigNumber => {
  const version = getVersion(blockNumber);

  switch (version) {
    case PriceVersion.V2:
      return priceV2(nominator, denominator, isReversed);
    default:
      return priceV1(nominator, denominator);
  }
};