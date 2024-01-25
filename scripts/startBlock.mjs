import fs from 'fs-extra';
import yaml from 'js-yaml';
import yargs from 'yargs';

const configPath = 'project.yaml';

const argv = yargs(process.argv.slice(2))
  .option('startBlock', {
    alias: 'b',
    type: 'number',
    demandOption: true, // Make it a required argument
  })
  .argv;

async function main() {
  try {
    // Read project.yaml
    const fileContents = await fs.readFile(configPath, 'utf8');
    const config = yaml.load(fileContents);

    // Update the startBlock value
    config.dataSources[0].startBlock = argv.startBlock;

    // Convert updated config to YAML and write it back to the file
    const updatedConfig = yaml.dump(config);
    await fs.writeFile(configPath, updatedConfig, 'utf8');

    console.log('startBlock updated in project.yaml.');
   //console.log(updatedConfig);
  } catch (error) {
    console.error('An error occurred:', error);
    console.log(0);
  }
}

main();
