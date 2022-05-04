import { FPNumber } from '@sora-substrate/math';
import { SubstrateBlock } from "@subql/types";
import { PoolTBC, PoolTBCEntity } from "../types";
import { XOR, DAI, XSTUSD, formatU128ToBalance } from "./utils";

const ONE_HOUR_IN_BLOCKS = 5;

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
  const data = (await api.query.priceTools.priceInfos(assetAddress)).unwrap();

  return data.average_price.toString();
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
  if (block.block.header.number.toNumber() % ONE_HOUR_IN_BLOCKS != 0) {
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

  const initialPrice = (await api.query.multicollateralBondingCurvePool.initialPrice()).toBn();
  const priceChangeStep = (await api.query.multicollateralBondingCurvePool.priceChangeStep()).toBn();
  const sellPriceCoefficient = (await api.query.multicollateralBondingCurvePool.sellPriceCoefficient()).toBn();
  const xorIssuance = await getAssetIssuance(XOR);
  const xstusdIssuance = await getAssetIssuance(XSTUSD);

  const record = new PoolTBCEntity(block.block.header.hash.toString());
  const blockDate: string = ((block.timestamp).getTime() / 1000).toFixed(0).toString();
  const poolEntityId = record.id;

  const pools: Array<PoolTBC> = enabledTargets.map(collateralAssetId => {
    const pool = new PoolTBC(`${poolEntityId}_${collateralAssetId}`);

    pool.poolEntityId = poolEntityId;
    pool.collateralAssetId = collateralAssetId;
    pool.collateralReserves = formatU128ToBalance(collateralReserves[collateralAssetId] || '0', collateralAssetId);
    pool.updated = blockDate;

    return pool;
  });

  record.updated = blockDate;

  await record.save();
  await Promise.all(pools.map(pool => pool.save()));
}