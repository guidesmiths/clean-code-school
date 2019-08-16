/*
Solution:
  Extract Method
*/

const fixDecimals = require('./utils');

const extractDecimals = (amount) => {
  if (Number.isInteger(amount)) return 0;
  const sNum = this.replaceAll(amount.toString(), ',', '.');
  const num = sNum.indexOf('.');
  const result = String(amount).substring((num + 1));
  return result
}

console.log(extractDecimals(fixDecimals(13.201)))