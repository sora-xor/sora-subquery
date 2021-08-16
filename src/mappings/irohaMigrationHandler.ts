import {SubstrateExtrinsic} from '@subql/types';
import {formatU128ToBalance, saveCommonHistoryElemInfo} from "./utils";

export async function handlerIrohaMigration(extrinsic: SubstrateExtrinsic): Promise<void> {
    
    logger.debug("Caught iroha migration extrinsic")
    
    const record = saveCommonHistoryElemInfo(extrinsic)

    record.module = "irohaMigration"
    record.method = "migrate"

    if (record.success) {
        
        let assetTransferEvent = extrinsic.events.find( e  => e.event.method === 'Transferred' && e.event.section === 'currencies')
        const {event: {data: [asset, , , amount]}} = assetTransferEvent;
            
        record.irohaMigration = {
            assetId: asset.toString(),
            amount: formatU128ToBalance(amount.toString())
        }
    } 
    
    await record.save();

    logger.debug(`===== Saved liquidity removal with ${extrinsic.extrinsic.hash.toString()} txid =====`);
    
}

