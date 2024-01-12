import { SubstrateBlock } from '@subql/types';

import { UpdatesStream } from "../types";

const PriceUpdateStreamId = 'price';
const PoolXYKApyUpdateStreamId = 'apy';
const AssetRegistrationStreamId = 'assetRegistration';

class BlockUpdatesStream {
  public readonly id!: string;
  private storage!: Map<string, string>;

  constructor(id: string) {
    this.id = id;
    this.storage = new Map();
  }

  get hasUpdate(): boolean {
    return this.storage.size !== 0;
  }

  async update(id: string, value: string) {
    this.storage.set(id, value);
  }

  async sync(block: SubstrateBlock) {
    await this.syncData(block);
    this.clear();
  }

  private async get(): Promise<UpdatesStream> {
    let entity = await UpdatesStream.get(this.id);

    if (!entity) {
      entity = new UpdatesStream(this.id, 0, '');
    }

    return entity;
  }

  private async syncData(block: SubstrateBlock): Promise<void> {
    const entity = await this.get();
    const updates = {};

    for (const [id, value] of this.storage.entries()) {
      updates[id] = value;
    }

    entity.data = JSON.stringify(updates);
    entity.block = block.block.header.number.toNumber();

    await entity.save();
  }

  private clear() {
    this.storage.clear();
  }
}

export const priceUpdatesStream = new BlockUpdatesStream(PriceUpdateStreamId);
export const poolXykApyUpdatesStream = new BlockUpdatesStream(PoolXYKApyUpdateStreamId);
export const assetRegistrationStream = new BlockUpdatesStream(AssetRegistrationStreamId);
