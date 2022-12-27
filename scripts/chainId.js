const fetch = require('node-fetch');
const readYamlFile = require('read-yaml-file');

const configPath = 'project.yaml';

async function main() {
  try {
    const config = await readYamlFile(configPath);
    const wsEndpoint = config.network.endpoint;
    const rpcUrl = wsEndpoint.replace(/^ws(s)?:\/\/ws/, 'http$1://rpc');
    const request = {
      id: 1,
      jsonrpc: '2.0',
      method: 'chain_getBlockHash',
      params: [0],
    };
    const response = await fetch(rpcUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });
    const responseData = await response.json();
    const chainId = responseData.result;

    console.log(chainId);
  } catch (error) {
    console.log(0);
  }
}

main();