@Library('jenkins-library')

def pipeline = new org.js.AppPipeline(
    steps:              this,
    test:               false,
    dockerRegistryCred: 'bot-sora2-rw',
    dockerImageName:    'sora2/subquery',
    buildDockerImage:   'docker.soramitsu.co.jp/build-tools/node:20-alpine',
    sonarProjectName:   'sora-subquery',
    sonarProjectKey:    'sora:sora-subquery',
    preBuildCmds:       ['yarn install'],
    buildCmds:          ['HASH="\$(yarn config:chainId | grep -oE "0.*" | grep -v "s")"', 
                        "sed -i 's/chainId: 0/chainId: \$HASH/' project.yaml",
                        'yarn codegen'],
    dockerImageTags:    ['dev': 'dev'],
    dojoProductType:    'sora'
)
pipeline.runPipeline()
