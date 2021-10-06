import { SubstrateEvent } from "@subql/types";
import { BurnedAssetsAmount } from "../types";

const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';

let zeroBalance: string = '0';

export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    logger.info(`event ${event.event.data}`);
    const { event: { data: [ currencyId, , balance ] } } = event;
    let burnedAssetsAmount: BurnedAssetsAmount = new BurnedAssetsAmount(event.event.hash.toString());
    burnedAssetsAmount.blockHeight = event.block.block.header.number.toBigInt();
    burnedAssetsAmount.blockHash = event.block.block.header.hash.toString();
    burnedAssetsAmount.currencyId = currencyId.toString();
    burnedAssetsAmount.balance = BigInt(balance.toString());
    burnedAssetsAmount.burnedAmountXor = burnedAssetsAmount.currencyId === XOR ? burnedAssetsAmount.balance : BigInt(zeroBalance.toString());
    burnedAssetsAmount.burnedAmountVal = burnedAssetsAmount.currencyId === VAL ? burnedAssetsAmount.balance : BigInt(zeroBalance.toString());
    burnedAssetsAmount.burnedAmountPswap = burnedAssetsAmount.currencyId === PSWAP ? burnedAssetsAmount.balance : BigInt(zeroBalance.toString());
    
    await burnedAssetsAmount.save();
}
