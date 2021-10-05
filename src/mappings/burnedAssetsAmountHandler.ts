import { SubstrateEvent } from "@subql/types";
import { BurnedAssetsAmount } from "../types";

const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';

let prevEventId: string = '';


export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.info(`section ${event.event.section} method ${event.event.method}`);
}
