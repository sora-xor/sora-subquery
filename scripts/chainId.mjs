import fs from 'fs-extra';
import yaml from 'js-yaml';
import fetch from 'node-fetch';

const configPath = 'project.yaml';
const shouldUpdate = process.argv.includes('--update');

async function fetchChainId(endpoint) {
	const rpcUrl = endpoint.replace(/^ws(s)?:\/\/ws/, 'http$1://rpc');

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

	console.log('Fetched chainId: ', chainId);
	return chainId
}

async function main() { 
	try { 
		// Read project.yaml 
		const fileContents = await fs.readFile(configPath, 'utf8');
		const config = yaml.load(fileContents);
		const wsEndpoint = config.network.endpoint;
		const chainId = await fetchChainId(wsEndpoint) // Optionally update chainId in project.yaml
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
