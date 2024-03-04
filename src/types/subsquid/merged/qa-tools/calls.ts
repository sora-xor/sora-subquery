import * as stageCalls from '../../stage/qa-tools/calls'
import * as testCalls from '../../test/qa-tools/calls'
import * as devCalls from '../../dev/qa-tools/calls'


export const addToWhitelist = {
	name: 'QATools.add_to_whitelist',
	v69Stage: stageCalls.addToWhitelist['v69'],
	v69Test: testCalls.addToWhitelist['v69'],
}

export const removeFromWhitelist = {
	name: 'QATools.remove_from_whitelist',
	v69Stage: stageCalls.removeFromWhitelist['v69'],
	v69Test: testCalls.removeFromWhitelist['v69'],
}

export const orderBookCreateEmptyBatch = {
	name: 'QATools.order_book_create_empty_batch',
	v69Stage: stageCalls.orderBookCreateEmptyBatch['v69'],
	v69Test: testCalls.orderBookCreateEmptyBatch['v69'],
}

export const orderBookCreateAndFillBatch = {
	name: 'QATools.order_book_create_and_fill_batch',
	v69Stage: stageCalls.orderBookCreateAndFillBatch['v69'],
	v70Stage: stageCalls.orderBookCreateAndFillBatch['v70'],
	v71Stage: stageCalls.orderBookCreateAndFillBatch['v71'],
	v69Test: testCalls.orderBookCreateAndFillBatch['v69'],
	v70Test: testCalls.orderBookCreateAndFillBatch['v70'],
	v71Test: testCalls.orderBookCreateAndFillBatch['v71'],
	v70Dev: devCalls.orderBookCreateAndFillBatch['v70'],
}

export const orderBookFillBatch = {
	name: 'QATools.order_book_fill_batch',
	v71Stage: stageCalls.orderBookFillBatch['v71'],
	v71Test: testCalls.orderBookFillBatch['v71'],
	v70Dev: devCalls.orderBookFillBatch['v70'],
}
