@Library('jenkins-library')

String agentLabel             = 'docker-build-agent'
String registry               = 'docker.soramitsu.co.jp'
String dockerBuildToolsUserId = 'bot-build-tools-ro'
String dockerRegistryRWUserId = 'bot-sora2-rw'
String envImageName           = 'docker.soramitsu.co.jp/sora2/env'
String appImageName           = 'docker.soramitsu.co.jp/sora2/subquery'
Map pushTags                  = ['test': 'test']

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
        stage('Secret scanner') {
            steps {
                script {
                    gitNotify('main-CI', 'PENDING', 'This commit is being built')
                    docker.withRegistry('https://' + registry, dockerBuildToolsUserId) {
                        secretScanner(disableSecretScanner, secretScannerExclusion)
                    }
                }
            }
        }
        stage('Install Dependencies') {
            environment {
                SUBQUERY_CLI_VERSION = '0.2.1'
                SUBQUERY_ORG = 'sora-xor'
                RUNTIME_DIR = '$HOME/.local/bin'
                SUBQUERY_TOKEN = "${SUBQUERY_TOKEN}"
                MATRIX_CHAIN = "sora-dev"
            }
            steps {
                script {
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
                        getPushVersion(pushTags) {
                               env.TAG_NAME =~ 'test.*' {
                                sh """
                                    mkdir -p ${RUNTIME_DIR}
                                    curl -LO https://github.com/fewensa/subquery-cli/releases/download/v${SUBQUERY_CLI_VERSION}/subquery-linux-x86_64.zip
                                    unzip subquery-linux-x86_64.zip -d ${RUNTIME_DIR}
                                    rm -rf subquery-linux-x86_64.zip
                                """
                        }
                    }
                }
            }
        }
    }
        stage('Deployment') {
            steps {
                script {
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
                        docker.image(envImageName + ':test').inside() {
                            sh """
                               set -xe
                               subquery --token ${SUBQUERY_TOKEN} deployment deploy
                               --org ${SUBQUERY_ORG}
                               --key ${MATRIX_CHAIN}
                               --sub-folder subql/${MATRIX_CHAIN}
                               --type stage
                               --indexer-image-version v0.28.2
                               --query-image-version v0.12.0
                               --endpoint wss://ws.framenode-3.s3.dev.sora2.soramitsu.co.jp
                               --force
                            """
                        }
                    }
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
