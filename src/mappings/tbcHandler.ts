import { FPNumber } from '@sora-substrate/math';
import { SubstrateBlock } from "@subql/types";
import { PoolTBC, PoolTBCEntity } from "../types";
import { XOR, DAI, XSTUSD, formatU128ToBalance } from "./utils";
import { tbcQuote } from '../utils/liquidityProxy';
import type { QuotePayload } from '../utils/liquidityProxy';

const FIVE_MINUTES_IN_BLOCKS = 50;
const QUOTE_AMOUNT = new FPNumber(1);

const getEnabledTargets = async (): Promise<string[] | null> => {
  try {
    const data = (await api.query.multicollateralBondingCurvePool.enabledTargets()).toJSON() as Array<string>;
    return data;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const getCollateralReserves = async (): Promise<{ [key: string]: string } | null> => {
  try {
    const reserves = await api.query.multicollateralBondingCurvePool.collateralReserves.entries();

    return reserves.reduce((buffer, item) => {
      const [{ args: [assetId] }, balance] = item;

      return { ...buffer, [assetId.toString()]: balance.toString() }
    }, {});
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const getAveragePriceInXOR = async (assetAddress: string): Promise<string> => {
  const data = await api.query.priceTools.priceInfos(assetAddress);

  return data.isEmpty ? '0' : (data.toJSON() as any).average_price.toString();
};

const getAssetIssuance = async (assetAddress: string): Promise<string> => {
  if (assetAddress === XOR) {
    return (await api.query.balances.totalIssuance()).toString();
  }
  return (await api.query.tokens.totalIssuance(assetAddress)).toString();
};

const getAssetAveragePrice = async (assetAddress: string): Promise<string> => {
  if (assetAddress === DAI || assetAddress === XSTUSD) {
    return new FPNumber(1).toCodecString();
  }

  if (assetAddress === XOR) {
    return await getAveragePriceInXOR(DAI);
  }

  return await getAveragePriceInXOR(assetAddress);
};

export async function handleTBCPools(block: SubstrateBlock) {
  if (block.block.header.number.toNumber() % FIVE_MINUTES_IN_BLOCKS != 0) {
    return;
  }

  const [
    enabledTargets,
    collateralReserves
  ] = await Promise.all([
    getEnabledTargets(),
    getCollateralReserves(),
  ]);

  if (!enabledTargets || !collateralReserves) return;

  let xorPriceInDAI = new FPNumber(0);

  const record = new PoolTBCEntity(block.block.header.hash.toString());
  const blockDate: string = ((block.timestamp).getTime() / 1000).toFixed(0).toString();
  const poolEntityId = record.id;
  const pools: Array<PoolTBC> = [];

  // prepare TBC data for calculations 
  const initialPrice = (await api.query.multicollateralBondingCurvePool.initialPrice()).toString();
  const priceChangeStep = (await api.query.multicollateralBondingCurvePool.priceChangeStep()).toString();
  const sellPriceCoefficient = (await api.query.multicollateralBondingCurvePool.sellPriceCoefficient()).toString();
  const xorIssuance = await getAssetIssuance(XOR);
  const xstusdIssuance = await getAssetIssuance(XSTUSD);
  const xorPrice = await getAssetAveragePrice(XOR);
  const xstusdPrice = await getAssetAveragePrice(XSTUSD);

  const payload: QuotePayload = {
    reserves: {
      xyk: {},
      tbc: collateralReserves,
    },
    issuances: {
      [XOR]: xorIssuance,
      [XSTUSD]: xstusdIssuance,
    },
    prices: {
      [XOR]: xorPrice,
      [XSTUSD]: xstusdPrice,
    },
    consts: {
      tbc: {
        initialPrice,
        priceChangeStep,
        sellPriceCoefficient,
      },
    },
  };

  for (const collateralAssetId of enabledTargets) {
    payload.prices[collateralAssetId] = await getAssetAveragePrice(collateralAssetId);
    payload.issuances[collateralAssetId] = await getAssetIssuance(collateralAssetId);

    const pool = new PoolTBC(`${poolEntityId}_${collateralAssetId}`);

    if (collateralAssetId === DAI) {
      xorPriceInDAI = tbcQuote(collateralAssetId, XOR, QUOTE_AMOUNT, false, payload);
    }

    pool.poolEntityId = poolEntityId;
    pool.collateralAssetId = collateralAssetId;
    pool.collateralReserves = formatU128ToBalance(collateralReserves[collateralAssetId] || '0', collateralAssetId);
    pool.priceUSD = '0';
    pool.updated = blockDate;

    pools.push(pool);
  }

  if (!xorPriceInDAI.isZero()) {
    pools.forEach(pool => {
      const amountForXor = tbcQuote(pool.collateralAssetId, XOR, QUOTE_AMOUNT, false, payload);
      const priceUSD = xorPriceInDAI.div(amountForXor);

      pool.priceUSD = formatU128ToBalance(priceUSD.toCodecString(), pool.collateralAssetId);
    })
  }

  //Add fake XOR Pool in order to add fiat price for it
  const xorPool = new PoolTBC(`${poolEntityId}_${XOR}`);
  xorPool.poolEntityId = poolEntityId;
  xorPool.collateralAssetId = XOR;
  xorPool.collateralReserves = '0';
  xorPool.priceUSD = formatU128ToBalance(xorPriceInDAI.toCodecString(), XOR);
  xorPool.updated = blockDate;
  pools.push(xorPool);

  record.updated = blockDate;

  await record.save();

  await Promise.all(pools.map(pool => pool.save()));
}