import { SubstrateExtrinsic } from "@subql/types";
import { HistoryElement } from "../types";
import { formatU128ToBalance } from '../utils/assets';
import { getOrCreateAccountEntity } from '../utils/account';
import { XOR } from '../utils/consts';

const getExtrinsicNetworkFee = (extrinsic: SubstrateExtrinsic): string => {
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
            record.execution.error = {
                // tricky way to get int
                moduleErrorId: (error as any).asModule.error.toU8a()[0],
                moduleErrorIndex: (error as any).asModule.index.toU8a()[0],
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

const INCOMING_TRANSFER_METHODS = ['transfer', 'swapTransfer'];

export const updateHistoryElementAccounts = async (history: HistoryElement) => {
    const addresses = [history.address.toString()];

    if (
        INCOMING_TRANSFER_METHODS.includes(history.method.toString()) &&
        history.data &&
        history.data['to']
    ) {
        addresses.push((history.data['to'] as string).toString());
    }

    for (const address of addresses) {
        const account = await getOrCreateAccountEntity(address);
        account.latestHistoryElementId = history.id.toString();
        await account.save();
    }
}
