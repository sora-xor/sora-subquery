// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type AssetProps = Omit<Asset, NonNullable<FunctionPropertyNames<Asset>>| '_name'>;

export class Asset implements Entity {

    constructor(
        
            id: string,
        
            priceUSD: string,
        
            supply: bigint,
        
        
        
        
        
        
        
        
    ) {
        
            this.id = id;
        
            this.priceUSD = priceUSD;
        
            this.supply = supply;
        
    }


    public id: string;

    public priceUSD: string;

    public supply: bigint;

    public liquidity?: bigint;

    public liquidityBooks?: bigint;

    public priceChangeDay?: number;

    public priceChangeWeek?: number;

    public volumeDayUSD?: number;

    public volumeWeekUSD?: number;

    public velocity?: number;


    get _name(): string {
        return 'Asset';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Asset entity without an ID");
        await store.set('Asset', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Asset entity without an ID");
        await store.remove('Asset', id.toString());
    }

    static async get(id:string): Promise<Asset | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Asset entity without an ID");
        const record = await store.get('Asset', id.toString());
        if (record){
            return this.create(record as AssetProps);
        }else{
            return;
        }
    }



    static create(record: AssetProps): Asset {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.priceUSD,
        
            record.supply,
        );
        Object.assign(entity,record);
        return entity;
    }
}
