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