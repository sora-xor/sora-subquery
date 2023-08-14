#!/bin/bash -x
set -e

SUBQUERY_CLI_VERSION="1.10.1"
echo $INDEXER_VERSION_STAGING $stageSlot
echo $SUBQL_ACCESS_TOKEN

# deleteProject
if [ "$fullClean" = true ]; then
    printf "👷‍♂️ Start deleting project... \n"
    subql project:delete-project \
    --org=$SUBQUERY_ORG \
    --projectName=$project
    printf "✅ project $project was deleted \n"
fi

# Create Project
if [ "$createProject" = true ] || [ "$fullClean" = true ]; then
    printf "👷‍♂️ Start creating project... \n"
    subql project:create-project \
    --org=$SUBQUERY_ORG \
    --dedicatedDB=$SUBQUERY_PROJECT_DB \
    --projectName=$project \
    --gitRepo=https://github.com/sora-xor/sora-subquery ##
    printf "✅ project $project was created \n"
fi

# Deploying project
if [ "$prodslot" = true ] || [ "$createProject" = true ] || [ "$fullClean" = true ] || [ "$stageSlot" = true ]; then
    printf 'Building project \n'
    yarn
    RESULT='$(subql publish -f project.yaml  | grep -oE ': \K.*')'
    HASH='$(yarn config:chainId | grep -oE '0.*' | grep -v 's')'
    if [ "$prodslot" = true ] || [ "$createProject" = true ] || [ "$fullClean" = true ]; then
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
        printf "✅ New deployment in production slot was executed from block from $STARTBLOCK block! \n"
        elif [ "$stageSlot" = true ]; then
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
        printf " ✅ New deployment in staging slot was executed from $STARTBLOCKSTG block! \n"
    fi
fi