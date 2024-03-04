// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type UpdatesStreamProps = Omit<UpdatesStream, NonNullable<FunctionPropertyNames<UpdatesStream>>| '_name'>;

export class UpdatesStream implements Entity {

    constructor(
        
            id: string,
        
            block: number,
        
            data: string,
        
    ) {
        
            this.id = id;
        
            this.block = block;
        
            this.data = data;
        
    }


    public id: string;

    public block: number;

    public data: string;


    get _name(): string {
        return 'UpdatesStream';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save UpdatesStream entity without an ID");
        await store.set('UpdatesStream', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove UpdatesStream entity without an ID");
        await store.remove('UpdatesStream', id.toString());
    }

    static async get(id:string): Promise<UpdatesStream | undefined>{
        assert((id !== null && id !== undefined), "Cannot get UpdatesStream entity without an ID");
        const record = await store.get('UpdatesStream', id.toString());
        if (record){
            return this.create(record as UpdatesStreamProps);
        }else{
            return;
        }
    }



    static create(record: UpdatesStreamProps): UpdatesStream {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.block,
        
            record.data,
        );
        Object.assign(entity,record);
        return entity;
    }
}
