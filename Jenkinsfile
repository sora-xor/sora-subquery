@Library('jenkins-library')

String agentLabel              = 'docker-build-agent'
String registry                = 'docker.soramitsu.co.jp'
String dockerRegistryRWUserId  = 'bot-sora2-rw'
String dockerImageName         = 'sora2/subquery'
String buidDockerImage         = 'docker.soramitsu.co.jp/build-tools/node:14-ubuntu'
Map preBuildCmds               = ['yarn install', 'yarn codegen']
Map pushTags                   = ['develop': 'dev']

pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '20'))
        timestamps()
        disableConcurrentBuilds()
    }
    agent {
        label agentLabel
    }
    stages {
        stage('Install dependencies') {
            script {
              sh """
                mkdir -p $HOME/.local/bin
                curl -LO https://github.com/fewensa/subquery-cli/releases/download/v${ env.SUBQUERY_CLI_VERSION }/subquery-linux-x86_64.zip
                unzip subquery-linux-x86_64.zip -d $HOME/.local/bin/
                rm -rf subquery-linux-x86_64.zip
              """
            }
        stage('Deploy') {
            script {
                sh """ 
                  set -xe
                  subquery --token ${ secrets.SUBQUERY_TOKEN } deployment deploy \
                  --org ${ env.SUBQUERY_ORG } \
                  --key ${ matrix.chain } \
                  --branch develop \
                  --sub-folder subql/${ matrix.chain } \
                  --type stage \
                  --indexer-image-version v0.28.2 \
                  --query-image-version v0.12.0 \
                  --endpoint wss://ws.framenode-3.s3.dev.sora2.soramitsu.co.jp \
                  --force
                  echo "New deployment is executed"
                """
            }
        }
    }
}
    post {
        always {
            script{
                gitNotify('main-CI', currentBuild.result, currentBuild.result)
            }
        }
        cleanup { cleanWs() }
        }
    }   
}
