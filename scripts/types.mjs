import { types } from '@sora-substrate/type-definitions';
import fs from 'fs-extra';

async function main() {
    const sorted = Object.keys(types).sort().reduce((acc, key) => ({ ...acc, [key]: types[key] }), {});
    await fs.writeFile('types.json', JSON.stringify({ types: sorted }, null, 4));
}

main();