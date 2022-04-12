@Library('jenkins-library')

String agentLabel             = 'docker-build-agent'
String envImageName           = 'ubuntu:latest'
String subqueryToken          = 'subquery-token'

pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '20'))
        timestamps()
        disableConcurrentBuilds()
    }
    agent {
        docker {
            label agentLabel
            image envImageName
        }
    }   

    stages {
        stage('Install Dependicies & Deploy') {
            environment {
                SUBQUERY_CLI_VERSION = '0.2.4'
                SUBQUERY_ORG =  'sora-xor'
                matrix_chain =  'sora-dev'
                SUBQUERY_TOKEN = credentials("${subqueryToken}")
                
            }
            steps {
                script {
                    sh """
                       set -xe
                       apt-get update && apt-get install --no-install-recommends unzip -y && apt-get install --no-install-recommends jq curl ca-certificates -y
                       mkdir -p $HOME/.local/bin
                       curl -LO https://github.com/fewensa/subquery-cli/releases/download/v${SUBQUERY_CLI_VERSION}/subquery-linux-x86_64.zip
                       unzip subquery-linux-x86_64.zip -d $HOME/.local/bin/
                       rm -rf subquery-linux-x86_64.zip
                       /home/ubuntu/.local/bin/subquery --token ${SUBQUERY_TOKEN} deployment deploy \
                           --org ${SUBQUERY_ORG} \
                           --key ${matrix_chain} \
                           --branch develop \
                           --type stage \
                           --indexer-image-version v0.31.1 \
                           --query-image-version v0.13.0 \
                           --endpoint wss://ws.framenode-3.s3.dev.sora2.soramitsu.co.jp \
                           --force
                       echo "New deployment is executed"
                    """
                }
            }
        }
    }
    post {
        cleanup { cleanWs() }
      }
   }