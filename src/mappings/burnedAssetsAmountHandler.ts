import { SubstrateEvent } from "@subql/types";
import { BurnedAssetsAmount } from "../types";

const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';

let prevEventId: string = '';

const updateBurnedValue = (
    recordCurrencyId: string,
    currencyId: string,
    prevBurnedValue: string,
    balance: string
) => {
    // TODO: Work with types
    return recordCurrencyId === currencyId ? prevBurnedValue + balance : prevBurnedValue;
    // return recordCurrencyId === currencyId ? prevBurnedValue + (balance as Balance).toBigInt() : prevBurnedValue;
}

export async function handleBurnedAssetsAmount(event: SubstrateEvent): Promise<void> {
    const { event: { data: [ id, block, accountId, currencyId, balance ] } } = event;
    const record = new BurnedAssetsAmount(event.extrinsic.block.block.header.hash.toString());

    record.id = id.toString();
    // TODO: it's better to save by blockId
    record.block = block.toString();
    record.accountId = accountId.toString();
    record.currencyId = currencyId.toString();
    record.balance = balance.toString();
    // TODO: Get burnedInfo from prev record and sum it with current value
    const prevBurnedValues = await BurnedAssetsAmount.get(prevEventId)
    record.burnedAmountXor = updateBurnedValue(record.currencyId, XOR, prevBurnedValues?.burnedAmountXor ?? '0', record.balance)
    record.burnedAmountVal = updateBurnedValue(record.currencyId, VAL, prevBurnedValues?.burnedAmountVal ?? '0', record.balance)
    record.burnedAmountPswap = updateBurnedValue(record.currencyId, PSWAP, prevBurnedValues?.burnedAmountPswap ?? '0', record.balance)
    prevEventId = record.id;

    await record.save();
}
