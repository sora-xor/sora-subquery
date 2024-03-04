import {sts, Result, Option, Bytes, BitSequence} from './support'

export type SubNetworkId = SubNetworkId_Custom | SubNetworkId_Kusama | SubNetworkId_Mainnet | SubNetworkId_Polkadot | SubNetworkId_Rococo

export interface SubNetworkId_Custom {
    __kind: 'Custom'
    value: number
}

export interface SubNetworkId_Kusama {
    __kind: 'Kusama'
}

export interface SubNetworkId_Mainnet {
    __kind: 'Mainnet'
}

export interface SubNetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface SubNetworkId_Rococo {
    __kind: 'Rococo'
}

export interface GenericCommitmentWithBlock {
    blockNumber: number
    commitment: GenericCommitment
}

export type GenericCommitment = GenericCommitment_EVM | GenericCommitment_Sub

export interface GenericCommitment_EVM {
    __kind: 'EVM'
    value: Type_533
}

export interface GenericCommitment_Sub {
    __kind: 'Sub'
    value: Commitment
}

export interface Commitment {
    messages: BridgeMessage[]
    nonce: bigint
}

export interface BridgeMessage {
    payload: Bytes
    timepoint: GenericTimepoint
}

export type GenericTimepoint = GenericTimepoint_EVM | GenericTimepoint_Parachain | GenericTimepoint_Pending | GenericTimepoint_Sora | GenericTimepoint_Unknown

export interface GenericTimepoint_EVM {
    __kind: 'EVM'
    value: bigint
}

export interface GenericTimepoint_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface GenericTimepoint_Pending {
    __kind: 'Pending'
}

export interface GenericTimepoint_Sora {
    __kind: 'Sora'
    value: number
}

export interface GenericTimepoint_Unknown {
    __kind: 'Unknown'
}

export interface Type_533 {
    nonce: bigint
    totalMaxGas: bigint
    messages: Message[]
}

export interface Message {
    target: H160
    maxGas: bigint
    payload: Bytes
}

export type H160 = Bytes

export const GenericCommitmentWithBlock: sts.Type<GenericCommitmentWithBlock> = sts.struct(() => {
    return  {
        blockNumber: sts.number(),
        commitment: GenericCommitment,
    }
})

export const GenericCommitment: sts.Type<GenericCommitment> = sts.closedEnum(() => {
    return  {
        EVM: Type_533,
        Sub: Commitment,
    }
})

export const Commitment: sts.Type<Commitment> = sts.struct(() => {
    return  {
        messages: sts.array(() => BridgeMessage),
        nonce: sts.bigint(),
    }
})

export const BridgeMessage: sts.Type<BridgeMessage> = sts.struct(() => {
    return  {
        payload: sts.bytes(),
        timepoint: GenericTimepoint,
    }
})

export const GenericTimepoint: sts.Type<GenericTimepoint> = sts.closedEnum(() => {
    return  {
        EVM: sts.bigint(),
        Parachain: sts.number(),
        Pending: sts.unit(),
        Sora: sts.number(),
        Unknown: sts.unit(),
    }
})

export const Type_533: sts.Type<Type_533> = sts.struct(() => {
    return  {
        nonce: sts.bigint(),
        totalMaxGas: sts.bigint(),
        messages: sts.array(() => Message),
    }
})

export const Message: sts.Type<Message> = sts.struct(() => {
    return  {
        target: H160,
        maxGas: sts.bigint(),
        payload: sts.bytes(),
    }
})

export const H160 = sts.bytes()

export const SubNetworkId: sts.Type<SubNetworkId> = sts.closedEnum(() => {
    return  {
        Custom: sts.number(),
        Kusama: sts.unit(),
        Mainnet: sts.unit(),
        Polkadot: sts.unit(),
        Rococo: sts.unit(),
    }
})
