class Customer {
  constructor(id) {
    this.id = id
  }

  getPlan() {
    return `Plan for customer ${this.id}`;
  }

  getAddress() {
    return `Address for customer ${this.id}`
  }

  getStatus() {
    return true
  }
}

module.exports = Customer;
