import { objectSpread } from '@polkadot/util';

import typesBundleJson from './typesBundle.json';

const sharedTypes = typesBundleJson.types;
const typesAlias = typesBundleJson.typesAlias;

const typesBundle = {
  spec: {
    sora: {
      alias: typesBundleJson.typesAlias,
      types: typesBundleJson.versions.map((version) => ({
        minmax: version.minmax,
        types: objectSpread({}, sharedTypes, version.types),
      })),
    },
  },
};

export default {
  types: sharedTypes,
  typesAlias,
  typesBundle,
};
