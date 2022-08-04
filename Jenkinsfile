@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subquery',
    npmRegistries:      [:],
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:16-ubuntu',
    preBuildCmds:       ['yarn install', 'yarn codegen'],
    buildCmds:          ['yarn build']
)
pipeline.runPipeline()