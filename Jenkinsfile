@Library('jenkins-library')

String agentLabel             = 'docker-build-agent'
String registry               = 'docker.soramitsu.co.jp'
String dockerBuildToolsUserId = 'bot-build-tools-ro'
String dockerRegistryRWUserId = 'bot-sora2-rw'
String envImageName           = 'docker.soramitsu.co.jp/build-tools/node:16-ubuntu'
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
        stage('Install Dependicies') {
            environment {
                SUBQUERY_CLI_VERSION = '0.2.4'
                SUBQUERY_TOKEN = credentials("${SUBQUERY_TOKEN}")
                SUBQUERY_ORG =  'sora-xor'
                matrix_chain = 'sora-dev'
                
            }
            steps {
                script {
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
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

        stage('Push Image') {
            // when {
            //     expression { getPushVersion(pushTags) }
            // }
            steps {
                script {
                    sh "docker build -f housekeeping/docker/release/Dockerfile -t ${appImageName} ."
                    baseImageTag = "test2"
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
                        sh """
                            docker tag ${appImageName} ${appImageName}:${baseImageTag}
                            docker push ${appImageName}:${baseImageTag}
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
