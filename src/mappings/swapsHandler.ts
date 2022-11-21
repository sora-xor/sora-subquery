import { SubstrateExtrinsic } from '@subql/types';

import { assignCommonHistoryElemInfo, updateHistoryElementAccounts } from "../utils/history";
import { getAssetId, formatU128ToBalance, updateAssetVolume } from '../utils/assets';
import { PoolsPrices } from '../utils/pools';
import { XOR } from '../utils/consts';

import type { Vec } from "@polkadot/types";
import type { Enum, Struct } from "@polkadot/types/codec";
import type { Balance } from "@polkadot/types/interfaces/runtime"

interface SwapAmount extends Enum {
    readonly isWithDesiredInput: boolean;
    readonly asWithDesiredInput: SwapWithDesiredInput;
    readonly isWithDesiredOutput: boolean;
    readonly asWithDesiredOutput: SwapWithDesiredOutput;
}

/** @name SwapWithDesiredInput */
export interface SwapWithDesiredInput extends Struct {
    readonly desiredAmountIn: Balance;
    readonly minAmountOut: Balance;
}

/** @name SwapWithDesiredOutput */
export interface SwapWithDesiredOutput extends Struct {
    readonly desiredAmountOut: Balance;
    readonly maxAmountIn: Balance;
}

/** @name LiquiditySourceType */
export interface LiquiditySourceType extends Enum {
    readonly isXykPool: boolean;
    readonly isBondingCurvePool: boolean;
    readonly isMulticollateralBondingCurvePool: boolean;
    readonly isMockPool: boolean;
    readonly isMockPool2: boolean;
    readonly isMockPool3: boolean;
    readonly isMockPool4: boolean;
}

const receiveExtrinsicSwapAmounts = (swapAmount: SwapAmount, assetId: string): string[] => {
    switch (swapAmount.isWithDesiredOutput) {
        case true: {
            return [formatU128ToBalance(swapAmount.asWithDesiredOutput.maxAmountIn.toString(), assetId),
            formatU128ToBalance(swapAmount.asWithDesiredOutput.desiredAmountOut.toString(), assetId)]
        }
        case false: {
            return [formatU128ToBalance(swapAmount.asWithDesiredInput.desiredAmountIn.toString(), assetId),
            formatU128ToBalance(swapAmount.asWithDesiredInput.minAmountOut.toString(), assetId)]
        }
    }
}

const handleAndSaveExtrinsic = async (extrinsic: SubstrateExtrinsic): Promise<void> => {
    const blockNumber = extrinsic.block.block.header.number.toNumber();
    const blockTimestamp: number = parseInt(((extrinsic.block.timestamp).getTime() / 1000).toFixed(0));
    const record = assignCommonHistoryElemInfo(extrinsic)

    const [filterMode, liquiditySources, swapAmount, targetAsset, baseAsset, dexId, to] = extrinsic.extrinsic.args.slice().reverse();

    const details: any = {};
    const baseAssetId = getAssetId(baseAsset);
    const targetAssetId = getAssetId(targetAsset);

    details.baseAssetId = baseAssetId;
    details.targetAssetId = targetAssetId;
    details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString();

    if (to) {
        details.to = to.toString()
    }

    if (record.execution.success) {
        const swapEvent = extrinsic.events.find(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');
        const { event: { data: [, , , , baseAssetAmount, targetAssetAmount, liquidityProviderFee] } } = swapEvent;

        details.baseAssetAmount = formatU128ToBalance(baseAssetAmount.toString(), baseAssetId)
        details.targetAssetAmount = formatU128ToBalance(targetAssetAmount.toString(), targetAssetId)
        details.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee.toString(), XOR)
    } else {
        details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, baseAssetId)[0]
        details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, targetAssetId)[1]
        details.liquidityProviderFee = "0"
    }

    record.data = details

    await record.save();
    await updateHistoryElementAccounts(record);

    // update assets volume
    if (record.execution.success) {
        await updateAssetVolume(baseAssetId, details.baseAssetAmount, blockTimestamp, blockNumber);
        await updateAssetVolume(targetAssetId, details.targetAssetAmount, blockTimestamp, blockNumber);
        PoolsPrices.set(true);
    }
}

export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {
    logger.debug("Caught swap extrinsic")

    await handleAndSaveExtrinsic(extrinsic);

    logger.debug(`===== Saved swap with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}

export async function handleSwapTransfers(extrinsic: SubstrateExtrinsic): Promise<void> {
    logger.debug("Caught swap transfer extrinsic")

    await handleAndSaveExtrinsic(extrinsic);

    logger.debug(`===== Saved swap and transfer with ${extrinsic.extrinsic.hash.toString()} txid =====`);
}
