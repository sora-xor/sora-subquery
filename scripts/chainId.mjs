import { ApiPromise, WsProvider } from '@polkadot/api';
import fs from 'fs-extra';
import yaml from 'js-yaml';
const configPath = 'project.yaml';
const shouldUpdate = process.argv.includes('--update');

async function fetchChainId(endpoint) { 
	const wsProvider = new WsProvider(endpoint);
	const api = await ApiPromise.create({ provider: wsProvider });
	const chainId = api.genesisHash.toHex();
	await api.disconnect();
	console.log('Fetched chainId: ', chainId);
	return chainId
} async function main() { 
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
