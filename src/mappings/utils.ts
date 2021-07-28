import { SubstrateExtrinsic } from "@subql/types";

export const formatU128ToBalance = (u128: string, decimals: number = 18): string => {
    let padded = u128.padStart(decimals + 1, "0");
    return `${padded.slice(0, -decimals)}.${padded.slice(-decimals)}`;
}

export const checkIfExtrinsicExecuteSuccess = (extrinsic: SubstrateExtrinsic): boolean => {
    return !extrinsic.events.find((item) => {
        const { event: { method, section }} = item;
        return method === 'ExtrinsicFailed' && section === 'system';
    })
}

export const getExtrinsicNetworkFee = (extrinsic: SubstrateExtrinsic): string => {
    let feeEvent = extrinsic.events.find(item => {
        const { event: { method, section }} = item;
        return method === 'FeeWithdrawn' && section === 'xorFee';
    });
    if (feeEvent) {
        const {event: {data: [, feeAmount]}} = feeEvent;
        return feeAmount.toString();
    } else {
        return "0";
    }
}

export const getExtrinsicId = (extrinsic: SubstrateExtrinsic): string => {
    return `${extrinsic.block.block.hash.toString()}-${extrinsic.idx.toString()}`;
}
