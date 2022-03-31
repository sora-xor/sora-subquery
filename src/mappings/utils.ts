import { SubstrateExtrinsic } from "@subql/types";
import { HistoryElement } from "../types";
export const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';

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

export const getExtrinsicTransferredCurrencies = (extrinsic: SubstrateExtrinsic): Array<{ assetId: string; amount: string }> => {
    return extrinsic.events.reduce((buffer, e) => {
        if (e.event.method === 'Transferred' && e.event.section === 'currencies') {
          const { event: { data: [assetId,,,amount] } } = e;
          buffer.push({assetId: assetId.toString(), amount: amount.toString()});
        }
        return buffer;
     }, []);
}

export let assetPrecisions = new Map<string, number>();