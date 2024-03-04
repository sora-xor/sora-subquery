// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type StakingEraValidatorProps = Omit<StakingEraValidator, NonNullable<FunctionPropertyNames<StakingEraValidator>>| '_name'>;

export class StakingEraValidator implements Entity {

    constructor(
        
            id: string,
        
            eraId: string,
        
            validatorId: string,
        
            ownBond: bigint,
        
            totalBond: bigint,
        
            rewardAmount: bigint,
        
            stakerId: string,
        
    ) {
        
            this.id = id;
        
            this.eraId = eraId;
        
            this.validatorId = validatorId;
        
            this.ownBond = ownBond;
        
            this.totalBond = totalBond;
        
            this.rewardAmount = rewardAmount;
        
            this.stakerId = stakerId;
        
    }


    public id: string;

    public eraId: string;

    public validatorId: string;

    public ownBond: bigint;

    public totalBond: bigint;

    public rewardAmount: bigint;

    public stakerId: string;


    get _name(): string {
        return 'StakingEraValidator';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingEraValidator entity without an ID");
        await store.set('StakingEraValidator', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingEraValidator entity without an ID");
        await store.remove('StakingEraValidator', id.toString());
    }

    static async get(id:string): Promise<StakingEraValidator | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingEraValidator entity without an ID");
        const record = await store.get('StakingEraValidator', id.toString());
        if (record){
            return this.create(record as StakingEraValidatorProps);
        }else{
            return;
        }
    }


    static async getByEraId(eraId: string): Promise<StakingEraValidator[] | undefined>{
      
      const records = await store.getByField('StakingEraValidator', 'eraId', eraId);
      return records.map(record => this.create(record as StakingEraValidatorProps));
      
    }

    static async getByValidatorId(validatorId: string): Promise<StakingEraValidator[] | undefined>{
      
      const records = await store.getByField('StakingEraValidator', 'validatorId', validatorId);
      return records.map(record => this.create(record as StakingEraValidatorProps));
      
    }

    static async getByStakerId(stakerId: string): Promise<StakingEraValidator[] | undefined>{
      
      const records = await store.getByField('StakingEraValidator', 'stakerId', stakerId);
      return records.map(record => this.create(record as StakingEraValidatorProps));
      
    }


    static create(record: StakingEraValidatorProps): StakingEraValidator {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.eraId,
        
            record.validatorId,
        
            record.ownBond,
        
            record.totalBond,
        
            record.rewardAmount,
        
            record.stakerId,
        );
        Object.assign(entity,record);
        return entity;
    }
}
