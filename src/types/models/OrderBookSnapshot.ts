// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    AssetPrice,
} from '../interfaces'



import {
    SnapshotType,
} from '../enums'


export type OrderBookSnapshotProps = Omit<OrderBookSnapshot, NonNullable<FunctionPropertyNames<OrderBookSnapshot>>| '_name'>;

export class OrderBookSnapshot implements Entity {

    constructor(
        
            id: string,
        
            orderBookId: string,
        
            timestamp: number,
        
            type: SnapshotType,
        
            price: AssetPrice,
        
            baseAssetVolume: string,
        
            quoteAssetVolume: string,
        
            volumeUSD: string,
        
            liquidityUSD: string,
        
    ) {
        
            this.id = id;
        
            this.orderBookId = orderBookId;
        
            this.timestamp = timestamp;
        
            this.type = type;
        
            this.price = price;
        
            this.baseAssetVolume = baseAssetVolume;
        
            this.quoteAssetVolume = quoteAssetVolume;
        
            this.volumeUSD = volumeUSD;
        
            this.liquidityUSD = liquidityUSD;
        
    }


    public id: string;

    public orderBookId: string;

    public timestamp: number;

    public type: SnapshotType;

    public price: AssetPrice;

    public baseAssetVolume: string;

    public quoteAssetVolume: string;

    public volumeUSD: string;

    public liquidityUSD: string;


    get _name(): string {
        return 'OrderBookSnapshot';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save OrderBookSnapshot entity without an ID");
        await store.set('OrderBookSnapshot', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove OrderBookSnapshot entity without an ID");
        await store.remove('OrderBookSnapshot', id.toString());
    }

    static async get(id:string): Promise<OrderBookSnapshot | undefined>{
        assert((id !== null && id !== undefined), "Cannot get OrderBookSnapshot entity without an ID");
        const record = await store.get('OrderBookSnapshot', id.toString());
        if (record){
            return this.create(record as OrderBookSnapshotProps);
        }else{
            return;
        }
    }


    static async getByOrderBookId(orderBookId: string): Promise<OrderBookSnapshot[] | undefined>{
      
      const records = await store.getByField('OrderBookSnapshot', 'orderBookId', orderBookId);
      return records.map(record => this.create(record as OrderBookSnapshotProps));
      
    }


    static create(record: OrderBookSnapshotProps): OrderBookSnapshot {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.orderBookId,
        
            record.timestamp,
        
            record.type,
        
            record.price,
        
            record.baseAssetVolume,
        
            record.quoteAssetVolume,
        
            record.volumeUSD,
        
            record.liquidityUSD,
        );
        Object.assign(entity,record);
        return entity;
    }
}
