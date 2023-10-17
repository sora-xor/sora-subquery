@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subquery',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:14-ubuntu',
    sonarProjectName:   'sora-subquery',
    sonarProjectKey:    'sora:sora-subquery',
    preBuildCmds:       ['yarn install', 'yarn codegen'],
    dockerImageTags:    ['dev': 'dev'],
    dojoProductType:    'sora'
)
pipeline.runPipeline()