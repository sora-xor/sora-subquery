// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';



import {
    PayeeType,
} from '../enums'


export type StakingStakerProps = Omit<StakingStaker, NonNullable<FunctionPropertyNames<StakingStaker>>| '_name'>;

export class StakingStaker implements Entity {

    constructor(
        
            id: string,
        
            payeeType: PayeeType,
        
        
        
    ) {
        
            this.id = id;
        
            this.payeeType = payeeType;
        
    }


    public id: string;

    public payeeType: PayeeType;

    public payee?: string;

    public controller?: string;


    get _name(): string {
        return 'StakingStaker';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StakingStaker entity without an ID");
        await store.set('StakingStaker', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StakingStaker entity without an ID");
        await store.remove('StakingStaker', id.toString());
    }

    static async get(id:string): Promise<StakingStaker | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StakingStaker entity without an ID");
        const record = await store.get('StakingStaker', id.toString());
        if (record){
            return this.create(record as StakingStakerProps);
        }else{
            return;
        }
    }



    static create(record: StakingStakerProps): StakingStaker {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.payeeType,
        );
        Object.assign(entity,record);
        return entity;
    }
}
