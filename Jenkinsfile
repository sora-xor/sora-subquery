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
    preBuildCmds:       ['yarn install'],
    buildCmds: [
        "hash=\$(yarn config:chainId | grep -oE '0.*' | grep -v 's'); \
        sed -i '/chainId:/s/'0'/'\$hash'/' project.yaml; \
        cat project.yaml; \
        yarn codegen; \
        yarn build"
    ],
    dockerImageTags:    ['dev': 'dev'],
    dojoProductType:    'sora'
)
pipeline.runPipeline()
