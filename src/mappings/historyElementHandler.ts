import {SubstrateExtrinsic} from '@subql/types';
import {HistoryElement} from "../types";

import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicId, getExtrinsicNetworkFee} from "./utils";

export async function handleHistoryElement(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.warn("New extrinsic")
    
    const record = new HistoryElement(extrinsic.extrinsic.hash.toString())

    record.blockHeight = extrinsic.block.block.header.number.toBigInt()
    
    record.address = extrinsic.extrinsic.signer.toString()
    record.networkFee = formatU128ToBalance(getExtrinsicNetworkFee(extrinsic))
    record.success = checkIfExtrinsicExecuteSuccess(extrinsic)
    record.timestamp = extrinsic.block.timestamp.toString()
    
    await record.save();
}


