#!/bin/bash
set -xe
npm install -g @subql/cli@1.6.1
npm install -g typescript
npm install tslib
npm link typescript
yarn
yarn codegen
RESULT=$(subql publish | grep -v 'SubQuery Project uploaded to IPFS: ')
echo $RESULT
subql deployment:deploy \
--useDefaults \
--org=${SUBQUERY_ORG} \
--ipfsCID=$RESULT \
--projectName=${matrix_chain} \
--endpoint=wss://ws.framenode-${endpoint}.sora2.soramitsu.co.jp
echo "New deployment is executed"