import BigNumber from 'bignumber.js';

import { SubstrateBlock } from '@subql/types';
import { PoolXYK } from '../../types';

import { assetSnapshotsStorage, tickerSyntheticAssetId } from '../../utils/assets';
import {
  poolAccounts,
  PoolsPrices,
  poolsStorage,
  poolsSnapshotsStorage,
  getChameleonPoolBaseAssetId,
} from '../../utils/pools';
import { XOR, PSWAP, DAI, BASE_ASSETS, XSTUSD } from '../../utils/consts';
import { getPoolsStorageLog, getSyncPricesLog } from "../../utils/logs";
import { calcPriceInReference, isPriceV2 } from '../../utils/price';

const getAssetDexCap = (assetReserves: BigNumber, assetPrice: BigNumber, daiReserves: BigNumber) => {
  // theoretical asset capitalization in DAI inside DEX
  const assetDaiCap = assetPrice.multipliedBy(assetReserves);
  // real asset capitalization is supported by DAI
  const assetDexCap = assetDaiCap.isGreaterThan(daiReserves) ? daiReserves : assetDaiCap;

  return assetDexCap;
};

export async function syncPoolXykPrices(block: SubstrateBlock): Promise<void> {
  if (!PoolsPrices.get()) return;

  getSyncPricesLog(block).debug('Sync PoolXYK prices');

  const blockNumber = block.block.header.number.toNumber();

  let pswapPriceInDAI = new BigNumber(0);
  let baseAssetWithDoublePoolsPrice = new BigNumber(0);

  const pools: Record<string, PoolXYK[]> = {};
  const daiReserves: Record<string, BigNumber> = {};
  const assetsPrices: Record<string, { dexCap: BigNumber; price: string }> = {};
  const syntheticAssetsIds = [...tickerSyntheticAssetId.values()].filter((id) => id !== XSTUSD);

  for (const baseAssetId of [...BASE_ASSETS].reverse()) {
    const poolsMap = poolAccounts.getMap(baseAssetId);

    if (!poolsMap) continue;

    const daiPoolAcc = poolsMap.get(DAI);
    const poolAccs = [...poolsMap.values()];
    const poolIds = daiPoolAcc ? [...new Set([daiPoolAcc, ...poolAccs])] : poolAccs;

    pools[baseAssetId] = [];

    let baseAssetInPools = new BigNumber(0);
    let baseAssetWithDoublePools = new BigNumber(0);
    let baseAssetPriceInDAI = new BigNumber(0);
    let chameleonAssetPriceInBaseAsset = new BigNumber(0);

    const chameleonAsset = getChameleonPoolBaseAssetId(baseAssetId);

    getSyncPricesLog(block).debug({ baseAssetId }, `Update ${poolsMap.size} pools`);

    for (const poolId of poolIds) {
      const pool = await poolsStorage.getPool(block, poolId);

      if (!pool) continue;

      const baseAssetReservesBN = new BigNumber(pool.baseAssetReserves.toString());
      const targetAssetReservesBN = new BigNumber(pool.targetAssetReserves.toString());

      baseAssetInPools = baseAssetInPools.plus(baseAssetReservesBN);
      baseAssetWithDoublePools = baseAssetWithDoublePools.plus(
        baseAssetReservesBN.multipliedBy(new BigNumber(pool.multiplier))
      );

      if (pool.targetAssetId === DAI) {
        baseAssetPriceInDAI = calcPriceInReference(blockNumber, baseAssetReservesBN, targetAssetReservesBN);
        daiReserves[baseAssetId] = targetAssetReservesBN
      } else if (pool.targetAssetId === chameleonAsset) {
        chameleonAssetPriceInBaseAsset = calcPriceInReference(blockNumber, baseAssetReservesBN, targetAssetReservesBN, baseAssetPriceInDAI);
      }

      pools[baseAssetId].push(pool);
      getPoolsStorageLog(block).debug({ poolId: pool.id }, 'Update pool');
    }

    baseAssetWithDoublePoolsPrice = baseAssetWithDoublePoolsPrice.plus(
      baseAssetWithDoublePools.multipliedBy(baseAssetPriceInDAI)
    );

    // If base asset has price in DAI
    if (!baseAssetPriceInDAI.isZero()) {
      for (const p of pools[baseAssetId]) {
        const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString());
        const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString());
        const chameleonAssetReserves = new BigNumber((p.chameleonAssetReserves ?? BigInt(0)).toString());

        let targetAssetPrice = new BigNumber(0);

        if (!targetAssetReserves.isZero()) {
          const baseAssetVolume = baseAssetReserves.minus(chameleonAssetReserves).multipliedBy(baseAssetPriceInDAI);
          const chameleonAssetVolume = chameleonAssetReserves
            .multipliedBy(chameleonAssetPriceInBaseAsset)
            .multipliedBy(baseAssetPriceInDAI);

          targetAssetPrice = baseAssetVolume.plus(chameleonAssetVolume).dividedBy(targetAssetReserves);
        }

        p.priceUSD = targetAssetPrice.toFixed(18);

        // If base asset has price in DAI
        if (!baseAssetPriceInDAI.isZero()) {
          // update pools prices
          for (const p of pools[baseAssetId]) {
            if (p.targetAssetId === DAI) {
              p.priceUSD = '1';
              continue;
            };

            const baseAssetReserves = new BigNumber(p.baseAssetReserves.toString());
            const targetAssetReserves = new BigNumber(p.targetAssetReserves.toString());
            const chameleonAssetReserves = new BigNumber((p.chameleonAssetReserves ?? BigInt(0)).toString());

            let daiPrice = new BigNumber(0);

            if (!targetAssetReserves.isZero()) {
              const baseAssetVolume = baseAssetReserves.minus(chameleonAssetReserves);
              const chameleonAssetVolume = chameleonAssetReserves.multipliedBy(chameleonAssetPriceInBaseAsset);
              const targetAssetPriceInBaseAsset = calcPriceInReference(
                  blockNumber,
                  baseAssetVolume.plus(chameleonAssetVolume),
                  targetAssetReserves,
                  baseAssetPriceInDAI,
              );

              daiPrice = targetAssetPriceInBaseAsset.multipliedBy(baseAssetPriceInDAI);
            }

            p.priceUSD = daiPrice.toFixed(18);

            // update PSWAP price (price from pair with XOR)
            if (p.targetAssetId === PSWAP && p.baseAssetId === XOR) {
              pswapPriceInDAI = daiPrice;
            }
          }
        }
      }
    }

    // update price samples
    assetsPrices[baseAssetId] = {
      price: baseAssetPriceInDAI.toFixed(18),
      dexCap: getAssetDexCap(baseAssetInPools, baseAssetPriceInDAI, daiReserves[baseAssetId]),
    };

    // update price samples
    for (const pool of pools[baseAssetId]) {
      const assetDexCap = getAssetDexCap(
        new BigNumber(pool.targetAssetReserves.toString()),
        new BigNumber(pool.priceUSD),
        daiReserves[baseAssetId]
      );

      if (!assetsPrices[pool.targetAssetId] || assetsPrices[pool.targetAssetId].dexCap.isLessThan(assetDexCap)) {
        assetsPrices[pool.targetAssetId] = {
          dexCap: assetDexCap,
          price: pool.priceUSD,
        };
      }
    }
  }

  // update pools SB_APY
  if (!pswapPriceInDAI.isZero()) {
    const pswapsPerDay = new BigNumber(2_500_000);

    for (const baseAssetId of BASE_ASSETS) {
      if (Array.isArray(pools[baseAssetId])) {
        for (const p of pools[baseAssetId]) {
          const strategicBonusApy = pswapPriceInDAI
            .multipliedBy(pswapsPerDay)
            .dividedBy(baseAssetWithDoublePoolsPrice.dividedBy(Math.pow(10, 18)))
            .multipliedBy(new BigNumber(365 / 2))
            .multipliedBy(new BigNumber(p.multiplier))
            .toFixed(18);

          p.strategicBonusApy = strategicBonusApy;
        }
      }
    }
  }

  // update assets prices
  for (const [assetId, { price }] of Object.entries(assetsPrices)) {
    // [v1] do not update price from XYK pool for synthetic 
    // [v2] update price from XYK pool for synthetic
    if (isPriceV2(blockNumber) || !syntheticAssetsIds.includes(assetId)) {
      await assetSnapshotsStorage.updatePrice(block, assetId, price);
    }
  }

  // update pools data
  for (const dexPools of Object.values(pools)) {
    for (const dexPool of dexPools) {
      await poolsStorage.updateApy(block, dexPool.id, dexPool.strategicBonusApy);
      await poolsSnapshotsStorage.processPriceChange(block, dexPool.id, dexPool.priceUSD);
    }
  }

  getSyncPricesLog(block).debug('PoolXYK prices updated');

  PoolsPrices.set(false);
}
