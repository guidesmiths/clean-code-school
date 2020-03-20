class Food {
  constructor(amount) {
    this.amount = amount;
  }
}

class Sausage extends Food { }
class Cheese extends Food { }

module.exports = {
  Sausage,
  Cheese,
}