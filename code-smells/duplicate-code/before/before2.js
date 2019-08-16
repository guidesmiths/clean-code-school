/*
Problem:
  Two code fragments look almost identical.
*/

const extractDecimals = (amount) => {
  if (Number.isInteger(amount)) return 0;
  const sNum = this.replaceAll(amount.toString(), ',', '.');
  const num = sNum.indexOf('.');
  const result = String(amount).substring((num + 1));
  return result
}

const fixDecimals = (number, decimals = 2) => {
  return parseFloat(number).toLocaleString("es", { useGrouping: false, minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

console.log(extractDecimals(fixDecimals(13.201)))