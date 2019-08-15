

const ratingsByCalssification = [
	{
		rating: 'R',
		classification: 'horror'
	},
	{
		rating: 'PG-13',
		classification: 'thriller'
	}
]

module.exports = classifications => {
	return ratingsByCalssification.filter(({classification}) => classifications.includes(classification))[0].rating;
};