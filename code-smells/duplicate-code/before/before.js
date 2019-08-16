/*
Problem:
  Two code fragments look almost identical.
*/

const formatPrice = (price, decimals = 2) => {
  return ((Number.isInteger(price)) ? price : parseFloat(price).toLocaleString("es", { useGrouping: false, minimumFractionDigits: decimals, maximumFractionDigits: decimals }));
}

console.log(formatPrice(13.43333))