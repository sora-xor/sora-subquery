@Library('jenkins-library')

String agentLabel             = 'docker-build-agent'
String registry               = 'docker.soramitsu.co.jp'
String dockerBuildToolsUserId = 'bot-build-tools-ro'
String dockerRegistryRWUserId = 'bot-sora2-rw'
String envImageName           = 'docker.soramitsu.co.jp/sora2/env'
String appImageName           = 'docker.soramitsu.co.jp/sora2/subquery'
Boolean disableSecretScanner  = false
Map pushTags                  = ['develop': 'dev','test': 'test2']

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
        stage('Build & Tests') {
            environment {
                // PACKAGE = 'framenode-runtime'
                // RUSTFLAGS = '-Dwarnings'
                // RUNTIME_DIR = 'runtime'
                SUBQUERY_CLI_VERSION = '0.2.4'
                SUBQUERY_ORG =  'sora-xor'
            }
            steps {
                script {
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
                            docker.image(envImageName + ':test2').inside() {
                                    featureList = 'include-real-files'
                                sh """
                                   mkdir -p $HOME/.local/bin
                                   curl -LO https://github.com/fewensa/subquery-cli/releases/download/v${env.SUBQUERY_CLI_VERSION}/subquery-linux-x86_64.zip
                                   unzip subquery-linux-x86_64.zip -d $HOME/.local/bin/
                                   rm -rf subquery-linux-x86_64.zip
                                """
                                archiveArtifacts artifacts:
                                    "framenode_runtime.compact.wasm, ${wasmReportFile}"
                             }
                         }
                     }
                 }
          }
        stage('Code Coverage') {
            when {
                expression { getPushVersion(pushTags) }
            }
            steps {
                script {
                    docker.withRegistry('https://' + registry, dockerRegistryRWUserId) {
                        docker.image(envImageName + ':test2').inside() {
                            sh './housekeeping/coverage.sh'
                            cobertura coberturaReportFile: 'cobertura_report'
                        }
                    }
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
                    // docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                    //     sh """
                    //         docker tag ${appImageName} sora2/subquery:${baseImageTag}
                    //         docker push sora2/substrate:${baseImageTag}
                    //     """
                    // }
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