import { SubstrateExtrinsic } from '@subql/types';
import { BatchTransaction } from "../types";
import { Vec } from '@polkadot/types';
import { AnyTuple, CallBase } from '@polkadot/types/types';
import { assignCommonHistoryElemInfo } from "./utils";

function extractCalls(
    call: CallBase<AnyTuple>,
    id: number,
    parentCallId: string,
    entities: Object[]
): Object[] {

    let entity = new Object();

    entity = {
        callId: `${parentCallId}-${id}`,
        method: call.method,
        module: call.section,
        hash: call.hash,
        data: call.toJSON()
    }

    entities.push(entity);

    return entities;

}

export async function batchTransactionsHandler(extrinsic: SubstrateExtrinsic): Promise<void> {

    logger.debug("Caught batch transaction extrinsic")

    // TODO Depending on the result of the execution, divide the logic of the stored data (just like in other handlers)
    
    const calls = extrinsic.extrinsic.method.args[0] as Vec<CallBase<AnyTuple>>;
    const entities = [] as Object[];

    const record = assignCommonHistoryElemInfo(extrinsic);

    entities.concat(
        calls.map((call, idx) => extractCalls(call, idx, record.blockHeight.toString(), entities))
    );

    record.batchTransaction = entities as BatchTransaction[]

    await record.save()

    logger.debug("Saved batch extrinsics")

}