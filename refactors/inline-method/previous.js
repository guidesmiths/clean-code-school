/**
 * This is the situation previous to the before.js 
 * In this case the 'moreThanFiveLateDeliveries()' method has a long body
 * A change in the requirements will drive the code in the before.js situation 
 */

class PizzaDelivery {
    constructor(name) {
        this.name = name,
        this.numberOfLateDeliveries = {
            forAccident: 0,
            forWrongDirection: 0,
            forNaturalDisaster: 0
        } 
    }
    setNumberOfDeliveries(numberOfLateDeliveries) {
        this.numberOfLateDeliveries = numberOfLateDeliveries;
    }
    moreThanFiveLateDeliveries() {
        let numberOfLateDeliveriesWeightedSum = 0;
        numberOfLateDeliveriesWeightedSum += this.numberOfLateDeliveries.forAccident * 0.7;
        numberOfLateDeliveriesWeightedSum += this.numberOfLateDeliveries.forWrongDirection * 0.5;
        numberOfLateDeliveriesWeightedSum += this.numberOfLateDeliveries.forNaturalDisaster * 0.1;
        return numberOfLateDeliveriesWeightedSum > 5;
    }
    getDeliveriesStatus(){
        return this.moreThanFiveLateDeliveries() ? 'Bad' : 'Good';
    }
    getRating() {
        return this.moreThanFiveLateDeliveries() ? 2 : 1;
    }
}

module.exports = PizzaDelivery;


