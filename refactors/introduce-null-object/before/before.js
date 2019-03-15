const Customer = require('./customer');
const logger = require('../common/logger');

const getOrderCustomer = (orderId) => orderId === 51? null: new Customer(orderId)

const customer = getOrderCustomer(51);
// Multiple of this ones all across the code
if (customer == null)
  console.log('No plan')
else
  logger(customer);
