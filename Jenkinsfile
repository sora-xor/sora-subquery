@Library('jenkins-library')

String agentLabel             = 'docker-build-agent'
String registry               = 'docker.soramitsu.co.jp'
String dockerBuildToolsUserId = 'bot-build-tools-ro'
String dockerRegistryRWUserId = 'bot-sora2-rw'
String envImageName           = 'docker.soramitsu.co.jp/build-tools/node:16-ubuntu'

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
        stage('Install Dependicies') {
            environment {
                SUBQUERY_CLI_VERSION = '0.2.4'
                SUBQUERY_ORG =  'sora-xor'
                matrix_chain = 'sora-dev'
                SUBQUERY_TOKEN = credentials("${SUBQUERY_TOKEN}")
                
            }
            steps {
                script {
                    docker.withRegistry('https://' + registry, dockerBuildToolsUserId) {
                            docker.image(envImageName).inside() {
                                sh """
                                   apt-get update && apt-get install --no-install-recommends unzip -y && apt-get install --no-install-recommends jq -y
                                   mkdir -p $HOME/.local/bin
                                   curl -LO https://github.com/fewensa/subquery-cli/releases/download/v${SUBQUERY_CLI_VERSION}/subquery-linux-x86_64.zip
                                   unzip subquery-linux-x86_64.zip -d $HOME/.local/bin/
                                   rm -rf subquery-linux-x86_64.zip
                                """
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh """
                    set-xe
                    subquery --token ${SUBQUERY_TOKEN} deployment deploy \
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
        always {
            script{
                gitNotify('main-CI', currentBuild.result, currentBuild.result)
            }
        }
        cleanup { cleanWs() }
    }
}
