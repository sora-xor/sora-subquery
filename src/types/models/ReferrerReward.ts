// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type ReferrerRewardProps = Omit<ReferrerReward, NonNullable<FunctionPropertyNames<ReferrerReward>>| '_name'>;

export class ReferrerReward implements Entity {

    constructor(
        
            id: string,
        
            referral: string,
        
            referrer: string,
        
            updated: number,
        
            amount: bigint,
        
    ) {
        
            this.id = id;
        
            this.referral = referral;
        
            this.referrer = referrer;
        
            this.updated = updated;
        
            this.amount = amount;
        
    }


    public id: string;

    public referral: string;

    public referrer: string;

    public updated: number;

    public amount: bigint;


    get _name(): string {
        return 'ReferrerReward';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ReferrerReward entity without an ID");
        await store.set('ReferrerReward', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ReferrerReward entity without an ID");
        await store.remove('ReferrerReward', id.toString());
    }

    static async get(id:string): Promise<ReferrerReward | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ReferrerReward entity without an ID");
        const record = await store.get('ReferrerReward', id.toString());
        if (record){
            return this.create(record as ReferrerRewardProps);
        }else{
            return;
        }
    }


    static async getByReferral(referral: string): Promise<ReferrerReward[] | undefined>{
      
      const records = await store.getByField('ReferrerReward', 'referral', referral);
      return records.map(record => this.create(record as ReferrerRewardProps));
      
    }


    static create(record: ReferrerRewardProps): ReferrerReward {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.referral,
        
            record.referrer,
        
            record.updated,
        
            record.amount,
        );
        Object.assign(entity,record);
        return entity;
    }
}
