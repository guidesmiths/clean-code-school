const calendar = require('./calendar');
const CONSTANTS = require('./constants');

//refactored functions via Extract Method
const isWinter = (date) => {
    return calendar.before(date, CONSTANTS.SUMMER_START) || calendar.after(date, CONSTANTS.SUMMER_END);
}
const winterCharge = (quantity) => {
    return quantity * CONSTANTS.WINTER_RATE + CONSTANTS.WINTER_SERVICE_CHARGE;
}
const summerCharge = (quantity) => {
    return quantity * CONSTANTS.SUMMER_RATE;
}

//refactored method: Decompose Conditional
const getCharge = (quantity, date) => {
    if (isWinter(date)) {
        return winterCharge(quantity);
    }
    else {
        return summerCharge(quantity)
    }
}

//output
const charge = getCharge(3, new Date().getTime());
console.log(charge);