@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subquery',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:14-ubuntu',
    sonarProjectName:   'sora-subquery',
    sonarProjectKey:    'jp.co.soramitsu:sora-subquery',
    preBuildCmds:       ['yarn install', 'yarn codegen'],
    dockerImageTags:    ['prod-sub4': 'prod-sub4']
)
pipeline.runPipeline()