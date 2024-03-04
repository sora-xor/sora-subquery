import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v70 from '../v70'

export const heartbeat =  {
    name: 'ImOnline.heartbeat',
    /**
     * # <weight>
     * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
     *   length of `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *   `ReceivedHeartbeats`
     * - DbWrites: `ReceivedHeartbeats`
     * # </weight>
     */
    v70: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v70.Heartbeat,
            signature: sts.bytes(),
        })
    ),
}
