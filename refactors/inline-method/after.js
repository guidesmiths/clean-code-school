class PizzaDelivery {
  constructor(name) {
      this.name = name,
      this.numberOfLateDeliveries = 0
  }
  setNumberOfDeliveries(numberOfLateDeliveries) {
      this.numberOfLateDeliveries = numberOfLateDeliveries;
  }
  getDeliveriesStatus(){
      return this.numberOfLateDeliveries > 5 ? 'Bad' : 'Good';
  }
  getRating() {
      return this.numberOfLateDeliveries > 5 ? 2 : 1;
  }
}

module.exports = PizzaDelivery;


