import { EntityStorage } from './storage';

import { AssetOwner, AssetOwnerAccount } from '../types';

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

  async updateAccess(block: SubstrateBlock, id: string, accountId: string, expiresAt: number): Promise<void> {
    const assetOwner = await this.getEntity(block, id);
    const currentSbtAccesses = assetOwner.sbtAccesses;

    const newRecord = { accountAddress: accountId, expiresAt };

    // update if exists, attach if it's new
    const updated = currentSbtAccesses
      .filter((record: AssetOwnerAccount) => record.accountAddress !== newRecord.accountAddress)
      .concat(newRecord);

    assetOwner.sbtAccesses = updated;

    await this.save(block, assetOwner, true);

    this.log(block, true).debug({ accountId }, 'SBT account access privileges updated');
  }
}

export const updateSbtAccessOnAccount = async (
  block: SubstrateBlock,
  accountId: string,
  sbtAssetId: string,
  newExpiresAt: string,
  signer: string
): Promise<void> => {
  await assetOwnerStorage.updateAccess(block, `${signer}-${sbtAssetId}`, accountId, Number(newExpiresAt));
};

export const assetOwnerStorage = new AssetOwnerStorage();
