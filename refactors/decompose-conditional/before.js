const calendar = require('./calendar');
const CONSTANTS = require('./constants');

//code smell: Long Method
const getCharge = (quantity, date) => {
    if (calendar.before(date, CONSTANTS.SUMMER_START) || calendar.after(date, CONSTANTS.SUMMER_END)) {
        return quantity * CONSTANTS.WINTER_RATE + CONSTANTS.WINTER_SERVICE_CHARGE;
    }
    else {
        return quantity * CONSTANTS.SUMMER_RATE;
    }
}

//output
const charge = getCharge(3, new Date().getTime());
console.log(charge);