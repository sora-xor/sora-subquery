import BigNumber from "bignumber.js";

import { SubstrateExtrinsic } from "@subql/types";
import { HistoryElement, PoolXYK, Asset, AssetSnapshot, AssetSnapshotType, Account } from "../types";

export const XOR: string = '0x0200000000000000000000000000000000000000000000000000000000000000';
export const VAL: string = '0x0200040000000000000000000000000000000000000000000000000000000000';
export const PSWAP: string = '0x0200050000000000000000000000000000000000000000000000000000000000';
export const DAI: string = '0x0200060000000000000000000000000000000000000000000000000000000000';
export const ETH: string = '0x0200070000000000000000000000000000000000000000000000000000000000';
export const XSTUSD: string = '0x0200080000000000000000000000000000000000000000000000000000000000';
export const XST: string = '0x0200090000000000000000000000000000000000000000000000000000000000';

export const DOUBLE_PRICE_POOL = [VAL, PSWAP, DAI, ETH, XST];

export const SECONDS_IN_BLOCK = 6;

export let assetPrecisions = new Map<string, number>();

// getters & setter for flag, should we sync poolXYK reserves
// and then calc asset prices
export const PoolsPrices = {
    flag: true,
    get() {
        return this.flag;
    },
    set(flag: boolean) {
        this.flag = flag;
    },
};

// Intervals for snapshots (in seconds)
export const SnapshotSecondsMap = {
    [AssetSnapshotType.DEFAULT]: 300, // 5 min
    [AssetSnapshotType.HOUR]: 3_600,
    [AssetSnapshotType.DAY]: 86_400,
};

export const getAssetId = (asset: any): string => {
    return (asset?.code?.code ?? asset?.code ?? asset).toHuman();
};

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

export const getOrCreateAccountEntity = async (accountAddress: string) => {
    let account = await Account.get(accountAddress);

    if (!account) {
        account = new Account(accountAddress);
        await account.save();
    }

    return account;
};

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

export const getOrCreateAssetEntity = async (assetId: string) => {
    let asset = await Asset.get(assetId);

    if (!asset) {
        asset = new Asset(assetId);
        await asset.save();
    }

    return asset;
}

const getAssetSnapshotId = (assetId: string, type: AssetSnapshotType, index: number) => [assetId, type, index].join('-');

const getAssetSnapshot = async (assetId: string, type: AssetSnapshotType, blockTimestamp: number, blockNumber: number): Promise<AssetSnapshot> => {
    const seconds = SnapshotSecondsMap[type];
    const interval = Math.floor(seconds / SECONDS_IN_BLOCK);
    const index =  Math.floor(blockTimestamp / seconds);
    const timestamp = index * seconds; // rounded snapshot timestamp
    const shapshotIndex = Math.floor(blockNumber / interval); // rounded snapshot index (from 0)
    const id = getAssetSnapshotId(assetId, type, shapshotIndex);

    let snapshot = await AssetSnapshot.get(id);

    if (!snapshot) {
        snapshot = new AssetSnapshot(id);
        snapshot.assetId = assetId;
        snapshot.timestamp = timestamp;
        snapshot.type = type;
        snapshot.volume = {
            amount: '0',
            amountUSD: '0'
        };
        snapshot.priceUSD = {
            open: '0',
            close: '0',
            high: '0',
            low: '0',
        };

        // find prev snapshot, to get it's "close" price, and set it as "open" price for new snapshot
        const prevSnapshotIndex = shapshotIndex - 1;
        const prevSnapshotId = getAssetSnapshotId(assetId, type, prevSnapshotIndex);
        const prevSnapshot = await AssetSnapshot.get(prevSnapshotId);

        if (prevSnapshot?.priceUSD) {
            const snapshotOpenPrice = prevSnapshot?.priceUSD?.close;

            snapshot.priceUSD = {
                open: snapshotOpenPrice,
                close: snapshotOpenPrice,
                high: snapshotOpenPrice,
                low: snapshotOpenPrice,
            };
        }
    }

    return snapshot;
};

export const updateAssetPrice = async (assetId: string, price: string, blockTimestamp: number, blockNumber: number): Promise<void> => {
    await getOrCreateAssetEntity(assetId);

    for (const type of Object.values(AssetSnapshotType)) {
        const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp, blockNumber);

        snapshot.priceUSD.close = price;
        snapshot.priceUSD.high = BigNumber.max(new BigNumber(snapshot.priceUSD.high), new BigNumber(price)).toString();
        snapshot.priceUSD.low = BigNumber.min(new BigNumber(snapshot.priceUSD.low), new BigNumber(price)).toString();

        await snapshot.save();
    }
};

export const updateAssetVolume = async (assetId: string, amount: string, blockTimestamp: number, blockNumber: number): Promise<void> => {
    await getOrCreateAssetEntity(assetId);

    const assetPrice = [XSTUSD, DAI].includes(assetId)
        ? new BigNumber(1)
        : new BigNumber((await PoolXYK.get(assetId))?.priceUSD ?? 0);

    for (const type of Object.values(AssetSnapshotType)) {
        const snapshot = await getAssetSnapshot(assetId, type, blockTimestamp, blockNumber);

        const volume = new BigNumber(amount);
        const volumeUSD = volume.multipliedBy(assetPrice);

        snapshot.volume.amount = new BigNumber(snapshot.volume.amount).plus(volume).toString();
        snapshot.volume.amountUSD = new BigNumber(snapshot.volume.amountUSD).plus(volumeUSD).toString();

        await snapshot.save();
    }
};
