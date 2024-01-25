import fs from 'fs-extra';
import yaml from 'js-yaml';
import fetch from 'node-fetch';

const configPath = 'project.yaml';
const shouldUpdate = process.argv.includes('--update');

function getRpcEndpoint(wsEndpoint) {
	return wsEndpoint.replace(/^ws(s)?:\/\/(ws)?/, (_, p1, p2) => {
		let str = 'http';
		if (p1) str += p1;
		str += '://';
		if (p2) str += 'rpc';
		return str;
	})
}

async function fetchChainId(endpoint) {
	const rpcUrl = getRpcEndpoint(endpoint);

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
		const wsEndpoints = config.network.endpoint;
		const wsEndpoint = Array.isArray(wsEndpoints) ? wsEndpoints[0] : wsEndpoints;
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
