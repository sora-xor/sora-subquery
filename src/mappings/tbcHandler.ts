import { SubstrateBlock } from "@subql/types";
import { PoolTBC, PoolTBCEntity } from "../types";
import { formatU128ToBalance } from "./utils";

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