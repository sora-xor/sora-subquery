// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Struct, U8aFixed, i128, u16, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId, AssetId, Balance, FixedU128, H512, Pays, Weight } from '@polkadot/types/interfaces/runtime';
import type { DispatchError } from '@polkadot/types/interfaces/system';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AssetId32 */
export interface AssetId32 extends U8aFixed {}

/** @name AssetIdOf */
export interface AssetIdOf extends AssetId {}

/** @name AssetName */
export interface AssetName extends Bytes {}

/** @name AssetSymbol */
export interface AssetSymbol extends Bytes {}

/** @name BalancePrecision */
export interface BalancePrecision extends u8 {}

/** @name BasisPoints */
export interface BasisPoints extends u16 {}

/** @name ChargeFeeInfo */
export interface ChargeFeeInfo extends Struct {
  readonly tip: Compact<Balance>;
  readonly target_asset_id: AssetId;
}

/** @name CurrencyId */
export interface CurrencyId extends AssetId {}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends AssetId {}

/** @name DEXId */
export interface DEXId extends u32 {}

/** @name DEXIdOf */
export interface DEXIdOf extends DEXId {}

/** @name DEXInfo */
export interface DEXInfo extends Struct {
  readonly base_asset_id: AssetId;
  readonly default_fee: BasisPoints;
  readonly default_protocol_fee: BasisPoints;
}

/** @name DispatchErrorWithPostInfoTPostDispatchInfo */
export interface DispatchErrorWithPostInfoTPostDispatchInfo extends Struct {
  readonly post_info: PostDispatchInfo;
  readonly error: DispatchError;
}

/** @name DispatchResultWithPostInfo */
export interface DispatchResultWithPostInfo extends Result<PostDispatchInfo, DispatchErrorWithPostInfoTPostDispatchInfo> {
  readonly isErr: boolean;
  readonly asErr: DispatchErrorWithPostInfoTPostDispatchInfo;
  /** @deprecated Use isErr */
  readonly isError: boolean;
  /** @deprecated Use asErr */
  readonly asError: DispatchErrorWithPostInfoTPostDispatchInfo;
  readonly isOk: boolean;
  readonly asOk: PostDispatchInfo;
}

/** @name DistributionAccounts */
export interface DistributionAccounts extends Null {}

/** @name Duration */
export interface Duration extends Null {}

/** @name Farm */
export interface Farm extends Null {}

/** @name Farmer */
export interface Farmer extends Null {}

/** @name FarmId */
export interface FarmId extends u64 {}

/** @name FilterMode */
export interface FilterMode extends Enum {
  readonly isDisabled: boolean;
  readonly isForbidSelected: boolean;
  readonly isAllowSelected: boolean;
}

/** @name Fixed */
export interface Fixed extends FixedU128 {}

/** @name HolderId */
export interface HolderId extends AccountId {}

/** @name LiquiditySourceType */
export interface LiquiditySourceType extends Enum {
  readonly isXykPool: boolean;
  readonly isBondingCurvePool: boolean;
  readonly isMulticollateralBondingCurvePool: boolean;
  readonly isMockPool: boolean;
  readonly isMockPool2: boolean;
  readonly isMockPool3: boolean;
  readonly isMockPool4: boolean;
}

/** @name MarketMakerInfo */
export interface MarketMakerInfo extends Struct {
  readonly count: u32;
  readonly volume: Balance;
}

/** @name Mode */
export interface Mode extends Enum {
  readonly isPermit: boolean;
  readonly isForbid: boolean;
}

/** @name MultiCurrencyBalanceOf */
export interface MultiCurrencyBalanceOf extends Null {}

/** @name MultisigAccount */
export interface MultisigAccount extends Null {}

/** @name OracleKey */
export interface OracleKey extends AssetId {}

/** @name OwnerId */
export interface OwnerId extends AccountId {}

/** @name PendingMultisigAccount */
export interface PendingMultisigAccount extends Null {}

/** @name Permission */
export interface Permission extends Null {}

/** @name PermissionId */
export interface PermissionId extends u32 {}

/** @name PostDispatchInfo */
export interface PostDispatchInfo extends Struct {
  readonly actual_weight: Option<Weight>;
  readonly pays_fee: Pays;
}

/** @name Public */
export interface Public extends U8aFixed {}

/** @name QuoteAmount */
export interface QuoteAmount extends Enum {
  readonly isWithDesiredInput: boolean;
  readonly asWithDesiredInput: QuoteWithDesiredInput;
  readonly isWithDesiredOutput: boolean;
  readonly asWithDesiredOutput: QuoteWithDesiredOutput;
}

/** @name QuoteWithDesiredInput */
export interface QuoteWithDesiredInput extends Struct {
  readonly desired_amount_in: Balance;
}

/** @name QuoteWithDesiredOutput */
export interface QuoteWithDesiredOutput extends Struct {
  readonly desired_amount_out: Balance;
}

/** @name RewardInfo */
export interface RewardInfo extends Struct {
  readonly limit: Balance;
  readonly total_available: Balance;
  readonly rewards: BTreeMap<RewardReason, Balance>;
}

/** @name RewardReason */
export interface RewardReason extends Enum {
  readonly isUnspecified: boolean;
  readonly isBuyOnBondingCurve: boolean;
}

/** @name Scope */
export interface Scope extends Enum {
  readonly isLimited: boolean;
  readonly asLimited: H512;
  readonly isUnlimited: boolean;
}

/** @name SmoothPriceState */
export interface SmoothPriceState extends Null {}

/** @name StorageVersion */
export interface StorageVersion extends Null {}

/** @name SwapAction */
export interface SwapAction extends Null {}

/** @name SwapAmount */
export interface SwapAmount extends Enum {
  readonly isWithDesiredInput: boolean;
  readonly asWithDesiredInput: SwapWithDesiredInput;
  readonly isWithDesiredOutput: boolean;
  readonly asWithDesiredOutput: SwapWithDesiredOutput;
}

/** @name SwapOutcome */
export interface SwapOutcome extends Struct {
  readonly amount: Balance;
  readonly fee: Balance;
}

/** @name SwapOutcomeInfo */
export interface SwapOutcomeInfo extends Struct {
  readonly amount: Balance;
  readonly fee: Balance;
}

/** @name SwapVariant */
export interface SwapVariant extends Enum {
  readonly isWithDesiredInput: boolean;
  readonly isWithDesiredOutput: boolean;
}

/** @name SwapWithDesiredInput */
export interface SwapWithDesiredInput extends Struct {
  readonly desired_amount_in: Balance;
  readonly min_amount_out: Balance;
}

/** @name SwapWithDesiredOutput */
export interface SwapWithDesiredOutput extends Struct {
  readonly desired_amount_out: Balance;
  readonly max_amount_in: Balance;
}

/** @name TechAccountId */
export interface TechAccountId extends Enum {
  readonly isPure: boolean;
  readonly asPure: ITuple<[DEXId, TechPurpose]>;
  readonly isGeneric: boolean;
  readonly asGeneric: ITuple<[Bytes, Bytes]>;
  readonly isWrapped: boolean;
  readonly asWrapped: AccountId;
  readonly isWrappedRepr: boolean;
  readonly asWrappedRepr: AccountId;
}

/** @name TechAccountIdPrimitive */
export interface TechAccountIdPrimitive extends Null {}

/** @name TechAmount */
export interface TechAmount extends Amount {}

/** @name TechAssetId */
export interface TechAssetId extends Null {}

/** @name TechBalance */
export interface TechBalance extends Balance {}

/** @name TechPurpose */
export interface TechPurpose extends Enum {
  readonly isFeeCollector: boolean;
  readonly isLiquidityKeeper: boolean;
  readonly asLiquidityKeeper: TradingPair;
  readonly isIdentifier: boolean;
  readonly asIdentifier: Bytes;
}

/** @name TradingPair */
export interface TradingPair extends Struct {
  readonly base_asset_id: AssetId;
  readonly target_asset_id: AssetId;
}

/** @name ValidationFunction */
export interface ValidationFunction extends Null {}

export type PHANTOM_SORA = 'sora';
