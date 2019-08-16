const fixDecimals = (number, decimals = 2) => {
    return parseFloat(number).toLocaleString("es", { useGrouping: false, minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}