// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    AssetPrice,

    AssetVolume,
} from '../interfaces'



import {
    SnapshotType,
} from '../enums'


export type AssetSnapshotProps = Omit<AssetSnapshot, NonNullable<FunctionPropertyNames<AssetSnapshot>>| '_name'>;

export class AssetSnapshot implements Entity {

    constructor(
        
            id: string,
        
            assetId: string,
        
            timestamp: number,
        
            type: SnapshotType,
        
        
        
            supply: bigint,
        
            mint: bigint,
        
            burn: bigint,
        
    ) {
        
            this.id = id;
        
            this.assetId = assetId;
        
            this.timestamp = timestamp;
        
            this.type = type;
        
            this.supply = supply;
        
            this.mint = mint;
        
            this.burn = burn;
        
    }


    public id: string;

    public assetId: string;

    public timestamp: number;

    public type: SnapshotType;

    public priceUSD?: AssetPrice;

    public volume?: AssetVolume;

    public supply: bigint;

    public mint: bigint;

    public burn: bigint;


    get _name(): string {
        return 'AssetSnapshot';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save AssetSnapshot entity without an ID");
        await store.set('AssetSnapshot', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove AssetSnapshot entity without an ID");
        await store.remove('AssetSnapshot', id.toString());
    }

    static async get(id:string): Promise<AssetSnapshot | undefined>{
        assert((id !== null && id !== undefined), "Cannot get AssetSnapshot entity without an ID");
        const record = await store.get('AssetSnapshot', id.toString());
        if (record){
            return this.create(record as AssetSnapshotProps);
        }else{
            return;
        }
    }


    static async getByAssetId(assetId: string): Promise<AssetSnapshot[] | undefined>{
      
      const records = await store.getByField('AssetSnapshot', 'assetId', assetId);
      return records.map(record => this.create(record as AssetSnapshotProps));
      
    }


    static create(record: AssetSnapshotProps): AssetSnapshot {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.assetId,
        
            record.timestamp,
        
            record.type,
        
            record.supply,
        
            record.mint,
        
            record.burn,
        );
        Object.assign(entity,record);
        return entity;
    }
}
