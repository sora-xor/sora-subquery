import * as productionStorage from '../../production/leaf-provider/storage'
import * as stageStorage from '../../stage/leaf-provider/storage'
import * as testStorage from '../../test/leaf-provider/storage'
import * as devStorage from '../../dev/leaf-provider/storage'


export const latestDigest = {
	name: 'LeafProvider.LatestDigest',
	v64: productionStorage.latestDigest['v64'],
	v70: productionStorage.latestDigest['v70'],
	v52Stage: stageStorage.latestDigest['v52'],
	v54Stage: stageStorage.latestDigest['v54'],
	v70Stage: stageStorage.latestDigest['v70'],
	v52Test: testStorage.latestDigest['v52'],
	v54Test: testStorage.latestDigest['v54'],
	v70Test: testStorage.latestDigest['v70'],
	v70Dev: devStorage.latestDigest['v70'],
}
