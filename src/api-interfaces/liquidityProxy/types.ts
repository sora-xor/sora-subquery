// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types';
import type { AssetId, Balance } from '@polkadot/types/interfaces/runtime';
import type { RewardReason } from 'sora/api-interfaces/sora';

/** @name LPRewardsInfo */
export interface LPRewardsInfo extends Struct {
  readonly amount: Balance;
  readonly currency: AssetId;
  readonly reason: RewardReason;
}

/** @name LPSwapOutcomeInfo */
export interface LPSwapOutcomeInfo extends Struct {
  readonly amount: Balance;
  readonly fee: Balance;
  readonly rewards: Vec<LPRewardsInfo>;
  readonly amount_without_impact: Balance;
}

export type PHANTOM_LIQUIDITYPROXY = 'liquidityProxy';
