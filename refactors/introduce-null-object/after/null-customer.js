/**
 * Applying Introduceing Null-object refactoring technique
 *
 * Why: to get rid of (maybe so many) checks for null object.
 * What: Introduce a specialized class modeling a null instance of the superclass
 * When: when you have a lot of conditionals all across the code, removing it improves readability and reduce code
 * Drawbacks: you have to get rid of all those conditionals and add another class to the hierarchy
 */
const Customer = require('./customer');

class NullCustomer extends Customer {
  getPlan() {
    return 'No plan for no customer';
  }

  getAddress() {
    return `No address for no customer`;
  }

  getStatus() {
    return false;
  }

  isNull() {
    return true;
  }
}

module.exports = NullCustomer;
