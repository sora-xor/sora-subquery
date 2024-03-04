// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';



import {
    SnapshotType,
} from '../enums'


export type NetworkSnapshotProps = Omit<NetworkSnapshot, NonNullable<FunctionPropertyNames<NetworkSnapshot>>| '_name'>;

export class NetworkSnapshot implements Entity {

    constructor(
        
            id: string,
        
            type: SnapshotType,
        
            timestamp: number,
        
            accounts: number,
        
            transactions: number,
        
            fees: bigint,
        
            liquidityUSD: string,
        
            volumeUSD: string,
        
            bridgeIncomingTransactions: number,
        
            bridgeOutgoingTransactions: number,
        
    ) {
        
            this.id = id;
        
            this.type = type;
        
            this.timestamp = timestamp;
        
            this.accounts = accounts;
        
            this.transactions = transactions;
        
            this.fees = fees;
        
            this.liquidityUSD = liquidityUSD;
        
            this.volumeUSD = volumeUSD;
        
            this.bridgeIncomingTransactions = bridgeIncomingTransactions;
        
            this.bridgeOutgoingTransactions = bridgeOutgoingTransactions;
        
    }


    public id: string;

    public type: SnapshotType;

    public timestamp: number;

    public accounts: number;

    public transactions: number;

    public fees: bigint;

    public liquidityUSD: string;

    public volumeUSD: string;

    public bridgeIncomingTransactions: number;

    public bridgeOutgoingTransactions: number;


    get _name(): string {
        return 'NetworkSnapshot';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save NetworkSnapshot entity without an ID");
        await store.set('NetworkSnapshot', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove NetworkSnapshot entity without an ID");
        await store.remove('NetworkSnapshot', id.toString());
    }

    static async get(id:string): Promise<NetworkSnapshot | undefined>{
        assert((id !== null && id !== undefined), "Cannot get NetworkSnapshot entity without an ID");
        const record = await store.get('NetworkSnapshot', id.toString());
        if (record){
            return this.create(record as NetworkSnapshotProps);
        }else{
            return;
        }
    }



    static create(record: NetworkSnapshotProps): NetworkSnapshot {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.type,
        
            record.timestamp,
        
            record.accounts,
        
            record.transactions,
        
            record.fees,
        
            record.liquidityUSD,
        
            record.volumeUSD,
        
            record.bridgeIncomingTransactions,
        
            record.bridgeOutgoingTransactions,
        );
        Object.assign(entity,record);
        return entity;
    }
}
