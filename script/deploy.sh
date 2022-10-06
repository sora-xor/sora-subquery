#!/bin/bash
set -xe
npm install -g @subql/cli@1.6.1
npm install -g typescript
npm install tslib
npm link typescript
yarn
yarn codegen
RESULT=$(subql publish | grep -oP ': \K.*')
echo $RESULT
subql deployment:deploy \
--useDefaults \
--org=sora-xor \
--ipfsCID=${result} \
--projectName=sora-dev \
--endpoint=wss://ws.framenode-3.s3.dev.sora2.soramitsu.co.jp
echo "New deployment is executed"