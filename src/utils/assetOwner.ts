import { EntityStorage, EntitySnapshotsStorage } from './storage';

import { AssetOwner, AssetOwnerSnapshot, AssetOwnerAccount } from '../types';

import { SubstrateBlock } from '@subql/types';

class AssetOwnerStorage extends EntityStorage<AssetOwner> {
  constructor() {
    super('AssetOwner');
  }

  protected override async loadEntity(id: string): Promise<AssetOwner> {
    return await AssetOwner.get(id);
  }

  public override async createEntity(block: SubstrateBlock, id: string): Promise<AssetOwner> {
    return new AssetOwner(id, []);
  }

  async updateAccess(
    block: SubstrateBlock,
    id: string,
    accountId: string,
    expiresAt: number,
    sbtAssetId
  ): Promise<void> {
    const assetOwner = await this.getEntity(block, id);
    const currentSbtAccesses = assetOwner.sbtAccesses;

    const foundAccount = currentSbtAccesses.find((sbtAccess) => sbtAccess.accountAddress === accountId);

    let updated: Array<AssetOwnerAccount> = [];

    if (foundAccount) {
      updated = currentSbtAccesses.map((sbtAccess) => {
        if (sbtAccess.accountAddress === accountId) {
          return { ...sbtAccess, expiresAt };
        }

        return sbtAccess;
      });
    } else {
      updated = currentSbtAccesses;
      updated.push({ accountAddress: accountId, expiresAt, sbtAssetId });
    }

    assetOwner.sbtAccesses = updated;

    await this.save(block, assetOwner);

    this.log(block, true).debug({ accountId, sbtAssetId }, 'SBT account access privileges updated');
  }
}

// class AssetOwnerSnaphotsStorage extends EntitySnapshotsStorage<AssetOwner, AssetOwnerSnapshot, AssetOwnerStorage> {
//   constructor(assetOwner: AssetOwner) {
//     super('AssetOwnerSnapshot', assetOwner);
//   }

//   protected override async loadEntity(id: string): Promise<AssetOwnerSnapshot> {
//     return await AssetOwnerSnapshot.get(id);
//   }
// }

export const updateSbtAccessOnAccount = async (
  block: SubstrateBlock,
  accountId: string,
  sbtAssetId: string,
  newExpiresAt: string,
  signer: string
): Promise<void> => {
  await assetOwnerStorage.updateAccess(block, signer, accountId, Number(newExpiresAt), sbtAssetId);
};

const assetOwnerStorage = new AssetOwnerStorage();
// export const assetOwnerSnapshotsStorage = new AssetOwnerSnaphotsStorage(assetOwnerStorage);
