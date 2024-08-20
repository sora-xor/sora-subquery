import { SubstrateExtrinsic } from '@subql/types';
import BigNumber from "bignumber.js";

import { isExchangeEvent } from '../../utils/events';
import { createHistoryElement } from "../../utils/history";
import { getAssetId, formatU128ToBalance, assetSnapshotsStorage } from '../../utils/assets';
import { networkSnapshotsStorage } from '../../utils/network';
import { poolsSnapshotsStorage } from '../../utils/pools';
import { logStartProcessingCall } from '../../utils/logs';

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
    const [filterMode, liquiditySources, swapAmount, targetAsset, baseAsset, dexId, to] = extrinsic.extrinsic.args.slice().reverse();

    const details: any = {};
    const baseAssetId = getAssetId(baseAsset);
    const targetAssetId = getAssetId(targetAsset);

    details.baseAssetId = baseAssetId;
    details.targetAssetId = targetAssetId;
    details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString();
    details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, baseAssetId)[0];
    details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, targetAssetId)[1];

    if (to) {
        details.to = to.toString()
    }

    const exchangeEvent = extrinsic.events.find(e => isExchangeEvent(e));

    if (exchangeEvent) {
        const { event: { data: [, , , , baseAssetAmount, targetAssetAmount] } } = exchangeEvent;

        details.baseAssetAmount = formatU128ToBalance(baseAssetAmount.toString(), baseAssetId);
        details.targetAssetAmount = formatU128ToBalance(targetAssetAmount.toString(), targetAssetId);

        // update assets volume
        const aVolumeUSD = await assetSnapshotsStorage.updateVolume(extrinsic.block, baseAssetId, details.baseAssetAmount);
        const bVolumeUSD = await assetSnapshotsStorage.updateVolume(extrinsic.block, targetAssetId, details.targetAssetAmount);
        // get the minimal volume (sell\buy)
        const volumeUSD = BigNumber.min(aVolumeUSD, bVolumeUSD);

        await poolsSnapshotsStorage.processSwap(extrinsic);
        await networkSnapshotsStorage.updateVolumeStats(extrinsic.block, volumeUSD);
    }

    await createHistoryElement(extrinsic, details);
}

export async function handleSwaps(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    await handleAndSaveExtrinsic(extrinsic);
}

export async function handleSwapTransfers(extrinsic: SubstrateExtrinsic): Promise<void> {
    logStartProcessingCall(extrinsic);

    await handleAndSaveExtrinsic(extrinsic);
}
