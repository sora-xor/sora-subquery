import { SnapshotType, NetworkSnapshot } from "../types";
import { SnapshotSecondsMap } from './consts';

const getNetworkSnapshotId = (type: SnapshotType, index: number) => [type, index].join('-');

const getNetworkSnapshot = (type: SnapshotType, blockTimestamp: number, blockNumber: number): Promise<NetworkSnapshot> => {

}