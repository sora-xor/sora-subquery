@Library('jenkins-library')

String agentLabel             = 'docker-build-agent'
String registry               = 'docker.soramitsu.co.jp'
String dockerBuildToolsUserId = 'bot-build-tools-ro'
String dockerRegistryRWUserId = 'bot-sora2-rw'
String envImageName           = 'docker.soramitsu.co.jp/sora2/env'
String appImageName           = 'docker.soramitsu.co.jp/sora2/subquery'
Boolean disableSecretScanner  = false
Map pushTags                  = ['master': 'latest', 'develop': 'dev']
Map dockerImageTags           = ['PR-104': 'test2']

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
        stage('Build & Tests') {
            environment {
                // PACKAGE = 'framenode-runtime'
                // RUSTFLAGS = '-Dwarnings'
                // RUNTIME_DIR = 'runtime'
                SUBQUERY_CLI_VERSION = '0.2.4'
                SUBQUERY_ORG =  'sora-xor'
                matrix_chain = ''
            }
            steps {
                script {
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
                            docker.image(envImageName + ':test').inside() {
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
                    --org ${env.SUBQUERY_ORG} \
                    --key ${matrix.chain} \
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


        stage('Push Image') {
            when {
                expression { getPushVersion(pushTags) }
            }
            steps {
                script {
                    sh "docker build -f housekeeping/docker/release/Dockerfile -t ${appImageName} ."
                    baseImageTag = "${getPushVersion(pushTags)}"
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
                        sh """
                            docker tag ${appImageName} ${appImageName}:test2
                            docker push ${appImageName}:test2
                        """
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
