@Library('jenkins-library')
// only for dev environment
def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subquery',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:20-alpine',
    sonarProjectName:   'sora-subquery',
    sonarProjectKey:    'sora:sora-subquery',
    preBuildCmds:       ['yarn install', 'yarn codegen'],
    dockerImageTags:    ['sora-prod': 'prod'],
    dojoProductType:    'sora'
)
pipeline.runPipeline()
