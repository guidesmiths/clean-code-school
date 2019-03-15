const logger = require('../common/logger');

const Customer = require('./customer');
const NullCustomer = require('./null-customer');

const getOrderCustomer = (orderId) => orderId === 51? new NullCustomer(): new Customer(888)

logger(getOrderCustomer(51));
logger(getOrderCustomer(44));
