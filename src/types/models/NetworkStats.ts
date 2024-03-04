// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type NetworkStatsProps = Omit<NetworkStats, NonNullable<FunctionPropertyNames<NetworkStats>>| '_name'>;

export class NetworkStats implements Entity {

    constructor(
        
            id: string,
        
            totalFees: bigint,
        
            totalAccounts: number,
        
            totalTransactions: number,
        
            totalBridgeIncomingTransactions: number,
        
            totalBridgeOutgoingTransactions: number,
        
    ) {
        
            this.id = id;
        
            this.totalFees = totalFees;
        
            this.totalAccounts = totalAccounts;
        
            this.totalTransactions = totalTransactions;
        
            this.totalBridgeIncomingTransactions = totalBridgeIncomingTransactions;
        
            this.totalBridgeOutgoingTransactions = totalBridgeOutgoingTransactions;
        
    }


    public id: string;

    public totalFees: bigint;

    public totalAccounts: number;

    public totalTransactions: number;

    public totalBridgeIncomingTransactions: number;

    public totalBridgeOutgoingTransactions: number;


    get _name(): string {
        return 'NetworkStats';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save NetworkStats entity without an ID");
        await store.set('NetworkStats', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove NetworkStats entity without an ID");
        await store.remove('NetworkStats', id.toString());
    }

    static async get(id:string): Promise<NetworkStats | undefined>{
        assert((id !== null && id !== undefined), "Cannot get NetworkStats entity without an ID");
        const record = await store.get('NetworkStats', id.toString());
        if (record){
            return this.create(record as NetworkStatsProps);
        }else{
            return;
        }
    }



    static create(record: NetworkStatsProps): NetworkStats {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        
            record.totalFees,
        
            record.totalAccounts,
        
            record.totalTransactions,
        
            record.totalBridgeIncomingTransactions,
        
            record.totalBridgeOutgoingTransactions,
        );
        Object.assign(entity,record);
        return entity;
    }
}
