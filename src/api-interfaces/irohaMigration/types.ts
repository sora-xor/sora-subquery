// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, Vec } from '@polkadot/types';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name PendingMultisigAccount */
export interface PendingMultisigAccount extends Struct {
  readonly approving_accounts: Vec<AccountId>;
  readonly migrate_at: Option<BlockNumber>;
}

export type PHANTOM_IROHAMIGRATION = 'irohaMigration';
