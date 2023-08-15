#!/bin/bash
set -e

# vars
endpoint="$(cat project.yaml | grep endpoint: | grep -oE ': \wss.*' | sed 's/: //')"
org="$(echo $gitaddress | sed 's/github.com//' | sed 's/\\[|\\]//g' | awk -F '/' '{print $2}')"
query_version="$(cat project.yaml | awk -F ": " '/query:/ {getline; getline; print $2}')"
indexer_version="$(cat project.yaml | awk -F ": " '/node:/ {getline; getline; print $2}')"
if [ $org = 'sora-xor' ]; then
    db='sora'
else
    db=$org
fi

# deleteProject
if [ "$fullClean" = true ]; then
    printf "👷‍♂️ Start deleting project... \n"
    subql project:delete-project \
    --org=$org \
    --projectName=$project
    printf "✅ project $project was deleted \n"
fi

# Create Project
if [ "$createProject" = true ] || [ "$fullClean" = true ]; then
    printf "👷‍♂️ Start creating project... \n"
    subql project:create-project \
    --org=$org \
    --dedicatedDB=$db \
    --projectName=$project \
    --gitRepo=https://$gitaddress
    printf "✅ project $project was created \n"
fi


deploy="subql deployment:deploy \
--indexerVersion=v$indexer_version \
--queryVersion=v$query_version \
--org=$org \
--indexerSubscription \
--querySubscription \
--queryTimeout=20000 \
--disableHistorical \
--useDefaults \
--ipfsCID=$RESULT \
--projectName=$project \
--endpoint=$endpoint
"

if [ "$stageSlot" = true ]; then
    deploy+=' \'
    deploy+=" --type=stage"
fi

# Deploying project
if [ "$prodslot" = true ] || [ "$createProject" = true ] || [ "$fullClean" = true ] || [ "$stageSlot" = true ]; then
    printf 'Building project \n'
    yarn
    HASH="$(awk '/0.*/ && !/s/' <<< "$(yarn config:chainId)")"
    if [ "$prodslot" = true ] || [ "$createProject" = true ] || [ "$fullClean" = true ]; then
        echo "👷‍♂️ Deploying project in production slot..."
        sed -i '/chainId:/s/'0'/'$HASH'/' project.yaml
        sed -i '/startBlock:/s/1/'$STARTBLOCK'/' project.yaml
        yarn codegen
        RESULT=$(subql publish -f project.yaml | grep -oE ': .*' | awk '{print $2}')
        eval $deploy
        printf "✅ New deployment in production slot was executed from block from $STARTBLOCK block! \n"
        if [ "$stageSlot" = true ]; then
            printf "✅ New deployment in staging slot was executed from block from $STARTBLOCKSTG block! \n"
        fi
    fi
    # if [ "$stageSlot" = true ]; then
    #     echo "👷‍♂️ Deploying project in staging slot..."
    #     sed -i '/chainId:/s/'0'/'$HASH'/' project.yaml
    #     sed -i '/startBlock:/s/1/'$STARTBLOCKSTG'/' project.yaml
    #     yarn codegen
    #     RESULT=$(subql publish -f project.yaml | grep -oE ': .*' | awk '{print $2}')
    #     subql deployment:deploy \
    #     --indexerVersion=v$indexer_version \
    #     --queryVersion=v$query_version \
    #     --org=$org \
    #     --useDefaults \
    #     --indexerSubscription \
    #     --querySubscription \
    #     --queryTimeout=20000 \
    #     --disableHistorical \
    #     --ipfsCID=$RESULT \
    #     --projectName=$project \
    #     --endpoint=$endpoint \
    #     --type=stage
    #     printf " ✅ New deployment in staging slot was executed from $STARTBLOCKSTG block! \n"
    # fi
fi
