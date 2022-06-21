import BigNumber from "bignumber.js";

import { SubstrateExtrinsic } from "@subql/types";
import { HistoryElement, AssetPrice, PriceType } from "../types";

export const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
export const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
export const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';
export const DAI: string = '0x0200060000000000000000000000000000000000000000000000000000000000';
export const ETH: string = '0x0200070000000000000000000000000000000000000000000000000000000000';
export const XSTUSD: string = '0x0200080000000000000000000000000000000000000000000000000000000000'

export const SECONDS_SAMPLE = 300;
export const SECONDS_SAMPLE_HOUR = 3600;
export const SECONDS_SAMPLE_DAY = 86400;

export const formatU128ToBalance = (u128: string, assetId: string): string => {
    let decimals = assetPrecisions.get(assetId);
    let padded = u128.padStart(decimals + 1, "0");
    if (decimals == 0) {
        return padded
    }
    return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
}

export const checkIfExtrinsicExecuteSuccess = (extrinsic: SubstrateExtrinsic): boolean => {
    return !extrinsic.events.find((item) => {
        const { event: { method, section } } = item;
        return method === 'ExtrinsicFailed' && section === 'system';
    })
}

export const getExtrinsicNetworkFee = (extrinsic: SubstrateExtrinsic): string => {
    let feeEvent = extrinsic.events.find(item => {
        const { event: { method, section } } = item;
        return method === 'FeeWithdrawn' && section === 'xorFee';
    });
    if (feeEvent) {
        const { event: { data: [, feeAmount] } } = feeEvent;
        return feeAmount.toString();
    } else {
        return "0";
    }
}

export const getExtrinsicId = (extrinsic: SubstrateExtrinsic): string => {
    return `${extrinsic.block.block.hash.toString()}-${extrinsic.idx.toString()}`;
}

export const assignCommonHistoryElemInfo = (extrinsic: SubstrateExtrinsic): HistoryElement => {
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
    record.blockHash = extrinsic.block.block.header.hash.toString()
    record.module = extrinsic.extrinsic.method.section
    record.method = extrinsic.extrinsic.method.method
    record.address = extrinsic.extrinsic.signer.toString()
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic), XOR)
    record.timestamp = parseInt(((extrinsic.block.timestamp).getTime() / 1000).toFixed(0))

    let failedEvent = extrinsic.events.find(e => e.event.method === 'ExtrinsicFailed');

    if (failedEvent) {

        record.execution = {
            success: false
        }

        const { event: { data: [error] } } = failedEvent

        if ((error as any).isModule) {

            const parsed_error = JSON.parse(error.toString())

            record.execution.error = {
                moduleErrorId: parsed_error.module.error,
                moduleErrorIndex: parsed_error.module.index
            }

        } else {

            // Other, CannotLookup, BadOrigin, no extra info
            record.execution.error = {
                nonModuleErrorMessage: error.toString()
            }

        }

    }

    else {
        record.execution = {
            success: true
        }
    }

    return record

}

export let assetPrecisions = new Map<string, number>();

export const updatePrice = async (assetId: string, type: PriceType, price: BigNumber, blockTimestamp: number): Promise<AssetPrice> => {
    const secondsSample = type === PriceType.DEFAULT
        ? SECONDS_SAMPLE
        : (type === PriceType.HOUR ? SECONDS_SAMPLE_HOUR : SECONDS_SAMPLE_DAY);

    const index =  Math.floor(blockTimestamp / secondsSample);
    const id = [assetId, type, index].join('-');

    let priceSample = await AssetPrice.get(id);

    if (!priceSample) {
        priceSample = new AssetPrice(id);
        priceSample.assetId = assetId;
        priceSample.timestamp = index * secondsSample;;
        priceSample.type = type;

        priceSample.open = price.toString();
        priceSample.high = price.toString();
        priceSample.low = price.toString();
    }

    priceSample.close = price.toString();
    priceSample.high = BigNumber.max(new BigNumber(priceSample.high), price).toString();
    priceSample.low = BigNumber.min(new BigNumber(priceSample.low), price).toString();

    await priceSample.save();

    return priceSample;
}