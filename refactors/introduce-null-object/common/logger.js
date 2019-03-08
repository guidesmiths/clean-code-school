const logger = (customer) => {
  const message = [
    `Address: ${customer.getAddress()}`,
    `Plan: ${customer.getPlan()}`,
    `Status: ${customer.getStatus()}`
  ]
  .join('\n');
  console.log(message)
}

module.exports = logger;
