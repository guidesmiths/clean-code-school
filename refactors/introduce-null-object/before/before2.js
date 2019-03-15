const Customer = require('./customer');
const logger = require('./logger');

const getCustomerFromPhone = (phoneNumber) => phoneNumber === '987654832'? null: new Customer(999)

const customer = getCustomerFromPhone('987987987');
// Multiple of this ones all across the code
if (customer == null)
  console.log('No plan');
else
  logger(customer);
