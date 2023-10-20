import fetch from 'node-fetch';
import fs from 'fs-extra';
import yaml from 'js-yaml';

const configPath = 'project.yaml';

const shouldUpdate = process.argv.includes('--update');

async function main() {
  try {
    // Read project.yaml
    const fileContents = await fs.readFile(configPath, 'utf8');
    const config = yaml.load(fileContents);
    const wsEndpoint = config.network.endpoint;
    const rpcUrl = wsEndpoint.replace(/^ws(s)?:\/\/ws/, 'http$1://rpc');

    // Fetch chainId using an RPC request
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

    // Output the fetched chainId
    console.log(`Fetched chainId: ${chainId}`);

    // Optionally update chainId in project.yaml
    if (shouldUpdate) {
      config.network.chainId = chainId;
      const updatedYaml = yaml.dump(config);
      await fs.writeFile(configPath, updatedYaml, 'utf8');
      console.log('ChainId updated in project.yaml.');
    }

  } catch (error) {
    console.error('An error occurred:', error);
    console.log(0);
  }
}

main();
