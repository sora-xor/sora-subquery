// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type StakingRewardProps = Omit<StakingReward, NonNullable<FunctionPropertyNames<StakingReward>>| '_name'>;

export class StakingReward implements Entity {

    constructor(
        
            id: string,
        
            amount: string,
        
            stakerId: string,
        
        
            eraId: string,
        
            timestamp: number,
        
    ) {
        
            this.id = id;
        
            this.amount = amount;
        
            this.stakerId = stakerId;
        
            this.eraId = eraId;
        
            this.timestamp = timestamp;
        
    }


    public id: string;

    public amount: string;

    public stakerId: string;

    public payee?: string;

    public eraId: string;

    public timestamp: number;


    get _name(): string {
        return 'StakingReward';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingReward entity without an ID");
        await store.set('StakingReward', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingReward entity without an ID");
        await store.remove('StakingReward', id.toString());
    }

    static async get(id:string): Promise<StakingReward | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingReward entity without an ID");
        const record = await store.get('StakingReward', id.toString());
        if (record){
            return this.create(record as StakingRewardProps);
        }else{
            return;
        }
    }


    static async getByStakerId(stakerId: string): Promise<StakingReward[] | undefined>{
      
      const records = await store.getByField('StakingReward', 'stakerId', stakerId);
      return records.map(record => this.create(record as StakingRewardProps));
      
    }

    static async getByPayee(payee: string): Promise<StakingReward[] | undefined>{
      
      const records = await store.getByField('StakingReward', 'payee', payee);
      return records.map(record => this.create(record as StakingRewardProps));
      
    }

    static async getByEraId(eraId: string): Promise<StakingReward[] | undefined>{
      
      const records = await store.getByField('StakingReward', 'eraId', eraId);
      return records.map(record => this.create(record as StakingRewardProps));
      
    }


    static create(record: StakingRewardProps): StakingReward {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.amount,
        
            record.stakerId,
        
            record.eraId,
        
            record.timestamp,
        );
        Object.assign(entity,record);
        return entity;
    }
}
