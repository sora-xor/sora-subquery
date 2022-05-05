import { FPNumber } from '@sora-substrate/math';
import { XOR, DAI, XSTUSD } from '../mappings/utils';

export type QuotePayload = {
  reserves: {
    xyk: {
      [key: string]: [string, string];
    };
    tbc: {
      [key: string]: string;
    };
  };
  prices: {
    [key: string]: string;
  };
  issuances: {
    [key: string]: string;
  };
  consts: {
    tbc: {
      initialPrice: string;
      priceChangeStep: string;
      sellPriceCoefficient: string;
    };
  };
};

const ONE = new FPNumber(1);
const TBC_FEE = new FPNumber(0.003);

const isAsset = (a: string, b: string) => a === b;
const isXorAsset = (assetAddress: string) => isAsset(assetAddress, XOR);
const getMaxPositive = (value: FPNumber) => FPNumber.max(value, FPNumber.ZERO);
const safeDivide = (value: FPNumber, divider: FPNumber): FPNumber => {
  if (divider.isZero() || divider.isNaN()) {
    throw new Error(`[liquidityProxy] Division error: ${value.toString()} / ${divider.toString()}`);
  } else {
    return value.div(divider);
  }
};

const mapCollateralizedFractionToPenalty = (fraction: FPNumber): FPNumber => {
  if (FPNumber.isLessThan(fraction, new FPNumber(0.05))) {
    return new FPNumber(0.09);
  } else if (
    FPNumber.isGreaterThanOrEqualTo(fraction, new FPNumber(0.05)) &&
    FPNumber.isLessThan(fraction, new FPNumber(0.1))
  ) {
    return new FPNumber(0.06);
  } else if (
    FPNumber.isGreaterThanOrEqualTo(fraction, new FPNumber(0.1)) &&
    FPNumber.isLessThan(fraction, new FPNumber(0.2))
  ) {
    return new FPNumber(0.03);
  } else if (
    FPNumber.isGreaterThanOrEqualTo(fraction, new FPNumber(0.2)) &&
    FPNumber.isLessThan(fraction, new FPNumber(0.3))
  ) {
    return new FPNumber(0.01);
  } else {
    return FPNumber.ZERO;
  }
};

const idealReservesReferencePrice = (delta: FPNumber, payload: QuotePayload): FPNumber => {
  const xorIssuance = FPNumber.fromCodecValue(payload.issuances[XOR]);
  const initialPrice = FPNumber.fromCodecValue(payload.consts.tbc.initialPrice);
  const currentState = tbcBuyFunction(delta, payload);

  return safeDivide(initialPrice.add(currentState), new FPNumber(2)).mul(xorIssuance.add(delta));
};

const actualReservesReferencePrice = (collateralAssetAddress: string, payload: QuotePayload): FPNumber => {
  const reserve = FPNumber.fromCodecValue(payload.reserves.tbc[collateralAssetAddress]);
  const price = tbcReferencePrice(collateralAssetAddress, payload);

  return reserve.mul(price);
};

const sellPenalty = (collateralAssetAddress: string, payload: QuotePayload): FPNumber => {
  const idealReservesPrice = idealReservesReferencePrice(FPNumber.ZERO, payload);
  const collateralReservesPrice = actualReservesReferencePrice(collateralAssetAddress, payload);

  if (collateralReservesPrice.isZero()) {
    throw new Error(`[liquidityProxy] TBC: Not enough collateral reserves ${collateralAssetAddress}`);
  }

  const collateralizedFraction = safeDivide(collateralReservesPrice, idealReservesPrice);
  const penalty = mapCollateralizedFractionToPenalty(collateralizedFraction);

  return penalty;
};

const tbcReferencePrice = (assetAddress: string, payload: QuotePayload): FPNumber => {
  if (isAsset(assetAddress, DAI)) {
    return ONE;
  } else {
    const xorPrice = FPNumber.fromCodecValue(payload.prices[XOR]);
    const assetPrice = FPNumber.fromCodecValue(payload.prices[assetAddress]);

    return safeDivide(xorPrice, assetPrice);
  }
};

const tbcBuyFunction = (delta: FPNumber, payload: QuotePayload): FPNumber => {
  const xstusdIssuance = FPNumber.fromCodecValue(payload.issuances[XSTUSD]);
  const xorIssuance = FPNumber.fromCodecValue(payload.issuances[XOR]);
  const xorPrice = FPNumber.fromCodecValue(payload.prices[XOR]);
  const xstXorLiability = safeDivide(xstusdIssuance, xorPrice);
  const initialPrice = FPNumber.fromCodecValue(payload.consts.tbc.initialPrice);
  const priceChangeStep = FPNumber.fromCodecValue(payload.consts.tbc.priceChangeStep);
  return safeDivide(xorIssuance.add(xstXorLiability).add(delta), priceChangeStep).add(initialPrice);
};

const tbcSellFunction = (delta: FPNumber, payload: QuotePayload): FPNumber => {
  const buyFunctionResult = tbcBuyFunction(delta, payload);
  const sellPriceCoefficient = FPNumber.fromCodecValue(payload.consts.tbc.sellPriceCoefficient);

  return buyFunctionResult.mul(sellPriceCoefficient);
};

const tbcSellPriceNoVolume = (collateralAssetAddress: string, payload: QuotePayload): FPNumber => {
  const xorPrice = tbcSellFunction(FPNumber.ZERO, payload);
  const collateralPrice = tbcReferencePrice(collateralAssetAddress, payload);

  return safeDivide(xorPrice, collateralPrice);
};

const tbcBuyPriceNoVolume = (collateralAssetAddress: string, payload: QuotePayload): FPNumber => {
  const xorPrice = tbcBuyFunction(FPNumber.ZERO, payload);
  const collateralPrice = tbcReferencePrice(collateralAssetAddress, payload);

  return safeDivide(xorPrice, collateralPrice);
};

const tbcSellPrice = (
  collateralAssetAddress: string,
  amount: FPNumber,
  isDesiredInput: boolean,
  payload: QuotePayload
): FPNumber => {
  const collateralSupply = FPNumber.fromCodecValue(payload.reserves.tbc[collateralAssetAddress]);
  const xorPrice = tbcSellFunction(FPNumber.ZERO, payload);
  const collateralPrice = tbcReferencePrice(collateralAssetAddress, payload);
  const xorSupply = safeDivide(collateralSupply.mul(collateralPrice), xorPrice);

  if (isDesiredInput) {
    const outputCollateral = safeDivide(amount.mul(collateralSupply), xorSupply.add(amount));

    if (FPNumber.isGreaterThan(outputCollateral, collateralSupply)) {
      throw new Error(`[liquidityProxy] TBC: Not enough collateral reserves ${collateralAssetAddress}`);
    }

    return outputCollateral;
  } else {
    if (FPNumber.isGreaterThan(amount, collateralSupply)) {
      throw new Error(`[liquidityProxy] TBC: Not enough collateral reserves ${collateralAssetAddress}`);
    }

    const outputXor = safeDivide(xorSupply.mul(amount), collateralSupply.sub(amount));

    return outputXor;
  }
};

const tbcSellPriceWithFee = (
  collateralAssetAddress: string,
  amount: FPNumber,
  isDesiredInput: boolean,
  payload: QuotePayload
): FPNumber => {
  const newFee = TBC_FEE.add(sellPenalty(collateralAssetAddress, payload));

  if (isDesiredInput) {
    const feeAmount = amount.mul(newFee);
    const outputAmount = tbcSellPrice(collateralAssetAddress, amount.sub(feeAmount), isDesiredInput, payload);

    return outputAmount;
  } else {
    const inputAmount = tbcSellPrice(collateralAssetAddress, amount, isDesiredInput, payload);
    const inputAmountWithFee = safeDivide(inputAmount, ONE.sub(newFee));

    return inputAmountWithFee;
  }
};

const tbcBuyPrice = (
  collateralAssetAddress: string,
  amount: FPNumber,
  isDesiredInput: boolean,
  payload: QuotePayload
): FPNumber => {
  const currentState = tbcBuyFunction(FPNumber.ZERO, payload);
  const collateralPrice = tbcReferencePrice(collateralAssetAddress, payload);
  const priceChangeStep = FPNumber.fromCodecValue(payload.consts.tbc.priceChangeStep);

  if (isDesiredInput) {
    const collateralReferenceIn = collateralPrice.mul(amount);
    const underPow = currentState.mul(priceChangeStep).mul(new FPNumber(2));
    const underSqrt = underPow.mul(underPow).add(new FPNumber(8).mul(priceChangeStep).mul(collateralReferenceIn));
    const xorOut = safeDivide(underSqrt.sqrt(), new FPNumber(2)).sub(priceChangeStep.mul(currentState));
    return getMaxPositive(xorOut);
  } else {
    const newState = tbcBuyFunction(amount, payload);
    const collateralReferenceIn = safeDivide(currentState.add(newState).mul(amount), new FPNumber(2));
    const collateralQuantity = safeDivide(collateralReferenceIn, collateralPrice);
    return getMaxPositive(collateralQuantity);
  }
};

const tbcBuyPriceWithFee = (
  collateralAssetAddress: string,
  amount: FPNumber,
  isDesiredInput: boolean,
  payload: QuotePayload
): FPNumber => {
  if (isDesiredInput) {
    const outputAmount = tbcBuyPrice(collateralAssetAddress, amount, isDesiredInput, payload);
    const feeAmount = TBC_FEE.mul(outputAmount);
    const output = outputAmount.sub(feeAmount);

    return output;
  } else {
    const amountWithFee = safeDivide(amount, ONE.sub(TBC_FEE));
    const inputAmount = tbcBuyPrice(collateralAssetAddress, amountWithFee, isDesiredInput, payload);

    return inputAmount;
  }
};

export const tbcQuoteWithoutImpact = (
  inputAssetAddress: string,
  outputAssetAddress: string,
  amount: FPNumber,
  isDesiredinput: boolean,
  payload: QuotePayload
): FPNumber => {
  try {
    if (isXorAsset(inputAssetAddress)) {
      const xorPrice = tbcSellPriceNoVolume(outputAssetAddress, payload);
      const penalty = sellPenalty(outputAssetAddress, payload);
      const newFee = TBC_FEE.add(penalty);

      if (isDesiredinput) {
        const feeAmount = newFee.mul(amount);
        const collateralOut = amount.sub(feeAmount).mul(xorPrice);

        return collateralOut;
      } else {
        const xorIn = safeDivide(amount, xorPrice);
        const inputAmountWithFee = safeDivide(xorIn, ONE.sub(newFee));

        return inputAmountWithFee;
      }
    } else {
      const xorPrice = tbcBuyPriceNoVolume(inputAssetAddress, payload);

      if (isDesiredinput) {
        const xorOut = safeDivide(amount, xorPrice);
        const feeAmount = xorOut.mul(TBC_FEE);

        return xorOut.sub(feeAmount);
      } else {
        const outputAmountWithFee = safeDivide(amount, ONE.sub(TBC_FEE));
        const collateralIn = outputAmountWithFee.mul(xorPrice);

        return collateralIn;
      }
    }
  } catch (error) {
    return FPNumber.ZERO;
  }
};

export const tbcQuote = (
  inputAssetAddress: string,
  outputAssetAddress: string,
  amount: FPNumber,
  isDesiredInput: boolean,
  payload: QuotePayload
): FPNumber => {
  try {
    if (isXorAsset(inputAssetAddress)) {
      return tbcSellPriceWithFee(outputAssetAddress, amount, isDesiredInput, payload);
    } else {
      return tbcBuyPriceWithFee(inputAssetAddress, amount, isDesiredInput, payload);
    }
  } catch (error) {
    return FPNumber.ZERO;
  }
};