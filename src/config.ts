export const testLogMode = process.env.INDEXER_TEST_LOG_MODE ? process.env.INDEXER_TEST_LOG_MODE === 'true' : true
export const indexer = process.env.INDEXER || 'subquery'
