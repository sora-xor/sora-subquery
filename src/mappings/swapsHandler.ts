import { SubstrateExtrinsic } from '@subql/types';
import type { Vec } from "@polkadot/types";
import { formatU128ToBalance, assignCommonHistoryElemInfo } from "./utils";
import { XOR } from '..';
import { Enum, Struct } from "@polkadot/types/codec";
import { Balance } from "@polkadot/types/interfaces/runtime"

interface SwapAmount extends Enum {
    readonly isWithDesiredInput: boolean;
    readonly asWithDesiredInput: SwapWithDesiredInput;
    readonly isWithDesiredOutput: boolean;
    readonly asWithDesiredOutput: SwapWithDesiredOutput;
}

/** @name SwapWithDesiredInput */
export interface SwapWithDesiredInput extends Struct {
    readonly desired_amount_in: Balance;
    readonly min_amount_out: Balance;
}

/** @name SwapWithDesiredOutput */
export interface SwapWithDesiredOutput extends Struct {
    readonly desired_amount_out: Balance;
    readonly max_amount_in: Balance;
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
            return [formatU128ToBalance(swapAmount.asWithDesiredOutput.max_amount_in.toString(), assetId),
            formatU128ToBalance(swapAmount.asWithDesiredOutput.desired_amount_out.toString(), assetId)]
        }
        case false: {
            return [formatU128ToBalance(swapAmount.asWithDesiredInput.desired_amount_in.toString(), assetId),
            formatU128ToBalance(swapAmount.asWithDesiredInput.min_amount_out.toString(), assetId)]
        }
    }
}

const handleAndSaveExtrinsic = async (extrinsic: SubstrateExtrinsic): Promise<void> => {
    const record = assignCommonHistoryElemInfo(extrinsic)

    const [filterMode, liquiditySources, swapAmount, targetAssetId, baseAssetId, dexId, to] = extrinsic.extrinsic.args.slice().reverse();

    const details: any = {};

    details.baseAssetId = baseAssetId.toString()
    details.targetAssetId = targetAssetId.toString()
    details.selectedMarket = (liquiditySources as Vec<LiquiditySourceType>).map(lst => lst.toString()).toString()

    if (to) {
        details.to = to.toString()
    }

    if (record.execution.success) {
        const swapEvent = extrinsic.events.find(e => e.event.method === 'Exchange' && e.event.section === 'liquidityProxy');
        const { event: { data: [, , baseAssetId, targetAssetId, baseAssetAmount, targetAssetAmount, liquidityProviderFee] } } = swapEvent;

        details.baseAssetAmount = formatU128ToBalance(baseAssetAmount.toString(), baseAssetId.toString())
        details.targetAssetAmount = formatU128ToBalance(targetAssetAmount.toString(), targetAssetId.toString())
        details.liquidityProviderFee = formatU128ToBalance(liquidityProviderFee.toString(), XOR)
    } else {
        details.baseAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, baseAssetId.toString())[0]
        details.targetAssetAmount = receiveExtrinsicSwapAmounts(swapAmount as SwapAmount, targetAssetId.toString())[1]
        details.liquidityProviderFee = "0"
    }

    record.data = details

    await record.save();
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
