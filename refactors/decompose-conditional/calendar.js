const before = (date, limit) => {
    return date < limit;
}
const after = (date, limit) => {
    return limit < date;
}

module.exports = {
    before,
    after,
}