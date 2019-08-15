

const misunderstoodDirectors = ['John Carpenter'];

module.exports = (director, rotten_tomatoes_review) => {
	return misunderstoodDirectors.includes(director) ? rotten_tomatoes_review + 5 : rotten_tomatoes_review;
};