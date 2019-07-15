

const formatRevenueToNumber = revenue => {
    return parseInt(revenue.replace(revenue.charAt(0), '').replace(/,/g, ''))
}

module.exports = ({domestic, international}) => {
    return `${formatRevenueToNumber(domestic) + formatRevenueToNumber(international)} - ${domestic.charAt(0)}`;
};