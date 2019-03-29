/**
 * This situation is the result of the requirements' change in after.js 
 * In this case the 'moreThanFiveLateDeliveries()' method body is more obvious than the method itself.
 * Solution --> Replace calls to the method with the method’s content and delete the method itself.
 */

class PizzaDelivery {
  constructor(name) {
      this.name = name,
      this.numberOfLateDeliveries = 0
  }
  setNumberOfDeliveries(numberOfLateDeliveries) {
      this.numberOfLateDeliveries = numberOfLateDeliveries;
  }
  moreThanFiveLateDeliveries() {
      return this.numberOfLateDeliveries > 5;
  }
  getDeliveriesStatus(){
      return this.moreThanFiveLateDeliveries() ? 'Bad' : 'Good';
  }
  getRating() {
      return this.moreThanFiveLateDeliveries() ? 2 : 1;
  }
}

module.exports = PizzaDelivery;


