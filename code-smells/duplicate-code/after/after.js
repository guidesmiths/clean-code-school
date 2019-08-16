/*
Solution:
*/

const fixDecimals = require('./utils');

formatPrice = (price) => {
  return ((Number.isInteger(price)) ? price : fixDecimals(price));
}

console.log(formatPrice(13.43333))