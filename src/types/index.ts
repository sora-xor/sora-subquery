// SPDX-License-Identifier: Apache-2.0

import { SubstrateBlock, SubstrateEvent, SubstrateExtrinsic } from "@subql/types"
import { Opaque } from 'type-fest'

// Auto-generated , DO NOT EDIT
export * from "./models"
export * from "./interfaces"
export * from "./enums"

export type Block = any;

export type BlockContext = any // SubstrateBlock
export type Event<T extends any> = SubstrateEvent
export type Call<T extends any> = SubstrateExtrinsic

export type AssetId = Opaque<string, 'AssetId'>
export type AssetAmount = Opaque<bigint, 'AssetAmount'>

export type ReferenceSymbol = Opaque<string, 'ReferenceSymbol'>

// { readonly brand: unique symbol }
export type Address = Opaque<string, 'Address'>
export type AddressEthereum = Opaque<string, 'AddressEthereum'>
