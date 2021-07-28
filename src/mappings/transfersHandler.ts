import {SubstrateEvent} from "@subql/types";
import {Transfer} from "../types";
import {checkIfExtrinsicExecuteSuccess, formatU128ToBalance, getExtrinsicId, getExtrinsicNetworkFee} from "./utils";
import {LiquiditySourceType, SwapAmount} from "sora/api-interfaces";
import type {Vec} from "@polkadot/types";


export async function handlerTransfers(event: SubstrateEvent): Promise<void> {
    const {event: {data: [from, to, assetId, amount]}} = event;
    let transferExtrinsic = event.extrinsic;
    let success = checkIfExtrinsicExecuteSuccess(transferExtrinsic);
    let fee = getExtrinsicNetworkFee(transferExtrinsic);

    let transfer = new Transfer(getExtrinsicId(transferExtrinsic));
    transfer.extrinsiHash = transferExtrinsic.extrinsic.hash.toString();
    transfer.from = from.toString();
    transfer.to = to.toString();
    transfer.amount = formatU128ToBalance(amount.toString());
    transfer.assetId = assetId.toString();
    transfer.networkFee = fee;
    transfer.success = success;
    transfer.blockHash = event.block.block.hash.toString();
    transfer.datetime = transferExtrinsic.block.timestamp;

    await transfer.save();
}
