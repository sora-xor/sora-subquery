import * as productionEvents from '../../production/transaction-payment/events'
import * as stageEvents from '../../stage/transaction-payment/events'
import * as testEvents from '../../test/transaction-payment/events'
import * as devEvents from '../../dev/transaction-payment/events'


export const transactionFeePaid = {
	name: 'TransactionPayment.TransactionFeePaid',
	v53: productionEvents.transactionFeePaid['v53'],
	v52Stage: stageEvents.transactionFeePaid['v52'],
	v52Test: testEvents.transactionFeePaid['v52'],
	v70Dev: devEvents.transactionFeePaid['v70'],
}
