#!/bin/sh
set -e

# deleteProject
if [ $fullClean = true ]; then
    echo "👷‍♂️ Start deleting project..."
    subql project:delete-project \
    --org=$SUBQUERY_ORG \
    --projectName=$project
    echo "✅ project $project was deleted"
fi

# Create Project
if [ $createProject = true ] || [ $fullClean = true]; then
    echo "👷‍♂️ Start creating project..."
    subql project:create-project \
    --org=$SUBQUERY_ORG \
    --dedicatedDB=$SUBQUERY_PROJECT_DB \
    --projectName=$project \
    --gitRepo=https://github.com/sora-xor/sora-subquery
    echo "✅ project $project was created"
fi

# Deploying project
if [ $prodslot = true || $createProject = true ] || [ $fullClean = true ] || [ $stageSlot = true ]; then
    yarn
    RESULT=$(subql publish -f project.yaml  | grep -oP ': \K.*')
    HASH=$(yarn config:chainId | grep -oP '0.*' | grep -v 's')
    if [[ $prodslot = true || $createProject = true ]] || [[ $fullClean = true ]]; then
        echo "👷‍♂️ Deploying project in production slot..."
        sed -i '/chainId:/s/'0'/'$HASH'/' project.yaml
        sed -i '/startBlock:/s/1/'$STARTBLOCK'/' project.yaml
        yarn codegen
        subql deployment:deploy \
        --indexerVersion=$SUBQUERY_INDEXER_VERSION \
        --queryVersion=$SUBQUERY_NODE_VERSION \
        --org=$SUBQUERY_ORG \
        --indexerSubscription \
        --querySubscription \
        --queryTimeout=20000 \
        --disableHistorical \
        --useDefaults \
        --ipfsCID=$RESULT \
        --projectName=$project \
        --endpoint=$endpoint
        echo "✅ New deployment in production slot was executed from block from $STARTBLOCK block!"
        elif [ $stageSlot = true ]; then
        echo "👷‍♂️ Deploying project in staging slot..."
        sed -i '/chainId:/s/'0'/'$HASH'/' project.yaml
        sed -i '/startBlock:/s/1/'$STARTBLOCKSTG'/' project.yaml
        yarn codegen
        subql deployment:deploy \
        --indexerVersion=$SUBQUERY_INDEXER_VERSION_STAGING \
        --queryVersion=$SUBQUERY_NODE_VERSION_STAGING \
        --org=$SUBQUERY_ORG \
        --useDefaults \
        --indexerSubscription \
        --querySubscription \
        --queryTimeout=20000 \
        --disableHistorical \
        --ipfsCID=$RESULT \
        --projectName=$project \
        --endpoint=$endpoint \
        --type=stage
        echo " ✅ New deployment in staging slot was executed from $STARTBLOCKSTG block!"
    fi
fi