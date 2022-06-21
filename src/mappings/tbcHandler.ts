import { FPNumber } from '@sora-substrate/math';
import { tbcQuote } from '@sora-substrate/liquidity-proxy';
import { SubstrateBlock } from "@subql/types";
import { Asset, PoolTBC } from "../types";
import { XOR, DAI, XSTUSD, formatU128ToBalance } from "./utils";
import type { QuotePayload } from '@sora-substrate/liquidity-proxy';

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

  const blockDate: string = ((block.timestamp).getTime() / 1000).toFixed(0).toString();

  const assets: Array<Asset> = [];
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

    const asset = (await Asset.get(collateralAssetId)) || new Asset(collateralAssetId);

    asset.poolTBCId = asset.id;

    const pool = (await PoolTBC.get(asset.id)) || new PoolTBC(asset.id);

    if (collateralAssetId === DAI) {
      xorPriceInDAI = tbcQuote(collateralAssetId, XOR, QUOTE_AMOUNT, false, payload).amount;
    }

    pool.collateralReserves = formatU128ToBalance(collateralReserves[collateralAssetId] || '0', collateralAssetId);
    pool.priceUSD = '0';

    pools.push(pool);
    assets.push(asset);
  }

  if (!xorPriceInDAI.isZero()) {
    pools.forEach(pool => {
      const amountForXor = tbcQuote(pool.id, XOR, QUOTE_AMOUNT, false, payload).amount;
      const priceUSD = amountForXor.isZero() ? FPNumber.ZERO : xorPriceInDAI.div(amountForXor);

      pool.priceUSD = formatU128ToBalance(priceUSD.toCodecString(), pool.id);
    })
  }

  //Add fake XOR Pool in order to add fiat price for it
  const xorAsset = (await Asset.get(XOR)) || new Asset(XOR);

  xorAsset.poolTBCId = xorAsset.id;

  const xorPool = (await PoolTBC.get(xorAsset.id)) || new PoolTBC(xorAsset.id);

  xorPool.collateralReserves = '0';
  xorPool.priceUSD = formatU128ToBalance(xorPriceInDAI.toCodecString(), XOR);

  pools.push(xorPool);
  assets.push(xorAsset);

  await Promise.all(pools.map(pool => pool.save()));
  await Promise.all(assets.map(asset => asset.save()));
}